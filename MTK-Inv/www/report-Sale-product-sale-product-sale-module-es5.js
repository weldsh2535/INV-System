(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Sale-product-sale-product-sale-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/product-sale/product-sale.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/product-sale/product-sale.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportSaleProductSaleProductSalePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Product Sale</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Sale/product-sale/product-sale-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/report/Sale/product-sale/product-sale-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ProductSalePageRoutingModule */

    /***/
    function srcAppReportSaleProductSaleProductSaleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductSalePageRoutingModule", function () {
        return ProductSalePageRoutingModule;
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


      var _product_sale_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-sale.page */
      "./src/app/report/Sale/product-sale/product-sale.page.ts");

      var routes = [{
        path: '',
        component: _product_sale_page__WEBPACK_IMPORTED_MODULE_3__["ProductSalePage"]
      }];

      var ProductSalePageRoutingModule = function ProductSalePageRoutingModule() {
        _classCallCheck(this, ProductSalePageRoutingModule);
      };

      ProductSalePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductSalePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Sale/product-sale/product-sale.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/report/Sale/product-sale/product-sale.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ProductSalePageModule */

    /***/
    function srcAppReportSaleProductSaleProductSaleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductSalePageModule", function () {
        return ProductSalePageModule;
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


      var _product_sale_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-sale-routing.module */
      "./src/app/report/Sale/product-sale/product-sale-routing.module.ts");
      /* harmony import */


      var _product_sale_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./product-sale.page */
      "./src/app/report/Sale/product-sale/product-sale.page.ts");

      var ProductSalePageModule = function ProductSalePageModule() {
        _classCallCheck(this, ProductSalePageModule);
      };

      ProductSalePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_sale_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductSalePageRoutingModule"]],
        declarations: [_product_sale_page__WEBPACK_IMPORTED_MODULE_6__["ProductSalePage"]]
      })], ProductSalePageModule);
      /***/
    },

    /***/
    "./src/app/report/Sale/product-sale/product-sale.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/report/Sale/product-sale/product-sale.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportSaleProductSaleProductSalePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9TYWxlL3Byb2R1Y3Qtc2FsZS9wcm9kdWN0LXNhbGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/report/Sale/product-sale/product-sale.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/report/Sale/product-sale/product-sale.page.ts ***!
      \***************************************************************/

    /*! exports provided: ProductSalePage */

    /***/
    function srcAppReportSaleProductSaleProductSalePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductSalePage", function () {
        return ProductSalePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProductSalePage = /*#__PURE__*/function () {
        function ProductSalePage() {
          _classCallCheck(this, ProductSalePage);
        }

        _createClass(ProductSalePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductSalePage;
      }();

      ProductSalePage.ctorParameters = function () {
        return [];
      };

      ProductSalePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-sale',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./product-sale.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/product-sale/product-sale.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./product-sale.page.scss */
        "./src/app/report/Sale/product-sale/product-sale.page.scss"))["default"]]
      })], ProductSalePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Sale-product-sale-product-sale-module-es5.js.map