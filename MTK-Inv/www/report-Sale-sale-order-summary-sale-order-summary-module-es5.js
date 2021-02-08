(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Sale-sale-order-summary-sale-order-summary-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/sale-order-summary/sale-order-summary.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/sale-order-summary/sale-order-summary.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportSaleSaleOrderSummarySaleOrderSummaryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sale Order Summary</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Sale/sale-order-summary/sale-order-summary-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/report/Sale/sale-order-summary/sale-order-summary-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: SaleOrderSummaryPageRoutingModule */

    /***/
    function srcAppReportSaleSaleOrderSummarySaleOrderSummaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaleOrderSummaryPageRoutingModule", function () {
        return SaleOrderSummaryPageRoutingModule;
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


      var _sale_order_summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sale-order-summary.page */
      "./src/app/report/Sale/sale-order-summary/sale-order-summary.page.ts");

      var routes = [{
        path: '',
        component: _sale_order_summary_page__WEBPACK_IMPORTED_MODULE_3__["SaleOrderSummaryPage"]
      }];

      var SaleOrderSummaryPageRoutingModule = function SaleOrderSummaryPageRoutingModule() {
        _classCallCheck(this, SaleOrderSummaryPageRoutingModule);
      };

      SaleOrderSummaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SaleOrderSummaryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Sale/sale-order-summary/sale-order-summary.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/report/Sale/sale-order-summary/sale-order-summary.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: SaleOrderSummaryPageModule */

    /***/
    function srcAppReportSaleSaleOrderSummarySaleOrderSummaryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaleOrderSummaryPageModule", function () {
        return SaleOrderSummaryPageModule;
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


      var _sale_order_summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sale-order-summary-routing.module */
      "./src/app/report/Sale/sale-order-summary/sale-order-summary-routing.module.ts");
      /* harmony import */


      var _sale_order_summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sale-order-summary.page */
      "./src/app/report/Sale/sale-order-summary/sale-order-summary.page.ts");

      var SaleOrderSummaryPageModule = function SaleOrderSummaryPageModule() {
        _classCallCheck(this, SaleOrderSummaryPageModule);
      };

      SaleOrderSummaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sale_order_summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaleOrderSummaryPageRoutingModule"]],
        declarations: [_sale_order_summary_page__WEBPACK_IMPORTED_MODULE_6__["SaleOrderSummaryPage"]]
      })], SaleOrderSummaryPageModule);
      /***/
    },

    /***/
    "./src/app/report/Sale/sale-order-summary/sale-order-summary.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/report/Sale/sale-order-summary/sale-order-summary.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportSaleSaleOrderSummarySaleOrderSummaryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9TYWxlL3NhbGUtb3JkZXItc3VtbWFyeS9zYWxlLW9yZGVyLXN1bW1hcnkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/report/Sale/sale-order-summary/sale-order-summary.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/report/Sale/sale-order-summary/sale-order-summary.page.ts ***!
      \***************************************************************************/

    /*! exports provided: SaleOrderSummaryPage */

    /***/
    function srcAppReportSaleSaleOrderSummarySaleOrderSummaryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaleOrderSummaryPage", function () {
        return SaleOrderSummaryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SaleOrderSummaryPage = /*#__PURE__*/function () {
        function SaleOrderSummaryPage() {
          _classCallCheck(this, SaleOrderSummaryPage);
        }

        _createClass(SaleOrderSummaryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SaleOrderSummaryPage;
      }();

      SaleOrderSummaryPage.ctorParameters = function () {
        return [];
      };

      SaleOrderSummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sale-order-summary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sale-order-summary.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/sale-order-summary/sale-order-summary.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sale-order-summary.page.scss */
        "./src/app/report/Sale/sale-order-summary/sale-order-summary.page.scss"))["default"]]
      })], SaleOrderSummaryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Sale-sale-order-summary-sale-order-summary-module-es5.js.map