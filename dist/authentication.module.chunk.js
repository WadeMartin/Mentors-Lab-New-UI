webpackJsonp(["authentication.module"],{

/***/ "../../../../../src/app/pages/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_with_bg_image_with_bg_image_component__ = __webpack_require__("../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_with_social_with_social_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/with-social/with-social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_message_message__ = __webpack_require__("../../../../primeng/components/message/message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_message_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_components_message_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_messages_messages__ = __webpack_require__("../../../../primeng/components/messages/messages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_messages_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_components_messages_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_4__login_with_bg_image_with_bg_image_component__["a" /* WithBgImageComponent */],
                data: {
                    breadcrumb: 'Login'
                }
            },
            {
                path: 'registration',
                component: __WEBPACK_IMPORTED_MODULE_5__registration_with_social_with_social_component__["a" /* WithSocialComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }
        ]
    }
];
var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(AuthenticationRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_components_message_message__["MessageModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_components_messages_messages__["MessagesModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__login_with_bg_image_with_bg_image_component__["a" /* WithBgImageComponent */], __WEBPACK_IMPORTED_MODULE_5__registration_with_social_with_social_component__["a" /* WithSocialComponent */]]
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\n  <div class=\"auth-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"login-card card-body auth-body\">\n          <form class=\"md-float-material\">\n            <div class=\"text-center\">\n              <img src=\"assets/images/logo.png\" width=\"250px\" height=\"80px\" alt=\"logo.png\">\n            </div>\n            <div class=\"auth-box\">\n              <div class=\"row m-b-20\">\n                <div class=\"col-md-12\">\n                  <h3 class=\"text-left txt-primary\">Sign In</h3>\n                </div>\n              </div>\n              <hr/>\n              <div class=\"input-group\">\n                <input type=\"email\" name=\"Email\" [(ngModel)]=\"Email\" class=\"form-control\" placeholder=\"Your Email Address\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"password\" name=\"Password\" [(ngModel)]=\"Password\" class=\"form-control\" placeholder=\"Password\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"row m-t-25 text-left\">\n                <div class=\"col-sm-7 col-xs-12\">\n                  <!-- <div class=\"checkbox-fade fade-in-primary\">\n                    <label>\n                      <input type=\"checkbox\" value=\"\">\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\n                      <span class=\"text-inverse\">Remember me</span>\n                    </label>\n                  </div> -->\n                </div>\n                <div class=\"col-sm-12 col-xs-12 forgot-phone text-right\">\n                  <a [routerLink]=\"['/authentication/forgot']\" class=\"text-right f-w-600 text-inverse\"> Forgot Your Password?</a>\n                </div>\n              </div>\n              <div class=\"row m-t-30\">\n                <div class=\"col-md-12\">\n                  <button type=\"button\" (click)=\"login($event)\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\"><i class=\"{{icon}}\"></i>Sign in</button>\n                </div>\n              </div>\n              <hr/>\n              <div class=\"row\">\n                <div class=\"col-md-9\">\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\n                  <p class=\"text-inverse text-left\"><b>The Mentor's Lab Team</b></p>\n                </div>\n                <div class=\"col-md-3\">\n                  <img src=\"assets/images/logo-icon.png\" height=\"50px\" width=\"50px\" alt=\"small-logo.png\">\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithBgImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WithBgImageComponent = (function () {
    function WithBgImageComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.isFail = false;
        this.icon = "icofont icofont-login";
    }
    //#endregion
    WithBgImageComponent.prototype.ngOnInit = function () {
    };
    WithBgImageComponent.prototype.login = function (event) {
        var _this = this;
        this.icon = "fa fa-cog fa-spin";
        var loginObject = {
            "Email": this.Email,
            "Password": this.Password
        };
        this.loginService.login(loginObject).subscribe(function (res) {
            if (res !== null) {
                localStorage.setItem("currentUser", res.username);
                localStorage.setItem("type", res.type);
                _this.router.navigate(['home']);
            }
            else {
            }
        }, function (err) { }, function () {
        });
    };
    return WithBgImageComponent;
}());
WithBgImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-with-bg-image',
        template: __webpack_require__("../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _b || Object])
], WithBgImageComponent);

var _a, _b;
//# sourceMappingURL=with-bg-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social/with-social.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social/with-social.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\n  <!-- starts -->\n  <div class=\"auth-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <!-- Authentication card start -->\n        <div class=\"login-card card-body auth-body\">\n            <div class=\"text-center\">\n              <img src=\"assets/images/logo.png\" width=\"250px\" height=\"80px\" alt=\"logo.png\">\n            </div>\n            <form class=\"md-float-material\" [formGroup]=\"userform\" (ngSubmit)=\"login(userform.value)\">\n            <div class=\"auth-box\">\n              <div class=\"row m-b-20\">\n                <div class=\"col-md-12\">\n                  <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\n                </div>\n              </div>\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Register your account</p>\n              <div *ngIf=\"!isFormValid\">\n                <p-messages severity=\"error\" [(value)]=\"usernameError\" ></p-messages>\n            </div>\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"Username\" placeholder=\"Username\">\n                <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['Username'].valid&&userform.controls['Username'].dirty\">\n                    <i class=\"fa fa-close\"></i>\n                    username is required\n                </div>\n            </div>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"Email\" placeholder=\"E-Mail Address\">\n              <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['Email'].valid&&userform.controls['Email'].dirty\">\n                  <i class=\"fa fa-close\"></i>\n                  Email is required\n              </div>\n          </div>\n          <div class=\"input-group\">\n            <input type=\"password\" class=\"form-control\" formControlName=\"Password\" placeholder=\"Password\">\n            <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['Password'].valid&&userform.controls['Password'].dirty\">\n                <i class=\"fa fa-close\"></i>\n                Password is required\n            </div>\n        </div>\n              <div class=\"input-group\">\n                  <select formControlName=\"AccountType\" class=\"form-control\">\n                      <option selected value=\"\">-- Select a Account Type --</option>\n                      <option value=\"mentor\">Mentor</option>\n                      <option value=\"startup\" selected>Start-Up</option>\n                    </select>\n                    <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['AccountType'].valid&&userform.controls['AccountType'].dirty\">\n                      <i class=\"fa fa-close\"></i>\n                      Account Type is required\n                  </div>\n              </div>\n              <div class=\"row m-t-25 text-left\">\n                <div class=\"col-md-12\">\n                  <div class=\"checkbox-fade fade-in-primary\">\n                    <label>\n                      <input formControlName=\"termsAndConds\" type=\"checkbox\" value=\"\">\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\n                      <span class=\"text-inverse\">I read and accept <a href=\"javascript:;\">Terms &amp; Conditions.</a></span>\n                      <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['termsAndConds'].valid&&userform.controls['termsAndConds'].dirty\">\n                        <i class=\"fa fa-close\"></i>\n                        Terms and Conditions must be accepted\n                    </div>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row m-t-30\">\n                <div class=\"col-md-12\">\n                  <button pButton type=\"submit\" [disabled]=\"!userform.valid\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\"><i class=\"{{icon}}\"></i>Sign up now.</button>\n                </div>\n              </div>\n              <hr/>\n              <div class=\"row\">\n                <div class=\"col-md-10\">\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\n                  <p class=\"text-inverse text-left\"><b>The Mentor's Lab Team</b></p>\n                </div>\n                <div class=\"col-md-2\">\n                  <img src=\"assets/images/logo-icon.png\" height=\"50px\" width=\"50px\" alt=\"small-logo.png\">\n                </div>\n              </div>\n            </div>\n          </form>\n          <!-- end of form -->\n        </div>\n        <!-- Authentication card end -->\n      </div>\n      <!-- end of col-sm-12 -->\n    </div>\n    <!-- end of row -->\n  </div>\n  <!-- end of -->\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social/with-social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithSocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WithSocialComponent = (function () {
    function WithSocialComponent(fb, loginService, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.userform = this.fb.group({});
        this.isFormValid = true;
        this.icon = "fa fa-user-plus";
        this.usernameError = [];
    }
    WithSocialComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    WithSocialComponent.prototype.buildForm = function () {
        this.userform = this.fb.group({
            'Username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'Email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'))]),
            'Password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'AccountType': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'termsAndConds': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].requiredTrue)
        });
    };
    WithSocialComponent.prototype.login = function (value) {
        var _this = this;
        this.usernameError = [];
        this.icon = "fa fa-cog fa-spin";
        var login = value;
        this.loginService.validateEmail(login).subscribe(function (res) {
            console.log(res._body);
            if (res._body === null) {
                _this.isFormValid = true;
            }
            else {
                _this.usernameError.push({ severity: 'error', summary: 'Error Message', detail: "E-mail already exists" });
                _this.isFormValid = false;
            }
        }, function (err) {
            _this.usernameError = [];
            _this.usernameError.push({ severity: 'error', summary: 'Error Message', detail: "Ensure the fields are filled" });
        }, function () {
            _this.loginService.validateUsername(login).subscribe(function (res) {
                console.log(res._body);
                if (res._body === null) {
                    _this.isFormValid = true;
                }
                else {
                    _this.usernameError.push({ severity: 'error', summary: 'Error Message', detail: "Username is already taken" });
                    _this.isFormValid = false;
                }
            }, function (err) {
                _this.usernameError = [];
                _this.usernameError.push({ severity: 'error', summary: 'Error Message', detail: "Ensure the fields are filled" });
            }, function () {
                if (_this.isFormValid) {
                    _this.loginService.createLogin(login).subscribe(function (res) {
                    }, function (err) {
                        _this.icon = "fa fa-user-plus";
                    }, function () {
                        _this.icon = "fa fa-user-plus";
                        _this.actuallyLogin(value);
                    });
                }
                else {
                    _this.icon = "fa fa-user-plus";
                }
            });
        });
    };
    WithSocialComponent.prototype.actuallyLogin = function (value) {
        var _this = this;
        var loginObject = value;
        console.log(loginObject);
        this.loginService.login(loginObject).subscribe(function (res) {
            if (res._body !== null) {
                localStorage.setItem("currentUserToken", res.token);
                localStorage.setItem("currentUser", res.username);
                localStorage.setItem("type", res.type);
            }
            else {
            }
        }, function (err) {
            _this.usernameError = [];
            _this.usernameError.push({ severity: 'error', summary: 'Error Message', detail: "E-mail already exists" });
        }, function () {
            _this.router.navigate(['home']);
        });
    };
    return WithSocialComponent;
}());
WithSocialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-with-social',
        template: __webpack_require__("../../../../../src/app/pages/authentication/registration/with-social/with-social.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/with-social/with-social.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _c || Object])
], WithSocialComponent);

var _a, _b, _c;
//# sourceMappingURL=with-social.component.js.map

/***/ })

});
//# sourceMappingURL=authentication.module.chunk.js.map