(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catagory-catagory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/catagory/catagory.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catagory/catagory.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Catagory</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"regform\">\n    <ion-list>\n     \n\n    <ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input   formControlName=\"name\"></ion-input>\n      <span *ngIf=\"!regform.get('name').valid && regform.get('name').touched\" > Enter Name </span> \n    </ion-item>\n    <div class=\"picker\">\n      <ion-img\n        role=\"button\"\n        class=\"image\"\n        (click)=\"onPickImage()\"\n        [src]=\"base64textString\"\n        *ngIf=\"base64textString\"\n      ></ion-img>\n      <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\">\n        <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n        <ion-label>Take Picture</ion-label>\n      </ion-button>\n    </div>\n    <input  hidden\n      type=\"file\"\n      accept=\"image/jpeg\"\n      *ngIf=\"usePicker\"\n      #filePicker\n      (change)=\"onFileChosen($event)\"\n    />\n    <ion-button expand=\"full\" (click)=\"Save()\" > Save </ion-button>\n  </ion-list>\n  </form>\n  <ion-searchbar\n  (keyup)=\"filter($event)\"  showCancelButton=\"never\"></ion-searchbar>\n\n   <ion-item-sliding  *ngFor=\"let item of filteredCategory \"   #slidingItem >\n    <ion-item detail>\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"item.picture\">\n      </ion-thumbnail>\n      <ion-label> {{item.name}}</ion-label>\n      \n    </ion-item>\n    <ion-item-options side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"Edit(item,slidingItem)\">\n     <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n     <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n      <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/catagory/catagory-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/catagory/catagory-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CatagoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatagoryPageRoutingModule", function() { return CatagoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _catagory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catagory.page */ "./src/app/catagory/catagory.page.ts");




const routes = [
    {
        path: '',
        component: _catagory_page__WEBPACK_IMPORTED_MODULE_3__["CatagoryPage"]
    }
];
let CatagoryPageRoutingModule = class CatagoryPageRoutingModule {
};
CatagoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CatagoryPageRoutingModule);



/***/ }),

/***/ "./src/app/catagory/catagory.module.ts":
/*!*********************************************!*\
  !*** ./src/app/catagory/catagory.module.ts ***!
  \*********************************************/
/*! exports provided: CatagoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatagoryPageModule", function() { return CatagoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _catagory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catagory-routing.module */ "./src/app/catagory/catagory-routing.module.ts");
/* harmony import */ var _catagory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catagory.page */ "./src/app/catagory/catagory.page.ts");







let CatagoryPageModule = class CatagoryPageModule {
};
CatagoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _catagory_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatagoryPageRoutingModule"]
        ],
        declarations: [_catagory_page__WEBPACK_IMPORTED_MODULE_6__["CatagoryPage"]]
    })
], CatagoryPageModule);



/***/ }),

/***/ "./src/app/catagory/catagory.page.scss":
/*!*********************************************!*\
  !*** ./src/app/catagory/catagory.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWdvcnkvY2F0YWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXRhZ29yeS9jYXRhZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGlja2VyIHtcclxuICAgIHdpZHRoOiAzMHJlbTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDMwdmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgICAiXX0= */");

/***/ }),

/***/ "./src/app/catagory/catagory.page.ts":
/*!*******************************************!*\
  !*** ./src/app/catagory/catagory.page.ts ***!
  \*******************************************/
/*! exports provided: CatagoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatagoryPage", function() { return CatagoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_catagory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/catagory.service */ "./src/app/Service/catagory.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");






let CatagoryPage = class CatagoryPage {
    constructor(fb, platform, CategoryService, alertController) {
        this.fb = fb;
        this.platform = platform;
        this.CategoryService = CategoryService;
        this.alertController = alertController;
        this.usePicker = false;
        this.regform = this.fb.group({});
    }
    ngOnInit() {
        this.regform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            picture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remark: ['']
        });
        this.getCategory();
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
    }
    getCategory() {
        try {
            this.CategoryService.getallCategorys().subscribe(result => {
                if (result.length > 0) {
                    this.ListOfCategory = result;
                    this.filteredCategory = result;
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
        _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Camera.getPhoto({
            quality: 50,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraSource"].Prompt,
            correctOrientation: true,
            height: 320,
            width: 300,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].Base64
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
        this.filteredCategory = (query.target.value) ? this.ListOfCategory.filter(p => p.name.toLowerCase().includes(query.target.value.toLowerCase())) :
            this.ListOfCategory;
    }
    Save() {
        this.regform.get('picture').setValue(this.base64textString);
        if (this.regform.valid) {
            if (!this.CatagoryId) {
                this.CategoryService.create(this.regform.value);
            }
            else {
                this.CategoryService.updateCategory(this.regform.value, this.CatagoryId);
            }
            this.presentAlert();
            this.base64textString = '';
            this.regform.reset();
            this.CatagoryId = null;
            this.getCategory();
        }
        else {
            this.ErrorAlert();
        }
    }
    delete(item, slidingItem) {
        this.presentAlertConfirm(item);
    }
    presentAlertConfirm(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: '<strong>are you sure you want delete?</strong>',
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
                            this.CategoryService.removeCategory(item.id);
                            this.regform.reset();
                            this.CatagoryId = null;
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
                message: 'Pleas Enter All field.',
                buttons: ['OK']
            });
            yield alert.present();
        });
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
    Edit(item, slidingItem) {
        this.CatagoryId = item.id;
        this.regform.get('name').setValue(item.name);
        this.regform.get('remark').setValue(item.remark);
        this.base64textString = item.picture;
        slidingItem.close();
    }
};
CatagoryPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _Service_catagory_service__WEBPACK_IMPORTED_MODULE_4__["CatagoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
CatagoryPage.propDecorators = {
    filePickerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['filePicker', { static: false },] }]
};
CatagoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catagory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./catagory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/catagory/catagory.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./catagory.page.scss */ "./src/app/catagory/catagory.page.scss")).default]
    })
], CatagoryPage);



/***/ })

}]);
//# sourceMappingURL=catagory-catagory-module-es2015.js.map