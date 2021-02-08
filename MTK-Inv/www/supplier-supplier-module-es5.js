(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplier-supplier-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/supplier/supplier.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplier/supplier.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSupplierSupplierPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Supplier Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-list>\n  <form [formGroup]=\"regform\">\n  <ion-item>\n    <ion-label position=\"floating\">Balance</ion-label>\n    <ion-input formControlName=\"balance\"></ion-input>\n    </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">Location</ion-label>\n    <ion-input formControlName=\"location\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Country</ion-label>\n    <ion-input formControlName=\"country\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Agreement</ion-label>\n    <ion-input formControlName=\"agreement\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Commission</ion-label>\n    <ion-input formControlName=\"commission\"></ion-input>\n  </ion-item> <div style=\"text-align: center; margin: auto;\">\n    <ion-button id=\"add items\" (click)=\"SaveSupplier()\"> \n      <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n      Add Supplier </ion-button>\n  </div>\n</form>\n</ion-list>\n<ion-content>\n  <ion-searchbar\n  (keyup)=\"filter($event)\"  showCancelButton=\"never\"></ion-searchbar>\n\n   <ion-item-sliding  *ngFor=\"let item of ListOfSupplier \" #slidingItem >\n        <ion-item detail>\n          <ion-label \n          style=\"background-color: rgb(155, 166, 173); border-radius: 7px; text-align: center;color: rgb(10, 100, 236);\">\n            <h2>Commision is: {{item.commission}}</h2>\n            <h3>Location: {{item.location}}</h3>\n            <h3>Agreement : {{item.agreement}}</h3>\n          </ion-label>\n          \n        </ion-item>\n      <ion-item-options side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"Edit(item,slidingItem)\">\n     <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n     <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n      <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Service/supplier.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/Service/supplier.service.ts ***!
      \*********************************************/

    /*! exports provided: SupplierService */

    /***/
    function srcAppServiceSupplierServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierService", function () {
        return SupplierService;
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

      var SupplierService = /*#__PURE__*/function () {
        function SupplierService(db) {
          _classCallCheck(this, SupplierService);

          this.supplierCollectionList = db.collection('Supplier');
        }

        _createClass(SupplierService, [{
          key: "create",
          value: function create(Supplier) {
            return this.supplierCollectionList.add(Supplier); //return this.db.list('/Category').push(Category);
          }
        }, {
          key: "getAllSupplier",
          value: function getAllSupplier() {
            this.suppliersList = this.supplierCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.suppliersList;
          }
        }, {
          key: "updateSupplier",
          value: function updateSupplier(Supplier, id) {
            return this.supplierCollectionList.doc(id).update(Supplier);
          }
        }, {
          key: "updateCustomer",
          value: function updateCustomer(Customer, id) {
            return this.supplierCollectionList.doc(id).update(Customer);
          }
          /* getSupplier(id) {
             return this.SupplierCollection.doc<any>(id).valueChanges();
           }
           addSupplier(Category: any) {
             return this.SupplierCollection.add(Category);
           }*/

        }, {
          key: "removeSupplier",
          value: function removeSupplier(id) {
            return this.supplierCollectionList.doc(id)["delete"]();
          }
        }]);

        return SupplierService;
      }();

      SupplierService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      SupplierService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SupplierService);
      /***/
    },

    /***/
    "./src/app/supplier/supplier-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/supplier/supplier-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SupplierPageRoutingModule */

    /***/
    function srcAppSupplierSupplierRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierPageRoutingModule", function () {
        return SupplierPageRoutingModule;
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


      var _supplier_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./supplier.page */
      "./src/app/supplier/supplier.page.ts");

      var routes = [{
        path: '',
        component: _supplier_page__WEBPACK_IMPORTED_MODULE_3__["SupplierPage"]
      }];

      var SupplierPageRoutingModule = function SupplierPageRoutingModule() {
        _classCallCheck(this, SupplierPageRoutingModule);
      };

      SupplierPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SupplierPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/supplier/supplier.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/supplier/supplier.module.ts ***!
      \*********************************************/

    /*! exports provided: SupplierPageModule */

    /***/
    function srcAppSupplierSupplierModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierPageModule", function () {
        return SupplierPageModule;
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


      var _supplier_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./supplier-routing.module */
      "./src/app/supplier/supplier-routing.module.ts");
      /* harmony import */


      var _supplier_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./supplier.page */
      "./src/app/supplier/supplier.page.ts");

      var SupplierPageModule = function SupplierPageModule() {
        _classCallCheck(this, SupplierPageModule);
      };

      SupplierPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _supplier_routing_module__WEBPACK_IMPORTED_MODULE_5__["SupplierPageRoutingModule"]],
        declarations: [_supplier_page__WEBPACK_IMPORTED_MODULE_6__["SupplierPage"]]
      })], SupplierPageModule);
      /***/
    },

    /***/
    "./src/app/supplier/supplier.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/supplier/supplier.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppSupplierSupplierPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/supplier/supplier.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/supplier/supplier.page.ts ***!
      \*******************************************/

    /*! exports provided: SupplierPage */

    /***/
    function srcAppSupplierSupplierPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierPage", function () {
        return SupplierPage;
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


      var _Service_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Service/supplier.service */
      "./src/app/Service/supplier.service.ts");

      var SupplierPage = /*#__PURE__*/function () {
        function SupplierPage(fb, supplierService, platform, alertController) {
          _classCallCheck(this, SupplierPage);

          this.fb = fb;
          this.supplierService = supplierService;
          this.platform = platform;
          this.alertController = alertController;
          this.regform = this.fb.group({});
        }

        _createClass(SupplierPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              balance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              agreement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              commission: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.getSupplier();

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.usePicker = true;
            }
          }
        }, {
          key: "getSupplier",
          value: function getSupplier() {
            var _this = this;

            try {
              this.supplierService.getAllSupplier().subscribe(function (result) {
                if (result.length > 0) {
                  _this.ListOfSupplier = result;
                  _this.filteredSupplier = result;
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
          key: "SaveSupplier",
          value: function SaveSupplier() {
            if (this.regform.valid) {
              if (!this.supplierId) {
                this.supplierService.create(this.regform.value);
              } else {
                this.supplierService.updateSupplier(this.regform.value, this.supplierId);
              }

              this.regform.reset();
              this.supplierId = "";
              this.presentAlert("Save Sucessfully");
            } else {
              this.presentAlert("plase enter all fileds");
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Suppliers',
                        message: message,
                        buttons: ['OK']
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
          key: "filter",
          value: function filter(query) {
            this.filteredSupplier = query.target.value ? this.ListOfSupplier.filter(function (p) {
              return p.balance.toLowerCase().includes(query.target.value.toLowerCase());
            }) : this.ListOfSupplier;
          }
        }, {
          key: "Edit",
          value: function Edit(item, slidingItem) {
            this.supplierId = item.id;
            this.regform.get('balance').setValue(item.balance);
            this.regform.get('agreement').setValue(item.agreement);
            this.regform.get('commission').setValue(item.commission);
            this.regform.get('country').setValue(item.country);
            this.regform.get('location').setValue(item.location);
            slidingItem.close();
          }
        }, {
          key: "delete",
          value: function _delete(item, slidingItem) {
            this.presentAlertConfirm(item);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
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
                            _this2.supplierService.removeSupplier(item.id);

                            _this2.regform.reset();

                            _this2.supplierId = null;
                          }
                        }]
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
        }]);

        return SupplierPage;
      }();

      SupplierPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _Service_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      SupplierPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-supplier',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./supplier.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/supplier/supplier.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./supplier.page.scss */
        "./src/app/supplier/supplier.page.scss"))["default"]]
      })], SupplierPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=supplier-supplier-module-es5.js.map