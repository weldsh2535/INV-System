(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Audit-stock-transfer-stock-transfer-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Audit/stock-transfer/stock-transfer.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Audit/stock-transfer/stock-transfer.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportAuditStockTransferStockTransferPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"> \n       <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>stock Transfer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Audit/stock-transfer/stock-transfer-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/report/Audit/stock-transfer/stock-transfer-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: StockTransferPageRoutingModule */

    /***/
    function srcAppReportAuditStockTransferStockTransferRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockTransferPageRoutingModule", function () {
        return StockTransferPageRoutingModule;
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


      var _stock_transfer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stock-transfer.page */
      "./src/app/report/Audit/stock-transfer/stock-transfer.page.ts");

      var routes = [{
        path: '',
        component: _stock_transfer_page__WEBPACK_IMPORTED_MODULE_3__["StockTransferPage"]
      }];

      var StockTransferPageRoutingModule = function StockTransferPageRoutingModule() {
        _classCallCheck(this, StockTransferPageRoutingModule);
      };

      StockTransferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StockTransferPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Audit/stock-transfer/stock-transfer.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/report/Audit/stock-transfer/stock-transfer.module.ts ***!
      \**********************************************************************/

    /*! exports provided: StockTransferPageModule */

    /***/
    function srcAppReportAuditStockTransferStockTransferModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockTransferPageModule", function () {
        return StockTransferPageModule;
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


      var _stock_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./stock-transfer-routing.module */
      "./src/app/report/Audit/stock-transfer/stock-transfer-routing.module.ts");
      /* harmony import */


      var _stock_transfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./stock-transfer.page */
      "./src/app/report/Audit/stock-transfer/stock-transfer.page.ts");

      var StockTransferPageModule = function StockTransferPageModule() {
        _classCallCheck(this, StockTransferPageModule);
      };

      StockTransferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stock_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockTransferPageRoutingModule"]],
        declarations: [_stock_transfer_page__WEBPACK_IMPORTED_MODULE_6__["StockTransferPage"]]
      })], StockTransferPageModule);
      /***/
    },

    /***/
    "./src/app/report/Audit/stock-transfer/stock-transfer.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/report/Audit/stock-transfer/stock-transfer.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportAuditStockTransferStockTransferPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9BdWRpdC9zdG9jay10cmFuc2Zlci9zdG9jay10cmFuc2Zlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/report/Audit/stock-transfer/stock-transfer.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/report/Audit/stock-transfer/stock-transfer.page.ts ***!
      \********************************************************************/

    /*! exports provided: StockTransferPage */

    /***/
    function srcAppReportAuditStockTransferStockTransferPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockTransferPage", function () {
        return StockTransferPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StockTransferPage = /*#__PURE__*/function () {
        function StockTransferPage() {
          _classCallCheck(this, StockTransferPage);
        }

        _createClass(StockTransferPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StockTransferPage;
      }();

      StockTransferPage.ctorParameters = function () {
        return [];
      };

      StockTransferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-transfer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./stock-transfer.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Audit/stock-transfer/stock-transfer.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./stock-transfer.page.scss */
        "./src/app/report/Audit/stock-transfer/stock-transfer.page.scss"))["default"]]
      })], StockTransferPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Audit-stock-transfer-stock-transfer-module-es5.js.map