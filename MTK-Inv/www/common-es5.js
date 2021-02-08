(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActiveA6787d69Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegate4584ab5aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/line-items/line-items.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/line-items/line-items.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLineItemsLineItemsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4 class=\"dispaly-4\">Order Item</h4>\n<hr>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n    <input type=\"hidden\"  name=\"LineItemID\" #LineItemID=\"ngModel\" [(ngModel)]=\"formData.LineItemID\">\n    <input type=\"hidden\"  name=\"OrderID\" #OrderID=\"ngModel\" [(ngModel)]=\"formData.OrderID\">\n  <input type=\"hidden\"  name=\"ItemName\" #ItemName=\"ngModel\" [(ngModel)]=\"formData.ItemName\">\n  <div class=\"form-group\">\n    <label>Item</label>\n    <select name=\"ItemID\" #ItemID=\"ngModel\" [(ngModel)]=\"formData.ItemID\" class=\"form-control\" (change)=\"updatePrice($event.target)\"\n    [class.is-invalid]=\"!isValid && formData.ItemID==0\">\n      <option value=\"0\">-Select-</option>\n      <option *ngFor=\"let item of itemList\" value=\"{{item.id}}\">{{item.name}}</option>\n    </select>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label>Price</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">$</div>\n        </div>\n        <input name=\"Price\" #Price=\"ngModel\" [(ngModel)]=\"formData.Price\" class=\"form-control\" readonly>\n      </div>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>Quantity</label>\n      <input name=\"Quantity\" #Quantity=\"ngModel\" [(ngModel)]=\"formData.Quantity\" class=\"form-control\"\n      (keyup)=\"updateTotal()\" [class.is-invalid]=\"!isValid && formData.Quantity==0\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Total</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text\">$</div>\n      </div>\n      <input name=\"subTotal\" #subTotal=\"ngModel\" [(ngModel)]=\"formData.subTotal\" class=\"form-control\" readonly>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> Submit</button>\n    <button type=\"button\" class=\"btn btn-outline-dark ml-1\" (click)=\"close()\"><i class=\"fa fa-close\"></i>Close</button>\n  </div>\n</form> \n\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-details/payment-details.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-details/payment-details.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaymentDetailsPaymentDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n  <ion-buttons slot=\"start\">\n      <!-- <ion-icon style=\"width: 77px; height: 39px;\" name=\"close-outline\" (click)=\"closeModal()\"></ion-icon> -->\n    </ion-buttons> \n    <div>\n      <ion-item color=\"primary\" lines=\"none\">\n        <h4 class=\"dispaly-4\">Payment Details</h4>\n      </ion-item>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<form [formGroup]=\"regform\">\n  <table class=\"table table-hover\">\n    <colgroup>\n      <col width=\"10%\">\n      <col width=\"15%\">\n    </colgroup>\n    <thead style=\"background-color: #fbfcfd;\">\n      <tr>\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Type</th>\n      </tr>\n    </thead>\n    <tbody style=\"background-color: #ddd;\">\n      <tr style=\"width: 12px;\" *ngFor=\"let item of listOfVoucher;let i of index\">\n        <td>\n          <div style=\"width: 140px;\">\n            <ion-label>{{item.date}}</ion-label>\n           <!-- <ion-datetime displayFormat=\"MM/DD/YYYY\" formControlName=\"date\" [(ngModel)]=\"item.date\" value=\"{{item.date}}\"></ion-datetime> -->\n          </div>\n        <td>\n          <div style=\"width: 100px;\">\n            <ion-label >payment</ion-label>\n          </div>\n        </td>\n      </tr>\n      <tr>\n        <th colspan=\"1\">Amount applied</th>\n        <td>\n          <div style=\"width: 100px;\">\n          <input class=\"input-filed\" formControlName=\"payment\" placeholder=\"Br 0\" [(ngModel)]=\"payment\" (keyup)=\"updatePayment()\"\n          type=\"number\" class=\"form-control\" />\n         </div>\n      </td>\n       </tr>\n    \n    </tbody>\n  </table>\n  <div class=\"col-md-6\" style=\"margin-left: 200px; background-color: #ddd; border-radius: 4px;\">\n    <div class=\"form-group\">\n      <div class=\"input-group md-6\">\n        <ion-label> Total Paid &nbsp;&nbsp; {{this.payment}}</ion-label>\n        <ion-label class=\"input-filed\"></ion-label>\n       </div>\n    </div>\n    <hr>\n    <div class=\"form-group\">\n        <label>Balance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Br {{updateBalancePayment}}</label>\n    </div>\n  </div>\n  <div class=\"form-group\" style=\"padding-left: 202px;padding-bottom: 24px;\">\n  <button type=\"button\" class=\"btn btn-outline-dark ml-1\" (click)=\"close()\"><i class=\"fa fa-close\"></i>Close</button>&nbsp;&nbsp;\n  <button type=\"submit\" class=\"btn btn-dark\" (click)=\"submitPayment()\"><i class=\"fa fa-database\"></i> Submit</button>\n</div>\n</form>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/vendor-modal/vendor-modal.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/vendor-modal/vendor-modal.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVendorsVendorModalVendorModalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n  <ion-buttons slot=\"start\">\n      <ion-icon style=\"width: 77px; height: 39px;\" name=\"close-outline\" (click)=\"closeModal()\"></ion-icon>\n    </ion-buttons> \n    <div>\n      <ion-item color=\"primary\" lines=\"none\">\n      <ion-label>New Vendor</ion-label>\n      <div style=\"text-align: center; margin: auto;\">\n        <ion-button id=\"add items\" (click)=\"SaveVender()\"> \n          <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n          {{editMode?'Update ':'Add'}}</ion-button>\n      </div>\n      </ion-item>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label position=\"floating\">Vendor Name</ion-label>\n      <ion-input formControlName=\"vendorName\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('vendorName').valid && regform.get('vendorName').touched\" > This field is required! </small> \n      </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Contact Name</ion-label>\n      <ion-input formControlName=\"contact\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('contact').valid && regform.get('contact').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Address</ion-label>\n      <ion-input formControlName=\"address\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('address').valid && regform.get('address').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Balance</ion-label>\n      <ion-input type=\"number\" formControlName=\"balance\" ></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('balance').valid && regform.get('balance').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Phone Number</ion-label>\n      <ion-input formControlName=\"phonenumber\" type = \"tel\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('phonenumber').valid && regform.get('phonenumber').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" ngModel [email]=\"true\" formControlName=\"email\" ></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('email').valid && regform.get('email').touched\" > This field is required! </small> \n    </ion-item> \n    <ion-item>\n      <ion-label position=\"floating\">Website</ion-label>\n      <ion-input formControlName=\"website\"></ion-input>\n    </ion-item>\n   </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/Tabels/tabels-list.ts":
    /*!***********************************!*\
      !*** ./src/Tabels/tabels-list.ts ***!
      \***********************************/

    /*! exports provided: TabelsList, LookupCatagory, Lookup, Items, LoginUser, Customer, Supplier, ItemCategory, Vendors, Purchase, LineItem, saleOrder, Vocher, balance, vocherTransation, AddItems, VoucherSetting, IdSetting, SelectedVocher */

    /***/
    function srcTabelsTabelsListTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabelsList", function () {
        return TabelsList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LookupCatagory", function () {
        return LookupCatagory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Lookup", function () {
        return Lookup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Items", function () {
        return Items;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginUser", function () {
        return LoginUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Customer", function () {
        return Customer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Supplier", function () {
        return Supplier;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemCategory", function () {
        return ItemCategory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Vendors", function () {
        return Vendors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Purchase", function () {
        return Purchase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineItem", function () {
        return LineItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "saleOrder", function () {
        return saleOrder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Vocher", function () {
        return Vocher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "balance", function () {
        return balance;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "vocherTransation", function () {
        return vocherTransation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddItems", function () {
        return AddItems;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherSetting", function () {
        return VoucherSetting;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdSetting", function () {
        return IdSetting;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectedVocher", function () {
        return SelectedVocher;
      });

      var TabelsList = function TabelsList() {
        _classCallCheck(this, TabelsList);
      };

      var LookupCatagory = function LookupCatagory() {
        _classCallCheck(this, LookupCatagory);
      };

      var Lookup = function Lookup() {
        _classCallCheck(this, Lookup);
      };

      var Items = function Items() {
        _classCallCheck(this, Items);
      };

      var LoginUser = function LoginUser() {
        _classCallCheck(this, LoginUser);
      };

      var Customer = function Customer() {
        _classCallCheck(this, Customer);
      };

      var Supplier = function Supplier() {
        _classCallCheck(this, Supplier);
      };

      var ItemCategory = function ItemCategory() {
        _classCallCheck(this, ItemCategory);
      };

      var Vendors = function Vendors() {
        _classCallCheck(this, Vendors);
      };

      var Purchase = function Purchase() {
        _classCallCheck(this, Purchase);
      };

      var LineItem = function LineItem() {
        _classCallCheck(this, LineItem);
      };

      var saleOrder = function saleOrder() {
        _classCallCheck(this, saleOrder);
      };

      var Vocher = function Vocher() {
        _classCallCheck(this, Vocher);
      };

      var balance = function balance() {
        _classCallCheck(this, balance);
      };

      var vocherTransation = function vocherTransation() {
        _classCallCheck(this, vocherTransation);
      };

      var AddItems = function AddItems() {
        _classCallCheck(this, AddItems);
      };

      var VoucherSetting = function VoucherSetting() {
        _classCallCheck(this, VoucherSetting);
      };

      var IdSetting = function IdSetting() {
        _classCallCheck(this, IdSetting);
      };

      var SelectedVocher = function SelectedVocher() {
        _classCallCheck(this, SelectedVocher);
      }; // export class  Payment{
      //     calcBalance(updateBalance:number):number{
      //         return updateBalance;  
      //     }
      // }
      //filter 

      /***/

    },

    /***/
    "./src/app/Service/balance.service.ts":
    /*!********************************************!*\
      !*** ./src/app/Service/balance.service.ts ***!
      \********************************************/

    /*! exports provided: BalanceService */

    /***/
    function srcAppServiceBalanceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalanceService", function () {
        return BalanceService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "./node_modules/rxjs/internal/operators/map.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/add/operator/catch */
      "./node_modules/rxjs/add/operator/catch.js");
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/add/operator/map */
      "./node_modules/rxjs/add/operator/map.js");
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/add/operator/toPromise */
      "./node_modules/rxjs/add/operator/toPromise.js");
      /* harmony import */


      var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/add/observable/throw */
      "./node_modules/rxjs/add/observable/throw.js");
      /* harmony import */


      var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/bad-input */
      "./src/app/common/bad-input.ts");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/not-found-error */
      "./src/app/common/not-found-error.ts");
      /* harmony import */


      var _common_app_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/app-error */
      "./src/app/common/app-error.ts");

      var BalanceService = /*#__PURE__*/function () {
        function BalanceService(db) {
          _classCallCheck(this, BalanceService);

          this.db = db;
          this.balanceCollectionList = db.collection('balance');
        }

        _createClass(BalanceService, [{
          key: "create",
          value: function create(balance) {
            return this.balanceCollectionList.add(balance)["catch"](this.handleError);
          }
        }, {
          key: "getBalanceByItemId",
          value: function getBalanceByItemId(itemId) {
            var lookupObject = this.db.collection('balance', function (ref) {
              return ref.where('itemId', '==', itemId);
            }).snapshotChanges();
            this.balanceList = lookupObject.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }))["catch"](this.handleError);
            return this.balanceList;
          } // getBalanceById(id:string){
          //   const balanceObj= this.db.collection('balance',ref =>ref.where('customer','==',id)).snapshotChanges();
          //   this.balanceList=balanceObj.pipe(
          //     map(changes =>changes.map(a=>{
          //       const data = a.payload.doc.data() as balance;
          //       const id = a.payload.doc.id;
          //       return {id, ...data};
          //     }))
          //   ).catch(this.handleError);
          //   return this.balanceList;
          // }

        }, {
          key: "getAllBalance",
          value: function getAllBalance() {
            this.balanceList = this.balanceCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }))["catch"](this.handleError);
            return this.balanceList;
          }
        }, {
          key: "updateBalance",
          value: function updateBalance(balance, id) {
            return this.balanceCollectionList.doc(id).update(balance)["catch"](this.handleError);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_9__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_10__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_11__["AppError"](error));
          }
        }]);

        return BalanceService;
      }();

      BalanceService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      BalanceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BalanceService);
      /***/
    },

    /***/
    "./src/app/Service/catagory.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/Service/catagory.service.ts ***!
      \*********************************************/

    /*! exports provided: CatagoryService */

    /***/
    function srcAppServiceCatagoryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatagoryService", function () {
        return CatagoryService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "./node_modules/rxjs/internal/operators/map.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/app-error */
      "./src/app/common/app-error.ts");
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/bad-input */
      "./src/app/common/bad-input.ts");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/not-found-error */
      "./src/app/common/not-found-error.ts");

      var CatagoryService = /*#__PURE__*/function () {
        function CatagoryService(db) {
          _classCallCheck(this, CatagoryService);

          this.lookUpCategoryCollectionList = db.collection('LookupCatagory');
        }

        _createClass(CatagoryService, [{
          key: "create",
          value: function create(LookupCatagory) {
            return this.lookUpCategoryCollectionList.add(LookupCatagory)["catch"](this.handleError);
          }
        }, {
          key: "getAllLookUpCategory",
          value: function getAllLookUpCategory() {
            this.lookUpCategoryList = this.lookUpCategoryCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.lookUpCategoryList;
          }
        }, {
          key: "getCategory",
          value: function getCategory(id) {
            return this.lookUpCategoryCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateCategory",
          value: function updateCategory(categoryObj, id) {
            return this.lookUpCategoryCollectionList.doc(id).update(categoryObj)["catch"](this.handleError);
          }
        }, {
          key: "addCategory",
          value: function addCategory(categoryObj) {
            return this.lookUpCategoryCollectionList.add(categoryObj)["catch"](this.handleError);
          }
        }, {
          key: "removeCategory",
          value: function removeCategory(id) {
            return this.lookUpCategoryCollectionList.doc(id)["delete"]()["catch"](this.handleError);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }
        }]);

        return CatagoryService;
      }();

      CatagoryService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      CatagoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CatagoryService);
      /***/
    },

    /***/
    "./src/app/Service/customer.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/Service/customer.service.ts ***!
      \*********************************************/

    /*! exports provided: CustomerService */

    /***/
    function srcAppServiceCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
        return CustomerService;
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

      var CustomerService = /*#__PURE__*/function () {
        //db: any;
        function CustomerService(db) {
          _classCallCheck(this, CustomerService);

          this.db = db;
          this.customerCollectionList = db.collection('Customer');
        }

        _createClass(CustomerService, [{
          key: "create",
          value: function create(Customer) {
            return this.customerCollectionList.add(Customer); //return this.db.list('/Category').push(Category);
          }
        }, {
          key: "getAllCustomer",
          value: function getAllCustomer() {
            this.customersList = this.customerCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.customersList;
          }
        }, {
          key: "getUpdateBalance",
          value: function getUpdateBalance(id) {
            var customerObj = this.db.collection('Customer', function (ref) {
              return ref.where('type', '==', id);
            }).snapshotChanges();
            this.customersList = customerObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.customersList;
          }
        }, {
          key: "updateCustomer",
          value: function updateCustomer(customerObj, id) {
            return this.customerCollectionList.doc(id).update(customerObj);
          }
        }, {
          key: "getCategory",
          value: function getCategory(id) {
            return this.customerCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "addCategory",
          value: function addCategory(Category) {
            return this.customerCollectionList.add(Category);
          }
        }, {
          key: "removeCategory",
          value: function removeCategory(id) {
            return this.customerCollectionList.doc(id)["delete"]();
          }
        }]);

        return CustomerService;
      }();

      CustomerService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      CustomerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CustomerService);
      /***/
    },

    /***/
    "./src/app/Service/id-setting.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/Service/id-setting.service.ts ***!
      \***********************************************/

    /*! exports provided: IdSettingService */

    /***/
    function srcAppServiceIdSettingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdSettingService", function () {
        return IdSettingService;
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

      var IdSettingService = /*#__PURE__*/function () {
        function IdSettingService(db) {
          _classCallCheck(this, IdSettingService);

          this.db = db;
          this.idSettingCollectionList = db.collection('IdSetting');
        }

        _createClass(IdSettingService, [{
          key: "create",
          value: function create(idSetting) {
            return this.idSettingCollectionList.add(idSetting);
          }
        }, {
          key: "getIDSetting",
          value: function getIDSetting(id) {
            var idSettingObj = this.db.collection('IdSetting', function (ref) {
              return ref.where('voucherTypeId', '==', id);
            }).snapshotChanges();
            this.idSettingList = idSettingObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.idSettingList;
          }
        }, {
          key: "getAllIdSetting",
          value: function getAllIdSetting() {
            this.idSettingList = this.idSettingCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.idSettingList;
          }
        }, {
          key: "getID",
          value: function getID(id) {
            return this.idSettingCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateIdSetting",
          value: function updateIdSetting(IdSettings, id) {
            return this.idSettingCollectionList.doc(id).update(IdSettings);
          }
        }, {
          key: "removeIdSetting",
          value: function removeIdSetting(id) {
            return this.idSettingCollectionList.doc(id)["delete"]();
          }
        }]);

        return IdSettingService;
      }();

      IdSettingService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      IdSettingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], IdSettingService);
      /***/
    },

    /***/
    "./src/app/Service/item-category.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/Service/item-category.service.ts ***!
      \**************************************************/

    /*! exports provided: ItemCategoryService */

    /***/
    function srcAppServiceItemCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemCategoryService", function () {
        return ItemCategoryService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "./node_modules/rxjs/internal/operators/map.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/app-error */
      "./src/app/common/app-error.ts");
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/bad-input */
      "./src/app/common/bad-input.ts");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/not-found-error */
      "./src/app/common/not-found-error.ts");

      var ItemCategoryService = /*#__PURE__*/function () {
        function ItemCategoryService(db) {
          _classCallCheck(this, ItemCategoryService);

          this.itemCategoryCollectionList = db.collection('ItemCategory');
        }

        _createClass(ItemCategoryService, [{
          key: "create",
          value: function create(ItemCategory) {
            return this.itemCategoryCollectionList.add(ItemCategory)["catch"](this.handleError);
          }
        }, {
          key: "getAllItemCategories",
          value: function getAllItemCategories() {
            this.categorysList = this.itemCategoryCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.categorysList;
          }
        }, {
          key: "getItemCategory",
          value: function getItemCategory(id) {
            return this.itemCategoryCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateItemCategory",
          value: function updateItemCategory(itemCategoryObj, id) {
            return this.itemCategoryCollectionList.doc(id).update(itemCategoryObj)["catch"](this.handleError);
          }
        }, {
          key: "removeCategory",
          value: function removeCategory(id) {
            return this.itemCategoryCollectionList.doc(id)["delete"]()["catch"](this.handleError);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }
        }]);

        return ItemCategoryService;
      }();

      ItemCategoryService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      ItemCategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ItemCategoryService);
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

          this.db = db;
          this.itemCollectionList = db.collection('Items');
        }

        _createClass(ItemsService, [{
          key: "getItemList",
          value: function getItemList() {//return this.http.get(environment.apiURL+'/Item').toPromise();
          }
        }, {
          key: "create",
          value: function create(Category) {
            var values = this.itemCollectionList.add(Category).then(function (docRef) {
              var id = docRef.id; // this.keyId =id;

              console.log(id); // return id;
            });
            return values;
          }
        }, {
          key: "getBalanceByItemId",
          value: function getBalanceByItemId(id) {
            var lookUpObj = this.db.collection('Items', function (ref) {
              return ref.where('id', '==', id);
            }).snapshotChanges();
            this.balanceList = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.balanceList;
          }
        }, {
          key: "getItemByLookup",
          value: function getItemByLookup(selectedLookup) {
            var lookUpObj = this.db.collection('Items', function (ref) {
              return ref.where('type', '==', selectedLookup);
            }).snapshotChanges();
            this.itemsList = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.itemsList;
          }
        }, {
          key: "getItemByID",
          value: function getItemByID(id) {
            var lookUpObj = this.db.collection('Items', function (ref) {
              return ref.where('type', '==', id);
            }).snapshotChanges();
            this.itemsList = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.itemsList;
          }
        }, {
          key: "getItemByStoreID",
          value: function getItemByStoreID(storeid) {
            var lookUpObj = this.db.collection('Items', function (ref) {
              return ref.where('storeid', '==', storeid);
            }).snapshotChanges();
            this.itemsList = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.itemsList;
          }
        }, {
          key: "getAllItem",
          value: function getAllItem() {
            this.itemsList = this.itemCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.itemsList;
          }
        }, {
          key: "getAllItemKEY",
          value: function getAllItemKEY(Quantity, storeid, name, amhricName, price) {
            var lookUpObj = this.db.collection('Items', function (ref) {
              return ref.where('storeid', '==', storeid).where('Quantity', '==', Quantity).where('name', '==', name).where('price', '==', price).where('AmaricName', '==', amhricName);
            }).snapshotChanges();
            this.itemsList = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.itemsList;
          }
        }, {
          key: "getItem",
          value: function getItem(id) {
            return this.itemCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateItem",
          value: function updateItem(Item, id) {
            return this.itemCollectionList.doc(id).update(Item);
          }
        }, {
          key: "addItem",
          value: function addItem(Item) {
            return this.itemCollectionList.add(Item);
          }
        }, {
          key: "removeItems",
          value: function removeItems(id) {
            return this.itemCollectionList.doc(id)["delete"]();
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
    "./src/app/Service/line-items.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/Service/line-items.service.ts ***!
      \***********************************************/

    /*! exports provided: LineItemsService */

    /***/
    function srcAppServiceLineItemsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineItemsService", function () {
        return LineItemsService;
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
      /* harmony import */


      var src_Tabels_tabels_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/Tabels/tabels-list */
      "./src/Tabels/tabels-list.ts");

      var LineItemsService = /*#__PURE__*/function () {
        function LineItemsService(db) {
          _classCallCheck(this, LineItemsService);

          this.lineItemCollectionList = db.collection('LineItem');
        }

        _createClass(LineItemsService, [{
          key: "create",
          value: function create(LineItem) {
            return this.lineItemCollectionList.add(LineItem);
          }
        }, {
          key: "getAllLineItem",
          value: function getAllLineItem() {
            this.lineItemList = this.lineItemCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.lineItemList;
          }
        }, {
          key: "updateLineItem",
          value: function updateLineItem(saleOrder, id) {
            return this.lineItemCollectionList.doc(id).update(src_Tabels_tabels_list__WEBPACK_IMPORTED_MODULE_4__["LineItem"]);
          }
        }, {
          key: "getLineItem",
          value: function getLineItem(id) {
            return this.lineItemCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "removeLineItem",
          value: function removeLineItem(id) {
            return this.lineItemCollectionList.doc(id)["delete"]();
          }
        }]);

        return LineItemsService;
      }();

      LineItemsService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      LineItemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LineItemsService);
      /***/
    },

    /***/
    "./src/app/Service/lookup-catagory.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/Service/lookup-catagory.service.ts ***!
      \****************************************************/

    /*! exports provided: LookupCatagoryService */

    /***/
    function srcAppServiceLookupCatagoryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LookupCatagoryService", function () {
        return LookupCatagoryService;
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

      var LookupCatagoryService = /*#__PURE__*/function () {
        function LookupCatagoryService(db) {
          _classCallCheck(this, LookupCatagoryService);

          this.db = db;
          this.lookupCatagoryCollectionList = db.collection('LookupCatagory');
        }

        _createClass(LookupCatagoryService, [{
          key: "create",
          value: function create(Category) {
            return this.lookupCatagoryCollectionList.add(Category); //return this.db.list('/Category').push(Category);
          }
        }, {
          key: "getAllLookupCatagory",
          value: function getAllLookupCatagory() {
            this.lookupCatagoryList = this.lookupCatagoryCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.lookupCatagoryList;
          }
        }, {
          key: "getLookupByType",
          value: function getLookupByType(id) {
            var lookUpObject = this.db.collection('LookupCatagory', function (ref) {
              return ref.where('type', '==', id);
            }).snapshotChanges();
            this.lookupCatagoryList = lookUpObject.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.lookupCatagoryList;
          }
        }, {
          key: "getLookUpByName",
          value: function getLookUpByName(name) {
            var lookUpObject = this.db.collection('lookup', function (ref) {
              return ref.where('name', '==', name);
            }).snapshotChanges();
            this.lookupCatagoryList = lookUpObject.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.lookupCatagoryList;
          }
        }, {
          key: "getLookUpCatagory",
          value: function getLookUpCatagory(id) {
            return this.lookupCatagoryCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateLookUpCatagory",
          value: function updateLookUpCatagory(lookupCatagoryObj, id) {
            return this.lookupCatagoryCollectionList.doc(id).update(lookupCatagoryObj);
          }
        }, {
          key: "removeLookupCatagory",
          value: function removeLookupCatagory(id) {
            return this.lookupCatagoryCollectionList.doc(id)["delete"]();
          }
        }]);

        return LookupCatagoryService;
      }();

      LookupCatagoryService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      LookupCatagoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LookupCatagoryService);
      /***/
    },

    /***/
    "./src/app/Service/vendors.service.ts":
    /*!********************************************!*\
      !*** ./src/app/Service/vendors.service.ts ***!
      \********************************************/

    /*! exports provided: VendorsService */

    /***/
    function srcAppServiceVendorsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorsService", function () {
        return VendorsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "./node_modules/rxjs/internal/operators/map.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/app-error */
      "./src/app/common/app-error.ts");
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/bad-input */
      "./src/app/common/bad-input.ts");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/not-found-error */
      "./src/app/common/not-found-error.ts");

      var VendorsService = /*#__PURE__*/function () {
        //readonly APIUrl="http://localhost:58089/api";
        function VendorsService(db) {
          _classCallCheck(this, VendorsService);

          this.db = db;
          this.vendorCollectionList = db.collection('Vendors');
        }

        _createClass(VendorsService, [{
          key: "create",
          value: function create(Vendors) {
            return this.vendorCollectionList.add(Vendors);
          } // addVendor(val:Object):Observable<Object>{
          //   return this.http.post(this.APIUrl+'/Vendor',val);
          //   }
          //   getAllVendors():Observable<any[]>{
          //  return this.http.get<any>(this.APIUrl+'/Vendor');
          //   }

        }, {
          key: "getAllVendor",
          value: function getAllVendor() {
            this.vendorList = this.vendorCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.vendorList;
          }
        }, {
          key: "getVendorById",
          value: function getVendorById(id) {
            var vendorObj = this.db.collection('Vendors', function (ref) {
              return ref.where('id', '==', id);
            }).snapshotChanges();
            this.vendorList = vendorObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }))["catch"](this.handleError);
            return this.vendorList;
          }
        }, {
          key: "updateVendor",
          value: function updateVendor(Vendors, id) {
            return this.vendorCollectionList.doc(id).update(Vendors);
          }
        }, {
          key: "getVendor",
          value: function getVendor(id) {
            return this.vendorCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "addSupplier",
          value: function addSupplier(vendors) {
            return this.vendorCollectionList.add(vendors);
          }
        }, {
          key: "removeVendor",
          value: function removeVendor(id) {
            return this.vendorCollectionList.doc(id)["delete"]();
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }
        }]);

        return VendorsService;
      }();

      VendorsService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      VendorsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], VendorsService);
      /***/
    },

    /***/
    "./src/app/line-items/line-items.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/line-items/line-items.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLineItemsLineItemsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmUtaXRlbXMvbGluZS1pdGVtcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/line-items/line-items.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/line-items/line-items.page.ts ***!
      \***********************************************/

    /*! exports provided: LineItemsPage */

    /***/
    function srcAppLineItemsLineItemsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineItemsPage", function () {
        return LineItemsPage;
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _Service_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Service/items.service */
      "./src/app/Service/items.service.ts");
      /* harmony import */


      var _Service_purchase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Service/purchase.service */
      "./src/app/Service/purchase.service.ts");

      var LineItemsPage = /*#__PURE__*/function () {
        function LineItemsPage(data, dialogRef, itemService, purchaseService, dialog) {
          _classCallCheck(this, LineItemsPage);

          this.data = data;
          this.dialogRef = dialogRef;
          this.itemService = itemService;
          this.purchaseService = purchaseService;
          this.dialog = dialog;
          this.isValid = true;
        }

        _createClass(LineItemsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //this.purchaseService.getItemList().subscribe(res=>this.itemList=res as Items[]);
            this.itemService.getAllItem().subscribe(function (res) {
              return _this.itemList = res;
            });
            if (this.data.orderItemIndex == null) this.formData = {
              LineItemID: null,
              OrderID: this.data.OrderID,
              ItemID: 0,
              vocherId: null,
              taxAmount: 0,
              ItemName: '',
              Price: 0,
              Quantity: 0,
              subTotal: 0
            };else this.formData = Object.assign({}, this.purchaseService.orderItems[this.data.orderItemIndex]);
          }
        }, {
          key: "updatePrice",
          value: function updatePrice(ctrl) {
            if (ctrl.selectedIndex == 0) {
              this.formData.Price = 0;
              this.formData.ItemName = '';
            } else {
              this.formData.Price = this.itemList[ctrl.selectedIndex - 1].price;
              this.formData.ItemName = this.itemList[ctrl.selectedIndex - 1].AmaricName;
            }

            this.updateTotal();
          }
        }, {
          key: "updateTotal",
          value: function updateTotal() {
            this.formData.subTotal = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            if (this.validateForm(form.value)) {
              if (this.data.orderItemIndex == null) this.purchaseService.orderItems.push(form.value);else this.purchaseService.orderItems[this.data.orderItemIndex] = form.value;
              this.dialogRef.close();
            }
          }
        }, {
          key: "validateForm",
          value: function validateForm(formData) {
            this.isValid = true;
            if (formData.ItemID == 0) this.isValid = false;else if (formData.Quantity == 0) this.isValid = false;
            return this.isValid;
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return LineItemsPage;
      }();

      LineItemsPage.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: _Service_items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"]
        }, {
          type: _Service_purchase_service__WEBPACK_IMPORTED_MODULE_4__["PurchaseService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      };

      LineItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-line-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./line-items.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/line-items/line-items.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./line-items.page.scss */
        "./src/app/line-items/line-items.page.scss"))["default"]]
      })], LineItemsPage);
      /***/
    },

    /***/
    "./src/app/payment-details/payment-details.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/payment-details/payment-details.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaymentDetailsPaymentDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-dialog-container {\n  display: block;\n  padding: 11px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n\n.mat-dialog-container {\n  box-shadow: 2px 11px 7px 0px rgba(199, 195, 195, 0.2), 0px 17px 38px 3px rgba(65, 88, 150, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #dee2e6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n  background-color: #333;\n  width: 611px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0lBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCAxMXB4IDdweCAwcHggcmdiKDE5OSAxOTUgMTk1IC8gMjAlKSwgMHB4IDE3cHggMzhweCAzcHggcmdiKDY1IDg4IDE1MCAvIDE0JSksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGJhY2tncm91bmQ6ICNkZWUyZTY7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG59XHJcbmhyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgd2lkdGg6IDYxMXB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/payment-details/payment-details.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/payment-details/payment-details.page.ts ***!
      \*********************************************************/

    /*! exports provided: PaymentDetailsPage */

    /***/
    function srcAppPaymentDetailsPaymentDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentDetailsPage", function () {
        return PaymentDetailsPage;
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


      var _Service_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Service/customer.service */
      "./src/app/Service/customer.service.ts");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Service/shared.service */
      "./src/app/Service/shared.service.ts");
      /* harmony import */


      var _Service_vocher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/vocher.service */
      "./src/app/Service/vocher.service.ts");

      var PaymentDetailsPage = /*#__PURE__*/function () {
        function PaymentDetailsPage(voucherService, modalController, sharedService, fb, customerService) {
          _classCallCheck(this, PaymentDetailsPage);

          this.voucherService = voucherService;
          this.modalController = modalController;
          this.sharedService = sharedService;
          this.fb = fb;
          this.customerService = customerService;
          this.regform = this.fb.group({});
        }

        _createClass(PaymentDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              payment: 0
            });
            console.log(this.balance);
            console.log(this.customerId);
            console.log(this.vendorId);
            this.updateBalancePayment = this.balance;
            this.getAllVoucher();
          }
        }, {
          key: "getAllVoucher",
          value: function getAllVoucher() {
            var _this2 = this;

            if (this.vendorId != null) {
              this.voucherService.getVocherByVendorID(this.vendorId).subscribe(function (res) {
                _this2.listOfVoucher = res; //console.log(res)
              });
            } else {
              this.voucherService.getVocherByCustomerID(this.customerId).subscribe(function (res) {
                _this2.listOfVoucher = res; //console.log(res)
              });
            }
          }
        }, {
          key: "updatePayment",
          value: function updatePayment() {
            this.payment = parseFloat(this.regform.get("payment").value);
            this.updateBalancePayment = this.balance - this.payment;
          }
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss();
          }
        }, {
          key: "submitPayment",
          value: function submitPayment() {
            var payment = {
              updateBalance: this.updateBalancePayment,
              paymnetBalance: this.payment
            };
            this.sharedService.balance.next(payment);
            this.modalController.dismiss();
          }
        }]);

        return PaymentDetailsPage;
      }();

      PaymentDetailsPage.ctorParameters = function () {
        return [{
          type: _Service_vocher_service__WEBPACK_IMPORTED_MODULE_6__["VocherService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _Service_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
        }];
      };

      PaymentDetailsPage.propDecorators = {
        balance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customerId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        vendorId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      PaymentDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payment-details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-details/payment-details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payment-details.page.scss */
        "./src/app/payment-details/payment-details.page.scss"))["default"]]
      })], PaymentDetailsPage);
      /***/
    },

    /***/
    "./src/app/vendors/vendor-modal/vendor-modal.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/vendors/vendor-modal/vendor-modal.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVendorsVendorModalVendorModalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcnMvdmVuZG9yLW1vZGFsL3ZlbmRvci1tb2RhbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/vendors/vendor-modal/vendor-modal.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/vendors/vendor-modal/vendor-modal.page.ts ***!
      \***********************************************************/

    /*! exports provided: VendorModalPage */

    /***/
    function srcAppVendorsVendorModalVendorModalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorModalPage", function () {
        return VendorModalPage;
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


      var src_app_Service_vendors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Service/vendors.service */
      "./src/app/Service/vendors.service.ts");

      var VendorModalPage = /*#__PURE__*/function () {
        function VendorModalPage(fb, vendorService, alertController, modalController) {
          _classCallCheck(this, VendorModalPage);

          this.fb = fb;
          this.vendorService = vendorService;
          this.alertController = alertController;
          this.modalController = modalController;
          this.regform = this.fb.group({});
          this.editMode = false;
        }

        _createClass(VendorModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              vendorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              phonenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]*")])],
              contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
              website: [''],
              balance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]*")])]
            });

            if (this.data == null) {
              this.itemList = null;
            } else {
              this.editMode = true;
              this.itemList = Object.assign(this.data);
              this.vendorId = this.itemList.id;
              this.regform.get("vendorName").setValue(this.itemList.vendorName);
              this.regform.get("phonenumber").setValue(this.itemList.phonenumber);
              this.regform.get("contact").setValue(this.itemList.contact);
              this.regform.get("address").setValue(this.itemList.address);
              this.regform.get("email").setValue(this.itemList.email);
              this.regform.get("website").setValue(this.itemList.website);
              this.regform.get("balance").setValue(this.itemList.balance);
            }
          }
        }, {
          key: "SaveVender",
          value: function SaveVender() {
            if (this.regform.valid) {
              if (!this.vendorId) {
                this.vendorService.create(this.regform.value);
                this.presentAlert("Add Vendor Sucessfully");
                this.modalController.dismiss();
              } else {
                this.vendorService.updateVendor(this.regform.value, this.vendorId);
                this.presentAlert("Update Vendor Sucessfully");
                this.modalController.dismiss();
              }

              this.regform.reset();
              this.vendorId = "";
            } else {
              this.presentAlert("Please enter all fields");
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Vendors',
                        message: message,
                        buttons: ['ok']
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
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }]);

        return VendorModalPage;
      }();

      VendorModalPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_Service_vendors_service__WEBPACK_IMPORTED_MODULE_4__["VendorsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      VendorModalPage.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      VendorModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vendor-modal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/vendor-modal/vendor-modal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vendor-modal.page.scss */
        "./src/app/vendors/vendor-modal/vendor-modal.page.scss"))["default"]]
      })], VendorModalPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map