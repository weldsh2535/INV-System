(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Sale-customers-customers-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/customers/customers.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/customers/customers.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportSaleCustomersCustomersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Reports</ion-title>\n    <ion-label>Customer List</ion-label>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-button (click)=\"filter()\"><ion-icon name=\"list-circle-outline\"></ion-icon>Filters\n  <ion-select class=\"custom-options\" multiple=\"true\">\n    <ion-select-option value=\"brown\">Brown</ion-select-option>\n    <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n    <ion-select-option value=\"black\">Black</ion-select-option>\n    <ion-select-option value=\"red\">Red</ion-select-option>\n  </ion-select>\n</ion-button>\n  <table class=\"table table-hover\">\n    <colgroup>\n      <col width=\"5%\">\n      <col width=\"5%\">\n      <col width=\"5%\">\n      <col width=\"5%\">\n    </colgroup>\n    <thead style=\"background-color: cadetblue;\">\n      <tr>\n        <th scope=\"col\">Full Name</th>\n        <th scope=\"col\">Address</th>\n        <th scope=\"col\">Phone number</th>\n        <th scope=\"col\">Location</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of customerList\">\n        <td>{{item.fullname}}</td>\n        <td>{{item.address}}</td>\n        <td>{{item.phonenumber}}</td>\n        <td>{{item.location}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <div *ngIf=\"generateList\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Customer List</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        List of customers and their contact information\n        Want to customize this report?\n        Just change the settings at the top of this window before selecting Generate.\n        <ion-button (click)=\"generate()\">generate</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/report/Sale/customers/customers-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/report/Sale/customers/customers-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CustomersPageRoutingModule */

    /***/
    function srcAppReportSaleCustomersCustomersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersPageRoutingModule", function () {
        return CustomersPageRoutingModule;
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


      var _customers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customers.page */
      "./src/app/report/Sale/customers/customers.page.ts");

      var routes = [{
        path: '',
        component: _customers_page__WEBPACK_IMPORTED_MODULE_3__["CustomersPage"]
      }];

      var CustomersPageRoutingModule = function CustomersPageRoutingModule() {
        _classCallCheck(this, CustomersPageRoutingModule);
      };

      CustomersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Sale/customers/customers.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/report/Sale/customers/customers.module.ts ***!
      \***********************************************************/

    /*! exports provided: CustomersPageModule */

    /***/
    function srcAppReportSaleCustomersCustomersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersPageModule", function () {
        return CustomersPageModule;
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


      var _customers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customers-routing.module */
      "./src/app/report/Sale/customers/customers-routing.module.ts");
      /* harmony import */


      var _customers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customers.page */
      "./src/app/report/Sale/customers/customers.page.ts");

      var CustomersPageModule = function CustomersPageModule() {
        _classCallCheck(this, CustomersPageModule);
      };

      CustomersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customers_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomersPageRoutingModule"]],
        declarations: [_customers_page__WEBPACK_IMPORTED_MODULE_6__["CustomersPage"]]
      })], CustomersPageModule);
      /***/
    },

    /***/
    "./src/app/report/Sale/customers/customers.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/report/Sale/customers/customers.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportSaleCustomersCustomersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9TYWxlL2N1c3RvbWVycy9jdXN0b21lcnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/report/Sale/customers/customers.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/report/Sale/customers/customers.page.ts ***!
      \*********************************************************/

    /*! exports provided: CustomersPage */

    /***/
    function srcAppReportSaleCustomersCustomersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersPage", function () {
        return CustomersPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_Service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Service/customer.service */
      "./src/app/Service/customer.service.ts");

      var CustomersPage = /*#__PURE__*/function () {
        function CustomersPage(customerService, loadingController) {
          _classCallCheck(this, CustomersPage);

          this.customerService = customerService;
          this.loadingController = loadingController;
          this.generateB = 0;
          this.generateList = true;
        }

        _createClass(CustomersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCustomerList();
          }
        }, {
          key: "getCustomerList",
          value: function getCustomerList() {
            var _this = this;

            this.customerService.getAllCustomer().subscribe(function (res) {
              if (_this.generateB == 0) {
                _this.customerList = null;
              } else {
                _this.customerList = res;
                _this.generateList = false;
              }
            });
          }
        }, {
          key: "filter",
          value: function filter() {}
        }, {
          key: "generate",
          value: function generate() {
            this.presentLoading();
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      }).then(function (overlay) {
                        _this2.loading = overlay;

                        _this2.loading.present();
                      });

                    case 2:
                      loading = _context.sent;
                      setTimeout(function () {
                        _this2.loading.dismiss();

                        _this2.generateB = 1;

                        _this2.getCustomerList();
                      }, 4000);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CustomersPage;
      }();

      CustomersPage.ctorParameters = function () {
        return [{
          type: src_app_Service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      CustomersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./customers.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/customers/customers.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./customers.page.scss */
        "./src/app/report/Sale/customers/customers.page.scss"))["default"]]
      })], CustomersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Sale-customers-customers-module-es5.js.map