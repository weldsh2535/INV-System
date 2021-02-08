(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-view-orders-view-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/orders-view/orders-view.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders-view/orders-view.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOrdersViewOrdersViewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-item>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Orders View </ion-title>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n  <table class=\"table table-hover\">\n    <thead class=\"thead-light\">\n      <th>#Purchase No.</th>\n      <th>Vendor Name</th>\n      <th>P. Method</th>\n      <th>G. Total</th>\n      <th>\n        <a class=\"btn btn-outline-success\" routerLink=\"/purchase\"><i class=\"fa fa-plus-square\"></i> Create New</a>\n      </th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of orderList\">\n        <th (click)=\"openForEdit(item.OrderID)\">{{item.purchaseNumber}}</th>\n        <td (click)=\"openForEdit(item.OrderID)\">{{item.venderName}}</td>\n        <td (click)=\"openForEdit(item.OrderID)\">{{item.type}}</td>\n        <td (click)=\"openForEdit(item.OrderID)\">{{item.totalAmount}}</td>\n        <td>\n            <a class=\"btn text-danger\" (click)=\"onOrderDelete(item.OrderID)\"><i class=\"fa fa-trash fa-lg\"></i></a>\n        </td>\n      </tr>\n    </tbody>\n  </table> \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/orders-view/orders-view-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/orders-view/orders-view-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: OrdersViewPageRoutingModule */

    /***/
    function srcAppOrdersViewOrdersViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersViewPageRoutingModule", function () {
        return OrdersViewPageRoutingModule;
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


      var _orders_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders-view.page */
      "./src/app/orders-view/orders-view.page.ts");

      var routes = [{
        path: '',
        component: _orders_view_page__WEBPACK_IMPORTED_MODULE_3__["OrdersViewPage"]
      }];

      var OrdersViewPageRoutingModule = function OrdersViewPageRoutingModule() {
        _classCallCheck(this, OrdersViewPageRoutingModule);
      };

      OrdersViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdersViewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/orders-view/orders-view.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/orders-view/orders-view.module.ts ***!
      \***************************************************/

    /*! exports provided: OrdersViewPageModule */

    /***/
    function srcAppOrdersViewOrdersViewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersViewPageModule", function () {
        return OrdersViewPageModule;
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


      var _orders_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders-view-routing.module */
      "./src/app/orders-view/orders-view-routing.module.ts");
      /* harmony import */


      var _orders_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orders-view.page */
      "./src/app/orders-view/orders-view.page.ts");

      var OrdersViewPageModule = function OrdersViewPageModule() {
        _classCallCheck(this, OrdersViewPageModule);
      };

      OrdersViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orders_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersViewPageRoutingModule"]],
        declarations: [_orders_view_page__WEBPACK_IMPORTED_MODULE_6__["OrdersViewPage"]]
      })], OrdersViewPageModule);
      /***/
    },

    /***/
    "./src/app/orders-view/orders-view.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/orders-view/orders-view.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOrdersViewOrdersViewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L29yZGVycy12aWV3LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/orders-view/orders-view.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/orders-view/orders-view.page.ts ***!
      \*************************************************/

    /*! exports provided: OrdersViewPage */

    /***/
    function srcAppOrdersViewOrdersViewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersViewPage", function () {
        return OrdersViewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _Service_purchase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../Service/purchase.service */
      "./src/app/Service/purchase.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

      var OrdersViewPage = /*#__PURE__*/function () {
        function OrdersViewPage(purchaseservice, router, toastr) {
          _classCallCheck(this, OrdersViewPage);

          this.purchaseservice = purchaseservice;
          this.router = router;
          this.toastr = toastr;
        }

        _createClass(OrdersViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.refreshList();
          }
        }, {
          key: "refreshList",
          value: function refreshList() {
            var _this = this;

            this.purchaseservice.getAllPurchase().subscribe(function (res) {
              _this.orderList = res;
            });
          }
        }, {
          key: "openForEdit",
          value: function openForEdit(orderID) {
            this.router.navigate(['/order/edit/' + orderID]);
          }
        }, {
          key: "onOrderDelete",
          value: function onOrderDelete(id) {
            var _this2 = this;

            if (confirm('Are you sure to delete this record?')) {
              this.purchaseservice.removePurchase(id).then(function (res) {
                _this2.refreshList();

                _this2.toastr.warning("Deleted Successfully", "Restaurent App.");
              });
            }
          }
        }]);

        return OrdersViewPage;
      }();

      OrdersViewPage.ctorParameters = function () {
        return [{
          type: _Service_purchase_service__WEBPACK_IMPORTED_MODULE_1__["PurchaseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      OrdersViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-orders-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./orders-view.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/orders-view/orders-view.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./orders-view.page.scss */
        "./src/app/orders-view/orders-view.page.scss"))["default"]]
      })], OrdersViewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=orders-view-orders-view-module-es5.js.map