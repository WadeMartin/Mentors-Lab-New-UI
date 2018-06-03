webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo{ background: #a7a7a7; }\r\n.pricingTable{\r\n    background: #fff;\r\n    padding-bottom: 20px;\r\n    overflow: hidden;\r\n}\r\n.pricingTable .pricingTable-header{\r\n    margin-bottom: 40px;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n.pricingTable .pricingTable-header:before{\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 150%;\r\n    background: #606aa3;\r\n    position: absolute;\r\n    top: -90%;\r\n    left: -20%;\r\n    z-index: -1;\r\n    transform: rotate(-42deg);\r\n}\r\n.pricingTable .pricingTable-header:after{\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 190%;\r\n    background: #727cb6;\r\n    position: absolute;\r\n    top: -76%;\r\n    right: -16%;\r\n    z-index: -2;\r\n    transform: rotate(20deg);\r\n}\r\n.pricingTable .price-value{\r\n    display: inline-block;\r\n    width: 50%;\r\n    padding: 30px 0;\r\n    float: left;\r\n    font-size: 30px;\r\n    color: #fff;\r\n    line-height: 20px;\r\n    position: relative;\r\n    top: 10px;\r\n    left: 20px;\r\n}\r\n.pricingTable .currency{\r\n    font-size: 20px;\r\n    position: relative;\r\n    top: -10px;\r\n    right: -3px;\r\n}\r\n.pricingTable .title{\r\n    display: inline-block;\r\n    width: 50%;\r\n    padding: 30px 0;\r\n    margin: 0;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    line-height: 20px;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    top: 10px;\r\n    right: 7px;\r\n}\r\n.pricingTable .pricing-content{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0 0 20px 0;\r\n    text-align: center;\r\n    clear: both;\r\n}\r\n.pricingTable .pricing-content li{\r\n    font-size: 17px;\r\n    color: #828282;\r\n    line-height: 40px;\r\n}\r\n.pricingTable .pricingTable-signup{\r\n    display: block;\r\n    width: 80%;\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    border: 1px solid #606aa3;\r\n    border-radius: 40px;\r\n    margin: 0 auto;\r\n    font-size: 18px;\r\n    color: #606aa3;\r\n    z-index: 1;\r\n    text-transform: uppercase;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.pricingTable .pricingTable-signup:before,\r\n.pricingTable .pricingTable-signup:after{\r\n    content: \"\";\r\n    border-width: 0;\r\n    border-style: solid;\r\n    position: absolute;\r\n    z-index: -1;\r\n    transition: all 0.7s ease 0s;\r\n}\r\n.pricingTable .pricingTable-signup:before{\r\n    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #606aa3;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n.pricingTable .pricingTable-signup:after{\r\n    border-color: rgba(0, 0, 0, 0) #606aa3 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\r\n    top: 0;\r\n    right: 0;\r\n}\r\n.pricingTable .pricingTable-signup:hover:before,\r\n.pricingTable .pricingTable-signup:hover:after{\r\n    border-width: 150px 262px;\r\n}\r\n.pricingTable.green .pricingTable-header:before{ background: #18a288; }\r\n.pricingTable.green .pricingTable-header:after{ background: #1abc9c; }\r\n.pricingTable.green .pricingTable-signup{ border-color: #1abc9c; color: #1abc9c; }\r\n.pricingTable.green .pricingTable-signup:before{ border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #18a288; }\r\n.pricingTable.green .pricingTable-signup:after{ border-color: rgba(0, 0, 0, 0) #18a288 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\r\n.pricingTable.orange .pricingTable-header:before{ background: #ee6e00; }\r\n.pricingTable.orange .pricingTable-header:after{ background: #e67e22; }\r\n.pricingTable.orange .pricingTable-signup{ border-color: #e67e22; color: #e67e22; }\r\n.pricingTable.orange .pricingTable-signup:before{ border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #ee6e00; }\r\n.pricingTable.orange .pricingTable-signup:after{ border-color: rgba(0, 0, 0, 0) #ee6e00 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\r\n\r\n.pricingTable.red .pricingTable-header:before{ background: #8B0000; }\r\n.pricingTable.red .pricingTable-header:after{ background: #B22222; }\r\n.pricingTable.red .pricingTable-signup{ border-color: #B22222; color: #B22222; }\r\n.pricingTable.red .pricingTable-signup:before{ border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #8B0000; }\r\n.pricingTable.red .pricingTable-signup:after{ border-color: rgba(0, 0, 0, 0) #8B0000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\r\n\r\n.pricingTable.purple .pricingTable-header:before{ background: #b14468; }\r\n.pricingTable.purple .pricingTable-header:after{ background: #cf4d78; }\r\n.pricingTable.purple .pricingTable-signup{ border-color: #cf4d78; color: #cf4d78; }\r\n.pricingTable.purple .pricingTable-signup:before{ border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #b14468; }\r\n.pricingTable.purple .pricingTable-signup:after{ border-color: rgba(0, 0, 0, 0) #b14468 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\r\n@media only screen and (max-width: 990px){\r\n    .pricingTable{ margin-bottom: 30px; }\r\n}\r\n@media only screen and (max-width: 767px){\r\n    .pricingTable .pricingTable-header:before{\r\n        height: 300%;\r\n        top: -267%;\r\n    }\r\n    .pricingTable .pricingTable-header:after{\r\n        height: 270%;\r\n        top: -106%;\r\n    }\r\n    .pricingTable .title{ text-align: center; }\r\n}\r\n@media only screen and (max-width: 480px){\r\n    .pricingTable .pricingTable-header:after{ top: -146%; }\r\n}\r\n@media only screen and (max-width: 479px){\r\n    .pricingTable .pricingTable-header:before{\r\n        height: 200%;\r\n        top: -120%;\r\n        left: -20%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"loader-bg\">\n        <!--sk-cube-grid-->\n        <div class=\"sk-cube-grid\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skCubeGrid\">\n            <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube3\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube4\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube5\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube6\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube7\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube8\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube9\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-rotating-plane-->\n        <div class=\"sk-rotating-plane colored-parent\" *ngIf=\"spinner === Spinkit.skRotatingPlane\" [style.background-color]='backgroundColor'></div>\n        <!--sk-double-bounce-->\n        <div class=\"sk-double-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skDoubleBounce\">\n            <div class=\"double-bounce1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"double-bounce2\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-wave-->\n        <div class=\"theme-loader\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWave\">\n            <!--<div class=\"sk-rect sk-rect1\" [style.background-color]='backgroundColor'></div>-->\n            <!--<div class=\"sk-rect sk-rect2\" [style.background-color]='backgroundColor'></div>-->\n            <!--<div class=\"sk-rect sk-rect3\" [style.background-color]='backgroundColor'></div>-->\n            <!--<div class=\"sk-rect sk-rect4\" [style.background-color]='backgroundColor'></div>-->\n            <!--<div class=\"sk-rect sk-rect5\" [style.background-color]='backgroundColor'></div>-->\n          <!-- Pre-loader start -->\n            <div class=\"ball-scale\">\n              <div class='contain'>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n              </div>\n            </div>\n          <!-- Pre-loader end -->\n\n        </div>\n        <!--sk-wandering-cubes-->\n        <div class=\"sk-wandering-cubes\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWanderingCubes\">\n            <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-spinner-pulse-->\n        <div class=\"sk-spinner sk-spinner-pulse colored-parent\" *ngIf=\"spinner === Spinkit.skSpinnerPulse\" [style.background-color]='backgroundColor'></div>\n        <!--sk-chasing-dots-->\n        <div class=\"sk-chasing-dots\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skChasingDots\">\n            <div class=\"sk-child sk-dot1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-child sk-dot2\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-three-bounce-->\n        <div class=\"sk-three-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skThreeBounce\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-child sk-bounce2\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-child sk-bounce3\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!-- material-line -->\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n        </div>\n\n    </div>\n \n</div>\n<div class=\"wrapper\">\n    <div class=\"section-dark\" style=\"background-image: url('assets/images/Homepage.jpg');background-repeat:no-repeat;background-size:100% 100%;\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container text-center\">\n                <div class=\"title-brand\">                   \n                        <img src=\"assets/images/logo.png\" width=\"350\" height=\"150\" alt=\"\">\n                </div>\n            </div>\n            <br />\n            <br />\n            <div class=\"container\">\n                    <div class=\"row\">\n                            <div class=\"col-md-10\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control form-control-success\" [(ngModel)]=\"searchParamter\" placeholder=\"Type a startup name or category\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-2\">\n                                        <a href=\"\" class=\"btn btn-outline-danger btn-round\" routerLink=\"/search\" (click)=\"search()\" >Search</a>\n                                </div>\n                                \n                    </div>\n            </div>\n        </div>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        \n    </div>\n    <hr>\n    <div class=\"main\">\n        <br>\n        <div class=\"section section-dark section-nucleo-icons\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h2 class=\"title\" style=\"color: black\">Mentors' Labs</h2><br/>\n                            <p style=\"font-size: 20px\">Mentors'Lab was launched by Tell NP Advisers, an outplacement company based in Switzerland. \n                                <br>\n                                Mentors’ Lab is a platform for companies to showcase themselves to potential mentors who wants to share their expertise in Finance, HR, Admin, Sales, Supply Chain, Marketing, Purchasing, Manufacturing, Strategy, Fundraising, Communication, Digital, Coaching, Design, Software development, Advisory Board members for free with start-ups (from 2 to 6 hours hours per week during a previously agreed period of time). \n                                <br>\n                                <br>\n                                Mentors agree to help startups for free in exchange of the possibility to highlight this experience on their CVs or LinkedIn profile. \n                                Startups can benefit of mentors expertise for free, helping them to grow their businesses. \n                                <br>\n                                <br>\n                                <b>A win-win deal for both startups & Mentors! </b></p>\n                             <br/>                      \n                        <!-- <a href=\"\" class=\"btn btn-outline-danger btn-round\" target=\"_blank\">Read more about us</a> -->\n                    </div>\n\n             \n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n        <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-8\">\n                        <div class=\"pricingTable\">\n                            <div class=\"pricingTable-header\">\n                                <span class=\"price-value\">5<span class=\"currency\">$</span></span>\n                                <h3 class=\"title\">Starter Plan</h3>\n                            </div>\n                            <ul class=\"pricing-content\">\n                                <li>Introduction of your startup</li>\n                                <li>Profile allocation for 2 team mates</li>\n                                <li>Request for 2 skills</li>\n                                <li>Rate mentors and be rated by mentors</li>\n                                <li>-</li>\n                                <li>-</li>\n                                <li>-</li>\n                                <li>-</li>\n                            </ul>\n                            <a href=\"#\" class=\"pricingTable-signup\" routerLink=\"/sign-up-startup\">Sign Up</a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-8\">\n                            <div class=\"pricingTable green\">\n                                <div class=\"pricingTable-header\">\n                                    <span class=\"price-value\">20<span class=\"currency\">$</span></span>\n                                    <h3 class=\"title\">Seed Plan</h3>\n                                </div>\n                                <ul class=\"pricing-content\">\n                                <li>Introduction of your startup</li>\n                                <li>Profile allocation for 4 team mates</li>\n                                <li>Request for 4 skills</li>\n                                <li>Upload 2 medias (1 video + 1 photo)</li>\n                                <li>Rate mentors and be rated by mentors</li>\n                                <li>-</li>\n                                <li>-</li>\n                                <li>-</li>\n                                </ul>\n                                <a href=\"#\" class=\"pricingTable-signup\" routerLink=\"/sign-up-startup\">Sign Up</a>\n                            </div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-8\">\n                        <div class=\"pricingTable red\">\n                            <div class=\"pricingTable-header\">\n                                <span class=\"price-value\">50<span class=\"currency\">$</span></span>\n                                <h3 class=\"title\">Growing Plan</h3>\n                            </div>\n                            <ul class=\"pricing-content\">\n                                    <li>Introduction of your startup</li>\n                                    <li>Profile allocation for 6 team mates</li>\n                                    <li>Request for 6 skills</li>\n                                    <li>Upload 6 medias (2 video + 4 photo)</li>\n                                    <li>Startup statistics (visits, followers, clicked links)</li>\n                                    <li>Don't wait for mentors to contact you! Contact them directly!</li>\n                            </ul>\n                            <a href=\"#\" class=\"pricingTable-signup\"  routerLink=\"/sign-up-startup\">Sign Up</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_charts_echart_echarts_all_js__ = __webpack_require__("../../../../../src/assets/charts/echart/echarts-all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_charts_echart_echarts_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_charts_echart_echarts_all_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinner.component.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-double-bounce.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-chasing-dots.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-cube-grid.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-rotating-plane.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-spinner-pulse.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-three-bounce.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-wandering-cubes.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-wave.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-line-material.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('fadeInOutTranslate', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1 }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translate(0)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }))
                ])
            ])
        ]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRoutes", function() { return homeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_multiselect_multiselect__ = __webpack_require__("../../../../primeng/components/multiselect/multiselect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_multiselect_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_components_multiselect_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_button_button__ = __webpack_require__("../../../../primeng/components/button/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_button_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_components_button_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_components_editor_editor__ = __webpack_require__("../../../../primeng/components/editor/editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_components_editor_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_components_editor_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_components_fileupload_fileupload__ = __webpack_require__("../../../../primeng/components/fileupload/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_components_fileupload_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_components_fileupload_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_galleria_galleria__ = __webpack_require__("../../../../primeng/components/galleria/galleria.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_galleria_galleria___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_components_galleria_galleria__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var homeRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        data: {}
    }
];
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(homeRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_14_ngx_echarts__["a" /* AngularEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_10_primeng_components_button_button__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_9_primeng_components_multiselect_multiselect__["MultiSelectModule"],
            __WEBPACK_IMPORTED_MODULE_11_primeng_components_editor_editor__["EditorModule"],
            __WEBPACK_IMPORTED_MODULE_12_primeng_components_fileupload_fileupload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_13_primeng_components_galleria_galleria__["GalleriaModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map