(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerCustomerPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Customer Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label position=\"floating\">Full Name</ion-label>\n      <ion-input formControlName=\"fullname\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('fullname').valid && regform.get('fullname').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Phone number</ion-label>\n      <ion-input formControlName=\"phonenumber\" type=\"number\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('phonenumber').valid && regform.get('phonenumber').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Location</ion-label>\n      <ion-input formControlName=\"location\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('location').valid && regform.get('location').touched\" > This field is required! </small> \n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Balance</ion-label>\n      <ion-input formControlName=\"balance\" type=\"number\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('balance').valid && regform.get('balance').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Address</ion-label>\n      <ion-input formControlName=\"address\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('address').valid && regform.get('address').touched\" > This field is required! </small> \n    </ion-item>\n    <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"SaveCustomer()\"> \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Customer':'Add Customer'}}</ion-button>\n    </div>\n  </form>\n  </ion-list>\n  <ion-searchbar\n  (keyup)=\"filter($event)\"  showCancelButton=\"never\"></ion-searchbar>\n\n   <ion-item-sliding  *ngFor=\"let item of ListOfCustomer \" #slidingItem >\n        <ion-item detail>\n          <ion-label \n          style=\"background-color: rgb(155, 166, 173); border-radius: 7px; text-align: center;color: rgb(10, 100, 236);\">\n            <h2>Full Name is: {{item.fullname}}</h2>\n            <h3>Phone Number: {{item.phonenumber}}</h3>\n            <h3>Address : {{item.address}}</h3>\n          </ion-label>\n          \n        </ion-item>\n      <ion-item-options side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"Edit(item,slidingItem)\">\n     <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n     <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n      <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/customer/customer-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/customer/customer-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CustomerPageRoutingModule */

    /***/
    function srcAppCustomerCustomerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerPageRoutingModule", function () {
        return CustomerPageRoutingModule;
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


      var _customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customer.page */
      "./src/app/customer/customer.page.ts");

      var routes = [{
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_3__["CustomerPage"]
      }];

      var CustomerPageRoutingModule = function CustomerPageRoutingModule() {
        _classCallCheck(this, CustomerPageRoutingModule);
      };

      CustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomerPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customer/customer.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/customer/customer.module.ts ***!
      \*********************************************/

    /*! exports provided: CustomerPageModule */

    /***/
    function srcAppCustomerCustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function () {
        return CustomerPageModule;
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


      var _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customer-routing.module */
      "./src/app/customer/customer-routing.module.ts");
      /* harmony import */


      var _customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customer.page */
      "./src/app/customer/customer.page.ts");

      var CustomerPageModule = function CustomerPageModule() {
        _classCallCheck(this, CustomerPageModule);
      };

      CustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerPageRoutingModule"]],
        declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]]
      })], CustomerPageModule);
      /***/
    },

    /***/
    "./src/app/customer/customer.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/customer/customer.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerCustomerPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/customer/customer.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/customer/customer.page.ts ***!
      \*******************************************/

    /*! exports provided: CustomerPage */

    /***/
    function srcAppCustomerCustomerPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerPage", function () {
        return CustomerPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Service_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Service/customer.service */
      "./src/app/Service/customer.service.ts");

      var CustomerPage = /*#__PURE__*/function () {
        function CustomerPage(fb, customerService, platform, alertController) {
          _classCallCheck(this, CustomerPage);

          this.fb = fb;
          this.customerService = customerService;
          this.platform = platform;
          this.alertController = alertController;
          this.regform = this.fb.group({});
          this.editMode = false;
        }

        _createClass(CustomerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              phonenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              balance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.getCustomer();

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.usePicker = true;
            }
          }
        }, {
          key: "getCustomer",
          value: function getCustomer() {
            var _this = this;

            try {
              this.customerService.getAllCustomer().subscribe(function (result) {
                if (result.length > 0) {
                  _this.ListOfCustomer = result;
                  _this.filteredCustomer = result;
                } else {
                  _this.AlertInternet();
                }
              });
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "AlertInternet",
          value: function AlertInternet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Internet',
                        // subHeader: 'Subtitle',
                        message: 'Please turn on wifi or data',
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
          key: "SaveCustomer",
          value: function SaveCustomer() {
            if (this.regform.valid) {
              if (!this.customerId) {
                this.customerService.create(this.regform.value);
              } else {
                this.customerService.updateCustomer(this.regform.value, this.customerId);
              }

              this.regform.reset();
              this.customerId = "";
              this.presentAlert("Save Sucessfully");
            } else {
              this.presentAlert("Please enter all fields");
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Customer',
                        // subHeader: 'Subtitle',
                        message: message,
                        buttons: ['OK']
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
          key: "filter",
          value: function filter(query) {
            this.filteredCustomer = query.target.value ? this.ListOfCustomer.filter(function (p) {
              return p.fullname.toLowerCase().includes(query.target.value.toLowerCase());
            }) : this.ListOfCustomer;
          }
        }, {
          key: "Edit",
          value: function Edit(item, slidingItem) {
            this.editMode = true;
            this.customerId = item.id;
            this.regform.get('fullname').setValue(item.fullname);
            this.regform.get('phonenumber').setValue(item.phonenumber);
            this.regform.get('location').setValue(item.location);
            this.regform.get('address').setValue(item.address);
            this.regform.get('balance').setValue(item.balance);
            slidingItem.close();
          }
        }, {
          key: "delete",
          value: function _delete(item, slidingItem) {
            this.presentAlertConfirm(item);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
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
                            _this2.customerService.removeCategory(item.id);

                            _this2.regform.reset();

                            _this2.customerId = null;
                          }
                        }]
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
          }
        }]);

        return CustomerPage;
      }();

      CustomerPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _Service_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      CustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./customer.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./customer.page.scss */
        "./src/app/customer/customer.page.scss"))["default"]]
      })], CustomerPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=customer-customer-module-es5.js.map