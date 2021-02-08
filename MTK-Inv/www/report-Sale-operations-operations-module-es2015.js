(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Sale-operations-operations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/operations/operations.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/operations/operations.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Operations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/report/Sale/operations/operations-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/report/Sale/operations/operations-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OperationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsPageRoutingModule", function() { return OperationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _operations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations.page */ "./src/app/report/Sale/operations/operations.page.ts");




const routes = [
    {
        path: '',
        component: _operations_page__WEBPACK_IMPORTED_MODULE_3__["OperationsPage"]
    }
];
let OperationsPageRoutingModule = class OperationsPageRoutingModule {
};
OperationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OperationsPageRoutingModule);



/***/ }),

/***/ "./src/app/report/Sale/operations/operations.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/report/Sale/operations/operations.module.ts ***!
  \*************************************************************/
/*! exports provided: OperationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsPageModule", function() { return OperationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _operations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operations-routing.module */ "./src/app/report/Sale/operations/operations-routing.module.ts");
/* harmony import */ var _operations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operations.page */ "./src/app/report/Sale/operations/operations.page.ts");







let OperationsPageModule = class OperationsPageModule {
};
OperationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _operations_routing_module__WEBPACK_IMPORTED_MODULE_5__["OperationsPageRoutingModule"]
        ],
        declarations: [_operations_page__WEBPACK_IMPORTED_MODULE_6__["OperationsPage"]]
    })
], OperationsPageModule);



/***/ }),

/***/ "./src/app/report/Sale/operations/operations.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/report/Sale/operations/operations.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9TYWxlL29wZXJhdGlvbnMvb3BlcmF0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/report/Sale/operations/operations.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/report/Sale/operations/operations.page.ts ***!
  \***********************************************************/
/*! exports provided: OperationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsPage", function() { return OperationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperationsPage = class OperationsPage {
    constructor() { }
    ngOnInit() {
    }
};
OperationsPage.ctorParameters = () => [];
OperationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-operations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./operations.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/operations/operations.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./operations.page.scss */ "./src/app/report/Sale/operations/operations.page.scss")).default]
    })
], OperationsPage);



/***/ })

}]);
//# sourceMappingURL=report-Sale-operations-operations-module-es2015.js.map