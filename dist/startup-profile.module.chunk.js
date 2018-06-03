webpackJsonp(["startup-profile.module"],{

/***/ "../../../../../src/app/pages/startup/profile/startup-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/startup/profile/startup-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"loader-bg\">\n        <!--sk-cube-grid-->\n        <div class=\"sk-cube-grid\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skCubeGrid\">\n            <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube3\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube4\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube5\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube6\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube7\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube8\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube9\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-rotating-plane-->\n        <div class=\"sk-rotating-plane colored-parent\" *ngIf=\"spinner === Spinkit.skRotatingPlane\" [style.background-color]='backgroundColor'></div>\n        <!--sk-double-bounce-->\n        <div class=\"sk-double-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skDoubleBounce\">\n            <div class=\"double-bounce1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"double-bounce2\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-wave-->\n        <div class=\"theme-loader\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWave\">\n            <!--<div class=\"sk-rect sk-rect1\" [style.background-color]='backgroundColor'></div>-->\n            <!--<div class=\"sk-rect sk-rect2\" [style.background-color]='backgroundColor'></div>-->\n            <!--<div class=\"sk-rect sk-rect3\" [style.background-color]='backgroundColor'></div>-->\n            <!--<div class=\"sk-rect sk-rect4\" [style.background-color]='backgroundColor'></div>-->\n            <!--<div class=\"sk-rect sk-rect5\" [style.background-color]='backgroundColor'></div>-->\n          <!-- Pre-loader start -->\n            <div class=\"ball-scale\">\n              <div class='contain'>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n                <div class=\"ring\"><div class=\"frame\"></div></div>\n              </div>\n            </div>\n          <!-- Pre-loader end -->\n\n        </div>\n        <!--sk-wandering-cubes-->\n        <div class=\"sk-wandering-cubes\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWanderingCubes\">\n            <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-spinner-pulse-->\n        <div class=\"sk-spinner sk-spinner-pulse colored-parent\" *ngIf=\"spinner === Spinkit.skSpinnerPulse\" [style.background-color]='backgroundColor'></div>\n        <!--sk-chasing-dots-->\n        <div class=\"sk-chasing-dots\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skChasingDots\">\n            <div class=\"sk-child sk-dot1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-child sk-dot2\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-three-bounce-->\n        <div class=\"sk-three-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skThreeBounce\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-child sk-bounce2\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-child sk-bounce3\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!-- material-line -->\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n        </div>\n\n    </div>\n \n</div>\n<input type=\"file\" \n  #file \n  [multiple]=\"(maxFiles > 1)\"\n  (change) = \"onFileChange($event)\"\n  style=\"display:none\" />\n\n  \n  <input type=\"file\" \n  #doc \n  [multiple]=\"(maxFiles > 1)\"\n  (change) = \"onDocChange($event)\"\n  style=\"display:none\" />\n  \n<div *ngIf=\"!isSpinnerVisible\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"cover-profile\">\n            <div class=\"profile-bg-img\">\n              <img class=\"profile-bg-img img-fluid\" src=\"assets/images/user-profile/bg-img1.jpg\" alt=\"bg-img\">\n              <div class=\"card-body user-info\">\n                <div class=\"col-md-12\">\n                  <div class=\"media-left\">\n                    <a href=\"javascript:;\" (click)=\"file.click()\" class=\"profile-image\">\n                      <img width=\"200px\" height=\"200px\" class=\"user-img img-circle\" [src]=\"imgURL\" alt=\"user-img\">\n                    </a>\n                  </div>\n                  <div class=\"media-body row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"user-title\">\n                        <h1 style=\"color: black\">{{displayUsername}}</h1>\n                      </div>\n                    </div>\n                    <div>\n                      <div class=\"pull-right cover-btn\">\n                        <button type=\"button\" class=\"btn btn-primary m-b-10 m-r-10\"><i class=\"icofont icofont-plus\"></i> Follow</button>\n                        <button type=\"button\" class=\"btn btn-warning m-b-10 m-r-10\"  (click)=\"selectPropose($event)\">Request to be a member</button>\n                        <button *ngIf=\"ownerProfile\" type=\"button\" class=\"btn btn-success m-b-10 m-r-10\"  (click)=\"toggleEditProfile()\"><i class=\"icofont {{editProfileIcon}}\"></i>{{editProfileText}}</button>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--profile cover end-->\n      <p-messages [(value)]=\"checkMsg\"></p-messages>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"md-tabs\">\n            <ngb-tabset>\n              <ngb-tab title=\"Startup Info\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <!-- personal card start -->\n                    <div class=\"card\">\n                      <div class=\"card-header\">\n                        <h5 class=\"card-header-text\">Company Profile</h5>\n                       \n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"view-info\" *ngIf=\"editProfile\">\n                          <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                              <div class=\"general-info\">\n                                <div class=\"row\">\n                                  <div class=\"col-lg-12 col-xl-6\">\n                                    <div class=\"table-responsive\">\n                                      <table class=\"table m-0\">\n                                        <tbody>\n                                        <tr>\n                                          <th scope=\"row\">Company Name</th>\n                                          <td>{{user.companyName}}</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\"># of employees</th>\n                                          <td>{{user.numberOfEmployees}}</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">Company Industry</th>\n                                          <td><div class=\"row\" *ngFor=\"let u of selectedIndustries\">\n                                            <a>{{u}},</a>\n                                          </div></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">Looking for Expertese</th>\n                                          <td><div class=\"row\" *ngFor=\"let u of selectedExpertese\">\n                                            <a>{{u}},</a>\n                                          </div></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">Company Location</th>\n                                          <td>{{user.location}}</td>\n                                        </tr>\n                                        </tbody>\n                                      </table>\n                                    </div>\n                                  </div>\n                                  <!-- end of table col-lg-6 -->\n                                  <div class=\"col-lg-12 col-xl-6\">\n                                    <div class=\"table-responsive\">\n                                      <table class=\"table\">\n                                        <tbody>\n                                        <tr>\n                                          <th scope=\"row\">Company URL</th>\n                                          <td><a href=\"{{user.websiteURL}}\">{{user.websiteURL}}</a></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">Follow Linkden</th>\n                                          <td><a href=\"{{user.linkdenURL}}\"><button type=\"button\" class=\"btn btn-primary m-b-10 m-r-10\"  (click)=\"AddSocialMediaClick('Linkden')\"><i class=\"icofont icofont-brand-linkedin\"></i></button></a></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">Follow Instagram</th>\n                                          <td><a href=\"{{user.instagramURL}}\"><button type=\"button\" class=\"btn btn-danger m-b-10 m-r-10\"  (click)=\"AddSocialMediaClick('Instagram')\"><i class=\"icofont icofont-social-instagram\"></i></button></a></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">Follow Facebook</th>\n                                          <td><a href=\"{{user.facebookURL}}\"><button type=\"button\" class=\"btn btn-success m-b-10 m-r-10\"  (click)=\"AddSocialMediaClick('Facebook')\"><i class=\"icofont icofont-social-facebook\"></i></button></a></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">Follow Twitter</th>\n                                          <td><a href=\"{{user.twitterURL}}\"><button type=\"button\" class=\"btn btn-warning m-b-10 m-r-10\"  (click)=\"AddSocialMediaClick('Twitter')\"><i class=\"icofont icofont-social-twitter\"></i></button></a></td>\n                                        </tr>\n                                        </tbody>\n                                      </table>\n                                    </div>\n                                  </div>\n                                  <!-- end of table col-lg-6 -->\n                                </div>\n                                <!-- end of row -->\n                              </div>\n                              <!-- end of general info -->\n                            </div>\n                            <!-- end of col-lg-12 -->\n                          </div>\n                          <!-- end of row -->\n                        </div>\n                        <!-- end of view-info -->\n                        <div class=\"edit-info\" [hidden]=\"editProfile\" >\n                          <div *ngIf=\"userform\">\n                              <form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\">\n                                  <div class=\"row\">\n                                    <div class=\"col-lg-12\">\n                                      <div class=\"general-info\">\n                                        <div class=\"row\">\n                                          <div class=\"col-lg-6\">\n                                            <div class=\"table-responsive\">\n                                              <table class=\"table\">\n                                                <tbody>\n                                                <tr>\n                                                  <td>\n                                                    <div class=\"input-group\">\n                                                      <span class=\"input-group-addon\">Company Name *:</span>\n                                                      <input type=\"text\" class=\"form-control\" formControlName=\"companyName\" placeholder=\"Company Name\" value=\"Josephine Villa\">\n                                                      <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['companyName'].valid&&userform.controls['companyName'].dirty\">\n                                                          <i class=\"fa fa-close\"></i>\n                                                          Company Name is required\n                                                      </div>\n                                                    </div>\n                                                  </td>\n                                                </tr>\n                                                <tr>\n                                                  <td>\n                                                      <div class=\"input-group\">\n                                                          <span class=\"input-group-addon\"># of employees *:</span>\n                                                                      <select formControlName=\"numberOfEmployees\" class=\"form-control\">\n                                                                          <option value=\"\" selected>---- # of Employees ----</option>\n                                                                          <option value=\"1\">1</option>\n                                                                          <option value=\"2 to 5\">2 to 5</option>\n                                                                          <option value=\"6 to 10\">6 to 10</option>\n                                                                          <option value=\"11 to 20\">11 to 20</option>\n                                                                          <option value=\"+ 20\">+ 20</option>\n                                                                        </select>\n                                                                      <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['numberOfEmployees'].valid&&userform.controls['numberOfEmployees'].dirty\">\n                                                                          <i class=\"fa fa-close\"></i>\n                                                                          # of employees is required\n                                                                      </div>\n                                                      </div>\n                                                  </td>\n                                                   \n                                                </tr>\n                                                <tr>\n                                                  <td><div class=\"input-group\">\n                                                      <span class=\"input-group-addon\">Company Industry *:</span>\n                                                      <p-multiSelect [options]=\"industrese\" formControlName=\"industries\" class=\"form-control\" [(ngModel)]=\"selectedIndustries\"></p-multiSelect>\n                                                      <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['industries'].valid&&userform.controls['industries'].dirty\">\n                                                          <i class=\"fa fa-close\"></i>\n                                                          Atleast 1 Industry is required\n                                                      </div>\n                                                  </div>\n                                                </td>\n                                                    \n                                                  </tr>\n                                                  <tr>\n                                                    <td> <div class=\"input-group\">\n                                                        <span class=\"input-group-addon\">Looking for Expertese *:</span>\n                                                        <p-multiSelect [options]=\"experteses\" formControlName=\"expertises\" class=\"form-control\" [(ngModel)]=\"selectedExpertese\"></p-multiSelect>\n                                                        <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['expertises'].valid&&userform.controls['expertises'].dirty\">\n                                                            <i class=\"fa fa-close\"></i>\n                                                            Atleast 1 expertese is required\n                                                        </div>\n                                                    </div></td>\n                                                     \n                                                    </tr>\n                                                  <tr>\n                                                  <!--  put expertse here -->\n                                                      <td>\n                                                          <div class=\"input-group\">\n                                                              <span class=\"input-group-addon\">Location *:</span>\n                                                              <input placeholder=\"search for location\" autocorrect=\"off\" formControlName=\"location\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search>\n                                                              <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['location'].valid&&userform.controls['location'].dirty\">\n                                                                  <i class=\"fa fa-close\"></i>\n                                                                  Location is required\n                                                              </div>\n                                                            </div>\n\n            <agm-map [hidden]=\"true\" [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n              <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n            </agm-map>\n                                                      </td>\n                                                       \n                                                    </tr>\n                                                </tbody>\n                                              </table>\n                                            </div>\n                                          </div>\n                                          <!-- end of table col-lg-6 -->\n                                          <div class=\"col-lg-6\">\n                                            <div class=\"table-responsive\">\n                                              <table class=\"table\">\n                                                <tbody>\n                                                    <tr>\n                                                        <td>\n                                                            <div class=\"input-group\">\n                                                                <span class=\"input-group-addon\">Website URL :</span>\n                                                                <input type=\"text\" class=\"form-control\" formControlName=\"websiteURL\" placeholder=\"Website URL\" value=\"Josephine Villa\">\n                                                            </div>\n                                                        </td>\n                                                         \n                                                      </tr>\n                                                      <tr>\n                                                          <td>\n                                                              <div class=\"input-group\">\n                                                                  <span class=\"input-group-addon\">Linkden Account URL :</span>\n                                                                  <input type=\"text\" class=\"form-control\" formControlName=\"linkdenURL\" placeholder=\"Linkden Account URL\" value=\"Josephine Villa\">\n                                                              </div>\n                                                          </td>\n                                                           \n                                                        </tr>\n                                                        <tr>\n                                                            <td>\n                                                                <div class=\"input-group\">\n                                                                    <span class=\"input-group-addon\">Instagram Account URL :</span>\n                                                                    <input type=\"text\" class=\"form-control\" formControlName=\"instagramURL\" placeholder=\"Instagram Account URL\" value=\"Josephine Villa\">\n                                                                </div>\n                                                            </td>\n                                                             \n                                                          </tr>\n                                                          <tr>\n                                                              <td>\n                                                                  <div class=\"input-group\">\n                                                                      <span class=\"input-group-addon\">Facebook Account URL :</span>\n                                                                      <input type=\"text\" class=\"form-control\" formControlName=\"facebookURL\" placeholder=\"Facebook Account URL\" value=\"Josephine Villa\">\n                                                                  </div>\n                                                              </td>\n                                                               \n                                                            </tr>\n                                                            <tr>\n                                                                <td>\n                                                                    <div class=\"input-group\">\n                                                                        <span class=\"input-group-addon\">Twitter Account URL :</span>\n                                                                        <input type=\"text\" class=\"form-control\" formControlName=\"twitterURL\" placeholder=\"Twitter Account URL\" value=\"Josephine Villa\">\n                                                                    </div>\n                                                                </td>\n                                                                 \n                                                              </tr>\n                                                </tbody>\n                                              </table>\n                                            </div>\n                                          </div>\n                                          <!-- end of table col-lg-6 -->\n                                        </div>\n                                        <!-- end of row -->\n                                      </div>\n                                      <!-- end of edit info -->\n                                    </div>\n                                    <!-- end of col-lg-12 -->\n                                  </div>\n                                  <!-- end of row -->\n                                  </form>\n                                  \n                          </div>\n                           \n                        </div>\n                        <!-- end of edit-info -->\n                      </div>\n                      <!-- end of card-body -->\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                          <div class=\"card-header\">\n                            <h5 class=\"card-header-text\">Startup Description</h5>\n                           \n                          </div>\n                          <form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\">\n                          <div class=\"card-body user-desc\">\n                            <div class=\"view-desc\" *ngIf=\"editProfile\">\n                              <div [innerHTML]=\"editorContent\"></div>\n                            </div>\n                            <div class=\"edit-desc\" [hidden]=\"editProfile\">\n                               \n                              <div class=\"col-md-12\">\n                              \n      \n      \n                                  <div id=\"toolbar\">\n                                      <!-- Add a bold button -->\n                                      <!-- Add font size dropdown -->\n                                      <select class=\"ql-size\">\n                                        <option value=\"small\"></option>\n                                        <!-- Note a missing, thus falsy value, is used to reset to default -->\n                                        <option selected></option>\n                                        <option value=\"large\"></option>\n                                        <option value=\"huge\"></option>\n                                      </select>\n                                      <span class=\"ql-formats\">\n                                          <button class=\"ql-bold\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <path class=\"ql-stroke\" d=\"M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z\"></path> <path class=\"ql-stroke\" d=\"M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z\"></path> </svg></button>\n                                          <button class=\"ql-italic\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"7\" x2=\"13\" y1=\"4\" y2=\"4\"></line> <line class=\"ql-stroke\" x1=\"5\" x2=\"11\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"8\" x2=\"10\" y1=\"14\" y2=\"4\"></line> </svg></button>\n                                          <button class=\"ql-underline\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <path class=\"ql-stroke\" d=\"M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3\"></path> <rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"12\" x=\"3\" y=\"15\"></rect> </svg></button>\n                                          <button class=\"ql-strike\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=\"15.5\" x2=\"2.5\" y1=\"8.5\" y2=\"9.5\"></line> <path class=\"ql-fill\" d=\"M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z\"></path> <path class=\"ql-fill\" d=\"M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z\"></path> </svg></button>\n                                          </span>\n                                          <span class=\"ql-formats\">\n                                          <button class=\"ql-list\" value=\"ordered\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"4\" y2=\"4\"></line> <line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke ql-thin\" x1=\"2.5\" x2=\"4.5\" y1=\"5.5\" y2=\"5.5\"></line> <path class=\"ql-fill\" d=\"M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z\"></path> <path class=\"ql-stroke ql-thin\" d=\"M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156\"></path> <path class=\"ql-stroke ql-thin\" d=\"M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109\"></path> </svg></button>\n                                          <button class=\"ql-list\" value=\"bullet\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"4\" y2=\"4\"></line> <line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"4\" y2=\"4\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"14\" y2=\"14\"></line> </svg></button>\n                                          <span class=\"ql-align ql-picker ql-icon-picker\"><span class=\"ql-picker-label\" tabindex=\"0\" role=\"button\" aria-expanded=\"false\" aria-controls=\"ql-picker-options-4\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"></line> </svg></span><span class=\"ql-picker-options\" aria-hidden=\"true\" tabindex=\"-1\" id=\"ql-picker-options-4\"><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-selected\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"></line> </svg></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"center\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"14\" x2=\"4\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"12\" x2=\"6\" y1=\"4\" y2=\"4\"></line> </svg></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"right\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"15\" x2=\"5\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"15\" x2=\"9\" y1=\"4\" y2=\"4\"></line> </svg></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"justify\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"4\" y2=\"4\"></line> </svg></span></span></span><select class=\"ql-align\" style=\"display: none;\">\n                                          <option selected=\"\"></option>\n                                          <option value=\"center\"></option>\n                                          <option value=\"right\"></option>\n                                          <option value=\"justify\"></option>\n                                          </select>\n                                          </span>\n                                    </div>\n                                <quill-editor\n                                [(ngModel)]=\"editorContent\"\n                                [options]=\"editorConfig\" formControlName=\"description\" >\n                              </quill-editor>\n                              </div>\n                              <br>\n                              <div class=\"text-center\">\n                                  <button pButton type=\"submit\" *ngIf=\"!editProfile\" [disabled]=\"!userform.valid\" class=\"btn btn-success m-b-10 m-r-10\" label=\"Save Changes\"><i class=\"icofont icofont-save\"></i></button>\n                                  \n                              </div>\n                              <div class=\"text-center\">\n                                <button class=\"btn btn-round btn-danger\" *ngIf=\"!userform.valid\">Please ensure all fields that are required are filled and image uploading errors are amended before saving</button>\n                              </div>\n                                 \n                            </div>\n                          </div>\n                          </form>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- personal card end-->\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Photos\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <!-- personal card start -->\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <div class=\"view-info\" *ngIf=\"editProfile\">\n                          <div *ngIf=\"images\" class=\"text-center\">\n                            <!-- <ngx-carousel\n                          [inputs]=\"carouselTile\">\n                     \n                                <ngx-tile NgxCarouselItem *ngFor=\"let pic of images\">\n                                    <img [src]=\"pic\" class=\"img-responsive\">\n                                </ngx-tile>\n                     \n                              <button NgxCarouselPrev class='btn btn-primary pull-left leftRs'>&lt;</button>\n                              <button NgxCarouselNext class='btn btn-primary pull-right rightRs'>&gt;</button>\n                        </ngx-carousel> -->\n                        \n                              <!-- <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery> -->\n                          </div>\n                          <div *ngIf=\"!images\" class=\"text-center\">\n                              <span><h3>No Photos to view</h3></span>\n                                                      </div>\n                       \n                          <!-- end of row -->\n                        </div>\n                        <!-- end of view-info -->\n                        <div class=\"edit-info\" *ngIf=\"!editProfile\">\n                          <form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\">\n                          <p-fileUpload [showUploadButton]=\"false\" name=\"demo[]\" customUpload=\"true\" (onRemove)=\"myRemove($event)\" (onSelect)=\"mySelect($event)\" (uploadHandler)=\"myUploader($event)\" \n                          multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\">     \n                  </p-fileUpload>\n                  <br>\n                  <div class=\"text-center\">\n                    <button pButton type=\"submit\" *ngIf=\"!editProfile\" [disabled]=\"!userform.valid\" class=\"btn btn-success m-b-10 m-r-10\" label=\"Save Changes\"><i class=\"icofont icofont-save\"></i></button>\n                    \n                </div>\n                <div class=\"text-center\">\n                    <button class=\"btn btn-round btn-danger\" *ngIf=\"!userform.valid\">Please ensure all fields that are required are filled and image uploading errors are amended before saving</button>\n                </div>\n                  </form>\n                  \n                        </div>\n                        <!-- end of edit-info -->\n                      </div>\n                    </div>\n                      <!-- end of card-body -->\n                    </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Videos\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"view-info\" *ngIf=\"editProfile\">\n                                <div *ngIf=\"videos\">\n                                    <ngx-carousel\n                                    [inputs]=\"carouselTile\">\n                               \n                                          <ngx-tile NgxCarouselItem *ngFor=\"let vid of videos\">\n                                              <iframe width=\"100%\" height=\"315\" [src]=\"vid\" frameborder=\"0\" allowfullscreen></iframe>\n                                          </ngx-tile>\n                               \n                                        <button NgxCarouselPrev class='btn btn-primary pull-left leftRs'>&lt;</button>\n                                        <button NgxCarouselNext class='btn btn-primary pull-right rightRs'>&gt;</button>\n                                  </ngx-carousel>\n                                   </div>\n          \n                                  <div *ngIf=\"!videos\" class=\"text-center\">\n          <span><h3>No Videos for this startup</h3></span>\n                                  </div>\n                            </div>\n                            <!-- end of view-info -->\n                            <div class=\"edit-info\" *ngIf=\"!editProfile\">\n                               \n                                    <div class=\"row\">\n                                      <div class=\"col-lg-12\">\n                                        <div class=\"general-info\">\n                                          <div class=\"row\">\n                                            <div class=\"col-lg-6\">\n                                              <div class=\"table-responsive\">\n                                                <table class=\"table\">\n                                                  <tbody>\n                                                  <tr *ngFor=\"let vid of videoLinks; let i = index; trackBy: customTrackBy\">\n                                                    <td>\n                                                      <div class=\"input-group\">\n                                                        <span class=\"input-group-addon\">Video #{{i + 1}} :</span>\n                                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"videoLinks[i]\" placeholder=\"Youtube URL\" value=\"Josephine Villa\">\n                                                      </div>\n                                                    </td>\n                                                  </tr>\n\n                                                  </tbody>\n                                                </table>\n                                              </div>\n                                            </div>\n                                            <!-- end of table col-lg-6 -->\n                                            <!-- end of table col-lg-6 -->\n                                          </div>\n                                          <!-- end of row -->\n                                        </div>\n                                        <!-- end of edit info -->\n                                      </div>\n                                      <!-- end of col-lg-12 -->\n                                    </div>\n                                    <!-- end of row -->\n            \n                      \n                            </div>\n                            <!-- end of edit-info -->\n                          </div>\n                    </div>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Ratings\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <div class=\"card\">\n                      <div class=\"card-header\">\n                        <h5 class=\"card-header-text\">Ratings</h5>\n                      </div>\n                      <div class=\"card-body\">\n                        <ul class=\"media-list\">\n                          <div  *ngFor=\"let rate of ratings\">\n                              <li  class=\"media\">\n                                  <div class=\"media-left\">\n                                    <a href=\"{{'/user/'+rate.raterUsername}}\">\n                                      <img class=\"media-object img-circle comment-img\" src=\"{{rate.raterProfile}}\" alt=\"No Image available\">\n                                    </a>\n                                  </div>\n                                  <div class=\"media-body\">\n                                    <h6 class=\"media-heading\">{{rate.raterUsername}}<span class=\"f-12 text-muted m-l-5\">{{rate.dateCreated.split('T')[0]}}</span></h6>\n                                    <div class=\"stars-example-css\">\n                                      \n                                        <i *ngIf=\"rate.rate >= 1; else templateName\" class=\"icofont icofont-star\" style=\"color: #4680ff\"></i>\n                                      <i *ngIf=\"rate.rate >= 2; else templateName\" class=\"icofont icofont-star\" style=\"color: #4680ff\"></i>\n                                      <i *ngIf=\"rate.rate >= 3; else templateName\" class=\"icofont icofont-star\" style=\"color: #4680ff\"></i>\n                                          <i *ngIf=\"rate.rate >= 4; else templateName\" class=\"icofont icofont-star\" style=\"color: #4680ff\"></i>\n                                          <i *ngIf=\"rate.rate == 5; else templateName\" class=\"icofont icofont-star\" style=\"color: #4680ff\"></i>                                    \n                                      <ng-template #templateName>\n                                          <i class=\"icofont icofont-star\"></i>\n                                      </ng-template>\n                                    </div>\n                                    <p class=\"m-b-0\">{{rate.comment}}</p>\n                                    <hr>\n                                    </div>\n                                </li>\n                          </div>\n                        </ul>\n                        <div *ngIf=\"!ratings || ratings.length === 0\" class=\"text-center\">\n<span><h3>No Ratings recieved for this startup</h3></span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"col-sm-12\">\n          <div class=\"container\">\n            <h1>Angular 2 + Google Maps Places Autocomplete</h1>\n            <div class=\"form-group\">\n              <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n            </div>\n            <agm-map [hidden]=\"true\" [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n              <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n            </agm-map>\n          </div>\n        </div> -->\n</div>\n\n      \n<!--profile cover start-->\n\n\n\n<p-dialog header=\"Propose Expertise for FREE!\" [(visible)]=\"proposeDialog\" modal=\"modal\" [responsive]=\"true\" [width]=\"600\" [minWidth]=\"200\">\n  <p-messages [(value)]=\"checkBoxMsg\"></p-messages>    \n<!-- s -->\n  <hr>\n  <p-checkbox [(ngModel)]=\"agreementAccepted\" binary=\"true\"></p-checkbox><span> I agree to the <a>terms and conditions</a></span>\n      <p-footer>\n          <button type=\"button\" pButton icon=\"fa-check\" (click)=\"sendRequest()\" label=\"Propose Expertise\"></button>\n      </p-footer>\n</p-dialog>\n<p-dialog header=\"Required Login\" [(visible)]=\"loginDisplay\" modal=\"modal\" [responsive]=\"true\" [width]=\"350\" [minWidth]=\"200\">\n<span>Please note you need to login in order to follow this start-up</span>\n    <p-footer>\n        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"loginDisplay=false\" label=\"close\"></button>\n    </p-footer>\n</p-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/pages/startup/profile/startup-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_echart_echarts_all_js__ = __webpack_require__("../../../../../src/assets/charts/echart/echarts-all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_echart_echarts_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_charts_echart_echarts_all_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_spinner_spinkits__ = __webpack_require__("../../../../../src/app/shared/spinner/spinkits.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_rating_service__ = __webpack_require__("../../../../../src/app/services/rating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_subscriber_service__ = __webpack_require__("../../../../../src/app/services/subscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_startup_stats_service__ = __webpack_require__("../../../../../src/app/services/startup-stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_member_request_service__ = __webpack_require__("../../../../../src/app/services/member-request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















var StartupProfileComponent = (function () {
    function StartupProfileComponent(memberRequestService, stat, subs, sanitizer, mapsAPILoader, ngZone, fileService, ratingService, http, fb, userService, startupService, route, router) {
        var _this = this;
        this.memberRequestService = memberRequestService;
        this.stat = stat;
        this.subs = subs;
        this.sanitizer = sanitizer;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.fileService = fileService;
        this.ratingService = ratingService;
        this.http = http;
        this.fb = fb;
        this.userService = userService;
        this.startupService = startupService;
        this.route = route;
        this.router = router;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.spinner = __WEBPACK_IMPORTED_MODULE_7__shared_spinner_spinkits__["a" /* Spinkit */].skWave;
        this.editProfile = true;
        this.editProfileIcon = 'icofont-ui-edit';
        this.editProfileText = " Edit";
        this.checkMsg = [];
        this.isValid = true;
        this.ownerProfile = false;
        this.isSpinnerVisible = true;
        this.Spinkit = __WEBPACK_IMPORTED_MODULE_7__shared_spinner_spinkits__["a" /* Spinkit */];
        this.uploadedFiles = [];
        //#region Form Builder Properties
        this.userform = this.fb.group({});
        //#endregion
        this.isLoggedIn = localStorage.getItem("currentUser");
        this.loginDisplay = false;
        this.proposeDialog = false;
        //#endregion
        //#region Location Lookup
        this.completedLoading = false;
        this.lat = 21.1591857;
        this.lng = 72.7522563;
        this.latA = 21.7613308;
        this.lngA = 71.6753074;
        this.zoom = 8;
        //#endregion
        //#region User Details
        this.loggedInUsername = localStorage.getItem('currentUser');
        this.checkBoxMsg = [];
        this.hasRecievedRatings = false;
        //#endregion
        //#region Image Details
        this.images = [];
        this.photos = [];
        this.docUrl = null;
        this.cvDocButtonClass = "btn btn-success m-b-10 m-r-10";
        this.cvDoc = "Click to upload CV Document";
        this.permissionToEditPic = false;
        this.imgURL = "http://192.168.1.2:8080/pp.png";
        this.errors = [];
        this.dragAreaClass = 'dragarea';
        this.projectId = 0;
        this.sectionId = 0;
        this.fileExt = "JPG, GIF, PNG, PDF, DOCX";
        this.maxFiles = 1;
        this.maxSize = 5; // 5MB
        this.uploadStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
        this.route.params.subscribe(function (params) { return _this.searchInput = params; });
    }
    StartupProfileComponent.prototype.ngOnInit = function () {
        this.loadUserInformation(this.searchInput);
    };
    StartupProfileComponent.prototype.selectPropose = function (event) {
        if (localStorage.getItem("currentUser") !== null && localStorage.getItem("currentUser") !== undefined) {
            this.proposeDialog = true;
            event.preventDefault();
        }
        else {
            this.loginDisplay = true;
        }
    };
    StartupProfileComponent.prototype.sendRequest = function () {
        var _this = this;
        if (this.agreementAccepted) {
            var usernameObject = {
                "Username": localStorage.getItem("currentUser")
            };
            this.userService.getUserDetails(usernameObject).subscribe(function (res) {
                var user = res;
                var request = {
                    "Username": localStorage.getItem("currentUser"),
                    "Reason": user.description,
                    "StartupName": _this.user.companyName
                };
                _this.memberRequestService.sendRequest(request).subscribe(function (output) {
                    console.log(output);
                    // this.showSuccess('Member Request was sent Successfully');
                }, function (err) {
                    //this.showError();
                });
            }, function (err) {
            }, function () {
                var update = {
                    "AmountOfMembersIncrease": 1,
                    "Username": _this.user.OwningUsername
                };
                _this.stat.updateStartUpStat(update).subscribe(function (res) {
                });
            });
        }
        else {
            this.showCheckboxError();
        }
    };
    StartupProfileComponent.prototype.showCheckboxError = function () {
        this.checkBoxMsg = [];
        this.checkBoxMsg.push({ severity: 'error', summary: 'Error Message', detail: 'Ensure that you agree to the terms and conditions in order to submit request' });
    };
    StartupProfileComponent.prototype.mySelect = function (event) {
        console.log(event);
        var _loop_1 = function (file) {
            var index = this_1.uploadedFiles.indexOf(this_1.uploadedFiles.find(function (c) { return c.name === file.name; }));
            console.log(index);
            if (index === -1) {
                this_1.uploadedFiles.push(file);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            _loop_1(file);
        }
        console.log(this.uploadedFiles);
    };
    StartupProfileComponent.prototype.myRemove = function (event) {
        var index = this.uploadedFiles.indexOf(this.uploadedFiles.find(function (c) { return c.name === event.file.name; }));
        console.log(index);
        if (index !== -1) {
            this.uploadedFiles.splice(index, 1);
        }
        console.log(this.uploadedFiles);
        ;
    };
    StartupProfileComponent.prototype.ngAfterViewInit = function () {
    };
    StartupProfileComponent.prototype.toggleEditProfile = function () {
        this.editProfileText = (this.editProfileIcon === 'icofont-close') ? ' Edit' : 'Cancel Changes';
        this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editProfile = !this.editProfile;
    };
    StartupProfileComponent.prototype.buildForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.userform = this.fb.group({
                    'companyName': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.companyName, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
                    'numberOfEmployees': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.numberOfEmployees, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
                    'industries': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.industries, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
                    'description': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.editorContent),
                    'location': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.location, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
                    'websiteURL': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.websiteURL),
                    'expertises': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.expertises, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
                    'linkdenURL': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.linkdenURL),
                    'instagramURL': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.instagramURLd),
                    'facebookURL': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.facebookURL),
                    'twitterURL': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.twitterURL),
                    'OwningUsername': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.user.owningUsername)
                });
                this.experteses = [
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Coaching', value: 'Coaching' },
                    { label: 'Communication', value: 'Communication' },
                    { label: 'Digital', value: 'Digital' },
                    { label: 'Design', value: 'Design' },
                    { label: 'Finance', value: 'Finance' },
                    { label: 'Fundraising', value: 'Fundraising' },
                    { label: 'IT Infustracture', value: 'IT Infustracture' },
                    { label: 'Manufacturing', value: 'Manufacturing' },
                    { label: 'Marketing', value: 'Marketing' },
                    { label: 'Purchasing', value: 'Purchasing' },
                    { label: 'Sales', value: 'Sales' },
                    { label: 'Supply Chain', value: 'Supply Chain' },
                    { label: 'Social Networks', value: 'Social Networks' },
                    { label: 'Software Development', value: 'Software Development' },
                    { label: 'Strategy', value: 'Strategy' }
                ];
                this.industrese = [
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Coaching', value: 'Coaching' },
                    { label: 'Communication', value: 'Communication' },
                    { label: 'Digital', value: 'Digital' },
                    { label: 'Design', value: 'Design' },
                    { label: 'Finance', value: 'Finance' },
                    { label: 'Fundraising', value: 'Fundraising' },
                    { label: 'IT Infustracture', value: 'IT Infustracture' },
                    { label: 'Manufacturing', value: 'Manufacturing' },
                    { label: 'Marketing', value: 'Marketing' },
                    { label: 'Purchasing', value: 'Purchasing' },
                    { label: 'Sales', value: 'Sales' },
                    { label: 'Supply Chain', value: 'Supply Chain' },
                    { label: 'Social Networks', value: 'Social Networks' },
                    { label: 'Software Development', value: 'Software Development' },
                    { label: 'Strategy', value: 'Strategy' }
                ];
                this.editorConfig = {
                    placeholder: "Description about yourself",
                    modules: {
                        toolbar: '#toolbar'
                    }
                };
                this.isSpinnerVisible = false;
                console.log("starts the timeout");
                this.startLocationLookup();
                return [2 /*return*/];
            });
        });
    };
    StartupProfileComponent.prototype.onSubmits = function (value) {
        var _this = this;
        var sendingValue = value;
        sendingValue.profilePicLoc = this.imgURL;
        sendingValue.photos = this.user.photos;
        sendingValue.members = this.user.members;
        sendingValue.videos = this.user.videos;
        this.startupService.createOrUpdateCompany(value).subscribe(function (res) {
            // this.showSuccess("User updated Successfully");
            console.log("updated startup details");
        }, function (err) {
            // this.showError();editProfileIcon
        }, function () {
            //  this.updateLoading = true;
            _this.toggleEditProfile();
        });
        // this.submitted = true;
        // this.msgs = [];
        // this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
    };
    StartupProfileComponent.prototype.loadUserInformation = function (username) {
        var _this = this;
        this.populateMembershipDetails();
        var usernameObject = {
            "SearchInput": username.SearchInput
        };
        console.log(usernameObject);
        this.startupService.searchForCompany(usernameObject).subscribe(function (res) {
            _this.user = res[0];
            console.log(_this.user);
            if (_this.user == undefined) {
                //this.router.navigate(['home']);
            }
            else {
                _this.displayUsername = _this.user.companyName,
                    _this.selectedExpertese = _this.user.expertises,
                    _this.selectedIndustries = _this.user.industries,
                    _this.editorContent = _this.user.description,
                    _this.imgURL = _this.user.logoLoc;
                if (_this.user.owningUsername == localStorage.getItem('currentUser')) {
                    _this.ownerProfile = true;
                }
            }
            // this.username,
            // this.firstName = res.firstName,
            // this.lastName= res.lastName,
            // this.title= res.title,
            // this.description= res.description,
            // this.currentEmployer= res.currentEmployer,
            // this.expertese= res.expertises;
            // this.experience= res.experience;
            // this.location = res.location;
            // this.country = res.country;
            // this.editorContent = res.description;
        }, function (err) {
            console.log('err occured');
            _this.router.navigate(['dashboard']);
        }, function () {
            if (_this.user === null || _this.user === undefined) {
                console.log("goes into this too");
                var usernameObject_1 = {
                    "SearchInput": username.SearchInput
                };
                console.log(usernameObject_1);
                _this.startupService.searchForCompanyByOwner(usernameObject_1).subscribe(function (res) {
                    _this.user = res;
                    console.log(_this.user);
                    if (_this.user == undefined) {
                        _this.router.navigate(['home']);
                    }
                    else {
                        _this.displayUsername = _this.user.companyName,
                            _this.selectedExpertese = _this.user.expertises,
                            _this.selectedIndustries = _this.user.industries,
                            _this.editorContent = _this.user.description,
                            _this.imgURL = _this.user.logoLoc;
                        if (_this.user.owningUsername == localStorage.getItem('currentUser')) {
                            _this.ownerProfile = true;
                        }
                    }
                    // this.username,
                    // this.firstName = res.firstName,
                    // this.lastName= res.lastName,
                    // this.title= res.title,
                    // this.description= res.description,
                    // this.currentEmployer= res.currentEmployer,
                    // this.expertese= res.expertises;
                    // this.experience= res.experience;
                    // this.location = res.location;
                    // this.country = res.country;
                    // this.editorContent = res.description;
                }, function (err) {
                    console.log('err occured');
                    _this.router.navigate(['home']);
                }, function () {
                    if (_this.user !== undefined) {
                        _this.populateReviews();
                        _this.declareImageCarousel();
                        if (_this.ownerProfile == false) {
                            var monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ];
                            var update = {
                                "View": {
                                    "ViewKey": monthNames[new Date().getMonth()]
                                },
                                "Username": _this.user.OwningUsername
                            };
                            _this.stat.updateStartUpStat(update).subscribe(function (res) {
                            });
                        }
                    }
                    else {
                        _this.router.navigate(['home']);
                    }
                });
            }
            else {
                _this.populateReviews();
                _this.declareImageCarousel();
                if (_this.ownerProfile == false) {
                    var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
                    var update = {
                        "View": {
                            "ViewKey": monthNames[new Date().getMonth()]
                        },
                        "Username": _this.user.OwningUsername
                    };
                    _this.stat.updateStartUpStat(update).subscribe(function (res) {
                    });
                }
            }
        });
    };
    StartupProfileComponent.prototype.populateReviews = function () {
        var _this = this;
        var sendingObject = {
            "SearchInput": this.searchInput,
        };
        this.ratingService.searchForRatings(sendingObject).subscribe(function (res) {
            _this.ratings = res;
            console.log(res);
            if (_this.ratings !== null && _this.ratings.length > 0) {
                _this.hasRecievedRatings = true;
                var _loop_2 = function (rate) {
                    console.log("getting inside the ratings");
                    var usernameObject = {
                        "Username": rate.raterUsername
                    };
                    _this.userService.getUserDetails(usernameObject).subscribe(function (res) {
                        _this.ratings[_this.ratings.indexOf(rate)].raterProfile = res.profilePicLoc;
                        console.log("assigned pro-pic");
                    });
                };
                for (var _i = 0, _a = _this.ratings; _i < _a.length; _i++) {
                    var rate = _a[_i];
                    _loop_2(rate);
                }
            }
        }, function (err) {
        }, function () {
            _this.buildForm();
        });
    };
    StartupProfileComponent.prototype.onFileChange = function (event) {
        var files = event.target.files;
        this.saveFiles(files);
    };
    StartupProfileComponent.prototype.onDocChange = function (event) {
        var files = event.target.files;
        this.saveDocs(files);
    };
    StartupProfileComponent.prototype.saveFiles = function (files) {
        var _this = this;
        this.errors = []; // Clear error
        // Validate file size and allowed extensions
        if (files.length > 0 && (!this.isValidFiles(files))) {
            this.uploadStatus.emit(false);
            return;
        }
        if (files.length > 0) {
            var formData = new FormData();
            for (var j = 0; j < files.length; j++) {
                formData.append("file[]", files[j], files[j].name);
            }
            var parameters = {
                projectId: this.projectId,
                sectionId: this.sectionId
            };
            this.fileService.upload(formData, parameters)
                .subscribe(function (success) {
                _this.imgURL = success._body;
                _this.uploadStatus.emit(true);
            }, function (err) {
            }, function () {
            });
        }
    };
    StartupProfileComponent.prototype.saveDocs = function (files) {
        var _this = this;
        this.errors = []; // Clear error
        // Validate file size and allowed extensions
        if (files.length > 0 && (!this.isValidFiles(files))) {
            console.log("uplaodingDoc");
            this.uploadStatus.emit(false);
            return;
        }
        if (files.length > 0) {
            var formData = new FormData();
            for (var j = 0; j < files.length; j++) {
                formData.append("file[]", files[j], files[j].name);
            }
            var parameters = {
                projectId: this.projectId,
                sectionId: this.sectionId
            };
            this.fileService.upload(formData, parameters)
                .subscribe(function (success) {
                _this.docUrl = success._body;
                _this.uploadStatus.emit(true);
                _this.cvDocButtonClass = "btn btn-warning m-b-10 m-r-10";
                _this.cvDoc = "Click to change CV Document";
            }, function (err) {
            }, function () {
            });
        }
    };
    StartupProfileComponent.prototype.isValidFiles = function (files) {
        // Check Number of files
        if (files.length > this.maxFiles) {
            this.errors.push("Error: At a time you can upload only " + this.maxFiles + " files");
            return;
        }
        this.isValidFileExtension(files);
        return this.errors.length === 0;
    };
    StartupProfileComponent.prototype.isValidFileExtension = function (files) {
        // Make array of file extensions
        var extensions = (this.fileExt.split(','))
            .map(function (x) { return x.toLocaleUpperCase().trim(); });
        for (var i = 0; i < files.length; i++) {
            // Get file extension
            var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
            // Check the extension exists
            var exists = extensions.includes(ext);
            if (!exists) {
                this.errors.push("Error (Extension): " + files[i].name);
            }
            // Check file size
            this.isValidFileSize(files[i]);
        }
    };
    StartupProfileComponent.prototype.isValidFileSize = function (file) {
        var fileSizeinMB = file.size / (1024 * 1000);
        var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
        if (size > this.maxSize)
            this.errors.push("Error (File Size): " + file.name + ": exceed file size limit of " + this.maxSize + "MB ( " + size + "MB )");
    };
    StartupProfileComponent.prototype.declareImageCarousel = function () {
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_11_ngx_gallery__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        if (this.user.photos !== null && this.user.photos !== undefined) {
            for (var _i = 0, _a = this.user.photos; _i < _a.length; _i++) {
                var photo = _a[_i];
                //this.images.push(this.sanitizer.bypassSecurityTrustResourceUrl(photo));
                var pic = {
                    small: photo,
                    medium: photo,
                    big: photo
                };
                if (this.galleryImages === undefined) {
                    this.galleryImages = [pic];
                }
                else {
                    this.galleryImages.push(pic);
                }
                console.log(this.images);
            }
        }
        this.carouselTile = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true
            },
            load: 5,
            touch: true,
            easing: 'ease'
        };
        if (this.user.videos !== null && this.user.videos !== undefined) {
            for (var _b = 0, _c = this.user.videos; _b < _c.length; _b++) {
                var vid = _c[_b];
                if (this.videos === undefined) {
                    this.videos = [this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + vid)];
                }
                else {
                    this.videos.push(this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + vid));
                }
            }
        }
    };
    StartupProfileComponent.prototype.populateMembershipDetails = function () {
        var _this = this;
        var user = {
            "username": localStorage.getItem("currentUser")
        };
        this.subs.getSubscription(user).subscribe(function (res) {
            console.log(res);
            if (res === undefined || res === null) {
                _this.router.navigateByUrl('/home');
            }
            else {
                if (res.planName === "firstplan") {
                    _this.subType = "starter";
                    _this.maxSelectedItems = 4;
                    _this.maxAmountOfImages = 0;
                    _this.videoLinks = null;
                }
                else if (res.planName === "secondplan") {
                    _this.subType = "seed";
                    _this.maxSelectedItems = 6;
                    _this.maxAmountOfImages = 1;
                    _this.videoLinks = [""];
                }
                else if (res.planName === "thirdplan") {
                    _this.subType = "growing";
                    _this.maxSelectedItems = 6;
                    _this.maxAmountOfImages = 4;
                    _this.videoLinks = ["", ""];
                }
                else {
                    _this.router.navigateByUrl('/home');
                }
            }
        }, function (err) {
        }, function () {
        });
    };
    StartupProfileComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.checkMsg = [];
        this.isValid = true;
        var files = this.uploadedFiles;
        console.log(this.maxSelectedItems);
        console.log(this.maxAmountOfImages);
        if (this.selectedExpertese.length > this.maxSelectedItems) {
            this.isValid = false;
            this.checkMsg.push({ severity: 'error', summary: 'Error Message', detail: 'You may only select ' + this.maxSelectedItems + ' areas of expertise your startup is looking for' });
        }
        if (this.selectedIndustries.length > 3) {
            this.isValid = false;
            this.checkMsg.push({ severity: 'error', summary: 'Error Message', detail: 'You may only select 3 areas of industry your startup is apart of' });
        }
        if (files.length > this.maxAmountOfImages && files !== undefined) {
            this.isValid = false;
            this.checkMsg.push({ severity: 'error', summary: 'Error Message', detail: 'You may only select ' + this.maxAmountOfImages + ' amount of images for your startup' });
        }
        else {
            if (files.length > 0) {
                if (this.isValid) {
                    var formData = new FormData();
                    for (var j = 0; j < files.length; j++) {
                        formData.append("file[]", files[j], files[j].name);
                    }
                    var parameters = {
                        projectId: this.projectId,
                        sectionId: this.sectionId
                    };
                    this.fileService.UploadBulk(formData, parameters)
                        .subscribe(function (success) {
                        console.log(success._body);
                        var workingString = success._body.replace("[", "");
                        workingString = workingString.replace("]", "");
                        workingString = workingString.replace(/"/g, '');
                        _this.photos = workingString.split('^');
                        console.log(_this.photos);
                        _this.uploadStatus.emit(true);
                        var sendingValue = value;
                        sendingValue.profilePicLoc = _this.imgURL;
                        sendingValue.photos = _this.photos;
                        console.log(sendingValue);
                        _this.startupService.createOrUpdateCompany(sendingValue).subscribe(function (res) {
                        });
                    }, function (error) {
                        _this.uploadStatus.emit(true);
                        _this.errors.push(error.ExceptionMessage);
                    }, function () {
                        //  this.updateLoading = true;
                        _this.toggleEditProfile();
                    });
                }
            }
            else {
                console.log(files);
                this.errors = []; // Clear error
                // Validate file size and allowed extensions      
                if (this.isValid) {
                    this.uploadStatus.emit(true);
                    var sendingValue = value;
                    sendingValue.profilePicLoc = this.imgURL;
                    sendingValue.photos = this.photos;
                    console.log(sendingValue);
                    this.startupService.createOrUpdateCompany(sendingValue).subscribe(function (res) {
                    }, function () { }, function () {
                        //  this.updateLoading = true;
                        _this.toggleEditProfile();
                    });
                }
            }
        }
    };
    StartupProfileComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    StartupProfileComponent.prototype.startLocationLookup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.latitude = 39.8282;
                this.longitude = -98.5795;
                this.zoom = 4;
                //create search FormControl
                this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]();
                //set current position
                console.log(this.searchControl);
                //load Places Autocomplete
                this.mapsAPILoader.load().then(function () {
                    console.log(_this.searchElementRef);
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
                this.completedLoading = true;
                return [2 /*return*/];
            });
        });
    };
    StartupProfileComponent.prototype.AddSocialMediaClick = function (event) {
        var _this = this;
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var update = {
            "SocialMedia": {
                "SocialKey": event,
                "SocialMonth": monthNames[new Date().getMonth()]
            },
            "Username": this.user.owningUsername
        };
        this.stat.updateStartUpStat(update).subscribe(function (res) {
        }, function (err) {
        }, function () {
            if (event == 'Twitter') {
                _this.router.navigateByUrl(_this.user.twitterURL);
            }
            else if (event == 'Facebook') {
                _this.router.navigateByUrl(_this.user.facebookURL);
            }
            else if (event == 'Instagram') {
                _this.router.navigateByUrl(_this.user.instagramURL);
            }
            else if (event == 'Linkden') {
                _this.router.navigateByUrl(_this.user.linkdenURL);
            }
        });
    };
    return StartupProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StartupProfileComponent.prototype, "backgroundColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StartupProfileComponent.prototype, "spinner", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], StartupProfileComponent.prototype, "searchElementRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StartupProfileComponent.prototype, "projectId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StartupProfileComponent.prototype, "sectionId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StartupProfileComponent.prototype, "fileExt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StartupProfileComponent.prototype, "maxFiles", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StartupProfileComponent.prototype, "maxSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], StartupProfileComponent.prototype, "uploadStatus", void 0);
StartupProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/pages/startup/profile/startup-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/startup/profile/startup-profile.component.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinner.component.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-double-bounce.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-chasing-dots.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-cube-grid.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-rotating-plane.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-spinner-pulse.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-three-bounce.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-wandering-cubes.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-wave.css"), __webpack_require__("../../../../../src/app/shared/spinner/spinkit-css/sk-line-material.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('fadeInOutTranslate', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 1 }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ transform: 'translate(0)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_16__services_member_request_service__["a" /* MemberRequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__services_member_request_service__["a" /* MemberRequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_15__services_startup_stats_service__["a" /* StartUpStatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__services_startup_stats_service__["a" /* StartUpStatService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_14__services_subscriber_service__["a" /* SubscriberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__services_subscriber_service__["a" /* SubscriberService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["DomSanitizer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_12__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__agm_core__["b" /* MapsAPILoader */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_file_service__["a" /* FileService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__services_rating_service__["a" /* RatingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_rating_service__["a" /* RatingService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_13__services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_company_service__["a" /* CompanyService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* Router */]) === "function" && _q || Object])
], StartupProfileComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
//# sourceMappingURL=startup-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/startup/profile/startup-profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startupProfileRoutes", function() { return startupProfileRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupProfileModule", function() { return StartupProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startup_profile_component__ = __webpack_require__("../../../../../src/app/pages/startup/profile/startup-profile.component.ts");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_components_message_message__ = __webpack_require__("../../../../primeng/components/message/message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_components_message_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_components_message_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_components_messages_messages__ = __webpack_require__("../../../../primeng/components/messages/messages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_components_messages_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_components_messages_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_components_dialog_dialog__ = __webpack_require__("../../../../primeng/components/dialog/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_components_dialog_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_components_dialog_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_components_checkbox_checkbox__ = __webpack_require__("../../../../primeng/components/checkbox/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_components_checkbox_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_components_checkbox_checkbox__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var startupProfileRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__startup_profile_component__["a" /* StartupProfileComponent */],
        data: {}
    }
];
var StartupProfileModule = (function () {
    function StartupProfileModule() {
    }
    return StartupProfileModule;
}());
StartupProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_15__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk",
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(startupProfileRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_16_ngx_echarts__["a" /* AngularEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_10_primeng_components_button_button__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_9_primeng_components_multiselect_multiselect__["MultiSelectModule"],
            __WEBPACK_IMPORTED_MODULE_11_primeng_components_editor_editor__["EditorModule"],
            __WEBPACK_IMPORTED_MODULE_12_primeng_components_fileupload_fileupload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_13_primeng_components_galleria_galleria__["GalleriaModule"],
            __WEBPACK_IMPORTED_MODULE_20_primeng_components_dialog_dialog__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_14_ngx_gallery__["NgxGalleryModule"],
            __WEBPACK_IMPORTED_MODULE_17_ngx_carousel__["a" /* NgxCarouselModule */],
            __WEBPACK_IMPORTED_MODULE_18_primeng_components_message_message__["MessageModule"],
            __WEBPACK_IMPORTED_MODULE_21_primeng_components_checkbox_checkbox__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_19_primeng_components_messages_messages__["MessagesModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__startup_profile_component__["a" /* StartupProfileComponent */]]
    })
], StartupProfileModule);

//# sourceMappingURL=startup-profile.module.js.map

/***/ })

});
//# sourceMappingURL=startup-profile.module.chunk.js.map