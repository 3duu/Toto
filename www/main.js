(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _device_info_device_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-info/device-info.component */ "./src/app/device-info/device-info.component.ts");




var routes = [
    { path: 'device-info', component: _device_info_device_info_component__WEBPACK_IMPORTED_MODULE_3__["DeviceInfoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<app-login></app-login>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, AppBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBase", function() { return AppBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database/database */ "./src/app/database/database.ts");
/* harmony import */ var _language_Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/Language */ "./src/app/language/Language.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.sqlite = new _database_database__WEBPACK_IMPORTED_MODULE_1__["SQLite"]();
        this.title = 'angular';
        this.sqlite.prepare();
    }
    AppComponent.applicationName = "PetLif3";
    AppComponent.language = new _language_Language__WEBPACK_IMPORTED_MODULE_2__["Language"]();
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

var AppBase = /** @class */ (function () {
    function AppBase() {
        this.applicationName = AppComponent.applicationName;
        this.language = AppComponent.language;
    }
    AppBase.prototype.ngOnInit = function () {
    };
    AppBase.prototype.getUser = function () {
        return this.user;
    };
    AppBase.prototype.setNavMenuVisiility = function () {
        return this.showNavMenu;
    };
    AppBase.prototype.getNavbarComponent = function () {
        for (var m in AppBase.modules) {
            if ('NavbarComponent' == m.constructor.name) {
                return m;
            }
        }
        return null;
    };
    AppBase.setNavbarComponent = function (navbarComponent) {
        if (this.navbarComponent == null) {
            AppBase.addModule(navbarComponent);
            this.navbarComponent = navbarComponent;
        }
    };
    AppBase.addModule = function (module) {
        for (var m in AppBase.modules) {
            if (module.constructor.name == m.constructor.name) {
                return;
            }
        }
        AppBase.modules.push(module);
    };
    AppBase.modules = [];
    return AppBase;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _device_info_device_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-info/device-info.component */ "./src/app/device-info/device-info.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _global_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/navbar.component */ "./src/app/global/navbar.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/maps/maps.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _device_info_device_info_component__WEBPACK_IMPORTED_MODULE_3__["DeviceInfoComponent"],
                _global_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_9__["MapsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/database/database.ts":
/*!**************************************!*\
  !*** ./src/app/database/database.ts ***!
  \**************************************/
/*! exports provided: SQLite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQLite", function() { return SQLite; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _entity_PetService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../entity/PetService */ "./src/app/entity/PetService.ts");
/* harmony import */ var _entity_Address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../entity/Address */ "./src/app/entity/Address.ts");
/* harmony import */ var _entity_Appointment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../entity/Appointment */ "./src/app/entity/Appointment.ts");
/* harmony import */ var _entity_Bookmark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../entity/Bookmark */ "./src/app/entity/Bookmark.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/browser/index.js");
/* harmony import */ var _entity_Pet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entity/Pet */ "./src/app/entity/Pet.ts");
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var _entity_Rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../entity/Rating */ "./src/app/entity/Rating.ts");





/*import {getManager} from "typeorm";
import { User } from '../entity/User';*/
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';




/*
export class GenericDao {
    static  entityManager = getManager(); // you can also get it via getConnection().manager
}

export class UserDao extends GenericDao {

    async findNode(id : number){
        return await UserDao.entityManager.findOne(User, 1);
    }

    async save(user : User){
        await UserDao.entityManager.save(user);
    }
}*/
var options = {
    type: "sqlite",
    database: '${root}/data/line.sqlite',
    entities: [_entity_User__WEBPACK_IMPORTED_MODULE_7__["User"], _entity_Pet__WEBPACK_IMPORTED_MODULE_6__["Pet"], _entity_PetService__WEBPACK_IMPORTED_MODULE_1__["PetService"], _entity_Bookmark__WEBPACK_IMPORTED_MODULE_4__["Bookmark"], _entity_Appointment__WEBPACK_IMPORTED_MODULE_3__["Appointment"], _entity_Address__WEBPACK_IMPORTED_MODULE_2__["Address"], _entity_Rating__WEBPACK_IMPORTED_MODULE_8__["Rating"]],
    logging: true
};
var SQLite = /** @class */ (function () {
    function SQLite() {
        this.createTables = [
            'CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement, name text, email text, password text)',
            'CREATE TABLE IF NOT EXISTS pet  (id integer primary key autoincrement, name text, type number, userId number)'
        ];
    }
    SQLite.prototype.createDatabase = function (tx) {
        tx.executeSql("DROP TABLE IF EXISTS user");
        tx.executeSql("DROP TABLE IF EXISTS pet");
        //cria tabelas
        for (var sql in this.createTables) {
            tx.executeSql(this.createTables[sql]);
        }
    };
    SQLite.prototype.prepare = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var connection;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["createConnection"])(options)];
                    case 1:
                        connection = _a.sent();
                        alert("Created");
                        return [2 /*return*/];
                }
            });
        });
    };
    SQLite.prototype.errorCB = function (err) {
        console.log("Error processing SQL: " + err.code + ": " + err.message);
        alert('Error when executing command - ' + err.code + ": " + err.message);
        return true;
    };
    SQLite.prototype.successCB = function () {
        console.log('SQL COMMAND EXECUTED');
    };
    return SQLite;
}());



/***/ }),

/***/ "./src/app/device-info/device-info.component.css":
/*!*******************************************************!*\
  !*** ./src/app/device-info/device-info.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1pbmZvL2RldmljZS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/device-info/device-info.component.html":
/*!********************************************************!*\
  !*** ./src/app/device-info/device-info.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4\">\n    <h4>Your Device Info</h4>\n    <table class=\"table table-hover mt-3\">\n        <tr>\n            <td>Device Model</td>\n            <td>{{deviceInfo.model}}</td>\n        </tr>\n        <tr>\n            <td>Device Platform</td>\n            <td>{{deviceInfo.platform}}</td>\n        </tr>\n        <tr>\n            <td>Device UID</td>\n            <td>{{deviceInfo.uuid}}</td>\n        </tr>\n        <tr>\n            <td>Device Version</td>\n            <td>{{deviceInfo.version}}</td>\n        </tr>\n        <tr>\n            <td>Device Manufacturer</td>\n            <td>{{deviceInfo.manufacturer}}</td>\n        </tr>\n        <tr>\n            <td>Device Serial</td>\n            <td>{{deviceInfo.serial}}</td>\n        </tr>\n    </table>\n    <div class=\"col-md-6 offset-md-3\">\n        <a class=\"col-md-6 offset-md-3 btn btn-primary\" routerLink=\"/\">Home</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/device-info/device-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/device-info/device-info.component.ts ***!
  \******************************************************/
/*! exports provided: DeviceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceInfoComponent", function() { return DeviceInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeviceInfoComponent = /** @class */ (function () {
    function DeviceInfoComponent() {
    }
    DeviceInfoComponent.prototype.ngOnInit = function () {
        this.deviceInfo = {
            model: device.model,
            platform: device.platform,
            uuid: device.uuid,
            version: device.version,
            manufacturer: device.manufacturer,
            serial: device.serial
        };
    };
    DeviceInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-info',
            template: __webpack_require__(/*! ./device-info.component.html */ "./src/app/device-info/device-info.component.html"),
            styles: [__webpack_require__(/*! ./device-info.component.css */ "./src/app/device-info/device-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeviceInfoComponent);
    return DeviceInfoComponent;
}());



/***/ }),

/***/ "./src/app/entity/Address.ts":
/*!***********************************!*\
  !*** ./src/app/entity/Address.ts ***!
  \***********************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/browser/index.js");


var Address = /** @class */ (function () {
    function Address() {
    }
    Address.prototype.ngOnInit = function () {
    };
    Address.prototype.getId = function () {
        return this.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Address.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Address.prototype, "streetName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Address.prototype, "number", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Address.prototype, "complement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Address.prototype, "zipcode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Address.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Address.prototype, "geolocationstate", void 0);
    Address = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Address);
    return Address;
}());



/***/ }),

/***/ "./src/app/entity/Appointment.ts":
/*!***************************************!*\
  !*** ./src/app/entity/Appointment.ts ***!
  \***************************************/
/*! exports provided: Appointment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appointment", function() { return Appointment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/browser/index.js");
/* harmony import */ var _Pet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pet */ "./src/app/entity/Pet.ts");



var Appointment = /** @class */ (function () {
    function Appointment() {
    }
    Appointment.prototype.ngOnInit = function () {
    };
    Appointment.prototype.getId = function () {
        return this.id;
    };
    Appointment.prototype.getPets = function () {
        return this.pets;
    };
    Appointment.prototype.getUser = function () {
        if (this.pets != null && this.pets != undefined) {
            return this.pets[0].getUser();
        }
        return null;
    };
    Appointment.prototype.getName = function () {
        return "null";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Appointment.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], Appointment.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Appointment.prototype, "appointmentType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Appointment.prototype, "time", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["OneToMany"])(function (type) { return _Pet__WEBPACK_IMPORTED_MODULE_2__["Pet"]; }, function (pet) { return pet.getAppointments(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], Appointment.prototype, "pets", void 0);
    Appointment = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Appointment);
    return Appointment;
}());



/***/ }),

/***/ "./src/app/entity/Bookmark.ts":
/*!************************************!*\
  !*** ./src/app/entity/Bookmark.ts ***!
  \************************************/
/*! exports provided: Bookmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return Bookmark; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/browser/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/app/entity/User.ts");



var Bookmark = /** @class */ (function () {
    function Bookmark() {
    }
    Bookmark.prototype.ngOnInit = function () {
    };
    Bookmark.prototype.getId = function () {
        return this.id;
    };
    Bookmark.prototype.getUser = function () {
        return this.user;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Bookmark.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["ManyToOne"])(function (type) { return _User__WEBPACK_IMPORTED_MODULE_2__["User"]; }, function (user) { return user.getBookmarks(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _User__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], Bookmark.prototype, "user", void 0);
    Bookmark = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Bookmark);
    return Bookmark;
}());



/***/ }),

/***/ "./src/app/entity/Pet.ts":
/*!*******************************!*\
  !*** ./src/app/entity/Pet.ts ***!
  \*******************************/
/*! exports provided: Pet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return Pet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/browser/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/app/entity/User.ts");
/* harmony import */ var _Appointment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Appointment */ "./src/app/entity/Appointment.ts");




var Pet = /** @class */ (function () {
    function Pet() {
    }
    Pet.prototype.ngOnInit = function () {
    };
    Pet.prototype.getId = function () {
        return this.id;
    };
    Pet.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    Pet.prototype.getUser = function () {
        return this.user;
    };
    Pet.prototype.getAppointments = function () {
        return this.appointments;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Pet.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], Pet.prototype, "birthDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["ManyToOne"])(function (type) { return _User__WEBPACK_IMPORTED_MODULE_2__["User"]; }, function (user) { return user.getPets(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _User__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], Pet.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["OneToMany"])(function (type) { return _Appointment__WEBPACK_IMPORTED_MODULE_3__["Appointment"]; }, function (appointment) { return appointment.getPets(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], Pet.prototype, "appointments", void 0);
    Pet = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Pet);
    return Pet;
}());



/***/ }),

/***/ "./src/app/entity/PetService.ts":
/*!**************************************!*\
  !*** ./src/app/entity/PetService.ts ***!
  \**************************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/browser/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/app/entity/User.ts");
/* harmony import */ var _ServiceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceType */ "./src/app/entity/ServiceType.ts");
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Address */ "./src/app/entity/Address.ts");





var PetService = /** @class */ (function () {
    function PetService() {
    }
    PetService.prototype.ngOnInit = function () {
    };
    PetService.prototype.getId = function () {
        return this.id;
    };
    PetService.prototype.getOwner = function () {
        return this.owner;
    };
    PetService.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    PetService.prototype.getDescription = function () {
        return this.description;
    };
    PetService.prototype.getAddress = function () {
        return this.address;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PetService.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["ManyToOne"])(function (type) { return _User__WEBPACK_IMPORTED_MODULE_2__["User"]; }, function (user) { return user.getPetServices(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _User__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], PetService.prototype, "owner", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PetService.prototype, "creationDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ServiceType__WEBPACK_IMPORTED_MODULE_3__["ServiceType"])
    ], PetService.prototype, "serviceType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PetService.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _Address__WEBPACK_IMPORTED_MODULE_4__["Address"])
    ], PetService.prototype, "address", void 0);
    PetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PetService);
    return PetService;
}());



/***/ }),

/***/ "./src/app/entity/Rating.ts":
/*!**********************************!*\
  !*** ./src/app/entity/Rating.ts ***!
  \**********************************/
/*! exports provided: Rating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/browser/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/app/entity/User.ts");



var Rating = /** @class */ (function () {
    function Rating() {
    }
    Rating.prototype.ngOnInit = function () {
    };
    Rating.prototype.getId = function () {
        return this.id;
    };
    Rating.prototype.getOwner = function () {
        return this.owner;
    };
    Rating.prototype.getRated = function () {
        return this.rated;
    };
    Rating.prototype.getRatingDate = function () {
        return this.ratingDate;
    };
    Rating.MAX_RATING = 5;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Rating.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Rating.prototype, "ratingDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Rating.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["ManyToOne"])(function (type) { return _User__WEBPACK_IMPORTED_MODULE_2__["User"]; }, function (owner) { return owner.getRatings(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _User__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], Rating.prototype, "owner", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["OneToOne"])(function (type) { return _User__WEBPACK_IMPORTED_MODULE_2__["User"]; }),
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["JoinColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _User__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], Rating.prototype, "rated", void 0);
    Rating = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Rating);
    return Rating;
}());



/***/ }),

/***/ "./src/app/entity/ServiceType.ts":
/*!***************************************!*\
  !*** ./src/app/entity/ServiceType.ts ***!
  \***************************************/
/*! exports provided: ServiceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return ServiceType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/browser/index.js");


var ServiceType = /** @class */ (function () {
    function ServiceType() {
    }
    ServiceType.prototype.ngOnInit = function () {
    };
    ServiceType.prototype.getId = function () {
        return this.id;
    };
    ServiceType.prototype.getName = function () {
        return this.name;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ServiceType.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ServiceType.prototype, "name", void 0);
    ServiceType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServiceType);
    return ServiceType;
}());



/***/ }),

/***/ "./src/app/entity/User.ts":
/*!********************************!*\
  !*** ./src/app/entity/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Bookmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bookmark */ "./src/app/entity/Bookmark.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/browser/index.js");
/* harmony import */ var _Pet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pet */ "./src/app/entity/Pet.ts");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rating */ "./src/app/entity/Rating.ts");
/* harmony import */ var _PetService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PetService */ "./src/app/entity/PetService.ts");






var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.ngOnInit = function () {
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getLogin = function () {
        return this.login;
    };
    User.prototype.getSignInDate = function () {
        return this.signInDate;
    };
    User.prototype.getPassword = function () {
        return this.encryptedPassword;
    };
    User.prototype.getPets = function () {
        return this.pets;
    };
    User.prototype.getBookmarks = function () {
        return this.bookmarks;
    };
    User.prototype.getPetServices = function () {
        return this.petServices;
    };
    User.prototype.getRatings = function () {
        return this.ratings;
    };
    User.prototype.getMyRating = function () {
        return this.myRatings;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["PrimaryGeneratedColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], User.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], User.prototype, "login", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], User.prototype, "signInDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], User.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], User.prototype, "encryptedPassword", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["OneToMany"])(function (type) { return _Pet__WEBPACK_IMPORTED_MODULE_3__["Pet"]; }, function (pet) { return pet.getUser(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], User.prototype, "pets", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["OneToMany"])(function (type) { return _Bookmark__WEBPACK_IMPORTED_MODULE_1__["Bookmark"]; }, function (bookmark) { return bookmark.getUser(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], User.prototype, "bookmarks", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["OneToMany"])(function (type) { return _Rating__WEBPACK_IMPORTED_MODULE_4__["Rating"]; }, function (rating) { return rating.getOwner(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], User.prototype, "ratings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["OneToMany"])(function (type) { return _Rating__WEBPACK_IMPORTED_MODULE_4__["Rating"]; }, function (rating) { return rating.getRated(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], User.prototype, "myRatings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["OneToMany"])(function (type) { return _PetService__WEBPACK_IMPORTED_MODULE_5__["PetService"]; }, function (petService) { return petService.getOwner(); }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], User.prototype, "petServices", void 0);
    User = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Entity"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], User);
    return User;
}());



/***/ }),

/***/ "./src/app/global/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/global/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-navbar-container {\r\n    width: 100% !important;\r\n    height: calc(100vh - 64px) !important;\r\n}\r\n\r\nmat-navbar {\r\n    background-color: blue !important;\r\n}\r\n\r\ndiv {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\napp-navbar {\r\n    position: fixed;\r\n    z-index: 100;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LW5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgIFxyXG5kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXBwLW5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/global/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/global/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-success\">\n    <a class=\"navbar-brand\" href=\"#\">{{applicationName}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"toggleNavbar()\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\" id=\"navbarColor02\">\n        <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">{{language.init}} <span class=\"sr-only\">{{language.login}}</span></a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">{{language.myPet}}</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">{{language.adoptions}}</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">{{language.appointments}}</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">{{language.about}}</a>\n        </li>\n        </ul>\n        <!----<form class=\"form-inline\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form> -->\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/global/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/global/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NavbarComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NavbarComponent, _super);
    function NavbarComponent() {
        var _this = _super.call(this) || this;
        _this.navbarOpen = false;
        return _this;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        _app_component__WEBPACK_IMPORTED_MODULE_1__["AppBase"].setNavbarComponent(this);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/global/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/global/navbar.component.css")]
        }),
        Navbar,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}(_app_component__WEBPACK_IMPORTED_MODULE_1__["AppBase"]));

function Navbar(constructor) {
    //Object.seal(constructor);
    //Object.seal(constructor.prototype);
    //AppBase.setNavbarComponent(constructor.prototype);
}


/***/ }),

/***/ "./src/app/language/Language.ts":
/*!**************************************!*\
  !*** ./src/app/language/Language.ts ***!
  \**************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
var Language = /** @class */ (function () {
    function Language() {
        this.adoptions = ["Adoção"];
        this.init = ["Início"];
        this.login = ["Entrar"];
        this.myPet = ["Meus Pets"];
        this.about = ["Sobre"];
        this.appointments = ["Agenda"];
        this.remindPassword = ["Lembrar"];
        this.haveAnAccount = ["Já possui conta?"];
        this.forgotPassword = ["Esqueceu a senha?"];
        this.signIn = ["Entre"];
        this.signUp = ["Cadastre-se"];
        this.more = ["mais..."];
        this.connect = ["Conecte"];
        this.favoriteSocialMedia = ["com a sua rede social favorita"];
        this.enterYourLogon = ["Ou entre com o seu cadastro"];
        this.dontHave = ["Não possui"];
        this.orSocialMediaAccount = ["ou conta em rede social?"];
        this.email = ["E-mail"];
        this.password = ["Senha"];
    }
    return Language;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* brandico */\r\n[class*=\"brandico-\"]:before {\r\n  font-family: 'brandico', sans-serif;\r\n}\r\n/* entypo */\r\n[class*=\"entypo-\"]:before {\r\n  font-family: 'entypo', sans-serif;\r\n}\r\n/* openwebicons */\r\n[class*=\"openwebicons-\"]:before {\r\n  font-family: 'OpenWeb Icons', sans-serif;\r\n}\r\n/* zocial */\r\n[class*=\"zocial-\"]:before {\r\n  font-family: 'zocial', sans-serif;\r\n}\r\n.form-signin{\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.login-input {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.login-input-pass {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.signup-input {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.signup-input-confirm {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.create-account {\r\n  text-align: center;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n.btn-center{\r\n  width: 50%;\r\n  text-align: center;\r\n  margin: inherit;\r\n}\r\n.social-login-btn {\r\n  margin: 5px;\r\n  width: 20%;\r\n  font-size: 250%;\r\n  padding: 0;\r\n}\r\n.social-login-more {\r\n  width: 45%;\r\n}\r\n.social-google {\r\n  background-color: #da573b;\r\n  border-color: #be5238;\r\n}\r\n.social-google:hover{\r\n  background-color: #be5238;\r\n  border-color: #9b4631;\r\n}\r\n.social-twitter {\r\n  background-color: #1daee3;\r\n  border-color: #3997ba;\r\n}\r\n.social-twitter:hover {\r\n  background-color: #3997ba;\r\n  border-color: #347b95;\r\n}\r\n.social-facebook {\r\n  background-color: #4c699e;\r\n  border-color: #47618d;\r\n}\r\n.social-facebook:hover {\r\n  background-color: #47618d;\r\n  border-color: #3c5173;\r\n}\r\n.social-linkedin {\r\n  background-color: #4875B4;\r\n  border-color: #466b99;\r\n}\r\n.social-linkedin:hover {\r\n  background-color: #466b99;\r\n  border-color: #3b5a7c;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUdiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBicmFuZGljbyAqL1xyXG5bY2xhc3MqPVwiYnJhbmRpY28tXCJdOmJlZm9yZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdicmFuZGljbycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIGVudHlwbyAqL1xyXG5bY2xhc3MqPVwiZW50eXBvLVwiXTpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnZW50eXBvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogb3BlbndlYmljb25zICovXHJcbltjbGFzcyo9XCJvcGVud2ViaWNvbnMtXCJdOmJlZm9yZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuV2ViIEljb25zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogem9jaWFsICovXHJcbltjbGFzcyo9XCJ6b2NpYWwtXCJdOmJlZm9yZSB7XHJcbiAgZm9udC1mYW1pbHk6ICd6b2NpYWwnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW57XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubG9naW4taW5wdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4ubG9naW4taW5wdXQtcGFzcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uc2lnbnVwLWlucHV0IHtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5zaWdudXAtaW5wdXQtY29uZmlybSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uY3JlYXRlLWFjY291bnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYnRuLWNlbnRlcntcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4tYnRuIHtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogMjAlO1xyXG4gIGZvbnQtc2l6ZTogMjUwJTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luLW1vcmUge1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5zb2NpYWwtZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE1NzNiO1xyXG4gIGJvcmRlci1jb2xvcjogI2JlNTIzODtcclxufVxyXG4uc29jaWFsLWdvb2dsZTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU1MjM4O1xyXG4gIGJvcmRlci1jb2xvcjogIzliNDYzMTtcclxufVxyXG5cclxuLnNvY2lhbC10d2l0dGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhZWUzO1xyXG4gIGJvcmRlci1jb2xvcjogIzM5OTdiYTtcclxufVxyXG4uc29jaWFsLXR3aXR0ZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk3YmE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzQ3Yjk1O1xyXG59XHJcblxyXG4uc29jaWFsLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM2OTllO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ3NjE4ZDtcclxufVxyXG4uc29jaWFsLWZhY2Vib29rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc2MThkO1xyXG4gIGJvcmRlci1jb2xvcjogIzNjNTE3MztcclxufVxyXG5cclxuLnNvY2lhbC1saW5rZWRpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NzVCNDtcclxuICBib3JkZXItY29sb3I6ICM0NjZiOTk7XHJcbn1cclxuLnNvY2lhbC1saW5rZWRpbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NmI5OTtcclxuICBib3JkZXItY29sb3I6ICMzYjVhN2M7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">     \n<script id=\"metamorph-1-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-21-start\" type=\"text/x-placeholder\"></script>\n\n<div class=\"container text-center\">\n    <form class=\"form-signin\" data-ember-action=\"2\">\n        <h2 class=\"form-signin-heading\">{{language.signIn}}</h2>\n        <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\n        <br><br>\n\n        <p>\n        <a class=\"btn btn-primary social-login-btn social-facebook\" href=\"/auth/facebook\"><i class=\"fa fa-facebook\"></i></a>\n        <a class=\"btn btn-primary social-login-btn social-twitter\" href=\"/auth/twitter\"><i class=\"fa fa-twitter\"></i></a>\n        </p>\n        <p>\n        <a class=\"btn btn-primary social-login-btn social-linkedin\" href=\"/auth/linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n        <a class=\"btn btn-primary social-login-btn social-google\" href=\"/auth/google\"><i class=\"fa fa-google-plus\"></i></a>\n        </p>\n\n        <div class=\"btn-group social-login-more\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle btn-block\" data-toggle=\"dropdown\">\n        {{language.more}}\n        </button>\n        <ul class=\"dropdown-menu text-left \" role=\"menu\">\n        <li><a href=\"#\"><i class=\"fa fa-tumblr-sign\"></i>   Tumblr</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-github-alt\"></i>   Github</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-dropbox\"></i>   Dropbox</a></li>\n        <li><a href=\"/auth/amazon\"><span class=\"zocial-amazon\"></span>   Amazon</a></li>\n        <li><a href=\"#\"><span class=\"zocial-bitbucket\"></span>   Bitbucket</a></li>\n        <li><a href=\"#\"><span class=\"zocial-evernote\"></span>   Evernote</a></li>\n        <li><a href=\"#\"><span class=\"zocial-meetup\"></span>   Meetup</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-windows\"></i>   Windows Live</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-weibo\"></i>   Weibo</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-foursquare\"></i>   Foursquare</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-stackexchange\"></i>   Stack Exchange</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-trello\"></i>   Trello</a></li>\n        <li><a href=\"#\"><span class=\"zocial-wordpress\"></span>   Wordpress</a></li>\n        </ul>\n        </div>\n        <br><br>\n\n        <small class=\"text-muted\">{{language.enterYourLogon}} {{applicationName}}</small>\n        <br><br>\n        \n        <input id=\"ember360\" class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.email}}\" type=\"text\">\n        <input id=\"ember361\" class=\"ember-view ember-text-field form-control login-input-pass\" placeholder=\"{{language.password}}\" type=\"password\">\n\n        <script id=\"metamorph-22-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-22-end\" type=\"text/x-placeholder\"></script>\n\n        <button class=\"btn btn-lg btn-success btn-block btn-center\" type=\"submit\" data-bindattr-3=\"3\">{{language.login}}</button>\n        <br>\n        <small class=\"create-account text-muted\">{{language.dontHave}} {{applicationName}} {{language.orSocialMediaAccount}} <button id=\"ember363\" class=\"ember-view btn btn-sm btn-default\"> {{language.signUp}} </button> </small>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent() {
        return _super.call(this) || this;
    }
    LoginComponent.prototype.ngOnInit = function () {
        _app_component__WEBPACK_IMPORTED_MODULE_2__["AppBase"].addModule(this);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
        //https://bootsnipp.com/snippets/kMdg
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppBase"]));



/***/ }),

/***/ "./src/app/maps/maps.component.css":
/*!*****************************************!*\
  !*** ./src/app/maps/maps.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbWFwcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/maps/maps.component.html":
/*!******************************************!*\
  !*** ./src/app/maps/maps.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  maps works!\n</p>\n"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/maps/maps.component.html"),
            styles: [__webpack_require__(/*! ./maps.component.css */ "./src/app/maps/maps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




var startApp = function () {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
};
var onDeviceReady = function () {
    startApp();
};
document.addEventListener('deviceready', onDeviceReady, false);
try {
    if (!cordova) {
    }
}
catch (e) {
    startApp();
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eporto\git\Toto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map