(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lookup-lookup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lookup/lookup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lookup/lookup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" > \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Lookup</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n    <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n      <div *ngIf=\"regform.get('name').invalid && (regform.get('name').dirty ||regform.get('name').touched)\"\n        class=\"alert alert-danger\"> \n        <div *ngIf=\"regform.get('name').errors.required\">This field is required!</div>\n      </div>\n        </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Value</ion-label>\n      <ion-input formControlName=\"value\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Lookup Category</ion-label>\n      <ion-select  name=\"type\" interface=\"popover\" formControlName=\"type\"[(ngModel)]=\"SelectedLookup\" (ionChange)=\"SelectedValue($event)\">\n          <ion-select-option *ngFor=\"let code of listOfLookupCatagory\" value=\"{{code?.id}}\">\n               {{code?.name}}\n         </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Remark</ion-label>\n      <ion-textarea type=\"text\" formControlName=\"remark\" placeholder=\"Enter more information here...\"></ion-textarea>\n     </ion-item>\n    <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"Save()\"> \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Lookup':'Add Lookup'}}</ion-button>\n    </div>\n  </form>\n  </ion-list>\n <ion-searchbar\n  (keyup)=\"filter($event)\"  showCancelButton=\"never\"></ion-searchbar> \n   <ion-item-sliding  *ngFor=\"let item of filteredLookUp \" #slidingItem >\n    <ion-item detail>\n      <ion-label> {{item.name}}</ion-label>\n      <ion-label  style=\"text-align: end;\"> {{item.value}}</ion-label>\n    </ion-item>\n    <ion-item-options side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"Edit(item,slidingItem)\">\n     <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n     <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n      <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding> \n</ion-content>\n");

/***/ }),

/***/ "./src/app/lookup/lookup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/lookup/lookup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LookupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupPageRoutingModule", function() { return LookupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lookup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lookup.page */ "./src/app/lookup/lookup.page.ts");




const routes = [
    {
        path: '',
        component: _lookup_page__WEBPACK_IMPORTED_MODULE_3__["LookupPage"]
    }
];
let LookupPageRoutingModule = class LookupPageRoutingModule {
};
LookupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LookupPageRoutingModule);



/***/ }),

/***/ "./src/app/lookup/lookup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/lookup/lookup.module.ts ***!
  \*****************************************/
/*! exports provided: LookupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupPageModule", function() { return LookupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lookup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lookup-routing.module */ "./src/app/lookup/lookup-routing.module.ts");
/* harmony import */ var _lookup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lookup.page */ "./src/app/lookup/lookup.page.ts");







let LookupPageModule = class LookupPageModule {
};
LookupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _lookup_routing_module__WEBPACK_IMPORTED_MODULE_5__["LookupPageRoutingModule"]
        ],
        declarations: [_lookup_page__WEBPACK_IMPORTED_MODULE_6__["LookupPage"]]
    })
], LookupPageModule);



/***/ }),

/***/ "./src/app/lookup/lookup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/lookup/lookup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvb2t1cC9sb29rdXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/lookup/lookup.page.ts":
/*!***************************************!*\
  !*** ./src/app/lookup/lookup.page.ts ***!
  \***************************************/
/*! exports provided: LookupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupPage", function() { return LookupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Service_lookup_catagory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Service/lookup-catagory.service */ "./src/app/Service/lookup-catagory.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/lookup.service */ "./src/app/Service/lookup.service.ts");






let LookupPage = class LookupPage {
    constructor(fb, lookupService, alertController, lookupCatagoryService) {
        this.fb = fb;
        this.lookupService = lookupService;
        this.alertController = alertController;
        this.lookupCatagoryService = lookupCatagoryService;
        this.regform = this.fb.group({});
        this.editMode = false;
    }
    ngOnInit() {
        this.regform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z0-9]*")])],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            value: [''],
            remark: ['']
        });
        this.allLookupCatagory();
        this.readLookup();
    }
    readLookup() {
        this.lookupService.getAllLookUp().subscribe(res => {
            this.listOflookUp = res;
        });
    }
    SelectedValue($event) {
        this.lookupService.getAllLookUp().subscribe(res => {
            this.listOflookUp = res;
            this.filteredLookUp = this.listOflookUp.filter(c => c.type == $event.target.value);
        });
    }
    filter(query) {
        this.filteredLookUp = (query.target.value) ? this.listOflookUp.filter(p => p.name.toLowerCase().includes(query.target.value.toLowerCase())) :
            this.listOflookUp;
    }
    allLookupCatagory() {
        this.lookupCatagoryService.getAllLookupCatagory().subscribe(result => {
            this.listOfLookupCatagory = result;
            this.SelectedLookup = this.listOfLookupCatagory[0].id;
        });
    }
    Save() {
        if (this.regform.valid) {
            if (!this.lookupId) {
                this.lookupService.create(this.regform.value);
            }
            else {
                this.lookupService.updateLookup(this.regform.value, this.lookupId);
            }
            this.regform.reset();
            this.lookupId = "";
            this.presentAlert("Save Sucessfully");
        }
        else {
            this.presentAlert("plase enter all fields");
        }
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'lookup',
                // subHeader: 'Subtitle',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    Edit(item, slidingItem) {
        this.editMode = true;
        this.lookupId = item.id;
        this.regform.get("name").setValue(item.name);
        this.regform.get("type").setValue(item.type);
        this.regform.get("value").setValue(item.value);
        this.regform.get("remark").setValue(item.remark);
        slidingItem.close();
    }
    delete(item, slidingItem) {
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
                            this.lookupService.removeLookup(item.id);
                            this.regform.reset();
                            this.lookupId = null;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
LookupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _Service_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _Service_lookup_catagory_service__WEBPACK_IMPORTED_MODULE_1__["LookupCatagoryService"] }
];
LookupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-lookup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lookup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lookup/lookup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lookup.page.scss */ "./src/app/lookup/lookup.page.scss")).default]
    })
], LookupPage);



/***/ })

}]);
//# sourceMappingURL=lookup-lookup-module-es2015.js.map