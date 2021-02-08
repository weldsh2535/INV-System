(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Stock-Level-inventory-inventory-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Stock-Level/inventory/inventory.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Stock-Level/inventory/inventory.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportStockLevelInventoryInventoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/inventory/inventory-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/report/Stock-Level/inventory/inventory-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: InventoryPageRoutingModule */

    /***/
    function srcAppReportStockLevelInventoryInventoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryPageRoutingModule", function () {
        return InventoryPageRoutingModule;
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


      var _inventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inventory.page */
      "./src/app/report/Stock-Level/inventory/inventory.page.ts");

      var routes = [{
        path: '',
        component: _inventory_page__WEBPACK_IMPORTED_MODULE_3__["InventoryPage"]
      }];

      var InventoryPageRoutingModule = function InventoryPageRoutingModule() {
        _classCallCheck(this, InventoryPageRoutingModule);
      };

      InventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InventoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/inventory/inventory.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/report/Stock-Level/inventory/inventory.module.ts ***!
      \******************************************************************/

    /*! exports provided: InventoryPageModule */

    /***/
    function srcAppReportStockLevelInventoryInventoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryPageModule", function () {
        return InventoryPageModule;
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


      var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inventory-routing.module */
      "./src/app/report/Stock-Level/inventory/inventory-routing.module.ts");
      /* harmony import */


      var _inventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inventory.page */
      "./src/app/report/Stock-Level/inventory/inventory.page.ts");

      var InventoryPageModule = function InventoryPageModule() {
        _classCallCheck(this, InventoryPageModule);
      };

      InventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventoryPageRoutingModule"]],
        declarations: [_inventory_page__WEBPACK_IMPORTED_MODULE_6__["InventoryPage"]]
      })], InventoryPageModule);
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/inventory/inventory.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/report/Stock-Level/inventory/inventory.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportStockLevelInventoryInventoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9TdG9jay1MZXZlbC9pbnZlbnRvcnkvaW52ZW50b3J5LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/report/Stock-Level/inventory/inventory.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/report/Stock-Level/inventory/inventory.page.ts ***!
      \****************************************************************/

    /*! exports provided: InventoryPage */

    /***/
    function srcAppReportStockLevelInventoryInventoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryPage", function () {
        return InventoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var InventoryPage = /*#__PURE__*/function () {
        function InventoryPage() {
          _classCallCheck(this, InventoryPage);
        }

        _createClass(InventoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InventoryPage;
      }();

      InventoryPage.ctorParameters = function () {
        return [];
      };

      InventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./inventory.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Stock-Level/inventory/inventory.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./inventory.page.scss */
        "./src/app/report/Stock-Level/inventory/inventory.page.scss"))["default"]]
      })], InventoryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Stock-Level-inventory-inventory-module-es5.js.map