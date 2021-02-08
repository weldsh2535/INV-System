(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-details-payment-details-module"],{

/***/ "./src/app/payment-details/payment-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/payment-details/payment-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPageRoutingModule", function() { return PaymentDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-details.page */ "./src/app/payment-details/payment-details.page.ts");




const routes = [
    {
        path: '',
        component: _payment_details_page__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailsPage"]
    }
];
let PaymentDetailsPageRoutingModule = class PaymentDetailsPageRoutingModule {
};
PaymentDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/payment-details/payment-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/payment-details/payment-details.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPageModule", function() { return PaymentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-details-routing.module */ "./src/app/payment-details/payment-details-routing.module.ts");
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-details.page */ "./src/app/payment-details/payment-details.page.ts");







let PaymentDetailsPageModule = class PaymentDetailsPageModule {
};
PaymentDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentDetailsPageRoutingModule"]
        ],
        declarations: [_payment_details_page__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailsPage"]]
    })
], PaymentDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=payment-details-payment-details-module-es2015.js.map