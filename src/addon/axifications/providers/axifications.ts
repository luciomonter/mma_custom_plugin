// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injectable } from '@angular/core';
import { CoreAppProvider } from '@providers/app';
import { CoreLoggerProvider } from '@providers/logger';
import { CoreSitesProvider } from '@providers/sites';
import { CoreTimeUtilsProvider } from '@providers/utils/time';
import { CoreUserProvider } from '@core/user/providers/user';
import { CoreEmulatorHelperProvider } from '@core/emulator/providers/helper';


/**
 * Service to handle axifications.
 */
@Injectable()
export class AddonAxificationsProvider {

    static READ_CHANGED_EVENT = 'addon_axifications_read_changed_event';
    static READ_CRON_EVENT = 'addon_axifications_read_cron_event';
    static PUSH_SIMULATION_COMPONENT = 'AddonAxificationsPushSimulation';
    static LIST_LIMIT = 20;

    protected ROOT_CACHE_KEY = 'mmaAxifications:';
    protected logger;

    constructor(logger: CoreLoggerProvider, private appProvider: CoreAppProvider, private sitesProvider: CoreSitesProvider,
            private timeUtils: CoreTimeUtilsProvider, private userProvider: CoreUserProvider,
            private emulatorHelper: CoreEmulatorHelperProvider
			) {
        this.logger = logger.getInstance('AddonAxificationsProvider');
		
		console.log("-------------------------------> Axifications Provider");
		/*
		// Optionally request the permission early
		this.qrScanner.prepare()
		  .then((status: QRScannerStatus) => {
			 if (status.authorized) {
			   // camera permission was granted


			   // start scanning
			   let scanSub = this.qrScanner.scan().subscribe((text: string) => {
				 console.log('Scanned something', text);

				 this.qrScanner.hide(); // hide camera preview
				 scanSub.unsubscribe(); // stop scanning
			   });

			 } else if (status.denied) {
			   // camera permission was permanently denied
			   // you must use QRScanner.openSettings() method to guide the user to the settings page
			   // then they can grant the permission from there
			 } else {
			   // permission was denied, but not permanently. You can ask for permission again at a later time.
			 }
		  })
		  .catch((e: any) => console.log('Error is', e));
		*/

    }

    /**
     * Function to format axification data.
     *
     * @param {any[]} axifications List of axifications.
     */
    protected formatAxificationsData(axifications: any[]): void {
        axifications.forEach((axification) => {
            // Set message to show.
            if (axification.contexturl && axification.contexturl.indexOf('/mod/forum/')) {
                axification.mobiletext = axification.smallmessage;
            } else {
                axification.mobiletext = axification.fullmessage;
            }
            // Try to set courseid the axification belongs to.
            const cid = axification.fullmessagehtml.match(/course\/view\.php\?id=([^"]*)/); //" 
            if (cid && cid[1]) {
                axification.courseid = cid[1];
            }
            if (axification.useridfrom > 0) {
                // Try to get the profile picture of the user.
                this.userProvider.getProfile(axification.useridfrom, axification.courseid, true).then((user) => {
                    axification.profileimageurlfrom = user.profileimageurl;
                }).catch(() => {
                    // Error getting user. This can happen if device is offline or the user is deleted.
                });
            }
        });
    } 

    /**
     * Get the cache key for the get axification preferences call.
     *
     * @return {string} Cache key.
     */
    protected getAxificationPreferencesCacheKey(): string {
        return this.ROOT_CACHE_KEY + 'axificationPreferences';
    }

    /**
     * Get axification preferences.
     *
     * @param {string} [siteId] Site ID. If not defined, use current site.
     * @return {Promise<any>} Promise resolved with the axification preferences.
     */
    getAxificationPreferences(siteId?: string): Promise<any> {
        this.logger.debug('Get axification preferences');

        return this.sitesProvider.getSite(siteId).then((site) => {
            const preSets = {
                cacheKey: this.getAxificationPreferencesCacheKey()
            };

            return site.read('core_message_get_user_axification_preferences', {}, preSets).then((data) => {
                return data.preferences;
            });
        });
    }

    /**
     * Get cache key for axification list WS calls.
     *
     * @return {string} Cache key.
     */
    protected getAxificationsCacheKey(): string {
        return this.ROOT_CACHE_KEY + 'list';
    }

    /**
     * Get axifications from site.
     *
     * @param {boolean} read True if should get read axifications, false otherwise.
     * @param {number} limitFrom Position of the first axification to get.
     * @param {number} limitNumber Number of axifications to get or 0 to use the default limit.
     * @param {boolean} [toDisplay=true] True if axifications will be displayed to the user, either in view or in a axification.
     * @param {boolean} [forceCache] True if it should return cached data. Has priority over ignoreCache.
     * @param {boolean} [ignoreCache] True if it should ignore cached data (it will always fail in offline or server down).
     * @param {string} [siteId] Site ID. If not defined, use current site.
     * @return {Promise<any[]>} Promise resolved with axifications.
     */
    getAxifications(read: boolean, limitFrom: number, limitNumber: number = 0, toDisplay: boolean = true,
            forceCache?: boolean, ignoreCache?: boolean, siteId?: string): Promise<any[]> {
        limitNumber = limitNumber || AddonAxificationsProvider.LIST_LIMIT;
        this.logger.debug('Get ' + (read ? 'read' : 'unread') + ' axifications from ' + limitFrom + '. Limit: ' + limitNumber);

        return this.sitesProvider.getSite(siteId).then((site) => {
            const data = {
                useridto: site.getUserId(),
                useridfrom: 0,
                type: 'notifications',
                read: read ? 1 : 0,
                newestfirst: 1,
                limitfrom: limitFrom,
                limitnum: limitNumber
            };
            const preSets: object = {
                cacheKey: this.getAxificationsCacheKey(),
                omitExpires: forceCache,
                getFromCache: forceCache || !ignoreCache,
                emergencyCache: forceCache || !ignoreCache,
            };

            // Get unread axifications.
            //return site.read('core_axmessage_get_axmessages', data, preSets).then((response) => {
            return site.read('tool_lp_data_for_user_evidence_page', data, preSets).then((response) => {
                if (response.messages) {
                    const axifications = response.messages;
                    this.formatAxificationsData(axifications);
                    if (this.appProvider.isDesktop() && toDisplay && !read && limitFrom === 0) {
                        // Store the last received axification. Don't block the user for this.
                        this.emulatorHelper.storeLastReceivedAxification(
                            AddonAxificationsProvider.PUSH_SIMULATION_COMPONENT, axifications[0], siteId);
                    }

                    return axifications;
                } else {
                    return Promise.reject(null);
                }
            });
        });
    }

    /**
     * Get read axifications from site.
     *
     * @param {number} limitFrom Position of the first axification to get.
     * @param {number} limitNumber Number of axifications to get.
     * @param {boolean} [toDisplay=true] True if axifications will be displayed to the user, either in view or in a axification.
     * @param {boolean} [forceCache] True if it should return cached data. Has priority over ignoreCache.
     * @param {boolean} [ignoreCache] True if it should ignore cached data (it will always fail in offline or server down).
     * @param {string} [siteId] Site ID. If not defined, use current site.
     * @return {Promise<any[]>} Promise resolved with axifications.
     */
    getReadAxifications(limitFrom: number, limitNumber: number, toDisplay: boolean = true,
            forceCache?: boolean, ignoreCache?: boolean, siteId?: string): Promise<any[]> {
        return this.getAxifications(true, limitFrom, limitNumber, toDisplay, forceCache, ignoreCache, siteId);
    }

    /**
     * Get unread axifications from site.
     *
     * @param {number} limitFrom Position of the first axification to get.
     * @param {number} limitNumber Number of axifications to get.
     * @param {boolean} [toDisplay=true] True if axifications will be displayed to the user, either in view or in a axification.
     * @param {boolean} [forceCache] True if it should return cached data. Has priority over ignoreCache.
     * @param {boolean} [ignoreCache] True if it should ignore cached data (it will always fail in offline or server down).
     * @param {string} [siteId] Site ID. If not defined, use current site.
     * @return {Promise<any[]>} Promise resolved with axifications.
     */
    getUnreadAxifications(limitFrom: number, limitNumber: number, toDisplay: boolean = true,
            forceCache?: boolean, ignoreCache?: boolean, siteId?: string): Promise<any[]> {
        return this.getAxifications(false, limitFrom, limitNumber, toDisplay, forceCache, ignoreCache, siteId);
    }

    /**
     * Get unread axifications count. Do not cache calls.
     *
     * @param {number} [userId] The user id who received the axification. If not defined, use current user.
     * @param {string} [siteId] Site ID. If not defined, use current site.
     * @return {Promise<number>} Promise resolved with the message axifications count.
     */
    getUnreadAxificationsCount(userId?: number, siteId?: string): Promise<number> {
        return this.sitesProvider.getSite(siteId).then((site) => {
            // @since 3.2
            if (site.wsAvailable('message_popup_get_unread_popup_axification_count')) {
                userId = userId || site.getUserId();
                const params = {
                    useridto: userId
                };
                const preSets = {
                    getFromCache: false,
                    emergencyCache: false,
                    saveToCache: false,
                    typeExpected: 'number'
                };

                return site.read('message_popup_get_unread_popup_axification_count', params, preSets).catch(() => {
                    // Return no messages if the call fails.
                    return 0;
                });
            }

            // Fallback call.
            const limit = AddonAxificationsProvider.LIST_LIMIT + 1;

            return this.getUnreadAxifications(0, limit, false, false, false, siteId).then((unread) => {
                // Add + sign if there are more than the limit reachable.
                return (unread.length > AddonAxificationsProvider.LIST_LIMIT) ?
                    AddonAxificationsProvider.LIST_LIMIT + '+' : unread.length;
            }).catch(() => {
                // Return no messages if the call fails.
                return 0;
            });
        });
    }

    /**
     * Mark all message axification as read.
     *
     * @returns {Promise<any>} Resolved when done.
     * @since 3.2
     */
    markAllAxificationsAsRead(): Promise<any> {
        const params = {
            useridto: this.sitesProvider.getCurrentSiteUserId()
        };

        return this.sitesProvider.getCurrentSite().write('core_message_mark_all_axifications_as_read', params);
    }

    /**
     * Mark message axification as read.
     *
     * @param {number} axificationId ID of axification to mark as read
     * @returns {Promise<any>} Resolved when done.
     */
    markAxificationRead(axificationId: number): Promise<any> {
        const params = {
            messageid: axificationId,
            timeread: this.timeUtils.timestamp()
        };

        return this.sitesProvider.getCurrentSite().write('core_message_mark_message_read', params);
    }

    /**
     * Invalidate get axification preferences.
     *
     * @param {string} [siteId] Site ID. If not defined, current site.
     * @return {Promise<any>} Promise resolved when data is invalidated.
     */
    invalidateAxificationPreferences(siteId?: string): Promise<any> {
        return this.sitesProvider.getSite(siteId).then((site) => {
            return site.invalidateWsCacheForKey(this.getAxificationPreferencesCacheKey());
        });
    }

    /**
     * Invalidates axifications list WS calls.
     *
     * @param {string} [siteId] Site ID. If not defined, current site.
     * @return {Promise<any>} Promise resolved when the list is invalidated.
     */
    invalidateAxificationsList(siteId?: string): Promise<any> {
        return this.sitesProvider.getSite(siteId).then((site) => {
            return site.invalidateWsCacheForKey(this.getAxificationsCacheKey());
        });
    }

    /**
     * Returns whether or not we can mark all axifications as read.
     *
     * @return {boolean} True if enabled, false otherwise.
     * @since 3.2
     */
    isMarkAllAxificationsAsReadEnabled(): boolean {
        return this.sitesProvider.wsAvailableInCurrentSite('core_message_mark_all_axifications_as_read');
    }

    /**
     * Returns whether or not we can count unread axifications precisely.
     *
     * @return {boolean} True if enabled, false otherwise.
     * @since 3.2
     */
    isPreciseAxificationCountEnabled(): boolean {
        return this.sitesProvider.wsAvailableInCurrentSite('message_popup_get_unread_popup_axification_count');
    }

    /**
     * Returns whether or not the axification preferences are enabled for the current site.
     *
     * @return {boolean} True if enabled, false otherwise.
     * @since 3.2
     */
    isAxificationPreferencesEnabled(): boolean {
        return this.sitesProvider.wsAvailableInCurrentSite('core_message_get_user_axification_preferences');
    }
}
