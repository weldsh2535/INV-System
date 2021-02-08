(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Inventory-Payment-customer-payments-customer-payments-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/customer-payments/customer-payments.page.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/customer-payments/customer-payments.page.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportInventoryPaymentCustomerPaymentsCustomerPaymentsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n     <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>customer Payments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Inventory-Payment/customer-payments/customer-payments-routing.module.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/report/Inventory-Payment/customer-payments/customer-payments-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: CustomerPaymentsPageRoutingModule */

    /***/
    function srcAppReportInventoryPaymentCustomerPaymentsCustomerPaymentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerPaymentsPageRoutingModule", function () {
        return CustomerPaymentsPageRoutingModule;
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


      var _customer_payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customer-payments.page */
      "./src/app/report/Inventory-Payment/customer-payments/customer-payments.page.ts");

      var routes = [{
        path: '',
        component: _customer_payments_page__WEBPACK_IMPORTED_MODULE_3__["CustomerPaymentsPage"]
      }];

      var CustomerPaymentsPageRoutingModule = function CustomerPaymentsPageRoutingModule() {
        _classCallCheck(this, CustomerPaymentsPageRoutingModule);
      };

      CustomerPaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomerPaymentsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Inventory-Payment/customer-payments/customer-payments.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/report/Inventory-Payment/customer-payments/customer-payments.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: CustomerPaymentsPageModule */

    /***/
    function srcAppReportInventoryPaymentCustomerPaymentsCustomerPaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerPaymentsPageModule", function () {
        return CustomerPaymentsPageModule;
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


      var _customer_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customer-payments-routing.module */
      "./src/app/report/Inventory-Payment/customer-payments/customer-payments-routing.module.ts");
      /* harmony import */


      var _customer_payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customer-payments.page */
      "./src/app/report/Inventory-Payment/customer-payments/customer-payments.page.ts");

      var CustomerPaymentsPageModule = function CustomerPaymentsPageModule() {
        _classCallCheck(this, CustomerPaymentsPageModule);
      };

      CustomerPaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerPaymentsPageRoutingModule"]],
        declarations: [_customer_payments_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPaymentsPage"]]
      })], CustomerPaymentsPageModule);
      /***/
    },

    /***/
    "./src/app/report/Inventory-Payment/customer-payments/customer-payments.page.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/report/Inventory-Payment/customer-payments/customer-payments.page.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportInventoryPaymentCustomerPaymentsCustomerPaymentsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9JbnZlbnRvcnktUGF5bWVudC9jdXN0b21lci1wYXltZW50cy9jdXN0b21lci1wYXltZW50cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/report/Inventory-Payment/customer-payments/customer-payments.page.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/report/Inventory-Payment/customer-payments/customer-payments.page.ts ***!
      \**************************************************************************************/

    /*! exports provided: CustomerPaymentsPage */

    /***/
    function srcAppReportInventoryPaymentCustomerPaymentsCustomerPaymentsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerPaymentsPage", function () {
        return CustomerPaymentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CustomerPaymentsPage = /*#__PURE__*/function () {
        function CustomerPaymentsPage() {
          _classCallCheck(this, CustomerPaymentsPage);
        }

        _createClass(CustomerPaymentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomerPaymentsPage;
      }();

      CustomerPaymentsPage.ctorParameters = function () {
        return [];
      };

      CustomerPaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-payments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./customer-payments.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/customer-payments/customer-payments.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./customer-payments.page.scss */
        "./src/app/report/Inventory-Payment/customer-payments/customer-payments.page.scss"))["default"]]
      })], CustomerPaymentsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Inventory-Payment-customer-payments-customer-payments-module-es5.js.map