(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, displayName, endpoint, cordova, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"br.com.petlife","version":"1.0.0","displayName":"PetLif3","endpoint":"localhost:9003","cordova":{"plugins":{"cordova-plugin-whitelist":{},"cordova-plugin-device":{},"cordova-plugin-safariviewcontroller":{},"cordova-sqlite-storage":{},"cordova-plugin-geolocation":{},"cordova-plugin-googlemaps":{"API_KEY_FOR_ANDROID":"AIzaSyCktbQb6g7SX4lIgecyzsrz0sMzl3660nU","API_KEY_FOR_IOS":"AIzaSyAaRDbFBx5gubzyW9_LE6KCFM3vE80hQw8","PLAY_SERVICES_VERSION":"15.0.1","ANDROID_SUPPORT_V4_VERSION":"27.+","LOCATION_WHEN_IN_USE_DESCRIPTION":"This app wants to get your location while this app runs only.","LOCATION_ALWAYS_USAGE_DESCRIPTION":"This app wants to get your location always, even this app runs in background."},"cordova-plugin-inappbrowser":{}},"platforms":["android","ios","browser"]},"scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e","rebuild":"electron-rebuild -f -w sqlite3"},"private":true,"dependencies":{"@angular/animations":"~7.2.0","@angular/common":"~7.2.0","@angular/compiler":"~7.2.0","@angular/core":"~7.2.0","@angular/forms":"~7.2.0","@angular/platform-browser":"~7.2.0","@angular/platform-browser-dynamic":"~7.2.0","@angular/router":"~7.2.0","ansi-escapes":"^3.2.0","base64-js":"^1.3.0","bootstrap":"^4.3.1","browserify-zlib":"^0.2.0","cordova-android":"^7.1.4","cordova-browser":"^5.0.4","cordova-ios":"~4.5.5","cordova-plugin-device":"2.0.2","cordova-plugin-geolocation":"~2.2.0","cordova-plugin-googlemaps":"~2.5.2","cordova-plugin-safariviewcontroller":"~1.5.4","cordova-plugin-whitelist":"^1.3.3","core-js":"^2.5.4","font-awesome":"^4.7.0","jquery":"^3.3.1","ngx-bootstrap":"^3.2.0","rxjs":"^6.4.0","stream":"0.0.2","tls":"0.0.1","tslib":"^1.9.0","webpack":"^4.29.6","zone.js":"~0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"^0.13.3","@angular/cli":"~7.3.3","@angular/compiler-cli":"~7.2.0","@angular/language-service":"~7.2.0","@types/jasmine":"~2.8.8","@types/jasminewd2":"~2.0.3","@types/node":"^8.10.42","codelyzer":"~4.5.0","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"^4.0.1","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.4.0","ts-node":"~7.0.0","tslint":"~5.11.0","typescript":"3.2.2"}};

/***/ }),

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



var routes = [
/*{ path: 'device-info', component: DeviceInfoComponent }*/
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
/* harmony import */ var _language_Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/Language */ "./src/app/language/Language.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular';
    }
    AppComponent.applicationName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].name;
    AppComponent.language = new _language_Language__WEBPACK_IMPORTED_MODULE_1__["Language"]();
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

var AppBase = /** @class */ (function () {
    function AppBase(api) {
        this.api = api;
        this.applicationName = AppComponent.applicationName;
        this.language = AppComponent.language;
        AppBase.addModule(this);
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
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/services */ "./src/app/service/services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _global_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/navbar.component */ "./src/app/global/navbar.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _global_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_9__["MapsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
            ],
            /*entryComponents: [
              LoginComponent
            ],*/
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [_cordova_service__WEBPACK_IMPORTED_MODULE_11__["CordovaService"], _service_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cordova.service.ts":
/*!************************************!*\
  !*** ./src/app/cordova.service.ts ***!
  \************************************/
/*! exports provided: CordovaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CordovaService", function() { return CordovaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




function _window() {
    // return the global native browser window object
    return window;
}
//https://medium.com/@EliaPalme/how-to-wrap-an-angular-app-with-apache-cordova-909024a25d79
var CordovaService = /** @class */ (function () {
    function CordovaService(zone) {
        var _this = this;
        this.zone = zone;
        this.resume = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'resume').subscribe(function (event) {
            _this.zone.run(function () {
                _this.onResume();
            });
        });
    }
    Object.defineProperty(CordovaService.prototype, "cordova", {
        get: function () {
            return _window().cordova;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaService.prototype, "window", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaService.prototype, "onCordova", {
        get: function () {
            return !!_window().cordova;
        },
        enumerable: true,
        configurable: true
    });
    CordovaService.prototype.onResume = function () {
        this.resume.next(true);
    };
    CordovaService.prototype.openLinkInBrowser = function (url) {
        _window().SafariViewController.isAvailable(function (available) {
            if (available) {
                _window().SafariViewController.show({
                    url: url,
                    barColor: "#f7f7f9",
                    tintColor: "#1ca8dd",
                    controlTintColor: "#1ca8dd",
                });
            }
            else {
                _window().cordova.InAppBrowser.open(url, "_blank");
            }
        });
    };
    CordovaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], CordovaService);
    return CordovaService;
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
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/browser/index.js");


var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getLogin = function () {
        return this.login;
    };
    User.prototype.setLogin = function (login) {
        this.login = login;
    };
    User.prototype.getSignInDate = function () {
        return this.signInDate;
    };
    User.prototype.getPassword = function () {
        return this.encryptedPassword;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
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
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], User.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], User.prototype, "login", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])("signin_date"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], User.prototype, "signInDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], User.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])("encrypted_password"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], User.prototype, "encryptedPassword", void 0);
    User = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])("user"),
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

module.exports = "mat-navbar-container {\n    width: 100% !important;\n    height: calc(100vh - 64px) !important;\n}\n\nmat-navbar {\n    background-color: blue !important;\n}\n\ndiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\napp-navbar {\n    position: fixed;\n    z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbmF2YmFyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KSAhaW1wb3J0YW50O1xufVxuXG5tYXQtbmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG59XG4gICAgXG5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYXBwLW5hdmJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDtcbn0iXX0= */"

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
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");




var NavbarComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NavbarComponent, _super);
    function NavbarComponent(api) {
        var _this = _super.call(this, api) || this;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
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

module.exports = "/* brandico */\n[class*=\"brandico-\"]:before {\n  font-family: 'brandico', sans-serif;\n}\n/* entypo */\n[class*=\"entypo-\"]:before {\n  font-family: 'entypo', sans-serif;\n}\n/* openwebicons */\n[class*=\"openwebicons-\"]:before {\n  font-family: 'OpenWeb Icons', sans-serif;\n}\n/* zocial */\n[class*=\"zocial-\"]:before {\n  font-family: 'zocial', sans-serif;\n}\n.form-signin{\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.login-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.login-input-pass {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.signup-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.signup-input-confirm {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.create-account {\n  text-align: center;\n  width: 100%;\n  display: block;\n}\n.form-signin .form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.btn-center{\n  width: 50%;\n  text-align: center;\n  margin: inherit;\n}\n.social-login-btn {\n  margin: 5px;\n  width: 20%;\n  font-size: 250%;\n  padding: 0;\n}\n.social-login-more {\n  width: 45%;\n}\n.social-google {\n  background-color: #da573b;\n  border-color: #be5238;\n}\n.social-google:hover{\n  background-color: #be5238;\n  border-color: #9b4631;\n}\n.social-twitter {\n  background-color: #1daee3;\n  border-color: #3997ba;\n}\n.social-twitter:hover {\n  background-color: #3997ba;\n  border-color: #347b95;\n}\n.social-facebook {\n  background-color: #4c699e;\n  border-color: #47618d;\n}\n.social-facebook:hover {\n  background-color: #47618d;\n  border-color: #3c5173;\n}\n.social-linkedin {\n  background-color: #4875B4;\n  border-color: #466b99;\n}\n.social-linkedin:hover {\n  background-color: #466b99;\n  border-color: #3b5a7c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUdiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBicmFuZGljbyAqL1xuW2NsYXNzKj1cImJyYW5kaWNvLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2JyYW5kaWNvJywgc2Fucy1zZXJpZjtcbn1cblxuLyogZW50eXBvICovXG5bY2xhc3MqPVwiZW50eXBvLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2VudHlwbycsIHNhbnMtc2VyaWY7XG59XG5cbi8qIG9wZW53ZWJpY29ucyAqL1xuW2NsYXNzKj1cIm9wZW53ZWJpY29ucy1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuV2ViIEljb25zJywgc2Fucy1zZXJpZjtcbn1cblxuLyogem9jaWFsICovXG5bY2xhc3MqPVwiem9jaWFsLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ3pvY2lhbCcsIHNhbnMtc2VyaWY7XG59XG5cbi5mb3JtLXNpZ25pbntcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbi1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLmxvZ2luLWlucHV0LXBhc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLnNpZ251cC1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uc2lnbnVwLWlucHV0LWNvbmZpcm0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmNyZWF0ZS1hY2NvdW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5idG4tY2VudGVye1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogaW5oZXJpdDtcbn1cblxuLnNvY2lhbC1sb2dpbi1idG4ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDIwJTtcbiAgZm9udC1zaXplOiAyNTAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc29jaWFsLWxvZ2luLW1vcmUge1xuICB3aWR0aDogNDUlO1xufVxuXG4uc29jaWFsLWdvb2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYTU3M2I7XG4gIGJvcmRlci1jb2xvcjogI2JlNTIzODtcbn1cbi5zb2NpYWwtZ29vZ2xlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU1MjM4O1xuICBib3JkZXItY29sb3I6ICM5YjQ2MzE7XG59XG5cbi5zb2NpYWwtdHdpdHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZGFlZTM7XG4gIGJvcmRlci1jb2xvcjogIzM5OTdiYTtcbn1cbi5zb2NpYWwtdHdpdHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk3YmE7XG4gIGJvcmRlci1jb2xvcjogIzM0N2I5NTtcbn1cblxuLnNvY2lhbC1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzY5OWU7XG4gIGJvcmRlci1jb2xvcjogIzQ3NjE4ZDtcbn1cbi5zb2NpYWwtZmFjZWJvb2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc2MThkO1xuICBib3JkZXItY29sb3I6ICMzYzUxNzM7XG59XG5cbi5zb2NpYWwtbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg3NUI0O1xuICBib3JkZXItY29sb3I6ICM0NjZiOTk7XG59XG4uc29jaWFsLWxpbmtlZGluOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NmI5OTtcbiAgYm9yZGVyLWNvbG9yOiAjM2I1YTdjO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">     \n<script id=\"metamorph-1-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-21-start\" type=\"text/x-placeholder\"></script>\n\n<div class=\"container text-center\">\n    <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"doLogin(loginForm)\">\n        <h2 class=\"form-signin-heading\">{{language.signIn}}</h2>\n        <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\n        <br><br>\n\n        <p>\n        <a class=\"btn btn-primary social-login-btn social-facebook\" href=\"/auth/facebook\"><i class=\"fa fa-facebook\"></i></a>\n        <a class=\"btn btn-primary social-login-btn social-twitter\" href=\"/auth/twitter\"><i class=\"fa fa-twitter\"></i></a>\n        </p>\n        <p>\n        <a class=\"btn btn-primary social-login-btn social-linkedin\" href=\"/auth/linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n        <a class=\"btn btn-primary social-login-btn social-google\" href=\"/auth/google\"><i class=\"fa fa-google-plus\"></i></a>\n        </p>\n\n        <div class=\"btn-group social-login-more\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle btn-block\" data-toggle=\"dropdown\">\n        {{language.more}}\n        </button>\n        <ul class=\"dropdown-menu text-left \" role=\"menu\">\n        <li><a href=\"#\"><i class=\"fa fa-tumblr-sign\"></i>   Tumblr</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-github-alt\"></i>   Github</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-dropbox\"></i>   Dropbox</a></li>\n        <li><a href=\"/auth/amazon\"><span class=\"zocial-amazon\"></span>   Amazon</a></li>\n        <li><a href=\"#\"><span class=\"zocial-bitbucket\"></span>   Bitbucket</a></li>\n        <li><a href=\"#\"><span class=\"zocial-evernote\"></span>   Evernote</a></li>\n        <li><a href=\"#\"><span class=\"zocial-meetup\"></span>   Meetup</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-windows\"></i>   Windows Live</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-weibo\"></i>   Weibo</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-foursquare\"></i>   Foursquare</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-stackexchange\"></i>   Stack Exchange</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-trello\"></i>   Trello</a></li>\n        <li><a href=\"#\"><span class=\"zocial-wordpress\"></span>   Wordpress</a></li>\n        </ul>\n        </div>\n        <br><br>\n\n        <small class=\"text-muted\">{{language.enterYourLogon}} {{applicationName}}</small>\n        <br><br>\n        \n        <input id=\"ember360\" class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.email}}\" type=\"text\" name=\"login\" id=\"login\" ngModel>\n        <input id=\"ember361\" class=\"ember-view ember-text-field form-control login-input-pass\" placeholder=\"{{language.password}}\" type=\"password\" name=\"password\" id=\"password\" ngModel>\n\n        <script id=\"metamorph-22-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-22-end\" type=\"text/x-placeholder\"></script>\n\n        <button class=\"btn btn-lg btn-success btn-block btn-center\" type=\"submit\" data-bindattr-3=\"3\">{{language.login}}</button>\n        <br>\n        <small class=\"create-account text-muted\">{{language.dontHave}} {{applicationName}} {{language.orSocialMediaAccount}} <button id=\"ember363\" class=\"ember-view btn btn-sm btn-default\"> {{language.signUp}} </button> </small>\n    </form>\n</div>"

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
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");





//import { UserDao } from '../database/database';
//https://bootsnipp.com/snippets/kMdg
var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(/*private elementRef: ElementRef,*/ api) {
        var _this = _super.call(this, api) || this;
        _this.loading = false;
        _this.submitted = false;
        return _this;
    }
    LoginComponent_1 = LoginComponent;
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.doLogin = function (form) {
        this.submitted = true;
        this.loginForm = form;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        var user = this.api.login(new _entity_User__WEBPACK_IMPORTED_MODULE_3__["User"]());
        user.subscribe(function (usr) {
            window.user = user;
            alert(usr);
            console.log(usr);
        });
        console.log(form.value);
        /*
        this.authenticationService.login(form.value.login, form.value.password);
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  //this.alertService.error(error);
                  this.loading = false;
              });
        }*/
        //alert(form.value.login);
    };
    LoginComponent.getUser = function () {
        return LoginComponent_1.user;
    };
    LoginComponent.prototype.destroy = function () {
        //this.elementRef.nativeElement.remove();
    };
    var LoginComponent_1;
    LoginComponent = LoginComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
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

module.exports = ".map-container {\n    height: 100%;\n}\n.Location__title{\n    padding-left: 10px;\n    padding-right: 10px;\n}\n#map_canvas {\n    height: 100% !important;\n    width: 100% !important;\n    top: 0;\n    left: 0;\n    position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9tYXBzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWFwcy9tYXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLkxvY2F0aW9uX190aXRsZXtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbiNtYXBfY2FudmFzIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/maps/maps.component.html":
/*!******************************************!*\
  !*** ./src/app/maps/maps.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map_canvas\" class=\"container\" style=\"width:90%;height:85%;align-content:center\"></div>"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");





//https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/README.md
//phonegap plugin add  cordova-plugin-googlemaps
//https://github.com/arnesson/angular-cordova
//alternative https://github.com/ercobo/angular-cordova
var MapsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapsComponent, _super);
    function MapsComponent(cordovaService, api) {
        var _this = _super.call(this, api) || this;
        _this.cordovaService = cordovaService;
        _this.options = {
            enableHighAccuracy: true,
            maximumAge: 3600000
        };
        return _this;
    }
    MapsComponent.prototype.ngOnInit = function () {
        //Cordova.deviceready.subscribe(() => {
        this.loadMap();
        //});
    };
    /*
    getCurrentPosition(): Observable<any> {
      if (!this.sub) {
        this.sub = this.geolocationService.watchPosition(
          map((res) => {
            // console.log("watchPosition update");
            this.position = {
              lat: (<any>res).coords.latitude,
              lng: (<any>res).coords.longitude
            };
          })
        );
      }
  
      if (this.position) {
        return of(this.position);
      } else {
        return this.sub.first().timeout(10000).catch(() => {
          return of({});
        });
      }
    }*/
    MapsComponent.prototype.loadMap = function () {
        var div = document.getElementById("map_canvas");
        var options = {
            enableHighAccuracy: true,
            maximumAge: 3600000
        };
        var watchID = window.navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        function onSuccess(position) {
            this.position = new window.plugin.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            this.cordovaService.window().position = this.position;
            alert(this.position);
        }
        ;
        function onError(error) {
            window.navigator.notification.alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n ');
        }
        function onMapReady() {
            //(<any>window).navigator.notification.alert('lat: ' + this.position.lat + "\n" + this.position.lng);
            //this.map.showDialog();
            //this.map.setCenter(this.position);
            //this.map.setZoom(13);
            alert("The google map is available on this device.");
        }
        this.map = window.plugin.google.maps.Map.getMap(div);
        this.map.addEventListener(window.plugin.google.maps.event.MAP_READY, onMapReady);
        // Wait until the map is ready status.
    };
    MapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/maps/maps.component.html"),
            styles: [__webpack_require__(/*! ./maps.component.css */ "./src/app/maps/maps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cordova_service__WEBPACK_IMPORTED_MODULE_3__["CordovaService"], _service_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], MapsComponent);
    return MapsComponent;
}(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppBase"]));



/***/ }),

/***/ "./src/app/service/services.ts":
/*!*************************************!*\
  !*** ./src/app/service/services.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






// Set the http options
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": "c31z" })
};
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService_1 = ApiService;
    /**
     * Function to handle error when the server return an error
     *
     * @param error
     */
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    /**
     * Function to extract the data when the server return some
     *
     * @param res
     */
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.login = function (user) {
        // Call the http GETaler
        console.log(ApiService_1.USER_LOGIN);
        return this.http.get(ApiService_1.USER_LOGIN, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    var ApiService_1;
    ApiService.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint;
    ApiService.USER_LOGIN = ApiService_1.endpoint + "/user/login";
    ApiService = ApiService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ApiService);
    return ApiService;
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
    production: false,
    version: __webpack_require__(/*! ../../package.json */ "./package.json").version,
    name: __webpack_require__(/*! ../../package.json */ "./package.json").displayName,
    endpoint: __webpack_require__(/*! ../../package.json */ "./package.json").endpoint
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




var onDeviceReady = function () {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
};
document.addEventListener('deviceready', onDeviceReady, false);
if (window.cordova == undefined) {
    onDeviceReady();
}
//onDeviceReady();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eduardo/git/Toto/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map