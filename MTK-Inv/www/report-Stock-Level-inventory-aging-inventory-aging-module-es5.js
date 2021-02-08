(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Stock-Level-inventory-aging-inventory-aging-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Stock-Level/inventory-aging/inventory-aging.page.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Stock-Level/inventory-aging/inventory-aging.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportStockLevelInventoryAgingInventoryAgingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>inventory Aging</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/inventory-aging/inventory-aging-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/report/Stock-Level/inventory-aging/inventory-aging-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: InventoryAgingPageRoutingModule */

    /***/
    function srcAppReportStockLevelInventoryAgingInventoryAgingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryAgingPageRoutingModule", function () {
        return InventoryAgingPageRoutingModule;
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


      var _inventory_aging_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inventory-aging.page */
      "./src/app/report/Stock-Level/inventory-aging/inventory-aging.page.ts");

      var routes = [{
        path: '',
        component: _inventory_aging_page__WEBPACK_IMPORTED_MODULE_3__["InventoryAgingPage"]
      }];

      var InventoryAgingPageRoutingModule = function InventoryAgingPageRoutingModule() {
        _classCallCheck(this, InventoryAgingPageRoutingModule);
      };

      InventoryAgingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InventoryAgingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/inventory-aging/inventory-aging.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/report/Stock-Level/inventory-aging/inventory-aging.module.ts ***!
      \******************************************************************************/

    /*! exports provided: InventoryAgingPageModule */

    /***/
    function srcAppReportStockLevelInventoryAgingInventoryAgingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryAgingPageModule", function () {
        return InventoryAgingPageModule;
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


      var _inventory_aging_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inventory-aging-routing.module */
      "./src/app/report/Stock-Level/inventory-aging/inventory-aging-routing.module.ts");
      /* harmony import */


      var _inventory_aging_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inventory-aging.page */
      "./src/app/report/Stock-Level/inventory-aging/inventory-aging.page.ts");

      var InventoryAgingPageModule = function InventoryAgingPageModule() {
        _classCallCheck(this, InventoryAgingPageModule);
      };

      InventoryAgingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inventory_aging_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventoryAgingPageRoutingModule"]],
        declarations: [_inventory_aging_page__WEBPACK_IMPORTED_MODULE_6__["InventoryAgingPage"]]
      })], InventoryAgingPageModule);
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/inventory-aging/inventory-aging.page.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/report/Stock-Level/inventory-aging/inventory-aging.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportStockLevelInventoryAgingInventoryAgingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9TdG9jay1MZXZlbC9pbnZlbnRvcnktYWdpbmcvaW52ZW50b3J5LWFnaW5nLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/inventory-aging/inventory-aging.page.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/report/Stock-Level/inventory-aging/inventory-aging.page.ts ***!
      \****************************************************************************/

    /*! exports provided: InventoryAgingPage */

    /***/
    function srcAppReportStockLevelInventoryAgingInventoryAgingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryAgingPage", function () {
        return InventoryAgingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var InventoryAgingPage = /*#__PURE__*/function () {
        function InventoryAgingPage() {
          _classCallCheck(this, InventoryAgingPage);
        }

        _createClass(InventoryAgingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InventoryAgingPage;
      }();

      InventoryAgingPage.ctorParameters = function () {
        return [];
      };

      InventoryAgingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-aging',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./inventory-aging.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Stock-Level/inventory-aging/inventory-aging.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./inventory-aging.page.scss */
        "./src/app/report/Stock-Level/inventory-aging/inventory-aging.page.scss"))["default"]]
      })], InventoryAgingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Stock-Level-inventory-aging-inventory-aging-module-es5.js.map