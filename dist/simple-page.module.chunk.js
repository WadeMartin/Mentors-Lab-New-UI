webpackJsonp(["simple-page.module"],{

/***/ "../../../../../src/app/pages/simple-page/simple-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/simple-page/simple-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Hello card'\">\n      <p>\n      \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris\n      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n      in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n      nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n      sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n    </p>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/simple-page/simple-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimplePageComponent = (function () {
    function SimplePageComponent() {
    }
    SimplePageComponent.prototype.ngOnInit = function () {
    };
    return SimplePageComponent;
}());
SimplePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-simple-page',
        template: __webpack_require__("../../../../../src/app/pages/simple-page/simple-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/simple-page/simple-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SimplePageComponent);

//# sourceMappingURL=simple-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/simple-page/simple-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageRoutes", function() { return SimplePageRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageModule", function() { return SimplePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_page_component__ = __webpack_require__("../../../../../src/app/pages/simple-page/simple-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__ = __webpack_require__("../../../../primeng/components/calendar/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SimplePageRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__simple_page_component__["a" /* SimplePageComponent */],
        data: {
            breadcrumb: 'Sample Page',
            icon: 'icofont icofont-file-document bg-c-pink'
        }
    }];
var SimplePageModule = (function () {
    function SimplePageModule() {
    }
    return SimplePageModule;
}());
SimplePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(SimplePageRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__["CalendarModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__simple_page_component__["a" /* SimplePageComponent */]]
    })
], SimplePageModule);

//# sourceMappingURL=simple-page.module.js.map

/***/ })

});
//# sourceMappingURL=simple-page.module.chunk.js.map