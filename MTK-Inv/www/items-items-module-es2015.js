(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-items-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/items/items.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/items/items.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Items</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"Save(regform)\" [formGroup]=\"regform\">\n    <ion-list> \n    <ion-item>\n      <ion-label>Name </ion-label>\n      <!-- pattern=\"[a-zA-Z ]*\" -->\n      <ion-input   formControlName=\"name\"  required ></ion-input>\n      <!-- <span *ngIf=\"!regform.get('name').valid && regform.get('name').touched\" > Enter  Name </span> -->\n      <!-- <div *ngIf=\"regform.get('name').invalid && (regform.get('name').dirty ||regform.get('name').touched)\"\n        class=\"alert alert-danger\"> \n        <div *ngIf=\"regform.get('name').errors.required\">\n          Name is required.\n        </div>\n      </div> -->\n      <small class=\"form-text text-muted\" *ngIf=\"regform.get('name').touched && \n      regform.get('name').hasError('required')\">This field is required!</small>\n      <!-- <small class=\"form-text text-muted\" *ngIf=\"regform.get('name').touched \n      && regform.get('name').hasError('invalidNumber')\">Numbers accepted only!</small> -->\n    </ion-item>\n    <ion-item>\n      <ion-label>Amharic Name </ion-label>\n      <ion-input   formControlName=\"AmaricName\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('AmaricName').valid && regform.get('AmaricName').touched\" > This field is required!</small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Item Category</ion-label>\n    <ion-select interface=\"popover\" formControlName=\"CatagoryId\" [(ngModel)]=\"SelectedCatagory\">\n          <ion-select-option *ngFor=\"let code of ListOfItemCategory\" value=\"{{code?.id}}\">\n               {{code?.categoryName}}\n         </ion-select-option>\n      </ion-select>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('CatagoryId').valid && \n      regform.get('CatagoryId').touched \"> This field is required!</small>\n    </ion-item>\n    <ion-item>\n      <ion-label>Lookup</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"type\" (ionChange)=\"SelectedValue($event)\"[(ngModel)]=\"SelectedLookup\" >\n          <ion-select-option *ngFor=\"let code of listOfLookUpCatagory\" value=\"{{code?.id}}\">\n               {{code?.name}}\n         </ion-select-option>\n      </ion-select>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('type').valid && \n      regform.get('type').touched \"> This field is required!</small>\n    </ion-item>\n    <div class=\"dx-fieldset\">\n      <div class=\"dx-fieldset-header\">Store</div>\n      <div class=\"dx-field\">\n          <dx-lookup\n              [items]=\"filteredLookUp\"\n              [searchExpr]=\"['name']\"\n              valueExpr=\"id\"\n              [displayExpr]=\"getDisplayExpr\"\n              placeholder=\"Select Stores\"\n              formControlName=\"storeid\"\n              [(ngModel)]=\"itemLookupList\"\n              itemTemplate=\"filteredLookUp\">\n              <dxo-drop-down-options title=\"Select Stores\"></dxo-drop-down-options>\n              <div *dxTemplate=\"let item of 'filteredLookUp'\">\n                  <div class=\"custom-item\">\n                      <div>{{item.name}} </div>\n                  </div>\n              </div>\n          </dx-lookup>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"!regform.get('storeid').valid && \n          regform.get('storeid').touched \"> This field is required!</small>\n      </div>\n    <ion-item>\n      <ion-label>Description </ion-label>\n      <ion-input   formControlName=\"discrption\"></ion-input>\n      <small *ngIf=\"!regform.get('discrption').valid && regform.get('discrption').touched\" >This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>price </ion-label>\n      <ion-input   formControlName=\"price\" type=\"number\"></ion-input>\n      <small *ngIf=\"!regform.get('price').valid && regform.get('price').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Quantity </ion-label>\n      <ion-input   formControlName=\"Quantity\" type=\"number\"></ion-input>\n      <small *ngIf=\"!regform.get('Quantity').valid && regform.get('Quantity').touched\" > This field is required! </small> \n    </ion-item>\n   <ion-item>\n      <ion-label>Brand </ion-label>\n      <ion-input formControlName=\"brand\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Remark </ion-label>\n      <ion-textarea formControlName=\"remark\" placeholder=\"Enter more information here...\"></ion-textarea>\n    </ion-item>\n    <div class=\"picker\">\n      <ion-img\n        role=\"button\"\n        class=\"image\"\n        (click)=\"onPickImage()\"\n        [src]=\"base64textString\"\n        *ngIf=\"base64textString\"\n      ></ion-img>\n      <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\" >\n        <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n        <ion-label>Take Picture</ion-label>\n      </ion-button>\n    </div>\n    <input  hidden\n      type=\"file\"\n      accept=\"image/jpeg\"\n      *ngIf=\"usePicker\"\n      #filePicker\n      (change)=\"onFileChosen($event)\"\n    />\n    <div style=\"text-align: center; margin: auto;\">\n   <!-- [disabled]=\"regform.invalid\" -->\n      <ion-button type=\"submit\" id=\"add items\" > \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Items':'Add Items'}} </ion-button>\n   </div>\n  </ion-list>\n  </form>\n  <ion-searchbar\n  (keyup)=\"filter($event)\" [(ngModel)]=\"searchText\" showCancelButton=\"never\"></ion-searchbar>\n<!-- \n   <ion-item-sliding  *ngFor=\"let item of filteredItemsByLookup |filter:searchText | paginate : {\n                  itemsPerPage: tableSize,\n                  currentPage: page,\n                  totalItems: count\n                };\n              let i = index\" [class.active]=\"i == currentIndex \" #slidingItem >\n    <ion-item class=\"slide\" >\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"item.picture\">\n      </ion-thumbnail>\n      <ion-label>\n      <h2> {{item.name}}</h2>\n      <h3>Quantity  {{item.Quantity}}\n      <p style=\"margin-left: 200px;\"> {{item.price}} Birr</p></h3>\n      </ion-label>\n    </ion-item>\n    <ion-item-options side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"Edit(item,slidingItem)\">\n     <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n     <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n      <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n    </ion-item-options>\n    \n  </ion-item-sliding> -->\n  <table class=\"table\" >\n    <colgroup>\n      <col width=\"15%\">\n      <col width=\"15%\">\n      <col width=\"15%\">\n      <col width=\"15%\">\n    </colgroup>\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Image</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Quantity</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngIf=\"filteredItemsByLookup?.length==0\" >\n        <td class=\"font-italic text-center\" colspan=\"5\">\n          No  item selected for this order.\n        </td>\n      </tr>\n      <tr *ngFor=\"let item of filteredItemsByLookup|filter:searchText  | paginate : {\n                                              itemsPerPage: tableSize,\n                                              currentPage: page,\n                                              totalItems: count\n                                            };\n                                      let i = index\" [class.active]=\"i == currentIndex\">\n        <th scope=\"row\">{{i + 1}}</th>\n        <td> <ion-thumbnail slot=\"start\">\n          <img [src]=\"item.picture\">\n        </ion-thumbnail></td>\n        <td>{{item.name}}</td>\n        <td>{{item.Quantity}}</td>\n        <td (click)=\"Edit(item)\"><ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></td>\n        <td (click)=\"delete(item)\"><ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"d-flex justify-content-center\">\n    <pagination-controls \n      responsive=\"true\" \n      previousLabel=\"Prev\" \n      nextLabel=\"Next\" \n      (pageChange)=\"onTableDataChange($event)\">\n    </pagination-controls>\n  </div>\n</ion-content>\n");

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

/***/ "./src/app/items/items-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/items/items-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ItemsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageRoutingModule", function() { return ItemsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items.page */ "./src/app/items/items.page.ts");




const routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_3__["ItemsPage"]
    }
];
let ItemsPageRoutingModule = class ItemsPageRoutingModule {
};
ItemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemsPageRoutingModule);



/***/ }),

/***/ "./src/app/items/items.module.ts":
/*!***************************************!*\
  !*** ./src/app/items/items.module.ts ***!
  \***************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items-routing.module */ "./src/app/items/items-routing.module.ts");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items.page */ "./src/app/items/items.page.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");










let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _items_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemsPageRoutingModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxLookupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxTemplateModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
        ],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]]
    })
], ItemsPageModule);



/***/ }),

/***/ "./src/app/items/items.page.scss":
/*!***************************************!*\
  !*** ./src/app/items/items.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-item-sliding .item {\n  --background: linear-gradient(90deg, rgb(223, 226, 230) 0%, rgb(222, 225, 231) 35%, rgb(224, 228, 233) 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvaXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDRSw0R0FBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvaXRlbXMvaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY2tlciB7XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMjByZW07XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5pb24taXRlbS1zbGlkaW5nIC5pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDIyMywgMjI2LCAyMzApIDAlLCByZ2IoMjIyLCAyMjUsIDIzMSkgMzUlLCByZ2IoMjI0LCAyMjgsIDIzMykgMTAwJSk7XHJcbn1cclxuLy8gLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjhkN2RhOyAvKiBncmVlbiAqL1xyXG4vLyB9XHJcblxyXG4vLyAubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuLy8gICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOGQ3ZGE7IC8qIHJlZCAqL1xyXG4vLyB9Il19 */");

/***/ }),

/***/ "./src/app/items/items.page.ts":
/*!*************************************!*\
  !*** ./src/app/items/items.page.ts ***!
  \*************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Service_lookup_catagory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Service/lookup-catagory.service */ "./src/app/Service/lookup-catagory.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_catagory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/catagory.service */ "./src/app/Service/catagory.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _Service_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/lookup.service */ "./src/app/Service/lookup.service.ts");
/* harmony import */ var _Service_items_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/items.service */ "./src/app/Service/items.service.ts");
/* harmony import */ var _Service_item_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/item-category.service */ "./src/app/Service/item-category.service.ts");
/* harmony import */ var _Service_balance_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Service/balance.service */ "./src/app/Service/balance.service.ts");











let ItemsPage = class ItemsPage {
    constructor(fb, platform, CategoryService, ItemCategoryService, alertController, lookupService, itemsService, balanceService, lookupCatagoryService) {
        this.fb = fb;
        this.platform = platform;
        this.CategoryService = CategoryService;
        this.ItemCategoryService = ItemCategoryService;
        this.alertController = alertController;
        this.lookupService = lookupService;
        this.itemsService = itemsService;
        this.balanceService = balanceService;
        this.lookupCatagoryService = lookupCatagoryService;
        this.usePicker = false;
        this.regform = this.fb.group({});
        this.editMode = false;
        //paging declaration
        this.page = 1;
        this.count = 0;
        this.tableSize = 5;
        this.tableSizes = [3, 6, 9, 12];
        this.currentIndex = -1;
        this.isValid = true;
        this.fields = { text: 'name', value: 'name' };
        this.watermark2 = 'Select Store';
        this.height = '250px';
    }
    ngOnInit() {
        this.regform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z0-9 ]*")])],
            AmaricName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z0-9]*")])],
            discrption: [''],
            CatagoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[0-9]*")])],
            Quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[0-9]*")])],
            storeid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            brand: [''],
            picture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remark: ['']
        });
        //as Asp.net database list
        //  this.itemsService.getItemList().then(res=>this.listofItems=res as Items[]);
        this.getAllItemCategory();
        this.getCategory();
        this.getLookUp();
        this.getItemList();
        this.getLookUpCatagory();
        this.getItemBySelectedLookup();
        this.getItemLookup();
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
    }
    SelectedValue(event) {
        this.filteredLookUp = this.listoflookup.filter((c) => c.type == event.target.value);
        this.itemsService.getItemByLookup(this.SelectedLookup).subscribe(res => {
            this.filteredItemsByLookup = res;
        });
    }
    getDisplayExpr(item) {
        if (!item) {
            return "";
        }
        return item.name;
    }
    getLookUpCatagory() {
        this.lookupCatagoryService.getAllLookupCatagory().subscribe(result => {
            this.listOfLookUpCatagory = result;
            this.SelectedLookup = this.listOfLookUpCatagory[0].id;
        });
    }
    getItemBySelectedLookup() {
        this.lookupCatagoryService.getAllLookupCatagory().subscribe(result => {
            this.listOfLookUpCatagory = result;
            this.SelectedLookup = this.listOfLookUpCatagory[0].id;
            // this.itemsService.getItemByLookup(this.SelectedLookup).subscribe(res=>{
            //   this.filteredItemsByLookup=res;
            // })
        });
    }
    getItemLookup() {
        this.lookupCatagoryService.getAllLookupCatagory().subscribe(res => {
            let selectedLookup = this.listOfLookUpCatagory[0].id;
            if (selectedLookup == this.SelectedLookup) {
                this.SelectedLookup = selectedLookup;
                this.itemsService.getItemByID(this.SelectedLookup).subscribe(res => {
                    this.listOfItemsSelected = res;
                    this.itemLookupList = res[0].id;
                });
            }
            else {
                this.SelectedLookup = this.SelectedLookup;
                this.itemsService.getItemByID(this.SelectedLookup).subscribe(res => {
                    this.listOfItemsSelected = res;
                    this.itemLookupList = res[0].id;
                });
            }
        });
    }
    getLookUp() {
        try {
            this.lookupService.getAllLookUp().subscribe(result => {
                if (result.length > 0) {
                    this.listoflookup = result;
                    this.filteredLookUp = result;
                    this.selectedStore = this.filteredLookUp[0].id;
                }
                else {
                    this.AlertInternet();
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    getStoreByName(id) {
        this.lookupService.getLookUpByType(id).subscribe(result => {
            this.listofStore = result;
        });
    }
    getCategory() {
        // try {
        this.CategoryService.getAllLookUpCategory().subscribe(result => {
            let store = result.find(c => c.name == 'Store');
            if (store) {
                this.getStoreByName(store.id);
            }
        });
        // }
    }
    getAllItemCategory() {
        this.ItemCategoryService.getAllItemCategories().subscribe(result => {
            if (result.length > 0) {
                this.ListOfItemCategory = result;
                this.SelectedCatagory = this.ListOfItemCategory[1].id;
            }
            else {
                this.AlertInternet();
            }
        });
    }
    // }
    // catch(error) {
    //  console.log(error);
    // }
    getItemList() {
        this.itemsService.getAllItem().subscribe(result => {
            this.listofItems = result;
        });
    }
    getItemListAfterSave(quantity, storeid, name, amhricName, price) {
        this.itemsService.getAllItemKEY(quantity, storeid, name, amhricName, price).subscribe(result => {
            this.listofItems = result.sort((b, a) => a.id - b.id);
            this.ItemId = this.listofItems[0].id;
            this.balanceService.getBalanceByItemId(this.ItemId).subscribe(res => {
                this.res = res;
                this.a = res.length;
            });
            if (this.a > 0) {
                let balance = {
                    itemId: this.ItemId,
                    beginingAmount: this.res[0].price,
                    currentAmount: +this.res[0].currentAmount + price,
                    storeId: storeid,
                };
                this.balanceService.updateBalance(balance, this.res[0].id);
            }
            else {
                let balance = {
                    itemId: this.ItemId,
                    beginingAmount: price,
                    currentAmount: price,
                    storeId: storeid,
                };
                this.balanceService.create(balance);
            }
            //  this.listofItems[0].id=null;
        });
    }
    onOptionsSelected($event) {
        this.lookupService.getLookUpByType($event.target.value).subscribe(result => {
            this.listoflookup = result;
        });
    }
    AlertInternet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Internet',
                // subHeader: 'Subtitle',
                message: 'Please turn on wifi or data',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    onPickImage() {
        if (this.usePicker == true) {
            // if (!Capacitor.isPluginAvailable('Camera')) {
            this.filePickerRef.nativeElement.click();
            return;
        }
        _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Camera.getPhoto({
            quality: 50,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Prompt,
            correctOrientation: true,
            height: 320,
            width: 300,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].Base64
        })
            .then(image => {
            this.base64textString = 'data:image/png;base64,' + image.base64String;
        })
            .catch(error => {
            console.log(error);
            if (this.usePicker) {
                this.filePickerRef.nativeElement.click();
            }
            return false;
        });
    }
    onFileChosen(event) {
        const pickedFile = event.target.files[0];
        if (!pickedFile) {
            return;
        }
        const fr = new FileReader();
        fr.onload = () => {
            const dataUrl = fr.result.toString();
            this.base64textString = dataUrl;
        };
        fr.readAsDataURL(pickedFile);
    }
    filter(query) {
        this.filteredItemsSearch = (query.target.value) ?
            this.listofItems.filter(p => p.name.toLowerCase().includes(query.target.value.toLowerCase())) :
            this.listofItems;
    }
    validateForm(formData) {
        this.isValid = true;
        if (formData.price == 0)
            this.isValid = false;
        else if (formData.Quantity == 0)
            this.isValid = false;
        return this.isValid;
    }
    Save() {
        this.regform.get('picture').setValue(this.base64textString);
        if (this.regform.valid) {
            if (!this.itemId) {
                this.itemsService.create(this.regform.value);
                let price = this.regform.get('price').value;
                let name = this.regform.get('name').value;
                let amhricName = this.regform.get('AmaricName').value;
                let Quantity = this.regform.get('Quantity').value;
                let storeid = this.regform.get('storeid').value;
                this.getItemListAfterSave(Quantity, storeid, name, amhricName, price);
            }
            else {
                this.itemsService.updateItem(this.regform.value, this.itemId);
            }
            this.presentAlert();
            this.base64textString = '';
            this.regform.reset();
            this.itemId = null;
            this.getCategory();
        }
        else {
            this.ErrorAlert();
        }
    }
    delete(item) {
        this.presentAlertConfirm(item);
    }
    presentAlertConfirm(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: '<strong>Are you sure you want delete?</strong>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.itemsService.removeItems(item.id);
                            this.regform.reset();
                            this.itemId = null;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ErrorAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                // subHeader: 'Subtitle',
                message: 'Please Enter All field.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Item',
                // subHeader: 'Subtitle',
                message: 'Items Saved successfully.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    Edit(item) {
        this.editMode = true;
        this.itemId = item.id;
        this.regform.get('name').setValue(item.name);
        this.regform.get('AmaricName').setValue(item.AmaricName);
        this.regform.get('type').setValue(item.type);
        this.regform.get('discrption').setValue(item.discrption);
        this.regform.get('CatagoryId').setValue(item.CatagoryId);
        this.regform.get('price').setValue(item.price);
        this.regform.get('Quantity').setValue(item.Quantity);
        this.regform.get('storeid').setValue(item.storeid);
        this.regform.get('brand').setValue(item.brand);
        this.regform.get('remark').setValue(item.remark);
        this.base64textString = item.picture;
    }
    // async ShowModal()
    // {
    //   const modal = await this.modalCtrl.create({
    //    component: LoginPage
    //    //componentProps: 
    //  });
    //  return await modal.present();
    // }
    // ShowLogin()
    // {
    //   this.ShowModal();
    // }
    // Logout()
    // {
    //   this.loginservice.LoginUser.next(false);
    //   this.ISLogin=false;
    //   this.navMod.navigateBack(['/tab']);
    // }
    //paging function
    onTableDataChange(event) {
        this.page = event;
        this.getItemList();
    }
    onTableSizeChange(event) {
        this.tableSize = event.target.value;
        this.page = 1;
        this.getItemList();
    }
};
ItemsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _Service_catagory_service__WEBPACK_IMPORTED_MODULE_5__["CatagoryService"] },
    { type: _Service_item_category_service__WEBPACK_IMPORTED_MODULE_9__["ItemCategoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _Service_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _Service_items_service__WEBPACK_IMPORTED_MODULE_8__["ItemsService"] },
    { type: _Service_balance_service__WEBPACK_IMPORTED_MODULE_10__["BalanceService"] },
    { type: _Service_lookup_catagory_service__WEBPACK_IMPORTED_MODULE_1__["LookupCatagoryService"] }
];
ItemsPage.propDecorators = {
    filePickerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['filePicker', { static: false },] }]
};
ItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./items.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/items/items.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./items.page.scss */ "./src/app/items/items.page.scss")).default]
    })
], ItemsPage);



/***/ })

}]);
//# sourceMappingURL=items-items-module-es2015.js.map