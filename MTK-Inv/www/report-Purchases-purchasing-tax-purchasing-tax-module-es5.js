(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Purchases-purchasing-tax-purchasing-tax-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Purchases/purchasing-tax/purchasing-tax.page.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Purchases/purchasing-tax/purchasing-tax.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportPurchasesPurchasingTaxPurchasingTaxPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>purchasingTax</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Purchases/purchasing-tax/purchasing-tax-routing.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/report/Purchases/purchasing-tax/purchasing-tax-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: PurchasingTaxPageRoutingModule */

    /***/
    function srcAppReportPurchasesPurchasingTaxPurchasingTaxRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PurchasingTaxPageRoutingModule", function () {
        return PurchasingTaxPageRoutingModule;
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


      var _purchasing_tax_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./purchasing-tax.page */
      "./src/app/report/Purchases/purchasing-tax/purchasing-tax.page.ts");

      var routes = [{
        path: '',
        component: _purchasing_tax_page__WEBPACK_IMPORTED_MODULE_3__["PurchasingTaxPage"]
      }];

      var PurchasingTaxPageRoutingModule = function PurchasingTaxPageRoutingModule() {
        _classCallCheck(this, PurchasingTaxPageRoutingModule);
      };

      PurchasingTaxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PurchasingTaxPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Purchases/purchasing-tax/purchasing-tax.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/report/Purchases/purchasing-tax/purchasing-tax.module.ts ***!
      \**************************************************************************/

    /*! exports provided: PurchasingTaxPageModule */

    /***/
    function srcAppReportPurchasesPurchasingTaxPurchasingTaxModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PurchasingTaxPageModule", function () {
        return PurchasingTaxPageModule;
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


      var _purchasing_tax_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./purchasing-tax-routing.module */
      "./src/app/report/Purchases/purchasing-tax/purchasing-tax-routing.module.ts");
      /* harmony import */


      var _purchasing_tax_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./purchasing-tax.page */
      "./src/app/report/Purchases/purchasing-tax/purchasing-tax.page.ts");

      var PurchasingTaxPageModule = function PurchasingTaxPageModule() {
        _classCallCheck(this, PurchasingTaxPageModule);
      };

      PurchasingTaxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _purchasing_tax_routing_module__WEBPACK_IMPORTED_MODULE_5__["PurchasingTaxPageRoutingModule"]],
        declarations: [_purchasing_tax_page__WEBPACK_IMPORTED_MODULE_6__["PurchasingTaxPage"]]
      })], PurchasingTaxPageModule);
      /***/
    },

    /***/
    "./src/app/report/Purchases/purchasing-tax/purchasing-tax.page.scss":
    /*!**************************************************************************!*\
      !*** ./src/app/report/Purchases/purchasing-tax/purchasing-tax.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportPurchasesPurchasingTaxPurchasingTaxPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9QdXJjaGFzZXMvcHVyY2hhc2luZy10YXgvcHVyY2hhc2luZy10YXgucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/report/Purchases/purchasing-tax/purchasing-tax.page.ts":
    /*!************************************************************************!*\
      !*** ./src/app/report/Purchases/purchasing-tax/purchasing-tax.page.ts ***!
      \************************************************************************/

    /*! exports provided: PurchasingTaxPage */

    /***/
    function srcAppReportPurchasesPurchasingTaxPurchasingTaxPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PurchasingTaxPage", function () {
        return PurchasingTaxPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PurchasingTaxPage = /*#__PURE__*/function () {
        function PurchasingTaxPage() {
          _classCallCheck(this, PurchasingTaxPage);
        }

        _createClass(PurchasingTaxPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PurchasingTaxPage;
      }();

      PurchasingTaxPage.ctorParameters = function () {
        return [];
      };

      PurchasingTaxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchasing-tax',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./purchasing-tax.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Purchases/purchasing-tax/purchasing-tax.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./purchasing-tax.page.scss */
        "./src/app/report/Purchases/purchasing-tax/purchasing-tax.page.scss"))["default"]]
      })], PurchasingTaxPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Purchases-purchasing-tax-purchasing-tax-module-es5.js.map