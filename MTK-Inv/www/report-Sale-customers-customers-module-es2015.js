(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-Sale-customers-customers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/customers/customers.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/customers/customers.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Reports</ion-title>\n    <ion-label>Customer List</ion-label>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-button (click)=\"filter()\"><ion-icon name=\"list-circle-outline\"></ion-icon>Filters\n  <ion-select class=\"custom-options\" multiple=\"true\">\n    <ion-select-option value=\"brown\">Brown</ion-select-option>\n    <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n    <ion-select-option value=\"black\">Black</ion-select-option>\n    <ion-select-option value=\"red\">Red</ion-select-option>\n  </ion-select>\n</ion-button>\n  <table class=\"table table-hover\">\n    <colgroup>\n      <col width=\"5%\">\n      <col width=\"5%\">\n      <col width=\"5%\">\n      <col width=\"5%\">\n    </colgroup>\n    <thead style=\"background-color: cadetblue;\">\n      <tr>\n        <th scope=\"col\">Full Name</th>\n        <th scope=\"col\">Address</th>\n        <th scope=\"col\">Phone number</th>\n        <th scope=\"col\">Location</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of customerList\">\n        <td>{{item.fullname}}</td>\n        <td>{{item.address}}</td>\n        <td>{{item.phonenumber}}</td>\n        <td>{{item.location}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <div *ngIf=\"generateList\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Customer List</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        List of customers and their contact information\n        Want to customize this report?\n        Just change the settings at the top of this window before selecting Generate.\n        <ion-button (click)=\"generate()\">generate</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/report/Sale/customers/customers-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/report/Sale/customers/customers-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CustomersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersPageRoutingModule", function() { return CustomersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _customers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.page */ "./src/app/report/Sale/customers/customers.page.ts");




const routes = [
    {
        path: '',
        component: _customers_page__WEBPACK_IMPORTED_MODULE_3__["CustomersPage"]
    }
];
let CustomersPageRoutingModule = class CustomersPageRoutingModule {
};
CustomersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomersPageRoutingModule);



/***/ }),

/***/ "./src/app/report/Sale/customers/customers.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/report/Sale/customers/customers.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersPageModule", function() { return CustomersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/report/Sale/customers/customers-routing.module.ts");
/* harmony import */ var _customers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers.page */ "./src/app/report/Sale/customers/customers.page.ts");







let CustomersPageModule = class CustomersPageModule {
};
CustomersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customers_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomersPageRoutingModule"]
        ],
        declarations: [_customers_page__WEBPACK_IMPORTED_MODULE_6__["CustomersPage"]]
    })
], CustomersPageModule);



/***/ }),

/***/ "./src/app/report/Sale/customers/customers.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/report/Sale/customers/customers.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9TYWxlL2N1c3RvbWVycy9jdXN0b21lcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/report/Sale/customers/customers.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/report/Sale/customers/customers.page.ts ***!
  \*********************************************************/
/*! exports provided: CustomersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersPage", function() { return CustomersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_Service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/customer.service */ "./src/app/Service/customer.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/__ivy_ngcc__/fesm2015/ngx-papaparse.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");








let CustomersPage = class CustomersPage {
    constructor(customerService, loadingController, papa, platform, file, socialSharing) {
        this.customerService = customerService;
        this.loadingController = loadingController;
        this.papa = papa;
        this.platform = platform;
        this.file = file;
        this.socialSharing = socialSharing;
        this.generateB = 0;
        this.generateList = true;
        this.csvData = [];
        this.headerRow = [];
        this.loadCSV();
    }
    ngOnInit() {
        this.getCustomerList();
    }
    loadCSV() {
        this.customerService.getAllCustomer()
            .subscribe(data => this.extractData(JSON.stringify(data)), err => console.log('something went wrong: ', err));
    }
    extractData(res) {
        let csvData = res || '';
        this.papa.parse(csvData, {
            complete: parsedData => {
                this.headerRow = parsedData.data.splice(0, 1)[0];
                console.log("header -----------" + this.headerRow);
                this.csvData = parsedData.data;
                console.log("data list----" + this.csvData);
            }
        });
    }
    exportCSV() {
        let csv = this.papa.unparse({
            fields: this.headerRow,
            data: this.csvData
        });
        if (this.platform.is('cordova')) {
            this.file.writeFile(this.file.dataDirectory, 'data.csv', csv, { replace: true }).then(res => {
                this.socialSharing.share(null, null, res.nativeURL, null).then(e => {
                    // Success
                }).catch(e => {
                    console.log('Share failed:', e);
                });
            }, err => {
                console.log('Error: ', err);
            });
        }
        else {
            // Dummy implementation for Desktop download purpose
            var blob = new Blob([csv]);
            var a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'newdata.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    trackByFn(index, item) {
        return index;
    }
    getCustomerList() {
        this.customerService.getAllCustomer().subscribe(res => {
            if (this.generateB == 0) {
                this.customerList = null;
            }
            else {
                this.customerList = res;
                this.generateList = false;
            }
        });
    }
    filter() {
    }
    generate() {
        this.presentLoading();
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...'
            }).then((overlay) => {
                this.loading = overlay;
                this.loading.present();
            });
            setTimeout(() => {
                this.loading.dismiss();
                this.generateB = 1;
                this.getCustomerList();
            }, 4000);
        });
    }
};
CustomersPage.ctorParameters = () => [
    { type: src_app_Service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__["Papa"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] }
];
CustomersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/Sale/customers/customers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customers.page.scss */ "./src/app/report/Sale/customers/customers.page.scss")).default]
    })
], CustomersPage);



/***/ })

}]);
//# sourceMappingURL=report-Sale-customers-customers-module-es2015.js.map