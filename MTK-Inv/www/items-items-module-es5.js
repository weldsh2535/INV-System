(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-items-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/items/items.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/items/items.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppItemsItemsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Items</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"regform\">\n    <ion-list>\n     \n    <ion-item>\n      <ion-label>Name </ion-label>\n      <ion-input   formControlName=\"name\"></ion-input>\n      <span *ngIf=\"!regform.get('name').valid && regform.get('name').touched\" > Enter  Name </span> \n    </ion-item>\n\n    <ion-item>\n      <ion-label>Amharic Name </ion-label>\n      <ion-input   formControlName=\"AmaricName\"></ion-input>\n      <span *ngIf=\"!regform.get('AmaricName').valid && regform.get('AmaricName').touched\" > Enter Amharic Name </span> \n    </ion-item>\n    <ion-item>\n      <ion-label>Category</ion-label>\n    <ion-select interface=\"popover\"  (ionChange)=\"onOptionsSelected($event)\">\n          <ion-select-option *ngFor=\"let code of ListOfCategory\" value=\"{{code?.id}}\">\n               {{code?.name}}\n         </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Lookup</ion-label>\n      <ion-select  name=\"type\" interface=\"popover\" formControlName=\"CatagoryId\" >\n          <ion-select-option *ngFor=\"let code of listoflookup\" value=\"{{code?.id}}\">\n               {{code?.name}}\n         </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Store</ion-label>\n      <ion-input   formControlName=\"storeid\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Description </ion-label>\n      <ion-input   formControlName=\"discrption\"></ion-input>\n      <span *ngIf=\"!regform.get('discrption').valid && regform.get('discrption').touched\" > Enter Descirption </span> \n    </ion-item>\n    <ion-item>\n      <ion-label>price </ion-label>\n      <ion-input   formControlName=\"price\" type=\"number\"></ion-input>\n      <span *ngIf=\"!regform.get('price').valid && regform.get('price').touched\" > Enter Price </span> \n    </ion-item>\n    <ion-item>\n      <ion-label>Quantity </ion-label>\n      <ion-input   formControlName=\"Quantity\"></ion-input>\n      <span *ngIf=\"!regform.get('Quantity').valid && regform.get('Quantity').touched\" > Enter Quantity </span> \n    </ion-item>\n\n  \n    <ion-item>\n      <ion-label>Brand </ion-label>\n      <ion-input   formControlName=\"brand\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Remark </ion-label>\n      <ion-input   formControlName=\"remark\"></ion-input>\n    </ion-item>\n    <div class=\"picker\">\n      <ion-img\n        role=\"button\"\n        class=\"image\"\n        (click)=\"onPickImage()\"\n        [src]=\"base64textString\"\n        *ngIf=\"base64textString\"\n      ></ion-img>\n      <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\">\n        <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n        <ion-label>Take Picture</ion-label>\n      </ion-button>\n    </div>\n    <input  hidden\n      type=\"file\"\n      accept=\"image/jpeg\"\n      *ngIf=\"usePicker\"\n      #filePicker\n      (change)=\"onFileChosen($event)\"\n    />\n    <ion-button expand=\"full\" (click)=\"Save()\" > Save </ion-button>\n  </ion-list>\n  </form>\n  <ion-searchbar\n  (keyup)=\"filter($event)\"  showCancelButton=\"never\"></ion-searchbar>\n\n   <ion-item-sliding  *ngFor=\"let item of listofItems \"   #slidingItem >\n    <ion-item detail>\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"item.picture\">\n      </ion-thumbnail>\n      <ion-label> {{item.name}}</ion-label>\n      \n    </ion-item>\n    <ion-item-options side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"Edit(item,slidingItem)\">\n     <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n     <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n      <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Service/items.service.ts":
    /*!******************************************!*\
      !*** ./src/app/Service/items.service.ts ***!
      \******************************************/

    /*! exports provided: ItemsService */

    /***/
    function srcAppServiceItemsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsService", function () {
        return ItemsService;
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


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "./node_modules/rxjs/internal/operators/map.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);

      var ItemsService = /*#__PURE__*/function () {
        function ItemsService(db) {
          _classCallCheck(this, ItemsService);

          this.ItemCollection = db.collection('Items');
        }

        _createClass(ItemsService, [{
          key: "create",
          value: function create(Category) {
            return this.ItemCollection.add(Category); //return this.db.list('/Category').push(Category);
          }
        }, {
          key: "getallItem",
          value: function getallItem() {
            this.Items = this.ItemCollection.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.Items;
          }
        }, {
          key: "getItem",
          value: function getItem(id) {
            return this.ItemCollection.doc(id).valueChanges();
          }
        }, {
          key: "updateItem",
          value: function updateItem(Item, id) {
            return this.ItemCollection.doc(id).update(Item);
          }
        }, {
          key: "addItem",
          value: function addItem(Item) {
            return this.ItemCollection.add(Item);
          }
        }, {
          key: "removeCategory",
          value: function removeCategory(id) {
            return this.ItemCollection.doc(id)["delete"]();
          }
        }]);

        return ItemsService;
      }();

      ItemsService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      ItemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ItemsService);
      /***/
    },

    /***/
    "./src/app/items/items-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/items/items-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: ItemsPageRoutingModule */

    /***/
    function srcAppItemsItemsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsPageRoutingModule", function () {
        return ItemsPageRoutingModule;
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


      var _items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./items.page */
      "./src/app/items/items.page.ts");

      var routes = [{
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_3__["ItemsPage"]
      }];

      var ItemsPageRoutingModule = function ItemsPageRoutingModule() {
        _classCallCheck(this, ItemsPageRoutingModule);
      };

      ItemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ItemsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/items/items.module.ts":
    /*!***************************************!*\
      !*** ./src/app/items/items.module.ts ***!
      \***************************************/

    /*! exports provided: ItemsPageModule */

    /***/
    function srcAppItemsItemsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function () {
        return ItemsPageModule;
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


      var _items_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./items-routing.module */
      "./src/app/items/items-routing.module.ts");
      /* harmony import */


      var _items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./items.page */
      "./src/app/items/items.page.ts");

      var ItemsPageModule = function ItemsPageModule() {
        _classCallCheck(this, ItemsPageModule);
      };

      ItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _items_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemsPageRoutingModule"]],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]]
      })], ItemsPageModule);
      /***/
    },

    /***/
    "./src/app/items/items.page.scss":
    /*!***************************************!*\
      !*** ./src/app/items/items.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppItemsItemsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvaXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9pdGVtcy9pdGVtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGlja2VyIHtcclxuICAgIHdpZHRoOiAzMHJlbTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDMwdmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/items/items.page.ts":
    /*!*************************************!*\
      !*** ./src/app/items/items.page.ts ***!
      \*************************************/

    /*! exports provided: ItemsPage */

    /***/
    function srcAppItemsItemsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsPage", function () {
        return ItemsPage;
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


      var _Service_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/lookup.service */
      "./src/app/Service/lookup.service.ts");
      /* harmony import */


      var _Service_items_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/items.service */
      "./src/app/Service/items.service.ts");

      var ItemsPage = /*#__PURE__*/function () {
        function ItemsPage(fb, platform, CategoryService, alertController, lookupService, itemsService) {
          _classCallCheck(this, ItemsPage);

          this.fb = fb;
          this.platform = platform;
          this.CategoryService = CategoryService;
          this.alertController = alertController;
          this.lookupService = lookupService;
          this.itemsService = itemsService;
          this.usePicker = false;
          this.regform = this.fb.group({});
        }

        _createClass(ItemsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              AmaricName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              discrption: [''],
              CatagoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              Quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              storeid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              brand: [''],
              picture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              remark: ['']
            });
            this.getCategory();
            this.getItemList();

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.usePicker = true;
            }
          }
        }, {
          key: "getCategory",
          value: function getCategory() {
            var _this = this;

            try {
              this.CategoryService.getallCategorys().subscribe(function (result) {
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
          key: "getItemList",
          value: function getItemList() {
            var _this2 = this;

            this.itemsService.getallItem().subscribe(function (result) {
              _this2.listofItems = result;
            });
          }
        }, {
          key: "onOptionsSelected",
          value: function onOptionsSelected($event) {
            var _this3 = this;

            this.lookupService.getlookupBytype($event.target.value).subscribe(function (result) {
              _this3.listoflookup = result;
            });
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
            var _this4 = this;

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
              _this4.base64textString = 'data:image/png;base64,' + image.base64String;
            })["catch"](function (error) {
              console.log(error);

              if (_this4.usePicker) {
                _this4.filePickerRef.nativeElement.click();
              }

              return false;
            });
          }
        }, {
          key: "onFileChosen",
          value: function onFileChosen(event) {
            var _this5 = this;

            var pickedFile = event.target.files[0];

            if (!pickedFile) {
              return;
            }

            var fr = new FileReader();

            fr.onload = function () {
              var dataUrl = fr.result.toString();
              _this5.base64textString = dataUrl;
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
            this.regform.get('picture').setValue(this.base64textString);

            if (this.regform.valid) {
              if (!this.itemId) {
                this.itemsService.create(this.regform.value);
              } else {
                this.itemsService.updateItem(this.regform.value, this.itemId);
              }

              this.presentAlert();
              this.base64textString = '';
              this.regform.reset();
              this.itemId = null;
              this.getCategory();
            } else {
              this.ErrorAlert();
            }
          }
        }, {
          key: "delete",
          value: function _delete(item, slidingItem) {
            this.presentAlertConfirm(item);
            slidingItem.close();
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Confirm!',
                        message: '<strong>are you sure you want delete?</strong>',
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
                            _this6.CategoryService.removeCategory(item.id);

                            _this6.regform.reset();

                            _this6.itemId = null;
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
                        message: 'Pleas Enter All field.',
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
            this.itemId = item.id;
            this.regform.get('name').setValue(item.name);
            this.regform.get('AmaricName').setValue(item.AmaricName);
            this.regform.get('discrption').setValue(item.discrption);
            this.regform.get('CatagoryId').setValue(item.CatagoryId);
            this.regform.get('price').setValue(item.price);
            this.regform.get('Quantity').setValue(item.Quantity);
            this.regform.get('storeid').setValue(item.storeid);
            this.regform.get('brand').setValue(item.brand);
            this.regform.get('remark').setValue(item.remark);
            this.base64textString = item.picture;
            slidingItem.close();
          }
        }]);

        return ItemsPage;
      }();

      ItemsPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _Service_catagory_service__WEBPACK_IMPORTED_MODULE_4__["CatagoryService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _Service_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
        }, {
          type: _Service_items_service__WEBPACK_IMPORTED_MODULE_7__["ItemsService"]
        }];
      };

      ItemsPage.propDecorators = {
        filePickerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['filePicker', {
            "static": false
          }]
        }]
      };
      ItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./items.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/items/items.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./items.page.scss */
        "./src/app/items/items.page.scss"))["default"]]
      })], ItemsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=items-items-module-es5.js.map