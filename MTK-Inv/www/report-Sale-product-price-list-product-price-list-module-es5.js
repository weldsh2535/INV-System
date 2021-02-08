(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Sale-product-price-list-product-price-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/product-price-list/product-price-list.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/product-price-list/product-price-list.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportSaleProductPriceListProductPriceListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Reports </ion-title>\n    <ion-label>Product Price List</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <table class=\"table table-hover\">\n    <colgroup>\n      <col width=\"5%\">\n      <col width=\"5%\">\n      <col width=\"5%\">\n      <col width=\"5%\">\n    </colgroup>\n    <thead style=\"background-color: cadetblue;\">\n      <tr>\n        <th scope=\"col\">Item Name</th>\n        <th scope=\"col\"></th>\n        <th scope=\"col\">Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of itemsOfList\">\n        <td>\n          <ion-thumbnail slot=\"start\">\n          <img [src]=\"item.picture\">\n        </ion-thumbnail></td>\n        <td>{{item.name}}</td>\n        <td>{{item.price}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <div *ngIf=\"generateList\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Product Price List</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        List of products, with prices\n        Want to customize this report?\n        Just change the settings at the top of this window before selecting Generate.\n        <ion-button (click)=\"generate()\">generate</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/report/Sale/product-price-list/product-price-list-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/report/Sale/product-price-list/product-price-list-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: ProductPriceListPageRoutingModule */

    /***/
    function srcAppReportSaleProductPriceListProductPriceListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductPriceListPageRoutingModule", function () {
        return ProductPriceListPageRoutingModule;
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


      var _product_price_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-price-list.page */
      "./src/app/report/Sale/product-price-list/product-price-list.page.ts");

      var routes = [{
        path: '',
        component: _product_price_list_page__WEBPACK_IMPORTED_MODULE_3__["ProductPriceListPage"]
      }];

      var ProductPriceListPageRoutingModule = function ProductPriceListPageRoutingModule() {
        _classCallCheck(this, ProductPriceListPageRoutingModule);
      };

      ProductPriceListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductPriceListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/Sale/product-price-list/product-price-list.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/report/Sale/product-price-list/product-price-list.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ProductPriceListPageModule */

    /***/
    function srcAppReportSaleProductPriceListProductPriceListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductPriceListPageModule", function () {
        return ProductPriceListPageModule;
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


      var _product_price_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-price-list-routing.module */
      "./src/app/report/Sale/product-price-list/product-price-list-routing.module.ts");
      /* harmony import */


      var _product_price_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./product-price-list.page */
      "./src/app/report/Sale/product-price-list/product-price-list.page.ts");

      var ProductPriceListPageModule = function ProductPriceListPageModule() {
        _classCallCheck(this, ProductPriceListPageModule);
      };

      ProductPriceListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_price_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductPriceListPageRoutingModule"]],
        declarations: [_product_price_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductPriceListPage"]]
      })], ProductPriceListPageModule);
      /***/
    },

    /***/
    "./src/app/report/Sale/product-price-list/product-price-list.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/report/Sale/product-price-list/product-price-list.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportSaleProductPriceListProductPriceListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9TYWxlL3Byb2R1Y3QtcHJpY2UtbGlzdC9wcm9kdWN0LXByaWNlLWxpc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/report/Sale/product-price-list/product-price-list.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/report/Sale/product-price-list/product-price-list.page.ts ***!
      \***************************************************************************/

    /*! exports provided: ProductPriceListPage */

    /***/
    function srcAppReportSaleProductPriceListProductPriceListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductPriceListPage", function () {
        return ProductPriceListPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_Service_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Service/items.service */
      "./src/app/Service/items.service.ts");

      var ProductPriceListPage = /*#__PURE__*/function () {
        function ProductPriceListPage(itemsService, loadingController) {
          _classCallCheck(this, ProductPriceListPage);

          this.itemsService = itemsService;
          this.loadingController = loadingController;
          this.a = 0;
          this.generateList = true;
        }

        _createClass(ProductPriceListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getItemList();
          }
        }, {
          key: "getItemList",
          value: function getItemList() {
            var _this = this;

            this.itemsService.getAllItem().subscribe(function (itemList) {
              if (_this.a == 0) {
                _this.itemsOfList = null;
              } else {
                _this.itemsOfList = itemList;
                _this.generateList = false;
              }
            });
          }
        }, {
          key: "generate",
          value: function generate() {
            this.presentLoading();
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      }).then(function (overlay) {
                        _this2.loading = overlay;

                        _this2.loading.present();
                      });

                    case 2:
                      loading = _context.sent;
                      setTimeout(function () {
                        _this2.loading.dismiss();

                        _this2.a = 1;

                        _this2.getItemList();
                      }, 4000);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ProductPriceListPage;
      }();

      ProductPriceListPage.ctorParameters = function () {
        return [{
          type: src_app_Service_items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      ProductPriceListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-price-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./product-price-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/product-price-list/product-price-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./product-price-list.page.scss */
        "./src/app/report/Sale/product-price-list/product-price-list.page.scss"))["default"]]
      })], ProductPriceListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-Sale-product-price-list-product-price-list-module-es5.js.map