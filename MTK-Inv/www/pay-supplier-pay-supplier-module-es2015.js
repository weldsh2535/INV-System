(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pay-supplier-pay-supplier-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pay-supplier/pay-supplier.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pay-supplier/pay-supplier.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Pay Supplier</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n <ion-item>\n          <ion-label> Select Vendor</ion-label>\n          <div class=\"dx-field\">\n            <dx-lookup [items]=\"listOfVonder\" [searchExpr]=\"['id','vendorName','contact', 'phonenumber','address']\" valueExpr=\"id\"\n              [displayExpr]=\"getDisplayExpr\" placeholder=\"Select Items\" formControlName=\"vendor\"\n              (onValueChanged)=\"SelectedValue($event)\" itemTemplate=\"listOfVonder\"\n              [(ngModel)]=\"defaultSelectedCurrency\">\n              <dxo-drop-down-options title=\"Select vendors\"></dxo-drop-down-options>\n              <div *dxTemplate=\"let item of 'listOfVonder'\">\n                <div class=\"custom-item\">\n                 <div>{{item.vendorName }} &nbsp;&nbsp;{{item.contact }} &nbsp;&nbsp;{{item.phonenumber}}</div>\n                </div>\n              </div>\n            </dx-lookup>\n          </div>\n    </ion-item>\n    <ion-item >\n       <ion-label>Balance </ion-label>\n        <ion-input [(ngModel)]=\"this.Balance\" formControlName=\"updateBalance\" value=\"{{updateBalance}}\" readonly></ion-input>\n     </ion-item>\n    <ion-item>\n      <ion-label  position=\"floating\" >Enter Payment </ion-label>\n        <ion-input type=\"number\" formControlName=\"payment\" aria-placeholder=\"Enter payment\" [(ngModel)]=\"payment\" \n        (keyup)=\"onKey()\"></ion-input>\n        <small class=\"form-text text-muted\" *ngIf=\"!regform.get('payment').valid && regform.get('payment').touched\" > This field is required! </small> \n    </ion-item>\n    <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"reCalculateBalance()\" [disabled]=\"!regform.valid\"> \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>Calculate Balance\n       </ion-button>\n    </div>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pay-supplier/pay-supplier-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pay-supplier/pay-supplier-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PaySupplierPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySupplierPageRoutingModule", function() { return PaySupplierPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pay_supplier_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pay-supplier.page */ "./src/app/pay-supplier/pay-supplier.page.ts");




const routes = [
    {
        path: '',
        component: _pay_supplier_page__WEBPACK_IMPORTED_MODULE_3__["PaySupplierPage"]
    }
];
let PaySupplierPageRoutingModule = class PaySupplierPageRoutingModule {
};
PaySupplierPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaySupplierPageRoutingModule);



/***/ }),

/***/ "./src/app/pay-supplier/pay-supplier.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pay-supplier/pay-supplier.module.ts ***!
  \*****************************************************/
/*! exports provided: PaySupplierPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySupplierPageModule", function() { return PaySupplierPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pay_supplier_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pay-supplier-routing.module */ "./src/app/pay-supplier/pay-supplier-routing.module.ts");
/* harmony import */ var _pay_supplier_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pay-supplier.page */ "./src/app/pay-supplier/pay-supplier.page.ts");








let PaySupplierPageModule = class PaySupplierPageModule {
};
PaySupplierPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxLookupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTemplateModule"],
            _pay_supplier_routing_module__WEBPACK_IMPORTED_MODULE_6__["PaySupplierPageRoutingModule"]
        ],
        declarations: [_pay_supplier_page__WEBPACK_IMPORTED_MODULE_7__["PaySupplierPage"]]
    })
], PaySupplierPageModule);



/***/ }),

/***/ "./src/app/pay-supplier/pay-supplier.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pay-supplier/pay-supplier.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .field-customization {\n  min-height: 32px;\n}\n\n::ng-deep .dx-lookup.field-customization .dx-lookup-field {\n  padding: 0 5px;\n}\n\n::ng-deep .custom-field > img {\n  vertical-align: middle;\n  height: 30px;\n  width: 21px;\n}\n\n::ng-deep .custom-field > div {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 30px;\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n::ng-deep .custom-item > img {\n  height: 48px;\n  width: 38px;\n  margin-right: 10px;\n}\n\n::ng-deep .custom-item > div {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 48px;\n  font-size: 15px;\n}\n\n::ng-deep .dx-viewport:not(.dx-theme-ios7) .dx-fieldset {\n  width: 40%;\n  float: left;\n}\n\n::ng-deep .dx-field > .dx-lookup {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5LXN1cHBsaWVyL3BheS1zdXBwbGllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQU9GOztBQUxBO0VBQ0UsT0FBQTtBQVFGIiwiZmlsZSI6InNyYy9hcHAvcGF5LXN1cHBsaWVyL3BheS1zdXBwbGllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmZpZWxkLWN1c3RvbWl6YXRpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1sb29rdXAuZmllbGQtY3VzdG9taXphdGlvbiAuZHgtbG9va3VwLWZpZWxkIHtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG46Om5nLWRlZXAgLmN1c3RvbS1maWVsZCA+IGltZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDIxcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5jdXN0b20tZmllbGQgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbjo6bmctZGVlcCAuY3VzdG9tLWl0ZW0gPiBpbWcge1xyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogMzhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5jdXN0b20taXRlbSA+IGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbjo6bmctZGVlcCAuZHgtdmlld3BvcnQ6bm90KC5keC10aGVtZS1pb3M3KSAuZHgtZmllbGRzZXQge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1maWVsZCA+IC5keC1sb29rdXAge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pay-supplier/pay-supplier.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pay-supplier/pay-supplier.page.ts ***!
  \***************************************************/
/*! exports provided: PaySupplierPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySupplierPage", function() { return PaySupplierPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _Service_vendors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/vendors.service */ "./src/app/Service/vendors.service.ts");
/* harmony import */ var _Service_vocher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/vocher.service */ "./src/app/Service/vocher.service.ts");







let PaySupplierPage = class PaySupplierPage {
    constructor(fb, vonderService, alertController, voucherService) {
        this.fb = fb;
        this.vonderService = vonderService;
        this.alertController = alertController;
        this.voucherService = voucherService;
        this.regform = this.fb.group({});
        this.fields = { text: "vendorName", value: "vendorName" };
        this.watermark2 = "Select Vendor";
        this.height = "250px";
    }
    ngOnInit() {
        this.regform = this.fb.group({
            vendor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            payment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            updateBalance: 0
        });
        this.getAllCustomerList();
    }
    getDisplayExpr(item) {
        if (!item) {
            return "";
        }
        return item.vendorName + " " + item.phonenumber;
    }
    getAllCustomerList() {
        this.vonderService.getAllVendor().subscribe(res => {
            this.listOfVonder = res;
            this.defaultSelectedCurrency = this.listOfVonder[0].id;
        });
    }
    onKey() {
        this.Balance = this.updateBalance + this.regform.get("payment").value;
    }
    SelectedValue($event) {
        const newValue = $event.value;
        const previousValue = $event.previousValue;
        this.id = newValue || previousValue;
        this.filterVendor = this.listOfVonder.filter((c) => c.id == this.id);
        this.selectedVendorBalance = this.filterVendor[0].balance;
        this.updateBalance = this.selectedVendorBalance;
        this.getVoucherByVendorId(this.defaultSelectedCurrency);
    }
    getVoucherByVendorId(defaultSelectedCurrency) {
        this.totalBalance = 0;
        this.listOfVoucherVendor = this.voucherService.getVocherVonderById(defaultSelectedCurrency).subscribe(res => {
            this.listOfVoucher = res;
            this.listOfVoucher.forEach(element => {
                this.totalBalance = +this.totalBalance + element.subTotal;
            });
            if (this.updateBalance > this.totalBalance) {
                this.remainderBalance = 0;
            }
            else {
                this.remainderBalance = this.totalBalance - this.updateBalance;
            }
        });
    }
    reCalculateBalance() {
        {
            if (this.regform.valid) {
                if (!this.recieveBalanceId) {
                    let updateCustomerData = {
                        vendorName: this.filterVendor[0].vendorName,
                        email: this.filterVendor[0].email,
                        phonenumber: this.filterVendor[0].phonenumber,
                        contact: this.filterVendor[0].contact,
                        balance: this.updateBalance + this.regform.get("payment").value,
                        address: this.filterVendor[0].address,
                        website: this.filterVendor[0].website
                    };
                    this.vonderService.updateVendor(updateCustomerData, this.defaultSelectedCurrency).then(() => (error) => {
                        if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_4__["BadInput"]) {
                            this.regform.setErrors(error.originalError);
                        }
                        else
                            throw error;
                    });
                }
                // else{
                //  this.idSettingService.updateIdSetting(this.regform.value,this.IdSettingId)
                // }
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
                header: 'pay Supplier',
                // subHeader: 'Subtitle',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
PaySupplierPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _Service_vendors_service__WEBPACK_IMPORTED_MODULE_5__["VendorsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Service_vocher_service__WEBPACK_IMPORTED_MODULE_6__["VocherService"] }
];
PaySupplierPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pay-supplier',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pay-supplier.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pay-supplier/pay-supplier.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pay-supplier.page.scss */ "./src/app/pay-supplier/pay-supplier.page.scss")).default]
    })
], PaySupplierPage);



/***/ })

}]);
//# sourceMappingURL=pay-supplier-pay-supplier-module-es2015.js.map