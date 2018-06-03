webpackJsonp(["members-management.module"],{

/***/ "../../../../../src/app/pages/members-management/members-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/members-management/members-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <!-- <li>\n                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'wait'})\">Primary/Wait</button>\n              </li>\n              <li>\n                <button class=\"btn btn-warning waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'warning'})\">Warning</button>\n              </li> -->\n  <div class=\"col-sm-12\">\n    <app-card>\n     <div class=\"table-responsive\">\n      <table class=\"table table-striped table-hover table-inverse\">\n        <thead>\n          <tr>\n            <th scope=\"col\" style=\"text-align: center\">Username</th>\n            <th scope=\"col\" style=\"text-align: center\">First Name</th>\n            <th scope=\"col\" style=\"text-align: center\">Last Name</th>\n            <th scope=\"col\" style=\"text-align: center\">Location</th>\n            <th scope=\"col\" style=\"text-align: center\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of userProfiles\">\n            <td style=\"text-align: center\">{{item.username}}</td>\n            <td style=\"text-align: center\">{{item.firstName}}</td>\n            <td style=\"text-align: center\">{{item.lastName}}</td>\n            <td style=\"text-align: center\">{{item.location}}</td>\n            <td style=\"text-align: center\"><button class=\"btn btn-primary btn-round\" (click)=\"selectInfo($event, item)\" pTooltip=\"View Members Profile\" tooltipPosition=\"top\"><i class=\"icofont icofont-info-circle\"></i></button> <button class=\"btn btn-success btn-round\" (click)=\"selectRating($event, item)\"  pTooltip=\"Rate Member\" tooltipPosition=\"top\"><i class=\"icofont icofont-star\"></i></button> <button class=\"btn btn-warning btn-round\" (click)=\"selectReport($event, item)\"  pTooltip=\"Report Member\" tooltipPosition=\"top\"><i class=\"icofont icofont-exclamation-circle\"></i></button> <button (click)=\"selectRemove($event, item)\"  class=\"btn btn-danger btn-round\" pTooltip=\"Remove Member\" tooltipPosition=\"top\"><i class=\"icofont icofont-ui-delete\"></i></button></td>\n          </tr>\n          \n        </tbody>\n      </table>\n     </div>\n    </app-card>\n  </div>\n</div>\n\n <!-- info of a member -->\n<p-dialog header=\"User Details\" [(visible)]=\"infoDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"400\"\n    (onAfterHide)=\"onDialogHide()\">\n    <div class=\"ui-g\" *ngIf=\"selectedUser\">\n        <div class=\"ui-g-12\" style=\"text-align:center\">\n            <img [src]=\"selectedUser.profilePicLoc\" style=\"width: 200px; height: 200px\">\n        </div>\n        <div class=\"ui-g-5\">Username: </div>\n        <div class=\"ui-g-7\">\n            <b>{{selectedUser.username}}</b>\n        </div>\n\n        <div class=\"ui-g-5\">First Name: </div>\n        <div class=\"ui-g-7\">\n            <b>{{selectedUser.firstName}}</b>\n        </div>\n\n        <div class=\"ui-g-5\">Last Name: </div>\n        <div class=\"ui-g-7\">\n            <b>{{selectedUser.lastName}}</b>\n        </div>\n\n        <div class=\"ui-g-5\">Current Employer: </div>\n        <div class=\"ui-g-7\">\n            <b>{{selectedUser.currentEmployer}}</b>\n        </div>\n\n        <div class=\"ui-g-5\">Title: </div>\n        <div class=\"ui-g-7\">\n            <b>{{selectedUser.title}}</b>\n        </div>\n        <div class=\"ui-g-5\">Description: </div>\n        <div class=\"ui-g-7\">\n                <div [innerHtml]=\"selectedUser.description\">\n\n                    </div>\n            \n        </div>\n        <div class=\"ui-g-5\">Expertises: </div>\n        <div class=\"ui-g-7\">\n                <b>{{selectedUser.expertises}}</b>\n        </div>\n        <div class=\"ui-g-5\">CV Document: </div>\n        <div class=\"ui-g-7\">\n            <button class=\"btn btn-success\" (click)=\"downloadCV($event)\">Download CV</button>\n        </div>\n    </div>\n</p-dialog>\n\n   <!-- reports -->\n<p-dialog header=\"Report Information\" [(visible)]=\"reportDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"600\"\n    (onAfterHide)=\"onDialogHide()\">\n    <div class=\"ui-g\" *ngIf=\"selectedUser\">\n        <div class=\"ui-g-7\">Reason for reporting: </div>\n        <div class=\"ui-g-12\">\n            <textarea rows=\"5\" cols=\"75\" [(ngModel)]=\"reportReason\" pInputTextarea autoResize=\"autoResize\"></textarea>\n        </div>\n        <div align=\"center\" class=\"row\">\n            <button class=\"btn btn-danger\" (click)=\"reportUser($event,user)\">Report</button>\n        </div>\n    </div>\n</p-dialog>\n\n\n   <!-- remove member -->\n   <p-dialog header=\"Verification\" [(visible)]=\"removeDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"600\"\n   (onAfterHide)=\"onDialogHide()\">\n   <div class=\"ui-g\" align=\"center\" *ngIf=\"selectedUser\">\n       <div class=\"ui-g-12\">Are you sure you want to remove this member: </div>\n       <div class=\"ui-g-6\">\n            <button class=\"btn btn-primary\" (click)=\"cancelDialog($event,user)\">Cancel</button>\n       </div>\n       <div class=\"ui-g-6\">\n           <button class=\"btn btn-danger\" (click)=\"removeUser($event,user)\">Remove</button>\n       </div>\n   </div>\n</p-dialog>\n\n<!-- rate the user -->\n<p-dialog header=\"Rate this User!\" [(visible)]=\"ratingDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"600\"\n    (onAfterHide)=\"onDialogHide()\">\n    <div class=\"ui-g\"  *ngIf=\"selectedUser\">\n            <div class=\"ui-g-12\" style=\"text-align:center\">\n                    <img [src]=\"selectedUser.profilePicLoc\" style=\"width: 150px; height: 150px\">\n            </div>\n            <div class=\"ui-g-12\" style=\"text-align:center\">\n                <h4>Wade</h4>\n            </div>\n            <hr >\n            <br />\n        <div class=\"ui-g-4\">Rating for user: </div>\n        <div class=\"ui-g-8\">\n                <p-spinner size=\"30\" required [(ngModel)]=\"rateValue\" [min]=\"1\" [max]=\"5\"></p-spinner>\n        </div>\n        <div class=\"ui-g-4\">Comment: </div>\n        <div class=\"ui-g-12\">\n                <textarea rows=\"5\" cols=\"75\"  [(ngModel)]=\"rateReason\" required pInputTextarea autoResize=\"autoResize\"></textarea>\n        </div>\n        <div class=\"ui-g-4\"></div>\n        <div class=\"ui-g-6\">\n                <button class=\"btn btn-success\" (click)=\"rateUser($event,user)\">Submit Rating</button>\n        </div>\n    </div>\n</p-dialog>\n<ng2-toasty [position]=\"position\"></ng2-toasty>"

/***/ }),

/***/ "../../../../../src/app/pages/members-management/members-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rating_service__ = __webpack_require__("../../../../../src/app/services/rating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_member_request_service__ = __webpack_require__("../../../../../src/app/services/member-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MembersManagementComponent = (function () {
    //#endregion
    function MembersManagementComponent(toastyService, ratingService, reportService, companyService, memberRequestService, userService, fileService) {
        this.toastyService = toastyService;
        this.ratingService = ratingService;
        this.reportService = reportService;
        this.companyService = companyService;
        this.memberRequestService = memberRequestService;
        this.userService = userService;
        this.fileService = fileService;
        this.reportDialog = false;
        this.ratingDialog = false;
        this.removeDialog = false;
        this.msgs = [];
        this.doneLoading = false;
        //#endregion
        //#region 
        this.position = 'bottom-right';
        this.showClose = true;
        this.timeout = 5000;
        this.theme = 'bootstrap';
        this.type = 'default';
        this.closeOther = false;
    }
    MembersManagementComponent.prototype.ngOnInit = function () {
        this.populateInformation();
    };
    MembersManagementComponent.prototype.populateInformation = function () {
        var _this = this;
        var sendingObject = {
            "SearchInput": localStorage.getItem("currentUser")
        };
        this.companyService.searchForCompanyByOwner(sendingObject).subscribe(function (res) {
            _this.memberRequests = res.members;
            if (_this.memberRequests !== undefined && _this.memberRequests !== null) {
                for (var _i = 0, _a = _this.memberRequests; _i < _a.length; _i++) {
                    var req = _a[_i];
                    var userObj = {
                        "Username": req
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
                        //   this.showError("Error","Unable to process the transaction");
                    });
                }
            }
        }, function (err) {
            // this.showError("Error","Unable to process the transaction");
        }, function () {
            _this.doneLoading = true;
        });
    };
    //#region Methods relating to dialogs
    MembersManagementComponent.prototype.selectInfo = function (event, request) {
        this.selectedUser = request;
        console.log(this.selectedUser);
        this.infoDialog = true;
        event.preventDefault();
    };
    MembersManagementComponent.prototype.selectReport = function (event, request) {
        this.selectedUser = request;
        this.reportDialog = true;
        event.preventDefault();
    };
    MembersManagementComponent.prototype.selectRating = function (event, request) {
        this.selectedUser = request;
        this.ratingDialog = true;
        event.preventDefault();
    };
    MembersManagementComponent.prototype.selectRemove = function (event, request) {
        this.selectedUser = request;
        this.removeDialog = true;
        event.preventDefault();
    };
    MembersManagementComponent.prototype.removeUser = function (event, request) {
        var _this = this;
        this.addToast({ title: 'Processing Action', msg: 'Processing your current action, please wait', timeout: 5000, theme: 'default', position: 'bottom-right', type: 'wait' });
        var userObj = {
            "Username": localStorage.getItem("currentUser"),
            "MemberName": this.selectedUser.username,
        };
        this.companyService.removeUserFromMembers(userObj).subscribe(function (use) {
            console.log("Result from Adding ->" + use._body);
            //this.showError("Success","Member removed Successful");
            _this.userProfiles = _this.userProfiles.filter(function (val, i) { return i != _this.userProfiles.indexOf(_this.selectedUser); });
            _this.selectedUser = null;
            _this.removeDialog = false;
        }, function (err) {
            // this.showError("Error","Unable to process the transaction");
            _this.addToast({ title: 'An Error Occured', msg: 'an Error occured, please ensure all information is correct and try again', timeout: 5000, theme: 'material', position: 'bottom-right', type: 'error' });
        }, function () {
            _this.addToast({ title: 'Successful Removed User', msg: 'You have successfully removed the current user', timeout: 8000, theme: 'default', position: 'bottom-right', type: 'success' });
        });
    };
    MembersManagementComponent.prototype.reportUser = function (event, request) {
        var _this = this;
        this.addToast({ title: 'Processing Action', msg: 'Processing your current action, please wait', timeout: 5000, theme: 'default', position: 'bottom-right', type: 'wait' });
        var userObj = {
            "Reporter": localStorage.getItem("currentUser"),
            "Reported": this.selectedUser.username,
            "Description": this.reportReason
        };
        this.reportService.submitReport(userObj).subscribe(function (use) {
            console.log("Result from Reporting ->" + use._body);
            // this.showWarn();
            // this.userProfiles = this.userProfiles.filter((val,i) => i!=this.userProfiles.indexOf(request));
            _this.selectedUser = null;
        }, function (err) {
            //  this.showError("Error","Unable to process the transaction");
            _this.addToast({ title: 'An Error Occured', msg: 'an Error occured, please ensure all information is correct and try again', timeout: 5000, theme: 'material', position: 'bottom-right', type: 'error' });
        }, function () {
            _this.addToast({ title: 'Successful Reported User', msg: 'You have successfully reported the current user', timeout: 8000, theme: 'default', position: 'bottom-right', type: 'success' });
        });
        this.reportReason = "";
        this.reportDialog = false;
    };
    MembersManagementComponent.prototype.addToast = function (options) {
        if (options.closeOther) {
            this.toastyService.clearAll();
        }
        this.position = options.position ? options.position : this.position;
        var toastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: function (toast) {
                /* added */
            },
            onRemove: function (toast) {
                /* removed */
            }
        };
        switch (options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    MembersManagementComponent.prototype.rateUser = function (event, request) {
        var _this = this;
        this.addToast({ title: 'Processing Action', msg: 'Processing your current action, please wait', timeout: 5000, theme: 'default', position: 'bottom-right', type: 'wait' });
        var userObj = {
            "RaterUsername": localStorage.getItem("currentUser"),
            "For": this.selectedUser.username,
            "Rate": this.rateValue,
            "Comment": this.rateReason,
        };
        this.ratingService.submitRating(userObj).subscribe(function (use) {
            console.log("Result from Reporting ->" + use._body);
            // this.showSuccess();
            // this.userProfiles = this.userProfiles.filter((val,i) => i!=this.userProfiles.indexOf(request));
            _this.selectedUser = null;
        }, function (err) {
            //this.showError("Error","Unable to process the transaction");
            _this.addToast({ title: 'An Error Occured', msg: 'an Error occured, please ensure all information is correct and try again', timeout: 5000, theme: 'material', position: 'bottom-right', type: 'error' });
        }, function () {
            _this.addToast({ title: 'Successful Rated User', msg: 'You have successfully rated the current user', timeout: 8000, theme: 'default', position: 'bottom-right', type: 'success' });
        });
        this.rateReason = "";
        this.ratingDialog = false;
        this.rateValue = 1;
    };
    MembersManagementComponent.prototype.downloadCV = function (event) {
        // let userObj = {
        //     "filePath": this.selectedUser.cvDocLoc
        // }
        // this.fileService.GetCVDocument(userObj);
        var blob = new Blob([this.selectedUser.cvDocLoc], { type: 'application/pdf' }); //
        Object(__WEBPACK_IMPORTED_MODULE_7_file_saver__["saveAs"])(blob, "CVDoc.pdf");
    };
    return MembersManagementComponent;
}());
MembersManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-members-management',
        template: __webpack_require__("../../../../../src/app/pages/members-management/members-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/members-management/members-management.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng2_toasty__["b" /* ToastyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_rating_service__["a" /* RatingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_rating_service__["a" /* RatingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_member_request_service__["a" /* MemberRequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_member_request_service__["a" /* MemberRequestService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]) === "function" && _g || Object])
], MembersManagementComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=members-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/members-management/members-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersManagementRoutes", function() { return MembersManagementRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersManagementModule", function() { return MembersManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members_management_component__ = __webpack_require__("../../../../../src/app/pages/members-management/members-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__ = __webpack_require__("../../../../primeng/components/calendar/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_tooltip_tooltip__ = __webpack_require__("../../../../primeng/components/tooltip/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_tooltip_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_components_tooltip_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_dialog_dialog__ = __webpack_require__("../../../../primeng/components/dialog/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_dialog_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_components_dialog_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_inputtextarea_inputtextarea__ = __webpack_require__("../../../../primeng/components/inputtextarea/inputtextarea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_inputtextarea_inputtextarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_components_inputtextarea_inputtextarea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_spinner_spinner__ = __webpack_require__("../../../../primeng/components/spinner/spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_spinner_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_components_spinner_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MembersManagementRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__members_management_component__["a" /* MembersManagementComponent */],
        data: {
            breadcrumb: 'Members Management',
            icon: 'icofont icofont-ui-user-group bg-c-blue'
        }
    }];
var MembersManagementModule = (function () {
    function MembersManagementModule() {
    }
    return MembersManagementModule;
}());
MembersManagementModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(MembersManagementRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_components_calendar_calendar__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_components_tooltip_tooltip__["TooltipModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_components_dialog_dialog__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_components_inputtextarea_inputtextarea__["InputTextareaModule"],
            __WEBPACK_IMPORTED_MODULE_9_primeng_components_spinner_spinner__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_11_ng2_toasty__["a" /* ToastyModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__members_management_component__["a" /* MembersManagementComponent */]]
    })
], MembersManagementModule);

//# sourceMappingURL=members-management.module.js.map

/***/ })

});
//# sourceMappingURL=members-management.module.chunk.js.map