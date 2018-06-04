webpackJsonp(["subscribe.module"],{

/***/ "../../../../../src/app/pages/subscribe/subscribe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo{ background: #a7a7a7; }\r\n.pricingTable{\r\n    background: #fff;\r\n    padding-bottom: 20px;\r\n    overflow: hidden;\r\n}\r\n.pricingTable .pricingTable-header{\r\n    margin-bottom: 40px;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n.pricingTable .pricingTable-header:before{\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 150%;\r\n    background: #606aa3;\r\n    position: absolute;\r\n    top: -90%;\r\n    left: -20%;\r\n    z-index: -1;\r\n    transform: rotate(-42deg);\r\n}\r\n.pricingTable .pricingTable-header:after{\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 190%;\r\n    background: #727cb6;\r\n    position: absolute;\r\n    top: -76%;\r\n    right: -16%;\r\n    z-index: -2;\r\n    transform: rotate(20deg);\r\n}\r\n.pricingTable .price-value{\r\n    display: inline-block;\r\n    width: 50%;\r\n    padding: 30px 0;\r\n    float: left;\r\n    font-size: 30px;\r\n    color: #fff;\r\n    line-height: 20px;\r\n    position: relative;\r\n    top: 10px;\r\n    left: 20px;\r\n}\r\n.pricingTable .currency{\r\n    font-size: 20px;\r\n    position: relative;\r\n    top: -10px;\r\n    right: -3px;\r\n}\r\n.pricingTable .title{\r\n    display: inline-block;\r\n    width: 50%;\r\n    padding: 30px 0;\r\n    margin: 0;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    line-height: 20px;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    top: 10px;\r\n    right: 7px;\r\n}\r\n.pricingTable .pricing-content{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0 0 20px 0;\r\n    text-align: center;\r\n    clear: both;\r\n}\r\n.pricingTable .pricing-content li{\r\n    font-size: 17px;\r\n    color: #828282;\r\n    line-height: 40px;\r\n}\r\n.pricingTable .pricingTable-signup{\r\n    display: block;\r\n    width: 80%;\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    border: 1px solid #606aa3;\r\n    border-radius: 40px;\r\n    margin: 0 auto;\r\n    font-size: 18px;\r\n    color: #606aa3;\r\n    z-index: 1;\r\n    text-transform: uppercase;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.pricingTable .pricingTable-signup:before,\r\n.pricingTable .pricingTable-signup:after{\r\n    content: \"\";\r\n    border-width: 0;\r\n    border-style: solid;\r\n    position: absolute;\r\n    z-index: -1;\r\n    transition: all 0.7s ease 0s;\r\n}\r\n.pricingTable .pricingTable-signup:before{\r\n    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #606aa3;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n.pricingTable .pricingTable-signup:after{\r\n    border-color: rgba(0, 0, 0, 0) #606aa3 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\r\n    top: 0;\r\n    right: 0;\r\n}\r\n.pricingTable .pricingTable-signup:hover:before,\r\n.pricingTable .pricingTable-signup:hover:after{\r\n    border-width: 150px 262px;\r\n}\r\n.pricingTable.green .pricingTable-header:before{ background: #18a288; }\r\n.pricingTable.green .pricingTable-header:after{ background: #1abc9c; }\r\n.pricingTable.green .pricingTable-signup{ border-color: #1abc9c; color: #1abc9c; }\r\n.pricingTable.green .pricingTable-signup:before{ border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #18a288; }\r\n.pricingTable.green .pricingTable-signup:after{ border-color: rgba(0, 0, 0, 0) #18a288 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\r\n.pricingTable.orange .pricingTable-header:before{ background: #ee6e00; }\r\n.pricingTable.orange .pricingTable-header:after{ background: #e67e22; }\r\n.pricingTable.orange .pricingTable-signup{ border-color: #e67e22; color: #e67e22; }\r\n.pricingTable.orange .pricingTable-signup:before{ border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #ee6e00; }\r\n.pricingTable.orange .pricingTable-signup:after{ border-color: rgba(0, 0, 0, 0) #ee6e00 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\r\n\r\n.pricingTable.red .pricingTable-header:before{ background: #8B0000; }\r\n.pricingTable.red .pricingTable-header:after{ background: #B22222; }\r\n.pricingTable.red .pricingTable-signup{ border-color: #B22222; color: #B22222; }\r\n.pricingTable.red .pricingTable-signup:before{ border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #8B0000; }\r\n.pricingTable.red .pricingTable-signup:after{ border-color: rgba(0, 0, 0, 0) #8B0000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\r\n\r\n.pricingTable.purple .pricingTable-header:before{ background: #b14468; }\r\n.pricingTable.purple .pricingTable-header:after{ background: #cf4d78; }\r\n.pricingTable.purple .pricingTable-signup{ border-color: #cf4d78; color: #cf4d78; }\r\n.pricingTable.purple .pricingTable-signup:before{ border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #b14468; }\r\n.pricingTable.purple .pricingTable-signup:after{ border-color: rgba(0, 0, 0, 0) #b14468 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\r\n@media only screen and (max-width: 990px){\r\n    .pricingTable{ margin-bottom: 30px; }\r\n}\r\n@media only screen and (max-width: 767px){\r\n    .pricingTable .pricingTable-header:before{\r\n        height: 300%;\r\n        top: -267%;\r\n    }\r\n    .pricingTable .pricingTable-header:after{\r\n        height: 270%;\r\n        top: -106%;\r\n    }\r\n    .pricingTable .title{ text-align: center; }\r\n}\r\n@media only screen and (max-width: 480px){\r\n    .pricingTable .pricingTable-header:after{ top: -146%; }\r\n}\r\n@media only screen and (max-width: 479px){\r\n    .pricingTable .pricingTable-header:before{\r\n        height: 200%;\r\n        top: -120%;\r\n        left: -20%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/subscribe/subscribe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card>\n            <div class=\"row\">\n                    <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control form-control-success\" [(ngModel)]=\"couponCode\" placeholder=\"Use a coupon code\">\n                            </div>\n                        </div>\n                        \n            </div>\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-8\">\n                <div class=\"pricingTable\">\n                    <div class=\"pricingTable-header\">\n                        <span class=\"price-value\">5<span class=\"currency\">$</span></span>\n                        <h3 class=\"title\">Starter Plan</h3>\n                    </div>\n                    <ul class=\"pricing-content\">\n                        <li>Introduction of your startup</li>\n                        <li>Profile allocation for 2 team mates</li>\n                        <li>Request for 2 skills</li>\n                        <li>Rate mentors and be rated by mentors</li>\n                        <li>-</li>\n                        <li>-</li>\n                        <li>-</li>\n                    </ul>\n                    <button  class=\"pricingTable-signup btn\" [(disabled)]=\"btnStarter\"  (click)=\"openDialog('firstplan')\">Subscribe Now</button>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-sm-8\">\n                    <div class=\"pricingTable green\">\n                        <div class=\"pricingTable-header\">\n                            <span class=\"price-value\">20<span class=\"currency\">$</span></span>\n                            <h3 class=\"title\">Seed Plan</h3>\n                        </div>\n                        <ul class=\"pricing-content\">\n                        <li>Introduction of your startup</li>\n                        <li>Profile allocation for 4 team mates</li>\n                        <li>Request for 4 skills</li>\n                        <li>Upload 2 medias (1 video + 1 photo)</li>\n                        <li>Rate mentors and be rated by mentors</li>\n                        <li>-</li>\n                        <li>-</li>\n                        </ul>\n                        <button  class=\"pricingTable-signup btn\" [(disabled)]=\"btnSeed\" (click)=\"openDialog('secondplan')\">Subscribe Now</button>\n                    </div>\n            </div>\n            <div class=\"col-md-4 col-sm-8\">\n                <div class=\"pricingTable red\">\n                    <div class=\"pricingTable-header\">\n                        <span class=\"price-value\">50<span class=\"currency\">$</span></span>\n                        <h3 class=\"title\">Growing Plan</h3>\n                    </div>\n                    <ul class=\"pricing-content\">\n                            <li>Introduction of your startup</li>\n                            <li>Profile allocation for 6 team mates</li>\n                            <li>Request for 6 skills</li>\n                            <li>Upload 6 medias (2 video + 4 photo)</li>\n                            <li>Startup statistics (visits, followers, clicked links)</li>\n                            <li>Don't wait for mentors to contact you! Contact them directly!</li>\n                    </ul>\n                    <button class=\"pricingTable-signup btn\" [(disabled)]=\"btnGrow\"   (click)=\"openDialog('thirdplan')\">Subscribe Now</button>\n                </div>\n            </div>\n        </div>\n    </app-card>\n  </div>\n</div>\n\n\n<p-dialog header=\"Changing Subscription\" [(visible)]=\"acceptDialog\" modal=\"modal\" [responsive]=\"true\" [width]=\"600\" [minWidth]=\"200\" >\n    <!-- <p-messages [(value)]=\"checkBoxMsg\"></p-messages>  -->\n    <p>You are changing your subscription from {{subscribe}} to -> {{toSubscribe}}</p>   \n    <hr>\n    <p-checkbox [(ngModel)]=\"agreementAccepted\" binary=\"true\"></p-checkbox><span> I accept the changes that will be made to my account</span>\n        <p-footer>\n            <button type=\"button\" pButton icon=\"fa-check\" (click)=\"openCheckout()\" label=\"Submit Changes\"></button>\n        </p-footer>\n</p-dialog>"

/***/ }),

/***/ "../../../../../src/app/pages/subscribe/subscribe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_subscriber_service__ = __webpack_require__("../../../../../src/app/services/subscriber.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscribeComponent = (function () {
    function SubscribeComponent(subs) {
        this.subs = subs;
        this.doneLoading = false;
        this.btnFree = false;
        this.btnStarter = false;
        this.btnSeed = false;
        this.subscribe = "string";
        this.acceptDialog = false;
        this.btnGrow = false;
        this.checkBoxMsg = [];
        this.checkMsg = [];
        this.agreementAccepted = false;
        this.couponCode = null;
    }
    SubscribeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = {
            "username": localStorage.getItem("currentUser")
        };
        this.subs.getSubscription(user).subscribe(function (res) {
            console.log(res);
            if (res === undefined || res === null) {
                _this.btnFree = true;
                _this.subscribe = "Pending";
            }
            else {
                if (res.planName === "firstplan") {
                    _this.btnStarter = true;
                    _this.subscribe = "Starter Plan";
                }
                else if (res.planName === "secondplan") {
                    _this.btnSeed = true;
                    _this.subscribe = "Seed Plan";
                }
                else if (res.planName === "thirdplan") {
                    _this.btnGrow = true;
                    _this.subscribe = "Growing Plan";
                }
                else {
                    _this.btnFree = true;
                    _this.subscribe = "Pending";
                }
            }
        }, function (err) {
        }, function () {
            _this.doneLoading = true;
        });
    };
    SubscribeComponent.prototype.openDialog = function (event) {
        console.log(event);
        this.acceptDialog = true;
        this.toSubscribe = event;
        if (this.toSubscribe === "firstplan") {
            this.amountToPay = 500;
        }
        else if (this.toSubscribe === "secondplan") {
            this.amountToPay = 2000;
        }
        else if (this.toSubscribe === "thirdplan") {
            this.amountToPay = 5000;
        }
    };
    SubscribeComponent.prototype.openCheckout = function () {
        var _this = this;
        if (this.agreementAccepted) {
            localStorage.setItem("plan", this.toSubscribe);
            if (this.subscribe === "Pending") {
                var handler = window.StripeCheckout.configure({
                    key: 'pk_test_wXA6wdbEojF2hBPaG92mnkOB',
                    locale: 'auto',
                    token: function (token) {
                        console.log(token);
                        localStorage.setItem("token", JSON.stringify(token));
                    },
                    closed: function () { _this.makeNewCust(); }
                });
                handler.open({
                    name: "Mentor's Lab",
                    description: 'Subscription to ' + this.toSubscribe,
                    amount: this.amountToPay
                });
            }
            else {
                this.updateCust();
            }
        }
        else {
            this.showCheckboxError();
        }
    };
    SubscribeComponent.prototype.updateCust = function () {
        var _this = this;
        this.doneLoading = false;
        if (this.agreementAccepted === false) {
            console.log("no input");
        }
        else {
            var sendingObject_1 = {
                "username": localStorage.getItem("currentUser"),
                "newPlan": localStorage.getItem("plan"),
                "coupon": this.couponCode
            };
            console.log(sendingObject_1);
            this.subs.updateSubscription(sendingObject_1).subscribe(function (res) {
                _this.acceptDialog = false;
            }, function (err) {
                localStorage.removeItem("token");
                localStorage.removeItem("plan");
                _this.showError();
                _this.doneLoading = true;
            }, function () {
                localStorage.removeItem("token");
                localStorage.removeItem("plan");
                _this.toSubscribe = null;
                _this.subscribe = sendingObject_1.newPlan,
                    _this.showSuccess();
                _this.acceptDialog = false;
                _this.doneLoading = true;
                if (_this.subscribe === "firstplan") {
                    _this.btnStarter = true;
                    _this.btnFree = false;
                    _this.btnSeed = false;
                    _this.btnGrow = false;
                    _this.subscribe = "Starter Plan";
                }
                else if (_this.subscribe === "secondplan") {
                    _this.btnSeed = true;
                    _this.btnFree = false;
                    _this.btnStarter = false;
                    _this.btnGrow = false;
                    _this.subscribe = "Seed Plan";
                }
                else if (_this.subscribe === "thirdplan") {
                    _this.btnGrow = true;
                    _this.btnFree = false;
                    _this.btnStarter = false;
                    _this.btnSeed = false;
                    _this.subscribe = "Growing Plan";
                }
                else {
                    _this.btnFree = true;
                    _this.btnGrow = false;
                    _this.btnStarter = false;
                    _this.btnSeed = false;
                    _this.subscribe = "Free Plan";
                }
            });
        }
    };
    SubscribeComponent.prototype.makeNewCust = function () {
        var _this = this;
        var input = JSON.parse(localStorage.getItem("token"));
        if (input === undefined || this.agreementAccepted === false) {
            console.log("no input");
        }
        else {
            var sendingObject_2 = {
                "id": input.id,
                "email": input.email,
                "username": localStorage.getItem("currentUser"),
                "newPlan": localStorage.getItem("plan"),
                "coupon": this.couponCode
            };
            this.doneLoading = false;
            this.subs.applySubscription(sendingObject_2).subscribe(function (res) {
                _this.acceptDialog = false;
            }, function (err) {
                localStorage.removeItem("token");
                localStorage.removeItem("plan");
                _this.showError();
                _this.doneLoading = true;
            }, function () {
                localStorage.removeItem("token");
                localStorage.removeItem("plan");
                _this.toSubscribe = null;
                _this.subscribe = sendingObject_2.newPlan,
                    _this.showSuccess();
                _this.acceptDialog = false;
                _this.doneLoading = true;
                if (_this.subscribe === "firstplan") {
                    _this.btnStarter = true;
                    _this.btnFree = false;
                    _this.btnSeed = false;
                    _this.btnGrow = false;
                    _this.subscribe = "Starter Plan";
                }
                else if (_this.subscribe === "secondplan") {
                    _this.btnSeed = true;
                    _this.btnFree = false;
                    _this.btnStarter = false;
                    _this.btnGrow = false;
                    _this.subscribe = "Seed Plan";
                }
                else if (_this.subscribe === "thirdplan") {
                    _this.btnGrow = true;
                    _this.btnFree = false;
                    _this.btnStarter = false;
                    _this.btnSeed = false;
                    _this.subscribe = "Growing Plan";
                }
                else {
                    _this.btnFree = true;
                    _this.btnGrow = false;
                    _this.btnStarter = false;
                    _this.btnSeed = false;
                    _this.subscribe = "Free Plan";
                }
            });
        }
    };
    SubscribeComponent.prototype.useCoupon = function () {
        this.openCheckout();
    };
    SubscribeComponent.prototype.showSuccess = function () {
        this.checkMsg = [];
        this.checkMsg.push({ severity: 'success', summary: 'Update Successful', detail: 'Subscription Update completed successfully' });
    };
    SubscribeComponent.prototype.showError = function () {
        this.checkMsg = [];
        this.checkMsg.push({ severity: 'error', summary: 'Error Message', detail: 'Subscription Update failed' });
    };
    SubscribeComponent.prototype.showCheckboxError = function () {
        this.checkBoxMsg = [];
        this.checkBoxMsg.push({ severity: 'error', summary: 'Error Message', detail: 'Ensure that you agree to the changes in order to submit request' });
    };
    return SubscribeComponent;
}());
SubscribeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-subscribe-page',
        template: __webpack_require__("../../../../../src/app/pages/subscribe/subscribe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/subscribe/subscribe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_subscriber_service__["a" /* SubscriberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_subscriber_service__["a" /* SubscriberService */]) === "function" && _a || Object])
], SubscribeComponent);

var _a;
//# sourceMappingURL=subscribe.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/subscribe/subscribe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeRoutes", function() { return SubscribeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeModule", function() { return SubscribeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscribe_component__ = __webpack_require__("../../../../../src/app/pages/subscribe/subscribe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__ = __webpack_require__("../../../../primeng/components/calendar/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_dialog_dialog__ = __webpack_require__("../../../../primeng/components/dialog/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_dialog_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_components_dialog_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_spinner_spinner__ = __webpack_require__("../../../../primeng/components/spinner/spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_spinner_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_components_spinner_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_checkbox_checkbox__ = __webpack_require__("../../../../primeng/components/checkbox/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_checkbox_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_components_checkbox_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_inputtextarea_inputtextarea__ = __webpack_require__("../../../../primeng/components/inputtextarea/inputtextarea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_inputtextarea_inputtextarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_components_inputtextarea_inputtextarea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_message_message__ = __webpack_require__("../../../../primeng/components/message/message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_message_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_components_message_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SubscribeRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__subscribe_component__["a" /* SubscribeComponent */],
        data: {
            breadcrumb: 'Subscribe',
            icon: 'icofont icofont-file-document bg-c-pink'
        }
    }];
var SubscribeModule = (function () {
    function SubscribeModule() {
    }
    return SubscribeModule;
}());
SubscribeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(SubscribeRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_components_dialog_dialog__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_9_primeng_components_inputtextarea_inputtextarea__["InputTextareaModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_components_spinner_spinner__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_components_checkbox_checkbox__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_components_message_message__["MessageModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__subscribe_component__["a" /* SubscribeComponent */]]
    })
], SubscribeModule);

//# sourceMappingURL=subscribe.module.js.map

/***/ })

});
//# sourceMappingURL=subscribe.module.chunk.js.map