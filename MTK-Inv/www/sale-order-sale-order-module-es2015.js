(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sale-order-sale-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sale-order/sale-order.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sale-order/sale-order.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sale Order</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div  class=\"container-fluid\" \n          style=\"background-color: rgb(235, 235, 235);\">\n          <div class=\"row\">\n            <!-- <div class=\"col\">\n              <h1>Add Product</h1>\n              <hr>\n            </div> -->\n          </div>\n\n          <!-- main form -->\n          <div class=\"row\">\n            <form action=\"\"  [formGroup]=\"regform\">\n              <div class=\"col\">\n        <!-- personal info -->\n\n                <ion-item>\n                  <ion-label >Sale Order Number</ion-label>\n                  <ion-input interface=\"popover\" formControlName=\"saleOrderNumber\" >\n                  </ion-input>\n                  </ion-item>\n                   <ion-item>\n                  <div class=\"control-section\" >\n                  <div id='content' style=\"margin: 0px auto; width:300px; padding-top: 20px; margin-left: 0px;\" >\n                      <ejs-dropdownlist  id='Items' #samples [dataSource]='listOfCustomer'  [fields]='fields2' [popupHeight]='height' \n                      [placeholder]='watermark2'[headerTemplate]='headerTemplate' [itemTemplate]='itemTemplate' formControlName=\"customerName\" >\n                        <ng-template #headerTemplate >\n                         <div class=\"head\"> <span class=\"photo\"> Fullname</span> <span class=\"photo\" style=\"margin-left:17px;\">Location</span><span class=\"photo\" style=\"margin-left:17px;\">Phone Number</span> </div>\n                          </ng-template>\n                            <ng-template #itemTemplate let-data ngFor let-code [ngForOf]=\"listOfCustomer\" let-i=\"index\" >\n                              <div class=\"fullname\"> {{code.fullname}} </div>\n                                <div class=\"location\"> {{code.location}}</div>\n                                <div class=\"phonenumber\"> {{code.phonenumber}} </div>\n                             </ng-template>\n                          <ng-template #valueTemplate let-data ngFor let-code [ngForOf]=\"listOfCustomer\" let-i=\"index\" >\n                                 <div class=\"name\"> {{code?.fullname}} </div>\n                          </ng-template>\n                        </ejs-dropdownlist>\n                     </div>\n              </div>  \n                </ion-item>\n\n                <ion-item>\n                  <ion-label>Sale Order Date</ion-label>\n                  <ion-input type=\"date\" formControlName=\"date\"></ion-input>\n                </ion-item>\n            <!-- address form portion -->\n                <div class=\"row\" formArrayName=\"lineItems\">\n                  <div class=\"col-12\" *ngFor=\"let group of addLineItemsArray.controls; let i = index;\" [formGroupName]=\"i\">\n                    <div class=\"row\" >\n                      <div class=\"col-12\">\n                        <div class=\"row\">\n                          <div class=\"col-4 control-buttons\" >\n                            <ion-button id=\"add items\" (click)=\"addLineItems()\"> \n                              <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>Add Product</ion-button>\n                          </div>\n                          <div class=\"col-8 control-buttons\">\n                            <ion-button id=\"add items\" (click)=\"removeLineOfItems(i)\"> \n                              <ion-icon slot=\"start\"name=\"remove-circle-outline\"></ion-icon>Remove </ion-button>\n                          </div>\n                        </div>\n                        </div>\n                      <div class=\"control-section\" >\n                        <div id='content' style=\"margin: 0px auto; width:300px; padding-top: 40px; margin-left: 20px;\" >\n                            <ejs-dropdownlist  id='Items' #samples [dataSource]='listOfItems'  [fields]='fields' [popupHeight]='height' \n                            [placeholder]='watermark'[headerTemplate]='headerTemplate' [itemTemplate]='itemTemplate' formControlName=\"itemCode\" >\n                              <ng-template #headerTemplate >\n                               <div class=\"head\"> <span class=\"photo\">Photo Items</span> <span style=\"margin-left:17px;\">Item and description</span></div>\n                                </ng-template>\n                                  <ng-template #itemTemplate let-data ngFor let-code [ngForOf]=\"listOfItems\" let-i=\"index\" >\n                                    <img class=\"empImage\" [src]=\"code?.picture\"/>\n                                      <div class=\"ename\"> {{code?.name}} </div>\n                                      <div class=\"job\"> {{code?.discrption}} </div>\n                                     </ng-template>\n                                <ng-template #valueTemplate let-data ngFor let-code [ngForOf]=\"listOfCustomer\" let-i=\"index\" >\n                                    <div class=\"name\"> {{code?.name}} </div>\n                                </ng-template>\n                              </ejs-dropdownlist>\n                           </div>\n                    </div>  \n                      <div class=\"col-12\">\n                        <div class=\"row\" ng-app=\"\">\n                          <div class=\"col\">\n                            <div class=\"form-group\">\n                              <label for=\"quantity\">Qunatity</label>\n                              <input type=\"number\" formControlName=\"quantity\" ng-model=\"qunatity\" ng-init=\"qunatity=0\" [ngClass]=\"{'form-control': true}\"  placeholder=\"Enter Qunatity\">\n                            </div>\n                          </div>\n                          <div class=\"col\">\n                            <div class=\"form-group\">\n                              <label for=\"cost\">Unit Price</label>\n                              <input type=\"number\" formControlName=\"cost\" ng-model=\"cost\" ng-init=\"cost=0\" [ngClass]=\"{'form-control': true}\"  placeholder=\"Enter unit price\">\n                            </div>\n                          </div>\n                           <div class=\"col\">\n                            <div class=\"form-group\">\n                              <label for=\"subTotal\">Subtotal</label>\n                              <input type=\"hidden\" formControlName=\"subTotal\" [ngClass]=\"{'form-control': true}\" >\n                              <!-- <p>{{calculateSubtotal() }} </p> -->\n                            </div>\n                          </div>\n                        </div>\n                  \n                  </div>\n                </div>\n              </div>\n            </div>\n            <ion-item>\n              <ion-label position=\"floating\">Total Amount</ion-label>\n              <ion-input  formControlName=\"totalAmount\"></ion-input>\n            </ion-item> \n           <div style=\"text-align: center; margin: auto;\">\n              <ion-button id=\"add items\" (click)=\"saveSaleOrder()\"> \n                <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n                Add Sale Order </ion-button>\n            </div>\n        <!-- seperator -->\n        <div class=\"row\">\n          <div class=\"col\">\n            <hr>\n          </div>\n        </div>\n\n        <!-- final action buttons \n        <div class=\"row justify-content-center\">\n          <div class=\"col-2\">\n            <button type=\"button\" [disabled]=\"favFruitsError || nestedForm.invalid\" (click)=\"submitHandler()\" class=\"btn btn-primary\">Submit</button>\n          </div>\n        </div>-->\n      </div>\n    </form>\n  </div>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/Service/sale-order.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Service/sale-order.service.ts ***!
  \***********************************************/
/*! exports provided: SaleOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleOrderService", function() { return SaleOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




let SaleOrderService = class SaleOrderService {
    constructor(db) {
        this.saleOrderCollectionList = db.collection('saleOrder');
    }
    create(Purchase) {
        return this.saleOrderCollectionList.add(Purchase);
    }
    //const incrment=firebase.firestore.FieldValue.increment(1);
    getAllSaleOrder() {
        this.saleOrder = this.saleOrderCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.saleOrder;
    }
    updateSaleOrder(saleOrderObj, id) {
        return this.saleOrderCollectionList.doc(id).update(saleOrderObj);
    }
    getSaleOrder(id) {
        return this.saleOrderCollectionList.doc(id).valueChanges();
    }
    addPurchase(vendors) {
        return this.saleOrderCollectionList.add(vendors);
    }
    removeSaleOrder(id) {
        return this.saleOrderCollectionList.doc(id).delete();
    }
};
SaleOrderService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SaleOrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SaleOrderService);



/***/ }),

/***/ "./src/app/sale-order/sale-order-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/sale-order/sale-order-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SaleOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleOrderPageRoutingModule", function() { return SaleOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sale_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-order.page */ "./src/app/sale-order/sale-order.page.ts");




const routes = [
    {
        path: '',
        component: _sale_order_page__WEBPACK_IMPORTED_MODULE_3__["SaleOrderPage"]
    }
];
let SaleOrderPageRoutingModule = class SaleOrderPageRoutingModule {
};
SaleOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SaleOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/sale-order/sale-order.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sale-order/sale-order.module.ts ***!
  \*************************************************/
/*! exports provided: SaleOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleOrderPageModule", function() { return SaleOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sale_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sale-order-routing.module */ "./src/app/sale-order/sale-order-routing.module.ts");
/* harmony import */ var _sale_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sale-order.page */ "./src/app/sale-order/sale-order.page.ts");
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ "./node_modules/@syncfusion/ej2-angular-dropdowns/__ivy_ngcc__/@syncfusion/ej2-angular-dropdowns.js");








let SaleOrderPageModule = class SaleOrderPageModule {
};
SaleOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sale_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaleOrderPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["DropDownListModule"]
        ],
        declarations: [_sale_order_page__WEBPACK_IMPORTED_MODULE_6__["SaleOrderPage"]]
    })
], SaleOrderPageModule);



/***/ }),

/***/ "./src/app/sale-order/sale-order.page.scss":
/*!*************************************************!*\
  !*** ./src/app/sale-order/sale-order.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.control-buttons {\n  text-align: right;\n}\n\n.control-buttons img {\n  cursor: pointer;\n}\n\n.e-bigger #Items_popup .e-dropdownbase .e-list-item {\n  line-height: 40px;\n  height: 64px;\n}\n\n.e-bigger #Items_popup.e-popup .empImage {\n  margin: 10px 16px;\n}\n\n#Items .name {\n  padding: 7px 42px;\n  opacity: 0.87;\n  line-height: 1.063em;\n}\n\n#Items .valueTemp {\n  border-radius: 50%;\n  float: left;\n  margin-top: 2px;\n  margin-left: 2px;\n}\n\n.e-bigger #Items .valueTemp {\n  margin-top: 7px;\n}\n\n.e-bigger #Items .name {\n  padding: 11px 42px;\n}\n\n#Items_popup .head {\n  font-weight: 600;\n  height: 48px;\n  padding: 15px 0 0 16px;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  background-color: #f5f5f5;\n}\n\n.fabric #Items_popup .head {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  color: #0078d7;\n  font-weight: 400;\n}\n\n.highcontrast #Items_popup .head {\n  color: #fff;\n  background-color: #000;\n}\n\n.bootstrap4 #Items_popup .head {\n  color: #6c757d;\n}\n\n.e-bigger #Items_popup .e-dropdownbase .e-list-item {\n  line-height: 40px;\n  height: 80px;\n}\n\n#Items_popup .ename {\n  display: block !important;\n  opacity: 0.87;\n  font-size: 16px;\n  margin-top: 9px;\n}\n\n#Items_popup .job {\n  opacity: 0.54;\n  font-size: 14px;\n  margin-top: -10px;\n  margin-bottom: 11px;\n}\n\n.e-bigger #Items_popup .job {\n  margin-top: -16px;\n}\n\n#Items_popup .empImage {\n  margin: 6px 16px;\n  float: left;\n  width: 50px;\n  height: 50px;\n}\n\n#Items_popup .e-dropdownbase .e-list-item * {\n  display: block;\n  text-indent: 0;\n}\n\n.bootstrap4 #Items_popup.e-popup .empImage {\n  margin: 0px 16px;\n}\n\n.bootstrap4 #Items_popup.e-popup .job {\n  margin-top: 0;\n}\n\n.e-bigger.bootstrap4 #Items_popup.e-popup .job {\n  margin-top: -15px;\n}\n\n#Items_popup .location {\n  margin: 6px 16px;\n  font-size: 16px;\n  margin-top: 9px;\n  margin-left: 100px;\n}\n\n#Items_popup .phonenumber {\n  margin: 6px 16px;\n  font-size: 16px;\n  margin-top: -39px;\n  float: right;\n}\n\n#Items_popup .fullname {\n  margin: 6px 16px;\n  float: left;\n  font-size: 16px;\n  margin-top: 0px;\n}\n\n.e-bigger #Items_popup .phonenumber {\n  margin-top: -16px;\n}\n\n.e-bigger #Items_popup .location {\n  margin-top: -16px;\n}\n\n.e-bigger #Items_popup .fullname {\n  margin-top: -16px;\n}\n\n.bootstrap4 #Items_popup.e-popup .fullname {\n  margin: 0px 16px;\n}\n\n.bootstrap4 #Items_popup.e-popup .phonenumber {\n  margin-top: 0;\n}\n\n.e-bigger.bootstrap4 #Items_popup.e-popup .phonenumber {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZS1vcmRlci9zYWxlLW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDRTtFQUNFLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUlGOztBQURBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0FBSUY7O0FBREE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBTEE7RUFDRSxpQkFBQTtBQVFGOztBQU5BO0VBQ0UsaUJBQUE7QUFTRjs7QUFQQTtFQUNFLGlCQUFBO0FBVUY7O0FBUkE7RUFDRSxnQkFBQTtBQVdGOztBQVJBO0VBQ0UsYUFBQTtBQVdGOztBQVJBO0VBQ0UsZ0JBQUE7QUFXRiIsImZpbGUiOiJzcmMvYXBwL3NhbGUtb3JkZXIvc2FsZS1vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxuICB9XHJcbiAgLmNvbnRyb2wtYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgICAgXHJcbn1cclxuXHJcbi5jb250cm9sLWJ1dHRvbnMgaW1nIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZS1iaWdnZXIgI0l0ZW1zX3BvcHVwIC5lLWRyb3Bkb3duYmFzZSAuZS1saXN0LWl0ZW0ge1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLmUtYmlnZ2VyICNJdGVtc19wb3B1cC5lLXBvcHVwIC5lbXBJbWFnZSB7XHJcbiAgbWFyZ2luOiAxMHB4IDE2cHg7XHJcbn1cclxuXHJcbiNJdGVtcyAubmFtZSB7XHJcbiAgcGFkZGluZzogN3B4IDQycHg7XHJcbiAgb3BhY2l0eTogLjg3O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjA2M2VtO1xyXG59XHJcbiNJdGVtcyAudmFsdWVUZW1wIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5lLWJpZ2dlciAjSXRlbXMgLnZhbHVlVGVtcCB7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcblxyXG4uZS1iaWdnZXIgI0l0ZW1zIC5uYW1lIHtcclxuICBwYWRkaW5nOiAxMXB4IDQycHg7XHJcbn1cclxuXHJcbiNJdGVtc19wb3B1cCAuaGVhZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMTVweCAwIDAgMTZweDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uZmFicmljICNJdGVtc19wb3B1cCAuaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBjb2xvcjogIzAwNzhkNztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uaGlnaGNvbnRyYXN0ICNJdGVtc19wb3B1cCAuaGVhZCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmJvb3RzdHJhcDQgI0l0ZW1zX3BvcHVwIC5oZWFkIHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmUtYmlnZ2VyICNJdGVtc19wb3B1cCAuZS1kcm9wZG93bmJhc2UgLmUtbGlzdC1pdGVtIHtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbiNJdGVtc19wb3B1cCAuZW5hbWUge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogLjg3O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiA5cHg7XHJcbn1cclxuXHJcbiNJdGVtc19wb3B1cCAuam9iIHtcclxuICBvcGFjaXR5OiAuNTQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbn1cclxuXHJcbi5lLWJpZ2dlciAjSXRlbXNfcG9wdXAgLmpvYiB7XHJcbiAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbn1cclxuXHJcbiNJdGVtc19wb3B1cCAuZW1wSW1hZ2Uge1xyXG4gIG1hcmdpbjogNnB4IDE2cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4jSXRlbXNfcG9wdXAgLmUtZHJvcGRvd25iYXNlIC5lLWxpc3QtaXRlbSAqIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWluZGVudDogMDtcclxufVxyXG5cclxuLmJvb3RzdHJhcDQgI0l0ZW1zX3BvcHVwLmUtcG9wdXAgLmVtcEltYWdlIHtcclxuICBtYXJnaW46IDBweCAxNnB4O1xyXG59XHJcblxyXG4uYm9vdHN0cmFwNCAjSXRlbXNfcG9wdXAuZS1wb3B1cCAuam9iIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uZS1iaWdnZXIuYm9vdHN0cmFwNCAjSXRlbXNfcG9wdXAuZS1wb3B1cCAuam9iIHtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG4jSXRlbXNfcG9wdXAgLmxvY2F0aW9uIHtcclxuICBtYXJnaW46IDZweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbiNJdGVtc19wb3B1cCAucGhvbmVudW1iZXIge1xyXG4gIG1hcmdpbjogNnB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0zOXB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4jSXRlbXNfcG9wdXAgLmZ1bGxuYW1lIHtcclxuICBtYXJnaW46IDZweCAxNnB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmUtYmlnZ2VyICNJdGVtc19wb3B1cCAucGhvbmVudW1iZXIge1xyXG4gIG1hcmdpbi10b3A6IC0xNnB4O1xyXG59XHJcbi5lLWJpZ2dlciAjSXRlbXNfcG9wdXAgLmxvY2F0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAtMTZweDtcclxufVxyXG4uZS1iaWdnZXIgI0l0ZW1zX3BvcHVwIC5mdWxsbmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbn1cclxuLmJvb3RzdHJhcDQgI0l0ZW1zX3BvcHVwLmUtcG9wdXAgLmZ1bGxuYW1lIHtcclxuICBtYXJnaW46IDBweCAxNnB4O1xyXG59XHJcblxyXG4uYm9vdHN0cmFwNCAjSXRlbXNfcG9wdXAuZS1wb3B1cCAucGhvbmVudW1iZXIge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5lLWJpZ2dlci5ib290c3RyYXA0ICNJdGVtc19wb3B1cC5lLXBvcHVwIC5waG9uZW51bWJlciB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/sale-order/sale-order.page.ts":
/*!***********************************************!*\
  !*** ./src/app/sale-order/sale-order.page.ts ***!
  \***********************************************/
/*! exports provided: SaleOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleOrderPage", function() { return SaleOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/customer.service */ "./src/app/Service/customer.service.ts");
/* harmony import */ var _Service_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/items.service */ "./src/app/Service/items.service.ts");
/* harmony import */ var _Service_sale_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/sale-order.service */ "./src/app/Service/sale-order.service.ts");







let SaleOrderPage = class SaleOrderPage {
    constructor(fb, platform, itemsService, customerService, alertController, saleOrderService) {
        this.fb = fb;
        this.platform = platform;
        this.itemsService = itemsService;
        this.customerService = customerService;
        this.alertController = alertController;
        this.saleOrderService = saleOrderService;
        this.regform = this.fb.group({});
        this.fields2 = { text: 'fullname', value: 'fullname' };
        this.watermark2 = 'Select Customer Information';
        this.fields = { text: 'name', value: 'name' };
        this.height = '250px';
        this.watermark = 'Select an Items';
    }
    ngOnInit() {
        this.regform = this.fb.group({
            saleOrderNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            totalAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lineItems: this.fb.array([this.addLineItemsGroup()])
        });
        this.getCustomers();
        this.getItems();
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
    }
    addLineItemsGroup() {
        return this.fb.group({
            itemCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            quantity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cost: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subTotal: [null]
        });
    }
    addLineItems() {
        this.addLineItemsArray.push(this.addLineItemsGroup());
    }
    removeLineOfItems(index) {
        this.addLineItemsArray.removeAt(index);
    }
    get addLineItemsArray() {
        const control = this.regform.get('lineItems');
        return control;
    }
    getItems() {
        try {
            this.itemsService.getAllItem().subscribe(result => {
                if (result.length > 0) {
                    this.listOfItems = result;
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
    getCustomers() {
        try {
            this.customerService.getAllCustomer().subscribe(result => {
                if (result.length > 0) {
                    this.listOfCustomer = result;
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
    AlertInternet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Internet',
                message: 'Please trun on data or wifi',
                buttons: ['ok']
            });
            yield alert.present();
        });
    }
    saveSaleOrder() {
        if (this.regform.valid) {
            if (!this.saleOrderId) {
                this.saleOrderService.create(this.regform.value);
            }
            else {
                this.saleOrderService.updateSaleOrder(this.regform.value, this.saleOrderId);
            }
            this.regform.reset();
            this.saleOrderId = "";
            this.presentAlert("Add Purchase Sucessfully");
        }
        else {
            this.presentAlert("Please enter all fileds");
        }
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Sale Order',
                message: message,
                buttons: ['ok']
            });
            yield alert.present();
        });
    }
};
SaleOrderPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _Service_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"] },
    { type: _Service_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Service_sale_order_service__WEBPACK_IMPORTED_MODULE_6__["SaleOrderService"] }
];
SaleOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sale-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sale-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sale-order/sale-order.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sale-order.page.scss */ "./src/app/sale-order/sale-order.page.scss")).default]
    })
], SaleOrderPage);



/***/ })

}]);
//# sourceMappingURL=sale-order-sale-order-module-es2015.js.map