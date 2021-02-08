(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors-vendors-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/vendors.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/vendors.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <div>\n      <ion-item color=\"primary\" lines=\"none\">\n        <ion-label>Vendors</ion-label>\n        <!-- <ion-badge color=\"success\" slot=\"end\">{{lengthOfVendor}}</ion-badge> -->\n        <ion-icon name=\"add-outline\" (click)=\"openModal()\"></ion-icon>\n      </ion-item>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"list\">\n    <ion-segment-button value=\"list\">\n      <ion-label>\n        List\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"details\">\n      <ion-label>\n        details\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-list class=\"animate__animated animate__slideInUp animate__fast\" *ngIf=\"segment === 'list'\">\n    <ion-list>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group\">\n            <ion-searchbar showCancelButton=\"never\" [(ngModel)]=\"searchText\" placeholder=\"Search\"></ion-searchbar>\n          </div>\n        </div>\n      </div>\n      <!-- <ng-container *ngIf=\"listOfvendors | async; else loading; let listOfvendors\"> -->\n      <table class=\"table table-hover\">\n        <colgroup>\n          <col width=\"5%\">\n          <col width=\"*\">\n          <col width=\"5%\">\n          <col width=\"15%\">\n        </colgroup>\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Vendor Name</th>\n            <th scope=\"col\">Contact</th>\n            <th scope=\"col\">Phone number</th>\n            <th scope=\"col\">Balance</th>\n            <th scope=\"col\">Address</th>\n            <th scope=\"col\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of listOfvendors|filter:searchText  | paginate : {\n                                              itemsPerPage: tableSize,\n                                              currentPage: page,\n                                              totalItems: this.lengthOfVendor\n                                            };\n                                      let i = index\" [class.active]=\"i == currentIndex\">\n            <th scope=\"row\">{{i + 1}}</th>\n            <td (click)=\"viewVendors(item)\">{{item.vendorName}}</td>\n            <td  (click)=\"viewVendors(item)\">{{item.contact}}</td>\n            <td  (click)=\"viewVendors(item)\">{{item.phonenumber}}</td>\n            <td  (click)=\"viewVendors(item)\">{{item.balance}}</td>\n            <td  (click)=\"viewVendors(item)\">{{item.address}}</td>\n            <td (click)=\"update(item)\">\n              <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n            </td>\n            <td (click)=\"delete(item)\">\n              <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"d-flex justify-content-center\">\n        <pagination-controls responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\"\n          (pageChange)=\"onTableDataChange($event)\">\n        </pagination-controls>\n      </div>\n      <!-- </ng-container> -->\n      <ng-template #loading>\n        <p>No results .....</p>\n      </ng-template>\n    </ion-list>\n  </ion-list>\n\n  <div class=\"animate__animated animate__slideInUp animate__fast\" *ngIf=\"segment === 'details'\">\n    <ion-card>\n      <ion-card-content>\n     \n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>");

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

/***/ "./src/app/vendors/vendors-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/vendors/vendors-routing.module.ts ***!
  \***************************************************/
/*! exports provided: VendorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsPageRoutingModule", function() { return VendorsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vendors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendors.page */ "./src/app/vendors/vendors.page.ts");




const routes = [
    {
        path: '',
        component: _vendors_page__WEBPACK_IMPORTED_MODULE_3__["VendorsPage"]
    }
];
let VendorsPageRoutingModule = class VendorsPageRoutingModule {
};
VendorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VendorsPageRoutingModule);



/***/ }),

/***/ "./src/app/vendors/vendors.module.ts":
/*!*******************************************!*\
  !*** ./src/app/vendors/vendors.module.ts ***!
  \*******************************************/
/*! exports provided: VendorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsPageModule", function() { return VendorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vendors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendors-routing.module */ "./src/app/vendors/vendors-routing.module.ts");
/* harmony import */ var _vendors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendors.page */ "./src/app/vendors/vendors.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vendor_modal_vendor_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vendor-modal/vendor-modal.page */ "./src/app/vendors/vendor-modal/vendor-modal.page.ts");












let VendorsPageModule = class VendorsPageModule {
};
VendorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vendors_routing_module__WEBPACK_IMPORTED_MODULE_5__["VendorsPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxDataGridModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxSelectBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxCheckBoxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild([
                {
                    path: '',
                    component: _vendors_page__WEBPACK_IMPORTED_MODULE_6__["VendorsPage"]
                }
            ])
        ],
        declarations: [_vendors_page__WEBPACK_IMPORTED_MODULE_6__["VendorsPage"], _vendor_modal_vendor_modal_page__WEBPACK_IMPORTED_MODULE_11__["VendorModalPage"]],
        entryComponents: [_vendor_modal_vendor_modal_page__WEBPACK_IMPORTED_MODULE_11__["VendorModalPage"]]
    })
], VendorsPageModule);



/***/ }),

/***/ "./src/app/vendors/vendors.page.scss":
/*!*******************************************!*\
  !*** ./src/app/vendors/vendors.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-segment {\n  margin: 5px 0;\n}\n\ntable.table-hover tbody tr:hover {\n  cursor: pointer;\n}\n\n.modal-wrapper {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .modal-wrapper {\n  background: #222;\n}\n\n.my-custom-class {\n  --background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9ycy92ZW5kb3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7QUFFSjs7QUFBRTtFQUNFLGdCQUFBO0FBR0o7O0FBQUUsdUVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcnMvdmVuZG9ycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tc2VnbWVudCB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH1cclxuICB0YWJsZS50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5tb2RhbC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbiAgLm15LWN1c3RvbS1jbGFzcyAubW9kYWwtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIH1cclxuICAubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzIyMjtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/vendors/vendors.page.ts":
/*!*****************************************!*\
  !*** ./src/app/vendors/vendors.page.ts ***!
  \*****************************************/
/*! exports provided: VendorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsPage", function() { return VendorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_vendors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/vendors.service */ "./src/app/Service/vendors.service.ts");
/* harmony import */ var _vendor_modal_vendor_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor-modal/vendor-modal.page */ "./src/app/vendors/vendor-modal/vendor-modal.page.ts");






let VendorsPage = class VendorsPage {
    //public data={};
    constructor(fb, platform, vendorService, alertController, modalController) {
        this.fb = fb;
        this.platform = platform;
        this.vendorService = vendorService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.regform = this.fb.group({});
        this.VocherNo = '0';
        //paging declaration
        this.page = 1;
        this.count = 0;
        this.tableSize = 5;
        this.currentIndex = -1;
        this.editMode = false;
        this.segment = "list";
    }
    ngOnInit() {
        this.regform = this.fb.group({
            vendorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phonenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]*")])],
            contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            website: [''],
            balance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]*")])]
        });
        this.getVendor();
        this.readVoucherId();
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
    }
    openModal() {
        this.modalController.create({ component: _vendor_modal_vendor_modal_page__WEBPACK_IMPORTED_MODULE_5__["VendorModalPage"],
            cssClass: 'my-custom' }).then((modelElement) => {
            modelElement.present();
        });
    }
    readVoucherId() {
        let No = 0;
        this.vendorService.getAllVendor().subscribe(result => {
            if (result.length == 0)
                No = 1;
            else
                No = result.length + 1;
            this.VocherNo = "VN-" + this.VocherNo.padStart(4, '0') + No;
        });
    }
    getVendor() {
        try {
            this.vendorService.getAllVendor().subscribe(result => {
                this.lengthOfVendor = result.length;
                if (result.length > 0) {
                    this.listOfvendors = result;
                    this.filteredVendors = result;
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
    SaveVender() {
        if (this.regform.valid) {
            if (!this.vendorId) {
                this.vendorService.create(this.regform.value);
            }
            else {
                this.vendorService.updateVendor(this.regform.value, this.vendorId);
            }
            this.regform.reset();
            this.vendorId = "";
            this.presentAlert("Add Vendor Sucessfully");
        }
        else {
            this.presentAlert("Please enter all fields");
        }
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Vendors',
                message: message,
                buttons: ['ok']
            });
            yield alert.present();
        });
    }
    filter(query) {
        this.filteredVendors = (query.target.value) ?
            this.listOfvendors.filter(p => p.vendorName.toLowerCase().includes(query.target.value.toLowerCase())) :
            this.listOfvendors;
    }
    update(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _vendor_modal_vendor_modal_page__WEBPACK_IMPORTED_MODULE_5__["VendorModalPage"],
                cssClass: 'my-custom',
                componentProps: {
                    data: item
                }
            });
            return yield modal.present().then(_ => {
                // triggered when opening the modal
                //console.log('Sending: ',item);
            });
        });
    }
    viewVendors(item) {
    }
    segmentChanged(ev) {
        this.segment = ev.detail.value;
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
                            this.vendorService.removeVendor(item.id);
                            this.regform.reset();
                            this.vendorId = null;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //paging function
    onTableDataChange(event) {
        this.page = event;
        this.getVendor();
    }
};
VendorsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _Service_vendors_service__WEBPACK_IMPORTED_MODULE_4__["VendorsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
VendorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vendors.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/vendors.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vendors.page.scss */ "./src/app/vendors/vendors.page.scss")).default]
    })
], VendorsPage);



/***/ })

}]);
//# sourceMappingURL=vendors-vendors-module-es2015.js.map