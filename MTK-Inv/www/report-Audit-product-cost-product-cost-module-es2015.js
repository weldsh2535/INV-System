(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Audit-product-cost-product-cost-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Audit/product-cost/product-cost.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Audit/product-cost/product-cost.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\"> \n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>product Cost</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/report/Audit/product-cost/product-cost-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/report/Audit/product-cost/product-cost-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCostPageRoutingModule", function() { return ProductCostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_cost_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-cost.page */ "./src/app/report/Audit/product-cost/product-cost.page.ts");




const routes = [
    {
        path: '',
        component: _product_cost_page__WEBPACK_IMPORTED_MODULE_3__["ProductCostPage"]
    }
];
let ProductCostPageRoutingModule = class ProductCostPageRoutingModule {
};
ProductCostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductCostPageRoutingModule);



/***/ }),

/***/ "./src/app/report/Audit/product-cost/product-cost.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/report/Audit/product-cost/product-cost.module.ts ***!
  \******************************************************************/
/*! exports provided: ProductCostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCostPageModule", function() { return ProductCostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_cost_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-cost-routing.module */ "./src/app/report/Audit/product-cost/product-cost-routing.module.ts");
/* harmony import */ var _product_cost_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-cost.page */ "./src/app/report/Audit/product-cost/product-cost.page.ts");







let ProductCostPageModule = class ProductCostPageModule {
};
ProductCostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_cost_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductCostPageRoutingModule"]
        ],
        declarations: [_product_cost_page__WEBPACK_IMPORTED_MODULE_6__["ProductCostPage"]]
    })
], ProductCostPageModule);



/***/ }),

/***/ "./src/app/report/Audit/product-cost/product-cost.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/report/Audit/product-cost/product-cost.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9BdWRpdC9wcm9kdWN0LWNvc3QvcHJvZHVjdC1jb3N0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/report/Audit/product-cost/product-cost.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/report/Audit/product-cost/product-cost.page.ts ***!
  \****************************************************************/
/*! exports provided: ProductCostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCostPage", function() { return ProductCostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProductCostPage = class ProductCostPage {
    constructor() { }
    ngOnInit() {
    }
};
ProductCostPage.ctorParameters = () => [];
ProductCostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-cost',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-cost.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Audit/product-cost/product-cost.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-cost.page.scss */ "./src/app/report/Audit/product-cost/product-cost.page.scss")).default]
    })
], ProductCostPage);



/***/ })

}]);
//# sourceMappingURL=report-Audit-product-cost-product-cost-module-es2015.js.map