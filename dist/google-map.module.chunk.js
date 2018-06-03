webpackJsonp(["google-map.module"],{

/***/ "../../../../../src/app/pages/map/google-map/google-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/map/google-map/google-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Basic Map'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use property <code>latitude, longitude</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\"></agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Markers Map'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use element <code>agm-marker</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"6\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        <agm-marker [latitude]=\"latA\" [longitude]=\"lngA\"></agm-marker>\n        <agm-marker [latitude]=\"21.6776887\" [longitude]=\"71.566261\"></agm-marker>\n        <agm-marker [latitude]=\"22.3220876\" [longitude]=\"73.1030464\"></agm-marker>\n        <agm-marker [latitude]=\"23.0201818\" [longitude]=\"72.4396587\"></agm-marker>\n        <agm-marker [latitude]=\"22.2734719\" [longitude]=\"70.7512565\"></agm-marker>\n      </agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Styled Map'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\"></agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Polylines'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        <agm-marker [latitude]=\"latA\" [longitude]=\"lngA\"></agm-marker>\n        <agm-polyline>\n          <agm-polyline-point [latitude]=\"lat\" [longitude]=\"lng\">\n          </agm-polyline-point>\n          <agm-polyline-point [latitude]=\"latA\" [longitude]=\"lngA\">\n          </agm-polyline-point>\n        </agm-polyline>\n      </agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Info Window'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"21.6776887\" [longitude]=\"71.566261\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\">\n        <agm-marker [latitude]=\"21.6776887\" [longitude]=\"71.566261\">\n          <agm-info-window>Nice Place</agm-info-window>\n        </agm-marker>\n      </agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Circle'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n        <agm-circle\n          [latitude]=\"lat + 0.3\"\n          [longitude]=\"lng\"\n          [radius]=\"50000\"\n          [fillColor]=\"'red'\"\n          [circleDraggable]=\"true\"\n          [editable]=\"true\"\n        >\n        </agm-circle>\n      </agm-map>\n    </app-card>\n  </div>\n</div>\n\n<div class=\"col-sm-12\">\n  <div class=\"container\">\n    <h1>Angular 2 + Google Maps Places Autocomplete</h1>\n    <div class=\"form-group\">\n      <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n    </div>\n    <agm-map [hidden]=\"true\" [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n      <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n    </agm-map>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/map/google-map/google-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleMapComponent = (function () {
    function GoogleMapComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.lat = 21.1591857;
        this.lng = 72.7522563;
        this.latA = 21.7613308;
        this.lngA = 71.6753074;
        this.zoom = 8;
        this.styles = [{
                featureType: 'all',
                stylers: [{
                        saturation: -80
                    }]
            }, {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{
                        hue: '#00ffee'
                    }, {
                        saturation: 50
                    }]
            }, {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [{
                        visibility: 'off'
                    }]
            }];
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        //set current position
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["(cities)"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    return GoogleMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], GoogleMapComponent.prototype, "searchElementRef", void 0);
GoogleMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-google-map',
        template: __webpack_require__("../../../../../src/app/pages/map/google-map/google-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/map/google-map/google-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object])
], GoogleMapComponent);

var _a, _b, _c;
//# sourceMappingURL=google-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/google-map/google-map.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleRoutes", function() { return googleRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapModule", function() { return GoogleMapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_map_component__ = __webpack_require__("../../../../../src/app/pages/map/google-map/google-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var googleRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__google_map_component__["a" /* GoogleMapComponent */],
        data: {
            breadcrumb: 'Google Map',
            icon: 'icofont-map bg-c-pink',
            status: true
        }
    }
];
var GoogleMapModule = (function () {
    function GoogleMapModule() {
    }
    return GoogleMapModule;
}());
GoogleMapModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk",
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(googleRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__google_map_component__["a" /* GoogleMapComponent */]]
    })
], GoogleMapModule);

//# sourceMappingURL=google-map.module.js.map

/***/ })

});
//# sourceMappingURL=google-map.module.chunk.js.map