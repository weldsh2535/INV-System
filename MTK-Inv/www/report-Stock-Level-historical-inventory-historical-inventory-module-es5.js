(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Stock-Level-historical-inventory-historical-inventory-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Stock-Level/historical-inventory/historical-inventory.page.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Stock-Level/historical-inventory/historical-inventory.page.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportStockLevelHistoricalInventoryHistoricalInventoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>historical Inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/historical-inventory/historical-inventory-routing.module.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/report/Stock-Level/historical-inventory/historical-inventory-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: HistoricalInventoryPageRoutingModule */

    /***/
    function srcAppReportStockLevelHistoricalInventoryHistoricalInventoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalInventoryPageRoutingModule", function () {
        return HistoricalInventoryPageRoutingModule;
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


      var _historical_inventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./historical-inventory.page */
      "./src/app/report/Stock-Level/historical-inventory/historical-inventory.page.ts");

      var routes = [{
        path: '',
        component: _historical_inventory_page__WEBPACK_IMPORTED_MODULE_3__["HistoricalInventoryPage"]
      }];

      var HistoricalInventoryPageRoutingModule = function HistoricalInventoryPageRoutingModule() {
        _classCallCheck(this, HistoricalInventoryPageRoutingModule);
      };

      HistoricalInventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HistoricalInventoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/historical-inventory/historical-inventory.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/report/Stock-Level/historical-inventory/historical-inventory.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: HistoricalInventoryPageModule */

    /***/
    function srcAppReportStockLevelHistoricalInventoryHistoricalInventoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalInventoryPageModule", function () {
        return HistoricalInventoryPageModule;
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


      var _historical_inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./historical-inventory-routing.module */
      "./src/app/report/Stock-Level/historical-inventory/historical-inventory-routing.module.ts");
      /* harmony import */


      var _historical_inventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./historical-inventory.page */
      "./src/app/report/Stock-Level/historical-inventory/historical-inventory.page.ts");

      var HistoricalInventoryPageModule = function HistoricalInventoryPageModule() {
        _classCallCheck(this, HistoricalInventoryPageModule);
      };

      HistoricalInventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _historical_inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoricalInventoryPageRoutingModule"]],
        declarations: [_historical_inventory_page__WEBPACK_IMPORTED_MODULE_6__["HistoricalInventoryPage"]]
      })], HistoricalInventoryPageModule);
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/historical-inventory/historical-inventory.page.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/report/Stock-Level/historical-inventory/historical-inventory.page.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportStockLevelHistoricalInventoryHistoricalInventoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9TdG9jay1MZXZlbC9oaXN0b3JpY2FsLWludmVudG9yeS9oaXN0b3JpY2FsLWludmVudG9yeS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/historical-inventory/historical-inventory.page.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/report/Stock-Level/historical-inventory/historical-inventory.page.ts ***!
      \**************************************************************************************/

    /*! exports provided: HistoricalInventoryPage */

    /***/
    function srcAppReportStockLevelHistoricalInventoryHistoricalInventoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalInventoryPage", function () {
        return HistoricalInventoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HistoricalInventoryPage = /*#__PURE__*/function () {
        function HistoricalInventoryPage() {
          _classCallCheck(this, HistoricalInventoryPage);
        }

        _createClass(HistoricalInventoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HistoricalInventoryPage;
      }();

      HistoricalInventoryPage.ctorParameters = function () {
        return [];
      };

      HistoricalInventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historical-inventory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./historical-inventory.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Stock-Level/historical-inventory/historical-inventory.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./historical-inventory.page.scss */
        "./src/app/report/Stock-Level/historical-inventory/historical-inventory.page.scss"))["default"]]
      })], HistoricalInventoryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Stock-Level-historical-inventory-historical-inventory-module-es5.js.map