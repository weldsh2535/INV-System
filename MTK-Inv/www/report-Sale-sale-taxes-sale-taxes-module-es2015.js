(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Sale-sale-taxes-sale-taxes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/sale-taxes/sale-taxes.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/sale-taxes/sale-taxes.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sale Taxes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/report/Sale/sale-taxes/sale-taxes-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/report/Sale/sale-taxes/sale-taxes-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SaleTaxesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleTaxesPageRoutingModule", function() { return SaleTaxesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sale_taxes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-taxes.page */ "./src/app/report/Sale/sale-taxes/sale-taxes.page.ts");




const routes = [
    {
        path: '',
        component: _sale_taxes_page__WEBPACK_IMPORTED_MODULE_3__["SaleTaxesPage"]
    }
];
let SaleTaxesPageRoutingModule = class SaleTaxesPageRoutingModule {
};
SaleTaxesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SaleTaxesPageRoutingModule);



/***/ }),

/***/ "./src/app/report/Sale/sale-taxes/sale-taxes.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/report/Sale/sale-taxes/sale-taxes.module.ts ***!
  \*************************************************************/
/*! exports provided: SaleTaxesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleTaxesPageModule", function() { return SaleTaxesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sale_taxes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sale-taxes-routing.module */ "./src/app/report/Sale/sale-taxes/sale-taxes-routing.module.ts");
/* harmony import */ var _sale_taxes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sale-taxes.page */ "./src/app/report/Sale/sale-taxes/sale-taxes.page.ts");







let SaleTaxesPageModule = class SaleTaxesPageModule {
};
SaleTaxesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sale_taxes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaleTaxesPageRoutingModule"]
        ],
        declarations: [_sale_taxes_page__WEBPACK_IMPORTED_MODULE_6__["SaleTaxesPage"]]
    })
], SaleTaxesPageModule);



/***/ }),

/***/ "./src/app/report/Sale/sale-taxes/sale-taxes.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/report/Sale/sale-taxes/sale-taxes.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9TYWxlL3NhbGUtdGF4ZXMvc2FsZS10YXhlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/report/Sale/sale-taxes/sale-taxes.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/report/Sale/sale-taxes/sale-taxes.page.ts ***!
  \***********************************************************/
/*! exports provided: SaleTaxesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleTaxesPage", function() { return SaleTaxesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SaleTaxesPage = class SaleTaxesPage {
    constructor() { }
    ngOnInit() {
    }
};
SaleTaxesPage.ctorParameters = () => [];
SaleTaxesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sale-taxes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sale-taxes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/sale-taxes/sale-taxes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sale-taxes.page.scss */ "./src/app/report/Sale/sale-taxes/sale-taxes.page.scss")).default]
    })
], SaleTaxesPage);



/***/ })

}]);
//# sourceMappingURL=report-Sale-sale-taxes-sale-taxes-module-es2015.js.map