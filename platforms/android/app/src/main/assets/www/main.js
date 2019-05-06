(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, displayName, endpoints, passwordConfig, cordova, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"br.com.toppet","version":"1.0.0","displayName":"TOPPET","endpoints":{"local":"http://localhost:9003","indra":"http://192.168.137.1:9003/toppet","indraLocal":"http://192.168.137.1:9003","home":"http://192.168.1.3:9003/toppet","home2":"http://192.168.1.3:9003"},"passwordConfig":{"min":6,"contains":""},"cordova":{"plugins":{"cordova-plugin-device":{},"cordova-plugin-safariviewcontroller":{"API_KEY_FOR_ANDROID":"AIzaSyCktbQb6g7SX4lIgecyzsrz0sMzl3660nU","API_KEY_FOR_IOS":"AIzaSyAaRDbFBx5gubzyW9_LE6KCFM3vE80hQw8","PLAY_SERVICES_VERSION":"15.0.1","ANDROID_SUPPORT_V4_VERSION":"27.+","LOCATION_WHEN_IN_USE_DESCRIPTION":"This app wants to get your location while this app runs only.","LOCATION_ALWAYS_USAGE_DESCRIPTION":"This app wants to get your location always, even this app runs in background."},"cordova-plugin-googlemaps":{"API_KEY_FOR_ANDROID":"AIzaSyCktbQb6g7SX4lIgecyzsrz0sMzl3660nU","API_KEY_FOR_IOS":"AIzaSyAaRDbFBx5gubzyW9_LE6KCFM3vE80hQw8","PLAY_SERVICES_VERSION":"15.0.1","ANDROID_SUPPORT_V4_VERSION":"27.+","LOCATION_WHEN_IN_USE_DESCRIPTION":"This app wants to get your location while this app runs only.","LOCATION_ALWAYS_USAGE_DESCRIPTION":"This app wants to get your location always, even this app runs in background."},"cordova-plugin-inappbrowser":{},"cordova-plugin-geolocation":{},"cordova-plugin-whitelist":{},"cordova-plugin-facebook4":{"APP_ID":"389609115207477","APP_NAME":"Toppet","FACEBOOK_HYBRID_APP_EVENTS":"false","FACEBOOK_ANDROID_SDK_VERSION":"4.40.0"},"cordova-plugin-camera":{},"cordova-sqlite-storage":{}},"platforms":["android"]},"scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"~7.2.0","@angular/common":"~7.2.0","@angular/compiler":"~7.2.0","@angular/core":"~7.2.0","@angular/forms":"~7.2.0","@angular/platform-browser":"~7.2.0","@angular/platform-browser-dynamic":"~7.2.0","@angular/router":"~7.2.0","ansi-escapes":"^3.2.0","base64-js":"^1.3.0","bootstrap":"^4.3.1","braces":"^2.3.2","browserify-zlib":"^0.2.0","cached-path-relative":"^1.0.2","cordova-android":"^7.1.4","cordova-browser":"^5.0.4","cordova-plugin-camera":"4.0.3","cordova-plugin-device":"2.0.2","cordova-plugin-facebook4":"4.2.1","cordova-plugin-geolocation":"4.0.1","cordova-plugin-googlemaps":"~2.5.2","cordova-plugin-inappbrowser":"~3.0.0","cordova-plugin-safariviewcontroller":"~1.5.4","cordova-plugin-whitelist":"1.3.3","cordova-sqlite-storage":"3.2.0","core-js":"^2.5.4","jquery":"^3.3.1","lodash":"^4.17.11","ngx-bootstrap":"^3.2.0","ngx-modialog":"^5.0.1","phonegap":"^8.2.2","rxjs":"^6.4.0","stream":"0.0.2","tls":"0.0.1","tslib":"^1.9.0","webpack":"^4.29.6","zone.js":"~0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"^0.13.3","@angular/cli":"~7.3.3","@angular/compiler-cli":"~7.2.0","@angular/language-service":"~7.2.0","@types/jasmine":"~2.8.8","@types/jasminewd2":"~2.0.3","@types/node":"^8.10.42","codelyzer":"~4.5.0","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"^4.0.1","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.4.0","ts-node":"~7.0.0","tslint":"~5.11.0","typescript":"3.2.2"}};

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

module.exports = ".center {\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{type}}\" [ngClass]=\"{ 'button-disabled': !visible }\" role=\"alert\">\r\n  {{message}}\r\n</div>"

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
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application */ "./src/app/application.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");










var routes = [
    { path: _application__WEBPACK_IMPORTED_MODULE_5__["HOME_PAGE"], component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivateChild: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: _application__WEBPACK_IMPORTED_MODULE_5__["WELCOME_PAGE"], component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: _application__WEBPACK_IMPORTED_MODULE_5__["LOGIN_PAGE"], component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: _application__WEBPACK_IMPORTED_MODULE_5__["REGISTER_USER_PAGE"], component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterUserComponent"] },
    { path: _application__WEBPACK_IMPORTED_MODULE_5__["PETS_PAGE"], component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_1__["PetsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application */ "./src/app/application.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/menuService */ "./src/app/navbar/menuService.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/services */ "./src/app/service/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









//https://fontawesome.com/icons?d=gallery&c=charity&m=free
//ng generate component home --entryComponent=true
var AppComponent = /** @class */ (function () {
    function AppComponent(router, componentFactoryResolver, container, session, menuService) {
        var _this = this;
        this.router = router;
        this.componentFactoryResolver = componentFactoryResolver;
        this.container = container;
        this.session = session;
        this.menuService = menuService;
        this.login = function (args) {
            if (args.code == _service_services__WEBPACK_IMPORTED_MODULE_7__["ReturnCode"].SUCCESS) {
                _this.session.onLogged(null, _this.router, _this.menu);
            }
            else {
                _this.session.zone.run(function () { return _this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_1__["WELCOME_PAGE"]); });
            }
        };
        this.title = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].name;
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.ngOnInit = function () {
        this.startApp();
    };
    AppComponent.prototype.addComponent = function (componentClass) {
        // Create component dynamically inside the ng-template
        if (this.container != null) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
            var component = this.container.createComponent(componentFactory);
            console.log("Adicionado: " + component.instance.constructor.name);
            // Push the component so that we can keep track of which components are created
            AppComponent_1.components.push(component);
            return component.instance;
        }
        return null;
    };
    AppComponent.prototype.removeComponent = function (componentClass, instance) {
        // Find the component
        var component = AppComponent_1.components.find(function (component) { return instance ? (component.instance instanceof componentClass.constructor) : (component.instance instanceof componentClass); });
        var componentIndex = AppComponent_1.components.indexOf(component);
        if (componentIndex !== -1) {
            // Remove component from both view and array
            this.container.remove(this.container.indexOf(component));
            AppComponent_1.components.splice(componentIndex, 1);
            console.log("Removido: " + component.instance.constructor.name);
        }
    };
    AppComponent.prototype.startApp = function () {
        //Erase session values
        this.session.resetSession();
        this.menuService.menu = this.menu;
        if (this.router.url == "/") {
            this.session.authenticationService.authenticateLastUser(this.login, this.session.setUserInSession);
        }
        else {
            this.login({ code: _service_services__WEBPACK_IMPORTED_MODULE_7__["ReturnCode"].NOT_FOUND });
        }
    };
    AppComponent.prototype.changePage = function (page) {
        var _this = this;
        AppComponent_1.components.forEach(function (component) {
            _this.removeComponent(component.instance, true);
        });
        //setTimeout(() => {this.addComponent(page)});
        this.addComponent(page);
    };
    AppComponent.prototype.changeCurrentPage = function (current, page) {
        this.removeComponent(current, true);
        return this.addComponent(page);
    };
    AppComponent.prototype.addSingleComponent = function (page, instance) {
        var component = instance ? page : AppComponent_1.components.find(function (component) { return component.instance instanceof page; });
        if (component == null) {
            return this.addComponent(page);
        }
        return component;
    };
    var AppComponent_1;
    //static language : Language = new Language();
    // Keep track of list of generated components for removal purposes
    AppComponent.components = [];
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"])
    ], AppComponent.prototype, "menu", void 0);
    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"], _navbar_menuService__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
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
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/menuService */ "./src/app/navbar/menuService.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-modialog */ "./node_modules/ngx-modialog/fesm5/ngx-modialog.js");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "./node_modules/ngx-modialog/plugins/bootstrap/fesm5/ngx-modialog-plugins-bootstrap.js");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./button/facebook/facebook.component */ "./src/app/button/facebook/facebook.component.ts");
/* harmony import */ var _button_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./button/signup/signup.component */ "./src/app/button/signup/signup.component.ts");
/* harmony import */ var _button_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./button/signin/signin.component */ "./src/app/button/signin/signin.component.ts");
/* harmony import */ var _button_google_google_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./button/google/google.component */ "./src/app/button/google/google.component.ts");
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./database/database */ "./src/app/database/database.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _language_Language__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./language/Language */ "./src/app/language/Language.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./session/session.service */ "./src/app/session/session.service.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_26__["WelcomeComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_25__["MapsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_21__["AlertComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterUserComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__["PetsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__["EditPetsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__["PetPickerComponent"],
                _button_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SignInComponent"],
                _button_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                _button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_16__["FacebookComponent"],
                _button_google_google_component__WEBPACK_IMPORTED_MODULE_19__["GoogleComponent"]
            ],
            entryComponents: [
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__["EditPetsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__["PetPickerComponent"],
                _button_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SignInComponent"],
                _button_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                _button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_16__["FacebookComponent"],
                _button_google_google_component__WEBPACK_IMPORTED_MODULE_19__["GoogleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_modialog__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
                ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BootstrapModalModule"]
            ],
            providers: [
                _cordova_service__WEBPACK_IMPORTED_MODULE_9__["CordovaService"],
                _database_database__WEBPACK_IMPORTED_MODULE_20__["LocalDatabaseService"],
                _service_services__WEBPACK_IMPORTED_MODULE_1__["UserApiService"],
                _service_services__WEBPACK_IMPORTED_MODULE_1__["PetApiService"],
                _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_15__["FacebookService"],
                _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_15__["GoogleService"],
                _service_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
                _navbar_menuService__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
                _language_Language__WEBPACK_IMPORTED_MODULE_27__["LanguageService"],
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuardService"],
                _session_session_service__WEBPACK_IMPORTED_MODULE_29__["SessionService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _language_Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/Language */ "./src/app/language/Language.ts");


//https://malcoded.com/posts/why-angular-not-works/
var AppBase = /** @class */ (function () {
    function AppBase() {
        this.applicationName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].name;
        this.loading = false;
        this.language = new _language_Language__WEBPACK_IMPORTED_MODULE_1__["LanguageService"]();
        if (window.components == undefined) {
            window.components = [];
        }
        window.components.push(this);
    }
    AppBase.prototype.ngOnInit = function () {
    };
    AppBase.prototype.goBack = function (lastComponent) {
        //this.getAppComponent().changeCurrentPage(this, lastComponent);
    };
    return AppBase;
}());



/***/ }),

/***/ "./src/app/application.ts":
/*!********************************!*\
  !*** ./src/app/application.ts ***!
  \********************************/
/*! exports provided: WELCOME_PAGE, LOGIN_PAGE, HOME_PAGE, REGISTER_USER_PAGE, PETS_PAGE, MAPS_PAGE, AUTOLOGIN_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WELCOME_PAGE", function() { return WELCOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_PAGE", function() { return LOGIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER_PAGE", function() { return REGISTER_USER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETS_PAGE", function() { return PETS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAPS_PAGE", function() { return MAPS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOLOGIN_PAGE", function() { return AUTOLOGIN_PAGE; });
var WELCOME_PAGE = "welcome";
var LOGIN_PAGE = "signin";
var HOME_PAGE = "home";
var REGISTER_USER_PAGE = "signup";
//export const REGISTER_PET_PAGE = RegisterPetComponent;
var PETS_PAGE = "pets";
var MAPS_PAGE = "maps";
var AUTOLOGIN_PAGE = "login";


/***/ }),

/***/ "./src/app/button/button-classes.ts":
/*!******************************************!*\
  !*** ./src/app/button/button-classes.ts ***!
  \******************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ButtonComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ButtonComponent, _super);
    function ButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this.begin = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this.hidden = false;
        return _this;
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "click", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "begin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "done", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "classes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ButtonComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ButtonComponent.prototype, "hidden", void 0);
    return ButtonComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_1__["AppBase"]));



/***/ }),

/***/ "./src/app/button/facebook/facebook.component.css":
/*!********************************************************!*\
  !*** ./src/app/button/facebook/facebook.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social {\r\n    background-color: #4c699e;\r\n    border-color: #47618d;\r\n    margin: 5px;\r\n    width: 20%;\r\n    font-size: 250%;\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi9mYWNlYm9vay9mYWNlYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM2OTllO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDc2MThkO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgZm9udC1zaXplOiAyNTAlO1xyXG4gICAgcGFkZGluZzogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/button/facebook/facebook.component.html":
/*!*********************************************************!*\
  !*** ./src/app/button/facebook/facebook.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary social-login-btn social\" (click)=\"do(null)\" href=\"javascript:;\"><i class=\"fab fa-facebook-f\"></i></a>\r\n<!-- <fb:login-button \r\n                scope=\"public_profile,email\"\r\n                onlogin=\"checkLoginState();\">\r\n            </fb:login-button> -->"

/***/ }),

/***/ "./src/app/button/facebook/facebook.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/button/facebook/facebook.component.ts ***!
  \*******************************************************/
/*! exports provided: FacebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookComponent", function() { return FacebookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _button_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../button-classes */ "./src/app/button/button-classes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/utils.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");





var FacebookComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacebookComponent, _super);
    function FacebookComponent(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.sociaNetworkType = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_4__["SociaNetworkType"].FACEBOOK;
        return _this;
    }
    FacebookComponent.prototype.ngOnInit = function () {
        this.api.config();
    };
    FacebookComponent.prototype.callback = function () {
        alert("done");
    };
    FacebookComponent.prototype.do = function (form) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].isEmpty(form)) {
            this.form = form;
        }
        this.api.login(this.callback);
    };
    FacebookComponent.prototype.onClicked = function () {
    };
    FacebookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'facebook-button',
            template: __webpack_require__(/*! ./facebook.component.html */ "./src/app/button/facebook/facebook.component.html"),
            styles: [__webpack_require__(/*! ./facebook.component.css */ "./src/app/button/facebook/facebook.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_4__["FacebookService"]])
    ], FacebookComponent);
    return FacebookComponent;
}(_button_classes__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/button/google/google.component.css":
/*!****************************************************!*\
  !*** ./src/app/button/google/google.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social {\r\n    background-color: #da573b;\r\n    border-color: #be5238;\r\n    margin: 5px;\r\n    width: 20%;\r\n    font-size: 250%;\r\n    padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2dvb2dsZS9nb29nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uL2dvb2dsZS9nb29nbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhNTczYjtcclxuICAgIGJvcmRlci1jb2xvcjogI2JlNTIzODtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGZvbnQtc2l6ZTogMjUwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/button/google/google.component.html":
/*!*****************************************************!*\
  !*** ./src/app/button/google/google.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary social-login-btn social\" (click)=\"do(null)\" href=\"javascript:;\"><i class=\"fab fa-google\"></i></a>"

/***/ }),

/***/ "./src/app/button/google/google.component.ts":
/*!***************************************************!*\
  !*** ./src/app/button/google/google.component.ts ***!
  \***************************************************/
/*! exports provided: GoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleComponent", function() { return GoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _button_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../button-classes */ "./src/app/button/button-classes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/utils.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");





var GoogleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GoogleComponent, _super);
    function GoogleComponent(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.sociaNetworkType = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_4__["SociaNetworkType"].GOOGLE;
        return _this;
    }
    GoogleComponent.prototype.ngOnInit = function () {
        this.api.config();
    };
    GoogleComponent.prototype.callback = function () {
    };
    GoogleComponent.prototype.do = function (form) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].isEmpty(form)) {
            this.form = form;
        }
        this.api.login(this.callback);
    };
    GoogleComponent.prototype.onClicked = function () {
    };
    GoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'google-button',
            template: __webpack_require__(/*! ./google.component.html */ "./src/app/button/google/google.component.html"),
            styles: [__webpack_require__(/*! ./google.component.css */ "./src/app/button/google/google.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_4__["GoogleService"]])
    ], GoogleComponent);
    return GoogleComponent;
}(_button_classes__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/button/signin/signin.component.css":
/*!****************************************************!*\
  !*** ./src/app/button/signin/signin.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/button/signin/signin.component.html":
/*!*****************************************************!*\
  !*** ./src/app/button/signin/signin.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [class]=\"classes\" [ngClass]=\"{ 'button-disabled': loading || hidden }\" (click)=\"doLogin()\" ><ng-content></ng-content></button>\r\n"

/***/ }),

/***/ "./src/app/button/signin/signin.component.ts":
/*!***************************************************!*\
  !*** ./src/app/button/signin/signin.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _button_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../button-classes */ "./src/app/button/button-classes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/services */ "./src/app/service/services.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils.ts");
/* harmony import */ var src_app_entity_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var src_app_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");








var SignInComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SignInComponent, _super);
    function SignInComponent(session) {
        var _this = _super.call(this) || this;
        _this.session = session;
        _this.loginDone = function (args) {
            _this.loading = false;
            _this.done.emit(args);
            if (args.code == src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].SUCCESS) {
            }
        };
        return _this;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.doLogin = function () {
        this.begin.emit();
        if (this.form.invalid) {
            var args = { code: src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].VALIDATION_ERROR, message: "" };
            this.done.emit(args);
            return;
        }
        this.loading = true;
        var formUser = new src_app_entity_User__WEBPACK_IMPORTED_MODULE_6__["User"]();
        formUser.username = this.form.value.username;
        formUser.password = this.form.value.password;
        this.form.value.socialMedia = src_app_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_7__["SociaNetworkType"].NONE;
        formUser.loginType = this.form.value.socialMedia;
        if (!this.requiredFieldsFilled(formUser)) {
            var args = { code: src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].VALIDATION_ERROR, message: this.language.requiredFields };
            this.done.emit(args);
            this.loading = false;
            this.done.emit();
            return;
        }
        this.session.authenticationService.authenticate(formUser, this.loginDone, this.session.setUserInSession);
    };
    SignInComponent.prototype.onClicked = function () {
    };
    SignInComponent.prototype.onSignedIn = function () {
    };
    SignInComponent.prototype.requiredFieldsFilled = function (user) {
        return !(src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmpty(user.username)
            || src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmpty(user.password));
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'login-button',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/button/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/button/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], SignInComponent);
    return SignInComponent;
}(_button_classes__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/button/signup/signup.component.css":
/*!****************************************************!*\
  !*** ./src/app/button/signup/signup.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/button/signup/signup.component.html":
/*!*****************************************************!*\
  !*** ./src/app/button/signup/signup.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [class]=\"classes\" [ngClass]=\"{ 'button-disabled': loading || hidden }\" (click)=\"doRegister()\"><ng-content></ng-content></button>\r\n"

/***/ }),

/***/ "./src/app/button/signup/signup.component.ts":
/*!***************************************************!*\
  !*** ./src/app/button/signup/signup.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _button_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../button-classes */ "./src/app/button/button-classes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/services */ "./src/app/service/services.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils.ts");
/* harmony import */ var src_app_entity_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var src_app_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");








var SignUpComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SignUpComponent, _super);
    function SignUpComponent(userApi, session) {
        var _this = _super.call(this) || this;
        _this.userApi = userApi;
        _this.session = session;
        return _this;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.ngAfterViewInit = function () {
        if (src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmpty(this.classes)) {
            //this.classes = "btn btn-lg btn-petlife btn-block btn-center";
        }
    };
    SignUpComponent.prototype.doRegister = function () {
        var _this = this;
        this.begin.emit();
        if (this.form.invalid) {
            var args = { code: src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].VALIDATION_ERROR, message: "" };
            this.done.emit(args);
            return;
        }
        this.loading = true;
        var formUser = new src_app_entity_User__WEBPACK_IMPORTED_MODULE_6__["User"]();
        formUser.username = this.form.value.username;
        formUser.password = this.form.value.password;
        formUser.name = this.form.value.name;
        this.form.value.socialMedia = src_app_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_7__["SociaNetworkType"].NONE;
        formUser.loginType = this.form.value.socialMedia;
        //Campos obrigatorios
        if (!this.requiredFieldsFilled(formUser, this.form.value.confirmPassword)) {
            var args = { code: src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].VALIDATION_ERROR, message: this.language.requiredFields };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        //Validar e-mail
        if (!src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmail(formUser.username)) {
            var args = { code: src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].VALIDATION_ERROR, message: this.language.invalidEmailAddress };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        //Validar senha
        if (formUser.password.length < _session_session_service__WEBPACK_IMPORTED_MODULE_1__["PASSWORD_CONFIG"].min || (!src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmpty(_session_session_service__WEBPACK_IMPORTED_MODULE_1__["PASSWORD_CONFIG"].contains))) {
            var args = { code: src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].VALIDATION_ERROR, message: this.language.invalidPassword.replace(":min", _session_session_service__WEBPACK_IMPORTED_MODULE_1__["PASSWORD_CONFIG"].min) };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        //Corresponder senha
        if (formUser.password != this.form.value.confirmPassword) {
            var args = { code: src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].VALIDATION_ERROR, message: this.language.passwordDoesntMatch };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        var user = this.userApi.save(formUser);
        window.httpUser = user;
        user.subscribe(function (result) {
            console.log(result);
            if (result.code == src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].SUCCESS) {
                _this.session.setUserInSession(result, _this.form.value.password);
                var args = { code: result.code, message: "" };
                _this.done.emit(args);
            }
            else {
                var message = "";
                if (result.code == src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].RESOURCE_EXISTS) {
                    message = _this.language.usernameExists;
                }
                var args = { code: result.code, message: message };
                _this.done.emit(args);
            }
            _this.loading = false;
        }, function (error) {
            console.log(error);
            var args = { code: src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].CONNECTION_ERROR, message: "" };
            _this.done.emit(args);
            _this.loading = false;
        });
    };
    SignUpComponent.prototype.onClicked = function () {
    };
    SignUpComponent.prototype.onSignedUp = function () {
    };
    SignUpComponent.prototype.requiredFieldsFilled = function (user, confirmPassword) {
        return !(src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmpty(user.username)
            || src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmpty(user.password)
            || src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmpty(user.name)
            || src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmpty(confirmPassword));
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'register-button',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/button/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/button/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_services__WEBPACK_IMPORTED_MODULE_4__["UserApiService"], _session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], SignUpComponent);
    return SignUpComponent;
}(_button_classes__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]));



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

/***/ "./src/app/database/database.ts":
/*!**************************************!*\
  !*** ./src/app/database/database.ts ***!
  \**************************************/
/*! exports provided: LocalDatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDatabaseService", function() { return LocalDatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils */ "./src/app/utils.ts");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




//https://github.com/typeorm/cordova-example
var LocalDatabaseService = /** @class */ (function () {
    function LocalDatabaseService(cordovaService) {
        var _this = this;
        this.cordovaService = cordovaService;
        this.error = function (err) {
            console.log("Error processing SQL: " + err.code + ": " + err.message);
            return true;
        };
        this.success = function () {
            console.log('SQL COMMAND EXECUTED');
        };
        this.createTables = function () {
            var transaction = function (tx) {
                var tables = [
                    'CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement,  username text, password text, current boolean)',
                    'CREATE TABLE IF NOT EXISTS pet  (id integer primary key autoincrement,  name text)'
                ];
                //cria tabelas
                tables.forEach(function (sql) {
                    tx.executeSql(sql);
                });
            };
            setTimeout(function () { _this.database.transaction(transaction, _this.error, _this.success); });
        };
        this.openDatabase();
        this.createTables();
        window.database = this;
    }
    LocalDatabaseService.prototype.openDatabase = function () {
        this.database = this.cordovaService.window.openDatabase("toppet", "2.0", "toppet", 1000000);
    };
    LocalDatabaseService.prototype.mergeUser = function (user) {
        var _this = this;
        var insertQuery = "INSERT INTO user (username, password, current) VALUES ('";
        var insertNew = function (tx) {
            tx.executeSql(insertQuery + user.username + "','" + user.password + "', 1)");
        };
        var lookup = function (tx) {
            tx.executeSql("SELECT * FROM user WHERE username = '" + user.username + "'", [], result);
        };
        var result = function (tx, res) {
            if (res.rows.length == 0) {
                _this.database.transaction(insertNew, _this.error, _this.success);
            }
            else {
                if (!_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].isEmpty(res)) {
                    for (var r in res.rows) {
                        if (res.rows[r].current == 1) {
                            return;
                        }
                        var update = function (tx) {
                            tx.executeSql("UPDATE user SET current = 1 WHERE username = '" + user.username + "'");
                        };
                        _this.database.transaction(update, _this.error, _this.success);
                        return;
                    }
                }
            }
        };
        this.database.transaction(lookup, this.error, this.success);
    };
    LocalDatabaseService.prototype.getCurrentUser = function (success, error) {
        var _this = this;
        var lookup = function (tx) {
            tx.executeSql("SELECT * FROM user WHERE current = 1", [], result);
        };
        var result = function (tx, res) {
            if (res.rows.length > 0) {
                for (var r in res.rows) {
                    if (success != undefined) {
                        success(res.rows[r]);
                    }
                    return;
                }
            }
            else {
                if (error != undefined) {
                    error();
                }
            }
        };
        setTimeout(function () { _this.database.transaction(lookup, _this.error, _this.success); });
    };
    LocalDatabaseService.prototype.resetUsers = function () {
        var transaction = function (tx) {
            tx.executeSql("DELETE FROM user");
        };
        this.database.transaction(transaction, this.error, this.success);
    };
    LocalDatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cordova_service__WEBPACK_IMPORTED_MODULE_2__["CordovaService"]])
    ], LocalDatabaseService);
    return LocalDatabaseService;
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

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService() {
        this.isAuthenticated = false;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.isAuthenticated;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".index-icon {\r\n    margin: 5px;\r\n    width: 26%;\r\n    font-size: 350%;\r\n    padding: 0;\r\n}\r\n\r\n.index-background {\r\n    background-color: rgb(232, 240, 254);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmRleC1pY29uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDI2JTtcclxuICAgIGZvbnQtc2l6ZTogMzUwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pbmRleC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDI0MCwgMjU0KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n  <br>\r\n  <br>\r\n  <div>\r\n    <p>\r\n      <a class=\"btn btn-primary index-icon\" href=\"javascript:;\" (click)=\"maps()\"><i class=\"fas fa-shopping-basket\"></i></a>&nbsp;\r\n      <a class=\"btn btn-toppet index-icon\" href=\"javascript:;\" (click)=\"appointments()\"><i class=\"fa fa-calendar\"></i></a>\r\n    </p>\r\n    <p>\r\n      <a class=\"btn btn-orange index-icon\" href=\"javascript:;\" (click)=\"pets()\"><i class=\"fa fa-paw\"></i></a>&nbsp;\r\n      <a class=\"btn btn-pink index-icon\" href=\"javascript:;\" (click)=\"donations()\"><i class=\"fa fa-hands-helping\"></i></a>\r\n    </p>\r\n  </div>\r\n  <br>\r\n  <br>\r\n</div>\r\n"

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
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../application */ "./src/app/application.ts");
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../navbar/menuService */ "./src/app/navbar/menuService.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent(router, menuService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.menuService = menuService;
        return _this;
    }
    Object.defineProperty(HomeComponent.prototype, "menu", {
        get: function () {
            return this.menuService.menu;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.ngOnInit = function () {
        this.enableMenu();
    };
    HomeComponent.prototype.enableMenu = function () {
        this.menu.disableMenu = false;
        this.menu.disable = false;
    };
    HomeComponent.prototype.maps = function () {
        this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_1__["MAPS_PAGE"]);
    };
    HomeComponent.prototype.appointments = function () {
        alert("Agenda");
    };
    HomeComponent.prototype.pets = function () {
        this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_1__["PETS_PAGE"]);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _navbar_menuService__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], HomeComponent);
    return HomeComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_4__["AppBase"]));



/***/ }),

/***/ "./src/app/language/Language.ts":
/*!**************************************!*\
  !*** ./src/app/language/Language.ts ***!
  \**************************************/
/*! exports provided: LanguageService, Links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application */ "./src/app/application.ts");



var LanguageService = /** @class */ (function () {
    function LanguageService() {
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
        this.signUp = "Cadastrar";
        this.register = "Cadastre-se";
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
        this.welcome = "Bem vindo ao ";
        this.alreadyHaveAnAccount = "Você já passui uma conta? Clique em ";
        this.otherWiseClickNext = "Caso contrário clique em ";
        this.quickAndEasy = "é rápido e fácil!";
        this.next = "Próximo";
        this.createWithSomeInfo = "Ou forneça apenas algumas informações";
        this.appDescription = "O jeito mais fácil e completo de cuidar do seu pet.";
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
        this.links = new Links();
    }
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LanguageService);
    return LanguageService;
}());

var Links = /** @class */ (function () {
    function Links() {
        this.pets = _application__WEBPACK_IMPORTED_MODULE_2__["PETS_PAGE"];
        this.home = _application__WEBPACK_IMPORTED_MODULE_2__["HOME_PAGE"];
        this.welcome = _application__WEBPACK_IMPORTED_MODULE_2__["WELCOME_PAGE"];
        this.login = _application__WEBPACK_IMPORTED_MODULE_2__["LOGIN_PAGE"];
    }
    return Links;
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

module.exports = "<div class=\"container\">     \r\n<script id=\"metamorph-1-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-21-start\" type=\"text/x-placeholder\"></script>\r\n<div class=\"container text-center default-background\">\r\n    <form class=\"form-signin\" #loginForm=\"ngForm\">\r\n        <h2 class=\"form-signin-heading\">{{language.signIn}}</h2>\r\n        <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\r\n        <br><br>\r\n        <p>\r\n            <facebook-button></facebook-button>\r\n            <google-button></google-button>\r\n        </p>\r\n        <br>\r\n\r\n        <small class=\"text-muted\">{{language.enterYourLogon}} {{applicationName}}</small>\r\n        <br>\r\n        \r\n        <input type=\"hidden\" name=\"socialMedia\" id=\"socialMedia\" value=\"0\" ngModel>\r\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.username}}\" type=\"text\" name=\"username\" id=\"username\" ngModel><!-- required -->\r\n        <input class=\"ember-view ember-text-field form-control login-input-pass\" placeholder=\"{{language.password}}\" type=\"password\" name=\"password\" id=\"password\" ngModel>\r\n\r\n        <script id=\"metamorph-22-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-22-end\" type=\"text/x-placeholder\"></script>\r\n        <div class=\"spinner-border text-toppet\" role=\"status\" [ngClass]=\"{ 'button-disabled': !loading }\">\r\n            <span class=\"sr-only\">Carregando...</span>\r\n        </div>\r\n        <app-alert></app-alert>\r\n        <login-button classes=\"btn btn-lg btn-toppet btn-block btn-center\" [form]=\"loginForm\" (begin)=\"onLoginInit()\" (done)=\"onLoginEnd($event)\">{{language.signIn}}</login-button>\r\n        <br>\r\n    </form>\r\n    <small class=\"create-account text-muted\">{{language.dontHave}} {{applicationName}} {{language.orSocialMediaAccount}} <button class=\"ember-view btn btn-sm btn-default\" (click)=\"register()\"> <b>{{language.register}} </b></button> </small>\r\n</div>"

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
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../navbar/menuService */ "./src/app/navbar/menuService.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../application */ "./src/app/application.ts");











//https://bootsnipp.com/snippets/kMd
var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(session, menuService, router) {
        var _this = _super.call(this) || this;
        _this.session = session;
        _this.menuService = menuService;
        _this.router = router;
        return _this;
    }
    Object.defineProperty(LoginComponent.prototype, "menu", {
        get: function () {
            return this.menuService.menu;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.menu.disableMenu = true;
        this.menu.disable = false;
        this.session.onLogged(null, this.router, this.menuService.menu);
    };
    LoginComponent.prototype.onLoginInit = function () {
        this.loading = true;
        this.alert.hide();
    };
    LoginComponent.prototype.onLoginEnd = function (eventArgs) {
        this.loading = false;
        if (eventArgs.code == _service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].SUCCESS) {
            this.session.onLogged(null, this.router, this.menu);
        }
        else {
            if (eventArgs.code == _service_services__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].VALIDATION_ERROR && !_utils__WEBPACK_IMPORTED_MODULE_7__["StringUtils"].isEmpty(eventArgs.message)) {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_8__["ColorClass"].danger);
            }
            else {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_8__["ColorClass"].danger);
            }
        }
    };
    LoginComponent.prototype.facebook = function () {
        console.log("submit login to facebook");
    };
    LoginComponent.prototype.google = function () {
        console.log("submit login to google");
    };
    LoginComponent.prototype.register = function () {
        this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_10__["REGISTER_USER_PAGE"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"])
    ], LoginComponent.prototype, "alert", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _navbar_menuService__WEBPACK_IMPORTED_MODULE_2__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_5__["AppBase"]));



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

/***/ "./src/app/navbar/menuService.ts":
/*!***************************************!*\
  !*** ./src/app/navbar/menuService.ts ***!
  \***************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils */ "./src/app/utils.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    Object.defineProperty(MenuService.prototype, "menu", {
        get: function () {
            return this._menu;
        },
        set: function (value) {
            this._menu = this.handleMenu(value);
        },
        enumerable: true,
        configurable: true
    });
    MenuService.prototype.handleMenu = function (value) {
        return _utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].isEmpty(this._menu) ? value : this._menu;
    };
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-navbar-container {\r\n    width: 100% !important;\r\n    height: calc(100vh - 64px) !important;\r\n}\r\n\r\nmat-navbar {\r\n    background-color: blue !important;\r\n}\r\n\r\ndiv {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\napp-navbar {\r\n    position: fixed;\r\n    z-index: 100;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LW5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgIFxyXG5kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXBwLW5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-dark bg-petlife\" [ngClass]=\"{ 'button-disabled': disable }\"><!-- navbar-expand-lg-->\r\n    <a class=\"navbar-brand\" href=\"#\">{{applicationName}}</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" [ngClass]=\"{ 'button-disabled': disableMenu }\" (click)=\"toggleNavbar()\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\" id=\"navbarColor02\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"javascript:;\"><i class=\"fa fa-user\">&nbsp;&nbsp;</i>{{user.name}}</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/{{language.links.pets}}\" (click)=\"toggleNavbar()\"><i class=\"fa fa-paw\">&nbsp;&nbsp;</i>{{language.myPet}}</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-hands-helping\">&nbsp;&nbsp;</i>{{language.adoptions}}</a><!--hands-helping -->\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-calendar\">&nbsp;&nbsp;</i>{{language.appointments}}</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-question-circle\">&nbsp;&nbsp;</i>{{language.about}}</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" (click)=\"logout()\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-times-circle\">&nbsp;&nbsp;</i>{{language.logout}}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

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
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var NavbarComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NavbarComponent, _super);
    function NavbarComponent(session, zone, router) {
        var _this = _super.call(this) || this;
        _this.session = session;
        _this.zone = zone;
        _this.router = router;
        _this.disableMenu = false;
        _this.disable = true;
        _this.navbarOpen = false;
        return _this;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.updateUser();
    };
    NavbarComponent.prototype.updateUser = function () {
        this.user = this.session.getCurrentUser();
        if (_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].isEmpty(this.user)) {
            this.user = new _entity_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        }
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.updateUser();
        this.navbarOpen = !this.navbarOpen;
    };
    NavbarComponent.prototype.logout = function () {
        console.log("loging out...");
        this.session.onLogout(null, this.zone, this.router, this, this.session.authenticationService);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_2__["AppBase"]));



/***/ }),

/***/ "./src/app/pets/add.component.css":
/*!****************************************!*\
  !*** ./src/app/pets/add.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .form-input {\r\n    display: block;\r\n    width: 100%;\r\n    height: calc(1.5em + .75rem + 2px);\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRyIsImZpbGUiOiJzcmMvYXBwL3BldHMvYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZm9ybS1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/pets/add.component.html":
/*!*****************************************!*\
  !*** ./src/app/pets/add.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- https://yespornplease.com/v/100046849\r\nhttps://yespornplease.com/v/956831015 \r\nhttps://yespornplease.com/v/383223747-->\r\n<div class=\"modal-dialog\" role=\"document\" id=\"addPet\" (keypress)=\"browserKeyPress($event)\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{language.addNewPet}}</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeDialog()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"card\">\r\n                <img [src]=\"pet.img\" class=\"card-img-top\" [ngClass]=\"{ 'button-disabled': pet.img == null }\">\r\n                <a class=\"btn btn-light\" [ngClass]=\"{ 'button-disabled': pet.img != null }\" (click)=\"camera()\" href=\"#\" style=\"font-size: 450%;\"><i class=\"fa fa-camera text-petlife\"></i></a>\r\n            </div>\r\n            <button class=\"btn btn-petlife btn-block btn-center\"  type=\"button\" (click)=\"openPetType()\">\r\n                {{animal.name}}\r\n                <i [ngClass]=\"'fa fa-' + animal.icon\" style=\"float: right; font-size: 125%;\"></i>\r\n            </button>\r\n            <input class=\"ember-view ember-text-field form-control login-input\" [(ngModel)]=\"pet.name\" placeholder=\"{{language.name}}\" type=\"text\" ngDefaultControl />\r\n            <input class=\"ember-view ember-text-field form-control login-input\" [(ngModel)]=\"pet.age\" placeholder=\"{{language.age}}\" type=\"text\" ngDefaultControl />\r\n            <input class=\"ember-view ember-text-field form-control login-input-pass\" [(ngModel)]=\"pet.description\" placeholder=\"{{language.description}}\" type=\"text\" ngDefaultControl />       \r\n        </div>\r\n        <app-alert></app-alert>\r\n        <div class=\"modal-footer\">\r\n            <div class=\"spinner-border text-petlife\" role=\"status\" [ngClass]=\"{ 'button-disabled': !loading }\">\r\n                <span class=\"sr-only\">Carregando...</span>\r\n            </div>\r\n            <button class=\"btn btn-petlife btn-block btn-center\" type=\"button\" (click)=\"createPet()\" [ngClass]=\"{ 'button-disabled': loading }\" data-bindattr-3=\"3\">{{language.createUser}}</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n      "

/***/ }),

/***/ "./src/app/pets/pet.picker.component.css":
/*!***********************************************!*\
  !*** ./src/app/pets/pet.picker.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pet-icon {\r\n    margin: 5px;\r\n    width: 20%;\r\n    font-size: 265%;\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXQucGlja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wZXRzL3BldC5waWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXQtaWNvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmb250LXNpemU6IDI2NSU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pets/pet.picker.component.html":
/*!************************************************!*\
  !*** ./src/app/pets/pet.picker.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{language.animal}}</h5>\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeDialog()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"container text-center\">\r\n        <p>\r\n            <a *ngFor=\"let item of animals; let i= index ;trackBy: trackByFn\" class=\"btn btn-petlife social-login-btn pet-icon\" (click)=\"select(item)\" href=\"#\"><i class=\"fa fa-{{item.icon}}\"></i></a>\r\n        </p>\r\n      </div> \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pets/pets.component.css":
/*!*****************************************!*\
  !*** ./src/app/pets/pets.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{padding:0;margin:0;}\r\n\r\nbody{\r\n\tfont-family:Verdana, Geneva, sans-serif;\r\n\tfont-size:18px;\r\n\tbackground-color:#CCC;\r\n}\r\n\r\n.float{\r\n\tposition:fixed;\r\n\twidth:60px;\r\n\theight:60px;\r\n\tbottom:40px;\r\n\tright:40px;\r\n\t/* background-color:#0C9; */\r\n\tcolor:#FFF;\r\n\tborder-radius:50px;\r\n\ttext-align:center;\r\n\tbox-shadow: 2px 2px 3px #999;\r\n}\r\n\r\n.my-float{\r\n\tmargin-top:22px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDOztBQUVyQjtDQUNDLHVDQUF1QztDQUN2QyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsY0FBYztDQUNkLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7Q0FDViwyQkFBMkI7Q0FDM0IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntwYWRkaW5nOjA7bWFyZ2luOjA7fVxyXG5cclxuYm9keXtcclxuXHRmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojQ0NDO1xyXG59XHJcblxyXG4uZmxvYXR7XHJcblx0cG9zaXRpb246Zml4ZWQ7XHJcblx0d2lkdGg6NjBweDtcclxuXHRoZWlnaHQ6NjBweDtcclxuXHRib3R0b206NDBweDtcclxuXHRyaWdodDo0MHB4O1xyXG5cdC8qIGJhY2tncm91bmQtY29sb3I6IzBDOTsgKi9cclxuXHRjb2xvcjojRkZGO1xyXG5cdGJvcmRlci1yYWRpdXM6NTBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xyXG59XHJcblxyXG4ubXktZmxvYXR7XHJcblx0bWFyZ2luLXRvcDoyMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pets/pets.component.html":
/*!******************************************!*\
  !*** ./src/app/pets/pets.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"body_section\">\r\n  <div class=interface_class>\r\n    <div class=\"page-header\">\r\n\t\t  <h1>{{title}} <small>{{user.pets.length}}</small></h1>\r\n    </div>\r\n    <div *ngFor=\"let pet of user.pets\" class=\"card\" style=\"width: 18rem;\">\r\n      <div class=\"spinner-border text-petlife\" role=\"status\" [ngClass]=\"{ 'button-disabled': !loading }\">\r\n        <span class=\"sr-only\">Carregando...</span>\r\n      </div>\r\n      <img src=\"{{pet.img}}\" class=\"card-img-top\" alt=\"...\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{pet.name}}</h5>\r\n        <p class=\"card-text\">{{pet.description}}</p>\r\n        <a href=\"#\" class=\"btn btn-petlife\">{{language.view}}</a>\r\n      </div>\r\n    </div>\r\n\r\n    <a href=\"#\" class=\"float bg-toppet\" (click)=\"add()\" [ngClass]=\"{ 'button-disabled': dialog }\">\r\n      <i class=\"fa fa-plus my-float\"></i>\r\n    </a>\r\n  </div> \r\n</section>\r\n\r\n"

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
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../navbar/menuService */ "./src/app/navbar/menuService.ts");












var PetsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetsComponent, _super);
    function PetsComponent(api, modal, menuService) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.modal = modal;
        _this.menuService = menuService;
        _this.title = "Pets";
        _this.dialog = false;
        return _this;
    }
    PetsComponent_1 = PetsComponent;
    Object.defineProperty(PetsComponent.prototype, "menu", {
        get: function () {
            return this.menuService.menu;
        },
        enumerable: true,
        configurable: true
    });
    PetsComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.user = this.menu.user;
        this.menu.disable = false;
        this.menu.disableMenu = false;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_3__["PetApiService"], ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], _navbar_menuService__WEBPACK_IMPORTED_MODULE_11__["MenuService"]])
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
        return _this;
    }
    EditPetsComponent_1 = EditPetsComponent;
    EditPetsComponent.prototype.ngOnInit = function () {
        this.pet = new _entity_Pet__WEBPACK_IMPORTED_MODULE_4__["Pet"]();
        this.animal.name = this.language.animal;
        this.cameraOptions = {
            quality: 100,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        };
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
        /*
        const dialogRef = this.modal.confirm()
            .size('lg')
            .showClose(true)
            .title(this.language.animal)
            .body(`
              <div class="container text-center">
                <p>
                    <a *ngFor="let item of animals; let i= index ;trackBy: trackByFn" class="btn btn-petlife social-login-btn pet-icon" (click)="select(item)" href="#"><i class="fa fa-{{item.icon}}"></i></a>
                </p>
              </div>
          `)
            .open();
    
        dialogRef.result
            .then( result => alert(`The result is: ${result}`) );*/
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
        EditPetsComponent.dialogRef;
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

module.exports = "/* brandico */\r\n[class*=\"brandico-\"]:before {\r\n  font-family: 'brandico', sans-serif;\r\n}\r\n/* entypo */\r\n[class*=\"entypo-\"]:before {\r\n  font-family: 'entypo', sans-serif;\r\n}\r\n/* openwebicons */\r\n[class*=\"openwebicons-\"]:before {\r\n  font-family: 'OpenWeb Icons', sans-serif;\r\n}\r\n/* zocial */\r\n[class*=\"zocial-\"]:before {\r\n  font-family: 'zocial', sans-serif;\r\n}\r\n.form-signin{\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.login-input {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.login-input-pass {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.signup-input {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.signup-input-confirm {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.create-account {\r\n  text-align: center;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n.btn-center{\r\n  width: 50%;\r\n  text-align: center;\r\n  margin: inherit;\r\n}\r\n.social-login-btn {\r\n  margin: 5px;\r\n  width: 20%;\r\n  font-size: 250%;\r\n  padding: 0;\r\n}\r\n.social-login-more {\r\n  width: 45%;\r\n}\r\n.social-google {\r\n  background-color: #da573b;\r\n  border-color: #be5238;\r\n}\r\n.social-google:hover{\r\n  background-color: #be5238;\r\n  border-color: #9b4631;\r\n}\r\n.social-facebook {\r\n  background-color: #4c699e;\r\n  border-color: #47618d;\r\n}\r\n.social-facebook:hover {\r\n  background-color: #47618d;\r\n  border-color: #3c5173;\r\n}\r\n.text-muted {\r\n  color: #a3a7aa !important;\r\n  font-size: 94%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUdiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYnJhbmRpY28gKi9cclxuW2NsYXNzKj1cImJyYW5kaWNvLVwiXTpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnYnJhbmRpY28nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBlbnR5cG8gKi9cclxuW2NsYXNzKj1cImVudHlwby1cIl06YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogJ2VudHlwbycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIG9wZW53ZWJpY29ucyAqL1xyXG5bY2xhc3MqPVwib3BlbndlYmljb25zLVwiXTpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbldlYiBJY29ucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIHpvY2lhbCAqL1xyXG5bY2xhc3MqPVwiem9jaWFsLVwiXTpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnem9jaWFsJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZvcm0tc2lnbmlue1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxvZ2luLWlucHV0IHtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuLmxvZ2luLWlucHV0LXBhc3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLnNpZ251cC1pbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uc2lnbnVwLWlucHV0LWNvbmZpcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmNyZWF0ZS1hY2NvdW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmJ0bi1jZW50ZXJ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luLWJ0biB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbi1tb3JlIHtcclxuICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4uc29jaWFsLWdvb2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhNTczYjtcclxuICBib3JkZXItY29sb3I6ICNiZTUyMzg7XHJcbn1cclxuLnNvY2lhbC1nb29nbGU6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlNTIzODtcclxuICBib3JkZXItY29sb3I6ICM5YjQ2MzE7XHJcbn1cclxuXHJcbi5zb2NpYWwtZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzY5OWU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDc2MThkO1xyXG59XHJcbi5zb2NpYWwtZmFjZWJvb2s6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzYxOGQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2M1MTczO1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgY29sb3I6ICNhM2E3YWEgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDk0JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _button_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../button/signup/signup.component */ "./src/app/button/signup/signup.component.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../application */ "./src/app/application.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../navbar/menuService */ "./src/app/navbar/menuService.ts");
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../entity/User */ "./src/app/entity/User.ts");














//https://bootsnipp.com/snippets/kMdg
var RegisterUserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterUserComponent, _super);
    function RegisterUserComponent(session, menuService, api, facebookService, googleService, router) {
        var _this = _super.call(this) || this;
        _this.session = session;
        _this.menuService = menuService;
        _this.api = api;
        _this.facebookService = facebookService;
        _this.googleService = googleService;
        _this.router = router;
        _this.login = function (args) {
            _this.loading = false;
            if (args.code == _service_services__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].SUCCESS) {
                _this.session.onLogged(_application__WEBPACK_IMPORTED_MODULE_2__["PETS_PAGE"], _this.router, _this.menu);
            }
            else {
                _this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_2__["LOGIN_PAGE"]);
            }
        };
        return _this;
    }
    Object.defineProperty(RegisterUserComponent.prototype, "menu", {
        get: function () {
            return this.menuService.menu;
        },
        enumerable: true,
        configurable: true
    });
    RegisterUserComponent.prototype.ngOnInit = function () {
        this.menu.disableMenu = true;
        this.facebookService.config();
        this.googleService.config();
    };
    RegisterUserComponent.prototype.facebook = function () {
        console.log("submit login to facebook");
        this.facebookService.login(this.login);
    };
    RegisterUserComponent.prototype.google = function () {
        console.log("submit login to google");
        this.googleService.login(undefined);
    };
    RegisterUserComponent.prototype.onRegisterInit = function () {
        this.loading = true;
        this.alert.hide();
    };
    RegisterUserComponent.prototype.onRegisterEnd = function (eventArgs) {
        if (eventArgs.code == _service_services__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].SUCCESS) {
            if (this.submit.form != undefined && this.submit.form.value.username != undefined && this.submit.form.value.password != undefined) {
                var user = new _entity_User__WEBPACK_IMPORTED_MODULE_13__["User"]();
                user.username = this.submit.form.value.username;
                user.password = this.submit.form.value.password;
                user.loginType = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_9__["SociaNetworkType"].NONE;
                this.session.authenticationService.authenticate(user, this.login, this.session.setUserInSession);
            }
            else {
                this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_2__["LOGIN_PAGE"]);
            }
        }
        else {
            if (eventArgs.code == _service_services__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].VALIDATION_ERROR && !_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(eventArgs.message)) {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_10__["ColorClass"].danger);
            }
            else if (eventArgs.code != _service_services__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].VALIDATION_ERROR && _utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(eventArgs.message)) {
                this.alert.show(this.api.getErrorMessage(eventArgs.code, this.language), _styles_styles__WEBPACK_IMPORTED_MODULE_10__["ColorClass"].danger);
            }
            else {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_10__["ColorClass"].danger);
            }
            this.loading = false;
        }
    };
    RegisterUserComponent.prototype.onLoginInit = function () {
        this.loading = true;
        this.alert.hide();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"])
    ], RegisterUserComponent.prototype, "alert", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _button_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"])
    ], RegisterUserComponent.prototype, "submit", void 0);
    RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.user.component.html */ "./src/app/register/register.user.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _navbar_menuService__WEBPACK_IMPORTED_MODULE_12__["MenuService"],
            _service_services__WEBPACK_IMPORTED_MODULE_5__["UserApiService"],
            _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_9__["FacebookService"],
            _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_9__["GoogleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_6__["AppBase"]));

////////////////////////////////////////////////////////////////////
/*
@Component({
  selector: 'app-pet-register',
  templateUrl: './register.pet.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterPetComponent extends AppBase {

  registerForm: NgForm;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private api: PetApiService) {
    super();
  }

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
  }

  doRegister(form: NgForm) : void {

    this.alert.hide();
    this.registerForm = form;
    
  }

  requiredFieldsFilled(user: User, confirmPassword : string) : boolean {
    return !(StringUtils.isEmpty(user.username)
    || StringUtils.isEmpty(user.password)
    || StringUtils.isEmpty(user.name)
    || StringUtils.isEmpty(confirmPassword));
  }

  goBack() : void {
    if(this.lastComponent != undefined && this.lastComponent != null){
      super.goBack(this.lastComponent);
    }
  }

}*/ 


/***/ }),

/***/ "./src/app/register/register.user.component.html":
/*!*******************************************************!*\
  !*** ./src/app/register/register.user.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container default-background\">     \r\n<script id=\"metamorph-1-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-21-start\" type=\"text/x-placeholder\"></script>\r\n\r\n<div class=\"container text-center\">\r\n    <form class=\"form-signin\" #registerForm=\"ngForm\" autocomplete=\"off\">\r\n        <h2 class=\"form-signin-heading\" style=\"color: white !important\">{{language.signUp}}</h2>\r\n        <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\r\n        <br>\r\n        <p>\r\n          <facebook-button></facebook-button>\r\n          <google-button></google-button>\r\n        </p>\r\n        <small class=\"text-muted\">{{language.createWithSomeInfo}}</small>\r\n        <br>\r\n        <input type=\"hidden\" name=\"socialMedia\" id=\"socialMedia\" ngModel />\r\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.email}}\" type=\"text\" name=\"username\" id=\"username\" ngModel /><!-- required -->\r\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.name}}\" type=\"text\" name=\"name\" id=\"name\" ngModel />\r\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.password}}\" type=\"password\" name=\"password\" id=\"password\" ngModel />\r\n        <input class=\"ember-view ember-text-field form-control login-input-pass\" placeholder=\"{{language.confirmPassword}}\" type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" ngModel />\r\n        <div class=\"spinner-border text-petlife\" role=\"status\" [ngClass]=\"{ 'button-disabled': !loading }\">\r\n            <span class=\"sr-only\">Carregando...</span>\r\n        </div>\r\n        <br>\r\n        <app-alert></app-alert>\r\n        <register-button classes=\"btn btn-lg btn-toppet btn-block btn-center\" [form]=\"registerForm\" (begin)=\"onRegisterInit()\" (done)=\"onRegisterEnd($event)\">{{language.signUp}}</register-button>\r\n        <br>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/service/services.ts":
/*!*************************************!*\
  !*** ./src/app/service/services.ts ***!
  \*************************************/
/*! exports provided: httpOptions, UserApiService, PetApiService, AuthenticationService, ReturnCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiService", function() { return UserApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetApiService", function() { return PetApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnCode", function() { return ReturnCode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../database/database */ "./src/app/database/database.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _language_Language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language/Language */ "./src/app/language/Language.ts");










// Set the http options
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" })
};
var endpoints = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint;
var ApiService = /** @class */ (function () {
    function ApiService() {
        this.endpoint = endpoints.local;
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

var AuthenticationService = /** @class */ (function () {
    //https://jwt.io/introduction/
    function AuthenticationService(userApi, _localDatabase) {
        this.userApi = userApi;
        this._localDatabase = _localDatabase;
    }
    Object.defineProperty(AuthenticationService.prototype, "localDatabase", {
        get: function () {
            return this._localDatabase;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.authenticate = function (entryUser, callback, sessionCallback) {
        var _this = this;
        var user = this.userApi.login(entryUser);
        window.httpUser = user;
        user.subscribe(function (result) {
            console.log(result);
            if (result.code == ReturnCode.SUCCESS) {
                _this._localDatabase.mergeUser(entryUser);
                if (sessionCallback != undefined) {
                    sessionCallback(result, entryUser.password);
                }
            }
            callback({ code: result.code, message: "" });
        }, function (error) {
            console.log(error);
            callback({ code: ReturnCode.CONNECTION_ERROR, message: _this.userApi.getErrorMessage({ code: ReturnCode.CONNECTION_ERROR }, new _language_Language__WEBPACK_IMPORTED_MODULE_9__["LanguageService"]()) });
        });
    };
    AuthenticationService.prototype.authenticateLastUser = function (callback, sessionCallback) {
        var _this = this;
        var doLogin = function (result) {
            var user = new _entity_User__WEBPACK_IMPORTED_MODULE_6__["User"]();
            user.username = result.username;
            user.password = result.password;
            user.loginType = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_8__["SociaNetworkType"].NONE;
            _this.authenticate(user, callback, sessionCallback);
        };
        var notLogin = function (y) {
            callback({ code: ReturnCode.NOT_FOUND, message: "" });
        };
        this._localDatabase.getCurrentUser(doLogin, notLogin);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [UserApiService, _database_database__WEBPACK_IMPORTED_MODULE_7__["LocalDatabaseService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());

var ReturnCode;
(function (ReturnCode) {
    ReturnCode[ReturnCode["SUCCESS"] = 0] = "SUCCESS";
    ReturnCode[ReturnCode["NOT_FOUND"] = -1] = "NOT_FOUND";
    ReturnCode[ReturnCode["VALIDATION_ERROR"] = -2] = "VALIDATION_ERROR";
    ReturnCode[ReturnCode["SERVER_ERROR"] = -3] = "SERVER_ERROR";
    ReturnCode[ReturnCode["RESOURCE_EXISTS"] = -4] = "RESOURCE_EXISTS";
    ReturnCode[ReturnCode["CONNECTION_ERROR"] = -5] = "CONNECTION_ERROR";
})(ReturnCode || (ReturnCode = {}));


/***/ }),

/***/ "./src/app/session/session.service.ts":
/*!********************************************!*\
  !*** ./src/app/session/session.service.ts ***!
  \********************************************/
/*! exports provided: PASSWORD_CONFIG, SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_CONFIG", function() { return PASSWORD_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../application */ "./src/app/application.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var PASSWORD_CONFIG = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].passwordConfig;
var SessionService = /** @class */ (function () {
    function SessionService(_authenticationService, _zone) {
        this._authenticationService = _authenticationService;
        this._zone = _zone;
        this.setUserInSession = function (result, password) {
            if (result && result.sid) {
                //store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].CURRENT_USER, JSON.stringify(result.entity));
                localStorage.setItem(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].CURRENT_PASSWORD, password);
                localStorage.setItem(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].SESSION_ID, result.sid);
                localStorage.setItem(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].LOGIN_DATE, result.date);
            }
        };
    }
    Object.defineProperty(SessionService.prototype, "zone", {
        get: function () {
            return this._zone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "authenticationService", {
        get: function () {
            return this._authenticationService;
        },
        enumerable: true,
        configurable: true
    });
    SessionService.prototype.getCurrentUser = function () {
        var json = localStorage.getItem(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].CURRENT_USER) != undefined ? JSON.parse(localStorage.getItem(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].CURRENT_USER)) : null;
        if (json != null) {
            var user = new _entity_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
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
    SessionService.prototype.onLogged = function (redirectUrl, router, menu) {
        if (_utils__WEBPACK_IMPORTED_MODULE_3__["StringUtils"].isEmpty(redirectUrl)) {
            redirectUrl = _application__WEBPACK_IMPORTED_MODULE_5__["HOME_PAGE"];
        }
        var user = this.getCurrentUser();
        if (!_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].isEmpty(user)) {
            if (!_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].isEmpty(menu)) {
                menu.user = user;
            }
            if (_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].isEmpty(this.zone)) {
                router.navigateByUrl(redirectUrl);
            }
            else {
                this.zone.run(function () { return router.navigateByUrl(redirectUrl); });
            }
        }
    };
    SessionService.prototype.onLogout = function (redirectUrl, zone, router, menu, authenticationService) {
        if (_utils__WEBPACK_IMPORTED_MODULE_3__["StringUtils"].isEmpty(redirectUrl)) {
            redirectUrl = _application__WEBPACK_IMPORTED_MODULE_5__["WELCOME_PAGE"];
        }
        var user = this.getCurrentUser();
        if (!_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].isEmpty(user)) {
            authenticationService.localDatabase.resetUsers();
            if (_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].isEmpty(zone)) {
                router.navigateByUrl(redirectUrl);
            }
            else {
                zone.run(function () { return router.navigateByUrl(redirectUrl); });
            }
        }
        this.resetSession();
    };
    SessionService.prototype.resetSession = function () {
        var values = Object.keys(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"]).map(function (k) { return _utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"][k]; });
        values.forEach(function (attr) {
            localStorage.removeItem(attr);
        });
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/socialNetwork/socialNetworkServices.ts":
/*!********************************************************!*\
  !*** ./src/app/socialNetwork/socialNetworkServices.ts ***!
  \********************************************************/
/*! exports provided: FacebookService, GoogleService, SociaNetworkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookService", function() { return FacebookService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleService", function() { return GoogleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SociaNetworkType", function() { return SociaNetworkType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var facebookAppId = '389609115207477';
var FacebookService = /** @class */ (function () {
    function FacebookService() {
    }
    FacebookService.prototype.login = function (callback) {
        //Chave Secreta do Aplicativo
        //b4a49157bf9ba2cc4b7b085c0ba13ad3
        // FB.login();
        FB.login(function (response) {
            console.log('submitLogin', response);
            if (response.authResponse && response.status == "connected") {
                window.facebook = response;
                var form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]([], []);
                form.value.username = response.authResponse.userID;
                form.value.password = response.authResponse.userID;
                form.value.socialMedia = SociaNetworkType.FACEBOOK;
                callback(form);
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
    ////plugin add cordova-plugin-facebook4 --save --variable APP_ID="389609115207477" --variable APP_NAME="Toppet"
    FacebookService.prototype.config = function () {
        window.fbAsyncInit = function () {
            FB.init({
                appId: facebookAppId,
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
    FacebookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FacebookService);
    return FacebookService;
}());

var GoogleService = /** @class */ (function () {
    function GoogleService() {
    }
    GoogleService.prototype.login = function (callback) {
        callback();
    };
    GoogleService.prototype.config = function () {
    };
    GoogleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleService);
    return GoogleService;
}());

var SociaNetworkType;
(function (SociaNetworkType) {
    SociaNetworkType[SociaNetworkType["NONE"] = 0] = "NONE";
    SociaNetworkType[SociaNetworkType["FACEBOOK"] = 1] = "FACEBOOK";
    SociaNetworkType[SociaNetworkType["GOOGLE"] = 2] = "GOOGLE";
    SociaNetworkType[SociaNetworkType["TWITTER"] = 3] = "TWITTER";
})(SociaNetworkType || (SociaNetworkType = {}));


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
/*! exports provided: StringUtils, FormUtils, ObjectUtils, SessionAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringUtils", function() { return StringUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUtils", function() { return FormUtils; });
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

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container default-background\">\r\n  <div class=\"container text-center\">\r\n    <br>\r\n    <h1 class=\"form-signin-heading\" style=\"color: white !important\">{{language.welcome}} <b>{{applicationName}}</b></h1>\r\n    <br>\r\n    <small class=\"text-muted\">{{language.appDescription}}</small>\r\n    <a routerLink=\"/signin\"><button class=\"btn btn-toppet btn-center btn-bottom-left btn-lg\" style=\"width: 40% !important;\">{{language.login}}</button></a>\r\n    <a routerLink=\"/signup\"><button class=\"btn btn-toppet btn-hollow btn-center btn-bottom-right btn-lg\" style=\"width: 40% !important;\">{{language.signUp}}</button></a>\r\n  </div>\r\n</div>\r\n<!-- Tasha Reign\r\nhttp://juicygif.com/public/Gif/Sex-Blonde-done-doggystyle.gif-187463p.html/(mode)/search/(keyword)/couples-sex -->"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WelcomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WelcomeComponent, _super);
    function WelcomeComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        return _this;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        //alert('gtt');
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_2__["AppBase"]));



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

module.exports = __webpack_require__(/*! C:\Users\eporto\git\Toto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map