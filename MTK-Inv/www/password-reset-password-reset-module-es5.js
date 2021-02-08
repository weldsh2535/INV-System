(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-reset-password-reset-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/password-reset/password-reset.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password-reset/password-reset.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPasswordResetPasswordResetPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n\t<ion-toolbar>\n\t  <ion-buttons slot=\"start\">\n\t\t<ion-menu-button></ion-menu-button>\n\t  </ion-buttons>\n\t  <ion-title>Reset Password</ion-title>\n\t</ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\t<form #form=\"ngForm\"(ngSubmit)=\"resetPassword(form)\">\n\t  <div>\n\t\t  <ion-item>\n\t\t\t<ion-input name=\"ema il\" type=\"email\" placeholder=\"your@email.com\" ngModel required>Email:</ion-input>\n\t\t  </ion-item>\n\t\t  \n\t </div>\n\t <div style=\"text-align: center; margin: auto;\">\n        <ion-button type=\"submit\" [disabled]=\"form.invalid\">Reset Now</ion-button>\n\t </div>\n\t</form>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/password-reset/password-reset-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/password-reset/password-reset-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: PasswordResetPageRoutingModule */

    /***/
    function srcAppPasswordResetPasswordResetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetPageRoutingModule", function () {
        return PasswordResetPageRoutingModule;
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


      var _password_reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./password-reset.page */
      "./src/app/password-reset/password-reset.page.ts");

      var routes = [{
        path: '',
        component: _password_reset_page__WEBPACK_IMPORTED_MODULE_3__["PasswordResetPage"]
      }];

      var PasswordResetPageRoutingModule = function PasswordResetPageRoutingModule() {
        _classCallCheck(this, PasswordResetPageRoutingModule);
      };

      PasswordResetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PasswordResetPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/password-reset/password-reset.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/password-reset/password-reset.module.ts ***!
      \*********************************************************/

    /*! exports provided: PasswordResetPageModule */

    /***/
    function srcAppPasswordResetPasswordResetModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function () {
        return PasswordResetPageModule;
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


      var _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./password-reset-routing.module */
      "./src/app/password-reset/password-reset-routing.module.ts");
      /* harmony import */


      var _password_reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./password-reset.page */
      "./src/app/password-reset/password-reset.page.ts");

      var PasswordResetPageModule = function PasswordResetPageModule() {
        _classCallCheck(this, PasswordResetPageModule);
      };

      PasswordResetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasswordResetPageRoutingModule"]],
        declarations: [_password_reset_page__WEBPACK_IMPORTED_MODULE_6__["PasswordResetPage"]]
      })], PasswordResetPageModule);
      /***/
    },

    /***/
    "./src/app/password-reset/password-reset.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/password-reset/password-reset.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPasswordResetPasswordResetPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/password-reset/password-reset.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/password-reset/password-reset.page.ts ***!
      \*******************************************************/

    /*! exports provided: PasswordResetPage */

    /***/
    function srcAppPasswordResetPasswordResetPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetPage", function () {
        return PasswordResetPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Service/auth.service */
      "./src/app/Service/auth.service.ts");

      var PasswordResetPage = /*#__PURE__*/function () {
        function PasswordResetPage(authServices, router, alertCtrl) {
          _classCallCheck(this, PasswordResetPage);

          this.authServices = authServices;
          this.router = router;
          this.alertCtrl = alertCtrl;
        }

        _createClass(PasswordResetPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "resetPassword",
          value: function resetPassword(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.authServices.resetPassword(form.value.email).then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var _this2 = this;

                          var alert;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return this.alertCtrl.create({
                                    message: 'check your email to reset password',
                                    buttons: [{
                                      text: 'ok',
                                      role: 'cancel',
                                      handler: function handler() {
                                        _this2.router.navigateByUrl('login');
                                      }
                                    }]
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
                      }, function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var errorAlert;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return this.alertCtrl.create({
                                    message: error.message,
                                    buttons: [{
                                      text: 'ok',
                                      role: 'cancel'
                                    }]
                                  });

                                case 2:
                                  errorAlert = _context2.sent;
                                  _context2.next = 5;
                                  return errorAlert.present();

                                case 5:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return PasswordResetPage;
      }();

      PasswordResetPage.ctorParameters = function () {
        return [{
          type: _Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      PasswordResetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./password-reset.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/password-reset/password-reset.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./password-reset.page.scss */
        "./src/app/password-reset/password-reset.page.scss"))["default"]]
      })], PasswordResetPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=password-reset-password-reset-module-es5.js.map