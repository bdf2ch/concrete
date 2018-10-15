(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: routes, AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/authentication/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/authentication/authentication.component */ "./src/app/authentication/components/authentication/authentication.component.ts");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/authentication/guards/authentication.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"],
        canActivateChild: [
            _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]
        ],
        children: [
            {
                path: '',
                component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"]
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/authentication/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/authentication/authentication.component */ "./src/app/authentication/components/authentication/authentication.component.ts");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/authentication/guards/authentication.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticationRoutingModule"]
            ],
            declarations: [
                _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"],
            ],
            providers: [
                _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_5__["AuthenticationGuard"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/components/authentication/authentication.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/authentication/components/authentication/authentication.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/components/authentication/authentication.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/authentication/components/authentication/authentication.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/authentication/components/authentication/authentication.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/authentication/components/authentication/authentication.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent.prototype.ngOnInit = function () { };
    AuthenticationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/authentication/components/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.css */ "./src/app/authentication/components/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/sign-in/sign-in.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/authentication/components/sign-in/sign-in.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sign-in {\r\n  width: 400px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/authentication/components/sign-in/sign-in.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/components/sign-in/sign-in.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 h-100 d-flex justify-content-center align-items-center\">\r\n  <mat-card id=\"sign-in\">\r\n    <div mat-card-title>Авторизация</div>\r\n    <div>\r\n      <form [formGroup]=\"signInForm\">\r\n        <!-- START: Учетная запись -->\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Учетная запись</mat-label>\r\n          <input matInput placeholder=\"Введите учетную запись\" formControlName=\"account\" required>\r\n          <mat-error>Вы не ввели учетную запись</mat-error>\r\n        </mat-form-field>\r\n        <!-- END: Учетная запись -->\r\n\r\n        <!-- START: Пароль -->\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Пароль</mat-label>\r\n          <input matInput placeholder=\"Введите пароль\" formControlName=\"password\" required>\r\n          <mat-error>Вы не ввели пароль</mat-error>\r\n        </mat-form-field>\r\n        <!-- END: Пароль -->\r\n\r\n        <button mat-flat-button class=\"w-100\" [disabled]=\"signInForm.invalid || (session.isAuthorizationInProgress() | async) === true\" (click)=\"signIn()\">\r\n          <div class=\"d-flex justify-content-center align-items-center\"\r\n               *ngIf=\"session.isAuthorizationInProgress() | async\">\r\n            <mat-spinner diameter=\"20\" class=\"mr-3\"></mat-spinner>\r\n            Загрузка\r\n          </div>\r\n          <div class=\"text-center\" *ngIf=\"!(session.isAuthorizationInProgress() | async)\">Войти</div>\r\n        </button>\r\n      </form>\r\n\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/components/sign-in/sign-in.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/authentication/components/sign-in/sign-in.component.ts ***!
  \************************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = /** @class */ (function () {
    function SignInComponent(router, snackBar, session) {
        this.router = router;
        this.snackBar = snackBar;
        this.session = session;
        this.account = null;
        this.password = null;
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            account: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        this.session.signIn(this.signInForm.controls['account'].value, this.signInForm.controls['password'].value)
            .subscribe(function (user) {
            console.log(user);
            if (!user) {
                _this.snackBar.open('Пользователь не найден', 'Закрыть', {
                    duration: 2000,
                });
            }
            else {
                _this.router.navigate(['/machines']);
            }
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/authentication/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/authentication/components/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/authentication/guards/authentication.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/guards/authentication.guard.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(router, session) {
        this.router = router;
        this.session = session;
    }
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        if (this.session.getUser()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    AuthenticationGuard.prototype.canActivateChild = function (childRoute, state) {
        if (this.session.getUser()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    AuthenticationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map