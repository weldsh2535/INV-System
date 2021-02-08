(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
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
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/line-items/line-items.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/line-items/line-items.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"dispaly-4\">Order Item</h4>\n<hr>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n    <input type=\"hidden\"  name=\"LineItemID\" #LineItemID=\"ngModel\" [(ngModel)]=\"formData.LineItemID\">\n    <input type=\"hidden\"  name=\"OrderID\" #OrderID=\"ngModel\" [(ngModel)]=\"formData.OrderID\">\n  <input type=\"hidden\"  name=\"ItemName\" #ItemName=\"ngModel\" [(ngModel)]=\"formData.ItemName\">\n  <div class=\"form-group\">\n    <label>Item</label>\n    <select name=\"ItemID\" #ItemID=\"ngModel\" [(ngModel)]=\"formData.ItemID\" class=\"form-control\" (change)=\"updatePrice($event.target)\"\n    [class.is-invalid]=\"!isValid && formData.ItemID==0\">\n      <option value=\"0\">-Select-</option>\n      <option *ngFor=\"let item of itemList\" value=\"{{item.id}}\">{{item.name}}</option>\n    </select>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label>Price</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">$</div>\n        </div>\n        <input name=\"Price\" #Price=\"ngModel\" [(ngModel)]=\"formData.Price\" class=\"form-control\" readonly>\n      </div>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>Quantity</label>\n      <input name=\"Quantity\" #Quantity=\"ngModel\" [(ngModel)]=\"formData.Quantity\" class=\"form-control\"\n      (keyup)=\"updateTotal()\" [class.is-invalid]=\"!isValid && formData.Quantity==0\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Total</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text\">$</div>\n      </div>\n      <input name=\"subTotal\" #subTotal=\"ngModel\" [(ngModel)]=\"formData.subTotal\" class=\"form-control\" readonly>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> Submit</button>\n    <button type=\"button\" class=\"btn btn-outline-dark ml-1\" (click)=\"close()\"><i class=\"fa fa-close\"></i>Close</button>\n  </div>\n</form> \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-details/payment-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-details/payment-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n  <ion-buttons slot=\"start\">\n      <!-- <ion-icon style=\"width: 77px; height: 39px;\" name=\"close-outline\" (click)=\"closeModal()\"></ion-icon> -->\n    </ion-buttons> \n    <div>\n      <ion-item color=\"primary\" lines=\"none\">\n        <h4 class=\"dispaly-4\">Payment Details</h4>\n      </ion-item>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<form [formGroup]=\"regform\">\n  <table class=\"table table-hover\">\n    <colgroup>\n      <col width=\"10%\">\n      <col width=\"15%\">\n    </colgroup>\n    <thead style=\"background-color: #fbfcfd;\">\n      <tr>\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Type</th>\n      </tr>\n    </thead>\n    <tbody style=\"background-color: #ddd;\">\n      <tr style=\"width: 12px;\" *ngFor=\"let item of listOfVoucher;let i of index\">\n        <td>\n          <div style=\"width: 140px;\">\n            <ion-label>{{item.date}}</ion-label>\n           <!-- <ion-datetime displayFormat=\"MM/DD/YYYY\" formControlName=\"date\" [(ngModel)]=\"item.date\" value=\"{{item.date}}\"></ion-datetime> -->\n          </div>\n        <td>\n          <div style=\"width: 100px;\">\n            <ion-label >payment</ion-label>\n          </div>\n        </td>\n      </tr>\n      <tr>\n        <th colspan=\"1\">Amount applied</th>\n        <td>\n          <div style=\"width: 100px;\">\n          <input class=\"input-filed\" formControlName=\"payment\" placeholder=\"Br 0\" [(ngModel)]=\"payment\" (keyup)=\"updatePayment()\"\n          type=\"number\" class=\"form-control\" />\n         </div>\n      </td>\n       </tr>\n    \n    </tbody>\n  </table>\n  <div class=\"col-md-6\" style=\"margin-left: 200px; background-color: #ddd; border-radius: 4px;\">\n    <div class=\"form-group\">\n      <div class=\"input-group md-6\">\n        <ion-label> Total Paid &nbsp;&nbsp; {{this.payment}}</ion-label>\n        <ion-label class=\"input-filed\"></ion-label>\n       </div>\n    </div>\n    <hr>\n    <div class=\"form-group\">\n        <label>Balance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Br {{updateBalancePayment}}</label>\n    </div>\n  </div>\n  <div class=\"form-group\" style=\"padding-left: 202px;padding-bottom: 24px;\">\n  <button type=\"button\" class=\"btn btn-outline-dark ml-1\" (click)=\"close()\"><i class=\"fa fa-close\"></i>Close</button>&nbsp;&nbsp;\n  <button type=\"submit\" class=\"btn btn-dark\" (click)=\"submitPayment()\"><i class=\"fa fa-database\"></i> Submit</button>\n</div>\n</form>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/vendor-modal/vendor-modal.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/vendor-modal/vendor-modal.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n  <ion-buttons slot=\"start\">\n      <ion-icon style=\"width: 77px; height: 39px;\" name=\"close-outline\" (click)=\"closeModal()\"></ion-icon>\n    </ion-buttons> \n    <div>\n      <ion-item color=\"primary\" lines=\"none\">\n      <ion-label>New Vendor</ion-label>\n      <div style=\"text-align: center; margin: auto;\">\n        <ion-button id=\"add items\" (click)=\"SaveVender()\"> \n          <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n          {{editMode?'Update ':'Add'}}</ion-button>\n      </div>\n      </ion-item>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label position=\"floating\">Vendor Name</ion-label>\n      <ion-input formControlName=\"vendorName\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('vendorName').valid && regform.get('vendorName').touched\" > This field is required! </small> \n      </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Contact Name</ion-label>\n      <ion-input formControlName=\"contact\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('contact').valid && regform.get('contact').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Address</ion-label>\n      <ion-input formControlName=\"address\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('address').valid && regform.get('address').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Balance</ion-label>\n      <ion-input type=\"number\" formControlName=\"balance\" ></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('balance').valid && regform.get('balance').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Phone Number</ion-label>\n      <ion-input formControlName=\"phonenumber\" type = \"tel\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('phonenumber').valid && regform.get('phonenumber').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" ngModel [email]=\"true\" formControlName=\"email\" ></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('email').valid && regform.get('email').touched\" > This field is required! </small> \n    </ion-item> \n    <ion-item>\n      <ion-label position=\"floating\">Website</ion-label>\n      <ion-input formControlName=\"website\"></ion-input>\n    </ion-item>\n   </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/Tabels/tabels-list.ts":
/*!***********************************!*\
  !*** ./src/Tabels/tabels-list.ts ***!
  \***********************************/
/*! exports provided: TabelsList, LookupCatagory, Lookup, Items, LoginUser, Customer, Supplier, ItemCategory, Vendors, Purchase, LineItem, saleOrder, Vocher, balance, vocherTransation, AddItems, VoucherSetting, IdSetting, SelectedVocher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabelsList", function() { return TabelsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupCatagory", function() { return LookupCatagory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lookup", function() { return Lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return LoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCategory", function() { return ItemCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vendors", function() { return Vendors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Purchase", function() { return Purchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineItem", function() { return LineItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saleOrder", function() { return saleOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vocher", function() { return Vocher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balance", function() { return balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vocherTransation", function() { return vocherTransation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItems", function() { return AddItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherSetting", function() { return VoucherSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdSetting", function() { return IdSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedVocher", function() { return SelectedVocher; });
class TabelsList {
}
class LookupCatagory {
}
class Lookup {
}
class Items {
}
class LoginUser {
}
class Customer {
}
class Supplier {
}
class ItemCategory {
}
class Vendors {
}
class Purchase {
}
class LineItem {
}
class saleOrder {
}
class Vocher {
}
class balance {
}
class vocherTransation {
}
class AddItems {
}
class VoucherSetting {
}
class IdSetting {
}
class SelectedVocher {
}
// export class  Payment{
//     calcBalance(updateBalance:number):number{
//         return updateBalance;  
//     }
// }
//filter 


/***/ }),

/***/ "./src/app/Service/balance.service.ts":
/*!********************************************!*\
  !*** ./src/app/Service/balance.service.ts ***!
  \********************************************/
/*! exports provided: BalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceService", function() { return BalanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/add/observable/throw.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/app-error */ "./src/app/common/app-error.ts");












let BalanceService = class BalanceService {
    constructor(db) {
        this.db = db;
        this.balanceCollectionList = db.collection('balance');
    }
    create(balance) {
        return this.balanceCollectionList.add(balance)
            .catch(this.handleError);
    }
    getBalanceByItemId(itemId) {
        const lookupObject = this.db.collection('balance', ref => ref.where('itemId', '==', itemId)).snapshotChanges();
        this.balanceList = lookupObject.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        }))).catch(this.handleError);
        return this.balanceList;
    }
    // getBalanceById(id:string){
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
    getAllBalance() {
        this.balanceList = this.balanceCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        })).catch(this.handleError);
        return this.balanceList;
    }
    updateBalance(balance, id) {
        return this.balanceCollectionList.doc(id).update(balance)
            .catch(this.handleError);
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_9__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_10__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_11__["AppError"](error));
    }
};
BalanceService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
BalanceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BalanceService);



/***/ }),

/***/ "./src/app/Service/catagory.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Service/catagory.service.ts ***!
  \*********************************************/
/*! exports provided: CatagoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatagoryService", function() { return CatagoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "./src/app/common/app-error.ts");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/not-found-error */ "./src/app/common/not-found-error.ts");








let CatagoryService = class CatagoryService {
    constructor(db) {
        this.lookUpCategoryCollectionList = db.collection('LookupCatagory');
    }
    create(LookupCatagory) {
        return this.lookUpCategoryCollectionList.add(LookupCatagory).catch(this.handleError);
    }
    getAllLookUpCategory() {
        this.lookUpCategoryList = this.lookUpCategoryCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.lookUpCategoryList;
    }
    getCategory(id) {
        return this.lookUpCategoryCollectionList.doc(id).valueChanges();
    }
    updateCategory(categoryObj, id) {
        return this.lookUpCategoryCollectionList.doc(id).update(categoryObj)
            .catch(this.handleError);
    }
    addCategory(categoryObj) {
        return this.lookUpCategoryCollectionList.add(categoryObj)
            .catch(this.handleError);
    }
    removeCategory(id) {
        return this.lookUpCategoryCollectionList.doc(id).delete()
            .catch(this.handleError);
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
    }
};
CatagoryService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CatagoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CatagoryService);



/***/ }),

/***/ "./src/app/Service/customer.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Service/customer.service.ts ***!
  \*********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




let CustomerService = class CustomerService {
    //db: any;
    constructor(db) {
        this.db = db;
        this.customerCollectionList = db.collection('Customer');
    }
    create(Customer) {
        return this.customerCollectionList.add(Customer);
        //return this.db.list('/Category').push(Category);
    }
    getAllCustomer() {
        this.customersList = this.customerCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.customersList;
    }
    getUpdateBalance(id) {
        const customerObj = this.db.collection('Customer', ref => ref.where('type', '==', id)).snapshotChanges();
        this.customersList = customerObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.customersList;
    }
    updateCustomer(customerObj, id) {
        return this.customerCollectionList.doc(id).update(customerObj);
    }
    getCategory(id) {
        return this.customerCollectionList.doc(id).valueChanges();
    }
    addCategory(Category) {
        return this.customerCollectionList.add(Category);
    }
    removeCategory(id) {
        return this.customerCollectionList.doc(id).delete();
    }
};
CustomerService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CustomerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ "./src/app/Service/id-setting.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Service/id-setting.service.ts ***!
  \***********************************************/
/*! exports provided: IdSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdSettingService", function() { return IdSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




let IdSettingService = class IdSettingService {
    constructor(db) {
        this.db = db;
        this.idSettingCollectionList = db.collection('IdSetting');
    }
    create(idSetting) {
        return this.idSettingCollectionList.add(idSetting);
    }
    getIDSetting(id) {
        const idSettingObj = this.db.collection('IdSetting', ref => ref.where('voucherTypeId', '==', id)).snapshotChanges();
        this.idSettingList = idSettingObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.idSettingList;
    }
    getAllIdSetting() {
        this.idSettingList = this.idSettingCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.idSettingList;
    }
    getID(id) {
        return this.idSettingCollectionList.doc(id).valueChanges();
    }
    updateIdSetting(IdSettings, id) {
        return this.idSettingCollectionList.doc(id).update(IdSettings);
    }
    removeIdSetting(id) {
        return this.idSettingCollectionList.doc(id).delete();
    }
};
IdSettingService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
IdSettingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IdSettingService);



/***/ }),

/***/ "./src/app/Service/item-category.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Service/item-category.service.ts ***!
  \**************************************************/
/*! exports provided: ItemCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCategoryService", function() { return ItemCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "./src/app/common/app-error.ts");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/not-found-error */ "./src/app/common/not-found-error.ts");








let ItemCategoryService = class ItemCategoryService {
    constructor(db) {
        this.itemCategoryCollectionList = db.collection('ItemCategory');
    }
    create(ItemCategory) {
        return this.itemCategoryCollectionList.add(ItemCategory)
            .catch(this.handleError);
    }
    getAllItemCategories() {
        this.categorysList = this.itemCategoryCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.categorysList;
    }
    getItemCategory(id) {
        return this.itemCategoryCollectionList.doc(id).valueChanges();
    }
    updateItemCategory(itemCategoryObj, id) {
        return this.itemCategoryCollectionList.doc(id).update(itemCategoryObj)
            .catch(this.handleError);
    }
    removeCategory(id) {
        return this.itemCategoryCollectionList.doc(id).delete()
            .catch(this.handleError);
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
    }
};
ItemCategoryService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ItemCategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ItemCategoryService);



/***/ }),

/***/ "./src/app/Service/items.service.ts":
/*!******************************************!*\
  !*** ./src/app/Service/items.service.ts ***!
  \******************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




let ItemsService = class ItemsService {
    constructor(db) {
        this.db = db;
        this.itemCollectionList = db.collection('Items');
    }
    getItemList() {
        //return this.http.get(environment.apiURL+'/Item').toPromise();
    }
    create(Category) {
        let values = this.itemCollectionList.add(Category)
            .then(function (docRef) {
            let id = docRef.id;
            // this.keyId =id;
            console.log(id);
            // return id;
        });
        return values;
    }
    getBalanceByItemId(id) {
        const lookUpObj = this.db.collection('Items', ref => ref.where('id', '==', id)).snapshotChanges();
        this.balanceList = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.balanceList;
    }
    getItemByLookup(selectedLookup) {
        const lookUpObj = this.db.collection('Items', ref => ref.where('type', '==', selectedLookup)).snapshotChanges();
        this.itemsList = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.itemsList;
    }
    getItemByID(id) {
        const lookUpObj = this.db.collection('Items', ref => ref.where('type', '==', id)).snapshotChanges();
        this.itemsList = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.itemsList;
    }
    getItemByStoreID(storeid) {
        const lookUpObj = this.db.collection('Items', ref => ref.where('storeid', '==', storeid)).snapshotChanges();
        this.itemsList = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.itemsList;
    }
    getAllItem() {
        this.itemsList = this.itemCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.itemsList;
    }
    getAllItemKEY(Quantity, storeid, name, amhricName, price) {
        const lookUpObj = this.db.collection('Items', ref => ref.where('storeid', '==', storeid)
            .where('Quantity', '==', Quantity)
            .where('name', '==', name)
            .where('price', '==', price)
            .where('AmaricName', '==', amhricName)).snapshotChanges();
        this.itemsList = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.itemsList;
    }
    getItem(id) {
        return this.itemCollectionList.doc(id).valueChanges();
    }
    updateItem(Item, id) {
        return this.itemCollectionList.doc(id).update(Item);
    }
    addItem(Item) {
        return this.itemCollectionList.add(Item);
    }
    removeItems(id) {
        return this.itemCollectionList.doc(id).delete();
    }
};
ItemsService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ItemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ItemsService);



/***/ }),

/***/ "./src/app/Service/line-items.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Service/line-items.service.ts ***!
  \***********************************************/
/*! exports provided: LineItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineItemsService", function() { return LineItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_Tabels_tabels_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Tabels/tabels-list */ "./src/Tabels/tabels-list.ts");





let LineItemsService = class LineItemsService {
    constructor(db) {
        this.lineItemCollectionList = db.collection('LineItem');
    }
    create(LineItem) {
        return this.lineItemCollectionList.add(LineItem);
    }
    getAllLineItem() {
        this.lineItemList = this.lineItemCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.lineItemList;
    }
    updateLineItem(saleOrder, id) {
        return this.lineItemCollectionList.doc(id).update(src_Tabels_tabels_list__WEBPACK_IMPORTED_MODULE_4__["LineItem"]);
    }
    getLineItem(id) {
        return this.lineItemCollectionList.doc(id).valueChanges();
    }
    removeLineItem(id) {
        return this.lineItemCollectionList.doc(id).delete();
    }
};
LineItemsService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
LineItemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LineItemsService);



/***/ }),

/***/ "./src/app/Service/lookup-catagory.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Service/lookup-catagory.service.ts ***!
  \****************************************************/
/*! exports provided: LookupCatagoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupCatagoryService", function() { return LookupCatagoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




let LookupCatagoryService = class LookupCatagoryService {
    constructor(db) {
        this.db = db;
        this.lookupCatagoryCollectionList = db.collection('LookupCatagory');
    }
    create(Category) {
        return this.lookupCatagoryCollectionList.add(Category);
        //return this.db.list('/Category').push(Category);
    }
    getAllLookupCatagory() {
        this.lookupCatagoryList = this.lookupCatagoryCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.lookupCatagoryList;
    }
    getLookupByType(id) {
        const lookUpObject = this.db.collection('LookupCatagory', ref => ref.where('type', '==', id)).snapshotChanges();
        this.lookupCatagoryList = lookUpObject.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.lookupCatagoryList;
    }
    getLookUpByName(name) {
        const lookUpObject = this.db.collection('lookup', ref => ref.where('name', '==', name)).snapshotChanges();
        this.lookupCatagoryList = lookUpObject.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.lookupCatagoryList;
    }
    getLookUpCatagory(id) {
        return this.lookupCatagoryCollectionList.doc(id).valueChanges();
    }
    updateLookUpCatagory(lookupCatagoryObj, id) {
        return this.lookupCatagoryCollectionList.doc(id).update(lookupCatagoryObj);
    }
    removeLookupCatagory(id) {
        return this.lookupCatagoryCollectionList.doc(id).delete();
    }
};
LookupCatagoryService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
LookupCatagoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LookupCatagoryService);



/***/ }),

/***/ "./src/app/Service/vendors.service.ts":
/*!********************************************!*\
  !*** ./src/app/Service/vendors.service.ts ***!
  \********************************************/
/*! exports provided: VendorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsService", function() { return VendorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "./src/app/common/app-error.ts");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/not-found-error */ "./src/app/common/not-found-error.ts");








let VendorsService = class VendorsService {
    //readonly APIUrl="http://localhost:58089/api";
    constructor(db) {
        this.db = db;
        this.vendorCollectionList = db.collection('Vendors');
    }
    create(Vendors) {
        return this.vendorCollectionList.add(Vendors);
    }
    // addVendor(val:Object):Observable<Object>{
    //   return this.http.post(this.APIUrl+'/Vendor',val);
    //   }
    //   getAllVendors():Observable<any[]>{
    //  return this.http.get<any>(this.APIUrl+'/Vendor');
    //   }
    getAllVendor() {
        this.vendorList = this.vendorCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.vendorList;
    }
    getVendorById(id) {
        const vendorObj = this.db.collection('Vendors', ref => ref.where('id', '==', id)).snapshotChanges();
        this.vendorList = vendorObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        }))).catch(this.handleError);
        return this.vendorList;
    }
    updateVendor(Vendors, id) {
        return this.vendorCollectionList.doc(id).update(Vendors);
    }
    getVendor(id) {
        return this.vendorCollectionList.doc(id).valueChanges();
    }
    addSupplier(vendors) {
        return this.vendorCollectionList.add(vendors);
    }
    removeVendor(id) {
        return this.vendorCollectionList.doc(id).delete();
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
    }
};
VendorsService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
VendorsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VendorsService);



/***/ }),

/***/ "./src/app/line-items/line-items.page.scss":
/*!*************************************************!*\
  !*** ./src/app/line-items/line-items.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmUtaXRlbXMvbGluZS1pdGVtcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/line-items/line-items.page.ts":
/*!***********************************************!*\
  !*** ./src/app/line-items/line-items.page.ts ***!
  \***********************************************/
/*! exports provided: LineItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineItemsPage", function() { return LineItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _Service_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/items.service */ "./src/app/Service/items.service.ts");
/* harmony import */ var _Service_purchase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/purchase.service */ "./src/app/Service/purchase.service.ts");





let LineItemsPage = class LineItemsPage {
    constructor(data, dialogRef, itemService, purchaseService, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.itemService = itemService;
        this.purchaseService = purchaseService;
        this.dialog = dialog;
        this.isValid = true;
    }
    ngOnInit() {
        //this.purchaseService.getItemList().subscribe(res=>this.itemList=res as Items[]);
        this.itemService.getAllItem().subscribe(res => this.itemList = res);
        if (this.data.orderItemIndex == null)
            this.formData = {
                LineItemID: null,
                OrderID: this.data.OrderID,
                ItemID: 0,
                vocherId: null,
                taxAmount: 0,
                ItemName: '',
                Price: 0,
                Quantity: 0,
                subTotal: 0
            };
        else
            this.formData = Object.assign({}, this.purchaseService.orderItems[this.data.orderItemIndex]);
    }
    updatePrice(ctrl) {
        if (ctrl.selectedIndex == 0) {
            this.formData.Price = 0;
            this.formData.ItemName = '';
        }
        else {
            this.formData.Price = this.itemList[ctrl.selectedIndex - 1].price;
            this.formData.ItemName = this.itemList[ctrl.selectedIndex - 1].AmaricName;
        }
        this.updateTotal();
    }
    updateTotal() {
        this.formData.subTotal = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));
    }
    onSubmit(form) {
        if (this.validateForm(form.value)) {
            if (this.data.orderItemIndex == null)
                this.purchaseService.orderItems.push(form.value);
            else
                this.purchaseService.orderItems[this.data.orderItemIndex] = form.value;
            this.dialogRef.close();
        }
    }
    validateForm(formData) {
        this.isValid = true;
        if (formData.ItemID == 0)
            this.isValid = false;
        else if (formData.Quantity == 0)
            this.isValid = false;
        return this.isValid;
    }
    close() {
        this.dialogRef.close();
    }
};
LineItemsPage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _Service_items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"] },
    { type: _Service_purchase_service__WEBPACK_IMPORTED_MODULE_4__["PurchaseService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
LineItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-line-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./line-items.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/line-items/line-items.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./line-items.page.scss */ "./src/app/line-items/line-items.page.scss")).default]
    })
], LineItemsPage);



/***/ }),

/***/ "./src/app/payment-details/payment-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-container {\n  display: block;\n  padding: 11px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n\n.mat-dialog-container {\n  box-shadow: 2px 11px 7px 0px rgba(199, 195, 195, 0.2), 0px 17px 38px 3px rgba(65, 88, 150, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #dee2e6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n  background-color: #333;\n  width: 611px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0lBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCAxMXB4IDdweCAwcHggcmdiKDE5OSAxOTUgMTk1IC8gMjAlKSwgMHB4IDE3cHggMzhweCAzcHggcmdiKDY1IDg4IDE1MCAvIDE0JSksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGJhY2tncm91bmQ6ICNkZWUyZTY7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG59XHJcbmhyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgd2lkdGg6IDYxMXB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/payment-details/payment-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.ts ***!
  \*********************************************************/
/*! exports provided: PaymentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPage", function() { return PaymentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/customer.service */ "./src/app/Service/customer.service.ts");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/shared.service */ "./src/app/Service/shared.service.ts");
/* harmony import */ var _Service_vocher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/vocher.service */ "./src/app/Service/vocher.service.ts");







let PaymentDetailsPage = class PaymentDetailsPage {
    constructor(voucherService, modalController, sharedService, fb, customerService) {
        this.voucherService = voucherService;
        this.modalController = modalController;
        this.sharedService = sharedService;
        this.fb = fb;
        this.customerService = customerService;
        this.regform = this.fb.group({});
    }
    ngOnInit() {
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
    getAllVoucher() {
        if (this.vendorId != null) {
            this.voucherService.getVocherByVendorID(this.vendorId).subscribe(res => {
                this.listOfVoucher = res;
                //console.log(res)
            });
        }
        else {
            this.voucherService.getVocherByCustomerID(this.customerId).subscribe(res => {
                this.listOfVoucher = res;
                //console.log(res)
            });
        }
    }
    updatePayment() {
        this.payment = parseFloat((this.regform.get("payment").value));
        this.updateBalancePayment = this.balance - this.payment;
    }
    close() {
        this.modalController.dismiss();
    }
    submitPayment() {
        let payment = {
            updateBalance: this.updateBalancePayment,
            paymnetBalance: this.payment
        };
        this.sharedService.balance.next(payment);
        this.modalController.dismiss();
    }
};
PaymentDetailsPage.ctorParameters = () => [
    { type: _Service_vocher_service__WEBPACK_IMPORTED_MODULE_6__["VocherService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _Service_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }
];
PaymentDetailsPage.propDecorators = {
    balance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    vendorId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PaymentDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-details/payment-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-details.page.scss */ "./src/app/payment-details/payment-details.page.scss")).default]
    })
], PaymentDetailsPage);



/***/ }),

/***/ "./src/app/vendors/vendor-modal/vendor-modal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/vendors/vendor-modal/vendor-modal.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcnMvdmVuZG9yLW1vZGFsL3ZlbmRvci1tb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/vendors/vendor-modal/vendor-modal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/vendors/vendor-modal/vendor-modal.page.ts ***!
  \***********************************************************/
/*! exports provided: VendorModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorModalPage", function() { return VendorModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_Service_vendors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/vendors.service */ "./src/app/Service/vendors.service.ts");





let VendorModalPage = class VendorModalPage {
    constructor(fb, vendorService, alertController, modalController) {
        this.fb = fb;
        this.vendorService = vendorService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.regform = this.fb.group({});
        this.editMode = false;
    }
    ngOnInit() {
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
        }
        else {
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
    SaveVender() {
        if (this.regform.valid) {
            if (!this.vendorId) {
                this.vendorService.create(this.regform.value);
                this.presentAlert("Add Vendor Sucessfully");
                this.modalController.dismiss();
            }
            else {
                this.vendorService.updateVendor(this.regform.value, this.vendorId);
                this.presentAlert("Update Vendor Sucessfully");
                this.modalController.dismiss();
            }
            this.regform.reset();
            this.vendorId = "";
        }
        else {
            this.presentAlert("Please enter all fields");
        }
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Vendors',
                message: message,
                buttons: ['ok']
            });
            yield alert.present();
        });
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
VendorModalPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_Service_vendors_service__WEBPACK_IMPORTED_MODULE_4__["VendorsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
VendorModalPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
VendorModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vendor-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/vendor-modal/vendor-modal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vendor-modal.page.scss */ "./src/app/vendors/vendor-modal/vendor-modal.page.scss")).default]
    })
], VendorModalPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map