(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Inventory-Payment-vendor-payment-details-vendor-payment-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.page.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>vendor Payment Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details-routing.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: VendorPaymentDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorPaymentDetailsPageRoutingModule", function() { return VendorPaymentDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vendor_payment_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor-payment-details.page */ "./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.page.ts");




const routes = [
    {
        path: '',
        component: _vendor_payment_details_page__WEBPACK_IMPORTED_MODULE_3__["VendorPaymentDetailsPage"]
    }
];
let VendorPaymentDetailsPageRoutingModule = class VendorPaymentDetailsPageRoutingModule {
};
VendorPaymentDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VendorPaymentDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: VendorPaymentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorPaymentDetailsPageModule", function() { return VendorPaymentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vendor_payment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor-payment-details-routing.module */ "./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details-routing.module.ts");
/* harmony import */ var _vendor_payment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor-payment-details.page */ "./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.page.ts");







let VendorPaymentDetailsPageModule = class VendorPaymentDetailsPageModule {
};
VendorPaymentDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vendor_payment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["VendorPaymentDetailsPageRoutingModule"]
        ],
        declarations: [_vendor_payment_details_page__WEBPACK_IMPORTED_MODULE_6__["VendorPaymentDetailsPage"]]
    })
], VendorPaymentDetailsPageModule);



/***/ }),

/***/ "./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.page.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.page.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9JbnZlbnRvcnktUGF5bWVudC92ZW5kb3ItcGF5bWVudC1kZXRhaWxzL3ZlbmRvci1wYXltZW50LWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.page.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.page.ts ***!
  \************************************************************************************************/
/*! exports provided: VendorPaymentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorPaymentDetailsPage", function() { return VendorPaymentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VendorPaymentDetailsPage = class VendorPaymentDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
VendorPaymentDetailsPage.ctorParameters = () => [];
VendorPaymentDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-payment-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vendor-payment-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vendor-payment-details.page.scss */ "./src/app/report/Inventory-Payment/vendor-payment-details/vendor-payment-details.page.scss")).default]
    })
], VendorPaymentDetailsPage);



/***/ })

}]);
//# sourceMappingURL=report-Inventory-Payment-vendor-payment-details-vendor-payment-details-module-es2015.js.map