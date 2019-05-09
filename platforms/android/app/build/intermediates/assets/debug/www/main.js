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

module.exports = ".center {\n    margin: auto;\n    width: 50%;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */"

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
    { path: _application__WEBPACK_IMPORTED_MODULE_5__["PETS_PAGE"], component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_1__["PetsComponent"], children: [
            { path: _application__WEBPACK_IMPORTED_MODULE_5__["PETS_WIZARD_DEF_PAGE"], component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_1__["PetTypeComponent"] },
            { path: _application__WEBPACK_IMPORTED_MODULE_5__["PETS_WIZARD_INFO_PAGE"], component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_1__["PetInfoComponent"] },
            { path: _application__WEBPACK_IMPORTED_MODULE_5__["PETS_WIZARD_PIC_PAGE"], component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_1__["PetPictureComponent"] },
        ] },
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

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entity/system */ "./src/app/entity/system.ts");









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
            if (args.code == _entity_system__WEBPACK_IMPORTED_MODULE_8__["ReturnCode"].SUCCESS) {
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
            this.login({ code: _entity_system__WEBPACK_IMPORTED_MODULE_8__["ReturnCode"].NOT_FOUND });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"], _navbar_menuService__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
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
/* harmony import */ var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./appointments/appointments.component */ "./src/app/appointments/appointments.component.ts");































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
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__["PetInfoComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__["PetTypeComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__["PetPictureComponent"],
                _button_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SignInComponent"],
                _button_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                _button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_16__["FacebookComponent"],
                _button_google_google_component__WEBPACK_IMPORTED_MODULE_19__["GoogleComponent"],
                _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_30__["AppointmentsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__["BreedPickerComponent"]
            ],
            entryComponents: [
                _button_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SignInComponent"],
                _button_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                _button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_16__["FacebookComponent"],
                _button_google_google_component__WEBPACK_IMPORTED_MODULE_19__["GoogleComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_12__["BreedPickerComponent"]
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
/*! exports provided: WELCOME_PAGE, LOGIN_PAGE, HOME_PAGE, REGISTER_USER_PAGE, MAPS_PAGE, PETS_PAGE, PETS_WIZARD_DEF_PAGE, PETS_WIZARD_INFO_PAGE, PETS_WIZARD_PIC_PAGE, PETS_VIEW_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WELCOME_PAGE", function() { return WELCOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_PAGE", function() { return LOGIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER_PAGE", function() { return REGISTER_USER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAPS_PAGE", function() { return MAPS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETS_PAGE", function() { return PETS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETS_WIZARD_DEF_PAGE", function() { return PETS_WIZARD_DEF_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETS_WIZARD_INFO_PAGE", function() { return PETS_WIZARD_INFO_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETS_WIZARD_PIC_PAGE", function() { return PETS_WIZARD_PIC_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETS_VIEW_PAGE", function() { return PETS_VIEW_PAGE; });
var WELCOME_PAGE = "welcome";
var LOGIN_PAGE = "signin";
var HOME_PAGE = "home";
var REGISTER_USER_PAGE = "signup";
//export const REGISTER_PET_PAGE = RegisterPetComponent;
var MAPS_PAGE = "maps";
//export const AUTOLOGIN_PAGE = "login";
var PETS_PAGE = "pets";
var PETS_WIZARD_DEF_PAGE = "definition";
var PETS_WIZARD_INFO_PAGE = "info";
var PETS_WIZARD_PIC_PAGE = "picture";
var PETS_VIEW_PAGE = "view";


/***/ }),

/***/ "./src/app/appointments/appointments.component.css":
/*!*********************************************************!*\
  !*** ./src/app/appointments/appointments.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".float{\n\tposition:fixed;\n\twidth:60px;\n\theight:60px;\n\tbottom:40px;\n\tright:40px;\n\t/* background-color:#0C9; */\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n\tbox-shadow: 2px 2px 3px #999;\n}\n\n.my-float{\n\tmargin-top:22px;\n}\n\nbody {\n\tpadding: 60px 0px;\n\tbackground-color: rgb(220, 220, 220);\n}\n\n.event-list {\n\tlist-style: none;\n\tfont-family: 'Lato', sans-serif;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n.event-list > li {\n\tbackground-color: rgb(255, 255, 255);\n\tbox-shadow: 0px 0px 5px rgb(51, 51, 51);\n\tbox-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);\n\tpadding: 0px;\n\tmargin: 0px 0px 20px;\n}\n\n.event-list > li > time {\n\tdisplay: inline-block;\n\twidth: 100%;\n\tcolor: rgb(255, 255, 255);\n\tbackground-color: rgb(197, 44, 102);\n\tpadding: 5px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n}\n\n.event-list > li:nth-child(even) > time {\n\tbackground-color: rgb(165, 82, 167);\n}\n\n.event-list > li > time > span {\n\tdisplay: none;\n}\n\n.event-list > li > time > .day {\n\tdisplay: block;\n\tfont-size: 56pt;\n\tfont-weight: 100;\n\tline-height: 1;\n}\n\n.event-list > li time > .month {\n\tdisplay: block;\n\tfont-size: 24pt;\n\tfont-weight: 900;\n\tline-height: 1;\n}\n\n.event-list > li > img {\n\twidth: 100%;\n}\n\n.event-list > li > .info {\n\tpadding-top: 5px;\n\ttext-align: center;\n}\n\n.event-list > li > .info > .title {\n\tfont-size: 17pt;\n\tfont-weight: 700;\n\tmargin: 0px;\n}\n\n.event-list > li > .info > .desc {\n\tfont-size: 13pt;\n\tfont-weight: 300;\n\tmargin: 0px;\n}\n\n.event-list > li > .info > ul,\n.event-list > li > .social > ul {\n\tdisplay: table;\n\tlist-style: none;\n\tmargin: 10px 0px 0px;\n\tpadding: 0px;\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.event-list > li > .social > ul {\n\tmargin: 0px;\n}\n\n.event-list > li > .info > ul > li,\n.event-list > li > .social > ul > li {\n\tdisplay: table-cell;\n\tcursor: pointer;\n\tcolor: rgb(30, 30, 30);\n\tfont-size: 11pt;\n\tfont-weight: 300;\n\tpadding: 3px 0px;\n}\n\n.event-list > li > .info > ul > li > a {\n\tdisplay: block;\n\twidth: 100%;\n\tcolor: rgb(30, 30, 30);\n\ttext-decoration: none;\n}\n\n.event-list > li > .social > ul > li {    \n\tpadding: 0px;\n}\n\n.event-list > li > .social > ul > li > a {\n\tpadding: 3px 0px;\n}\n\n.event-list > li > .info > ul > li:hover,\n.event-list > li > .social > ul > li:hover {\n\tcolor: rgb(30, 30, 30);\n\tbackground-color: rgb(200, 200, 200);\n}\n\n.facebook a,\n.twitter a,\n.google-plus a {\n\tdisplay: block;\n\twidth: 100%;\n\tcolor: rgb(75, 110, 168) !important;\n}\n\n.twitter a {\n\tcolor: rgb(79, 213, 248) !important;\n}\n\n.google-plus a {\n\tcolor: rgb(221, 75, 57) !important;\n}\n\n.facebook:hover a {\n\tcolor: rgb(255, 255, 255) !important;\n\tbackground-color: rgb(75, 110, 168) !important;\n}\n\n.twitter:hover a {\n\tcolor: rgb(255, 255, 255) !important;\n\tbackground-color: rgb(79, 213, 248) !important;\n}\n\n.google-plus:hover a {\n\tcolor: rgb(255, 255, 255) !important;\n\tbackground-color: rgb(221, 75, 57) !important;\n}\n\n@media (min-width: 768px) {\n\t.event-list > li {\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 120px;\n\t\tpadding: 0px;\n\t}\n\t.event-list > li > time,\n\t.event-list > li > img  {\n\t\tdisplay: inline-block;\n\t}\n\t.event-list > li > time,\n\t.event-list > li > img {\n\t\twidth: 120px;\n\t\tfloat: left;\n\t}\n\t.event-list > li > .info {\n\t\tbackground-color: rgb(245, 245, 245);\n\t\toverflow: hidden;\n\t}\n\t.event-list > li > time,\n\t.event-list > li > img {\n\t\twidth: 120px;\n\t\theight: 120px;\n\t\tpadding: 0px;\n\t\tmargin: 0px;\n\t}\n\t.event-list > li > .info {\n\t\tposition: relative;\n\t\theight: 120px;\n\t\ttext-align: left;\n\t\tpadding-right: 40px;\n\t}\t\n\t.event-list > li > .info > .title, \n\t.event-list > li > .info > .desc {\n\t\tpadding: 0px 10px;\n\t}\n\t.event-list > li > .info > ul {\n\t\tposition: absolute;\n\t\tleft: 0px;\n\t\tbottom: 0px;\n\t}\n\t.event-list > li > .social {\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tright: 0px;\n\t\tdisplay: block;\n\t\twidth: 40px;\n\t}\n\t.event-list > li > .social > ul {\n\t\tborder-left: 1px solid rgb(230, 230, 230);\n\t}\n\t.event-list > li > .social > ul > li {\t\t\t\n\t\tdisplay: block;\n\t\tpadding: 0px;\n\t}\n\t.event-list > li > .social > ul > li > a {\n\t\tdisplay: block;\n\t\twidth: 40px;\n\t\tpadding: 10px 0px 9px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztDQUNkLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7Q0FDViwyQkFBMkI7Q0FDM0IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsK0JBQStCO0NBQy9CLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMsdUNBQXVDO0NBQ3ZDLDZDQUE2QztDQUM3QyxZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsbUNBQW1DO0NBQ25DLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsbUNBQW1DO0FBQ3BDOztBQUNBO0NBQ0MsYUFBYTtBQUNkOztBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBQ0E7O0NBRUMsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7O0NBRUMsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLHNCQUFzQjtDQUN0QixxQkFBcUI7QUFDdEI7O0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7O0NBRUMsc0JBQXNCO0NBQ3RCLG9DQUFvQztBQUNyQzs7QUFDQTs7O0NBR0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxtQ0FBbUM7QUFDcEM7O0FBQ0E7Q0FDQyxtQ0FBbUM7QUFDcEM7O0FBQ0E7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMsOENBQThDO0FBQy9DOztBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLDhDQUE4QztBQUMvQzs7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyw2Q0FBNkM7QUFDOUM7O0FBRUE7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0NBQ2I7Q0FDQTs7RUFFQyxxQkFBcUI7Q0FDdEI7Q0FDQTs7RUFFQyxZQUFZO0VBQ1osV0FBVztDQUNaO0NBQ0E7RUFDQyxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0NBQ2pCO0NBQ0E7O0VBRUMsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztDQUNaO0NBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7Q0FDQTs7RUFFQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztDQUNaO0NBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztDQUNaO0NBQ0E7RUFDQyx5Q0FBeUM7Q0FDMUM7Q0FDQTtFQUNDLGNBQWM7RUFDZCxZQUFZO0NBQ2I7Q0FDQTtFQUNDLGNBQWM7RUFDZCxXQUFXO0VBQ1gscUJBQXFCO0NBQ3RCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHBvaW50bWVudHMvYXBwb2ludG1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXR7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHR3aWR0aDo2MHB4O1xuXHRoZWlnaHQ6NjBweDtcblx0Ym90dG9tOjQwcHg7XG5cdHJpZ2h0OjQwcHg7XG5cdC8qIGJhY2tncm91bmQtY29sb3I6IzBDOTsgKi9cblx0Y29sb3I6I0ZGRjtcblx0Ym9yZGVyLXJhZGl1czo1MHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0Ym94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbn1cblxuLm15LWZsb2F0e1xuXHRtYXJnaW4tdG9wOjIycHg7XG59XG5cbmJvZHkge1xuXHRwYWRkaW5nOiA2MHB4IDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG4uZXZlbnQtbGlzdCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHg7XG59XG4uZXZlbnQtbGlzdCA+IGxpIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoNTEsIDUxLCA1MSk7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoNTEsIDUxLCA1MSwgMC43KTtcblx0cGFkZGluZzogMHB4O1xuXHRtYXJnaW46IDBweCAwcHggMjBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiB0aW1lIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0Y29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgNDQsIDEwMik7XG5cdHBhZGRpbmc6IDVweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmV2ZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoZXZlbikgPiB0aW1lIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgODIsIDE2Nyk7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gdGltZSA+IHNwYW4ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IHRpbWUgPiAuZGF5IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogNTZwdDtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG4uZXZlbnQtbGlzdCA+IGxpIHRpbWUgPiAubW9udGgge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAyNHB0O1xuXHRmb250LXdlaWdodDogOTAwO1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiBpbWcge1xuXHR3aWR0aDogMTAwJTtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyB7XG5cdHBhZGRpbmctdG9wOiA1cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IC50aXRsZSB7XG5cdGZvbnQtc2l6ZTogMTdwdDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0bWFyZ2luOiAwcHg7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiAuZGVzYyB7XG5cdGZvbnQtc2l6ZTogMTNwdDtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0bWFyZ2luOiAwcHg7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCxcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwge1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0bWFyZ2luOiAxMHB4IDBweCAwcHg7XG5cdHBhZGRpbmc6IDBweDtcblx0d2lkdGg6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwge1xuXHRtYXJnaW46IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsID4gbGksXG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGkge1xuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XG5cdGZvbnQtc2l6ZTogMTFwdDtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0cGFkZGluZzogM3B4IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsID4gbGkgPiBhIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRjb2xvcjogcmdiKDMwLCAzMCwgMzApO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IFxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpIHsgICAgXG5cdHBhZGRpbmc6IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSA+IGEge1xuXHRwYWRkaW5nOiAzcHggMHB4O1xufSBcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsID4gbGk6aG92ZXIsXG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGk6aG92ZXIge1xuXHRjb2xvcjogcmdiKDMwLCAzMCwgMzApO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XG59XG4uZmFjZWJvb2sgYSxcbi50d2l0dGVyIGEsXG4uZ29vZ2xlLXBsdXMgYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0Y29sb3I6IHJnYig3NSwgMTEwLCAxNjgpICFpbXBvcnRhbnQ7XG59XG4udHdpdHRlciBhIHtcblx0Y29sb3I6IHJnYig3OSwgMjEzLCAyNDgpICFpbXBvcnRhbnQ7XG59XG4uZ29vZ2xlLXBsdXMgYSB7XG5cdGNvbG9yOiByZ2IoMjIxLCA3NSwgNTcpICFpbXBvcnRhbnQ7XG59XG4uZmFjZWJvb2s6aG92ZXIgYSB7XG5cdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAxMTAsIDE2OCkgIWltcG9ydGFudDtcbn1cbi50d2l0dGVyOmhvdmVyIGEge1xuXHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig3OSwgMjEzLCAyNDgpICFpbXBvcnRhbnQ7XG59XG4uZ29vZ2xlLXBsdXM6aG92ZXIgYSB7XG5cdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzUsIDU3KSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0LmV2ZW50LWxpc3QgPiBsaSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTIwcHg7XG5cdFx0cGFkZGluZzogMHB4O1xuXHR9XG5cdC5ldmVudC1saXN0ID4gbGkgPiB0aW1lLFxuXHQuZXZlbnQtbGlzdCA+IGxpID4gaW1nICB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR9XG5cdC5ldmVudC1saXN0ID4gbGkgPiB0aW1lLFxuXHQuZXZlbnQtbGlzdCA+IGxpID4gaW1nIHtcblx0XHR3aWR0aDogMTIwcHg7XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdH1cblx0LmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXHQuZXZlbnQtbGlzdCA+IGxpID4gdGltZSxcblx0LmV2ZW50LWxpc3QgPiBsaSA+IGltZyB7XG5cdFx0d2lkdGg6IDEyMHB4O1xuXHRcdGhlaWdodDogMTIwcHg7XG5cdFx0cGFkZGluZzogMHB4O1xuXHRcdG1hcmdpbjogMHB4O1xuXHR9XG5cdC5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGhlaWdodDogMTIwcHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuXHR9XHRcblx0LmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gLnRpdGxlLCBcblx0LmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gLmRlc2Mge1xuXHRcdHBhZGRpbmc6IDBweCAxMHB4O1xuXHR9XG5cdC5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMHB4O1xuXHRcdGJvdHRvbTogMHB4O1xuXHR9XG5cdC5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwcHg7XG5cdFx0cmlnaHQ6IDBweDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogNDBweDtcblx0fVxuXHQuZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsIHtcblx0XHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcblx0fVxuXHQuZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGkge1x0XHRcdFxuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHBhZGRpbmc6IDBweDtcblx0fVxuXHQuZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGkgPiBhIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogNDBweDtcblx0XHRwYWRkaW5nOiAxMHB4IDBweCA5cHg7XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/appointments/appointments.component.html":
/*!**********************************************************!*\
  !*** ./src/app/appointments/appointments.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"[ col-xs-12 col-sm-offset-2 col-sm-8 ]\">\n      <ul class=\"event-list\">\n        <li>\n          <time datetime=\"2014-07-20\">\n            <span class=\"day\">4</span>\n            <span class=\"month\">Jul</span>\n            <span class=\"year\">2014</span>\n            <span class=\"time\">ALL DAY</span>\n          </time>\n          <img alt=\"Independence Day\" src=\"https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg\" />\n          <div class=\"info\">\n            <h2 class=\"title\">Independence Day</h2>\n            <p class=\"desc\">United States Holiday</p>\n          </div>\n          <div class=\"social\">\n            <ul>\n              <li class=\"facebook\" style=\"width:33%;\"><a href=\"#facebook\"><span class=\"fa fa-facebook\"></span></a></li>\n              <li class=\"twitter\" style=\"width:34%;\"><a href=\"#twitter\"><span class=\"fa fa-twitter\"></span></a></li>\n              <li class=\"google-plus\" style=\"width:33%;\"><a href=\"#google-plus\"><span class=\"fa fa-google-plus\"></span></a></li>\n            </ul>\n          </div>\n        </li>\n\n        <li>\n          <time datetime=\"2014-07-20 0000\">\n            <span class=\"day\">8</span>\n            <span class=\"month\">Jul</span>\n            <span class=\"year\">2014</span>\n            <span class=\"time\">12:00 AM</span>\n          </time>\n          <div class=\"info\">\n            <h2 class=\"title\">One Piece Unlimited World Red</h2>\n            <p class=\"desc\">PS Vita</p>\n            <ul>\n              <li style=\"width:50%;\"><a href=\"#website\"><span class=\"fa fa-globe\"></span> Website</a></li>\n              <li style=\"width:50%;\"><span class=\"fa fa-money\"></span> $39.99</li>\n            </ul>\n          </div>\n          <div class=\"social\">\n            <ul>\n              <li class=\"facebook\" style=\"width:33%;\"><a href=\"#facebook\"><span class=\"fa fa-facebook\"></span></a></li>\n              <li class=\"twitter\" style=\"width:34%;\"><a href=\"#twitter\"><span class=\"fa fa-twitter\"></span></a></li>\n              <li class=\"google-plus\" style=\"width:33%;\"><a href=\"#google-plus\"><span class=\"fa fa-google-plus\"></span></a></li>\n            </ul>\n          </div>\n        </li>\n\n        <li>\n          <time datetime=\"2014-07-20 2000\">\n            <span class=\"day\">20</span>\n            <span class=\"month\">Jan</span>\n            <span class=\"year\">2014</span>\n            <span class=\"time\">8:00 PM</span>\n          </time>\n          <img alt=\"My 24th Birthday!\" src=\"https://farm5.staticflickr.com/4150/5045502202_1d867c8a41_q.jpg\" />\n          <div class=\"info\">\n            <h2 class=\"title\">Mouse0270's 24th Birthday!</h2>\n            <p class=\"desc\">Bar Hopping in Erie, Pa.</p>\n            <ul>\n              <li style=\"width:33%;\">1 <span class=\"glyphicon glyphicon-ok\"></span></li>\n              <li style=\"width:34%;\">3 <span class=\"fa fa-question\"></span></li>\n              <li style=\"width:33%;\">103 <span class=\"fa fa-envelope\"></span></li>\n            </ul>\n          </div>\n          <div class=\"social\">\n            <ul>\n              <li class=\"facebook\" style=\"width:33%;\"><a href=\"#facebook\"><span class=\"fa fa-facebook\"></span></a></li>\n              <li class=\"twitter\" style=\"width:34%;\"><a href=\"#twitter\"><span class=\"fa fa-twitter\"></span></a></li>\n              <li class=\"google-plus\" style=\"width:33%;\"><a href=\"#google-plus\"><span class=\"fa fa-google-plus\"></span></a></li>\n            </ul>\n          </div>\n        </li>\n\n        <li>\n          <time datetime=\"2014-07-31 1600\">\n            <span class=\"day\">31</span>\n            <span class=\"month\">Jan</span>\n            <span class=\"year\">2014</span>\n            <span class=\"time\">4:00 PM</span>\n          </time>\n          <img alt=\"Disney Junior Live On Tour!\" src=\"http://www.thechaifetzarena.com/images/main/DL13_PiratePrincess_thumb.jpg\" />\n          <div class=\"info\">\n            <h2 class=\"title\">Disney Junior Live On Tour!</h2>\n            <p class=\"desc\"> Pirate and Princess Adventure</p>\n            <ul>\n              <li style=\"width:33%;\">$49.99 <span class=\"fa fa-male\"></span></li>\n              <li style=\"width:34%;\">$29.99 <span class=\"fa fa-child\"></span></li>\n            </ul>\n          </div>\n          <div class=\"social\">\n            <ul>\n              <li class=\"facebook\" style=\"width:33%;\"><a href=\"#facebook\"><span class=\"fa fa-facebook\"></span></a></li>\n              <li class=\"twitter\" style=\"width:34%;\"><a href=\"#twitter\"><span class=\"fa fa-twitter\"></span></a></li>\n              <li class=\"google-plus\" style=\"width:33%;\"><a href=\"#google-plus\"><span class=\"fa fa-google-plus\"></span></a></li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <a href=\"javascript:;\" class=\"float bg-toppet\" (click)=\"add()\" [ngClass]=\"{ 'button-disabled': dialog }\">\n    <i class=\"fa fa-plus my-float\"></i>\n  </a>"

/***/ }),

/***/ "./src/app/appointments/appointments.component.ts":
/*!********************************************************!*\
  !*** ./src/app/appointments/appointments.component.ts ***!
  \********************************************************/
/*! exports provided: AppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function() { return AppointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent() {
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
    };
    AppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointments',
            template: __webpack_require__(/*! ./appointments.component.html */ "./src/app/appointments/appointments.component.html"),
            styles: [__webpack_require__(/*! ./appointments.component.css */ "./src/app/appointments/appointments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());



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

module.exports = ".social {\n    background-color: #4c699e;\n    border-color: #47618d;\n    margin: 5px;\n    width: 20%;\n    font-size: 250%;\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi9mYWNlYm9vay9mYWNlYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNjk5ZTtcbiAgICBib3JkZXItY29sb3I6ICM0NzYxOGQ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gICAgcGFkZGluZzogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/button/facebook/facebook.component.html":
/*!*********************************************************!*\
  !*** ./src/app/button/facebook/facebook.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary social-login-btn social\" (click)=\"do(null)\" href=\"javascript:;\"><i class=\"fab fa-facebook-f\"></i></a>\n<!-- <fb:login-button \n                scope=\"public_profile,email\"\n                onlogin=\"checkLoginState();\">\n            </fb:login-button> -->"

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
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _button_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../button-classes */ "./src/app/button/button-classes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/utils.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var src_app_entity_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/entity/system */ "./src/app/entity/system.ts");







var FacebookComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacebookComponent, _super);
    function FacebookComponent(api, session) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.session = session;
        _this.sociaNetworkType = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_5__["SociaNetworkType"].FACEBOOK;
        _this.callback = function (args) {
            console.log(args);
            if (args.code == src_app_entity_system__WEBPACK_IMPORTED_MODULE_6__["ReturnCode"].SUCCESS) {
                _this.session.authenticationService.authenticate(args.result, _this.login, _this.session.setUserInSession);
            }
            else {
                _this.loading = false;
                _this.done.emit(args);
            }
        };
        _this.login = function (args) {
            console.log(args);
            _this.done.emit(args);
            _this.loading = false;
        };
        return _this;
    }
    FacebookComponent.prototype.ngOnInit = function () {
        this.api.config();
    };
    FacebookComponent.prototype.do = function (form) {
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.begin.emit();
        if (!_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].isEmpty(form)) {
            this.form = form;
        }
        this.api.login(this.callback);
    };
    FacebookComponent.prototype.onClicked = function () {
    };
    FacebookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'facebook-button',
            template: __webpack_require__(/*! ./facebook.component.html */ "./src/app/button/facebook/facebook.component.html"),
            styles: [__webpack_require__(/*! ./facebook.component.css */ "./src/app/button/facebook/facebook.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_5__["FacebookService"], _session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], FacebookComponent);
    return FacebookComponent;
}(_button_classes__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/button/google/google.component.css":
/*!****************************************************!*\
  !*** ./src/app/button/google/google.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social {\n    background-color: #da573b;\n    border-color: #be5238;\n    margin: 5px;\n    width: 20%;\n    font-size: 250%;\n    padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2dvb2dsZS9nb29nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uL2dvb2dsZS9nb29nbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYTU3M2I7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmU1MjM4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZm9udC1zaXplOiAyNTAlO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"

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
        if (this.loading) {
            return;
        }
        this.loading = true;
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

module.exports = "<button [class]=\"classes\" [ngClass]=\"{ 'button-disabled': hidden }\" (click)=\"doLogin()\" ><ng-content></ng-content></button>\n"

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
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils.ts");
/* harmony import */ var src_app_entity_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var src_app_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var src_app_entity_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/entity/system */ "./src/app/entity/system.ts");








var SignInComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SignInComponent, _super);
    function SignInComponent(session) {
        var _this = _super.call(this) || this;
        _this.session = session;
        _this.loginDone = function (args) {
            _this.loading = false;
            _this.done.emit(args);
            if (args.code == src_app_entity_system__WEBPACK_IMPORTED_MODULE_7__["ReturnCode"].SUCCESS) {
            }
        };
        return _this;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.doLogin = function () {
        if (this.loading) {
            return;
        }
        this.begin.emit();
        if (this.form.invalid) {
            var args = { code: src_app_entity_system__WEBPACK_IMPORTED_MODULE_7__["ReturnCode"].VALIDATION_ERROR, message: "", result: this.form };
            this.done.emit(args);
            return;
        }
        this.loading = true;
        var formUser = new src_app_entity_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        formUser.username = this.form.value.username;
        formUser.password = this.form.value.password;
        this.form.value.socialMedia = src_app_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_6__["SociaNetworkType"].NONE;
        formUser.loginType = this.form.value.socialMedia;
        if (!this.requiredFieldsFilled(formUser)) {
            var args = { code: src_app_entity_system__WEBPACK_IMPORTED_MODULE_7__["ReturnCode"].VALIDATION_ERROR, message: this.language.requiredFields, result: this.form };
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
        return !(src_app_utils__WEBPACK_IMPORTED_MODULE_4__["StringUtils"].isEmpty(user.username)
            || src_app_utils__WEBPACK_IMPORTED_MODULE_4__["StringUtils"].isEmpty(user.password));
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

module.exports = "<button [class]=\"classes\" [ngClass]=\"{ 'button-disabled': hidden }\" (click)=\"doRegister()\"><ng-content></ng-content></button>\n"

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
/* harmony import */ var src_app_entity_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/entity/system */ "./src/app/entity/system.ts");









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
    SignUpComponent.prototype.doRegister = function () {
        var _this = this;
        if (this.loading) {
            return;
        }
        this.begin.emit();
        if (this.form.invalid) {
            var args = { code: src_app_entity_system__WEBPACK_IMPORTED_MODULE_8__["ReturnCode"].VALIDATION_ERROR, message: "", result: this.form };
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
            var args = { code: src_app_entity_system__WEBPACK_IMPORTED_MODULE_8__["ReturnCode"].VALIDATION_ERROR, message: this.language.requiredFields, result: this.form };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        //Validar e-mail
        if (!src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmail(formUser.username)) {
            var args = { code: src_app_entity_system__WEBPACK_IMPORTED_MODULE_8__["ReturnCode"].VALIDATION_ERROR, message: this.language.invalidEmailAddress, result: this.form };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        //Validar senha
        if (formUser.password.length < _session_session_service__WEBPACK_IMPORTED_MODULE_1__["PASSWORD_CONFIG"].min || (!src_app_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isEmpty(_session_session_service__WEBPACK_IMPORTED_MODULE_1__["PASSWORD_CONFIG"].contains))) {
            var args = { code: src_app_entity_system__WEBPACK_IMPORTED_MODULE_8__["ReturnCode"].VALIDATION_ERROR, message: this.language.invalidPassword.replace(":min", _session_session_service__WEBPACK_IMPORTED_MODULE_1__["PASSWORD_CONFIG"].min), result: this.form };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        //Corresponder senha
        if (formUser.password != this.form.value.confirmPassword) {
            var args = { code: src_app_entity_system__WEBPACK_IMPORTED_MODULE_8__["ReturnCode"].VALIDATION_ERROR, message: this.language.passwordDoesntMatch, result: this.form };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        var user = this.userApi.save(formUser);
        window.httpUser = user;
        user.subscribe(function (result) {
            console.log(result);
            if (result.code == src_app_entity_system__WEBPACK_IMPORTED_MODULE_8__["ReturnCode"].SUCCESS) {
                _this.session.setUserInSession(result, _this.form.value.password);
                var args = { code: result.code, message: "", result: _this.form };
                _this.done.emit(args);
            }
            else {
                var message = "";
                if (result.code == src_app_entity_system__WEBPACK_IMPORTED_MODULE_8__["ReturnCode"].RESOURCE_EXISTS) {
                    message = _this.language.usernameExists;
                }
                var args = { code: result.code, message: message, result: _this.form };
                _this.done.emit(args);
            }
            _this.loading = false;
        }, function (error) {
            console.log(error);
            var args = { code: src_app_entity_system__WEBPACK_IMPORTED_MODULE_8__["ReturnCode"].CONNECTION_ERROR, message: "", result: _this.form };
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
                    'CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement,  username text, password text, current boolean, loginType integer)',
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
        var insertQuery = "INSERT INTO user (username, password, current, loginType) VALUES ('";
        var insertNew = function (tx) {
            tx.executeSql(insertQuery + user.username + "','" + user.password + "', 1, " + user.loginType + " )");
        };
        var lookup = function (tx) {
            tx.executeSql("SELECT * FROM user WHERE username = '" + user.username + "' AND loginType = " + user.loginType, [], result);
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
                            tx.executeSql("UPDATE user SET current = 1 WHERE username = '" + user.username + "' AND loginType = " + user.loginType);
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
        this.createTables();
        var transaction = function (tx) {
            tx.executeSql("DROP TABLE user");
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
/*! exports provided: Pet, PetType, Breed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return Pet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetType", function() { return PetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breed", function() { return Breed; });
var Pet = /** @class */ (function () {
    function Pet() {
    }
    return Pet;
}());

var PetType = /** @class */ (function () {
    function PetType() {
    }
    return PetType;
}());

var Breed = /** @class */ (function () {
    function Breed() {
    }
    return Breed;
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
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/entity/system.ts":
/*!**********************************!*\
  !*** ./src/app/entity/system.ts ***!
  \**********************************/
/*! exports provided: ReturnCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnCode", function() { return ReturnCode; });
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

module.exports = ".index-icon {\n    margin: 5px;\n    width: 26%;\n    font-size: 350%;\n    padding: 0;\n}\n\n.index-background {\n    background-color: rgb(232, 240, 254);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmRleC1pY29uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogMjYlO1xuICAgIGZvbnQtc2l6ZTogMzUwJTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uaW5kZXgtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjQwLCAyNTQpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <br>\n  <br>\n  <div>\n    <p>\n      <a class=\"btn btn-primary index-icon\" href=\"javascript:;\" (click)=\"maps()\"><i class=\"fas fa-shopping-basket\"></i></a>&nbsp;\n      <a class=\"btn btn-toppet index-icon\" href=\"javascript:;\" (click)=\"appointments()\"><i class=\"fa fa-calendar\"></i></a>\n    </p>\n    <p>\n      <a class=\"btn btn-orange index-icon\" href=\"javascript:;\" (click)=\"pets()\"><i class=\"fa fa-paw\"></i></a>&nbsp;\n      <a class=\"btn btn-pink index-icon\" href=\"javascript:;\" (click)=\"donations()\"><i class=\"fa fa-hands-helping\"></i></a>\n    </p>\n  </div>\n  <br>\n  <br>\n</div>\n"

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

module.exports = "/* brandico */\n[class*=\"brandico-\"]:before {\n  font-family: 'brandico', sans-serif;\n}\n/* entypo */\n[class*=\"entypo-\"]:before {\n  font-family: 'entypo', sans-serif;\n}\n/* openwebicons */\n[class*=\"openwebicons-\"]:before {\n  font-family: 'OpenWeb Icons', sans-serif;\n}\n/* zocial */\n[class*=\"zocial-\"]:before {\n  font-family: 'zocial', sans-serif;\n}\n.form-signin{\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.login-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.login-input-pass {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.signup-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.signup-input-confirm {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.create-account {\n  text-align: center;\n  width: 100%;\n  display: block;\n}\n.form-signin .form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.btn-center{\n  width: 50%;\n  text-align: center;\n  margin: inherit;\n}\n.social-login-btn {\n  margin: 5px;\n  width: 20%;\n  font-size: 250%;\n  padding: 0;\n}\n.social-login-more {\n  width: 45%;\n}\n.social-google {\n  background-color: #da573b;\n  border-color: #be5238;\n}\n.social-google:hover{\n  background-color: #be5238;\n  border-color: #9b4631;\n}\n.social-twitter {\n  background-color: #1daee3;\n  border-color: #3997ba;\n}\n.social-twitter:hover {\n  background-color: #3997ba;\n  border-color: #347b95;\n}\n.social-facebook {\n  background-color: #4c699e;\n  border-color: #47618d;\n}\n.social-facebook:hover {\n  background-color: #47618d;\n  border-color: #3c5173;\n}\n.social-linkedin {\n  background-color: #4875B4;\n  border-color: #466b99;\n}\n.social-linkedin:hover {\n  background-color: #466b99;\n  border-color: #3b5a7c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUdiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBicmFuZGljbyAqL1xuW2NsYXNzKj1cImJyYW5kaWNvLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2JyYW5kaWNvJywgc2Fucy1zZXJpZjtcbn1cblxuLyogZW50eXBvICovXG5bY2xhc3MqPVwiZW50eXBvLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2VudHlwbycsIHNhbnMtc2VyaWY7XG59XG5cbi8qIG9wZW53ZWJpY29ucyAqL1xuW2NsYXNzKj1cIm9wZW53ZWJpY29ucy1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuV2ViIEljb25zJywgc2Fucy1zZXJpZjtcbn1cblxuLyogem9jaWFsICovXG5bY2xhc3MqPVwiem9jaWFsLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ3pvY2lhbCcsIHNhbnMtc2VyaWY7XG59XG5cbi5mb3JtLXNpZ25pbntcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbi1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLmxvZ2luLWlucHV0LXBhc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLnNpZ251cC1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uc2lnbnVwLWlucHV0LWNvbmZpcm0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmNyZWF0ZS1hY2NvdW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5idG4tY2VudGVye1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogaW5oZXJpdDtcbn1cblxuLnNvY2lhbC1sb2dpbi1idG4ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDIwJTtcbiAgZm9udC1zaXplOiAyNTAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc29jaWFsLWxvZ2luLW1vcmUge1xuICB3aWR0aDogNDUlO1xufVxuXG4uc29jaWFsLWdvb2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYTU3M2I7XG4gIGJvcmRlci1jb2xvcjogI2JlNTIzODtcbn1cbi5zb2NpYWwtZ29vZ2xlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU1MjM4O1xuICBib3JkZXItY29sb3I6ICM5YjQ2MzE7XG59XG5cbi5zb2NpYWwtdHdpdHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZGFlZTM7XG4gIGJvcmRlci1jb2xvcjogIzM5OTdiYTtcbn1cbi5zb2NpYWwtdHdpdHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk3YmE7XG4gIGJvcmRlci1jb2xvcjogIzM0N2I5NTtcbn1cblxuLnNvY2lhbC1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzY5OWU7XG4gIGJvcmRlci1jb2xvcjogIzQ3NjE4ZDtcbn1cbi5zb2NpYWwtZmFjZWJvb2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc2MThkO1xuICBib3JkZXItY29sb3I6ICMzYzUxNzM7XG59XG5cbi5zb2NpYWwtbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg3NUI0O1xuICBib3JkZXItY29sb3I6ICM0NjZiOTk7XG59XG4uc29jaWFsLWxpbmtlZGluOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NmI5OTtcbiAgYm9yZGVyLWNvbG9yOiAjM2I1YTdjO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">     \n<script id=\"metamorph-1-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-21-start\" type=\"text/x-placeholder\"></script>\n<div class=\"container text-center default-background\">\n    <form class=\"form-signin\" #loginForm=\"ngForm\">\n        <h2 class=\"form-signin-heading\">{{language.signIn}}</h2>\n        <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\n        <br><br>\n        <p>\n            <facebook-button (begin)=\"onLoginInit()\" (done)=\"onLoginEnd($event)\"></facebook-button>\n            <google-button (begin)=\"onLoginInit()\" (done)=\"onLoginEnd($event)\"></google-button>\n        </p>\n        <br>\n\n        <small class=\"text-muted\">{{language.enterYourLogon}} {{applicationName}}</small>\n        <br>\n        \n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.username}}\" type=\"text\" name=\"username\" id=\"username\" ngModel><!-- required -->\n        <input class=\"ember-view ember-text-field form-control login-input-pass\" placeholder=\"{{language.password}}\" type=\"password\" name=\"password\" id=\"password\" ngModel>\n\n        <script id=\"metamorph-22-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-22-end\" type=\"text/x-placeholder\"></script>\n        <div *ngIf=\"loading\" class=\"spinner-border text-toppet\" role=\"status\">\n            <span class=\"sr-only\">Carregando...</span>\n        </div>\n        <app-alert></app-alert>\n        <login-button [hidden]=\"loading\" classes=\"btn btn-lg btn-toppet btn-block btn-center\" [form]=\"loginForm\" (begin)=\"onLoginInit()\" (done)=\"onLoginEnd($event)\">{{language.signIn}}</login-button>\n        <br>\n    </form>\n    <small class=\"create-account text-muted\">{{language.dontHave}} {{applicationName}} {{language.orSocialMediaAccount}} <button class=\"ember-view btn btn-sm btn-default\" (click)=\"register()\"> <b>{{language.register}} </b></button> </small>\n</div>"

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
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../application */ "./src/app/application.ts");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../entity/system */ "./src/app/entity/system.ts");











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
        if (eventArgs.code == _entity_system__WEBPACK_IMPORTED_MODULE_10__["ReturnCode"].SUCCESS) {
            this.session.onLogged(null, this.router, this.menu);
        }
        else {
            if (eventArgs.code == _entity_system__WEBPACK_IMPORTED_MODULE_10__["ReturnCode"].VALIDATION_ERROR && !_utils__WEBPACK_IMPORTED_MODULE_6__["StringUtils"].isEmpty(eventArgs.message)) {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_7__["ColorClass"].danger);
            }
            else {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_7__["ColorClass"].danger);
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
        this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_9__["REGISTER_USER_PAGE"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"])
    ], LoginComponent.prototype, "alert", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _navbar_menuService__WEBPACK_IMPORTED_MODULE_2__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_4__["AppBase"]));



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

module.exports = "mat-navbar-container {\n    width: 100% !important;\n    height: calc(100vh - 64px) !important;\n}\n\nmat-navbar {\n    background-color: blue !important;\n}\n\ndiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\napp-navbar {\n    position: fixed;\n    z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbmF2YmFyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KSAhaW1wb3J0YW50O1xufVxuXG5tYXQtbmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG59XG4gICAgXG5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYXBwLW5hdmJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-dark bg-petlife\" *ngIf=\"disable == false\"><!-- navbar-expand-lg-->\n    <a class=\"navbar-brand\" href=\"#\">{{applicationName}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" [ngClass]=\"{ 'button-disabled': disableMenu }\" (click)=\"toggleNavbar()\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\" id=\"navbarColor02\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"javascript:;\"><i class=\"fa fa-user\">&nbsp;&nbsp;</i>{{user.name}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/{{language.links.pets}}\" (click)=\"toggleNavbar()\"><i class=\"fa fa-paw\">&nbsp;&nbsp;</i>{{language.myPet}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-hands-helping\">&nbsp;&nbsp;</i>{{language.adoptions}}</a><!--hands-helping -->\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-calendar\">&nbsp;&nbsp;</i>{{language.appointments}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-question-circle\">&nbsp;&nbsp;</i>{{language.about}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"logout()\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-times-circle\">&nbsp;&nbsp;</i>{{language.logout}}</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

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

/***/ "./src/app/pets/pet.breeds.component.html":
/*!************************************************!*\
  !*** ./src/app/pets/pet.breeds.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{language.animal}}</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeDialog()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"[ col-xs-12 col-sm-offset-2 col-sm-8 ]\">\n            <ul class=\"event-list\" style=\"width: 115% !important; margin-left: -8% !important;\">\n              <li *ngFor=\"let b of type.breeds\" (click)=\"select(b)\" style=\"height: 65px !important; line-height:65px;\">\n                  <div style=\"display:inline-block; vertical-align:middle; line-height:1.25em; text-align: center; width: 100%;\">\n                    <h2 class=\"new-title\" >{{b.description}}</h2>\n                  </div>\n              </li>\n            </ul>\n          </div>\n        </div> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pets/pet.info.component.html":
/*!**********************************************!*\
  !*** ./src/app/pets/pet.info.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- https://yespornplease.com/v/100046849\nhttps://yespornplease.com/v/956831015 \nhttps://yespornplease.com/v/383223747-->\n<section class=\"body_section\">\n    <div class=interface_class>\n        <div class=\"page-header\">\n            <h1>{{language.addNewPet}}</h1>\n        </div>\n        \n        <div class=\"card\">\n            <img [src]=\"pet.img\" class=\"card-img-top\" [ngClass]=\"{ 'button-disabled': pet.img == null }\">\n            <a class=\"btn btn-light\" [ngClass]=\"{ 'button-disabled': pet.img != null }\" (click)=\"camera()\" href=\"javascript:;\" style=\"font-size: 450%;\"><i class=\"fa fa-camera text-petlife\"></i></a>\n        </div>\n        <button class=\"btn btn-petlife btn-block btn-center\"  type=\"button\" (click)=\"openPetType()\">\n            {{animal.name}}\n            <i [ngClass]=\"'fa fa-' + animal.icon\" style=\"float: right; font-size: 125%;\"></i>\n        </button>\n        <input class=\"ember-view ember-text-field form-control login-input\" [(ngModel)]=\"pet.name\" placeholder=\"{{language.name}}\" type=\"text\" ngDefaultControl />\n        <input class=\"ember-view ember-text-field form-control login-input\" [(ngModel)]=\"pet.age\" placeholder=\"{{language.age}}\" type=\"text\" ngDefaultControl />\n        <input class=\"ember-view ember-text-field form-control login-input-pass\" [(ngModel)]=\"pet.description\" placeholder=\"{{language.description}}\" type=\"text\" ngDefaultControl />\n        <div *ngIf=\"loading\" class=\"spinner-border text-toppet\" role=\"status\">\n            <span class=\"sr-only\">Carregando...</span>\n        </div>\n        <app-alert></app-alert>\n        <div class=\"slidecount\">\n            <span class=\"\"></span>\n            <span class=\"selected\"></span>\n            <span class=\"\"></span>\n        </div>\n    </div> \n</section>\n  \n  \n  \n      "

/***/ }),

/***/ "./src/app/pets/pet.picker.component.css":
/*!***********************************************!*\
  !*** ./src/app/pets/pet.picker.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    padding: 4px 0px;\n    background-color: rgb(220, 220, 220);\n}\n\n.event-list {\n    list-style: none;\n    /* font-family: 'Lato', sans-serif; */\n    margin: 0px;\n    padding: 0px;\n}\n\n.event-list > li {\n    background-color: rgb(255, 255, 255);\n    box-shadow: 0px 0px 5px rgb(51, 51, 51);\n    box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);\n    padding: 0px;\n    margin: 0px 0px 20px;\n}\n\n.event-list > li > .icon {\n    display: inline-block;\n    width: 100%;\n    color: rgb(255, 255, 255);\n    background-color: rgb(197, 44, 102);\n    padding: 5px;\n    text-align: center;\n    font-size: 370%;\n}\n\n.event-list > li:nth-child(even) > .icon {\n    background-color: rgb(165, 82, 167);\n}\n\n.event-list > li > .icon > span {\n    display: none;\n}\n\n.event-list > li > img {\n    width: 100%;\n}\n\n.event-list > li > .info {\n    padding-top: 5px;\n    text-align: center;\n}\n\n.event-list > li > .info > .title {\n    font-size: 17pt;\n    font-weight: 700;\n    margin: 0px;\n}\n\n.event-list > li > .info > .desc {\n    font-size: 13pt;\n    font-weight: 300;\n    margin: 0px;\n}\n\n.event-list > li > .info > ul,\n.event-list > li > .social > ul {\n    display: table;\n    list-style: none;\n    margin: 10px 0px 0px;\n    padding: 0px;\n    width: 100%;\n    text-align: center;\n}\n\n.event-list > li > .social > ul {\n    margin: 0px;\n}\n\n.event-list > li > .info > ul > li,\n.event-list > li > .social > ul > li {\n    display: table-cell;\n    cursor: pointer;\n    color: rgb(30, 30, 30);\n    font-size: 11pt;\n    font-weight: 300;\n    padding: 3px 0px;\n}\n\n.event-list > li > .info > ul > li > a {\n    display: block;\n    width: 100%;\n    color: rgb(30, 30, 30);\n    text-decoration: none;\n}\n\n.event-list > li > .social > ul > li {    \n    padding: 0px;\n}\n\n.event-list > li > .social > ul > li > a {\n    padding: 3px 0px;\n}\n\n.event-list > li > .info > ul > li:hover,\n.event-list > li > .social > ul > li:hover {\n    color: rgb(30, 30, 30);\n    background-color: rgb(200, 200, 200);\n}\n\n.event-list > li {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 93px;\n    padding: 0px;\n}\n\n.event-list > li > .icon,\n.event-list > li > img  {\n    display: inline-block;\n}\n\n.event-list > li > .icon,\n.event-list > li > img {\n    width: 93px;\n    float: left;\n}\n\n.event-list > li > .info {\n    background-color: rgb(245, 245, 245);\n    overflow: hidden;\n}\n\n.event-list > li > .icon,\n.event-list > li > img {\n    width: 93px;\n    height: 93px;\n    padding: 0px;\n    margin: 0px;\n}\n\n.event-list > li > .info {\n    position: relative;\n    height: 93px;\n    text-align: left;\n    padding-right: 40px;\n}\n\n.event-list > li > .info > .title, \n.event-list > li > .info > .desc {\n    padding: 0px 10px;\n}\n\n.event-list > li > .info > ul {\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n}\n\n.event-list > li > .social {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    display: block;\n    width: 40px;\n}\n\n.event-list > li > .social > ul {\n    border-left: 1px solid rgb(230, 230, 230);\n}\n\n.event-list > li > .social > ul > li {\t\t\t\n    display: block;\n    padding: 0px;\n}\n\n.event-list > li > .social > ul > li > a {\n    display: block;\n    width: 40px;\n    padding: 10px 0px 9px;\n}\n\n.new-title {\n    font-size: 17pt;\n    font-weight: 600;\n    margin: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXQucGlja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUNBOztJQUVJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTs7SUFFSSxzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUNBOztJQUVJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0FBQ3BCOztBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wZXRzL3BldC5waWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIHBhZGRpbmc6IDRweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG4uZXZlbnQtbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAvKiBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmOyAqL1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoNTEsIDUxLCA1MSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSg1MSwgNTEsIDUxLCAwLjcpO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweCAwcHggMjBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgNDQsIDEwMik7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM3MCU7XG59XG4uZXZlbnQtbGlzdCA+IGxpOm50aC1jaGlsZChldmVuKSA+IC5pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCA4MiwgMTY3KTtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaWNvbiA+IHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ldmVudC1saXN0ID4gbGkgPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxN3B0O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IC5kZXNjIHtcbiAgICBmb250LXNpemU6IDEzcHQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsLFxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCA+IGxpLFxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogcmdiKDMwLCAzMCwgMzApO1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBhZGRpbmc6IDNweCAwcHg7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCA+IGxpID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IFxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpIHsgICAgXG4gICAgcGFkZGluZzogMHB4O1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpID4gYSB7XG4gICAgcGFkZGluZzogM3B4IDBweDtcbn0gXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCA+IGxpOmhvdmVyLFxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDMwLCAzMCwgMzApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcbn1cblxuLmV2ZW50LWxpc3QgPiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTNweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5ldmVudC1saXN0ID4gbGkgPiAuaWNvbixcbi5ldmVudC1saXN0ID4gbGkgPiBpbWcgIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmljb24sXG4uZXZlbnQtbGlzdCA+IGxpID4gaW1nIHtcbiAgICB3aWR0aDogOTNweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmljb24sXG4uZXZlbnQtbGlzdCA+IGxpID4gaW1nIHtcbiAgICB3aWR0aDogOTNweDtcbiAgICBoZWlnaHQ6IDkzcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cdFxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gLnRpdGxlLCBcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IC5kZXNjIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGkge1x0XHRcdFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSA+IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4IDlweDtcbn1cblxuXG4ubmV3LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE3cHQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pets/pet.picture.component.html":
/*!*************************************************!*\
  !*** ./src/app/pets/pet.picture.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section class=\"body_section\">\n    <div class=interface_class>\n      <div class=\"page-header\">\n        <h1>{{title}}</h1>\n      </div>\n      <div class=\"card\">\n        <img [src]=\"pet.img\" class=\"card-img-top\" [ngClass]=\"{ 'button-disabled': pet.img == null }\">\n        <a class=\"btn btn-light\" [ngClass]=\"{ 'button-disabled': pet.img != null }\" (click)=\"camera()\" href=\"javascript:;\" style=\"font-size: 450%;\"><i class=\"fa fa-camera text-petlife\"></i></a>\n      </div>\n      <div class=\"slidecount\">\n          <span class=\"\"></span>\n          <span class=\"\"></span>\n          <span class=\"selected\"></span>\n      </div>\n    </div> \n  </section>"

/***/ }),

/***/ "./src/app/pets/pet.type.component.html":
/*!**********************************************!*\
  !*** ./src/app/pets/pet.type.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"body_section\">\n  <div class=interface_class>\n    <div class=\"page-header\">\n\t\t  <h1>{{language.animal}}</h1>\n    </div>\n    <div class=\"container text-center\">\n      <br>\n      <div *ngIf=\"loading\" class=\"spinner-border text-toppet\" role=\"status\">\n        <span class=\"sr-only\">Carregando...</span>\n      </div>\n      <p>\n        <a *ngFor=\"let item of animals; let i= index ;trackBy: trackByFn\" class=\"btn btn-toppet social-login-btn pet-icon\" (click)=\"select(item)\" href=\"javascript:;\"><i class=\"fa fa-{{item.icon}}\"></i></a>\n      </p>\n    </div>\n    <div class=\"slidecount\">\n      <span class=\"selected\"></span>\n      <span class=\"\"></span>\n      <span class=\"\"></span>\n    </div>\n  </div> \n</section> -->\n\n<div class=\"container\">\n  <div *ngIf=\"loading\" class=\"spinner-border text-toppet\" role=\"status\">\n    <span class=\"sr-only\">Carregando...</span>\n  </div>\n  <div class=\"row\">\n    <div class=\"[ col-xs-12 col-sm-offset-2 col-sm-8 ]\">\n      <ul class=\"event-list\" style=\"height: 100% !important;\">\n        <li *ngFor=\"let t of types\"  (click)=\"select(t)\" style=\"height: 82px;\">\n            <i class=\"icon fa fa-{{t.icon}}\" style=\"padding-top: 14px;\"></i>\n          <div class=\"info\">\n            <h2 class=\"title\">{{t.description}}</h2>\n            <p class=\"desc\">{{t.icon}}</p>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"slidecount\">\n    <span class=\"selected\"></span>\n    <span class=\"\"></span>\n    <span class=\"\"></span>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pets/pets.component.css":
/*!*****************************************!*\
  !*** ./src/app/pets/pets.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{padding:0;margin:0;}\n\nbody{\n\tfont-family:Verdana, Geneva, sans-serif;\n\tfont-size:18px;\n\tbackground-color:#CCC;\n}\n\n.float{\n\tposition:fixed;\n\twidth:60px;\n\theight:60px;\n\tbottom:40px;\n\tright:40px;\n\t/* background-color:#0C9; */\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n\tbox-shadow: 2px 2px 3px rgb(60, 31, 90);\n}\n\n.my-float{\n\tmargin-top:22px;\n}\n\n/* PET TYPE */\n\nsection {\n    padding: 60px 0;\n}\n\nsection .section-title {\n    text-align: center;\n    color: #007b5e;\n    margin-bottom: 50px;\n    text-transform: uppercase;\n}\n\n#team .card {\n    border: none;\n    background: #ffffff;\n}\n\n.frontside {\n    position: relative;\n    -webkit-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    z-index: 2;\n    margin-bottom: 30px;\n}\n\n.backside {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: white;\n    -webkit-transform: rotateY(-180deg);\n    transform: rotateY(-180deg);\n    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);\n}\n\n.frontside,\n.backside {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transition: 1s;\n    -webkit-transform-style: preserve-3d;\n    -moz-transition: 1s;\n    -moz-transform-style: preserve-3d;\n    -o-transition: 1s;\n    -o-transform-style: preserve-3d;\n    -ms-transition: 1s;\n    -ms-transform-style: preserve-3d;\n    transition: 1s;\n    transform-style: preserve-3d;\n}\n\n.frontside .card,\n.backside .card {\n    min-height: 312px;\n}\n\n.backside .card a {\n    font-size: 18px;\n    color: #007b5e !important;\n}\n\n.frontside .card .card-title,\n.backside .card .card-title {\n    color: #007b5e !important;\n}\n\n.frontside .card .card-body img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDOztBQUVyQjtDQUNDLHVDQUF1QztDQUN2QyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsY0FBYztDQUNkLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7Q0FDViwyQkFBMkI7Q0FDM0IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQSxhQUFhOztBQUViO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUluQywyQkFBMkI7SUFHM0IsK0NBQStDO0FBQ25EOztBQUVBOztJQUVJLG1DQUFtQztJQUduQywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wZXRzL3BldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7cGFkZGluZzowO21hcmdpbjowO31cblxuYm9keXtcblx0Zm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6MThweDtcblx0YmFja2dyb3VuZC1jb2xvcjojQ0NDO1xufVxuXG4uZmxvYXR7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHR3aWR0aDo2MHB4O1xuXHRoZWlnaHQ6NjBweDtcblx0Ym90dG9tOjQwcHg7XG5cdHJpZ2h0OjQwcHg7XG5cdC8qIGJhY2tncm91bmQtY29sb3I6IzBDOTsgKi9cblx0Y29sb3I6I0ZGRjtcblx0Ym9yZGVyLXJhZGl1czo1MHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0Ym94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDYwLCAzMSwgOTApO1xufVxuXG4ubXktZmxvYXR7XG5cdG1hcmdpbi10b3A6MjJweDtcbn1cblxuLyogUEVUIFRZUEUgKi9cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNjBweCAwO1xufVxuXG5zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDdiNWU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jdGVhbSAuY2FyZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5mcm9udHNpZGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJhY2tzaWRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDdweCA5cHggLTRweCByZ2IoMTU4LCAxNTgsIDE1OCk7XG4gICAgLW1vei1ib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcbiAgICBib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcbn1cblxuLmZyb250c2lkZSxcbi5iYWNrc2lkZSB7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2l0aW9uOiAxcztcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW8tdHJhbnNpdGlvbjogMXM7XG4gICAgLW8tdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbXMtdHJhbnNpdGlvbjogMXM7XG4gICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCxcbi5iYWNrc2lkZSAuY2FyZCB7XG4gICAgbWluLWhlaWdodDogMzEycHg7XG59XG5cbi5iYWNrc2lkZSAuY2FyZCBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMwMDdiNWUgIWltcG9ydGFudDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC10aXRsZSxcbi5iYWNrc2lkZSAuY2FyZCAuY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICMwMDdiNWUgIWltcG9ydGFudDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC1ib2R5IGltZyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pets/pets.component.html":
/*!******************************************!*\
  !*** ./src/app/pets/pets.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"body_section\" *ngIf=\"outlet.isActivated == false\">\n  <div class=interface_class>\n    <div class=\"page-header\">\n\t\t  <h1>{{title}} <small>{{user.pets.length}}</small></h1>\n    </div>\n    <div *ngFor=\"let pet of user.pets\" class=\"card\" style=\"width: 18rem;\">\n      <div class=\"spinner-border text-petlife\" role=\"status\" [ngClass]=\"{ 'button-disabled': !loading }\">\n        <span class=\"sr-only\">Carregando...</span>\n      </div>\n      <img src=\"{{pet.img}}\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{pet.name}}</h5>\n        <p class=\"card-text\">{{pet.description}}</p>\n        <a href=\"#\" class=\"btn btn-petlife\">{{language.view}}</a>\n      </div>\n    </div>\n\n    <a href=\"javascript:;\" class=\"float bg-toppet\" (click)=\"add()\" [ngClass]=\"{ 'button-disabled': dialog }\">\n      <i class=\"fa fa-plus my-float\"></i>\n    </a>\n  </div> \n</section>\n<router-outlet #outlet=\"outlet\"></router-outlet> -->\n\n<section id=\"team\" class=\"pb-5\" *ngIf=\"outlet.isActivated == false\">\n  <div class=\"container\" style=\"background-color: white;\">\n      <h5 class=\"section-title h1\">{{title}}</h5>\n      <div class=\"row\">\n          <!-- Team member -->\n          <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let pet of user.pets\">\n              <div class=\"image-flip\">\n                  <div class=\"mainflip\">\n                      <div class=\"frontside\">\n                          <div class=\"card\">\n                              <div class=\"card-body text-center\">\n                                  <p><img class=\" img-fluid\" src=\"{{pet.img}}\" alt=\"\"></p>\n                                  <h4 class=\"card-title\">{{pet.name}}</h4>\n                                  <p class=\"card-text\">{{pet.description}}</p>\n                                  <a href=\"#\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-plus\"></i></a>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <a href=\"javascript:;\" class=\"float bg-toppet\" (click)=\"add()\" [ngClass]=\"{ 'button-disabled': dialog }\">\n    <i class=\"fa fa-plus my-float\"></i>\n  </a>\n</section>\n<router-outlet #outlet=\"outlet\"></router-outlet>\n"

/***/ }),

/***/ "./src/app/pets/pets.component.ts":
/*!****************************************!*\
  !*** ./src/app/pets/pets.component.ts ***!
  \****************************************/
/*! exports provided: PetsComponent, PetTypeComponent, BreedPickerComponent, PetInfoComponent, PetPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsComponent", function() { return PetsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetTypeComponent", function() { return PetTypeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreedPickerComponent", function() { return BreedPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetInfoComponent", function() { return PetInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetPictureComponent", function() { return PetPictureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../application */ "./src/app/application.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _entity_Pet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entity/Pet */ "./src/app/entity/Pet.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../navbar/menuService */ "./src/app/navbar/menuService.ts");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "./node_modules/ngx-modialog/plugins/bootstrap/fesm5/ngx-modialog-plugins-bootstrap.js");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-modialog */ "./node_modules/ngx-modialog/fesm5/ngx-modialog.js");
















var PetsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetsComponent, _super);
    function PetsComponent(api, menuService, session, router, activatedRoute) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.menuService = menuService;
        _this.session = session;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.title = "Pets";
        _this.dialog = false;
        _this.active = true;
        return _this;
    }
    Object.defineProperty(PetsComponent.prototype, "menu", {
        get: function () {
            return this.menuService.menu;
        },
        enumerable: true,
        configurable: true
    });
    PetsComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.user = this.session.getCurrentUser();
        this.menu.disable = false;
        this.menu.disableMenu = false;
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
                if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_12__["ReturnCode"].SUCCESS) {
                    if (result && result.sid) {
                        if (result.entity) {
                            _this.user.pets = result.entity;
                        }
                    }
                }
                else {
                    //alert(this.api.getErrorMessage(result, this.language));
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
    //https://mdbootstrap.com/docs/angular/modals/basic/
    PetsComponent.prototype.add = function () {
        var _this = this;
        this.session.zone.run(function () {
            return _this.router.navigate([_application__WEBPACK_IMPORTED_MODULE_1__["PETS_WIZARD_DEF_PAGE"]], { replaceUrl: true, relativeTo: _this.activatedRoute, queryParams: { id: "" } }).then(function (res) {
                _this.active = false;
            });
        });
    };
    PetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-pets',
            template: __webpack_require__(/*! ./pets.component.html */ "./src/app/pets/pets.component.html"),
            styles: [__webpack_require__(/*! ./pets.component.css */ "./src/app/pets/pets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_5__["PetApiService"],
            _navbar_menuService__WEBPACK_IMPORTED_MODULE_11__["MenuService"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]])
    ], PetsComponent);
    return PetsComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_3__["AppBase"]));

///////////////////////////
var PetTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetTypeComponent, _super);
    function PetTypeComponent(router, api, modal) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.api = api;
        _this.modal = modal;
        _this.types = [];
        _this.dialog = false;
        return _this;
    }
    PetTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var types = this.api.getAllPetTypes();
        types.subscribe(function (result) {
            console.log(result);
            _this.loading = false;
            if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_12__["ReturnCode"].SUCCESS) {
                if (result && result.sid) {
                    if (result.entity) {
                        _this.types = result.entity;
                    }
                }
            }
            else {
                //alert(this.api.getErrorMessage(result, this.language));
            }
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    PetTypeComponent.prototype.select = function (selected) {
        var _this = this;
        console.log(selected);
        if (selected.breeds != undefined && selected.breeds.length > 0) {
            this.dialog = true;
            var dialogRef = this.modal
                .open(BreedPickerComponent, Object(ngx_modialog__WEBPACK_IMPORTED_MODULE_15__["overlayConfigFactory"])({ isBlocking: false, data: { type: selected } }, ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BSModalContext"]));
            // dialogRef.result
            //   .then( result => this.save(result) );
            window.dialogRef = dialogRef;
            dialogRef.onDestroy.subscribe(function () {
                _this.dialog = false;
            });
        }
    };
    PetTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-define-pets',
            template: __webpack_require__(/*! ./pet.type.component.html */ "./src/app/pets/pet.type.component.html"),
            styles: [__webpack_require__(/*! ./pet.picker.component.css */ "./src/app/pets/pet.picker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _service_services__WEBPACK_IMPORTED_MODULE_5__["PetApiService"], ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Modal"]])
    ], PetTypeComponent);
    return PetTypeComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_3__["AppBase"]));

///////////////////////////////////////////////
var BreedPickerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BreedPickerComponent, _super);
    function BreedPickerComponent(dialogRef) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        var data = _this.dialogRef.context.data;
        if (data != undefined) {
            _this.type = data.type;
        }
        return _this;
    }
    BreedPickerComponent.prototype.ngOnInit = function () {
    };
    BreedPickerComponent.prototype.select = function (selected) {
        console.log(selected);
        this.closeDialog();
    };
    BreedPickerComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    BreedPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-breeds',
            template: __webpack_require__(/*! ./pet.breeds.component.html */ "./src/app/pets/pet.breeds.component.html"),
            styles: [__webpack_require__(/*! ./pet.picker.component.css */ "./src/app/pets/pet.picker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_modialog__WEBPACK_IMPORTED_MODULE_15__["DialogRef"]])
    ], BreedPickerComponent);
    return BreedPickerComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_3__["AppBase"]));

///////////////////////////////////////////////
var PetInfoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetInfoComponent, _super);
    //animal : Animal = new Animal(new PetType());
    function PetInfoComponent(api, session, router) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.session = session;
        _this.router = router;
        return _this;
    }
    PetInfoComponent.prototype.ngOnInit = function () {
        this.pet = new _entity_Pet__WEBPACK_IMPORTED_MODULE_6__["Pet"]();
        //this.animal.name = this.language.animal;
    };
    PetInfoComponent.prototype.openPetType = function () {
        this.add();
    };
    PetInfoComponent.prototype.createPet = function () {
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
                if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_12__["ReturnCode"].SUCCESS) {
                    if (result && result.sid) {
                        //SAVED
                    }
                }
            }
            if (result.code != _entity_system__WEBPACK_IMPORTED_MODULE_12__["ReturnCode"].SUCCESS) {
                _this.alert.show(_this.api.getErrorMessage(result, _this.language), _styles_styles__WEBPACK_IMPORTED_MODULE_9__["ColorClass"].danger);
            }
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    PetInfoComponent.prototype.selectAnimal = function (selected) {
        this.pet.petType = selected;
        console.log(this.pet.petType);
    };
    PetInfoComponent.prototype.requiredFieldsFilled = function (pet) {
        console.log(pet);
        return !(_utils__WEBPACK_IMPORTED_MODULE_7__["StringUtils"].isEmpty(pet.name) || _utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].isEmpty(pet.age) || _utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].isEmpty(pet.petType));
    };
    PetInfoComponent.prototype.add = function () {
        //setTimeout(() => { this.openPetDialog() });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"])
    ], PetInfoComponent.prototype, "alert", void 0);
    PetInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-pet-info',
            template: __webpack_require__(/*! ./pet.info.component.html */ "./src/app/pets/pet.info.component.html"),
            styles: [__webpack_require__(/*! ./pet.picker.component.css */ "./src/app/pets/pet.picker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_5__["PetApiService"], _session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])
    ], PetInfoComponent);
    return PetInfoComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_3__["AppBase"]));

//////////////////////////////////////
var PetPictureComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetPictureComponent, _super);
    function PetPictureComponent(phonegap) {
        var _this = _super.call(this) || this;
        _this.phonegap = phonegap;
        return _this;
    }
    PetPictureComponent.prototype.ngOnInit = function () {
        alert("fewf");
    };
    PetPictureComponent.prototype.camera = function () {
        /*this.phone.window.navigator.camera.getPicture(onSuccess, onFail, { quality: 70,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });*/
        var _this = this;
        var onCameraSuccess = function (imageURL) {
            console.log(imageURL);
            //this.pet.img = imageURL;
            if (_this.phonegap.isBrowser) {
                //this.pet.img = 'data:image/jpg;base64,' + this.pet.img;
            }
        };
        var onCameraFail = function (message) {
            alert('Failed because: ' + message);
        };
        var cameraOptions = {
            quality: 100,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        };
        this.phonegap.window.navigator.camera.getPicture(onCameraSuccess, onCameraFail, cameraOptions);
    };
    PetPictureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-pet-picture',
            template: __webpack_require__(/*! ./pet.picture.component.html */ "./src/app/pets/pet.picture.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cordova_service__WEBPACK_IMPORTED_MODULE_10__["CordovaService"]])
    ], PetPictureComponent);
    return PetPictureComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_3__["AppBase"]));



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* brandico */\n[class*=\"brandico-\"]:before {\n  font-family: 'brandico', sans-serif;\n}\n/* entypo */\n[class*=\"entypo-\"]:before {\n  font-family: 'entypo', sans-serif;\n}\n/* openwebicons */\n[class*=\"openwebicons-\"]:before {\n  font-family: 'OpenWeb Icons', sans-serif;\n}\n/* zocial */\n[class*=\"zocial-\"]:before {\n  font-family: 'zocial', sans-serif;\n}\n.form-signin{\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.login-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.login-input-pass {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.signup-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.signup-input-confirm {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.create-account {\n  text-align: center;\n  width: 100%;\n  display: block;\n}\n.form-signin .form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.btn-center{\n  width: 50%;\n  text-align: center;\n  margin: inherit;\n}\n.social-login-btn {\n  margin: 5px;\n  width: 20%;\n  font-size: 250%;\n  padding: 0;\n}\n.social-login-more {\n  width: 45%;\n}\n.social-google {\n  background-color: #da573b;\n  border-color: #be5238;\n}\n.social-google:hover{\n  background-color: #be5238;\n  border-color: #9b4631;\n}\n.social-facebook {\n  background-color: #4c699e;\n  border-color: #47618d;\n}\n.social-facebook:hover {\n  background-color: #47618d;\n  border-color: #3c5173;\n}\n.text-muted {\n  color: #a3a7aa !important;\n  font-size: 94%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUdiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYnJhbmRpY28gKi9cbltjbGFzcyo9XCJicmFuZGljby1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdicmFuZGljbycsIHNhbnMtc2VyaWY7XG59XG5cbi8qIGVudHlwbyAqL1xuW2NsYXNzKj1cImVudHlwby1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdlbnR5cG8nLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBvcGVud2ViaWNvbnMgKi9cbltjbGFzcyo9XCJvcGVud2ViaWNvbnMtXCJdOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbldlYiBJY29ucycsIHNhbnMtc2VyaWY7XG59XG5cbi8qIHpvY2lhbCAqL1xuW2NsYXNzKj1cInpvY2lhbC1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICd6b2NpYWwnLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9ybS1zaWduaW57XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubG9naW4taW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5sb2dpbi1pbnB1dC1wYXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5zaWdudXAtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLnNpZ251cC1pbnB1dC1jb25maXJtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5jcmVhdGUtYWNjb3VudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYnRuLWNlbnRlcntcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGluaGVyaXQ7XG59XG5cbi5zb2NpYWwtbG9naW4tYnRuIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtc2l6ZTogMjUwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNvY2lhbC1sb2dpbi1tb3JlIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLnNvY2lhbC1nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE1NzNiO1xuICBib3JkZXItY29sb3I6ICNiZTUyMzg7XG59XG4uc29jaWFsLWdvb2dsZTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlNTIzODtcbiAgYm9yZGVyLWNvbG9yOiAjOWI0NjMxO1xufVxuXG4uc29jaWFsLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNjk5ZTtcbiAgYm9yZGVyLWNvbG9yOiAjNDc2MThkO1xufVxuLnNvY2lhbC1mYWNlYm9vazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzYxOGQ7XG4gIGJvcmRlci1jb2xvcjogIzNjNTE3Mztcbn1cblxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogI2EzYTdhYSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDk0JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container default-background\">     \n<script id=\"metamorph-1-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-21-start\" type=\"text/x-placeholder\"></script>\n\n<div class=\"container text-center\">\n    <form class=\"form-signin\" #registerForm=\"ngForm\" autocomplete=\"off\">\n        <h2 class=\"form-signin-heading\" style=\"color: white !important\">{{language.signUp}}</h2>\n        <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\n        <br>\n        <p>\n          <facebook-button (begin)=\"onRegisterInit()\" (done)=\"onRegisterEnd($event, true)\"></facebook-button>\n          <google-button (begin)=\"onRegisterInit()\" (done)=\"onRegisterEnd($event, true)\"></google-button>\n        </p>\n        <small class=\"text-muted\">{{language.createWithSomeInfo}}</small>\n        <br>\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.email}}\" type=\"text\" name=\"username\" id=\"username\" ngModel /><!-- required -->\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.name}}\" type=\"text\" name=\"name\" id=\"name\" ngModel />\n        <input class=\"ember-view ember-text-field form-control login-input\" placeholder=\"{{language.password}}\" type=\"password\" name=\"password\" id=\"password\" ngModel />\n        <input class=\"ember-view ember-text-field form-control login-input-pass\" placeholder=\"{{language.confirmPassword}}\" type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" ngModel />\n        <div *ngIf=\"loading\" class=\"spinner-border text-toppet\" role=\"status\">\n            <span class=\"sr-only\">Carregando...</span>\n        </div>\n        <br>\n        <app-alert></app-alert>\n        <register-button [hidden]=\"loading\" classes=\"btn btn-lg btn-toppet btn-block btn-center\" [form]=\"registerForm\" (begin)=\"onRegisterInit()\" (done)=\"onRegisterEnd($event, false)\">{{language.signUp}}</register-button>\n        <br>\n    </form>\n</div>"

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
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../entity/system */ "./src/app/entity/system.ts");















//https://bootsnipp.com/snippets/kMdg
var RegisterUserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterUserComponent, _super);
    function RegisterUserComponent(session, menuService, api, router) {
        var _this = _super.call(this) || this;
        _this.session = session;
        _this.menuService = menuService;
        _this.api = api;
        _this.router = router;
        _this.login = function (args) {
            _this.loading = false;
            if (args.code == _entity_system__WEBPACK_IMPORTED_MODULE_14__["ReturnCode"].SUCCESS) {
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
    };
    RegisterUserComponent.prototype.google = function () {
        console.log("submit login to google");
    };
    RegisterUserComponent.prototype.onRegisterInit = function () {
        this.loading = true;
        this.alert.hide();
    };
    RegisterUserComponent.prototype.onRegisterEnd = function (eventArgs, isNetwork) {
        if (eventArgs.code == _entity_system__WEBPACK_IMPORTED_MODULE_14__["ReturnCode"].SUCCESS) {
            if (isNetwork) {
                this.session.onLogged(_application__WEBPACK_IMPORTED_MODULE_2__["PETS_PAGE"], this.router, this.menu);
            }
            else {
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
        }
        else {
            if (eventArgs.code == _entity_system__WEBPACK_IMPORTED_MODULE_14__["ReturnCode"].VALIDATION_ERROR && !_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(eventArgs.message)) {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_10__["ColorClass"].danger);
            }
            else if (eventArgs.code != _entity_system__WEBPACK_IMPORTED_MODULE_14__["ReturnCode"].VALIDATION_ERROR && _utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(eventArgs.message)) {
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
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _navbar_menuService__WEBPACK_IMPORTED_MODULE_12__["MenuService"],
            _service_services__WEBPACK_IMPORTED_MODULE_5__["UserApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_6__["AppBase"]));



/***/ }),

/***/ "./src/app/service/services.ts":
/*!*************************************!*\
  !*** ./src/app/service/services.ts ***!
  \*************************************/
/*! exports provided: httpHeaders, UserApiService, PetApiService, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpHeaders", function() { return httpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiService", function() { return UserApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetApiService", function() { return PetApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../entity/User */ "./src/app/entity/User.ts");
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../database/database */ "./src/app/database/database.ts");
/* harmony import */ var _language_Language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language/Language */ "./src/app/language/Language.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");












// Set the http options
var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
var endpoints = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint;
var ApiService = /** @class */ (function () {
    function ApiService() {
        this.endpoint = endpoints.home;
        console.log(this.endpoint);
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
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
        if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].SUCCESS) {
            if (result && result.sid) {
                return language.registerSuccess;
            }
        }
        else if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].NOT_FOUND) {
            return language.invalidUserPassword;
        }
        else if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].SERVER_ERROR) {
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
        var httpOptions = {
            headers: httpHeaders
        };
        return this.http.post(this.authenticate, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    UserApiService.prototype.save = function (user) {
        console.log(this.register);
        console.log(user);
        var httpOptions = {
            headers: httpHeaders
        };
        return this.http.post(this.register, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    UserApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
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
        _this.types = _this.controller + "/types";
        _this.breeds = _this.controller + "/breeds";
        return _this;
    }
    PetApiService.prototype.get = function (pet) {
        console.log(this.retrieve);
        console.log(pet);
        var httpOptions = {
            headers: httpHeaders
        };
        return this.http.post(this.retrieve, pet, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    PetApiService.prototype.getByUser = function (user) {
        console.log(this.retrieve);
        console.log(user);
        var parameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set("userId", user.id.toString());
        var httpOptions = {
            headers: httpHeaders,
            params: parameters
        };
        return this.http.get(this.retrieve, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    PetApiService.prototype.getAllPetTypes = function () {
        console.log(this.types);
        var httpOptions = {
            headers: httpHeaders
        };
        return this.http.get(this.types, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    PetApiService.prototype.save = function (pet) {
        console.log(this.register);
        console.log(pet);
        var httpOptions = {
            headers: httpHeaders
        };
        return this.http.post(this.register, pet, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    PetApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
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
        if (_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(entryUser.loginType)) {
            entryUser.loginType = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_11__["SociaNetworkType"].NONE;
        }
        var user = this.userApi.login(entryUser);
        window.httpUser = user;
        user.subscribe(function (result) {
            console.log(result);
            if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].SUCCESS) {
                _this._localDatabase.mergeUser(entryUser);
                if (sessionCallback != undefined) {
                    sessionCallback(result, entryUser.password);
                }
            }
            callback({ code: result.code });
        }, function (error) {
            console.log(error);
            callback({ code: _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].CONNECTION_ERROR, message: _this.userApi.getErrorMessage({ code: _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].CONNECTION_ERROR }, new _language_Language__WEBPACK_IMPORTED_MODULE_9__["LanguageService"]()) });
        });
    };
    AuthenticationService.prototype.authenticateLastUser = function (callback, sessionCallback) {
        var _this = this;
        var doLogin = function (result) {
            var user = new _entity_User__WEBPACK_IMPORTED_MODULE_7__["User"]();
            user.username = result.username;
            user.password = result.password;
            user.loginType = result.loginType;
            _this.authenticate(user, callback, sessionCallback);
        };
        var notLogin = function (y) {
            callback({ code: _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].NOT_FOUND, message: "" });
        };
        this._localDatabase.getCurrentUser(doLogin, notLogin);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [UserApiService, _database_database__WEBPACK_IMPORTED_MODULE_8__["LocalDatabaseService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
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
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var _entity_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/User */ "./src/app/entity/User.ts");




var facebookAppId = '389609115207477';
var FacebookService = /** @class */ (function () {
    function FacebookService() {
    }
    FacebookService.prototype.login = function (callback) {
        //Chave Secreta do Aplicativo
        //b4a49157bf9ba2cc4b7b085c0ba13ad3
        FB.login(function (response) {
            console.log('submitLogin', response);
            var returnCodeEventArgs = { code: _entity_system__WEBPACK_IMPORTED_MODULE_2__["ReturnCode"].SUCCESS, message: "", result: undefined };
            var user = new _entity_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
            if (response.authResponse && response.status == "connected") {
                window.facebook = response;
                user.username = response.authResponse.userID;
                user.password = response.authResponse.userID;
                user.loginType = SociaNetworkType.FACEBOOK;
            }
            else {
                console.log('User login failed');
                returnCodeEventArgs.code = _entity_system__WEBPACK_IMPORTED_MODULE_2__["ReturnCode"].CONNECTION_ERROR;
            }
            returnCodeEventArgs.result = user;
            callback(returnCodeEventArgs);
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

module.exports = "<div class=\"container default-background\">\n  <div class=\"container text-center\">\n    <br>\n    <h1 class=\"form-signin-heading\" style=\"color: white !important\">{{language.welcome}} <b>{{applicationName}}</b></h1>\n    <br>\n    <small class=\"text-muted\">{{language.appDescription}}</small>\n    <div class=\"slidecount\" style=\"bottom:15%\">\n      <span class=\"selected\"></span>\n      <span class=\"\"></span>\n      <span class=\"\"></span>\n    </div>\n    <a routerLink=\"/signin\"><button class=\"btn btn-toppet btn-center btn-bottom-left btn-lg\" style=\"width: 40% !important;\">{{language.login}}</button></a>\n    <a routerLink=\"/signup\"><button class=\"btn btn-toppet btn-hollow btn-center btn-bottom-right btn-lg\" style=\"width: 40% !important;\">{{language.signUp}}</button></a>\n  </div>\n</div>\n<!-- Tasha Reign\nhttp://juicygif.com/public/Gif/Sex-Blonde-done-doggystyle.gif-187463p.html/(mode)/search/(keyword)/couples-sex -->"

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

module.exports = __webpack_require__(/*! /home/eduardo/git/Toto/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map