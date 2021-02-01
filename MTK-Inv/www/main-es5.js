(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-card>\n          <img src=\"data:image/png;base64,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\">\n          <ion-card-header>\n            <ion-card-subtitle style=\"text-align: center;\">well come</ion-card-subtitle>\n            \n          </ion-card-header>\n\n        </ion-card>\n        <ion-list id=\"inbox-list\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        \n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'catagory',
        pathMatch: 'full'
      }, {
        path: 'catagory',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | catagory-catagory-module */
          [__webpack_require__.e("default~catagory-catagory-module~items-items-module~lookup-lookup-module"), __webpack_require__.e("default~catagory-catagory-module~items-items-module"), __webpack_require__.e("catagory-catagory-module")]).then(__webpack_require__.bind(null,
          /*! ./catagory/catagory.module */
          "./src/app/catagory/catagory.module.ts")).then(function (m) {
            return m.CatagoryPageModule;
          });
        }
      }, {
        path: 'lookup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lookup-lookup-module */
          [__webpack_require__.e("default~catagory-catagory-module~items-items-module~lookup-lookup-module"), __webpack_require__.e("common"), __webpack_require__.e("lookup-lookup-module")]).then(__webpack_require__.bind(null,
          /*! ./lookup/lookup.module */
          "./src/app/lookup/lookup.module.ts")).then(function (m) {
            return m.LookupPageModule;
          });
        }
      }, {
        path: 'items',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | items-items-module */
          [__webpack_require__.e("default~catagory-catagory-module~items-items-module~lookup-lookup-module"), __webpack_require__.e("default~catagory-catagory-module~items-items-module"), __webpack_require__.e("common"), __webpack_require__.e("items-items-module")]).then(__webpack_require__.bind(null,
          /*! ./items/items.module */
          "./src/app/items/items.module.ts")).then(function (m) {
            return m.ItemsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.selectedIndex = 0;
          this.appPages = [{
            title: 'Catagory',
            url: '/catagory',
            icon: 'airplane'
          }, {
            title: 'lookup',
            url: '/lookup',
            icon: 'paper-plane'
          }, {
            title: 'Items',
            url: '/items',
            icon: 'heart'
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var path = window.location.pathname.split('folder/')[1];

            if (path !== undefined) {
              this.selectedIndex = this.appPages.findIndex(function (page) {
                return page.title.toLowerCase() === path.toLowerCase();
              });
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angularfire2 */
      "./node_modules/angularfire2/index.js");
      /* harmony import */


      var angularfire2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var angularfire2_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angularfire2/database */
      "./node_modules/angularfire2/database/index.js");
      /* harmony import */


      var angularfire2_database__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_13__);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase), angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyCxeu2buINMbW57jOkt4Ui7SAa7cbCzFLE",
          authDomain: "mtk-inv.firebaseapp.com",
          databaseURL: "https://mtk-inv.firebaseio.com",
          projectId: "mtk-inv",
          storageBucket: "mtk-inv.appspot.com",
          messagingSenderId: "753314459040",
          appId: "1:753314459040:web:ebcea30401d9cadcc048c5"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\dell\Documents\invoentry\MTK-Inv\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map