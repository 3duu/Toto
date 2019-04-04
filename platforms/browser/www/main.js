(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, displayName, endpoints, passwordConfig, cordova, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"br.com.toppet","version":"1.0.0","displayName":"TOP-PET","endpoints":{"local":"http://localhost:9003","indra":"http://192.168.137.1:9003/toppet","indraLocal":"http://192.168.137.1:9003","home":"http://192.168.1.3:9003/toppet","home2":"http://192.168.1.3:9003"},"passwordConfig":{"min":6,"contains":""},"cordova":{"plugins":{"cordova-plugin-device":{},"cordova-plugin-safariviewcontroller":{"API_KEY_FOR_ANDROID":"AIzaSyCktbQb6g7SX4lIgecyzsrz0sMzl3660nU","API_KEY_FOR_IOS":"AIzaSyAaRDbFBx5gubzyW9_LE6KCFM3vE80hQw8","PLAY_SERVICES_VERSION":"15.0.1","ANDROID_SUPPORT_V4_VERSION":"27.+","LOCATION_WHEN_IN_USE_DESCRIPTION":"This app wants to get your location while this app runs only.","LOCATION_ALWAYS_USAGE_DESCRIPTION":"This app wants to get your location always, even this app runs in background."},"cordova-plugin-googlemaps":{"API_KEY_FOR_ANDROID":"AIzaSyCktbQb6g7SX4lIgecyzsrz0sMzl3660nU","API_KEY_FOR_IOS":"AIzaSyAaRDbFBx5gubzyW9_LE6KCFM3vE80hQw8","PLAY_SERVICES_VERSION":"15.0.1","ANDROID_SUPPORT_V4_VERSION":"27.+","LOCATION_WHEN_IN_USE_DESCRIPTION":"This app wants to get your location while this app runs only.","LOCATION_ALWAYS_USAGE_DESCRIPTION":"This app wants to get your location always, even this app runs in background."},"cordova-plugin-inappbrowser":{},"cordova-plugin-geolocation":{},"cordova-plugin-whitelist":{},"cordova-plugin-facebook4":{"APP_ID":"389609115207477","APP_NAME":"Toppet","FACEBOOK_HYBRID_APP_EVENTS":"false","FACEBOOK_ANDROID_SDK_VERSION":"4.40.0"},"cordova-plugin-camera":{}},"platforms":["android"]},"scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"~7.2.0","@angular/common":"~7.2.0","@angular/compiler":"~7.2.0","@angular/core":"~7.2.0","@angular/forms":"~7.2.0","@angular/platform-browser":"~7.2.0","@angular/platform-browser-dynamic":"~7.2.0","@angular/router":"~7.2.0","ansi-escapes":"^3.2.0","base64-js":"^1.3.0","bootstrap":"^4.3.1","braces":"^2.3.2","browserify-zlib":"^0.2.0","cached-path-relative":"^1.0.2","cordova-android":"^7.1.4","cordova-browser":"^5.0.4","cordova-plugin-camera":"4.0.3","cordova-plugin-device":"2.0.2","cordova-plugin-facebook4":"4.2.1","cordova-plugin-geolocation":"4.0.1","cordova-plugin-googlemaps":"~2.5.2","cordova-plugin-inappbrowser":"~3.0.0","cordova-plugin-safariviewcontroller":"~1.5.4","cordova-plugin-whitelist":"1.3.3","core-js":"^2.5.4","jquery":"^3.3.1","lodash":"^4.17.11","ngx-bootstrap":"^3.2.0","ngx-modialog":"^5.0.1","phonegap":"^8.2.2","rxjs":"^6.4.0","stream":"0.0.2","tls":"0.0.1","tslib":"^1.9.0","webpack":"^4.29.6","zone.js":"~0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"^0.13.3","@angular/cli":"~7.3.3","@angular/compiler-cli":"~7.2.0","@angular/language-service":"~7.2.0","@types/jasmine":"~2.8.8","@types/jasminewd2":"~2.0.3","@types/node":"^8.10.42","codelyzer":"~4.5.0","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"^4.0.1","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.4.0","ts-node":"~7.0.0","tslint":"~5.11.0","typescript":"3.2.2"}};

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

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{type}}\" [ngClass]=\"{ 'button-disabled': !visible }\" role=\"alert\">\n  {{message}}\n</div>"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.visible = false;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.show = function (message, type) {
        this.message = message;
        this.visible = true;
        this.type = type;
    };
    AlertComponent.prototype.hide = function () {
        this.message = null;
        this.visible = false;
        this.type = null;
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<!--<app-login></app-login>-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _language_Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/Language */ "./src/app/language/Language.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");






//https://fontawesome.com/icons?d=gallery&c=charity&m=free
//ng generate component home --entryComponent=true
var AppComponent = /** @class */ (function () {
    function AppComponent(componentFactoryResolver, container) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.container = container;
        // Keep track of list of generated components for removal purposes
        this.components = [];
        this.title = AppComponent_1.applicationName;
        AppComponent_1.appComponent = this;
    }
    AppComponent_1 = AppComponent;
    AppComponent.getAppComponent = function () {
        return AppComponent_1.appComponent;
    };
    AppComponent.prototype.addComponent = function (componentClass) {
        // Create component dynamically inside the ng-template
        if (this.container != null) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
            var component = this.container.createComponent(componentFactory);
            console.log("Adicionado: " + component.instance.constructor.name);
            // Push the component so that we can keep track of which components are created
            this.components.push(component);
            return component.instance;
        }
        return null;
    };
    AppComponent.prototype.removeComponent = function (componentClass, instance) {
        // Find the component
        var component = this.components.find(function (component) { return instance ? (component.instance instanceof componentClass.constructor) : (component.instance instanceof componentClass); });
        var componentIndex = this.components.indexOf(component);
        if (componentIndex !== -1) {
            // Remove component from both view and array
            this.container.remove(this.container.indexOf(component));
            this.components.splice(componentIndex, 1);
            console.log("Removido: " + component.instance.constructor.name);
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.startApp(); });
    };
    AppComponent.prototype.startApp = function () {
        //Apagar session values
        var values = Object.keys(_utils__WEBPACK_IMPORTED_MODULE_5__["SessionAttributes"]).map(function (k) { return _utils__WEBPACK_IMPORTED_MODULE_5__["SessionAttributes"][k]; });
        values.forEach(function (attr) {
            localStorage.setItem(attr, null);
        });
        this.changePage(_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]);
    };
    AppComponent.prototype.changePage = function (page) {
        var _this = this;
        this.components.forEach(function (component) {
            _this.removeComponent(component.instance, true);
        });
        this.addComponent(page);
    };
    AppComponent.prototype.changeCurrentPage = function (current, page) {
        this.removeComponent(current, true);
        return this.addComponent(page);
    };
    AppComponent.prototype.addSingleComponent = function (page, instance) {
        var component = instance ? page : this.components.find(function (component) { return component.instance instanceof page; });
        if (component == null) {
            return this.addComponent(page);
        }
        return component;
    };
    var AppComponent_1;
    AppComponent.applicationName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].name;
    AppComponent.language = new _language_Language__WEBPACK_IMPORTED_MODULE_1__["Language"]();
    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-modialog */ "./node_modules/ngx-modialog/fesm5/ngx-modialog.js");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "./node_modules/ngx-modialog/plugins/bootstrap/fesm5/ngx-modialog-plugins-bootstrap.js");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_8__["MapsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["PetsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["EditPetsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["PetPickerComponent"]
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_8__["MapsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["PetsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["EditPetsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["PetPickerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_modialog__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot(),
                ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_18__["BootstrapModalModule"]
            ],
            providers: [_cordova_service__WEBPACK_IMPORTED_MODULE_10__["CordovaService"], _service_services__WEBPACK_IMPORTED_MODULE_1__["UserApiService"], _service_services__WEBPACK_IMPORTED_MODULE_1__["PetApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appbase.ts":
/*!****************************!*\
  !*** ./src/app/appbase.ts ***!
  \****************************/
/*! exports provided: AppBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBase", function() { return AppBase; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");




var AppBase = /** @class */ (function () {
    function AppBase() {
        this.showNavMenu = true;
        this.applicationName = _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"].applicationName;
        this.language = _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"].language;
        //private children = [];
        this.loading = false;
        AppBase.addModule(this);
    }
    AppBase.prototype.ngOnInit = function () {
    };
    AppBase.prototype.getUser = function () {
        var json = localStorage.getItem(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].CURRENT_USER) != undefined ? JSON.parse(localStorage.getItem(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].CURRENT_USER)) : null;
        if (json != null) {
            var user = new _entity_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
            user.id = json.id;
            user.name = json.name;
            user.password = json.password;
            user.username = json.username;
            user.creationDate = json.creationDate;
            user.admin = json.admin;
            user.pets = json.pets;
            return user;
        }
        return json;
    };
    AppBase.prototype.getSessionId = function () {
        return localStorage.getItem(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].SESSION_ID) != undefined ? JSON.parse(localStorage.getItem(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].SESSION_ID)) : null;
    };
    AppBase.prototype.getNavbarComponent = function () {
        return AppBase.navbarComponent;
    };
    AppBase.prototype.getAppComponent = function () {
        return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"].getAppComponent();
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
    AppBase.prototype.onLogged = function (afterLoginRedirectComponent) {
        var _this = this;
        var user = this.getUser();
        window.user = user;
        if (user != null) {
            this.getNavbarComponent().username = user.name;
            if (afterLoginRedirectComponent != null) {
                setTimeout(function () { _this.getAppComponent().changePage(afterLoginRedirectComponent); });
            }
            else {
                this.getAppComponent().changePage(_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]);
            }
        }
    };
    AppBase.prototype.changeCurrentPage = function (current, page) {
        var newPage = this.getAppComponent().changeCurrentPage(current, page);
        newPage.lastComponent = current.constructor;
    };
    AppBase.prototype.goBack = function (lastComponent) {
        this.getAppComponent().changeCurrentPage(this, lastComponent);
    };
    AppBase.modules = [];
    return AppBase;
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
    Object.defineProperty(CordovaService.prototype, "devicePlatform", {
        get: function () {
            return device.platform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaService.prototype, "isBrowser", {
        get: function () {
            return device == undefined || device.platform == "browser";
        },
        enumerable: true,
        configurable: true
    });
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

/***/ "./src/app/entity/Pet.ts":
/*!*******************************!*\
  !*** ./src/app/entity/Pet.ts ***!
  \*******************************/
/*! exports provided: Pet, PetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return Pet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetType", function() { return PetType; });
var Pet = /** @class */ (function () {
    function Pet() {
    }
    return Pet;
}());

var PetType;
(function (PetType) {
    PetType[PetType["OTHER"] = 0] = "OTHER";
    PetType[PetType["DOG"] = 1] = "DOG";
    PetType[PetType["CAT"] = 2] = "CAT";
    PetType[PetType["BIRD"] = 3] = "BIRD";
    PetType[PetType["FISH"] = 4] = "FISH";
    /*RABBIT = "Coelho",
    HAMSTER = "Hamster",*/
})(PetType || (PetType = {}));


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
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".index-icon {\n    margin: 5px;\n    width: 26%;\n    font-size: 350%;\n    padding: 0;\n}\n\n.index-background {\n    background-color: rgb(232, 240, 254);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmRleC1pY29uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogMjYlO1xuICAgIGZvbnQtc2l6ZTogMzUwJTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uaW5kZXgtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjQwLCAyNTQpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <br>\n  <br>\n  <br>\n  <div class=\"index-background\">\n    <p>\n      <a class=\"btn btn-primary index-icon\" href=\"#\" (click)=\"maps()\"><i class=\"fas fa-shopping-basket\"></i></a>&nbsp;\n      <a class=\"btn btn-killgrave index-icon\" href=\"#\" (click)=\"appointments()\"><i class=\"fa fa-calendar\"></i></a>\n    </p>\n    <p>\n      <a class=\"btn btn-orange index-icon\" href=\"#\" (click)=\"pets()\"><i class=\"fa fa-paw\"></i></a>&nbsp;\n      <a class=\"btn btn-pink index-icon\" href=\"#\" (click)=\"donations()\"><i class=\"fa fa-hands-helping\"></i></a>\n    </p>\n  </div>\n    <br>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");





var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent() {
        return _super.call(this) || this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.enableMenu();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.enableMenu(); });
    };
    HomeComponent.prototype.enableMenu = function () {
        this.getNavbarComponent().disableMenu = false;
    };
    HomeComponent.prototype.maps = function () {
        _super.prototype.changeCurrentPage.call(this, this, _maps_maps_component__WEBPACK_IMPORTED_MODULE_2__["MapsComponent"]);
    };
    HomeComponent.prototype.appointments = function () {
        alert("Agenda");
    };
    HomeComponent.prototype.pets = function () {
        _super.prototype.changeCurrentPage.call(this, this, _pets_pets_component__WEBPACK_IMPORTED_MODULE_1__["PetsComponent"]);
    };
    HomeComponent.prototype.donations = function () {
        alert("Doações");
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_4__["AppBase"]));



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
        this.adoptions = "Adoção";
        this.init = "Início";
        this.login = "Entrar";
        this.myPet = "Meus Pets";
        this.about = "Ajuda";
        this.appointments = "Agenda";
        this.remindPassword = "Lembrar";
        this.haveAnAccount = "Já possui conta?";
        this.forgotPassword = "Esqueceu a senha?";
        this.signIn = "Entre";
        this.signUp = "Cadastre-se";
        this.more = "mais...";
        this.connect = "Conecte";
        this.favoriteSocialMedia = "com a sua rede social favorita";
        this.enterYourLogon = "Ou entre com o seu cadastro";
        this.dontHave = "Não possui";
        this.orSocialMediaAccount = "ou conta em rede social?";
        this.email = "E-mail";
        this.username = "E-mail";
        this.name = "Nome";
        this.birthday = "Nascimento";
        this.password = "Senha";
        this.confirmPassword = "Confirme a senha";
        this.logout = "Sair";
        this.createUser = "Registrar";
        this.back = "Voltar";
        this.createYourAccount = "Crie sua conta no ";
        this.age = "Idade";
        this.petType = "Animal";
        this.description = "Descrição";
        this.view = "Visualizar";
        this.animal = "Qual o Pet?";
        this.addNewPet = "Adicionar Pet";
        //Messages
        this.connectionError = "Algo deu errado! \n Verifique se o dispositivo está conectado ou tente novamente mais tarde";
        this.serverError = "Algo inesperado aconteceu! \n Se o problema persistir reporte o problema";
        this.invalidUserPassword = "Usuário ou senha inválido(s)";
        this.requiredFields = "Preencha o(s) campo(s) obrigatório(s)";
        this.usernameExists = "Usuário já cadastrado no sistema";
        this.validateDataError = "Erro ao validar os dados";
        this.retrieveDataError = "Erro ao obter dados";
        this.registerSuccess = "Usuário registrado com sucsso";
        this.invalidEmailAddress = "Forneça um endereço de e-mail válido";
        this.invalidPassword = "Senha deve conter pelo menos :min caracteres";
        this.passwordDoesntMatch = "Confirmação de senha não corresponde com senha";
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

module.exports = "<div class=\"container\">     \n<script id=\"metamorph-1-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-21-start\" type=\"text/x-placeholder\"></script>\n<div class=\"container text-center\">\n    <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"doLogin(loginForm)\">\n        <h2 class=\"form-signin-heading\">{{language.signIn}}</h2>\n        <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\n        <br><br>\n        <p>\n            \n            <!-- <fb:login-button \n                scope=\"public_profile,email\"\n                onlogin=\"checkLoginState();\">\n            </fb:login-button> -->\n            <a class=\"btn btn-primary social-login-btn social-facebook\" (click)=\"facebook()\" href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n            <a class=\"btn btn-primary social-login-btn social-google\"   (click)=\"google()\" href=\"#\"><i class=\"fab fa-google\"></i></a>\n        </p>\n        <br>\n\n        <small class=\"text-muted\">{{language.enterYourLogon}} {{applicationName}}</small>\n        <br><br>\n        \n        <input type=\"hidden\" name=\"socialMedia\" id=\"socialMedia\" value=\"0\" ngModel>\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.username}}\" type=\"text\" name=\"username\" id=\"username\" ngModel><!-- required -->\n        <input class=\"ember-view ember-text-field form-control login-input-pass\" placeholder=\"{{language.password}}\" type=\"password\" name=\"password\" id=\"password\" ngModel>\n\n        <script id=\"metamorph-22-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-22-end\" type=\"text/x-placeholder\"></script>\n        <div class=\"spinner-border text-petlife\" role=\"status\" [ngClass]=\"{ 'button-disabled': !loading }\">\n            <span class=\"sr-only\">Carregando...</span>\n        </div>\n        <app-alert></app-alert>\n        <button class=\"btn btn-lg btn-petlife btn-block btn-center\" type=\"submit\" [ngClass]=\"{ 'button-disabled': loading }\" data-bindattr-3=\"3\">{{language.login}}</button>\n        <br>\n    </form>\n    <small class=\"create-account text-muted\">{{language.dontHave}} {{applicationName}} {{language.orSocialMediaAccount}} <button class=\"ember-view btn btn-sm btn-default\" (click)=\"register()\"> <b>{{language.signUp}} </b></button> </small>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, SociaNetworkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SociaNetworkType", function() { return SociaNetworkType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");











//https://bootsnipp.com/snippets/kMdg
var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    LoginComponent_1 = LoginComponent;
    LoginComponent.getAfterLoginPageRedirection = function () {
        return LoginComponent_1.afterLoginRedirectComponent;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.getNavbarComponent().disableMenu = true;
        this.facebookConfig();
        this.onLogged(LoginComponent_1.getAfterLoginPageRedirection());
    };
    LoginComponent.prototype.doLogin = function (form) {
        var _this = this;
        console.log("login start");
        this.alert.hide();
        this.loginForm = form;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.alert.show(this.language.validateDataError, _styles_styles__WEBPACK_IMPORTED_MODULE_8__["ColorClass"].danger);
            return;
        }
        this.loading = true;
        var formUser = new _entity_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        formUser.username = form.value.username;
        formUser.password = form.value.password;
        if (form.value.socialMedia == "") {
            form.value.socialMedia = SociaNetworkType.NONE;
        }
        formUser.loginType = form.value.socialMedia;
        if (!this.requiredFieldsFilled(formUser)) {
            this.alert.show(this.language.requiredFields, _styles_styles__WEBPACK_IMPORTED_MODULE_8__["ColorClass"].danger);
            this.loading = false;
            return;
        }
        var user = this.api.login(formUser);
        window.httpUser = user;
        user.subscribe(function (result) {
            console.log(result);
            _this.loading = false;
            if (result.code == _service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].SUCCESS) {
                _utils__WEBPACK_IMPORTED_MODULE_10__["LoginUtils"].userInSession(result, _this, form.value.password, LoginComponent_1.getAfterLoginPageRedirection());
            }
            else {
                _this.alert.show(_this.api.getErrorMessage(result, _this.language), _styles_styles__WEBPACK_IMPORTED_MODULE_8__["ColorClass"].danger);
            }
        }, function (error) {
            console.log(error);
            _this.alert.show(_this.language.connectionError, _styles_styles__WEBPACK_IMPORTED_MODULE_8__["ColorClass"].danger);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.requiredFieldsFilled = function (user) {
        return !(_utils__WEBPACK_IMPORTED_MODULE_10__["StringUtils"].isEmpty(user.username)
            || _utils__WEBPACK_IMPORTED_MODULE_10__["StringUtils"].isEmpty(user.password));
    };
    LoginComponent.prototype.facebook = function () {
        //Chave Secreta do Aplicativo
        //b4a49157bf9ba2cc4b7b085c0ba13ad3
        var _this = this;
        console.log("submit login to facebook");
        // FB.login();
        FB.login(function (response) {
            console.log('submitLogin', response);
            if (response.authResponse && response.status == "connected") {
                window.facebook = response;
                var form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]([], []);
                form.value.username = response.authResponse.userID;
                form.value.password = response.authResponse.userID;
                form.value.socialMedia = SociaNetworkType.FACEBOOK;
                _this.doLogin(form);
            }
            else {
                console.log('User login failed');
            }
        });
        /*(<any>FB).getLoginStatus(function(response) {
          statusChangeCallback(response);
        });*/
        /**
         * {
                status: 'connected',
                authResponse: {
                    accessToken: '...',
                    expiresIn:'...',
                    signedRequest:'...',
                    userID:'...'
                }
            }
         */
    };
    LoginComponent.prototype.google = function () {
        alert("google");
    };
    LoginComponent.prototype.register = function () {
        _super.prototype.changeCurrentPage.call(this, this, _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]);
    };
    ////plugin add cordova-plugin-facebook4 --save --variable APP_ID="389609115207477" --variable APP_NAME="Toppet"
    LoginComponent.prototype.facebookConfig = function () {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '389609115207477',
                cookie: true,
                xfbml: true,
                version: 'v3.2'
            });
            FB.AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    var LoginComponent_1;
    LoginComponent.afterLoginRedirectComponent = _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"];
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"])
    ], LoginComponent.prototype, "alert", void 0);
    LoginComponent = LoginComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_4__["UserApiService"]])
    ], LoginComponent);
    return LoginComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_6__["AppBase"]));

var SociaNetworkType;
(function (SociaNetworkType) {
    SociaNetworkType[SociaNetworkType["NONE"] = 0] = "NONE";
    SociaNetworkType[SociaNetworkType["FACEBOOK"] = 1] = "FACEBOOK";
    SociaNetworkType[SociaNetworkType["GOOGLE"] = 2] = "GOOGLE";
    SociaNetworkType[SociaNetworkType["TWITTER"] = 3] = "TWITTER";
})(SociaNetworkType || (SociaNetworkType = {}));


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
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");




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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cordova_service__WEBPACK_IMPORTED_MODULE_2__["CordovaService"]])
    ], MapsComponent);
    return MapsComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_3__["AppBase"]));



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-navbar-container {\n    width: 100% !important;\n    height: calc(100vh - 64px) !important;\n}\n\nmat-navbar {\n    background-color: blue !important;\n}\n\ndiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\napp-navbar {\n    position: fixed;\n    z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbmF2YmFyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KSAhaW1wb3J0YW50O1xufVxuXG5tYXQtbmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG59XG4gICAgXG5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYXBwLW5hdmJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-dark bg-petlife\"><!-- navbar-expand-lg-->\n    <a class=\"navbar-brand\" href=\"#\">{{applicationName}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" [ngClass]=\"{ 'button-disabled': disableMenu }\" (click)=\"toggleNavbar()\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\" id=\"navbarColor02\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-user\">&nbsp;&nbsp;</i>{{username}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-paw\">&nbsp;&nbsp;</i>{{language.myPet}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-hands-helping\">&nbsp;&nbsp;</i>{{language.adoptions}}</a><!--hands-helping -->\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-calendar\">&nbsp;&nbsp;</i>{{language.appointments}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-question-circle\">&nbsp;&nbsp;</i>{{language.about}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-times-circle\">&nbsp;&nbsp;</i>{{language.logout}}</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");




var NavbarComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NavbarComponent, _super);
    function NavbarComponent(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.disableMenu = true;
        _this.navbarOpen = false;
        return _this;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        _appbase__WEBPACK_IMPORTED_MODULE_3__["AppBase"].setNavbarComponent(this);
    };
    NavbarComponent.prototype.ngAfterContentInit = function () {
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        Navbar,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_2__["UserApiService"]])
    ], NavbarComponent);
    return NavbarComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_3__["AppBase"]));

function Navbar(constructor) {
    //Object.seal(constructor);
    //Object.seal(constructor.prototype);
    //AppBase.setNavbarComponent(constructor.prototype);
}


/***/ }),

/***/ "./src/app/pets/add.component.css":
/*!****************************************!*\
  !*** ./src/app/pets/add.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .form-input {\n    display: block;\n    width: 100%;\n    height: calc(1.5em + .75rem + 2px);\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: .25rem;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRyIsImZpbGUiOiJzcmMvYXBwL3BldHMvYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZm9ybS1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG59ICovIl19 */"

/***/ }),

/***/ "./src/app/pets/add.component.html":
/*!*****************************************!*\
  !*** ./src/app/pets/add.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- https://yespornplease.com/v/100046849\nhttps://yespornplease.com/v/956831015 \nhttps://yespornplease.com/v/383223747-->\n<div class=\"modal-dialog\" role=\"document\" id=\"addPet\" (keypress)=\"browserKeyPress($event)\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{language.addNewPet}}</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeDialog()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"card\">\n                <img [src]=\"pet.img\" class=\"card-img-top\" [ngClass]=\"{ 'button-disabled': pet.img == null }\">\n                <a class=\"btn btn-light\" [ngClass]=\"{ 'button-disabled': pet.img != null }\" (click)=\"camera()\" href=\"#\" style=\"font-size: 450%;\"><i class=\"fa fa-camera text-petlife\"></i></a>\n            </div>\n            <button class=\"btn btn-petlife btn-block btn-center\"  type=\"button\" (click)=\"openPetType()\">\n                {{animal.name}}\n                <i [ngClass]=\"'fa fa-' + animal.icon\" style=\"float: right; font-size: 125%;\"></i>\n            </button>\n            <input class=\"ember-view ember-text-field form-control login-input\" [(ngModel)]=\"pet.name\" placeholder=\"{{language.name}}\" type=\"text\" ngDefaultControl />\n            <input class=\"ember-view ember-text-field form-control login-input\" [(ngModel)]=\"pet.age\" placeholder=\"{{language.age}}\" type=\"text\" ngDefaultControl />\n            <input class=\"ember-view ember-text-field form-control login-input-pass\" [(ngModel)]=\"pet.description\" placeholder=\"{{language.description}}\" type=\"text\" ngDefaultControl />       \n        </div>\n        <app-alert></app-alert>\n        <div class=\"modal-footer\">\n            <div class=\"spinner-border text-petlife\" role=\"status\" [ngClass]=\"{ 'button-disabled': !loading }\">\n                <span class=\"sr-only\">Carregando...</span>\n            </div>\n            <button class=\"btn btn-petlife btn-block btn-center\" type=\"button\" (click)=\"createPet()\" [ngClass]=\"{ 'button-disabled': loading }\" data-bindattr-3=\"3\">{{language.createUser}}</button>\n        </div>\n    </div>\n</div>\n      "

/***/ }),

/***/ "./src/app/pets/pet.picker.component.css":
/*!***********************************************!*\
  !*** ./src/app/pets/pet.picker.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pet-icon {\n    margin: 5px;\n    width: 20%;\n    font-size: 265%;\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXQucGlja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wZXRzL3BldC5waWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXQtaWNvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmb250LXNpemU6IDI2NSU7XG4gICAgcGFkZGluZzogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pets/pet.picker.component.html":
/*!************************************************!*\
  !*** ./src/app/pets/pet.picker.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{language.animal}}</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeDialog()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"container text-center\">\n        <p>\n            <a *ngFor=\"let item of animals; let i= index ;trackBy: trackByFn\" class=\"btn btn-petlife social-login-btn pet-icon\" (click)=\"select(item)\" href=\"#\"><i class=\"fa fa-{{item.icon}}\"></i></a>\n            <!-- <a class=\"btn btn-petlife social-login-btn pet-icon\" (click)=\"select()\" href=\"#\"><i class=\"fa fa-dog\"></i></a>\n            <a class=\"btn btn-petlife social-login-btn pet-icon\" (click)=\"select()\" href=\"#\"><i class=\"fa fa-cat\"></i></a>\n            <a class=\"btn btn-petlife social-login-btn pet-icon\" (click)=\"select()\" href=\"#\"><i class=\"fa fa-dove\"></i></a>\n            <a class=\"btn btn-petlife social-login-btn pet-icon\" (click)=\"select()\" href=\"#\"><i class=\"fa fa-fish\"></i></a> -->\n        </p>\n      </div> \n    </div>\n    <!-- <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\">Send message</button>\n    </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pets/pets.component.css":
/*!*****************************************!*\
  !*** ./src/app/pets/pets.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{padding:0;margin:0;}\n\nbody{\n\tfont-family:Verdana, Geneva, sans-serif;\n\tfont-size:18px;\n\tbackground-color:#CCC;\n}\n\n.float{\n\tposition:fixed;\n\twidth:60px;\n\theight:60px;\n\tbottom:40px;\n\tright:40px;\n\t/* background-color:#0C9; */\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n\tbox-shadow: 2px 2px 3px #999;\n}\n\n.my-float{\n\tmargin-top:22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDOztBQUVyQjtDQUNDLHVDQUF1QztDQUN2QyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsY0FBYztDQUNkLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7Q0FDViwyQkFBMkI7Q0FDM0IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntwYWRkaW5nOjA7bWFyZ2luOjA7fVxuXG5ib2R5e1xuXHRmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZToxOHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNDQ0M7XG59XG5cbi5mbG9hdHtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdHdpZHRoOjYwcHg7XG5cdGhlaWdodDo2MHB4O1xuXHRib3R0b206NDBweDtcblx0cmlnaHQ6NDBweDtcblx0LyogYmFja2dyb3VuZC1jb2xvcjojMEM5OyAqL1xuXHRjb2xvcjojRkZGO1xuXHRib3JkZXItcmFkaXVzOjUwcHg7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHRib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xufVxuXG4ubXktZmxvYXR7XG5cdG1hcmdpbi10b3A6MjJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pets/pets.component.html":
/*!******************************************!*\
  !*** ./src/app/pets/pets.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"body_section\">\n  <div class=interface_class>\n    <div class=\"page-header\">\n\t\t  <h1>{{title}} <small>{{user.pets.length}}</small></h1>\n    </div>\n    <div *ngFor=\"let pet of user.pets\" class=\"card\" style=\"width: 18rem;\">\n      <div class=\"spinner-border text-petlife\" role=\"status\" [ngClass]=\"{ 'button-disabled': !loading }\">\n        <span class=\"sr-only\">Carregando...</span>\n      </div>\n      <img src=\"{{pet.img}}\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{pet.name}}</h5>\n        <p class=\"card-text\">{{pet.description}}</p>\n        <a href=\"#\" class=\"btn btn-petlife\">{{language.view}}</a>\n      </div>\n    </div>\n\n    <a href=\"#\" class=\"float bg-petlife\" (click)=\"add()\" [ngClass]=\"{ 'button-disabled': dialog }\">\n      <i class=\"fa fa-plus my-float\"></i>\n    </a>\n  </div> \n</section>\n\n"

/***/ }),

/***/ "./src/app/pets/pets.component.ts":
/*!****************************************!*\
  !*** ./src/app/pets/pets.component.ts ***!
  \****************************************/
/*! exports provided: PetsComponent, EditPetsComponent, PetPickerComponent, Animal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsComponent", function() { return PetsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPetsComponent", function() { return EditPetsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetPickerComponent", function() { return PetPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animal", function() { return Animal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _entity_Pet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity/Pet */ "./src/app/entity/Pet.ts");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "./node_modules/ngx-modialog/plugins/bootstrap/fesm5/ngx-modialog-plugins-bootstrap.js");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-modialog */ "./node_modules/ngx-modialog/fesm5/ngx-modialog.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cordova.service */ "./src/app/cordova.service.ts");











var PetsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetsComponent, _super);
    function PetsComponent(api, modal) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.modal = modal;
        _this.title = "Pets";
        _this.dialog = false;
        return _this;
    }
    PetsComponent_1 = PetsComponent;
    PetsComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.user = _super.prototype.getUser.call(this);
    };
    PetsComponent.prototype.ngAfterViewInit = function () {
        this.loadPets();
    };
    PetsComponent.prototype.loadPets = function () {
        var _this = this;
        if (this.user != null && this.user != undefined) {
            var pets = this.api.getByUser(this.user);
            this.user.pets = [];
            pets.subscribe(function (result) {
                console.log(result);
                //this.user.pets = result;
                _this.loading = false;
                if (result.entity) {
                    result.entity.forEach(function (p) {
                        var pet = new _entity_Pet__WEBPACK_IMPORTED_MODULE_4__["Pet"]();
                        pet.id = p.id;
                        pet.name = p.name;
                        //pet.age = p.birthDate;
                        pet.user = _this.user;
                        pet.appointments = [];
                        _this.user.pets.push(pet);
                    });
                    if (result.code == _service_services__WEBPACK_IMPORTED_MODULE_3__["ReturnCode"].SUCCESS) {
                        if (result && result.sid) {
                        }
                    }
                }
                if (result.code != _service_services__WEBPACK_IMPORTED_MODULE_3__["ReturnCode"].SUCCESS) {
                    alert(_this.api.getErrorMessage(result, _this.language));
                }
            }, function (error) {
                console.log(error);
                alert(error);
                _this.loading = false;
            });
        }
    };
    PetsComponent.prototype.view = function (pet) {
        alert("Visualizar");
    };
    PetsComponent.prototype.save = function (pet) {
        alert("Salvar");
    };
    //https://mdbootstrap.com/docs/angular/modals/basic/
    PetsComponent.prototype.openAddDialog = function () {
        var _this = this;
        this.dialog = true;
        var dialogRef = this.modal
            .open(EditPetsComponent, Object(ngx_modialog__WEBPACK_IMPORTED_MODULE_6__["overlayConfigFactory"])({ isBlocking: false }, ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BSModalContext"]));
        console.log(dialogRef);
        console.log(this.modal);
        // dialogRef.result
        //   .then( result => this.save(result) );
        dialogRef.onDestroy.subscribe(function () {
            _this.dialog = false;
        });
        PetsComponent_1.dialogRef = dialogRef;
    };
    PetsComponent.prototype.add = function () {
        var _this = this;
        setTimeout(function () { _this.openAddDialog(); });
    };
    var PetsComponent_1;
    PetsComponent = PetsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pets',
            template: __webpack_require__(/*! ./pets.component.html */ "./src/app/pets/pets.component.html"),
            styles: [__webpack_require__(/*! ./pets.component.css */ "./src/app/pets/pets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_3__["PetApiService"], ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"]])
    ], PetsComponent);
    return PetsComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_1__["AppBase"]));

///////////////////////////
var EditPetsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditPetsComponent, _super);
    function EditPetsComponent(api, modal, phonegap) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.modal = modal;
        _this.phonegap = phonegap;
        _this.dialog = false;
        _this.animal = new Animal(_entity_Pet__WEBPACK_IMPORTED_MODULE_4__["PetType"].OTHER);
        _this.cameraOptions = {
            quality: 70,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        };
        return _this;
    }
    EditPetsComponent_1 = EditPetsComponent;
    EditPetsComponent.prototype.ngOnInit = function () {
        this.pet = new _entity_Pet__WEBPACK_IMPORTED_MODULE_4__["Pet"]();
        //this.pet.img = "...";
        this.animal.name = this.language.animal;
    };
    EditPetsComponent.prototype.ngAfterViewInit = function () {
    };
    EditPetsComponent.prototype.openPetType = function () {
        this.add();
    };
    EditPetsComponent.prototype.createPet = function () {
        var _this = this;
        this.loading = true;
        //Campos obrigatorios
        if (!this.requiredFieldsFilled(this.pet)) {
            this.alert.show(this.language.requiredFields, _styles_styles__WEBPACK_IMPORTED_MODULE_9__["ColorClass"].danger);
            this.loading = false;
            return;
        }
        var pets = this.api.save(this.pet);
        pets.subscribe(function (result) {
            console.log(result);
            _this.loading = false;
            if (result.entity) {
                if (result.code == _service_services__WEBPACK_IMPORTED_MODULE_3__["ReturnCode"].SUCCESS) {
                    if (result && result.sid) {
                        _this.closeDialog();
                    }
                }
            }
            if (result.code != _service_services__WEBPACK_IMPORTED_MODULE_3__["ReturnCode"].SUCCESS) {
                _this.alert.show(_this.api.getErrorMessage(result, _this.language), _styles_styles__WEBPACK_IMPORTED_MODULE_9__["ColorClass"].danger);
            }
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    EditPetsComponent.prototype.closeDialog = function () {
        PetsComponent.dialogRef.close();
    };
    EditPetsComponent.prototype.selectAnimal = function (selected) {
        this.pet.petType = selected;
        console.log(this.pet.petType);
    };
    EditPetsComponent.prototype.requiredFieldsFilled = function (pet) {
        console.log(pet);
        return !(_utils__WEBPACK_IMPORTED_MODULE_7__["StringUtils"].isEmpty(pet.name)
            || _utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].isEmpty(pet.age)
            || _utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].isEmpty(pet.petType));
    };
    EditPetsComponent.prototype.openPetDialog = function () {
        var _this = this;
        this.dialog = true;
        var dialogRef = this.modal
            .open(PetPickerComponent, Object(ngx_modialog__WEBPACK_IMPORTED_MODULE_6__["overlayConfigFactory"])({ isBlocking: false }, ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BSModalContext"]));
        dialogRef.onDestroy.subscribe(function () {
            _this.dialog = false;
        });
        EditPetsComponent_1.dialogRef = dialogRef;
    };
    EditPetsComponent.prototype.add = function () {
        var _this = this;
        setTimeout(function () { _this.openPetDialog(); });
    };
    EditPetsComponent.prototype.camera = function () {
        /*this.phone.window.navigator.camera.getPicture(onSuccess, onFail, { quality: 70,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });*/
        var _this = this;
        var onCameraSuccess = function (imageURL) {
            console.log(imageURL);
            _this.pet.img = imageURL;
            if (_this.phonegap.isBrowser) {
                _this.pet.img = 'data:image/jpg;base64,' + _this.pet.img;
            }
        };
        var onCameraFail = function (message) {
            alert('Failed because: ' + message);
        };
        this.phonegap.window.navigator.camera.getPicture(onCameraSuccess, onCameraFail, this.cameraOptions);
    };
    var EditPetsComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"])
    ], EditPetsComponent.prototype, "alert", void 0);
    EditPetsComponent = EditPetsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-pets',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/pets/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/pets/add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_3__["PetApiService"], ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], _cordova_service__WEBPACK_IMPORTED_MODULE_10__["CordovaService"]])
    ], EditPetsComponent);
    return EditPetsComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_1__["AppBase"]));

//////////////////////////////////////
var PetPickerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetPickerComponent, _super);
    function PetPickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animals = [];
        return _this;
    }
    PetPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.animals = Object.keys(PetType).map(k => PetType[k as any]);
        Object.keys(_entity_Pet__WEBPACK_IMPORTED_MODULE_4__["PetType"]).map(function (k) { return _entity_Pet__WEBPACK_IMPORTED_MODULE_4__["PetType"][k]; }).forEach(function (attr) {
            var animal = new Animal(_entity_Pet__WEBPACK_IMPORTED_MODULE_4__["PetType"][attr]);
            if (!_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].isEmpty(animal.id) && animal.id != 0) {
                _this.animals.push(animal);
            }
        });
        this.animals.push(new Animal(_entity_Pet__WEBPACK_IMPORTED_MODULE_4__["PetType"].OTHER));
    };
    PetPickerComponent.prototype.ngAfterViewInit = function () {
    };
    PetPickerComponent.prototype.select = function (selected) {
        //this.pet.petType = selected;
        console.log(selected);
        this.closeDialog();
    };
    PetPickerComponent.prototype.closeDialog = function () {
        EditPetsComponent.dialogRef.close();
    };
    PetPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-pets',
            template: __webpack_require__(/*! ./pet.picker.component.html */ "./src/app/pets/pet.picker.component.html"),
            styles: [__webpack_require__(/*! ./pet.picker.component.css */ "./src/app/pets/pet.picker.component.css")]
        })
    ], PetPickerComponent);
    return PetPickerComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_1__["AppBase"]));

///////////////////////////
var Animal = /** @class */ (function () {
    function Animal(petType) {
        if (petType == _entity_Pet__WEBPACK_IMPORTED_MODULE_4__["PetType"].OTHER) {
            this.id = 0;
            this.name = "Outro";
            this.icon = "paw";
        }
        else if (petType == _entity_Pet__WEBPACK_IMPORTED_MODULE_4__["PetType"].DOG) {
            this.id = 1;
            this.name = "Cachorro";
            this.icon = "dog";
        }
        else if (petType == _entity_Pet__WEBPACK_IMPORTED_MODULE_4__["PetType"].CAT) {
            this.id = 2;
            this.name = "Gato";
            this.icon = "cat";
        }
        else if (petType == _entity_Pet__WEBPACK_IMPORTED_MODULE_4__["PetType"].BIRD) {
            this.id = 3;
            this.name = "Pássaro";
            this.icon = "dove";
        }
        else if (petType == _entity_Pet__WEBPACK_IMPORTED_MODULE_4__["PetType"].FISH) {
            this.id = 4;
            this.name = "Peixe";
            this.icon = "fish";
        }
    }
    return Animal;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* brandico */\n[class*=\"brandico-\"]:before {\n  font-family: 'brandico', sans-serif;\n}\n/* entypo */\n[class*=\"entypo-\"]:before {\n  font-family: 'entypo', sans-serif;\n}\n/* openwebicons */\n[class*=\"openwebicons-\"]:before {\n  font-family: 'OpenWeb Icons', sans-serif;\n}\n/* zocial */\n[class*=\"zocial-\"]:before {\n  font-family: 'zocial', sans-serif;\n}\n.form-signin{\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.login-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.login-input-pass {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.signup-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.signup-input-confirm {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.create-account {\n  text-align: center;\n  width: 100%;\n  display: block;\n}\n.form-signin .form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.btn-center{\n  width: 50%;\n  text-align: center;\n  margin: inherit;\n}\n.social-login-btn {\n  margin: 5px;\n  width: 20%;\n  font-size: 250%;\n  padding: 0;\n}\n.social-login-more {\n  width: 45%;\n}\n.social-google {\n  background-color: #da573b;\n  border-color: #be5238;\n}\n.social-google:hover{\n  background-color: #be5238;\n  border-color: #9b4631;\n}\n.social-twitter {\n  background-color: #1daee3;\n  border-color: #3997ba;\n}\n.social-twitter:hover {\n  background-color: #3997ba;\n  border-color: #347b95;\n}\n.social-facebook {\n  background-color: #4c699e;\n  border-color: #47618d;\n}\n.social-facebook:hover {\n  background-color: #47618d;\n  border-color: #3c5173;\n}\n.social-linkedin {\n  background-color: #4875B4;\n  border-color: #466b99;\n}\n.social-linkedin:hover {\n  background-color: #466b99;\n  border-color: #3b5a7c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUdiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBicmFuZGljbyAqL1xuW2NsYXNzKj1cImJyYW5kaWNvLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2JyYW5kaWNvJywgc2Fucy1zZXJpZjtcbn1cblxuLyogZW50eXBvICovXG5bY2xhc3MqPVwiZW50eXBvLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2VudHlwbycsIHNhbnMtc2VyaWY7XG59XG5cbi8qIG9wZW53ZWJpY29ucyAqL1xuW2NsYXNzKj1cIm9wZW53ZWJpY29ucy1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuV2ViIEljb25zJywgc2Fucy1zZXJpZjtcbn1cblxuLyogem9jaWFsICovXG5bY2xhc3MqPVwiem9jaWFsLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ3pvY2lhbCcsIHNhbnMtc2VyaWY7XG59XG5cbi5mb3JtLXNpZ25pbntcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbi1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLmxvZ2luLWlucHV0LXBhc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLnNpZ251cC1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uc2lnbnVwLWlucHV0LWNvbmZpcm0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmNyZWF0ZS1hY2NvdW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5idG4tY2VudGVye1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogaW5oZXJpdDtcbn1cblxuLnNvY2lhbC1sb2dpbi1idG4ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDIwJTtcbiAgZm9udC1zaXplOiAyNTAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc29jaWFsLWxvZ2luLW1vcmUge1xuICB3aWR0aDogNDUlO1xufVxuXG4uc29jaWFsLWdvb2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYTU3M2I7XG4gIGJvcmRlci1jb2xvcjogI2JlNTIzODtcbn1cbi5zb2NpYWwtZ29vZ2xlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU1MjM4O1xuICBib3JkZXItY29sb3I6ICM5YjQ2MzE7XG59XG5cbi5zb2NpYWwtdHdpdHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZGFlZTM7XG4gIGJvcmRlci1jb2xvcjogIzM5OTdiYTtcbn1cbi5zb2NpYWwtdHdpdHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk3YmE7XG4gIGJvcmRlci1jb2xvcjogIzM0N2I5NTtcbn1cblxuLnNvY2lhbC1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzY5OWU7XG4gIGJvcmRlci1jb2xvcjogIzQ3NjE4ZDtcbn1cbi5zb2NpYWwtZmFjZWJvb2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc2MThkO1xuICBib3JkZXItY29sb3I6ICMzYzUxNzM7XG59XG5cbi5zb2NpYWwtbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg3NUI0O1xuICBib3JkZXItY29sb3I6ICM0NjZiOTk7XG59XG4uc29jaWFsLWxpbmtlZGluOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NmI5OTtcbiAgYm9yZGVyLWNvbG9yOiAjM2I1YTdjO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">     \n<script id=\"metamorph-1-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-21-start\" type=\"text/x-placeholder\"></script>\n\n<div class=\"container text-center\">\n    <form class=\"form-signin\" #registerForm=\"ngForm\" (ngSubmit)=\"doRegister(registerForm)\" autocomplete=\"off\">\n        <h2 class=\"form-signin-heading\">{{language.signUp}}</h2>\n        <br><br>\n        <small class=\"text-muted\">{{language.createYourAccount}} {{applicationName}}</small>\n        <br><br>\n        \n        <input type=\"hidden\" name=\"socialMedia\" id=\"socialMedia\" ngModel />\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.email}}\" type=\"text\" name=\"username\" id=\"username\" ngModel /><!-- required -->\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.name}}\" type=\"text\" name=\"name\" id=\"name\" ngModel />\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.password}}\" type=\"password\" name=\"password\" id=\"password\" ngModel />\n        <input class=\"ember-view ember-text-field form-control login-input-pass\" placeholder=\"{{language.confirmPassword}}\" type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" ngModel />\n\n        <div class=\"spinner-border text-petlife\" role=\"status\" [ngClass]=\"{ 'button-disabled': !loading }\">\n            <span class=\"sr-only\">Carregando...</span>\n        </div>\n        <br>\n        <app-alert></app-alert>\n        <button class=\"btn btn-lg btn-petlife btn-block btn-center\" type=\"submit\" [ngClass]=\"{ 'button-disabled': loading }\" data-bindattr-3=\"3\">{{language.createUser}}</button>\n        <br>\n    </form>\n    <small class=\"create-account text-muted\"><button class=\"ember-view btn btn-sm btn-default\" (click)=\"goBack()\"> <b>{{language.back}} </b></button> </small>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










var passwordConfig = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].passwordConfig;
//https://bootsnipp.com/snippets/kMdg
var RegisterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterComponent, _super);
    function RegisterComponent(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.getNavbarComponent().disableMenu = true;
    };
    RegisterComponent.prototype.doRegister = function (form) {
        var _this = this;
        this.alert.hide();
        this.registerForm = form;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.alert.show(this.language.validateDataError, _styles_styles__WEBPACK_IMPORTED_MODULE_7__["ColorClass"].danger);
            return;
        }
        this.loading = true;
        var formUser = new _entity_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        formUser.username = (form.value.username);
        formUser.password = (form.value.password);
        formUser.name = (form.value.name);
        console.log(form.value);
        //Campos obrigaorios
        if (!this.requiredFieldsFilled(formUser, form.value.confirmPassword)) {
            this.alert.show(this.language.requiredFields, _styles_styles__WEBPACK_IMPORTED_MODULE_7__["ColorClass"].danger);
            this.loading = false;
            return;
        }
        //Validar e-mail
        if (!_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmail(formUser.username)) {
            this.alert.show(this.language.invalidEmailAddress, _styles_styles__WEBPACK_IMPORTED_MODULE_7__["ColorClass"].danger);
            this.loading = false;
            return;
        }
        //Validar senha
        if (formUser.password.length < passwordConfig.min || (!_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(passwordConfig.contains))) {
            this.alert.show(this.language.invalidPassword.replace(":min", passwordConfig.min), _styles_styles__WEBPACK_IMPORTED_MODULE_7__["ColorClass"].danger);
            this.loading = false;
            return;
        }
        //Corresponder senha
        if (formUser.password != form.value.confirmPassword) {
            this.alert.show(this.language.passwordDoesntMatch, _styles_styles__WEBPACK_IMPORTED_MODULE_7__["ColorClass"].danger);
            this.loading = false;
            return;
        }
        var user = this.api.save(formUser);
        user.subscribe(function (result) {
            console.log(result);
            _this.loading = false;
            if (result.code == _service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].SUCCESS) {
                if (result && result.sid) {
                    alert(_this.language.registerSuccess);
                    _utils__WEBPACK_IMPORTED_MODULE_8__["LoginUtils"].userInSession(result, _this, formUser.password, _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]);
                }
            }
            else if (result.code == _service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].RESOURCE_EXISTS) {
                _this.alert.show(_this.language.usernameExists, _styles_styles__WEBPACK_IMPORTED_MODULE_7__["ColorClass"].danger);
            }
            else {
                _this.alert.show(_this.api.getErrorMessage(result, _this.language), _styles_styles__WEBPACK_IMPORTED_MODULE_7__["ColorClass"].danger);
            }
        }, function (error) {
            console.log(error);
            _this.alert.show(_this.language.connectionError, _styles_styles__WEBPACK_IMPORTED_MODULE_7__["ColorClass"].danger);
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.requiredFieldsFilled = function (user, confirmPassword) {
        return !(_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(user.username)
            || _utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(user.password)
            || _utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(user.name)
            || _utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(confirmPassword));
    };
    RegisterComponent.prototype.goBack = function () {
        if (this.lastComponent != undefined && this.lastComponent != null) {
            _super.prototype.goBack.call(this, this.lastComponent);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"])
    ], RegisterComponent.prototype, "alert", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_4__["UserApiService"]])
    ], RegisterComponent);
    return RegisterComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_5__["AppBase"]));



/***/ }),

/***/ "./src/app/service/services.ts":
/*!*************************************!*\
  !*** ./src/app/service/services.ts ***!
  \*************************************/
/*! exports provided: UserApiService, PetApiService, ReturnCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiService", function() { return UserApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetApiService", function() { return PetApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnCode", function() { return ReturnCode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






// Set the http options
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" })
};
var endpoints = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint;
var ApiService = /** @class */ (function () {
    function ApiService() {
        this.endpoint = endpoints.home2;
        console.log(window.location.origin);
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
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
    ApiService.prototype.getErrorMessage = function (result, language) {
        console.log('return code', result.code);
        if (result.code == ReturnCode.SUCCESS) {
            if (result && result.sid) {
                return language.registerSuccess;
            }
        }
        else if (result.code == ReturnCode.NOT_FOUND) {
            return language.invalidUserPassword;
        }
        else if (result.code == ReturnCode.SERVER_ERROR) {
            return language.serverError;
        }
        else {
            return language.connectionError;
        }
    };
    return ApiService;
}());
var UserApiService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserApiService, _super);
    function UserApiService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.controller = _this.endpoint + "/user";
        _this.authenticate = _this.controller + "/authenticate";
        _this.register = _this.controller + "/register";
        return _this;
    }
    UserApiService.prototype.login = function (user) {
        console.log(this.authenticate);
        console.log(user);
        return this.http.post(this.authenticate, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    UserApiService.prototype.save = function (user) {
        console.log(this.register);
        console.log(user);
        return this.http.post(this.register, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    UserApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], UserApiService);
    return UserApiService;
}(ApiService));

var PetApiService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetApiService, _super);
    function PetApiService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.controller = _this.endpoint + "/pet";
        _this.retrieve = _this.controller + "/retrieve";
        _this.register = _this.controller + "/register";
        return _this;
    }
    PetApiService.prototype.get = function (pet) {
        console.log(this.retrieve);
        console.log(pet);
        return this.http.post(this.retrieve, pet, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    PetApiService.prototype.getByUser = function (user) {
        console.log(this.retrieve);
        console.log(user);
        return this.http.post(this.retrieve, user.id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    PetApiService.prototype.save = function (pet) {
        console.log(this.register);
        console.log(pet);
        return this.http.post(this.register, pet, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    PetApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], PetApiService);
    return PetApiService;
}(ApiService));

var ReturnCode;
(function (ReturnCode) {
    ReturnCode[ReturnCode["SUCCESS"] = 0] = "SUCCESS";
    ReturnCode[ReturnCode["NOT_FOUND"] = -1] = "NOT_FOUND";
    ReturnCode[ReturnCode["VALIDATION_ERROR"] = -2] = "VALIDATION_ERROR";
    ReturnCode[ReturnCode["SERVER_ERROR"] = -3] = "SERVER_ERROR";
    ReturnCode[ReturnCode["RESOURCE_EXISTS"] = -4] = "RESOURCE_EXISTS";
})(ReturnCode || (ReturnCode = {}));


/***/ }),

/***/ "./src/app/styles/styles.ts":
/*!**********************************!*\
  !*** ./src/app/styles/styles.ts ***!
  \**********************************/
/*! exports provided: ColorClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorClass", function() { return ColorClass; });
var ColorClass;
(function (ColorClass) {
    ColorClass["primary"] = "primary";
    ColorClass["secondary"] = "secondary";
    ColorClass["success"] = "success ";
    ColorClass["danger"] = "danger";
    ColorClass["warning"] = "warning";
    ColorClass["info"] = "info";
    ColorClass["light"] = "light";
    ColorClass["dark"] = "dark";
})(ColorClass || (ColorClass = {}));


/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: StringUtils, FormUtils, LoginUtils, ObjectUtils, SessionAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringUtils", function() { return StringUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUtils", function() { return FormUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUtils", function() { return LoginUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUtils", function() { return ObjectUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAttributes", function() { return SessionAttributes; });
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.isEmpty = function (str) {
        return (str == undefined || str == null || str.trim() == "");
    };
    StringUtils.isEmail = function (text) {
        var regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regex.test(text);
    };
    return StringUtils;
}());

var FormUtils = /** @class */ (function () {
    function FormUtils() {
    }
    FormUtils.log = function (text) {
        console.log(text);
    };
    return FormUtils;
}());

var LoginUtils = /** @class */ (function () {
    function LoginUtils() {
    }
    LoginUtils.userInSession = function (result, baseApp, password, redirection) {
        if (result && result.sid) {
            //store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(SessionAttributes.CURRENT_USER, JSON.stringify(result.entity));
            localStorage.setItem(SessionAttributes.CURRENT_PASSWORD, password);
            localStorage.setItem(SessionAttributes.SESSION_ID, result.sid);
            localStorage.setItem(SessionAttributes.LOGIN_DATE, result.date);
            //localStorage.removeItem('currentUser');
            baseApp.onLogged(redirection);
        }
    };
    return LoginUtils;
}());

var ObjectUtils = /** @class */ (function () {
    function ObjectUtils() {
    }
    ObjectUtils.isEmpty = function (str) {
        return (str == undefined || str == null);
    };
    return ObjectUtils;
}());

var SessionAttributes;
(function (SessionAttributes) {
    SessionAttributes["CURRENT_USER"] = "currentUser";
    SessionAttributes["CURRENT_PASSWORD"] = "currentPassword";
    SessionAttributes["SESSION_ID"] = "sessionId";
    SessionAttributes["LOGIN_DATE"] = "loginDate";
})(SessionAttributes || (SessionAttributes = {}));


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
    endpoint: __webpack_require__(/*! ../../package.json */ "./package.json").endpoints,
    passwordConfig: __webpack_require__(/*! ../../package.json */ "./package.json").passwordConfig
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