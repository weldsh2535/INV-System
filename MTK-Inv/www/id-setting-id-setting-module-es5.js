(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["id-setting-id-setting-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/id-setting/id-setting.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/id-setting/id-setting.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppIdSettingIdSettingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <div>\n      <ion-item color=\"primary\" lines=\"none\">\n      <ion-label>Id Setting</ion-label>\n      <ion-badge color=\"success\" slot=\"end\">{{lengthOfIdSetting}}</ion-badge>\n      </ion-item>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n    <form [formGroup]=\"regform\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <ion-item>\n              <ion-label position=\"floating\">Prefix</ion-label>\n              <ion-input formControlName=\"prefix\" ></ion-input>\n              <small class=\"form-text text-muted\" *ngIf=\"!regform.get('prefix').valid && regform.get('prefix').touched\" > This field is required! </small> \n            </ion-item>\n          </div>\n          <div class=\"col-md-6\">\n            <ion-item>\n              <ion-label position=\"floating\">Length</ion-label>\n              <ion-input formControlName=\"length\"></ion-input>\n               <small class=\"form-text text-muted\" *ngIf=\"!regform.get('length').valid && regform.get('length').touched\" > This field is required! </small> \n            </ion-item>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <ion-item>\n              <ion-label position=\"floating\">Suffix</ion-label>\n              <ion-input formControlName=\"suffix\"></ion-input>\n              <small class=\"form-text text-muted\" *ngIf=\"!regform.get('suffix').valid && regform.get('suffix').touched\" > This field is required! </small> \n            </ion-item>\n          </div>\n          <div class=\"col-md-6\">\n            <ion-item>\n              <ion-label position=\"floating\">Current Id</ion-label>\n              <ion-input formControlName=\"currentId\"></ion-input>\n              <small class=\"form-text text-muted\" *ngIf=\"!regform.get('currentId').valid && regform.get('currentId').touched\" > This field is required! </small> \n            </ion-item>\n          </div>\n        </div>\n      </div>\n     <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"Save()\" > \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Id Setting':'Add Id Setting'}}</ion-button>\n    </div>\n  </form>\n  </ion-list>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"form-group\">\n       <ion-searchbar showCancelButton=\"never\" [(ngModel)]=\"searchText\" placeholder=\"Search\"></ion-searchbar>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <div class=\"d-flex flex-row-reverse bd-highlight mb-2\">\n            <div class=\"p-2 bd-highlight\">\n              <select (change)=\"onTableSizeChange($event)\" class=\"custom-select\">\n                <option *ngFor=\"let size of tableSizes\" [ngValue]=\"size\">\n                  {{ size }}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n  \n  <table class=\"table\" >\n    <colgroup>\n      <col width=\"15%\">\n      <col width=\"15%\">\n      <col width=\"15%\">\n      <col width=\"15%\">\n    </colgroup>\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Preffix</th>\n        <th scope=\"col\">Suffix</th>\n        <th scope=\"col\">Length</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngIf=\"idSettingList?.length==0\" >\n        <td class=\"font-italic text-center\" colspan=\"5\">\n          No  item selected for this order.\n        </td>\n      </tr>\n      <tr *ngFor=\"let item of idSettingList|filter:searchText  | paginate : {\n                                              itemsPerPage: tableSize,\n                                              currentPage: page,\n                                              totalItems: count\n                                            };\n                                      let i = index\" [class.active]=\"i == currentIndex\">\n        <th scope=\"row\">{{i + 1}}</th>\n        <td>{{item.prefix}}</td>\n        <td>{{item.suffix}}</td>\n        <td>{{item.length}}</td>\n        <td (click)=\"Edit(item)\"><ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></td>\n        <td (click)=\"delete(item)\"><ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></td>\n      </tr>\n    </tbody>\n  \n  </table>\n  <!-- <div *ngIf=\"(idSettingList | filter: searchText).length === 0\">\n    <div>error</div>\n    <div >0 results</div>\n    <div>No matching this search input data!!!</div>\n  </div> -->\n  <div class=\"d-flex justify-content-center\">\n    <pagination-controls \n      responsive=\"true\" \n      previousLabel=\"Prev\" \n      nextLabel=\"Next\" \n      (pageChange)=\"onTableDataChange($event)\">\n    </pagination-controls>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/id-setting/id-setting-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/id-setting/id-setting-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: IdSettingPageRoutingModule */

    /***/
    function srcAppIdSettingIdSettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdSettingPageRoutingModule", function () {
        return IdSettingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _id_setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./id-setting.page */
      "./src/app/id-setting/id-setting.page.ts");

      var routes = [{
        path: '',
        component: _id_setting_page__WEBPACK_IMPORTED_MODULE_3__["IdSettingPage"]
      }];

      var IdSettingPageRoutingModule = function IdSettingPageRoutingModule() {
        _classCallCheck(this, IdSettingPageRoutingModule);
      };

      IdSettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IdSettingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/id-setting/id-setting.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/id-setting/id-setting.module.ts ***!
      \*************************************************/

    /*! exports provided: IdSettingPageModule */

    /***/
    function srcAppIdSettingIdSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdSettingPageModule", function () {
        return IdSettingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _id_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./id-setting-routing.module */
      "./src/app/id-setting/id-setting-routing.module.ts");
      /* harmony import */


      var _id_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./id-setting.page */
      "./src/app/id-setting/id-setting.page.ts");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-pagination */
      "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

      var IdSettingPageModule = function IdSettingPageModule() {
        _classCallCheck(this, IdSettingPageModule);
      };

      IdSettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _id_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdSettingPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]],
        declarations: [_id_setting_page__WEBPACK_IMPORTED_MODULE_6__["IdSettingPage"]]
      })], IdSettingPageModule);
      /***/
    },

    /***/
    "./src/app/id-setting/id-setting.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/id-setting/id-setting.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppIdSettingIdSettingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkLXNldHRpbmcvaWQtc2V0dGluZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/id-setting/id-setting.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/id-setting/id-setting.page.ts ***!
      \***********************************************/

    /*! exports provided: IdSettingPage */

    /***/
    function srcAppIdSettingIdSettingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdSettingPage", function () {
        return IdSettingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _Service_lookup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../Service/lookup.service */
      "./src/app/Service/lookup.service.ts");
      /* harmony import */


      var _Service_id_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Service/id-setting.service */
      "./src/app/Service/id-setting.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var IdSettingPage = /*#__PURE__*/function () {
        function IdSettingPage(fb, idSettingService, lookupService, alertController) {
          _classCallCheck(this, IdSettingPage);

          this.fb = fb;
          this.idSettingService = idSettingService;
          this.lookupService = lookupService;
          this.alertController = alertController;
          this.editMode = false; //paging declaration

          this.page = 1;
          this.count = 0;
          this.tableSize = 3;
          this.tableSizes = [3, 6, 9, 12];
          this.currentIndex = -1;
        }

        _createClass(IdSettingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.regform = this.fb.group({
              voucherTypeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              prefix: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              length: [''],
              suffix: [''],
              currentId: ['']
            });
            this.lookupService.getLookUpByType('HuXhQ8ChpLL3DbXQR6yh').subscribe(function (result) {
              _this.vouchertype = result;
            });
            this.allIdSetting();
          }
        }, {
          key: "allIdSetting",
          value: function allIdSetting() {
            var _this2 = this;

            this.idSettingService.getAllIdSetting().subscribe(function (result) {
              _this2.idSettingList = result;
              _this2.lengthOfIdSetting = _this2.idSettingList.length; // console.log(this.lengthOfIdSetting);
            });
          }
        }, {
          key: "Save",
          value: function Save() {
            if (this.regform.valid) {
              if (!this.IdSettingId) {
                this.idSettingService.create(this.regform.value);
              } else {
                this.idSettingService.updateIdSetting(this.regform.value, this.IdSettingId);
              }

              this.regform.reset();
              this.IdSettingId = "";
              this.presentAlert("Save Sucessfully");
            } else {
              this.presentAlert("Please enter all fields");
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Id Setting',
                        // subHeader: 'Subtitle',
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "Edit",
          value: function Edit(item, slidingItem) {
            this.editMode = true;
            this.IdSettingId = item.id;
            this.regform.get("voucherTypeId").setValue(item.voucherTypeId);
            this.regform.get("length").setValue(item.length);
            this.regform.get("prefix").setValue(item.prefix);
            this.regform.get("suffix").setValue(item.suffix);
            this.regform.get("currentId").setValue(item.currentId); //slidingItem.close();
          }
        }, {
          key: "delete",
          value: function _delete(item, slidingItem) {
            this.presentAlertConfirm(item);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Confirm!',
                        message: '<strong>Are you sure you want delete?</strong>',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'OK',
                          handler: function handler() {
                            _this3.idSettingService.removeIdSetting(item.id);

                            _this3.regform.reset();

                            _this3.IdSettingId = null;
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getIdSetting",
          value: function getIdSetting() {
            var _this4 = this;

            try {
              this.idSettingService.getAllIdSetting().subscribe(function (result) {
                if (result.length > 0) {
                  _this4.listOfIdSetting = result;
                } else {
                  _this4.AlertInternet();
                }
              });
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "AlertInternet",
          value: function AlertInternet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Internet',
                        message: 'Please trun on data or wifi',
                        buttons: ['ok']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } //paging function

        }, {
          key: "onTableDataChange",
          value: function onTableDataChange(event) {
            this.page = event;
            this.getIdSetting();
          }
        }, {
          key: "onTableSizeChange",
          value: function onTableSizeChange(event) {
            this.tableSize = event.target.value;
            this.page = 1;
            this.getIdSetting();
          }
        }]);

        return IdSettingPage;
      }();

      IdSettingPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _Service_id_setting_service__WEBPACK_IMPORTED_MODULE_2__["IdSettingService"]
        }, {
          type: _Service_lookup_service__WEBPACK_IMPORTED_MODULE_1__["LookupService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      IdSettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-id-setting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./id-setting.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/id-setting/id-setting.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./id-setting.page.scss */
        "./src/app/id-setting/id-setting.page.scss"))["default"]]
      })], IdSettingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=id-setting-id-setting-module-es5.js.map