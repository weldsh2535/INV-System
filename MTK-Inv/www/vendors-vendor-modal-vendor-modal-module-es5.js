(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors-vendor-modal-vendor-modal-module"], {
    /***/
    "./src/app/common/app-error.ts":
    /*!*************************************!*\
      !*** ./src/app/common/app-error.ts ***!
      \*************************************/

    /*! exports provided: AppError */

    /***/
    function srcAppCommonAppErrorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppError", function () {
        return AppError;
      });

      var AppError = function AppError(originalError) {
        _classCallCheck(this, AppError);

        this.originalError = originalError;
      };
      /***/

    },

    /***/
    "./src/app/common/bad-input.ts":
    /*!*************************************!*\
      !*** ./src/app/common/bad-input.ts ***!
      \*************************************/

    /*! exports provided: BadInput */

    /***/
    function srcAppCommonBadInputTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadInput", function () {
        return BadInput;
      });
      /* harmony import */


      var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-error */
      "./src/app/common/app-error.ts");

      var BadInput = /*#__PURE__*/function (_app_error__WEBPACK_I) {
        _inherits(BadInput, _app_error__WEBPACK_I);

        var _super = _createSuper(BadInput);

        function BadInput() {
          _classCallCheck(this, BadInput);

          return _super.apply(this, arguments);
        }

        return BadInput;
      }(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]);
      /***/

    },

    /***/
    "./src/app/common/not-found-error.ts":
    /*!*******************************************!*\
      !*** ./src/app/common/not-found-error.ts ***!
      \*******************************************/

    /*! exports provided: NotFoundError */

    /***/
    function srcAppCommonNotFoundErrorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundError", function () {
        return NotFoundError;
      });
      /* harmony import */


      var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-error */
      "./src/app/common/app-error.ts");

      var NotFoundError = /*#__PURE__*/function (_app_error__WEBPACK_I2) {
        _inherits(NotFoundError, _app_error__WEBPACK_I2);

        var _super2 = _createSuper(NotFoundError);

        function NotFoundError() {
          _classCallCheck(this, NotFoundError);

          return _super2.apply(this, arguments);
        }

        return NotFoundError;
      }(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]);
      /***/

    },

    /***/
    "./src/app/vendors/vendor-modal/vendor-modal-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/vendors/vendor-modal/vendor-modal-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: VendorModalPageRoutingModule */

    /***/
    function srcAppVendorsVendorModalVendorModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorModalPageRoutingModule", function () {
        return VendorModalPageRoutingModule;
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


      var _vendor_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vendor-modal.page */
      "./src/app/vendors/vendor-modal/vendor-modal.page.ts");

      var routes = [{
        path: '',
        component: _vendor_modal_page__WEBPACK_IMPORTED_MODULE_3__["VendorModalPage"]
      }];

      var VendorModalPageRoutingModule = function VendorModalPageRoutingModule() {
        _classCallCheck(this, VendorModalPageRoutingModule);
      };

      VendorModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VendorModalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/vendors/vendor-modal/vendor-modal.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/vendors/vendor-modal/vendor-modal.module.ts ***!
      \*************************************************************/

    /*! exports provided: VendorModalPageModule */

    /***/
    function srcAppVendorsVendorModalVendorModalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorModalPageModule", function () {
        return VendorModalPageModule;
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


      var _vendor_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vendor-modal-routing.module */
      "./src/app/vendors/vendor-modal/vendor-modal-routing.module.ts");
      /* harmony import */


      var _vendor_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vendor-modal.page */
      "./src/app/vendors/vendor-modal/vendor-modal.page.ts");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-pagination */
      "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

      var VendorModalPageModule = function VendorModalPageModule() {
        _classCallCheck(this, VendorModalPageModule);
      };

      VendorModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vendor_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["VendorModalPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
        declarations: [_vendor_modal_page__WEBPACK_IMPORTED_MODULE_6__["VendorModalPage"]]
      })], VendorModalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=vendors-vendor-modal-vendor-modal-module-es5.js.map