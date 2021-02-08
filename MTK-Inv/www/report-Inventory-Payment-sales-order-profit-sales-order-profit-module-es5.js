(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Inventory-Payment-sales-order-profit-sales-order-profit-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.page.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.page.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportInventoryPaymentSalesOrderProfitSalesOrderProfitPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\"> \n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n     <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>sales Order Profit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit-routing.module.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit-routing.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: SalesOrderProfitPageRoutingModule */

    /***/
    function srcAppReportInventoryPaymentSalesOrderProfitSalesOrderProfitRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesOrderProfitPageRoutingModule", function () {
        return SalesOrderProfitPageRoutingModule;
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


      var _sales_order_profit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sales-order-profit.page */
      "./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.page.ts");

      var routes = [{
        path: '',
        component: _sales_order_profit_page__WEBPACK_IMPORTED_MODULE_3__["SalesOrderProfitPage"]
      }];

      var SalesOrderProfitPageRoutingModule = function SalesOrderProfitPageRoutingModule() {
        _classCallCheck(this, SalesOrderProfitPageRoutingModule);
      };

      SalesOrderProfitPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SalesOrderProfitPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: SalesOrderProfitPageModule */

    /***/
    function srcAppReportInventoryPaymentSalesOrderProfitSalesOrderProfitModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesOrderProfitPageModule", function () {
        return SalesOrderProfitPageModule;
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


      var _sales_order_profit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sales-order-profit-routing.module */
      "./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit-routing.module.ts");
      /* harmony import */


      var _sales_order_profit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sales-order-profit.page */
      "./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.page.ts");

      var SalesOrderProfitPageModule = function SalesOrderProfitPageModule() {
        _classCallCheck(this, SalesOrderProfitPageModule);
      };

      SalesOrderProfitPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sales_order_profit_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalesOrderProfitPageRoutingModule"]],
        declarations: [_sales_order_profit_page__WEBPACK_IMPORTED_MODULE_6__["SalesOrderProfitPage"]]
      })], SalesOrderProfitPageModule);
      /***/
    },

    /***/
    "./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.page.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.page.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportInventoryPaymentSalesOrderProfitSalesOrderProfitPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9JbnZlbnRvcnktUGF5bWVudC9zYWxlcy1vcmRlci1wcm9maXQvc2FsZXMtb3JkZXItcHJvZml0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.page.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.page.ts ***!
      \****************************************************************************************/

    /*! exports provided: SalesOrderProfitPage */

    /***/
    function srcAppReportInventoryPaymentSalesOrderProfitSalesOrderProfitPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesOrderProfitPage", function () {
        return SalesOrderProfitPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SalesOrderProfitPage = /*#__PURE__*/function () {
        function SalesOrderProfitPage() {
          _classCallCheck(this, SalesOrderProfitPage);
        }

        _createClass(SalesOrderProfitPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SalesOrderProfitPage;
      }();

      SalesOrderProfitPage.ctorParameters = function () {
        return [];
      };

      SalesOrderProfitPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-order-profit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sales-order-profit.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sales-order-profit.page.scss */
        "./src/app/report/Inventory-Payment/sales-order-profit/sales-order-profit.page.scss"))["default"]]
      })], SalesOrderProfitPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Inventory-Payment-sales-order-profit-sales-order-profit-module-es5.js.map