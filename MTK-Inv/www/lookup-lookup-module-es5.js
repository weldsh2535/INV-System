(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lookup-lookup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/lookup/lookup.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lookup/lookup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLookupLookupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Lookup</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n \n    <ion-list>\n    <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label position=\"floating\">name</ion-label>\n      <ion-input formControlName=\"name\"></ion-input>\n      <span *ngIf=\"!regform.get('name').valid && regform.get('name').touched\" > Enter Name </span> \n     </ion-item>\n    \n    <ion-item>\n      <ion-label position=\"floating\">value</ion-label>\n      <ion-input formControlName=\"value\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Category</ion-label>\n      <ion-select  name=\"type\" interface=\"popover\" formControlName=\"type\">\n          <ion-select-option *ngFor=\"let code of listofcatagory\" value=\"{{code?.id}}\">\n               {{code?.name}}\n         </ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Remark</ion-label>\n      <ion-input formControlName=\"remark\"></ion-input>\n    </ion-item>\n    <ion-button expand=\"full\" (click)=\"Save()\"> Save </ion-button>\n  </form>\n  </ion-list>\n\n<!-- <ion-searchbar\n  (keyup)=\"filter($event)\"  showCancelButton=\"never\"></ion-searchbar> -->\n\n   <ion-item-sliding  *ngFor=\"let item of listoflookup \"   #slidingItem >\n    <ion-item detail>\n      <ion-label> {{item.name}}</ion-label>\n      <ion-label  style=\"text-align: end;\"> {{item.value}}</ion-label>\n    </ion-item>\n    <ion-item-options side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"Edit(item,slidingItem)\">\n     <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n     <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n      <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding> \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/lookup/lookup-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/lookup/lookup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: LookupPageRoutingModule */

    /***/
    function srcAppLookupLookupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LookupPageRoutingModule", function () {
        return LookupPageRoutingModule;
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


      var _lookup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lookup.page */
      "./src/app/lookup/lookup.page.ts");

      var routes = [{
        path: '',
        component: _lookup_page__WEBPACK_IMPORTED_MODULE_3__["LookupPage"]
      }];

      var LookupPageRoutingModule = function LookupPageRoutingModule() {
        _classCallCheck(this, LookupPageRoutingModule);
      };

      LookupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LookupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/lookup/lookup.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/lookup/lookup.module.ts ***!
      \*****************************************/

    /*! exports provided: LookupPageModule */

    /***/
    function srcAppLookupLookupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LookupPageModule", function () {
        return LookupPageModule;
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


      var _lookup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lookup-routing.module */
      "./src/app/lookup/lookup-routing.module.ts");
      /* harmony import */


      var _lookup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lookup.page */
      "./src/app/lookup/lookup.page.ts");

      var LookupPageModule = function LookupPageModule() {
        _classCallCheck(this, LookupPageModule);
      };

      LookupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _lookup_routing_module__WEBPACK_IMPORTED_MODULE_5__["LookupPageRoutingModule"]],
        declarations: [_lookup_page__WEBPACK_IMPORTED_MODULE_6__["LookupPage"]]
      })], LookupPageModule);
      /***/
    },

    /***/
    "./src/app/lookup/lookup.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/lookup/lookup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppLookupLookupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvb2t1cC9sb29rdXAucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/lookup/lookup.page.ts":
    /*!***************************************!*\
      !*** ./src/app/lookup/lookup.page.ts ***!
      \***************************************/

    /*! exports provided: LookupPage */

    /***/
    function srcAppLookupLookupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LookupPage", function () {
        return LookupPage;
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


      var _Service_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Service/lookup.service */
      "./src/app/Service/lookup.service.ts");

      var LookupPage = /*#__PURE__*/function () {
        function LookupPage(fb, catagoryService, lookupService, alertController) {
          _classCallCheck(this, LookupPage);

          this.fb = fb;
          this.catagoryService = catagoryService;
          this.lookupService = lookupService;
          this.alertController = alertController;
          this.regform = this.fb.group({});
        }

        _createClass(LookupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              value: [''],
              remark: ['']
            });
            this.allcatagory();
            this.readLookup();
          }
        }, {
          key: "readLookup",
          value: function readLookup() {
            var _this = this;

            this.lookupService.getalllookup().subscribe(function (res) {
              _this.listoflookup = res;
            });
          }
        }, {
          key: "allcatagory",
          value: function allcatagory() {
            var _this2 = this;

            this.catagoryService.getallCategorys().subscribe(function (result) {
              _this2.listofcatagory = result;
            });
          }
        }, {
          key: "Save",
          value: function Save() {
            if (this.regform.valid) {
              if (!this.lookupId) {
                this.lookupService.create(this.regform.value);
              } else {
                this.lookupService.updatelookup(this.regform.value, this.lookupId);
              }

              this.regform.reset();
              this.lookupId = "";
              this.presentAlert("Save Sucessfully");
            } else {
              this.presentAlert("plase enter all filds");
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'lookup',
                        // subHeader: 'Subtitle',
                        message: message,
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
          key: "Edit",
          value: function Edit(item, slidingItem) {
            this.lookupId = item.id;
            this.regform.get("name").setValue(item.name);
            this.regform.get("type").setValue(item.type);
            this.regform.get("value").setValue(item.value);
            this.regform.get("remark").setValue(item.remark);
          }
        }, {
          key: "delete",
          value: function _delete(item, slidingItem) {}
        }]);

        return LookupPage;
      }();

      LookupPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _Service_catagory_service__WEBPACK_IMPORTED_MODULE_4__["CatagoryService"]
        }, {
          type: _Service_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      LookupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lookup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./lookup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/lookup/lookup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./lookup.page.scss */
        "./src/app/lookup/lookup.page.scss"))["default"]]
      })], LookupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=lookup-lookup-module-es5.js.map