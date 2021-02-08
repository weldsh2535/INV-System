(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-category-item-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/item-category/item-category.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-category/item-category.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" > \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Item Catagory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-list>\n    <ion-item>\n      <ion-label>Category Name</ion-label>\n      <ion-input   formControlName=\"categoryName\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('categoryName').valid && regform.get('categoryName').touched\" > This field is required! </small> \n     </ion-item>\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-input   formControlName=\"description\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('description').valid && regform.get('description').touched\" > This field is required! </small>  </ion-item>\n    <div class=\"picker\">\n      <ion-img\n        role=\"button\"\n        class=\"image\"\n        (click)=\"onPickImage()\"\n        [src]=\"base64textString\"\n        *ngIf=\"base64textString\"\n      >\n    </ion-img>\n      <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\">\n        <ion-icon name=\"picture\" slot=\"start\"></ion-icon>\n        <ion-label>Take Picture</ion-label>\n      </ion-button>\n    </div>\n    <ion-item>\n      <ion-label>Parent Catagory</ion-label>\n      <ion-select  name=\"parentcategory\" interface=\"popover\" formControlName=\"parentcategory\"[(ngModel)]=\"selectedCatagory\" >\n          <ion-select-option *ngFor=\"let code of ListOfItemCategory\" value=\"{{code?.id}}\">\n               {{code?.categoryName}}\n         </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <input  hidden\n      type=\"file\"\n      accept=\"image/jpeg\"\n      *ngIf=\"usePicker\"\n      #filePicker\n      (change)=\"onFileChosen($event)\"\n    />\n    <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"Save()\"> \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Item Catagory':'Add Item Catagory'}}</ion-button>\n    </div>\n  </ion-list>\n  </form>\n <ion-searchbar\n  (keyup)=\"filter($event)\"  showCancelButton=\"never\"></ion-searchbar>\n\n   <ion-item-sliding  *ngFor=\"let item of filteredCategory \" #slidingItem >\n    <ion-item detail>\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"item.picture\">\n      </ion-thumbnail>\n      <ion-label> {{item.categoryName}}</ion-label>\n      <ion-label> {{item.description}}</ion-label>\n    </ion-item>\n    <ion-item-options side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"Edit(item,slidingItem)\">\n     <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n     <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n      <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/item-category/item-category-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/item-category/item-category-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ItemCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCategoryPageRoutingModule", function() { return ItemCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _item_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-category.page */ "./src/app/item-category/item-category.page.ts");




const routes = [
    {
        path: '',
        component: _item_category_page__WEBPACK_IMPORTED_MODULE_3__["ItemCategoryPage"]
    }
];
let ItemCategoryPageRoutingModule = class ItemCategoryPageRoutingModule {
};
ItemCategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/item-category/item-category.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/item-category/item-category.module.ts ***!
  \*******************************************************/
/*! exports provided: ItemCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCategoryPageModule", function() { return ItemCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _item_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-category-routing.module */ "./src/app/item-category/item-category-routing.module.ts");
/* harmony import */ var _item_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-category.page */ "./src/app/item-category/item-category.page.ts");







let ItemCategoryPageModule = class ItemCategoryPageModule {
};
ItemCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _item_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemCategoryPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_item_category_page__WEBPACK_IMPORTED_MODULE_6__["ItemCategoryPage"]]
    })
], ItemCategoryPageModule);



/***/ }),

/***/ "./src/app/item-category/item-category.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/item-category/item-category.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.alert-custom {\n  color: #99004d;\n  background-color: #f169b4;\n  border-color: #800040;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1jYXRlZ29yeS9pdGVtLWNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNKOztBQUNHO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tY2F0ZWdvcnkvaXRlbS1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGlja2VyIHtcclxuICAgIHdpZHRoOiAzMHJlbTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDMwdmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgIC5hbGVydC1jdXN0b20ge1xyXG4gICAgY29sb3I6ICM5OTAwNGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE2OWI0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODAwMDQwO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/item-category/item-category.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/item-category/item-category.page.ts ***!
  \*****************************************************/
/*! exports provided: ItemCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCategoryPage", function() { return ItemCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _Service_item_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/item-category.service */ "./src/app/Service/item-category.service.ts");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");







let ItemCategoryPage = class ItemCategoryPage {
    constructor(fb, platform, alertController, itemCategoryService) {
        this.fb = fb;
        this.platform = platform;
        this.alertController = alertController;
        this.itemCategoryService = itemCategoryService;
        this.regform = this.fb.group({});
        this.usePicker = false;
        this.editMode = false;
    }
    ngOnInit() {
        this.regform = this.fb.group({
            categoryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            picture: [''],
            description: [''],
            parentcategory: ['']
        });
        this.getItemCategory();
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
    }
    //listofItemCategory()
    //{
    //  return this.itemCategoryService.getAllItemCategories();
    //}
    onPickImage() {
        if (this.usePicker == true) {
            // if (!Capacitor.isPluginAvailable('Camera')) {
            this.filePickerRef.nativeElement.click();
            return;
        }
        _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Camera.getPhoto({
            quality: 50,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Prompt,
            correctOrientation: true,
            height: 320,
            width: 300,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].Base64
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
    Save() {
        this.regform.get('picture').setValue(this.base64textString);
        if (this.regform.valid) {
            if (!this.itemCatagoryId) {
                this.itemCategoryService.create(this.regform.value).then(() => (error) => {
                    if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"]) {
                        this.regform.setErrors(error.originalError);
                    }
                    else
                        throw error;
                });
                ;
            }
            else {
                this.itemCategoryService.updateItemCategory(this.regform.value, this.itemCatagoryId)
                    .then(() => (error) => {
                    if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"]) {
                        this.regform.setErrors(error.originalError);
                    }
                    else
                        throw error;
                });
            }
            this.presentAlert();
            this.base64textString = '';
            this.regform.reset();
            this.itemCatagoryId = null;
            this.getItemCategory();
        }
        else {
            this.ErrorAlert();
        }
    }
    getItemCategory() {
        try {
            this.itemCategoryService.getAllItemCategories().subscribe(result => {
                if (result.length > 0) {
                    this.ListOfItemCategory = result;
                    this.filteredCategory = result;
                    this.selectedCatagory = this.ListOfItemCategory[1].id;
                }
                else {
                    this.ErrorAlert();
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Catagory',
                // subHeader: 'Subtitle',
                message: 'Catagory Saved successfully.',
                buttons: ['OK']
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
    Edit(item, slidingItem) {
        this.editMode = true;
        this.itemCatagoryId = item.id;
        this.regform.get('categoryName').setValue(item.categoryName);
        this.regform.get('description').setValue(item.description);
        this.regform.get('parentcategory').setValue(item.parentcategory);
        this.regform.get('picture').setValue(item.picture);
        this.base64textString = item.picture;
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
                            this.itemCategoryService.removeCategory(item.id);
                            this.regform.reset();
                            this.itemCatagoryId = null;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    filter(query) {
        this.filteredCategory = (query.target.value) ? this.ListOfItemCategory.filter(p => p.categoryName.toLowerCase().includes(query.target.value.toLowerCase())) :
            this.ListOfItemCategory;
    }
};
ItemCategoryPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Service_item_category_service__WEBPACK_IMPORTED_MODULE_5__["ItemCategoryService"] }
];
ItemCategoryPage.propDecorators = {
    filePickerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['filePicker', { static: false },] }]
};
ItemCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/item-category/item-category.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-category.page.scss */ "./src/app/item-category/item-category.page.scss")).default]
    })
], ItemCategoryPage);



/***/ })

}]);
//# sourceMappingURL=item-category-item-category-module-es2015.js.map