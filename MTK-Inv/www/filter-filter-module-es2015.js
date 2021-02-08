(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filter-filter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Filter Example</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<dx-data-grid\n    id=\"gridContainer\"\n    [dataSource]=\"listOfvendors\"\n    keyExpr=\"id\"\n    [showBorders]=\"true\"\n    [focusedRowEnabled]=\"true\"\n    [columnHidingEnabled]=\"true\">\n\n    <dxo-editing\n        [allowUpdating]=\"true\"\n        [allowDeleting]=\"true\"\n        [selectTextOnEditStart]=\"true\"\n        [useIcons]=\"true\">\n    </dxo-editing>\n    <dxo-editing [allowAdding]=\"true\" [allowUpdating]=\"true\" mode=\"batch\"></dxo-editing>\n    <dxo-grouping [contextMenuEnabled]=\"true\" expandMode=\"rowClick\"></dxo-grouping>\n    <dxo-group-panel [visible]=\"true\" emptyPanelText=\"Use the context menu of header columns to group data\"></dxo-group-panel>\n    <dxo-pager\n        [allowedPageSizes]=\"[5, 8, 15, 30]\"\n        [showInfo]=\"true\"\n        [showNavigationButtons]=\"true\"\n        [showPageSizeSelector]=\"true\"\n        [visible]=\"true\">\n    </dxo-pager>\n    <dxo-paging [pageSize]=\"8\"></dxo-paging>\n    <dxo-column-chooser [enabled]=\"true\" mode=\"select\"></dxo-column-chooser>\n    <dxo-header-filter [visible]=\"true\">\n    </dxo-header-filter>\n\n    <dxo-filter-panel [visible]=\"true\">\n    </dxo-filter-panel>\n\n    <dxo-filter-row [visible]=\"true\">\n    </dxo-filter-row>\n\n    <dxo-paging [pageSize]=\"10\">\n    </dxo-paging>\n\n    <dxo-pager\n        [allowedPageSizes]=\"[5, 10]\"\n        [showPageSizeSelector]=\"true\"\n        [showNavigationButtons]=\"true\">\n    </dxo-pager>\n    <dxi-column [allowGrouping]=\"false\" dataField=\"vendorName\" [width]=\"130\" caption=\"Vendor Name\"></dxi-column>\n    <dxi-column dataField=\"address\" caption=\"Address\"></dxi-column>\n    <dxi-column dataField=\"contact\" caption=\"Contact\"></dxi-column>\n    <dxi-column dataField=\"phonenumber\" caption=\"Phone Number\"></dxi-column>\n    <dxi-column dataField=\"email\" caption=\"Email\"></dxi-column>\n    <dxi-column dataField=\"website\" caption=\"Web site\"></dxi-column>>\n\n    <!-- <dxi-column dataField=\"StateID\"\n        caption=\"State\">\n        <dxo-lookup\n            [dataSource]=\"states\"\n            valueExpr=\"ID\"\n            displayExpr=\"Name\">\n        </dxo-lookup>\n    </dxi-column> -->\n\n</dx-data-grid>\n<!-- \n  <dx-data-grid \n  id=\"gridContainer\" \n  [dataSource]=\"listOfvendors\"\n  [showBorders]=\"true\">\n  <dxo-filter-row \n      [visible]=\"showFilterRow\" \n      [applyFilter]=\"currentFilter\"></dxo-filter-row>\n  <dxo-header-filter \n      [visible]=\"showHeaderFilter\"></dxo-header-filter>\n  <dxo-search-panel \n      [visible]=\"true\" \n      [width]=\"240\" \n      placeholder=\"Search...\"></dxo-search-panel>\n  <dxi-column \n      dataField=\"vendorName\" \n      [width]=\"140\" \n      caption=\"Vendor Name\">\n      <dxo-header-filter \n          [groupInterval]=\"10000\"></dxo-header-filter>\n  </dxi-column>\n  <dxi-column \n      dataField=\"contact\" \n      alignment=\"right\" \n      [width]=\"120\"\n      [calculateFilterExpression]=\"calculateFilterExpression\">\n      <dxo-header-filter \n          [dataSource]=\"orderHeaderFilter\"></dxo-header-filter>\n  </dxi-column>\n  <dxi-column \n      dataField=\"address\" \n      alignment=\"right\" \n      dataType=\"datetime\"\n      format=\"M/d/yyyy, HH:mm\"\n      [width]=\"180\"></dxi-column>\n  <dxi-column \n      dataField=\"phonenumber\" \n      alignment=\"right\" \n      format=\"number\"\n      [editorOptions]=\"{ format: 'currency', showClearButton: true }\">\n      <dxo-header-filter \n          [dataSource]=\"saleAmountHeaderFilter\"></dxo-header-filter>\n  </dxi-column>\n  <dxi-column dataField=\"email\"></dxi-column>\n  <!-- <dxi-column \n      dataField=\"CustomerStoreCity\" \n      caption=\"City\">\n      <dxo-header-filter [allowSearch]=\"true\"></dxo-header-filter>\n  </dxi-column> \n</dx-data-grid> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/common/app-error.ts":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    constructor(originalError) {
        this.originalError = originalError;
    }
}


/***/ }),

/***/ "./src/app/common/bad-input.ts":
/*!*************************************!*\
  !*** ./src/app/common/bad-input.ts ***!
  \*************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");

class BadInput extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "./src/app/common/not-found-error.ts":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");

class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "./src/app/filter/filter-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/filter/filter-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FilterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageRoutingModule", function() { return FilterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.page */ "./src/app/filter/filter.page.ts");




const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]
    }
];
let FilterPageRoutingModule = class FilterPageRoutingModule {
};
FilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FilterPageRoutingModule);



/***/ }),

/***/ "./src/app/filter/filter.module.ts":
/*!*****************************************!*\
  !*** ./src/app/filter/filter.module.ts ***!
  \*****************************************/
/*! exports provided: FilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-routing.module */ "./src/app/filter/filter-routing.module.ts");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter.page */ "./src/app/filter/filter.page.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");








let FilterPageModule = class FilterPageModule {
};
FilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterPageRoutingModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDataGridModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxSelectBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxCheckBoxModule"]
        ],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_6__["FilterPage"]]
    })
], FilterPageModule);



/***/ }),

/***/ "./src/app/filter/filter.page.scss":
/*!*****************************************!*\
  !*** ./src/app/filter/filter.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #gridContainer {\n  height: 440px;\n}\n\n::ng-deep .options {\n  padding: 20px;\n  margin-top: 20px;\n  background-color: rgba(191, 191, 191, 0.15);\n}\n\n::ng-deep .caption {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n::ng-deep .option {\n  margin-top: 10px;\n}\n\n::ng-deep .option > span {\n  margin-right: 10px;\n}\n\n::ng-deep .option > .dx-selectbox {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyL2ZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7QUFLSjs7QUFIQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci9maWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwICNncmlkQ29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDQwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5vcHRpb25zIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTEsIDE5MSwgMTkxLCAwLjE1KTtcclxufVxyXG46Om5nLWRlZXAgLmNhcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG46Om5nLWRlZXAgLm9wdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbjo6bmctZGVlcCAub3B0aW9uID4gc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5vcHRpb24gPiAuZHgtc2VsZWN0Ym94IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/filter/filter.page.ts":
/*!***************************************!*\
  !*** ./src/app/filter/filter.page.ts ***!
  \***************************************/
/*! exports provided: FilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPage", function() { return FilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var _Service_vendors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/vendors.service */ "./src/app/Service/vendors.service.ts");
var FilterPage_1;




let FilterPage = FilterPage_1 = class FilterPage {
    constructor(vendorService) {
        this.vendorService = vendorService;
        // this.vendors = service.getOrders();
        this.vendorService.getAllVendor().subscribe(result => {
            if (result.length > 0) {
                this.listOfvendors = result;
                // this.filteredVendors=result;
            }
            else {
                //this.AlertInternet();
            }
        });
        this.showFilterRow = true;
        this.showHeaderFilter = true;
        this.applyFilterTypes = [{
                key: "auto",
                name: "Immediately"
            }, {
                key: "onClick",
                name: "On Button Click"
            }];
        this.saleAmountHeaderFilter = [{
                text: "Less than $3000",
                value: ["SaleAmount", "<", 3000]
            }, {
                text: "$3000 - $5000",
                value: [
                    ["SaleAmount", ">=", 3000],
                    ["SaleAmount", "<", 5000]
                ]
            }, {
                text: "$5000 - $10000",
                value: [
                    ["SaleAmount", ">=", 5000],
                    ["SaleAmount", "<", 10000]
                ]
            }, {
                text: "$10000 - $20000",
                value: [
                    ["SaleAmount", ">=", 10000],
                    ["SaleAmount", "<", 20000]
                ]
            }, {
                text: "Greater than $20000",
                value: ["SaleAmount", ">=", 20000]
            }];
        this.currentFilter = this.applyFilterTypes[0].key;
        this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
    }
    static getOrderDay(rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    }
    calculateFilterExpression(value, selectedFilterOperations, target) {
        let column = this;
        if (target === "headerFilter" && value === "weekends") {
            return [[FilterPage_1.getOrderDay, "=", 0], "or", [FilterPage_1.getOrderDay, "=", 6]];
        }
        return column.defaultCalculateFilterExpression.apply(this, arguments);
    }
    orderHeaderFilter(data) {
        data.dataSource.postProcess = (results) => {
            results.push({
                text: "Weekends",
                value: "weekends"
            });
            return results;
        };
    }
    clearFilter() {
        this.dataGrid.instance.clearFilter();
    }
};
FilterPage.ctorParameters = () => [
    { type: _Service_vendors_service__WEBPACK_IMPORTED_MODULE_3__["VendorsService"] }
];
FilterPage.propDecorators = {
    dataGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"], { static: false },] }]
};
FilterPage = FilterPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        // providers: [ Service ],
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filter.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filter.page.scss */ "./src/app/filter/filter.page.scss")).default]
    })
], FilterPage);



/***/ })

}]);
//# sourceMappingURL=filter-filter-module-es2015.js.map