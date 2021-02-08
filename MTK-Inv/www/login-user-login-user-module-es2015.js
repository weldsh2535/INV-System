(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-user-login-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-user/login-user.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-user/login-user.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Login User</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-list>\n    <ion-item>\n      <ion-label>User Name  </ion-label>\n      <ion-input   formControlName=\"username\"></ion-input>\n      <span *ngIf=\"!regform.get('username').valid && regform.get('username').touched\" > Enter User Name </span> \n    </ion-item>\n  <ion-item>\n      <ion-label>Password </ion-label>\n      <ion-input   formControlName=\"password\"></ion-input>\n      <span *ngIf=\"!regform.get('password').valid && regform.get('password').touched\" > Enter Password </span> \n    </ion-item>\n    <ion-button class=\"btn btn-secondary\" expand=\"block\" (click)=\"Login()\"> Save </ion-button>\n   \n  </ion-list>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Service/login-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Service/login-service.service.ts ***!
  \**************************************************/
/*! exports provided: LoginServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginServiceService", function() { return LoginServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




let LoginServiceService = class LoginServiceService {
    constructor(db) {
        this.db = db;
        this.userloginCollectionList = db.collection('LoginUser');
    }
    UserLogin(UserLogin) {
        const profileList = this.db.collection('login', ref => ref.where('username', '==', UserLogin.password).where('Active', '==', true).where('username', '==', UserLogin.username)).snapshotChanges();
        this.uSerNameList = profileList.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.uSerNameList;
    }
    create(LoginUser) {
        return this.userloginCollectionList.add(LoginUser);
        //return this.db.list('/Category').push(Category);
    }
    updateLoginUser(LoginUser, id) {
        return this.userloginCollectionList.doc(id).update(LoginUser);
    }
};
LoginServiceService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
LoginServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginServiceService);



/***/ }),

/***/ "./src/app/login-user/login-user-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/login-user/login-user-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserPageRoutingModule", function() { return LoginUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-user.page */ "./src/app/login-user/login-user.page.ts");




const routes = [
    {
        path: '',
        component: _login_user_page__WEBPACK_IMPORTED_MODULE_3__["LoginUserPage"]
    }
];
let LoginUserPageRoutingModule = class LoginUserPageRoutingModule {
};
LoginUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginUserPageRoutingModule);



/***/ }),

/***/ "./src/app/login-user/login-user.module.ts":
/*!*************************************************!*\
  !*** ./src/app/login-user/login-user.module.ts ***!
  \*************************************************/
/*! exports provided: LoginUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserPageModule", function() { return LoginUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-user-routing.module */ "./src/app/login-user/login-user-routing.module.ts");
/* harmony import */ var _login_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-user.page */ "./src/app/login-user/login-user.page.ts");







let LoginUserPageModule = class LoginUserPageModule {
};
LoginUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginUserPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_login_user_page__WEBPACK_IMPORTED_MODULE_6__["LoginUserPage"]]
    })
], LoginUserPageModule);



/***/ }),

/***/ "./src/app/login-user/login-user.page.scss":
/*!*************************************************!*\
  !*** ./src/app/login-user/login-user.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: rgba(248, 248, 250, .96);\n}\nion-item h2 {\n  font-weight: bold;\n  font-size: 18px;\n  padding-top: 8px;\n}\nion-content {\n  --background: #f8f8fa;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 12px;\n}\n.more {\n  font-size: 12px;\n  color: #FB4E4E;\n}\n.title {\n  font-size: 16px;\n}\n.card {\n  margin: 0;\n  margin-right: 50px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n.category {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n}\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\nion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\nion-card-header ion-icon {\n  font-size: 60px;\n}\nion-card-header ion-card-title {\n  font-size: 22px;\n  font-weight: bolder;\n}\n.wrapper {\n  padding-bottom: 0;\n}\nion-badge {\n  padding: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tdXNlci9sb2dpbi11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0FBQ0o7QUFDSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ047QUFJRTtFQUNFLHFCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtBQURKO0FBSUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZKO0FBT0k7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSk47QUFPSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUxOO0FBUUk7RUFDRSxnQkFBQTtBQU5OO0FBWUk7RUFDRSxlQUFBO0FBVE47QUFZSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQVZOO0FBY0U7RUFDRSxpQkFBQTtBQVhKO0FBY0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQVhKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tdXNlci9sb2dpbi11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjUwLCAuOTYpO1xyXG4gIFxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY4ZmE7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAubW9yZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI0ZCNEU0RTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAuaW1nLXdyYXBwZXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjZjI5OTRhO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZTpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBwYWRkaW5nLXRvcDo2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJhZGdlIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/login-user/login-user.page.ts":
/*!***********************************************!*\
  !*** ./src/app/login-user/login-user.page.ts ***!
  \***********************************************/
/*! exports provided: LoginUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserPage", function() { return LoginUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_login_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/login-service.service */ "./src/app/Service/login-service.service.ts");





let LoginUserPage = class LoginUserPage {
    constructor(fb, platform, loginServiceService, alertController) {
        this.fb = fb;
        this.platform = platform;
        this.loginServiceService = loginServiceService;
        this.alertController = alertController;
        this.regform = this.fb.group({});
        this.usePicker = false;
    }
    ngOnInit() {
        this.regform = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
    }
    Login() {
        if (this.regform.valid) {
            if (!this.loginuserId) {
                this.loginServiceService.create(this.regform.value);
            }
            else {
                this.loginServiceService.updateLoginUser(this.regform.value, this.loginuserId);
            }
            this.regform.reset();
            this.loginuserId = "";
            this.presentAlert("Save Sucessfully");
        }
        else {
            this.presentAlert("plase enter all filds");
        }
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'User login',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginUserPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _Service_login_service_service__WEBPACK_IMPORTED_MODULE_4__["LoginServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
LoginUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-user/login-user.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-user.page.scss */ "./src/app/login-user/login-user.page.scss")).default]
    })
], LoginUserPage);



/***/ })

}]);
//# sourceMappingURL=login-user-login-user-module-es2015.js.map