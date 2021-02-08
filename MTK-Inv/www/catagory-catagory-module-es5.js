(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catagory-catagory-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/catagory/catagory.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catagory/catagory.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCatagoryCatagoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Lookup Catagory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-list>\n    <ion-item>\n      <ion-label style=\"color: rgb(63, 5, 170);\">Name</ion-label>\n      <ion-input   formControlName=\"name\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('name').valid && regform.get('name').touched\" > This field is required! </small> \n      </ion-item>\n    <div class=\"picker\">\n      <ion-img\n        role=\"button\"\n        class=\"image\"\n        (click)=\"onPickImage()\"\n        [src]=\"base64textString\"\n        *ngIf=\"base64textString\"\n      ></ion-img>\n      <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\">\n        <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n        <ion-label>Take Picture</ion-label>\n      </ion-button>\n    </div>\n    <input  hidden\n      type=\"file\"\n      accept=\"image/jpeg\"\n      *ngIf=\"usePicker\"\n      #filePicker\n      (change)=\"onFileChosen($event)\"/>\n    <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"Save()\"> \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Catagory':'Add Catagory'}}</ion-button>\n    </div>\n  </ion-list>\n  </form>\n  <ion-searchbar\n  (keyup)=\"filter($event)\"  showCancelButton=\"never\" ></ion-searchbar>\n<ion-list >\n   <ion-item-sliding  *ngFor=\"let item of filteredCategory \" #slidingItem >\n    <ion-item detail>\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"item.picture\">\n      </ion-thumbnail>\n      <ion-label> {{item.name}}</ion-label>  \n    </ion-item>\n    <ion-item-options side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"Edit(item,slidingItem)\">\n     <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n     <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n      <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/catagory/catagory-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/catagory/catagory-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CatagoryPageRoutingModule */

    /***/
    function srcAppCatagoryCatagoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatagoryPageRoutingModule", function () {
        return CatagoryPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _catagory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./catagory.page */
      "./src/app/catagory/catagory.page.ts");

      var routes = [{
        path: '',
        component: _catagory_page__WEBPACK_IMPORTED_MODULE_3__["CatagoryPage"]
      }];

      var CatagoryPageRoutingModule = function CatagoryPageRoutingModule() {
        _classCallCheck(this, CatagoryPageRoutingModule);
      };

      CatagoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CatagoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/catagory/catagory.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/catagory/catagory.module.ts ***!
      \*********************************************/

    /*! exports provided: CatagoryPageModule */

    /***/
    function srcAppCatagoryCatagoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatagoryPageModule", function () {
        return CatagoryPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _catagory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./catagory-routing.module */
      "./src/app/catagory/catagory-routing.module.ts");
      /* harmony import */


      var _catagory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./catagory.page */
      "./src/app/catagory/catagory.page.ts");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

      var CatagoryPageModule = function CatagoryPageModule() {
        _classCallCheck(this, CatagoryPageModule);
      };

      CatagoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _catagory_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatagoryPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
        declarations: [_catagory_page__WEBPACK_IMPORTED_MODULE_6__["CatagoryPage"]]
      })], CatagoryPageModule);
      /***/
    },

    /***/
    "./src/app/catagory/catagory.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/catagory/catagory.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCatagoryCatagoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.alert-custom {\n  color: #99004d;\n  background-color: #f169b4;\n  border-color: #800040;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWdvcnkvY2F0YWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQ0o7O0FBQ0c7RUFDQyxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY2F0YWdvcnkvY2F0YWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY2tlciB7XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMjByZW07XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gICAuYWxlcnQtY3VzdG9tIHtcclxuICAgIGNvbG9yOiAjOTkwMDRkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNjliNDtcclxuICAgIGJvcmRlci1jb2xvcjogIzgwMDA0MDtcclxuICB9XHJcbiBcclxuXHJcbiAgICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/catagory/catagory.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/catagory/catagory.page.ts ***!
      \*******************************************/

    /*! exports provided: CatagoryPage */

    /***/
    function srcAppCatagoryCatagoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatagoryPage", function () {
        return CatagoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Service_catagory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Service/catagory.service */
      "./src/app/Service/catagory.service.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/bad-input */
      "./src/app/common/bad-input.ts");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/not-found-error */
      "./src/app/common/not-found-error.ts");

      var CatagoryPage = /*#__PURE__*/function () {
        function CatagoryPage(fb, platform, CategoryService, alertController) {
          _classCallCheck(this, CatagoryPage);

          this.fb = fb;
          this.platform = platform;
          this.CategoryService = CategoryService;
          this.alertController = alertController;
          this.usePicker = false;
          this.regform = this.fb.group({});
          this.editMode = false;
        }

        _createClass(CatagoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              picture: [''],
              remark: ['']
            });
            this.getCategory();

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.usePicker = true;
            }
          }
        }, {
          key: "getCategory",
          value: function getCategory() {
            var _this = this;

            try {
              this.CategoryService.getAllLookUpCategory().subscribe(function (result) {
                if (result.length > 0) {
                  _this.ListOfCategory = result;
                  _this.filteredCategory = result;
                } else {
                  _this.AlertInternet();
                }
              });
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "AlertInternet",
          value: function AlertInternet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Internet',
                        // subHeader: 'Subtitle',
                        message: 'Please turn on wifi or data',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onPickImage",
          value: function onPickImage() {
            var _this2 = this;

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
            }).then(function (image) {
              _this2.base64textString = 'data:image/png;base64,' + image.base64String;
            })["catch"](function (error) {
              console.log(error);

              if (_this2.usePicker) {
                _this2.filePickerRef.nativeElement.click();
              }

              return false;
            });
          }
        }, {
          key: "onFileChosen",
          value: function onFileChosen(event) {
            var _this3 = this;

            var pickedFile = event.target.files[0];

            if (!pickedFile) {
              return;
            }

            var fr = new FileReader();

            fr.onload = function () {
              var dataUrl = fr.result.toString();
              _this3.base64textString = dataUrl;
            };

            fr.readAsDataURL(pickedFile);
          }
        }, {
          key: "filter",
          value: function filter(query) {
            this.filteredCategory = query.target.value ? this.ListOfCategory.filter(function (p) {
              return p.name.toLowerCase().includes(query.target.value.toLowerCase());
            }) : this.ListOfCategory;
          }
        }, {
          key: "Save",
          value: function Save() {
            var _this4 = this;

            this.regform.get('picture').setValue(this.base64textString);

            if (this.regform.valid) {
              if (!this.CatagoryId) {
                this.CategoryService.create(this.regform.value).then(function () {
                  return function (error) {
                    if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"]) {
                      _this4.regform.setErrors(error.originalError);
                    } else throw error;
                  };
                });
              } else {
                this.CategoryService.updateCategory(this.regform.value, this.CatagoryId).then(function () {
                  return function (error) {
                    if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"]) {
                      _this4.regform.setErrors(error.originalError);
                    } else throw error;
                  };
                });
              }

              this.presentAlert();
              this.base64textString = '';
              this.regform.reset();
              this.CatagoryId = null;
              this.getCategory();
            } else {
              this.ErrorAlert();
            }
          }
        }, {
          key: "delete",
          value: function _delete(item, slidingItem) {
            this.presentAlertConfirm(item).then(function () {
              return function (error) {
                if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]) alert('This post has already been deleted.');else throw error;
              };
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Confirm!',
                        message: '<strong>Are you sure you want delete?</strong>',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'OK',
                          handler: function handler() {
                            _this5.CategoryService.removeCategory(item.id);

                            _this5.regform.reset();

                            _this5.CatagoryId = null;
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ErrorAlert",
          value: function ErrorAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        // subHeader: 'Subtitle',
                        message: 'Please Enter All field.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Catagory',
                        // subHeader: 'Subtitle',
                        message: 'Catagory Saved successfully.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "Edit",
          value: function Edit(item, slidingItem) {
            this.editMode = true;
            this.CatagoryId = item.id;
            this.regform.get('name').setValue(item.name);
            this.regform.get('remark').setValue(item.remark);
            this.base64textString = item.picture;
            slidingItem.close();
          }
        }]);

        return CatagoryPage;
      }();

      CatagoryPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _Service_catagory_service__WEBPACK_IMPORTED_MODULE_4__["CatagoryService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      CatagoryPage.propDecorators = {
        filePickerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['filePicker', {
            "static": false
          }]
        }]
      };
      CatagoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catagory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./catagory.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/catagory/catagory.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./catagory.page.scss */
        "./src/app/catagory/catagory.page.scss"))["default"]]
      })], CatagoryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=catagory-catagory-module-es5.js.map