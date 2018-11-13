webpackJsonp([9],{

/***/ 1903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreViewerIframePageModule", function() { return CoreViewerIframePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iframe__ = __webpack_require__(2032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
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





var CoreViewerIframePageModule = /** @class */ (function () {
    function CoreViewerIframePageModule() {
    }
    CoreViewerIframePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__iframe__["a" /* CoreViewerIframePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__iframe__["a" /* CoreViewerIframePage */])
            ]
        })
    ], CoreViewerIframePageModule);
    return CoreViewerIframePageModule;
}());

//# sourceMappingURL=iframe.module.js.map

/***/ }),

/***/ 2032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreViewerIframePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sites__ = __webpack_require__(2);
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
 * Page to display a URL in an iframe.
 */
var CoreViewerIframePage = /** @class */ (function () {
    //   "yes" -> Always auto-login.
    //   "no" -> Never auto-login.
    //   "check" -> Auto-login only if it points to the current site. Default value.
    function CoreViewerIframePage(params, sitesProvider) {
        var _this = this;
        this.title = params.get('title');
        this.autoLogin = params.get('autoLogin') || 'check';
        var url = params.get('url'), currentSite = sitesProvider.getCurrentSite();
        if (currentSite && (this.autoLogin == 'yes' || (this.autoLogin == 'check' && currentSite.containsUrl(url)))) {
            // Format the URL to add auto-login.
            currentSite.getAutoLoginUrl(url, false).then(function (url) {
                _this.url = url;
            });
        }
        else {
            this.url = url;
        }
        jQuery(document).ready(function () {
            var customPage = jQuery("ng-component.app-root").attr("skilla_page_name");
            if (customPage == "skilla_bcc_comp") {
                //jQuery(".scroll-content").css("margin-bottom","0");
                jQuery(".scroll-content").addClass("iframe_without_margin_bottom");
                jQuery(".show-tabbar").hide('slide', { direction: "down" }, 500);
                if (jQuery("button.back-button").hasClass("back_from_skilla_bcc_comp")) {
                    /// already passed by
                }
                else {
                    /// kind of first run
                    jQuery("button.back-button").addClass("back_from_skilla_bcc_comp");
                    jQuery("button.back-button").click(function () {
                        /// EXIT - back from split page
                        jQuery("ng-component.app-root").attr("skilla_page_name", "");
                        //jQuery(".scroll-content").css("margin-bottom","56px");
                        jQuery(".scroll-content").removeClass("iframe_without_margin_bottom");
                        jQuery("button.back-button").unbind("click");
                        jQuery("button.back-button").removeClass("back_from_skilla_bcc_comp");
                        jQuery(".show-tabbar").show('slide', { direction: "down" }, 500);
                        //jQuery(".show-tabbar").show("slow");
                        //alert( "Handler for .click() called." );
                    });
                }
            }
        });
    }
    CoreViewerIframePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-viewer-iframe',template:/*ion-inline-start:"C:\wamp\www\AX-MOODLE_MOBILE_APP\mma_custom_plugin\src\core\viewer\pages\iframe\iframe.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ title }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="url">\n\n        <core-iframe *ngIf="url" [src]="url"></core-iframe>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\AX-MOODLE_MOBILE_APP\mma_custom_plugin\src\core\viewer\pages\iframe\iframe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_sites__["a" /* CoreSitesProvider */]])
    ], CoreViewerIframePage);
    return CoreViewerIframePage;
}());

//# sourceMappingURL=iframe.js.map

/***/ })

});
//# sourceMappingURL=9.js.map