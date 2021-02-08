(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Inventory-Payment-taxes-taxes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/taxes/taxes.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/taxes/taxes.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n     <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>taxes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/report/Inventory-Payment/taxes/taxes-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/report/Inventory-Payment/taxes/taxes-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: TaxesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesPageRoutingModule", function() { return TaxesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _taxes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxes.page */ "./src/app/report/Inventory-Payment/taxes/taxes.page.ts");




const routes = [
    {
        path: '',
        component: _taxes_page__WEBPACK_IMPORTED_MODULE_3__["TaxesPage"]
    }
];
let TaxesPageRoutingModule = class TaxesPageRoutingModule {
};
TaxesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaxesPageRoutingModule);



/***/ }),

/***/ "./src/app/report/Inventory-Payment/taxes/taxes.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/report/Inventory-Payment/taxes/taxes.module.ts ***!
  \****************************************************************/
/*! exports provided: TaxesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesPageModule", function() { return TaxesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _taxes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taxes-routing.module */ "./src/app/report/Inventory-Payment/taxes/taxes-routing.module.ts");
/* harmony import */ var _taxes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taxes.page */ "./src/app/report/Inventory-Payment/taxes/taxes.page.ts");







let TaxesPageModule = class TaxesPageModule {
};
TaxesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _taxes_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaxesPageRoutingModule"]
        ],
        declarations: [_taxes_page__WEBPACK_IMPORTED_MODULE_6__["TaxesPage"]]
    })
], TaxesPageModule);



/***/ }),

/***/ "./src/app/report/Inventory-Payment/taxes/taxes.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/report/Inventory-Payment/taxes/taxes.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9JbnZlbnRvcnktUGF5bWVudC90YXhlcy90YXhlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/report/Inventory-Payment/taxes/taxes.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/report/Inventory-Payment/taxes/taxes.page.ts ***!
  \**************************************************************/
/*! exports provided: TaxesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesPage", function() { return TaxesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TaxesPage = class TaxesPage {
    constructor() { }
    ngOnInit() {
    }
};
TaxesPage.ctorParameters = () => [];
TaxesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-taxes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./taxes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Inventory-Payment/taxes/taxes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./taxes.page.scss */ "./src/app/report/Inventory-Payment/taxes/taxes.page.scss")).default]
    })
], TaxesPage);



/***/ })

}]);
//# sourceMappingURL=report-Inventory-Payment-taxes-taxes-module-es2015.js.map