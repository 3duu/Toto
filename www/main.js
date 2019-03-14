(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, displayName, cordova, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"br.com.petlife","version":"1.0.0","displayName":"PetLif3","cordova":{"plugins":{"cordova-plugin-whitelist":{},"cordova-plugin-device":{},"cordova-plugin-safariviewcontroller":{},"cordova-sqlite-storage":{},"cordova-plugin-geolocation":{},"cordova-plugin-googlemaps":{"API_KEY_FOR_ANDROID":"AIzaSyCktbQb6g7SX4lIgecyzsrz0sMzl3660nU","API_KEY_FOR_IOS":"AIzaSyAaRDbFBx5gubzyW9_LE6KCFM3vE80hQw8","PLAY_SERVICES_VERSION":"15.0.1","ANDROID_SUPPORT_V4_VERSION":"27.+","LOCATION_WHEN_IN_USE_DESCRIPTION":"This app wants to get your location while this app runs only.","LOCATION_ALWAYS_USAGE_DESCRIPTION":"This app wants to get your location always, even this app runs in background."},"cordova-plugin-inappbrowser":{}},"platforms":["android","ios","browser"]},"scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e","rebuild":"electron-rebuild -f -w sqlite3"},"private":true,"dependencies":{"@angular/animations":"~7.2.0","@angular/common":"~7.2.0","@angular/compiler":"~7.2.0","@angular/core":"~7.2.0","@angular/forms":"~7.2.0","@angular/platform-browser":"~7.2.0","@angular/platform-browser-dynamic":"~7.2.0","@angular/router":"~7.2.0","ansi-escapes":"^3.2.0","base64-js":"^1.3.0","bootstrap":"^4.3.1","browserify-zlib":"^0.2.0","cordova-android":"^7.1.4","cordova-browser":"^5.0.4","cordova-ios":"~4.5.5","cordova-plugin-device":"2.0.2","cordova-plugin-geolocation":"~2.2.0","cordova-plugin-googlemaps":"~2.5.2","cordova-plugin-safariviewcontroller":"~1.5.4","cordova-plugin-whitelist":"^1.3.3","core-js":"^2.5.4","font-awesome":"^4.7.0","jquery":"^3.3.1","ngx-bootstrap":"^3.2.0","rxjs":"^6.4.0","stream":"0.0.2","tls":"0.0.1","tslib":"^1.9.0","webpack":"^4.29.6","zone.js":"~0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"^0.13.3","@angular/cli":"~7.3.3","@angular/compiler-cli":"~7.2.0","@angular/language-service":"~7.2.0","@types/jasmine":"~2.8.8","@types/jasminewd2":"~2.0.3","@types/node":"^8.10.42","codelyzer":"~4.5.0","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"^4.0.1","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.4.0","ts-node":"~7.0.0","tslint":"~5.11.0","typescript":"3.2.2"}};

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
    function AppBase() {
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _global_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/navbar.component */ "./src/app/global/navbar.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cordova.service */ "./src/app/cordova.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _global_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_8__["MapsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot()
            ],
            providers: [_cordova_service__WEBPACK_IMPORTED_MODULE_10__["CordovaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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



//import { UserDao } from '../database/database';
//https://bootsnipp.com/snippets/kMdg
var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent( /*private elementRef: ElementRef*/) {
        var _this = _super.call(this) || this;
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
        alert("Done!");
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

module.exports = ".map-container {\r\n    height: 100%;\r\n}\r\n.Location__title{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n#map_canvas {\r\n    height: 100% !important;\r\n    width: 100% !important;\r\n    top: 0;\r\n    left: 0;\r\n    position: absolute;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9tYXBzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWFwcy9tYXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLkxvY2F0aW9uX190aXRsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuI21hcF9jYW52YXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4iXX0= */"

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




//https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/README.md
//phonegap plugin add  cordova-plugin-googlemaps
//https://github.com/arnesson/angular-cordova
//alternative https://github.com/ercobo/angular-cordova
var MapsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapsComponent, _super);
    function MapsComponent(cordovaService) {
        var _this = _super.call(this) || this;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cordova_service__WEBPACK_IMPORTED_MODULE_3__["CordovaService"]])
    ], MapsComponent);
    return MapsComponent;
}(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppBase"]));



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
    name: __webpack_require__(/*! ../../package.json */ "./package.json").displayName
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

module.exports = __webpack_require__(/*! C:\Users\eporto\git\Toto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map