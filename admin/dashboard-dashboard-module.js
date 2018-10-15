(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/components/dashboard/dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard/dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/components/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-auto\">\r\n        <span>Панель управления</span>\r\n      </div>\r\n      <div class=\"col d-flex justify-content-center\">\r\n        <button mat-flat-button class=\"mr-3\" routerLink=\"/\">\r\n          <div class=\"d-flex justify-content-center align-items-center\">\r\n            <mat-icon class=\"mr-2\">directions_car</mat-icon>\r\n            Спецтехника\r\n          </div>\r\n        </button>\r\n\r\n        <button mat-flat-button routerLink=\"/feedback\">\r\n          <div class=\"d-flex justify-content-center align-items-center\">\r\n            <mat-icon class=\"mr-2\">message</mat-icon>\r\n            Обратная связь\r\n          </div>\r\n        </button>\r\n      </div>\r\n      <div class=\"col-auto d-flex justify-content-end\" *ngIf=\"session.getUser() as user\">\r\n        <button mat-stroked-button color=\"accent\" [matMenuTriggerFor]=\"userMenu\">\r\n           {{ user?.firstName + ' ' + user?.lastName }}\r\n        </button>\r\n        <mat-menu #userMenu=\"matMenu\">\r\n          <button mat-menu-item (click)=\"signOut()\">Выход</button>\r\n        </mat-menu>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-toolbar>\r\n<router-outlet style=\"marrgin-top: -64px;\"></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, session) {
        this.router = router;
        this.session = session;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    /**
     * Завершение сессии пользователя
     */
    DashboardComponent.prototype.signOut = function () {
        this.session.signOut();
        this.router.navigate(['/signin']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/delete-feedback-dialog/delete-feedback-dialog.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/components/delete-feedback-dialog/delete-feedback-dialog.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/components/delete-feedback-dialog/delete-feedback-dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/delete-feedback-dialog/delete-feedback-dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Удаление сообщения</h5>\n<div class=\"container-fluid\">\n  <div class=\"row mb-2\">\n    <div class=\"col-12 text-center\">\n      Удалить сообщение?\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <button mat-flat-button color=\"primary\" class=\"w-100\" (click)=\"deleteMessage()\" [disabled]=\"feedback.deletingInProgress() | async\">Удалить</button>\n    </div>\n    <div class=\"col-6\">\n      <button mat-flat-button color=\"warn\" class=\"w-100\" (click)=\"cancel()\" [disabled]=\"feedback.deletingInProgress() | async\">Отмена</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/components/delete-feedback-dialog/delete-feedback-dialog.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/components/delete-feedback-dialog/delete-feedback-dialog.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DeleteFeedbackDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFeedbackDialogComponent", function() { return DeleteFeedbackDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/feedback.service */ "./src/app/dashboard/services/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DeleteFeedbackDialogComponent = /** @class */ (function () {
    function DeleteFeedbackDialogComponent(dialogRef, feedback, data) {
        this.dialogRef = dialogRef;
        this.feedback = feedback;
        this.data = data;
    }
    DeleteFeedbackDialogComponent.prototype.ngOnInit = function () { };
    DeleteFeedbackDialogComponent.prototype.deleteMessage = function () {
        var _this = this;
        console.log(this.data);
        this.feedback.deleteMessage(this.data.message)
            .subscribe(function () {
            _this.dialogRef.close();
            _this.feedback.fetchList().subscribe();
        });
    };
    DeleteFeedbackDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    DeleteFeedbackDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-feedback-dialog',
            template: __webpack_require__(/*! ./delete-feedback-dialog.component.html */ "./src/app/dashboard/components/delete-feedback-dialog/delete-feedback-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-feedback-dialog.component.css */ "./src/app/dashboard/components/delete-feedback-dialog/delete-feedback-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"], Object])
    ], DeleteFeedbackDialogComponent);
    return DeleteFeedbackDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/delete-machine-dialog/delete-machine-dialog.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/components/delete-machine-dialog/delete-machine-dialog.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/components/delete-machine-dialog/delete-machine-dialog.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/components/delete-machine-dialog/delete-machine-dialog.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Удаление спецтранспорта</h5>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row mb-2\">\r\n    <div class=\"col-12 text-center\">\r\n      Удалить {{data.machine.title}}?\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <button mat-flat-button color=\"primary\" class=\"w-100\" (click)=\"deleteMachine()\" [disabled]=\"machines.deletingInProgress() | async\">Удалить</button>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <button mat-flat-button color=\"warn\" class=\"w-100\" (click)=\"cancel()\" [disabled]=\"machines.deletingInProgress() | async\">Отмена</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/delete-machine-dialog/delete-machine-dialog.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/components/delete-machine-dialog/delete-machine-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DeleteMachineDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMachineDialogComponent", function() { return DeleteMachineDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/machines.service */ "./src/app/dashboard/services/machines.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DeleteMachineDialogComponent = /** @class */ (function () {
    function DeleteMachineDialogComponent(dialogRef, machines, data) {
        this.dialogRef = dialogRef;
        this.machines = machines;
        this.data = data;
    }
    DeleteMachineDialogComponent.prototype.ngOnInit = function () { };
    DeleteMachineDialogComponent.prototype.deleteMachine = function () {
        var _this = this;
        console.log(this.data);
        this.machines.deleteMachine(this.data.machine)
            .subscribe(function () {
            _this.dialogRef.close();
            _this.machines.fetchList().subscribe();
        });
    };
    DeleteMachineDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    DeleteMachineDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-machine-dialog',
            template: __webpack_require__(/*! ./delete-machine-dialog.component.html */ "./src/app/dashboard/components/delete-machine-dialog/delete-machine-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-machine-dialog.component.css */ "./src/app/dashboard/components/delete-machine-dialog/delete-machine-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_machines_service__WEBPACK_IMPORTED_MODULE_2__["MachinesService"], Object])
    ], DeleteMachineDialogComponent);
    return DeleteMachineDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/edit-machine-dialog/edit-machine-dialog.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/components/edit-machine-dialog/edit-machine-dialog.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/components/edit-machine-dialog/edit-machine-dialog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/components/edit-machine-dialog/edit-machine-dialog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"ьи-3\">Редактирование спецтранспорта</h4>\n<form [formGroup]=\"editMachineForm\">\n  <mat-form-field appearance=\"standard\" class=\"w-100\">\n    <mat-label>Наименование</mat-label>\n    <input matInput placeholder=\"Введите наименование\" formControlName=\"title\" required>\n    <mat-error>Вы не указали наименование спецтехники</mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"w-100\">\n    <mat-label>Описание</mat-label>\n    <textarea matInput placeholder=\"Введите описание\" formControlName=\"description\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"standard\" class=\"w-100\">\n    <mat-label>Стоимость</mat-label>\n    <input matInput placeholder=\"Введите стоимость\" formControlName=\"cost\" required>\n    <mat-error>Вы не указали стоимость спецтехники</mat-error>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"standard\" class=\"w-100\">\n    <mat-label>Стоимость аренды</mat-label>\n    <input matInput placeholder=\"Введите стоимость аренды\" formControlName=\"rent\" required>\n    <mat-error>Вы не указали стоимость аренды спецтехники</mat-error>\n  </mat-form-field>\n\n    <mat-slide-toggle formControlName=\"is_enabled\">Отображать</mat-slide-toggle>\n</form>\n\n<div class=\"d-flex mt-3\">\n  <div class=\"w-50 p-1\">\n    <button mat-flat-button color=\"primary\" class=\"w-100\" [disabled]=\"editMachineForm.invalid || editMachineForm.pristine || (machines.editingInProgress() | async)\" (click)=\"editMachine()\">Сохранить</button>\n  </div>\n  <div class=\"w-50 p-1\">\n    <button mat-flat-button color=\"warn\" class=\"w-100\" (click)=\"cancel()\">Отмена</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/components/edit-machine-dialog/edit-machine-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/components/edit-machine-dialog/edit-machine-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditMachineDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMachineDialogComponent", function() { return EditMachineDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/machines.service */ "./src/app/dashboard/services/machines.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_machine_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/machine.model */ "./src/app/dashboard/models/machine.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditMachineDialogComponent = /** @class */ (function () {
    function EditMachineDialogComponent(dialogRef, machines, data) {
        this.dialogRef = dialogRef;
        this.machines = machines;
        this.data = data;
        this.editMachineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.machine.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.machine.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.machine.cost, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            rent: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.machine.rent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            is_enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.machine.isEnabled)
        });
    }
    EditMachineDialogComponent.prototype.ngOnInit = function () { };
    EditMachineDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    EditMachineDialogComponent.prototype.editMachine = function () {
        var _this = this;
        var machine = new _models_machine_model__WEBPACK_IMPORTED_MODULE_4__["Machine"]({
            id: this.data.machine.id,
            title: this.editMachineForm.controls['title'].value,
            description: this.editMachineForm.controls['description'].value,
            cost: this.editMachineForm.controls['cost'].value,
            rent: this.editMachineForm.controls['rent'].value,
            is_enabled: this.editMachineForm.controls['is_enabled'].value === true ? 1 : 0,
            photo_url: ''
        });
        this.machines.editMachine(machine)
            .subscribe(function () {
            _this.cancel();
            _this.machines.fetchList().subscribe();
        });
    };
    EditMachineDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-machine-dialog',
            template: __webpack_require__(/*! ./edit-machine-dialog.component.html */ "./src/app/dashboard/components/edit-machine-dialog/edit-machine-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-machine-dialog.component.css */ "./src/app/dashboard/components/edit-machine-dialog/edit-machine-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_machines_service__WEBPACK_IMPORTED_MODULE_2__["MachinesService"], Object])
    ], EditMachineDialogComponent);
    return EditMachineDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/feedback/feedback.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/components/feedback/feedback.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".id-column {\r\n  width: 80px;\r\n}\r\n\r\n.name-column {\r\n\r\n}\r\n\r\n.email-column {}\r\n\r\n.message-column {}\r\n\r\n.date-created-column {\r\n  width: 150px;\r\n}\r\n\r\n.controls-column {\r\n  width: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/feedback/feedback.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/feedback/feedback.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100 d-flex\">\r\n  <div class=\"d-flex justify-content-center align-items-center h-100 w-100\" *ngIf=\"feedbackService.fetchingInProgress() | async\">\r\n    <mat-spinner></mat-spinner>\r\n  </div>\r\n\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z18 m-3 w-100\" *ngIf=\"!(feedbackService.fetchingInProgress() | async)\">\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"id-column\"> # </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"id-column\"> {{element.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"name-column\"> Имя </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"name-column\"> {{element.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"email-column\"> E-mail </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"email-column\"> {{element.email}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"message\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"message-column\"> Сообщение </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"message-column\"> {{element.message}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"dateCreated\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"date-created-column\"> Дата отправки </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"date-created-column\"> {{element.dateCreated | date:'dd.MM:yyyy в hh:mm'}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"controls\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"controls-column\"></th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"controls-column\">\r\n          <button mat-icon-button matTooltip=\"Удалить сообщение\" matTooltipPosition=\"above\" (click)=\"openDeleteMessageDialog(element)\">\r\n            <mat-icon color=\"primary\">delete</mat-icon>\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/feedback/feedback.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/feedback/feedback.component.ts ***!
  \*********************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resources_feedback_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources/feedback.datasource */ "./src/app/dashboard/resources/feedback.datasource.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/feedback.service */ "./src/app/dashboard/services/feedback.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_feedback_dialog_delete_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-feedback-dialog/delete-feedback-dialog.component */ "./src/app/dashboard/components/delete-feedback-dialog/delete-feedback-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(dialog, feedbackService) {
        this.dialog = dialog;
        this.feedbackService = feedbackService;
        this.displayedColumns = ['id', 'name', 'email', 'message', 'dateCreated', 'controls'];
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.dataSource = new _resources_feedback_datasource__WEBPACK_IMPORTED_MODULE_1__["FeedbackDataSource"](this.feedbackService);
        // this.dataSource.loadFeedback();
    };
    FeedbackComponent.prototype.openDeleteMessageDialog = function (message) {
        this.dialog.open(_delete_feedback_dialog_delete_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteFeedbackDialogComponent"], {
            width: '400px',
            data: {
                message: message
            }
        });
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/dashboard/components/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/dashboard/components/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/machines/machines.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/components/machines/machines.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#add-machine-button {\r\n  display: block;\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/machines/machines.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/machines/machines.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-flex p-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-sm-12 col-md-6 col-lg-3  mb-3\" *ngFor=\"let machine of machines.getList() | async\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title><h4>{{machine.title}}</h4></mat-card-title>\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"../{{machine.photo}}\">\r\n        <mat-card-content>\r\n          <p>\r\n            {{ machine.description }}\r\n          </p>\r\n          <div><strong>Стоимость:</strong>&nbsp; {{machine.cost}}</div>\r\n          <div><strong>Аренда:</strong>&nbsp; {{ machine.rent }}</div>\r\n        </mat-card-content>\r\n        <mat-card-actions class=\"d-flex justify-content-end\">\r\n          <button mat-icon-button class=\"mr-2\" color=\"primary\" matTooltip=\"Загрузить изображение\" matTooltipPosition=\"above\" (click)=\"openUploadPhotoDialog(machine)\">\r\n            <mat-icon>add_a_photo</mat-icon>\r\n          </button>\r\n          <button mat-icon-button class=\"mr-2\" color=\"primary\" matTooltip=\"Редактировать\" matTooltipPosition=\"above\" (click)=\"openEditMachineDialog(machine)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button color=\"primary\" matTooltip=\"Удалить\" matTooltipPosition=\"above\" (click)=\"openDeleteMachineDialog(machine)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<button mat-fab color=\"accent\" id=\"add-machine-button\" matTooltip=\"Добавить спецтранспорт\" matTooltipPosition=\"left\" (click)=\"openNewMachineDialog()\">\r\n  <mat-icon>add</mat-icon>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/machines/machines.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/machines/machines.component.ts ***!
  \*********************************************************************/
/*! exports provided: MachinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesComponent", function() { return MachinesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_machine_dialog_new_machine_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-machine-dialog/new-machine-dialog.component */ "./src/app/dashboard/components/new-machine-dialog/new-machine-dialog.component.ts");
/* harmony import */ var _services_machines_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/machines.service */ "./src/app/dashboard/services/machines.service.ts");
/* harmony import */ var _delete_machine_dialog_delete_machine_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-machine-dialog/delete-machine-dialog.component */ "./src/app/dashboard/components/delete-machine-dialog/delete-machine-dialog.component.ts");
/* harmony import */ var _upload_photo_dialog_upload_photo_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../upload-photo-dialog/upload-photo-dialog.component */ "./src/app/dashboard/components/upload-photo-dialog/upload-photo-dialog.component.ts");
/* harmony import */ var _edit_machine_dialog_edit_machine_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-machine-dialog/edit-machine-dialog.component */ "./src/app/dashboard/components/edit-machine-dialog/edit-machine-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MachinesComponent = /** @class */ (function () {
    function MachinesComponent(dialog, machines) {
        this.dialog = dialog;
        this.machines = machines;
    }
    MachinesComponent.prototype.ngOnInit = function () {
    };
    MachinesComponent.prototype.openNewMachineDialog = function () {
        this.dialog.open(_new_machine_dialog_new_machine_dialog_component__WEBPACK_IMPORTED_MODULE_2__["NewMachineDialogComponent"], {
            width: '400px'
        });
    };
    MachinesComponent.prototype.openDeleteMachineDialog = function (machine) {
        this.dialog.open(_delete_machine_dialog_delete_machine_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteMachineDialogComponent"], {
            width: '450px',
            data: {
                machine: machine
            }
        });
    };
    MachinesComponent.prototype.openUploadPhotoDialog = function (machine) {
        this.dialog.open(_upload_photo_dialog_upload_photo_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UploadPhotoDialogComponent"], {
            width: '400px',
            data: {
                machine: machine
            }
        });
    };
    MachinesComponent.prototype.openEditMachineDialog = function (machine) {
        this.dialog.open(_edit_machine_dialog_edit_machine_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditMachineDialogComponent"], {
            width: '450px',
            data: {
                machine: machine
            }
        });
    };
    MachinesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-machines',
            template: __webpack_require__(/*! ./machines.component.html */ "./src/app/dashboard/components/machines/machines.component.html"),
            styles: [__webpack_require__(/*! ./machines.component.css */ "./src/app/dashboard/components/machines/machines.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_machines_service__WEBPACK_IMPORTED_MODULE_3__["MachinesService"]])
    ], MachinesComponent);
    return MachinesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/new-machine-dialog/new-machine-dialog.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/components/new-machine-dialog/new-machine-dialog.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/components/new-machine-dialog/new-machine-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/components/new-machine-dialog/new-machine-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Новый спецтранспорт</h4>\r\n<form [formGroup]=\"newMachineForm\">\r\n  <mat-form-field appearance=\"standard\" class=\"w-100\">\r\n    <mat-label>Наименование</mat-label>\r\n    <input matInput placeholder=\"Введите наименование\" formControlName=\"title\" required>\r\n    <mat-error>Вы не указали наименование спецтехники</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"w-100\">\r\n    <mat-label>Описание</mat-label>\r\n    <textarea matInput placeholder=\"Введите описание\" formControlName=\"description\"></textarea>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"standard\" class=\"w-100\">\r\n    <mat-label>Стоимость</mat-label>\r\n    <input matInput placeholder=\"Введите стоимость\" formControlName=\"cost\" required>\r\n    <mat-error>Вы не указали стоимость спецтехники</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"standard\" class=\"w-100\">\r\n    <mat-label>Стоимость аренды</mat-label>\r\n    <input matInput placeholder=\"Введите стоимость аренды\" formControlName=\"rent\" required>\r\n    <mat-error>Вы не указали стоимость аренды спецтехники</mat-error>\r\n  </mat-form-field>\r\n</form>\r\n\r\n<div>\r\n  <input mat-stroked-button type=\"file\" (change)=\"onChangePhoto($event)\">\r\n</div>\r\n\r\n  <div class=\"d-flex\">\r\n    <div class=\"w-50 p-1\">\r\n      <button mat-flat-button color=\"primary\" class=\"w-100\" [disabled]=\"newMachineForm.invalid || !photo || (machines.addingInProgress() | async)\" (click)=\"addMachine()\">Добавить</button>\r\n    </div>\r\n    <div class=\"w-50 p-1\">\r\n      <button mat-flat-button color=\"warn\" class=\"w-100\" (click)=\"closeNewMachineDialog()\">Отмена</button>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/new-machine-dialog/new-machine-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/components/new-machine-dialog/new-machine-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NewMachineDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMachineDialogComponent", function() { return NewMachineDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/machines.service */ "./src/app/dashboard/services/machines.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_machine_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/machine.model */ "./src/app/dashboard/models/machine.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewMachineDialogComponent = /** @class */ (function () {
    function NewMachineDialogComponent(dialogRef, machines) {
        this.dialogRef = dialogRef;
        this.machines = machines;
        this.newMachineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.photo = null;
    }
    NewMachineDialogComponent.prototype.ngOnInit = function () { };
    NewMachineDialogComponent.prototype.closeNewMachineDialog = function () {
        this.dialogRef.close();
        this.newMachineForm.reset();
    };
    NewMachineDialogComponent.prototype.onChangePhoto = function (data) {
        console.log(data);
        this.photo = data.target.files[0];
        console.log('photo', this.photo);
    };
    NewMachineDialogComponent.prototype.addMachine = function () {
        var _this = this;
        var machine = new _models_machine_model__WEBPACK_IMPORTED_MODULE_4__["Machine"]({
            id: 0,
            title: this.newMachineForm.controls['title'].value,
            description: this.newMachineForm.controls['description'].value,
            cost: this.newMachineForm.controls['cost'].value,
            rent: this.newMachineForm.controls['rent'].value,
            is_enabled: 1,
            photo_url: ''
        });
        this.machines.addMachine(machine, this.photo)
            .subscribe(function () {
            _this.dialogRef.close();
            _this.machines.fetchList()
                .subscribe();
        });
    };
    NewMachineDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-machine-dialog',
            template: __webpack_require__(/*! ./new-machine-dialog.component.html */ "./src/app/dashboard/components/new-machine-dialog/new-machine-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-machine-dialog.component.css */ "./src/app/dashboard/components/new-machine-dialog/new-machine-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_machines_service__WEBPACK_IMPORTED_MODULE_2__["MachinesService"]])
    ], NewMachineDialogComponent);
    return NewMachineDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/upload-photo-dialog/upload-photo-dialog.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/components/upload-photo-dialog/upload-photo-dialog.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/components/upload-photo-dialog/upload-photo-dialog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/components/upload-photo-dialog/upload-photo-dialog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 d-flex justify-content-center align-items-center\">\n      <input type=\"file\" name=\"photo\" (change)=\"onChangePhoto($event)\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <button mat-flat-button color=\"primary\" class=\"w-100 mt-4\" [disabled]=\"(machines.uploadingInProgress() | async) || !photo\" (click)=\"upload()\">\n        <div class=\"d-flex flex-row justify-content-center align-items-center\">\n          <mat-spinner [diameter]=\"15\" class=\"mr-3\" color=\"accent\" *ngIf=\"machines.uploadingInProgress() | async\"></mat-spinner>\n          Загрузить\n        </div>\n      </button>\n    </div>\n    <div class=\"col-6\">\n      <button mat-flat-button color=\"warn\" class=\"w-100 mt-4\" [disabled]=\"machines.uploadingInProgress() | async\" (click)=\"cancel()\">Отмена</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/components/upload-photo-dialog/upload-photo-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/components/upload-photo-dialog/upload-photo-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UploadPhotoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPhotoDialogComponent", function() { return UploadPhotoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_machines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/machines.service */ "./src/app/dashboard/services/machines.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UploadPhotoDialogComponent = /** @class */ (function () {
    function UploadPhotoDialogComponent(dialogRef, machines, data) {
        this.dialogRef = dialogRef;
        this.machines = machines;
        this.data = data;
        this.photo = null;
    }
    UploadPhotoDialogComponent.prototype.ngOnInit = function () { };
    UploadPhotoDialogComponent.prototype.onChangePhoto = function (event) {
        console.log(event.target.files[0]);
        this.photo = event.target.files[0];
    };
    UploadPhotoDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
        this.photo = null;
    };
    UploadPhotoDialogComponent.prototype.upload = function () {
        var _this = this;
        console.log(this.data);
        this.machines.uploadPhoto(this.data.machine.id, this.photo)
            .subscribe(function (url) {
            console.log('url', url);
            _this.data.machine.photo = url;
            _this.cancel();
        });
    };
    UploadPhotoDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-photo-dialog',
            template: __webpack_require__(/*! ./upload-photo-dialog.component.html */ "./src/app/dashboard/components/upload-photo-dialog/upload-photo-dialog.component.html"),
            styles: [__webpack_require__(/*! ./upload-photo-dialog.component.css */ "./src/app/dashboard/components/upload-photo-dialog/upload-photo-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_machines_service__WEBPACK_IMPORTED_MODULE_1__["MachinesService"], Object])
    ], UploadPhotoDialogComponent);
    return UploadPhotoDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/dashboard/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_machines_machines_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/machines/machines.component */ "./src/app/dashboard/components/machines/machines.component.ts");
/* harmony import */ var _guards_dashboard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/dashboard.guard */ "./src/app/dashboard/guards/dashboard.guard.ts");
/* harmony import */ var _guards_machines_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/machines.guard */ "./src/app/dashboard/guards/machines.guard.ts");
/* harmony import */ var _guards_feedback_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/feedback.guard */ "./src/app/dashboard/guards/feedback.guard.ts");
/* harmony import */ var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/feedback/feedback.component */ "./src/app/dashboard/components/feedback/feedback.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivateChild: [
            _guards_dashboard_guard__WEBPACK_IMPORTED_MODULE_4__["DashboardGuard"]
        ],
        children: [
            {
                path: '',
                redirectTo: 'machines',
                pathMatch: 'full'
            },
            {
                path: 'machines',
                component: _components_machines_machines_component__WEBPACK_IMPORTED_MODULE_3__["MachinesComponent"],
                resolve: [
                    _guards_machines_guard__WEBPACK_IMPORTED_MODULE_5__["MachinesGuard"]
                ]
            },
            {
                path: 'feedback',
                component: _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackComponent"],
                resolve: [
                    _guards_feedback_guard__WEBPACK_IMPORTED_MODULE_6__["FeedbackGuard"]
                ]
            }
        ]
    },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/dashboard/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_machines_machines_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/machines/machines.component */ "./src/app/dashboard/components/machines/machines.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _guards_dashboard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/dashboard.guard */ "./src/app/dashboard/guards/dashboard.guard.ts");
/* harmony import */ var _guards_machines_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/machines.guard */ "./src/app/dashboard/guards/machines.guard.ts");
/* harmony import */ var _guards_feedback_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/feedback.guard */ "./src/app/dashboard/guards/feedback.guard.ts");
/* harmony import */ var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/feedback/feedback.component */ "./src/app/dashboard/components/feedback/feedback.component.ts");
/* harmony import */ var _components_new_machine_dialog_new_machine_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/new-machine-dialog/new-machine-dialog.component */ "./src/app/dashboard/components/new-machine-dialog/new-machine-dialog.component.ts");
/* harmony import */ var _components_delete_machine_dialog_delete_machine_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/delete-machine-dialog/delete-machine-dialog.component */ "./src/app/dashboard/components/delete-machine-dialog/delete-machine-dialog.component.ts");
/* harmony import */ var _components_upload_photo_dialog_upload_photo_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/upload-photo-dialog/upload-photo-dialog.component */ "./src/app/dashboard/components/upload-photo-dialog/upload-photo-dialog.component.ts");
/* harmony import */ var _components_edit_machine_dialog_edit_machine_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-machine-dialog/edit-machine-dialog.component */ "./src/app/dashboard/components/edit-machine-dialog/edit-machine-dialog.component.ts");
/* harmony import */ var _components_delete_feedback_dialog_delete_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/delete-feedback-dialog/delete-feedback-dialog.component */ "./src/app/dashboard/components/delete-feedback-dialog/delete-feedback-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            declarations: [
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                _components_machines_machines_component__WEBPACK_IMPORTED_MODULE_3__["MachinesComponent"],
                _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"],
                _components_new_machine_dialog_new_machine_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NewMachineDialogComponent"],
                _components_delete_machine_dialog_delete_machine_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DeleteMachineDialogComponent"],
                _components_upload_photo_dialog_upload_photo_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UploadPhotoDialogComponent"],
                _components_edit_machine_dialog_edit_machine_dialog_component__WEBPACK_IMPORTED_MODULE_12__["EditMachineDialogComponent"],
                _components_delete_feedback_dialog_delete_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DeleteFeedbackDialogComponent"]
            ],
            providers: [
                _guards_dashboard_guard__WEBPACK_IMPORTED_MODULE_5__["DashboardGuard"],
                _guards_machines_guard__WEBPACK_IMPORTED_MODULE_6__["MachinesGuard"],
                _guards_feedback_guard__WEBPACK_IMPORTED_MODULE_7__["FeedbackGuard"]
            ],
            entryComponents: [
                _components_new_machine_dialog_new_machine_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NewMachineDialogComponent"],
                _components_delete_machine_dialog_delete_machine_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DeleteMachineDialogComponent"],
                _components_upload_photo_dialog_upload_photo_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UploadPhotoDialogComponent"],
                _components_edit_machine_dialog_edit_machine_dialog_component__WEBPACK_IMPORTED_MODULE_12__["EditMachineDialogComponent"],
                _components_delete_feedback_dialog_delete_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DeleteFeedbackDialogComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/guards/dashboard.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/guards/dashboard.guard.ts ***!
  \*****************************************************/
/*! exports provided: DashboardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardGuard", function() { return DashboardGuard; });
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



var DashboardGuard = /** @class */ (function () {
    function DashboardGuard(router, session) {
        this.router = router;
        this.session = session;
    }
    DashboardGuard.prototype.canActivate = function (next, state) {
        if (!this.session.getUser()) {
            this.router.navigate(['/signin']);
            return false;
        }
        return true;
    };
    DashboardGuard.prototype.canActivateChild = function (childRoute, state) {
        console.log('dashboard can activate child', this.session.getUser());
        if (!this.session.getUser()) {
            this.router.navigate(['/signin']);
            return false;
        }
        return true;
    };
    DashboardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DashboardGuard);
    return DashboardGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/guards/feedback.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/guards/feedback.guard.ts ***!
  \****************************************************/
/*! exports provided: FeedbackGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackGuard", function() { return FeedbackGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/feedback.service */ "./src/app/dashboard/services/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackGuard = /** @class */ (function () {
    function FeedbackGuard(feedback) {
        this.feedback = feedback;
    }
    FeedbackGuard.prototype.resolve = function (route, state) {
        return this.feedback.fetchList();
    };
    FeedbackGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"]])
    ], FeedbackGuard);
    return FeedbackGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/guards/machines.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/guards/machines.guard.ts ***!
  \****************************************************/
/*! exports provided: MachinesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesGuard", function() { return MachinesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_machines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/machines.service */ "./src/app/dashboard/services/machines.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MachinesGuard = /** @class */ (function () {
    function MachinesGuard(machines) {
        this.machines = machines;
    }
    MachinesGuard.prototype.resolve = function (route, state) {
        return this.machines.fetchList();
    };
    MachinesGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_machines_service__WEBPACK_IMPORTED_MODULE_1__["MachinesService"]])
    ], MachinesGuard);
    return MachinesGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/models/feedback.model.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/models/feedback.model.ts ***!
  \****************************************************/
/*! exports provided: Feedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/**
 * Класс, реализующтй интерфейс сообщения обратной связи
 */
var Feedback = /** @class */ (function () {
    /**
     * Конструктор
     * @param config - Параметры инициализации
     */
    function Feedback(config) {
        this.id = config ? config.id : null;
        this.name = config ? config.name : null;
        this.email = config ? config.email : null;
        this.message = config ? config.message : null;
        this.dateCreated = config ? new Date(Number(config.date_created)) : null;
    }
    return Feedback;
}());



/***/ }),

/***/ "./src/app/dashboard/models/machine.model.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/models/machine.model.ts ***!
  \***************************************************/
/*! exports provided: Machine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return Machine; });
/**
 * Класс, реалиизующий интерфейс спецтехники
 */
var Machine = /** @class */ (function () {
    /**
     * Конструктор
     * @param config - Параметры инициализации
     */
    function Machine(config) {
        this.id = config ? Number(config.id) : 0;
        this.title = config ? config.title : null;
        this.description = config ? config.description : null;
        this.photo = config ? config.photo_url : null;
        this.cost = config ? config.cost : null;
        this.rent = config ? config.rent : null;
        this.isEnabled = config ? (Number(config.is_enabled) === 1 ? true : false) : false;
    }
    /**
     * Экспорт модели в DTO
     */
    Machine.prototype.toDTO = function () {
        var result = {
            id: this.id ? this.id : 0,
            title: this.title ? this.title : '',
            description: this.description ? this.description : '',
            cost: this.cost ? String(this.cost) : '',
            rent: this.rent ? String(this.rent) : '',
            photo_url: this.photo ? this.photo : '',
            is_enabled: 1
        };
        return result;
    };
    return Machine;
}());



/***/ }),

/***/ "./src/app/dashboard/resources/feedback.datasource.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/resources/feedback.datasource.ts ***!
  \************************************************************/
/*! exports provided: FeedbackDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackDataSource", function() { return FeedbackDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var FeedbackDataSource = /** @class */ (function () {
    function FeedbackDataSource(feedbackService) {
        this.feedbackService = feedbackService;
        this.feedbackSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    FeedbackDataSource.prototype.connect = function (collectionViewer) {
        //return this.feedbackSubject.asObservable();
        return this.feedbackService.getList();
    };
    FeedbackDataSource.prototype.disconnect = function (collectionViewer) {
        this.feedbackSubject.complete();
    };
    FeedbackDataSource.prototype.loadFeedback = function () {
        /*
        this.feedbackService.fetchList()
          .pipe(
             catchError(() => of([])),
        ).subscribe(
          feedback => this.feedbackSubject.next(feedback)
        );
        */
    };
    return FeedbackDataSource;
}());



/***/ }),

/***/ "./src/app/dashboard/resources/feedback.resource.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/resources/feedback.resource.ts ***!
  \**********************************************************/
/*! exports provided: FeedbackResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackResource", function() { return FeedbackResource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-resource/core */ "./node_modules/@ngx-resource/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackResource = /** @class */ (function (_super) {
    __extends(FeedbackResource, _super);
    function FeedbackResource(handler) {
        return _super.call(this, handler) || this;
    }
    __decorate([
        Object(_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceAction"])({
            path: '/',
            method: _ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceRequestMethod"].Get,
            withCredentials: true
        }),
        __metadata("design:type", Function)
    ], FeedbackResource.prototype, "getList", void 0);
    __decorate([
        Object(_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceAction"])({
            path: '/',
            method: _ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceRequestMethod"].Get,
            withCredentials: true
        }),
        __metadata("design:type", Function)
    ], FeedbackResource.prototype, "deleteMessage", void 0);
    FeedbackResource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceParams"])({
            pathPrefix: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl
        }),
        __metadata("design:paramtypes", [_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceHandler"]])
    ], FeedbackResource);
    return FeedbackResource;
}(_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["Resource"]));



/***/ }),

/***/ "./src/app/dashboard/resources/machines.resource.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/resources/machines.resource.ts ***!
  \**********************************************************/
/*! exports provided: MachinesResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesResource", function() { return MachinesResource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-resource/core */ "./node_modules/@ngx-resource/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MachinesResource = /** @class */ (function (_super) {
    __extends(MachinesResource, _super);
    function MachinesResource(handler) {
        return _super.call(this, handler) || this;
    }
    __decorate([
        Object(_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceAction"])({
            path: '/',
            method: _ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceRequestMethod"].Get,
            withCredentials: true
        }),
        __metadata("design:type", Function)
    ], MachinesResource.prototype, "getList", void 0);
    __decorate([
        Object(_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceAction"])({
            path: '/',
            method: _ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceRequestMethod"].Get,
            withCredentials: true
        }),
        __metadata("design:type", Function)
    ], MachinesResource.prototype, "addMachine", void 0);
    __decorate([
        Object(_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceAction"])({
            path: '/',
            method: _ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceRequestMethod"].Get,
            withCredentials: true
        }),
        __metadata("design:type", Function)
    ], MachinesResource.prototype, "editMachine", void 0);
    __decorate([
        Object(_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceAction"])({
            path: '/',
            method: _ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceRequestMethod"].Get,
            withCredentials: true
        }),
        __metadata("design:type", Function)
    ], MachinesResource.prototype, "deleteMachine", void 0);
    MachinesResource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceParams"])({
            pathPrefix: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl
        }),
        __metadata("design:paramtypes", [_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["ResourceHandler"]])
    ], MachinesResource);
    return MachinesResource;
}(_ngx_resource_core__WEBPACK_IMPORTED_MODULE_2__["Resource"]));



/***/ }),

/***/ "./src/app/dashboard/services/feedback.service.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/services/feedback.service.ts ***!
  \********************************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_feedback_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/feedback.model */ "./src/app/dashboard/models/feedback.model.ts");
/* harmony import */ var _resources_feedback_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/feedback.resource */ "./src/app/dashboard/resources/feedback.resource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackService = /** @class */ (function () {
    function FeedbackService(resource) {
        this.resource = resource;
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.fetchingMessagesInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.deletingMessageInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.messages.next([
            new _models_feedback_model__WEBPACK_IMPORTED_MODULE_3__["Feedback"]({
                id: 1,
                name: 'Pidor',
                email: 'dasdasd',
                message: 'lorem dsfdsfs dsfdsds dsfsdfs',
                date_created: new Date().getTime()
            }),
            new _models_feedback_model__WEBPACK_IMPORTED_MODULE_3__["Feedback"]({
                id: 1,
                name: 'Pidor',
                email: 'dasdasd',
                message: 'lorem dsfdsfs dsfdsds dsfsdfs',
                date_created: new Date().getTime()
            }),
            new _models_feedback_model__WEBPACK_IMPORTED_MODULE_3__["Feedback"]({
                id: 1,
                name: 'Pidor',
                email: 'dasdasd',
                message: 'lorem dsfdsfs dsfdsds dsfsdfs',
                date_created: new Date().getTime()
            }),
            new _models_feedback_model__WEBPACK_IMPORTED_MODULE_3__["Feedback"]({
                id: 1,
                name: 'Pidor',
                email: 'dasdasd',
                message: 'lorem dsfdsfs dsfdsds dsfsdfs',
                date_created: new Date().getTime()
            })
        ]);
    }
    FeedbackService.prototype.fetchList = function () {
        var _this = this;
        this.fetchingMessagesInProgress.next(true);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.resource.getList({ action: 'getFeedbackMessages' }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            var messages = [];
            result.forEach(function (item) {
                messages.push(new _models_feedback_model__WEBPACK_IMPORTED_MODULE_3__["Feedback"](item));
            });
            _this.messages.next(messages);
            return _this.messages.value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            _this.fetchingMessagesInProgress.next(false);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.fetchingMessagesInProgress.next(false);
        }));
    };
    FeedbackService.prototype.deleteMessage = function (message) {
        var _this = this;
        this.deletingMessageInProgress.next(true);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.resource.deleteMessage({ action: 'deleteMessage', id: message.id }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.deletingMessageInProgress.next(false);
        }));
    };
    FeedbackService.prototype.getList = function () {
        return this.messages.asObservable();
    };
    FeedbackService.prototype.fetchingInProgress = function () {
        return this.fetchingMessagesInProgress.asObservable();
    };
    FeedbackService.prototype.deletingInProgress = function () {
        return this.deletingMessageInProgress.asObservable();
    };
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_feedback_resource__WEBPACK_IMPORTED_MODULE_4__["FeedbackResource"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/dashboard/services/machines.service.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/services/machines.service.ts ***!
  \********************************************************/
/*! exports provided: MachinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesService", function() { return MachinesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _resources_machines_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/machines.resource */ "./src/app/dashboard/resources/machines.resource.ts");
/* harmony import */ var _models_machine_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/machine.model */ "./src/app/dashboard/models/machine.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MachinesService = /** @class */ (function () {
    function MachinesService(http, resource) {
        this.http = http;
        this.resource = resource;
        this.machines = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([
            new _models_machine_model__WEBPACK_IMPORTED_MODULE_3__["Machine"]({
                id: 1,
                title: 'asdasd',
                description: 'asdasd dasda asdas sdasda asdas asdas ',
                cost: '125 000 рублей',
                rent: '5000 рублей в сутки',
                photo_url: '',
                is_enabled: 1
            }),
            new _models_machine_model__WEBPACK_IMPORTED_MODULE_3__["Machine"]({
                id: 1,
                title: 'asdasd',
                description: 'asdasd dasda asdas sdasda asdas asdas ',
                cost: '125 000 рублей',
                rent: '5000 рублей в сутки',
                photo_url: '',
                is_enabled: 1
            }),
            new _models_machine_model__WEBPACK_IMPORTED_MODULE_3__["Machine"]({
                id: 1,
                title: 'asdasd',
                description: 'asdasd dasda asdas sdasda asdas asdas ',
                cost: '125 000 рублей',
                rent: '5000 рублей в сутки',
                photo_url: '',
                is_enabled: 1
            }),
            new _models_machine_model__WEBPACK_IMPORTED_MODULE_3__["Machine"]({
                id: 1,
                title: 'asdasd',
                description: 'asdasd dasda asdas sdasda asdas asdas ',
                cost: '125 000 рублей',
                rent: '5000 рублей в сутки',
                photo_url: '',
                is_enabled: 1
            }),
            new _models_machine_model__WEBPACK_IMPORTED_MODULE_3__["Machine"]({
                id: 1,
                title: 'asdasd',
                description: 'asdasd dasda asdas sdasda asdas asdas ',
                cost: '125 000 рублей',
                rent: '5000 рублей в сутки',
                photo_url: '',
                is_enabled: 1
            }),
            new _models_machine_model__WEBPACK_IMPORTED_MODULE_3__["Machine"]({
                id: 1,
                title: 'asdasd',
                description: 'asdasd dasda asdas sdasda asdas asdas ',
                cost: '125 000 рублей',
                rent: '5000 рублей в сутки',
                photo_url: '',
                is_enabled: 1
            })
        ]);
        this.fetchingMachinesInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.addingMachineInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.editingMachineInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.deletingMachineInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.uploadingPhotoInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    MachinesService.prototype.fetchList = function () {
        var _this = this;
        this.fetchingMachinesInProgress.next(true);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.resource.getList({ action: 'getMachinesList' }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            console.log('result', result);
            var machines = [];
            result.forEach(function (item) {
                machines.push(new _models_machine_model__WEBPACK_IMPORTED_MODULE_3__["Machine"](item));
            });
            _this.machines.next(machines);
            console.log(_this.machines.value);
            return _this.machines.value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.fetchingMachinesInProgress.next(false);
        }));
    };
    MachinesService.prototype.addMachine = function (machine, photo) {
        var _this = this;
        console.log(machine);
        var formData = new FormData();
        formData.append('action', 'addMachine');
        formData.append('title', machine.title);
        formData.append('description', machine.description);
        formData.append('cost', machine.cost);
        formData.append('rent', machine.rent);
        formData.append('photo', photo);
        this.addingMachineInProgress.next(true);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) {
            return new _models_machine_model__WEBPACK_IMPORTED_MODULE_3__["Machine"](item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.addingMachineInProgress.next(false);
        }));
    };
    MachinesService.prototype.editMachine = function (machine) {
        var _this = this;
        this.editingMachineInProgress.next(true);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.resource.editMachine({ action: 'editMachine', id: machine.id, title: machine.title, description: machine.description, cost: machine.cost, rent: machine.rent, is_enabled: machine.isEnabled ? 1 : 0 }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) {
            return new _models_machine_model__WEBPACK_IMPORTED_MODULE_3__["Machine"](item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.editingMachineInProgress.next(false);
        }));
    };
    MachinesService.prototype.deleteMachine = function (machine) {
        var _this = this;
        this.deletingMachineInProgress.next(true);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.resource.deleteMachine({ action: 'deleteMachine', id: machine.id }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.deletingMachineInProgress.next(false);
        }));
    };
    MachinesService.prototype.uploadPhoto = function (id, photo) {
        var _this = this;
        var formData = new FormData();
        formData.append('action', 'uploadMachinePhoto');
        formData.append('id', String(id));
        formData.append('photo', photo);
        this.uploadingPhotoInProgress.next(true);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (url) {
            return url;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.uploadingPhotoInProgress.next(false);
        }));
    };
    MachinesService.prototype.getList = function () {
        return this.machines.asObservable();
    };
    MachinesService.prototype.addingInProgress = function () {
        return this.addingMachineInProgress.asObservable();
    };
    MachinesService.prototype.deletingInProgress = function () {
        return this.deletingMachineInProgress.asObservable();
    };
    MachinesService.prototype.editingInProgress = function () {
        return this.editingMachineInProgress.asObservable();
    };
    MachinesService.prototype.uploadingInProgress = function () {
        return this.uploadingPhotoInProgress.asObservable();
    };
    MachinesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _resources_machines_resource__WEBPACK_IMPORTED_MODULE_2__["MachinesResource"]])
    ], MachinesService);
    return MachinesService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map