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









//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
//import { QRScanner, QRScannerStatus } from '@providers/app';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { Toast } from '@ionic-native/toast';
/**
 * Page that displays the list of axifications.
 */
var AddonAxificationsListPage = /** @class */ (function () {
    function AddonAxificationsListPage(navParams, domUtils, eventsProvider, sitesProvider, textUtils, utils, axificationsProvider, pushNotificationsDelegate) {
        // Optionally request the permission early
        /*
        this.qrScanner.prepare()
          .then((status: QRScannerStatus) => {
          
          
             if (status.authorized) {
               // camera permission was granted
                alert("granted!");

               // start scanning
               let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                 console.log('Scanned something', text);
                 alert("scanned:: " + text);
                 
                 this.qrScanner.hide(); // hide camera preview
                 scanSub.unsubscribe(); // stop scanning
               });

             } else if (status.denied) {
                alert("denied");
               // camera permission was permanently denied
               // you must use QRScanner.openSettings() method to guide the user to the settings page
               // then they can grant the permission from there
             } else {
                alert("remanded");
               // permission was denied, but not permanently. You can ask for permission again at a later time.
             }
             
             
          })
          .catch((e: any) => console.log('Error is', e));
          */
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.textUtils = textUtils;
        this.utils = utils;
        this.axificationsProvider = axificationsProvider;
        this.pushNotificationsDelegate = pushNotificationsDelegate;
        this.axifications = [];
        this.axificationsLoaded = false;
        this.canLoadMore = false;
        this.canMarkAllAxificationsAsRead = false;
        this.loadingMarkAllAxificationsAsRead = false;
        this.readCount = 0;
        this.unreadCount = 0;
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
        this.axificationsProvider.prova();
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["a" /* CoreDomUtilsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["a" /* CoreDomUtilsProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_utils_text__["a" /* CoreTextUtilsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_utils_text__["a" /* CoreTextUtilsProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__["a" /* CoreUtilsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__["a" /* CoreUtilsProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_axifications__["a" /* AddonAxificationsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_axifications__["a" /* AddonAxificationsProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__addon_pushnotifications_providers_delegate__["a" /* AddonPushNotificationsDelegate */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__addon_pushnotifications_providers_delegate__["a" /* AddonPushNotificationsDelegate */]) === "function" && _h || Object])
    ], AddonAxificationsListPage);
    return AddonAxificationsListPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map