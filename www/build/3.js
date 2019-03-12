webpackJsonp([3],{

/***/ 1788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonAxificationsListPageModule", function() { return AddonAxificationsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(1911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list__ = __webpack_require__(1913);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AddonAxificationsListPageModule = /** @class */ (function () {
    function AddonAxificationsListPageModule() {
    }
    AddonAxificationsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__list__["a" /* AddonAxificationsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__list__["a" /* AddonAxificationsListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonAxificationsComponentsModule */],
            ],
        })
    ], AddonAxificationsListPageModule);
    return AddonAxificationsListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 1911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonAxificationsComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_actions__ = __webpack_require__(1912);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddonAxificationsComponentsModule = /** @class */ (function () {
    function AddonAxificationsComponentsModule() {
    }
    AddonAxificationsComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__actions_actions__["a" /* AddonAxificationsActionsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__actions_actions__["a" /* AddonAxificationsActionsComponent */]
            ],
        })
    ], AddonAxificationsComponentsModule);
    return AddonAxificationsComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 1912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonAxificationsActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_contentlinks_providers_delegate__ = __webpack_require__(33);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component that displays the actions for a axification.
 */
var AddonAxificationsActionsComponent = /** @class */ (function () {
    function AddonAxificationsActionsComponent(contentLinksDelegate) {
        this.contentLinksDelegate = contentLinksDelegate;
        this.actions = [];
    }
    /**
     * Component being initialized.
     */
    AddonAxificationsActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentLinksDelegate.getActionsFor(this.contextUrl, this.courseId).then(function (actions) {
            _this.actions = actions;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AddonAxificationsActionsComponent.prototype, "contextUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], AddonAxificationsActionsComponent.prototype, "courseId", void 0);
    AddonAxificationsActionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-axifications-actions',template:/*ion-inline-start:"C:\wamp\www\AX-MOODLE_MOBILE_APP\mma_custom_plugin\src\addon\axifications\components\actions\addon-axifications-actions.html"*/'<ion-row *ngIf="actions && actions.length > 0" justify-content-around>\n\n    <ion-col *ngFor="let action of actions">\n\n        <button ion-button icon-left clear small block (click)="action.action()">\n\n            <ion-icon name="{{action.icon}}"></ion-icon>\n\n            {{ action.message | translate }}\n\n        </button>\n\n    </ion-col>\n\n</ion-row>\n\n'/*ion-inline-end:"C:\wamp\www\AX-MOODLE_MOBILE_APP\mma_custom_plugin\src\addon\axifications\components\actions\addon-axifications-actions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_contentlinks_providers_delegate__["a" /* CoreContentLinksDelegate */]])
    ], AddonAxificationsActionsComponent);
    return AddonAxificationsActionsComponent;
}());

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 1913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonAxificationsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_text__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_axifications__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addon_pushnotifications_providers_delegate__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_qr_scanner__ = __webpack_require__(2036);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Page that displays the list of axifications.
 */
var AddonAxificationsListPage = /** @class */ (function () {
    function AddonAxificationsListPage(navParams, domUtils, eventsProvider, sitesProvider, textUtils, utils, axificationsProvider, pushNotificationsDelegate, qrScanner) {
        var _this = this;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.textUtils = textUtils;
        this.utils = utils;
        this.axificationsProvider = axificationsProvider;
        this.pushNotificationsDelegate = pushNotificationsDelegate;
        this.qrScanner = qrScanner;
        this.axifications = [];
        this.axificationsLoaded = false;
        this.canLoadMore = false;
        this.canMarkAllAxificationsAsRead = false;
        this.loadingMarkAllAxificationsAsRead = false;
        this.readCount = 0;
        this.unreadCount = 0;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                alert("granted!");
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    }
    /**
     * View loaded.
     */
    AddonAxificationsListPage.prototype.ionViewDidLoad = function () {
        /*
        this.fetchAxifications().finally(() => {
            this.axificationsLoaded = true;
        });
                
        this.cronObserver = this.eventsProvider.on(AddonAxificationsProvider.READ_CRON_EVENT, () => this.refreshAxifications(),
                this.sitesProvider.getCurrentSiteId());

                
        this.pushObserver = this.pushNotificationsDelegate.on('receive').subscribe((notification) => {
            // New notification received. If it's from current site, refresh the data.
            if (this.utils.isTrueOrOne(notification.notif) && this.sitesProvider.isCurrentSite(notification.site)) {
                this.refreshAxifications();
            }
        });
        */
        this.axificationsLoaded = true;
        jQuery(document).ready(function () {
            console.log("ax ready!");
            //alert("axification READY");
        });
        // Optionally request the permission early
        /*
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
    };
    /**
     * Convenience function to get axifications. Gets unread axifications first.
     *
     * @param {boolean} refreh Whether we're refreshing data.
     * @return {Promise<any>} Resolved when done.
     */
    AddonAxificationsListPage.prototype.fetchAxifications = function (refresh) {
        var _this = this;
        if (refresh) {
            this.readCount = 0;
            this.unreadCount = 0;
        }
        var limit = __WEBPACK_IMPORTED_MODULE_7__providers_axifications__["a" /* AddonAxificationsProvider */].LIST_LIMIT;
        return this.axificationsProvider.getUnreadAxifications(this.unreadCount, limit).then(function (unread) {
            var promises = [];
            unread.forEach(_this.formatText.bind(_this));
            /* Don't add the unread axifications to this.axifications yet. If there are no unread axifications
               that causes that the "There are no axifications" message is shown in pull to refresh. */
            _this.unreadCount += unread.length;
            if (unread.length < limit) {
                // Limit not reached. Get read axifications until reach the limit.
                var readLimit_1 = limit - unread.length;
                promises.push(_this.axificationsProvider.getReadAxifications(_this.readCount, readLimit_1).then(function (read) {
                    read.forEach(_this.formatText.bind(_this));
                    _this.readCount += read.length;
                    if (refresh) {
                        _this.axifications = unread.concat(read);
                    }
                    else {
                        _this.axifications = _this.axifications.concat(unread, read);
                    }
                    _this.canLoadMore = read.length >= readLimit_1;
                }).catch(function (error) {
                    if (unread.length == 0) {
                        //alert("ax error");
                        _this.domUtils.showErrorModalDefault(error, 'addon.axifications.errorgetaxifications', true);
                        _this.canLoadMore = false; // Set to false to prevent infinite calls with infinite-loading.
                    }
                }));
            }
            else {
                if (refresh) {
                    _this.axifications = unread;
                }
                else {
                    _this.axifications = _this.axifications.concat(unread);
                }
                _this.canLoadMore = true;
            }
            return Promise.all(promises).then(function () {
                // Mark retrieved axifications as read if they are not.
                _this.markAxificationsAsRead(unread);
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.axifications.errorgetaxifications', true);
            _this.canLoadMore = false; // Set to false to prevent infinite calls with infinite-loading.
        });
    };
    /**
     * Mark all axifications as read.
     */
    AddonAxificationsListPage.prototype.markAllAxificationsAsRead = function () {
        var _this = this;
        this.loadingMarkAllAxificationsAsRead = true;
        this.axificationsProvider.markAllAxificationsAsRead().catch(function () {
            // Omit failure.
        }).finally(function () {
            var siteId = _this.sitesProvider.getCurrentSiteId();
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_7__providers_axifications__["a" /* AddonAxificationsProvider */].READ_CHANGED_EVENT, null, siteId);
            _this.axificationsProvider.getUnreadAxificationsCount().then(function (unread) {
                _this.canMarkAllAxificationsAsRead = unread > 0;
                _this.loadingMarkAllAxificationsAsRead = false;
            });
        });
    };
    /**
     * Mark axifications as read.
     *
     * @param {any[]} axifications Array of notification objects.
     */
    AddonAxificationsListPage.prototype.markAxificationsAsRead = function (axifications) {
        var _this = this;
        var promise;
        if (axifications.length > 0) {
            var promises = axifications.map(function (notification) {
                return _this.axificationsProvider.markNotificationRead(notification.id);
            });
            promise = Promise.all(promises).catch(function () {
                // Ignore errors.
            }).finally(function () {
                _this.axificationsProvider.invalidateAxificationsList().finally(function () {
                    var siteId = _this.sitesProvider.getCurrentSiteId();
                    _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_7__providers_axifications__["a" /* AddonAxificationsProvider */].READ_CHANGED_EVENT, null, siteId);
                });
            });
        }
        else {
            promise = Promise.resolve();
        }
        promise.finally(function () {
            // Check if mark all axifications as read is enabled and there are some to read.
            if (_this.axificationsProvider.isMarkAllAxificationsAsReadEnabled()) {
                _this.loadingMarkAllAxificationsAsRead = true;
                return _this.axificationsProvider.getUnreadAxificationsCount().then(function (unread) {
                    _this.canMarkAllAxificationsAsRead = unread > 0;
                    _this.loadingMarkAllAxificationsAsRead = false;
                });
            }
            _this.canMarkAllAxificationsAsRead = false;
        });
    };
    /**
     * Refresh axifications.
     *
     * @param {any} [refresher] Refresher.
     */
    AddonAxificationsListPage.prototype.refreshAxifications = function (refresher) {
        alert("hey babe!");
        /*
        this.axificationsProvider.invalidateAxificationsList().finally(() => {
            return this.fetchAxifications(true).finally(() => {
                if (refresher) {
                    refresher.complete();
                }
            });
        });
        */
    };
    /**
     * Load more results.
     *
     * @param {any} infiniteScroll The infinit scroll instance.
     */
    AddonAxificationsListPage.prototype.loadMoreAxifications = function (infiniteScroll) {
        this.fetchAxifications().finally(function () {
            infiniteScroll.complete();
        });
    };
    /**
     * Formats the text of a notification.
     *
     * @param {any} notification The notification object.
     */
    AddonAxificationsListPage.prototype.formatText = function (notification) {
        var text = notification.mobiletext.replace(/-{4,}/ig, '');
        notification.mobiletext = this.textUtils.replaceNewLines(text, '<br>');
    };
    /**
     * Page destroyed.
     */
    AddonAxificationsListPage.prototype.ngOnDestroy = function () {
        this.cronObserver && this.cronObserver.off();
        this.pushObserver && this.pushObserver.unsubscribe();
    };
    AddonAxificationsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-axifications-list',template:/*ion-inline-start:"C:\wamp\www\AX-MOODLE_MOBILE_APP\mma_custom_plugin\src\addon\axifications\pages\list\list.html"*/'﻿<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.axifications.axifications\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="axificationsLoaded" (ionRefresh)="refreshAxifications($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n	<h1>Hello darling! AXIFICATION!!!!</h1>\n\n    <core-loading [hideUntil]="axificationsLoaded">\n\n        <div padding *ngIf="canMarkAllAxificationsAsRead">\n\n            <button ion-button block (click)="markAllAxificationsAsRead()" color="light" icon-start *ngIf="!loadingMarkAllAxificationsAsRead">\n\n                <core-icon name="fa-check"></core-icon>\n\n                {{ \'addon.axifications.markallread\' | translate }}\n\n            </button>\n\n            <button ion-button block color="light" icon-start *ngIf="loadingMarkAllAxificationsAsRead">\n\n                <ion-spinner></ion-spinner>\n\n            </button>\n\n        </div>\n\n        <ion-card *ngFor="let axification of axifications">\n\n            <ion-item>\n\n                <ion-avatar item-start core-user-link [userId]="axification.useridfrom" [courseId]="axification.courseid">\n\n                    <img [src]="axification.profileimageurlfrom || \'assets/img/user-avatar.png\'" core-external-content [alt]="\'core.pictureof\' | translate:{$a: axification.userfromfullname}" role="presentation">\n\n                </ion-avatar>\n\n                <h2>{{axification.userfromfullname}}</h2>\n\n                <div item-end *ngIf="!axification.timeread"><core-icon name="fa-circle" color="primary"></core-icon></div>\n\n                <p>{{axification.timecreated | coreDateDayOrTime}}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <p><core-format-text [text]="axification.mobiletext | coreCreateLinks"></core-format-text></p>\n\n            </ion-item>\n\n            <addon-axifications-actions [contextUrl]="axification.contexturl" [courseId]="axification.courseid"></addon-axifications-actions>\n\n        </ion-card>\n\n        <core-empty-box *ngIf="!axifications || axifications.length <= 0" icon="bonfire" [message]="\'addon.axifications.therearentaxificationsyet\' | translate"></core-empty-box>\n\n        <ion-infinite-scroll [enabled]="canLoadMore" (ionInfinite)="loadMoreAxifications($event)">\n\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\AX-MOODLE_MOBILE_APP\mma_custom_plugin\src\addon\axifications\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["a" /* CoreDomUtilsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["a" /* CoreDomUtilsProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_utils_text__["a" /* CoreTextUtilsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_utils_text__["a" /* CoreTextUtilsProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__["a" /* CoreUtilsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__["a" /* CoreUtilsProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_axifications__["a" /* AddonAxificationsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_axifications__["a" /* AddonAxificationsProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__addon_pushnotifications_providers_delegate__["a" /* AddonPushNotificationsDelegate */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__addon_pushnotifications_providers_delegate__["a" /* AddonPushNotificationsDelegate */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_qr_scanner__["a" /* QRScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_qr_scanner__["a" /* QRScanner */]) === "function" && _j || Object])
    ], AddonAxificationsListPage);
    return AddonAxificationsListPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 2036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRScanner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_core__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var QRScannerOriginal = /** @class */ (function (_super) {
    __extends(QRScannerOriginal, _super);
    function QRScannerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRScannerOriginal.prototype.prepare = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "prepare", { "callbackStyle": "node" }, arguments); };
    QRScannerOriginal.prototype.scan = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "scan", { "callbackStyle": "node", "observable": true, "clearFunction": "cancelScan" }, arguments); };
    QRScannerOriginal.prototype.show = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "show", {}, arguments); };
    QRScannerOriginal.prototype.hide = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "hide", {}, arguments); };
    QRScannerOriginal.prototype.enableLight = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "enableLight", { "callbackStyle": "node" }, arguments); };
    QRScannerOriginal.prototype.destroy = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "destroy", {}, arguments); };
    QRScannerOriginal.prototype.disableLight = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "disableLight", { "callbackStyle": "node" }, arguments); };
    QRScannerOriginal.prototype.useFrontCamera = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "useFrontCamera", { "callbackStyle": "node" }, arguments); };
    QRScannerOriginal.prototype.useBackCamera = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "useBackCamera", { "callbackStyle": "node" }, arguments); };
    QRScannerOriginal.prototype.useCamera = function (camera) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "useCamera", { "callbackStyle": "node" }, arguments); };
    QRScannerOriginal.prototype.pausePreview = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "pausePreview", {}, arguments); };
    QRScannerOriginal.prototype.resumePreview = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "resumePreview", {}, arguments); };
    QRScannerOriginal.prototype.getStatus = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "getStatus", {}, arguments); };
    QRScannerOriginal.prototype.openSettings = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "openSettings", { "sync": true }, arguments); };
    QRScannerOriginal.pluginName = "QRScanner";
    QRScannerOriginal.plugin = "cordova-plugin-qrscanner";
    QRScannerOriginal.pluginRef = "QRScanner";
    QRScannerOriginal.repo = "https://github.com/bitpay/cordova-plugin-qrscanner";
    QRScannerOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return QRScannerOriginal;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["g" /* IonicNativePlugin */]));
var QRScanner = new QRScannerOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3FyLXNjYW5uZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFrSEgsNkJBQWlCOzs7O0lBUTlDLDJCQUFPO0lBYVAsd0JBQUk7SUFTSix3QkFBSTtJQVNKLHdCQUFJO0lBV0osK0JBQVc7SUFTWCwyQkFBTztJQVdQLGdDQUFZO0lBV1osa0NBQWM7SUFXZCxpQ0FBYTtJQVliLDZCQUFTLGFBQUMsTUFBYztJQVN4QixnQ0FBWTtJQVNaLGlDQUFhO0lBU2IsNkJBQVM7SUFVVCxnQ0FBWTs7Ozs7O29CQWpRZDtFQW9IK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBRUlNjYW5uZXJTdGF0dXMge1xuICAvKipcbiAgICogT24gaU9TIGFuZCBBbmRyb2lkIDYuMCssIGNhbWVyYSBhY2Nlc3MgaXMgZ3JhbnRlZCBhdCBydW50aW1lIGJ5IHRoZSB1c2VyIChieSBjbGlja2luZyBcIkFsbG93XCIgYXQgdGhlIGRpYWxvZykuXG4gICAqIFRoZSBhdXRob3JpemVkIHByb3BlcnR5IGlzIGEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIG9ubHkgd2hlbiB0aGUgdXNlciBoYXMgYWxsb3dlZCBjYW1lcmEgYWNjZXNzIHRvIHlvdXIgYXBwIChBVkF1dGhvcml6YXRpb25TdGF0dXMuQXV0aG9yaXplZCkuXG4gICAqIE9uIHBsYXRmb3JtcyB3aXRoIHBlcm1pc3Npb25zIGdyYW50ZWQgYXQgaW5zdGFsbCAoQW5kcm9pZCBwcmUtNi4wLCBXaW5kb3dzIFBob25lKSB0aGlzIHByb3BlcnR5IGlzIGFsd2F5cyB0cnVlLlxuICAgKi9cbiAgYXV0aG9yaXplZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIGlmIHRoZSB1c2VyIHBlcm1hbmVudGx5IGRlbmllZCBjYW1lcmEgYWNjZXNzIHRvIHRoZSBhcHAgKEFWQXV0aG9yaXphdGlvblN0YXR1cy5EZW5pZWQpLlxuICAgKiBPbmNlIGRlbmllZCwgY2FtZXJhIGFjY2VzcyBjYW4gb25seSBiZSBnYWluZWQgYnkgcmVxdWVzdGluZyB0aGUgdXNlciBjaGFuZ2UgdGhlaXIgZGVjaXNpb24gKGNvbnNpZGVyIG9mZmVyaW5nIGEgbGluayB0byB0aGUgc2V0dGluZyB2aWEgb3BlblNldHRpbmdzKCkpLlxuICAgKi9cbiAgZGVuaWVkOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgaWYgdGhlIHVzZXIgaXMgdW5hYmxlIHRvIGdyYW50IHBlcm1pc3Npb25zIGR1ZSB0byBwYXJlbnRhbCBjb250cm9scywgb3JnYW5pemF0aW9uIHNlY3VyaXR5IGNvbmZpZ3VyYXRpb24gcHJvZmlsZXMsIG9yIHNpbWlsYXIgcmVhc29ucy5cbiAgICovXG4gIHJlc3RyaWN0ZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBpZiBRUlNjYW5uZXIgaXMgcHJlcGFyZWQgdG8gY2FwdHVyZSB2aWRlbyBhbmQgcmVuZGVyIGl0IHRvIHRoZSB2aWV3LlxuICAgKi9cbiAgcHJlcGFyZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSB3aGVuIHRoZSBwcmV2aWV3IGxheWVyIGlzIHZpc2libGUgKGFuZCBvbiBhbGwgcGxhdGZvcm1zIGJ1dCBicm93c2VyLCB0aGUgbmF0aXZlIHdlYnZpZXcgYmFja2dyb3VuZCBpcyB0cmFuc3BhcmVudCkuXG4gICAqL1xuICBzaG93aW5nOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgaWYgUVJTY2FubmVyIGlzIGFjdGl2ZWx5IHNjYW5uaW5nIGZvciBhIFFSIGNvZGUuXG4gICAqL1xuICBzY2FubmluZzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIGlmIFFSU2Nhbm5lciBpcyBkaXNwbGF5aW5nIGEgbGl2ZSBwcmV2aWV3IGZyb20gdGhlIGRldmljZSdzIGNhbWVyYS4gU2V0IHRvIGZhbHNlIHdoZW4gdGhlIHByZXZpZXcgaXMgcGF1c2VkLlxuICAgKi9cbiAgcHJldmlld2luZzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIGlmIHRoZSBsaWdodCBpcyBlbmFibGVkLlxuICAgKi9cbiAgbGlnaHRFbmFibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgb25seSBpZiB0aGUgdXNlcnMnIG9wZXJhdGluZyBzeXN0ZW0gaXMgYWJsZSB0byBRUlNjYW5uZXIub3BlblNldHRpbmdzKCkuXG4gICAqL1xuICBjYW5PcGVuU2V0dGluZ3M6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBvbmx5IGlmIHRoZSB1c2VycycgZGV2aWNlIGNhbiBlbmFibGUgYSBsaWdodCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjdXJyZW50Q2FtZXJhLlxuICAgKi9cbiAgY2FuRW5hYmxlTGlnaHQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBvbmx5IGlmIHRoZSBjdXJyZW50IGRldmljZSBcInNob3VsZFwiIGhhdmUgYSBmcm9udCBjYW1lcmEuXG4gICAqIFRoZSBjYW1lcmEgbWF5IHN0aWxsIG5vdCBiZSBjYXB0dXJhYmxlLCB3aGljaCB3b3VsZCBlbWl0IGVycm9yIGNvZGUgMywgNCwgb3IgNSB3aGVuIHRoZSBzd2l0Y2ggaXMgYXR0ZW1wdGVkLlxuICAgKiAoT24gdGhlIGJyb3dzZXIgcGxhdGZvcm0sIHRoaXMgdmFsdWUgaXMgZmFsc2UgdW50aWwgdGhlIHByZXBhcmUgbWV0aG9kIGlzIGNhbGxlZC4pXG4gICAqL1xuICBjYW5DaGFuZ2VDYW1lcmE6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50Q2FtZXJhLiAwIGlzIHRoZSBiYWNrIGNhbWVyYSwgMSBpcyB0aGUgZnJvbnQuXG4gICAqL1xuICBjdXJyZW50Q2FtZXJhOiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgUVIgU2Nhbm5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGZhc3QsIGVuZXJneSBlZmZpY2llbnQsIGhpZ2hseS1jb25maWd1cmFibGUgUVIgY29kZSBzY2FubmVyIGZvciBDb3Jkb3ZhIGFwcHMuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1xcnNjYW5uZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbUVIgU2Nhbm5lciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2JpdHBheS9jb3Jkb3ZhLXBsdWdpbi1xcnNjYW5uZXIpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUVJTY2FubmVyLCBRUlNjYW5uZXJTdGF0dXMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3FyLXNjYW5uZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBxclNjYW5uZXI6IFFSU2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gT3B0aW9uYWxseSByZXF1ZXN0IHRoZSBwZXJtaXNzaW9uIGVhcmx5XG4gKiB0aGlzLnFyU2Nhbm5lci5wcmVwYXJlKClcbiAqICAgLnRoZW4oKHN0YXR1czogUVJTY2FubmVyU3RhdHVzKSA9PiB7XG4gKiAgICAgIGlmIChzdGF0dXMuYXV0aG9yaXplZCkge1xuICogICAgICAgIC8vIGNhbWVyYSBwZXJtaXNzaW9uIHdhcyBncmFudGVkXG4gKlxuICpcbiAqICAgICAgICAvLyBzdGFydCBzY2FubmluZ1xuICogICAgICAgIGxldCBzY2FuU3ViID0gdGhpcy5xclNjYW5uZXIuc2NhbigpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gKiAgICAgICAgICBjb25zb2xlLmxvZygnU2Nhbm5lZCBzb21ldGhpbmcnLCB0ZXh0KTtcbiAqXG4gKiAgICAgICAgICB0aGlzLnFyU2Nhbm5lci5oaWRlKCk7IC8vIGhpZGUgY2FtZXJhIHByZXZpZXdcbiAqICAgICAgICAgIHNjYW5TdWIudW5zdWJzY3JpYmUoKTsgLy8gc3RvcCBzY2FubmluZ1xuICogICAgICAgIH0pO1xuICpcbiAqICAgICAgfSBlbHNlIGlmIChzdGF0dXMuZGVuaWVkKSB7XG4gKiAgICAgICAgLy8gY2FtZXJhIHBlcm1pc3Npb24gd2FzIHBlcm1hbmVudGx5IGRlbmllZFxuICogICAgICAgIC8vIHlvdSBtdXN0IHVzZSBRUlNjYW5uZXIub3BlblNldHRpbmdzKCkgbWV0aG9kIHRvIGd1aWRlIHRoZSB1c2VyIHRvIHRoZSBzZXR0aW5ncyBwYWdlXG4gKiAgICAgICAgLy8gdGhlbiB0aGV5IGNhbiBncmFudCB0aGUgcGVybWlzc2lvbiBmcm9tIHRoZXJlXG4gKiAgICAgIH0gZWxzZSB7XG4gKiAgICAgICAgLy8gcGVybWlzc2lvbiB3YXMgZGVuaWVkLCBidXQgbm90IHBlcm1hbmVudGx5LiBZb3UgY2FuIGFzayBmb3IgcGVybWlzc2lvbiBhZ2FpbiBhdCBhIGxhdGVyIHRpbWUuXG4gKiAgICAgIH1cbiAqICAgfSlcbiAqICAgLmNhdGNoKChlOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBpcycsIGUpKTtcbiAqXG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogUVJTY2FubmVyU3RhdHVzXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUVJTY2FubmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcXJzY2FubmVyJyxcbiAgcGx1Z2luUmVmOiAnUVJTY2FubmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iaXRwYXkvY29yZG92YS1wbHVnaW4tcXJzY2FubmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUVJTY2FubmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uIHRvIHVzZSBRUiBzY2FubmVyLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnXG4gIH0pXG4gIHByZXBhcmUoKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCB0aGlzIG1ldGhvZCB0byBlbmFibGUgc2Nhbm5pbmcuIFlvdSBtdXN0IHRoZW4gY2FsbCB0aGUgYHNob3dgIG1ldGhvZCB0byBtYWtlIHRoZSBjYW1lcmEgcHJldmlldyB2aXNpYmxlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPHN0cmluZz59IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBzY2FubmVkIHRleHQuIFVuc3Vic2NyaWJlIGZyb20gdGhlIG9ic2VydmFibGUgdG8gc3RvcCBzY2FubmluZy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnY2FuY2VsU2NhbidcbiAgfSlcbiAgc2NhbigpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBuYXRpdmUgd2VidmlldyB0byBoYXZlIGEgdHJhbnNwYXJlbnQgYmFja2dyb3VuZCwgdGhlbiBzZXRzIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSA8Ym9keT4gYW5kIDxodG1sPiBET00gZWxlbWVudHMgdG8gdHJhbnNwYXJlbnQsIGFsbG93aW5nIHRoZSB3ZWJ2aWV3IHRvIHJlLXJlbmRlciB3aXRoIHRoZSB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93KCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIG5hdGl2ZSB3ZWJ2aWV3IHRvIGJlIG9wYXF1ZSB3aXRoIGEgd2hpdGUgYmFja2dyb3VuZCwgY292ZXJpbmcgdGhlIHZpZGVvIHByZXZpZXcuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhpZGUoKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBkZXZpY2UncyBsaWdodCAoZm9yIHNjYW5uaW5nIGluIGxvdy1saWdodCBlbnZpcm9ubWVudHMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJ1xuICB9KVxuICBlbmFibGVMaWdodCgpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBzY2FubmVyIGluc3RhbmNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZXN0cm95KCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGRldmljZSdzIGxpZ2h0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnXG4gIH0pXG4gIGRpc2FibGVMaWdodCgpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgZnJvbnQgY2FtZXJhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZSdcbiAgfSlcbiAgdXNlRnJvbnRDYW1lcmEoKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlIGJhY2sgY2FtZXJhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZSdcbiAgfSlcbiAgdXNlQmFja0NhbWVyYSgpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY2FtZXJhIHRvIGJlIHVzZWQuXG4gICAqIEBwYXJhbSBjYW1lcmEge251bWJlcn0gUHJvdmlkZSBgMGAgZm9yIGJhY2sgY2FtZXJhLCBhbmQgYDFgIGZvciBmcm9udCBjYW1lcmEuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZSdcbiAgfSlcbiAgdXNlQ2FtZXJhKGNhbWVyYTogbnVtYmVyKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGF1c2VzIHRoZSB2aWRlbyBwcmV2aWV3IG9uIHRoZSBjdXJyZW50IGZyYW1lIGFuZCBwYXVzZXMgc2Nhbm5pbmcuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2VQcmV2aWV3KCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3Vtc2UgdGhlIHZpZGVvIHByZXZpZXcgYW5kIHJlc3VtZXMgc2Nhbm5pbmcuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzdW1lUHJldmlldygpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBlcm1pc3Npb24gc3RhdHVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3RhdHVzKCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHNldHRpbmdzIHRvIGVkaXQgYXBwIHBlcm1pc3Npb25zLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgb3BlblNldHRpbmdzKCk6IHZvaWQge31cbn1cbiJdfQ==

/***/ })

});
//# sourceMappingURL=3.js.map