(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Purchases-purchase-order-status-purchase-order-status-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Purchases/purchase-order-status/purchase-order-status.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Purchases/purchase-order-status/purchase-order-status.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>purchaseOrderStatus</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/report/Purchases/purchase-order-status/purchase-order-status-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/report/Purchases/purchase-order-status/purchase-order-status-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: PurchaseOrderStatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderStatusPageRoutingModule", function() { return PurchaseOrderStatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _purchase_order_status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-order-status.page */ "./src/app/report/Purchases/purchase-order-status/purchase-order-status.page.ts");




const routes = [
    {
        path: '',
        component: _purchase_order_status_page__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderStatusPage"]
    }
];
let PurchaseOrderStatusPageRoutingModule = class PurchaseOrderStatusPageRoutingModule {
};
PurchaseOrderStatusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PurchaseOrderStatusPageRoutingModule);



/***/ }),

/***/ "./src/app/report/Purchases/purchase-order-status/purchase-order-status.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/report/Purchases/purchase-order-status/purchase-order-status.module.ts ***!
  \****************************************************************************************/
/*! exports provided: PurchaseOrderStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderStatusPageModule", function() { return PurchaseOrderStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _purchase_order_status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-order-status-routing.module */ "./src/app/report/Purchases/purchase-order-status/purchase-order-status-routing.module.ts");
/* harmony import */ var _purchase_order_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase-order-status.page */ "./src/app/report/Purchases/purchase-order-status/purchase-order-status.page.ts");







let PurchaseOrderStatusPageModule = class PurchaseOrderStatusPageModule {
};
PurchaseOrderStatusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _purchase_order_status_routing_module__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderStatusPageRoutingModule"]
        ],
        declarations: [_purchase_order_status_page__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderStatusPage"]]
    })
], PurchaseOrderStatusPageModule);



/***/ }),

/***/ "./src/app/report/Purchases/purchase-order-status/purchase-order-status.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/report/Purchases/purchase-order-status/purchase-order-status.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9QdXJjaGFzZXMvcHVyY2hhc2Utb3JkZXItc3RhdHVzL3B1cmNoYXNlLW9yZGVyLXN0YXR1cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/report/Purchases/purchase-order-status/purchase-order-status.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/report/Purchases/purchase-order-status/purchase-order-status.page.ts ***!
  \**************************************************************************************/
/*! exports provided: PurchaseOrderStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderStatusPage", function() { return PurchaseOrderStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PurchaseOrderStatusPage = class PurchaseOrderStatusPage {
    constructor() { }
    ngOnInit() {
    }
};
PurchaseOrderStatusPage.ctorParameters = () => [];
PurchaseOrderStatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-order-status',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./purchase-order-status.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Purchases/purchase-order-status/purchase-order-status.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./purchase-order-status.page.scss */ "./src/app/report/Purchases/purchase-order-status/purchase-order-status.page.scss")).default]
    })
], PurchaseOrderStatusPage);



/***/ })

}]);
//# sourceMappingURL=report-Purchases-purchase-order-status-purchase-order-status-module-es2015.js.map