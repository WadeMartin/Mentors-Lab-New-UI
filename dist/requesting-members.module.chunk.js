webpackJsonp(["requesting-members.module"],{

/***/ "../../../../../src/app/pages/requesting-members/requesting-members.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/requesting-members/requesting-members.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card>\n      <br>\n      <div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-sm-12 col-md-6\">\n              <div>\n                <label class=\"label-control\">Show\n                  <select class=\"form-control input-sm full-data-show-entry\" [(ngModel)]=\"rowsOnPage\">\n                    <option [ngValue]=\"10\">10</option>\n                    <option [ngValue]=\"25\">25</option>\n                    <option [ngValue]=\"50\">50</option>\n                    <option [ngValue]=\"100\">100</option>\n                  </select>\n                  entries\n                </label>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-6\">\n              <div style=\"text-align: right;\">\n                <label>Search:\n                  <input type=\"search\" [(ngModel)]=\"filterQuery\" class=\"form-control input-sm full-data-search\" placeholder=\"Search name\">\n                </label>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"panel-heading\">User information</div>-->\n          <div style=\"max-height: 250px\" class=\"table-responsive\">\n            <table class=\"table table-striped table-hover table-inverse table-bordered full-data-table\" [mfData]=\"this.userProfiles\" #mf=\"mfDataTable\"\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\n              <thead>\n              <tr style=\"text-align: center\">\n                <th style=\"text-align: center\">\n                  <mfDefaultSorter  by=\"username\">Username</mfDefaultSorter>\n                </th>\n                <th style=\"text-align: center\">\n                  <mfDefaultSorter by=\"firstname\">First Name</mfDefaultSorter>\n                </th>\n                <th style=\"text-align: center\">\n                  <mfDefaultSorter  by=\"lastname\">Last Name</mfDefaultSorter>\n                </th>\n                <th style=\"text-align: center\">\n                  <mfDefaultSorter by=\"lcoation\">Location</mfDefaultSorter>\n                </th>\n                <th style=\"text-align: center\">\n                  <mfDefaultSorter>Action</mfDefaultSorter>\n                </th>\n              </tr>\n              <tr>\n              </tr>\n              </thead>\n              <tbody>\n                  <tr style=\"text-align: center\"  *ngFor=\"let item of mf.data | RequestingMembersSearchPipe : filterQuery\">\n                      <td>{{item.username}}</td>\n                      <td>{{item.firstName}}</td>\n                      <td>{{item.lastName}}</td>\n                      <td>{{item.location}}</td>\n                      <td style=\"text-align: center\"><button (click)=\"selectCar($event, item)\" class=\"btn btn-primary btn-round\" pTooltip=\"View Members Profile\" tooltipPosition=\"top\"><i class=\"icofont icofont-info-circle\"></i></button> <button (click)=\"addUser($event, item)\" class=\"btn btn-success btn-round\" pTooltip=\"Accept Member\" tooltipPosition=\"top\"><i class=\"icofont icofont-ui-check\"></i></button> <button (click)=\"rejectUser($event, item)\" class=\"btn btn-danger btn-round\" pTooltip=\"Decline Member\" tooltipPosition=\"top\"><i class=\"icofont icofont-ui-close\"></i></button></td>\n                    </tr>\n                    \n              </tbody>\n              <tfoot>\n              <tr>\n                <td colspan=\"7\">\n                  <mfBootstrapPaginator style=\"color: black\" class=\"pagination-main f-right\"></mfBootstrapPaginator>\n                </td>\n              </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div>\n\n\n\n        <p-dialog header=\"User Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"400\"\n        (onAfterHide)=\"onDialogHide()\">\n        <div class=\"ui-g\" *ngIf=\"selectedUser\">\n            <div class=\"ui-g-12\" style=\"text-align:center\">\n                <img src=\"{{selectedUser.profilePicLoc}}\" style=\"width: 200px; height: 200px\">\n            </div>\n            <div class=\"ui-g-4\">Username: </div>\n            <div class=\"ui-g-8\">\n                <b>{{selectedUser.username}}</b>\n            </div>\n    \n            <div class=\"ui-g-4\">First Name: </div>\n            <div class=\"ui-g-8\">\n                <b>{{selectedUser.firstName}}</b>\n            </div>\n    \n            <div class=\"ui-g-4\">Last Name: </div>\n            <div class=\"ui-g-8\">\n                <b>{{selectedUser.lastName}}</b>\n            </div>\n            <div class=\"ui-g-4\">Current Employer: </div>\n            <div class=\"ui-g-8\">\n                <b>{{selectedUser.currentEmployer}}</b>\n            </div>\n    \n            <div class=\"ui-g-4\">Title: </div>\n            <div class=\"ui-g-8\">\n                <b>{{selectedUser.title}}</b>\n            </div>\n            <div class=\"ui-g-4\">Description: </div>\n            <div class=\"ui-g-8\">\n                <div [innerHtml]=\"selectedUser.description\">\n\n                  </div>\n            </div>\n            <div class=\"ui-g-4\">Expertises: </div>\n            <div class=\"ui-g-8\">\n                <b>{{selectedUser.expertises}}</b>\n            </div>\n            <div class=\"ui-g-4\">CV Document: </div>\n            <div class=\"ui-g-8\">\n                <button class=\"btn btn-success\" (click)=\"downloadCV($event)\">Download CV</button>\n            </div>\n        </div>\n    </p-dialog>\n\n\n\n\n\n     <!-- <div class=\"table-responsive\">\n      <table class=\"table table-striped table-hover table-inverse\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Username</th>\n            <th scope=\"col\">First Name</th>\n            <th scope=\"col\">Last Name</th>\n            <th scope=\"col\">Location</th>\n            <th scope=\"col\" style=\"text-align: center\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Wade</td>\n            <td>Wade</td>\n            <td>Martin</td>\n            <td>Pretoria</td>\n            <td style=\"text-align: center\"><button class=\"btn btn-primary btn-round\" pTooltip=\"View Members Profile\" tooltipPosition=\"top\"><i class=\"icofont icofont-info-circle\"></i></button> <button class=\"btn btn-success btn-round\" pTooltip=\"Accept Member\" tooltipPosition=\"top\"><i class=\"icofont icofont-ui-check\"></i></button> <button class=\"btn btn-danger btn-round\" pTooltip=\"Decline Member\" tooltipPosition=\"top\"><i class=\"icofont icofont-ui-close\"></i></button></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Wade</td>\n            <td>Wade</td>\n            <td>Martin</td>\n            <td>Pretoria</td>\n            <td style=\"text-align: center\"><button class=\"btn btn-primary btn-round\" pTooltip=\"View Members Profile\" tooltipPosition=\"top\"><i class=\"icofont icofont-info-circle\"></i></button> <button class=\"btn btn-success btn-round\" pTooltip=\"Accept Member\" tooltipPosition=\"top\"><i class=\"icofont icofont-ui-check\"></i></button> <button class=\"btn btn-danger btn-round\" pTooltip=\"Decline Member\" tooltipPosition=\"top\"><i class=\"icofont icofont-ui-close\"></i></button></td>\n          </tr>\n          \n        </tbody>\n      </table>\n     </div> -->\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/requesting-members/requesting-members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestingMembersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_charts_echart_echarts_all_js__ = __webpack_require__("../../../../../src/assets/charts/echart/echarts-all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_charts_echart_echarts_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_charts_echart_echarts_all_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_member_request_service__ = __webpack_require__("../../../../../src/app/services/member-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_startup_stats_service__ = __webpack_require__("../../../../../src/app/services/startup-stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestingMembersComponent = (function () {
    function RequestingMembersComponent(memberRequestService, stat, userService, fileService) {
        this.memberRequestService = memberRequestService;
        this.stat = stat;
        this.userService = userService;
        this.fileService = fileService;
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
        this.msgs = [];
        this.doneLoading = false;
    }
    RequestingMembersComponent.prototype.ngOnInit = function () {
        this.populateMembers();
    };
    RequestingMembersComponent.prototype.populateMembers = function () {
        var _this = this;
        var sendingObject = {
            "SearchInput": localStorage.getItem("currentUser")
        };
        this.memberRequestService.searchForRequests(sendingObject).subscribe(function (res) {
            console.log(res);
            _this.memberRequests = res;
            if (_this.memberRequests !== undefined && _this.memberRequests !== null) {
                for (var _i = 0, _a = _this.memberRequests; _i < _a.length; _i++) {
                    var req = _a[_i];
                    var userObj = {
                        "Username": req.username
                    };
                    _this.userService.getUserDetails(userObj).subscribe(function (use) {
                        console.log(use);
                        if (_this.userProfiles === undefined || _this.userProfiles === null) {
                            console.log("gets here");
                            _this.userProfiles = [use];
                            console.log(_this.userProfiles);
                        }
                        else {
                            console.log("gets here to");
                            _this.userProfiles.push(use);
                            console.log(_this.userProfiles);
                        }
                    }, function (err) {
                    });
                }
            }
        }, function (err) {
        }, function () {
        });
    };
    RequestingMembersComponent.prototype.selectCar = function (event, request) {
        this.selectedUser = request;
        this.displayDialog = true;
        event.preventDefault();
    };
    RequestingMembersComponent.prototype.downloadCV = function (event) {
        // let userObj = {
        //     "filePath": this.selectedUser.cvDocLoc
        // }
        var blob = new Blob([this.selectedUser.cvDocLoc], { type: 'application/pdf' });
        Object(__WEBPACK_IMPORTED_MODULE_6_file_saver__["saveAs"])(blob, "CVDoc.pdf");
        // var url= window.URL.createObjectURL(blob);
        // window.open(url);
        //this.fileService.GetCVDocument(userObj);
    };
    RequestingMembersComponent.prototype.addUser = function (event, request) {
        var _this = this;
        var userObj = {
            "Username": localStorage.getItem("currentUser"),
            "RequestingUsername": request.username,
            "Response": true,
            "Id": this.memberRequests.find(function (i) { return i.username == request.username; }).id
        };
        this.memberRequestService.approveRequest(userObj).subscribe(function (use) {
            console.log("Result from Adding ->" + use._body);
            _this.showSuccess();
            _this.userProfiles = _this.userProfiles.filter(function (val, i) { return i != _this.userProfiles.indexOf(request); });
            _this.selectedUser = null;
        }, function (err) {
            _this.showError();
        }, function () {
            var update = {
                "MembersApprovedIncrease": 1,
                "Username": localStorage.getItem('currentUser')
            };
            _this.stat.updateStartUpStat(update).subscribe(function (res) {
            });
        });
    };
    RequestingMembersComponent.prototype.rejectUser = function (event, request) {
        var _this = this;
        var userObj = {
            "Username": localStorage.getItem("currentUser"),
            "RequestingUsername": request.username,
            "Id": this.memberRequests.find(function (i) { return i.username == request.username; }).id,
            "Response": false,
        };
        this.memberRequestService.approveRequest(userObj).subscribe(function (use) {
            console.log("Result from Adding ->" + use);
            _this.showWarn();
            _this.userProfiles = _this.userProfiles.filter(function (val, i) { return i != _this.userProfiles.indexOf(request); });
            _this.selectedUser = null;
        }, function (err) {
            _this.showError();
        }, function () {
            var update = {
                "MembersRejectedIncrease": 1,
                "Username": localStorage.getItem('currentUser')
            };
            _this.stat.updateStartUpStat(update).subscribe(function (res) {
            });
        });
    };
    RequestingMembersComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Member Request was Approved Successfully' });
    };
    RequestingMembersComponent.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'Member Request was Rejected Successfully' });
    };
    RequestingMembersComponent.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Unable to process action' });
    };
    RequestingMembersComponent.prototype.onDialogHide = function () {
        this.selectedUser = null;
    };
    return RequestingMembersComponent;
}());
RequestingMembersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-requesting-members',
        template: __webpack_require__("../../../../../src/app/pages/requesting-members/requesting-members.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/requesting-members/requesting-members.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_member_request_service__["a" /* MemberRequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_member_request_service__["a" /* MemberRequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_startup_stats_service__["a" /* StartUpStatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_startup_stats_service__["a" /* StartUpStatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_file_service__["a" /* FileService */]) === "function" && _d || Object])
], RequestingMembersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=requesting-members.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/requesting-members/requesting-members.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestingMembersRoutes", function() { return RequestingMembersRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestingMembersModule", function() { return RequestingMembersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requesting_members_component__ = __webpack_require__("../../../../../src/app/pages/requesting-members/requesting-members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__ = __webpack_require__("../../../../primeng/components/calendar/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_tooltip_tooltip__ = __webpack_require__("../../../../primeng/components/tooltip/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_tooltip_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_components_tooltip_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__requesting_members_search_pipe__ = __webpack_require__("../../../../../src/app/pages/requesting-members/requesting-members.search-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_dialog_dialog__ = __webpack_require__("../../../../primeng/components/dialog/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_dialog_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_components_dialog_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_components_inputtextarea_inputtextarea__ = __webpack_require__("../../../../primeng/components/inputtextarea/inputtextarea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_components_inputtextarea_inputtextarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_components_inputtextarea_inputtextarea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_components_spinner_spinner__ = __webpack_require__("../../../../primeng/components/spinner/spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_components_spinner_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_components_spinner_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var RequestingMembersRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__requesting_members_component__["a" /* RequestingMembersComponent */],
        data: {
            breadcrumb: 'Requesting Members',
            icon: 'icofont icofont-user-alt-7 bg-c-green'
        }
    }];
var RequestingMembersModule = (function () {
    function RequestingMembersModule() {
    }
    return RequestingMembersModule;
}());
RequestingMembersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(RequestingMembersRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_components_tooltip_tooltip__["TooltipModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_echarts__["a" /* AngularEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_13_primeng_components_dialog_dialog__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_14_primeng_components_inputtextarea_inputtextarea__["InputTextareaModule"],
            __WEBPACK_IMPORTED_MODULE_15_primeng_components_spinner_spinner__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_16_ng2_toasty__["a" /* ToastyModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__requesting_members_component__["a" /* RequestingMembersComponent */], __WEBPACK_IMPORTED_MODULE_12__requesting_members_search_pipe__["a" /* RequestingMembersSearchPipe */]]
    })
], RequestingMembersModule);

//# sourceMappingURL=requesting-members.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/requesting-members/requesting-members.search-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestingMembersSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RequestingMembersSearchPipe = (function () {
    function RequestingMembersSearchPipe() {
    }
    RequestingMembersSearchPipe.prototype.transform = function (array, query) {
        if (query) {
            console.log("inside the query =>" + query);
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.username.toLowerCase().indexOf(query) > -1 || row.location.toLowerCase().indexOf(query) > -1; });
        }
        return array;
    };
    return RequestingMembersSearchPipe;
}());
RequestingMembersSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "RequestingMembersSearchPipe"
    })
], RequestingMembersSearchPipe);

//# sourceMappingURL=requesting-members.search-pipe.js.map

/***/ })

});
//# sourceMappingURL=requesting-members.module.chunk.js.map