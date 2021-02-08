(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Purchases-vendors-vendors-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Purchases/vendors/vendors.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Purchases/vendors/vendors.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportPurchasesVendorsVendorsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n     <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>vendors</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Purchases/vendors/vendors-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/report/Purchases/vendors/vendors-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: VendorsPageRoutingModule */

    /***/
    function srcAppReportPurchasesVendorsVendorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorsPageRoutingModule", function () {
        return VendorsPageRoutingModule;
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


      var _vendors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vendors.page */
      "./src/app/report/Purchases/vendors/vendors.page.ts");

      var routes = [{
        path: '',
        component: _vendors_page__WEBPACK_IMPORTED_MODULE_3__["VendorsPage"]
      }];

      var VendorsPageRoutingModule = function VendorsPageRoutingModule() {
        _classCallCheck(this, VendorsPageRoutingModule);
      };

      VendorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VendorsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Purchases/vendors/vendors.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/report/Purchases/vendors/vendors.module.ts ***!
      \************************************************************/

    /*! exports provided: VendorsPageModule */

    /***/
    function srcAppReportPurchasesVendorsVendorsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorsPageModule", function () {
        return VendorsPageModule;
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


      var _vendors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vendors-routing.module */
      "./src/app/report/Purchases/vendors/vendors-routing.module.ts");
      /* harmony import */


      var _vendors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vendors.page */
      "./src/app/report/Purchases/vendors/vendors.page.ts");

      var VendorsPageModule = function VendorsPageModule() {
        _classCallCheck(this, VendorsPageModule);
      };

      VendorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vendors_routing_module__WEBPACK_IMPORTED_MODULE_5__["VendorsPageRoutingModule"]],
        declarations: [_vendors_page__WEBPACK_IMPORTED_MODULE_6__["VendorsPage"]]
      })], VendorsPageModule);
      /***/
    },

    /***/
    "./src/app/report/Purchases/vendors/vendors.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/report/Purchases/vendors/vendors.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportPurchasesVendorsVendorsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9QdXJjaGFzZXMvdmVuZG9ycy92ZW5kb3JzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/report/Purchases/vendors/vendors.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/report/Purchases/vendors/vendors.page.ts ***!
      \**********************************************************/

    /*! exports provided: VendorsPage */

    /***/
    function srcAppReportPurchasesVendorsVendorsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorsPage", function () {
        return VendorsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VendorsPage = /*#__PURE__*/function () {
        function VendorsPage() {
          _classCallCheck(this, VendorsPage);
        }

        _createClass(VendorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VendorsPage;
      }();

      VendorsPage.ctorParameters = function () {
        return [];
      };

      VendorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vendors.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Purchases/vendors/vendors.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vendors.page.scss */
        "./src/app/report/Purchases/vendors/vendors.page.scss"))["default"]]
      })], VendorsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Purchases-vendors-vendors-module-es5.js.map