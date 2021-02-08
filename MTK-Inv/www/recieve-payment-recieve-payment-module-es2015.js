(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recieve-payment-recieve-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recieve-payment/recieve-payment.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recieve-payment/recieve-payment.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Recieve payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"regform\">\n  <ion-item>\n       <ion-label> Select Customer</ion-label>\n        <div class=\"dx-field\">\n          <dx-lookup [items]=\"listOfCustomer\" [searchExpr]=\"['id','fullname','contact', 'phonenumber','address']\" valueExpr=\"id\"\n            [displayExpr]=\"getDisplayExpr\" placeholder=\"Select Items\" formControlName=\"customer\"\n            (onValueChanged)=\"SelectedValue($event)\" itemTemplate=\"listOfCustomer\"\n            [(ngModel)]=\"defaultSelectedCurrency\">\n            <dxo-drop-down-options title=\"Select Customers\"></dxo-drop-down-options>\n            <div *dxTemplate=\"let item of 'listOfCustomer'\">\n              <div class=\"custom-item\">\n               <div>{{item.fullname }} {{item.phonenumber }} </div>\n              </div>\n            </div>\n          </dx-lookup>\n        </div>   \n  </ion-item>\n  <ion-item >\n     <ion-label>Balance </ion-label>\n      <ion-input [(ngModel)]=\"Balance\" formControlName=\"updateBalance\" value=\"{{updateBalance}}\" readonly></ion-input>\n   </ion-item>\n  <ion-item>\n    <ion-label  position=\"floating\" >Enter Payment </ion-label>\n      <ion-input type=\"number\" formControlName=\"payment\" aria-placeholder=\"Enter payment\" (keyup)=\"onKey()\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('payment').valid && regform.get('payment').touched\" > This field is required! </small> \n  </ion-item>\n  <div style=\"text-align: center; margin: auto;\">\n    <ion-button id=\"add items\" (click)=\"reCalculateBalance()\" [disabled]=\"!regform.valid\"> \n      <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>Calculate Balance\n     </ion-button>\n  </div>\n</form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/rxjs-compat/add/observable/throw.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/add/observable/throw.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
rxjs_1.Observable.throw = rxjs_1.throwError;
rxjs_1.Observable.throwError = rxjs_1.throwError;
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/add/operator/catch.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/catch.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var catch_1 = __webpack_require__(/*! ../../operator/catch */ "./node_modules/rxjs-compat/operator/catch.js");
rxjs_1.Observable.prototype.catch = catch_1._catch;
rxjs_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/add/operator/map.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var map_1 = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/operator/map.js");
rxjs_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/add/operator/toPromise.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/toPromise.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/operator/catch.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/catch.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch(selector) {
    return operators_1.catchError(selector)(this);
}
exports._catch = _catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/operator/map.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/map.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    return operators_1.map(project, thisArg)(this);
}
exports.map = map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/observable/throw.js":
/*!***************************************************!*\
  !*** ./node_modules/rxjs/add/observable/throw.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/observable/throw */ "./node_modules/rxjs-compat/add/observable/throw.js");
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/catch.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/add/operator/catch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/catch */ "./node_modules/rxjs-compat/add/operator/catch.js");
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/map.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/add/operator/map.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/toPromise.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/add/operator/toPromise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/toPromise */ "./node_modules/rxjs-compat/add/operator/toPromise.js");
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "./src/app/common/app-error.ts":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    constructor(originalError) {
        this.originalError = originalError;
    }
}


/***/ }),

/***/ "./src/app/common/bad-input.ts":
/*!*************************************!*\
  !*** ./src/app/common/bad-input.ts ***!
  \*************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");

class BadInput extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "./src/app/common/not-found-error.ts":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");

class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "./src/app/recieve-payment/recieve-payment-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/recieve-payment/recieve-payment-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecievePaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievePaymentPageRoutingModule", function() { return RecievePaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recieve_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recieve-payment.page */ "./src/app/recieve-payment/recieve-payment.page.ts");




const routes = [
    {
        path: '',
        component: _recieve_payment_page__WEBPACK_IMPORTED_MODULE_3__["RecievePaymentPage"]
    }
];
let RecievePaymentPageRoutingModule = class RecievePaymentPageRoutingModule {
};
RecievePaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecievePaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/recieve-payment/recieve-payment.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/recieve-payment/recieve-payment.module.ts ***!
  \***********************************************************/
/*! exports provided: RecievePaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievePaymentPageModule", function() { return RecievePaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var _recieve_payment_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recieve-payment-routing.module */ "./src/app/recieve-payment/recieve-payment-routing.module.ts");
/* harmony import */ var _recieve_payment_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recieve-payment.page */ "./src/app/recieve-payment/recieve-payment.page.ts");








let RecievePaymentPageModule = class RecievePaymentPageModule {
};
RecievePaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxLookupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTemplateModule"],
            _recieve_payment_routing_module__WEBPACK_IMPORTED_MODULE_6__["RecievePaymentPageRoutingModule"]
        ],
        declarations: [_recieve_payment_page__WEBPACK_IMPORTED_MODULE_7__["RecievePaymentPage"]]
    })
], RecievePaymentPageModule);



/***/ }),

/***/ "./src/app/recieve-payment/recieve-payment.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/recieve-payment/recieve-payment.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .field-customization {\n  min-height: 32px;\n}\n\n::ng-deep .dx-lookup.field-customization .dx-lookup-field {\n  padding: 0 5px;\n}\n\n::ng-deep .custom-field > img {\n  vertical-align: middle;\n  height: 30px;\n  width: 21px;\n}\n\n::ng-deep .custom-field > div {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 30px;\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n::ng-deep .custom-item > img {\n  height: 48px;\n  width: 38px;\n  margin-right: 10px;\n}\n\n::ng-deep .custom-item > div {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 48px;\n  font-size: 15px;\n}\n\n::ng-deep .dx-viewport:not(.dx-theme-ios7) .dx-fieldset {\n  width: 40%;\n  float: left;\n}\n\n::ng-deep .dx-field > .dx-lookup {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaWV2ZS1wYXltZW50L3JlY2lldmUtcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQU9GOztBQUxBO0VBQ0UsT0FBQTtBQVFGIiwiZmlsZSI6InNyYy9hcHAvcmVjaWV2ZS1wYXltZW50L3JlY2lldmUtcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmZpZWxkLWN1c3RvbWl6YXRpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1sb29rdXAuZmllbGQtY3VzdG9taXphdGlvbiAuZHgtbG9va3VwLWZpZWxkIHtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG46Om5nLWRlZXAgLmN1c3RvbS1maWVsZCA+IGltZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDIxcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5jdXN0b20tZmllbGQgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbjo6bmctZGVlcCAuY3VzdG9tLWl0ZW0gPiBpbWcge1xyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogMzhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5jdXN0b20taXRlbSA+IGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbjo6bmctZGVlcCAuZHgtdmlld3BvcnQ6bm90KC5keC10aGVtZS1pb3M3KSAuZHgtZmllbGRzZXQge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1maWVsZCA+IC5keC1sb29rdXAge1xyXG4gIGZsZXg6IDE7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/recieve-payment/recieve-payment.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/recieve-payment/recieve-payment.page.ts ***!
  \*********************************************************/
/*! exports provided: RecievePaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievePaymentPage", function() { return RecievePaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/customer.service */ "./src/app/Service/customer.service.ts");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _Service_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/balance.service */ "./src/app/Service/balance.service.ts");







let RecievePaymentPage = class RecievePaymentPage {
    constructor(fb, customerService, alertController, balanceService) {
        this.fb = fb;
        this.customerService = customerService;
        this.alertController = alertController;
        this.balanceService = balanceService;
        this.regform = this.fb.group({});
        this.fields = { text: "phonenumber", value: "fullname" };
        this.watermark2 = "Select Customer";
        this.height = "250px";
    }
    ngOnInit() {
        this.regform = this.fb.group({
            customer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            payment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            updateBalance: 0
        });
        this.getAllCustomerList();
    }
    getDisplayExpr(item) {
        if (!item) {
            return "";
        }
        return item.fullname + " " + item.phonenumber;
    }
    getAllCustomerList() {
        this.customerService.getAllCustomer().subscribe(res => {
            this.listOfCustomer = res;
            this.defaultSelectedCurrency = this.listOfCustomer[0].id;
        });
    }
    onKey() {
        this.Balance = this.updateBalance + this.regform.get("payment").value;
    }
    SelectedValue($event) {
        const newValue = $event.value;
        const previousValue = $event.previousValue;
        this.id = newValue || previousValue;
        this.filterCustomer = this.listOfCustomer.filter(c => c.id == this.id);
        this.selectedCustomerBalance = this.filterCustomer[0].balance;
        this.updateBalance = this.selectedCustomerBalance;
    }
    // getListBalance(){
    //  this.balanceService.getBalanceById(this.defaultSelectedCurrency).subscribe(res=>{
    //    this.listOfBalance=res;
    //  })
    // }
    reCalculateBalance() {
        {
            if (this.regform.valid) {
                if (!this.recieveBalanceId) {
                    let updateCustomerData = {
                        fullname: this.filterCustomer[0].fullname,
                        phonenumber: this.filterCustomer[0].phonenumber,
                        location: this.filterCustomer[0].location,
                        balance: +this.updateBalance + this.regform.get("payment").value,
                        address: this.filterCustomer[0].address
                    };
                    this.customerService.updateCustomer(updateCustomerData, this.defaultSelectedCurrency).then(() => (error) => {
                        if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"]) {
                            this.regform.setErrors(error.originalError);
                        }
                        else
                            throw error;
                    });
                }
                this.regform.reset();
                this.recieveBalanceId = "";
                this.presentAlert(" Sucess");
            }
            else {
                this.presentAlert("Please enter all fields");
            }
        }
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Recive payment',
                // subHeader: 'Subtitle',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
RecievePaymentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _Service_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] }
];
RecievePaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recieve-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recieve-payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recieve-payment/recieve-payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recieve-payment.page.scss */ "./src/app/recieve-payment/recieve-payment.page.scss")).default]
    })
], RecievePaymentPage);



/***/ })

}]);
//# sourceMappingURL=recieve-payment-recieve-payment-module-es2015.js.map