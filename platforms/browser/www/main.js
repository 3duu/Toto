(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, displayName, endpoints, passwordConfig, cordova, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"br.com.toppet","version":"1.0.0","displayName":"TOPPET","endpoints":{"local":"http://localhost:9003","indraLocal":"http://192.168.137.1:9003","home2":"http://192.168.1.3:9003/toppet","home":"http://192.168.1.3:9003"},"passwordConfig":{"min":6,"contains":""},"cordova":{"plugins":{"cordova-plugin-device":{},"cordova-plugin-safariviewcontroller":{"API_KEY_FOR_ANDROID":"AIzaSyCktbQb6g7SX4lIgecyzsrz0sMzl3660nU","API_KEY_FOR_IOS":"AIzaSyAaRDbFBx5gubzyW9_LE6KCFM3vE80hQw8","PLAY_SERVICES_VERSION":"15.0.1","ANDROID_SUPPORT_V4_VERSION":"27.+","LOCATION_WHEN_IN_USE_DESCRIPTION":"This app wants to get your location while this app runs only.","LOCATION_ALWAYS_USAGE_DESCRIPTION":"This app wants to get your location always, even this app runs in background."},"cordova-plugin-googlemaps":{"API_KEY_FOR_ANDROID":"AIzaSyCktbQb6g7SX4lIgecyzsrz0sMzl3660nU","API_KEY_FOR_IOS":"AIzaSyAaRDbFBx5gubzyW9_LE6KCFM3vE80hQw8","PLAY_SERVICES_VERSION":"15.0.1","ANDROID_SUPPORT_V4_VERSION":"27.+","LOCATION_WHEN_IN_USE_DESCRIPTION":"This app wants to get your location while this app runs only.","LOCATION_ALWAYS_USAGE_DESCRIPTION":"This app wants to get your location always, even this app runs in background."},"cordova-plugin-inappbrowser":{},"cordova-plugin-geolocation":{},"cordova-plugin-whitelist":{},"cordova-plugin-facebook4":{"APP_ID":"389609115207477","APP_NAME":"Toppet","FACEBOOK_HYBRID_APP_EVENTS":"false","FACEBOOK_ANDROID_SDK_VERSION":"4.40.0"},"cordova-plugin-camera":{},"cordova-sqlite-storage":{},"cordova-plugin-context-menu":{},"cordova-plugin-listpicker":{}},"platforms":["android"]},"scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^7.2.15","@angular/cdk":"^7.3.7","@angular/common":"~7.2.15","@angular/compiler":"~7.2.15","@angular/core":"~7.2.15","@angular/forms":"~7.2.15","@angular/material":"^7.3.7","@angular/platform-browser":"~7.2.15","@angular/platform-browser-dynamic":"~7.2.15","@angular/router":"~7.2.15","@types/jquery":"^3.3.29","ansi-escapes":"^3.2.0","braces":"^2.3.2","browserify-zlib":"^0.2.0","cached-path-relative":"^1.0.2","cordova-android":"^7.1.4","cordova-browser":"^5.0.4","cordova-plugin-camera":"4.0.3","cordova-plugin-context-menu":"0.1.1","cordova-plugin-device":"2.0.2","cordova-plugin-facebook4":"4.2.1","cordova-plugin-geolocation":"4.0.1","cordova-plugin-googlemaps":"~2.5.2","cordova-plugin-inappbrowser":"~3.0.0","cordova-plugin-listpicker":"2.2.2","cordova-plugin-safariviewcontroller":"~1.5.4","cordova-plugin-whitelist":"1.3.3","cordova-sqlite-storage":"3.2.0","core-js":"^2.5.4","hammerjs":"^2.0.8","jquery":"^3.3.1","lodash":"^4.17.11","luxon":"^1.16.0","ngx-bootstrap":"^3.2.0","ngx-material-timepicker":"^3.1.0","ngx-modialog":"^5.0.1","phonegap":"^8.2.2","popper.js":"^1.15.0","rxjs":"^6.5.2","stream":"0.0.2","tls":"0.0.1","tslib":"^1.9.0","webpack":"^4.29.6","zone.js":"~0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"^0.13.3","@angular/cli":"^7.3.9","@angular/compiler-cli":"~7.2.15","@angular/language-service":"~7.2.15","@types/jasmine":"~2.8.8","@types/jasminewd2":"~2.0.3","@types/node":"^8.10.42","codelyzer":"~4.5.0","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"^4.0.1","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.4.0","ts-node":"~7.0.0","tslint":"~5.11.0","typescript":"3.2.4"}};

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
/* harmony import */ var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointments/appointments.component */ "./src/app/appointments/appointments.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application */ "./src/app/application.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");











var routes = [
    { path: _application__WEBPACK_IMPORTED_MODULE_6__["HOME_PAGE"], component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivateChild: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
    { path: _application__WEBPACK_IMPORTED_MODULE_6__["WELCOME_PAGE"], component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: _application__WEBPACK_IMPORTED_MODULE_6__["LOGIN_PAGE"], component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: _application__WEBPACK_IMPORTED_MODULE_6__["REGISTER_USER_PAGE"], component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterUserComponent"] },
    { path: _application__WEBPACK_IMPORTED_MODULE_6__["APPOINTMENTS_PAGE"], component: _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_1__["AppointmentsComponent"], children: [
            { path: _application__WEBPACK_IMPORTED_MODULE_6__["APPOINTMENTS_WIZARD_PAGE"], component: _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_1__["AppointmentsWizardComponent"] },
        ] },
    { path: _application__WEBPACK_IMPORTED_MODULE_6__["PETS_PAGE"], component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_2__["PetsComponent"], children: [
            { path: _application__WEBPACK_IMPORTED_MODULE_6__["PETS_WIZARD_PAGE"], component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_2__["PetsWizardComponent"] },
            { path: _application__WEBPACK_IMPORTED_MODULE_6__["PETS_WIZARD_DEF_PAGE"], component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_2__["PetTypeComponent"] },
            { path: _application__WEBPACK_IMPORTED_MODULE_6__["PETS_WIZARD_INFO_PAGE"], component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_2__["PetInfoComponent"] },
            { path: _application__WEBPACK_IMPORTED_MODULE_6__["PETS_WIZARD_PIC_PAGE"], component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_2__["PetPictureComponent"] },
        ] },
    { path: '**', redirectTo: _application__WEBPACK_IMPORTED_MODULE_6__["LOGIN_PAGE"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entity/system */ "./src/app/entity/system.ts");









//https://fontawesome.com/icons?d=gallery&c=charity&m=free
//ng generate component home --entryComponent=true
var AppComponent = /** @class */ (function () {
    function AppComponent(router, session, menuService) {
        var _this = this;
        this.router = router;
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
    AppComponent.prototype.ngOnInit = function () {
        this.startApp();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"])
    ], AppComponent.prototype, "menu", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"], _navbar_menuService__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
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
/* harmony import */ var _templates_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/tutorial/tutorial.component */ "./src/app/templates/tutorial/tutorial.component.ts");
/* harmony import */ var _templates_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/loading/loading.component */ "./src/app/templates/loading/loading.component.ts");
/* harmony import */ var _templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/button/signup/signup.component */ "./src/app/templates/button/signup/signup.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/services */ "./src/app/service/services.ts");
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/menuService */ "./src/app/navbar/menuService.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-modialog */ "./node_modules/ngx-modialog/fesm5/ngx-modialog.js");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "./node_modules/ngx-modialog/plugins/bootstrap/fesm5/ngx-modialog-plugins-bootstrap.js");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./database/database */ "./src/app/database/database.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./appointments/appointments.component */ "./src/app/appointments/appointments.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");
/* harmony import */ var _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./templates/alert/alert.component */ "./src/app/templates/alert/alert.component.ts");
/* harmony import */ var _templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./templates/button/signin/signin.component */ "./src/app/templates/button/signin/signin.component.ts");
/* harmony import */ var _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./templates/button/facebook/facebook.component */ "./src/app/templates/button/facebook/facebook.component.ts");
/* harmony import */ var _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./templates/button/google/google.component */ "./src/app/templates/button/google/google.component.ts");
/* harmony import */ var _templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./templates/carousel/carousel.component */ "./src/app/templates/carousel/carousel.component.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js");





//import { TextMaskModule } from 'angular2-text-mask';




































var AppModule = /** @class */ (function () {
    function AppModule(dateAdapter) {
        this.dateAdapter = dateAdapter;
        dateAdapter.setLocale('en-in'); // DD/MM/YYYY
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_25__["WelcomeComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_24__["MapsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
                _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_35__["AlertComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterUserComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["PetsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["PetInfoComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["PetTypeComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["PetPictureComponent"],
                _templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_36__["SignInComponent"],
                _templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
                _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_37__["FacebookComponent"],
                _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_38__["GoogleComponent"],
                _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_28__["AppointmentsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["BreedPickerComponent"],
                _templates_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["PetsWizardComponent"],
                _templates_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_1__["TutorialComponent"],
                _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_28__["AppointmentsWizardComponent"],
                _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_28__["AppointmentsThumbComponent"],
                _templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_39__["CarouselComponent"],
            ],
            entryComponents: [
                _templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_36__["SignInComponent"],
                _templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
                _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_37__["FacebookComponent"],
                _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_38__["GoogleComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_16__["BreedPickerComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                ngx_modialog__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot(),
                ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_18__["BootstrapModalModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                //TextMaskModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatInputModule"],
                // MatMenuModule,
                _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatIconModule"],
                // MatPaginatorModule,
                // MatToolbarModule
                ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_40__["NgxMaterialTimepickerModule"]
            ],
            providers: [
                _cordova_service__WEBPACK_IMPORTED_MODULE_13__["CordovaService"],
                _database_database__WEBPACK_IMPORTED_MODULE_20__["LocalDatabaseService"],
                _service_services__WEBPACK_IMPORTED_MODULE_5__["UserApiService"],
                _service_services__WEBPACK_IMPORTED_MODULE_5__["PetApiService"],
                _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_19__["FacebookService"],
                _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_19__["GoogleService"],
                _service_services__WEBPACK_IMPORTED_MODULE_5__["InfoService"],
                _service_services__WEBPACK_IMPORTED_MODULE_5__["AppointmentsApiService"],
                _service_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
                _navbar_menuService__WEBPACK_IMPORTED_MODULE_6__["MenuService"],
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["DateAdapter"], useClass: _utils__WEBPACK_IMPORTED_MODULE_34__["DateFormat"] },
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_26__["AuthGuardService"],
                _session_session_service__WEBPACK_IMPORTED_MODULE_27__["SessionService"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialog"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepicker"],
                _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatInput"],
                _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatIcon"],
                _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatSuffix"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_32__["DateAdapter"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _language_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/Language */ "./src/app/language/Language.ts");




//https://malcoded.com/posts/why-angular-not-works/
var AppBase = /** @class */ (function () {
    function AppBase(session) {
        this.session = session;
        this.applicationName = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].name;
        this.loading = false;
        this.title = this.applicationName;
        if (window.components == undefined) {
            window.components = [];
        }
        window.components.push(this);
    }
    Object.defineProperty(AppBase.prototype, "user", {
        get: function () {
            return this.session.getCurrentUser();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppBase.prototype, "menu", {
        get: function () {
            return this.session.menuService.menu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppBase.prototype, "language", {
        get: function () {
            return AppBase._language;
        },
        enumerable: true,
        configurable: true
    });
    AppBase.prototype.setTitle = function () {
        this.menu.title = this.title;
    };
    AppBase.prototype.ngOnInit = function () {
    };
    AppBase.prototype.ngAfterViewInit = function () {
    };
    AppBase.prototype.ngAfterContentInit = function () {
    };
    AppBase._language = new _language_Language__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AppBase.prototype, "active", void 0);
    return AppBase;
}());



/***/ }),

/***/ "./src/app/application.ts":
/*!********************************!*\
  !*** ./src/app/application.ts ***!
  \********************************/
/*! exports provided: WELCOME_PAGE, LOGIN_PAGE, HOME_PAGE, REGISTER_USER_PAGE, MAPS_PAGE, PETS_PAGE, PETS_WIZARD_DEF_PAGE, PETS_WIZARD_INFO_PAGE, PETS_WIZARD_PIC_PAGE, PETS_VIEW_PAGE, PETS_WIZARD_PAGE, APPOINTMENTS_PAGE, APPOINTMENTS_WIZARD_PAGE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETS_WIZARD_PAGE", function() { return PETS_WIZARD_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPOINTMENTS_PAGE", function() { return APPOINTMENTS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPOINTMENTS_WIZARD_PAGE", function() { return APPOINTMENTS_WIZARD_PAGE; });
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
var PETS_WIZARD_PAGE = "wizard";
var APPOINTMENTS_PAGE = "appointments";
var APPOINTMENTS_WIZARD_PAGE = "wizard";


/***/ }),

/***/ "./src/app/appointments/appointments.component.css":
/*!*********************************************************!*\
  !*** ./src/app/appointments/appointments.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".float{\r\n\tposition:fixed;\r\n\twidth:60px;\r\n\theight:60px;\r\n\tbottom:40px;\r\n\tright:40px;\r\n\t/* background-color:#0C9; */\r\n\tcolor:#FFF;\r\n\tborder-radius:50px;\r\n\ttext-align:center;\r\n\tbox-shadow: 2px 2px 3px #999;\r\n}\r\n\r\n.my-float{\r\n\tmargin-top:22px;\r\n}\r\n\r\n/* body {\r\n\tpadding: 60px 0px;\r\n\tbackground-color: rgb(220, 220, 220);\r\n} */\r\n\r\n.event-list {\r\n\tlist-style: none;\r\n\tfont-family: 'Lato', sans-serif;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n\r\n.event-list > li {\r\n\tbackground-color: rgb(255, 255, 255);\r\n\tbox-shadow: 0px 0px 5px rgb(51, 51, 51);\r\n\tbox-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);\r\n\tpadding: 0px;\r\n\tmargin: 0px 0px 20px;\r\n}\r\n\r\n.event-list > li > time {\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\tcolor: rgb(255, 255, 255);\r\n\tbackground-color: rgb(197, 44, 102);\r\n\tpadding: 5px;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.event-list > li:nth-child(even) > time {\r\n\tbackground-color: rgb(165, 82, 167);\r\n}\r\n\r\n.event-list > li > time > span {\r\n\tdisplay: none;\r\n}\r\n\r\n.event-list > li > time > .day {\r\n\tdisplay: block;\r\n\tfont-size: 58pt;\r\n\tfont-weight: 100;\r\n\tline-height: 1;\r\n}\r\n\r\n.event-list > li time > .month {\r\n\tdisplay: block;\r\n\tfont-size: 20pt;\r\n\tfont-weight: 950;\r\n\tline-height: 1;\r\n}\r\n\r\n.event-list > li > img {\r\n\twidth: 100%;\r\n}\r\n\r\n.event-list > li > .info {\r\n\tpadding-top: 5px;\r\n\ttext-align: center;\r\n}\r\n\r\n.event-list > li > .info > .title {\r\n\tfont-size: 17pt;\r\n\tfont-weight: 700;\r\n\tmargin: 0px;\r\n}\r\n\r\n.event-list > li > .info > .desc {\r\n\tfont-size: 13pt;\r\n\tfont-weight: 300;\r\n\tmargin: 0px;\r\n}\r\n\r\n.event-list > li > .info > ul,\r\n.event-list > li > .social > ul {\r\n\tdisplay: table;\r\n\tlist-style: none;\r\n\tmargin: 10px 0px 0px;\r\n\tpadding: 0px;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\r\n\r\n.event-list > li > .social > ul {\r\n\tmargin: 0px;\r\n}\r\n\r\n.event-list > li > .info > ul > li,\r\n.event-list > li > .social > ul > li {\r\n\tdisplay: table-cell;\r\n\tcursor: pointer;\r\n\tcolor: rgb(30, 30, 30);\r\n\tfont-size: 11pt;\r\n\tfont-weight: 300;\r\n\tpadding: 3px 0px;\r\n}\r\n\r\n.event-list > li > .info > ul > li > a {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tcolor: rgb(30, 30, 30);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.event-list > li > .social > ul > li {    \r\n\tpadding: 0px;\r\n}\r\n\r\n.event-list > li > .social > ul > li > a {\r\n\tpadding: 3px 0px;\r\n}\r\n\r\n.event-list > li > .info > ul > li:hover,\r\n.event-list > li > .social > ul > li:hover {\r\n\tcolor: rgb(30, 30, 30);\r\n\tbackground-color: rgb(200, 200, 200);\r\n}\r\n\r\n/* @media (min-width: 768px) { */\r\n\r\n.event-list > li {\r\n\t\tposition: relative;\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\theight: 120px;\r\n\t\tpadding: 0px;\r\n\t}\r\n\r\n.event-list > li > time,\r\n\t.event-list > li > img  {\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\r\n.event-list > li > time,\r\n\t.event-list > li > img {\r\n\t\twidth: 120px;\r\n\t\tfloat: left;\r\n\t}\r\n\r\n.event-list > li > .info {\r\n\t\tbackground-color: rgb(245, 245, 245);\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n.event-list > li > time,\r\n\t.event-list > li > img {\r\n\t\twidth: 120px;\r\n\t\theight: 120px;\r\n\t\tpadding: 0px;\r\n\t\tmargin: 0px;\r\n\t}\r\n\r\n.event-list > li > .info {\r\n\t\tposition: relative;\r\n\t\theight: 120px;\r\n\t\ttext-align: left;\r\n\t\tpadding-right: 40px;\r\n\t}\r\n\r\n.event-list > li > .info > .title, \r\n\t.event-list > li > .info > .desc {\r\n\t\tpadding: 0px 10px;\r\n\t}\r\n\r\n.event-list > li > .info > ul {\r\n\t\tposition: absolute;\r\n\t\tleft: 0px;\r\n\t\tbottom: 0px;\r\n\t}\r\n\r\n.event-list > li > .social {\r\n\t\tposition: absolute;\r\n\t\ttop: 0px;\r\n\t\tright: 0px;\r\n\t\tdisplay: block;\r\n\t\twidth: 40px;\r\n\t}\r\n\r\n.event-list > li > .social > ul {\r\n\t\tborder-left: 1px solid rgb(230, 230, 230);\r\n\t}\r\n\r\n.event-list > li > .social > ul > li {\t\t\t\r\n\t\tdisplay: block;\r\n\t\tpadding: 0px;\r\n\t}\r\n\r\n.event-list > li > .social > ul > li > a {\r\n\t\tdisplay: block;\r\n\t\twidth: 40px;\r\n\t\tpadding: 10px 0px 9px;\r\n\t}\r\n\r\n/* } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztDQUNkLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7Q0FDViwyQkFBMkI7Q0FDM0IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTs7O0dBR0c7O0FBRUg7Q0FDQyxnQkFBZ0I7Q0FDaEIsK0JBQStCO0NBQy9CLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMsdUNBQXVDO0NBQ3ZDLDZDQUE2QztDQUM3QyxZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsbUNBQW1DO0NBQ25DLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsbUNBQW1DO0FBQ3BDOztBQUNBO0NBQ0MsYUFBYTtBQUNkOztBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBQ0E7O0NBRUMsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7O0NBRUMsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLHNCQUFzQjtDQUN0QixxQkFBcUI7QUFDdEI7O0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7O0NBRUMsc0JBQXNCO0NBQ3RCLG9DQUFvQztBQUNyQzs7QUFFQSxnQ0FBZ0M7O0FBQy9CO0VBQ0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFDQTs7RUFFQyxxQkFBcUI7Q0FDdEI7O0FBQ0E7O0VBRUMsWUFBWTtFQUNaLFdBQVc7Q0FDWjs7QUFDQTtFQUNDLG9DQUFvQztFQUNwQyxnQkFBZ0I7Q0FDakI7O0FBQ0E7O0VBRUMsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztDQUNaOztBQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCOztBQUNBOztFQUVDLGlCQUFpQjtDQUNsQjs7QUFDQTtFQUNDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztDQUNaOztBQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7Q0FDWjs7QUFDQTtFQUNDLHlDQUF5QztDQUMxQzs7QUFDQTtFQUNDLGNBQWM7RUFDZCxZQUFZO0NBQ2I7O0FBQ0E7RUFDQyxjQUFjO0VBQ2QsV0FBVztFQUNYLHFCQUFxQjtDQUN0Qjs7QUFDRCxNQUFNIiwiZmlsZSI6InNyYy9hcHAvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb2F0e1xyXG5cdHBvc2l0aW9uOmZpeGVkO1xyXG5cdHdpZHRoOjYwcHg7XHJcblx0aGVpZ2h0OjYwcHg7XHJcblx0Ym90dG9tOjQwcHg7XHJcblx0cmlnaHQ6NDBweDtcclxuXHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiMwQzk7ICovXHJcblx0Y29sb3I6I0ZGRjtcclxuXHRib3JkZXItcmFkaXVzOjUwcHg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0Ym94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcclxufVxyXG5cclxuLm15LWZsb2F0e1xyXG5cdG1hcmdpbi10b3A6MjJweDtcclxufVxyXG5cclxuLyogYm9keSB7XHJcblx0cGFkZGluZzogNjBweCAwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xyXG59ICovXHJcblxyXG4uZXZlbnQtbGlzdCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiKDUxLCA1MSwgNTEpO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoNTEsIDUxLCA1MSwgMC43KTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0bWFyZ2luOiAwcHggMHB4IDIwcHg7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IHRpbWUge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDQ0LCAxMDIpO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpOm50aC1jaGlsZChldmVuKSA+IHRpbWUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDgyLCAxNjcpO1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiB0aW1lID4gc3BhbiB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gdGltZSA+IC5kYXkge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogNThwdDtcclxuXHRmb250LXdlaWdodDogMTAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgdGltZSA+IC5tb250aCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAyMHB0O1xyXG5cdGZvbnQtd2VpZ2h0OiA5NTA7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IGltZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvIHtcclxuXHRwYWRkaW5nLXRvcDogNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiAudGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMTdwdDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IC5kZXNjIHtcclxuXHRmb250LXNpemU6IDEzcHQ7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRtYXJnaW46IDBweDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCxcclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRtYXJnaW46IDEwcHggMHB4IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwge1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsID4gbGksXHJcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSB7XHJcblx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6IHJnYigzMCwgMzAsIDMwKTtcclxuXHRmb250LXNpemU6IDExcHQ7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRwYWRkaW5nOiAzcHggMHB4O1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsID4gbGkgPiBhIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRjb2xvcjogcmdiKDMwLCAzMCwgMzApO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSBcclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpIHsgICAgXHJcblx0cGFkZGluZzogMHB4O1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSA+IGEge1xyXG5cdHBhZGRpbmc6IDNweCAwcHg7XHJcbn0gXHJcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsID4gbGk6aG92ZXIsXHJcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaTpob3ZlciB7XHJcblx0Y29sb3I6IHJnYigzMCwgMzAsIDMwKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbn1cclxuXHJcbi8qIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyAqL1xyXG5cdC5ldmVudC1saXN0ID4gbGkge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTIwcHg7XHJcblx0XHRwYWRkaW5nOiAwcHg7XHJcblx0fVxyXG5cdC5ldmVudC1saXN0ID4gbGkgPiB0aW1lLFxyXG5cdC5ldmVudC1saXN0ID4gbGkgPiBpbWcgIHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR9XHJcblx0LmV2ZW50LWxpc3QgPiBsaSA+IHRpbWUsXHJcblx0LmV2ZW50LWxpc3QgPiBsaSA+IGltZyB7XHJcblx0XHR3aWR0aDogMTIwcHg7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHR9XHJcblx0LmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cdC5ldmVudC1saXN0ID4gbGkgPiB0aW1lLFxyXG5cdC5ldmVudC1saXN0ID4gbGkgPiBpbWcge1xyXG5cdFx0d2lkdGg6IDEyMHB4O1xyXG5cdFx0aGVpZ2h0OiAxMjBweDtcclxuXHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdG1hcmdpbjogMHB4O1xyXG5cdH1cclxuXHQuZXZlbnQtbGlzdCA+IGxpID4gLmluZm8ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0aGVpZ2h0OiAxMjBweDtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cdH1cdFxyXG5cdC5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IC50aXRsZSwgXHJcblx0LmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gLmRlc2Mge1xyXG5cdFx0cGFkZGluZzogMHB4IDEwcHg7XHJcblx0fVxyXG5cdC5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDBweDtcclxuXHRcdGJvdHRvbTogMHB4O1xyXG5cdH1cclxuXHQuZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDBweDtcclxuXHRcdHJpZ2h0OiAwcHg7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiA0MHB4O1xyXG5cdH1cclxuXHQuZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsIHtcclxuXHRcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG5cdH1cclxuXHQuZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGkge1x0XHRcdFxyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRwYWRkaW5nOiAwcHg7XHJcblx0fVxyXG5cdC5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSA+IGEge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdHBhZGRpbmc6IDEwcHggMHB4IDlweDtcclxuXHR9XHJcbi8qIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/appointments/appointments.component.html":
/*!**********************************************************!*\
  !*** ./src/app/appointments/appointments.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"pb-5\" *ngIf=\"outlet.isActivated == false\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"[ col-xs-12 col-sm-offset-2 col-sm-8 ]\">\r\n      <ul class=\"event-list\">\r\n        <li *ngFor=\"let appointment of appointments;\">\r\n          <time [attr.datetime]=\"appointment.fulldate\">\r\n            <span class=\"day\">{{appointment.day}}</span>\r\n            <span class=\"month\">{{appointment.month}}</span>\r\n            <span class=\"year\">{{appointment.year}}</span>\r\n            <span class=\"time\">{{appointment.time}}</span>\r\n          </time>\r\n          <img src=\"{{appointment.pet?.img}}\" />\r\n          <div class=\"info\">\r\n            <h2 class=\"title\">{{appointment.appointmentType?.description}}</h2>\r\n            <p class=\"desc\">{{appointment.description}}</p>\r\n          </div>\r\n          <!-- <div class=\"social\">\r\n            <ul>\r\n              <li class=\"facebook\" style=\"width:33%;\"><a href=\"javascript:;\"><span class=\"fa fa-facebook\"></span></a></li>\r\n              <li class=\"google-plus\" style=\"width:33%;\"><a href=\"javascript:;\"><span class=\"fa fa-google-plus\"></span></a></li>\r\n            </ul>\r\n          </div> -->\r\n        </li>\r\n      </ul>\r\n  </div>\r\n  </div>\r\n  <app-loading *ngIf=\"loading\" [center]=\"true\"></app-loading>\r\n  <a href=\"javascript:;\" class=\"float bg-toppet\" (click)=\"add()\">\r\n    <i class=\"fa fa-plus my-float\"></i>\r\n  </a>\r\n</div>\r\n</section>\r\n<router-outlet #outlet=\"outlet\"></router-outlet>"

/***/ }),

/***/ "./src/app/appointments/appointments.component.ts":
/*!********************************************************!*\
  !*** ./src/app/appointments/appointments.component.ts ***!
  \********************************************************/
/*! exports provided: AppointmentsComponent, AppointmentsThumbComponent, AppointmentsWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function() { return AppointmentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsThumbComponent", function() { return AppointmentsThumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsWizardComponent", function() { return AppointmentsWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../templates/carousel/carousel.component */ "./src/app/templates/carousel/carousel.component.ts");
/* harmony import */ var _entity_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../entity/entities */ "./src/app/entity/entities.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../application */ "./src/app/application.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");












var AppointmentsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppointmentsComponent, _super);
    function AppointmentsComponent(session, router, activatedRoute, api) {
        var _this = _super.call(this, session) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.api = api;
        _this.appointments = [];
        return _this;
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
        this.title = this.language.appointments;
        this.setTitle();
        this.loadAppointments();
    };
    AppointmentsComponent.prototype.loadAppointments = function () {
        var _this = this;
        this.loading = true;
        this.api.getByUser(this.user).subscribe(function (result) {
            _this.loading = false;
            if (result && result.sid) {
                if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].SUCCESS) {
                    result.data.forEach(function (app) {
                        var a = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["Appointment"]();
                        a.id = app.id;
                        a.date = new Date(app.date);
                        a.appointmentType = app.appointmentType;
                        a.description = app.description;
                        ;
                        a.frequencyType = app.frequencyType;
                        a.pet = app.pet;
                        _this.appointments.push(a);
                    });
                    console.log(_this.appointments);
                    window.appointments = _this.appointments;
                }
            }
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    AppointmentsComponent.prototype.add = function () {
        var _this = this;
        this.session.zone.run(function () { return _this.router.navigate([_application__WEBPACK_IMPORTED_MODULE_9__["APPOINTMENTS_WIZARD_PAGE"]], { replaceUrl: true, relativeTo: _this.activatedRoute }); });
    };
    AppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-appointments',
            template: __webpack_require__(/*! ./appointments.component.html */ "./src/app/appointments/appointments.component.html"),
            styles: [__webpack_require__(/*! ./appointments.component.css */ "./src/app/appointments/appointments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _service_services__WEBPACK_IMPORTED_MODULE_2__["AppointmentsApiService"]])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_7__["AppBase"]));

var AppointmentsThumbComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppointmentsThumbComponent, _super);
    function AppointmentsThumbComponent(session, api) {
        var _this = _super.call(this, session) || this;
        _this.api = api;
        _this.appointments = [];
        return _this;
    }
    AppointmentsThumbComponent.prototype.ngOnInit = function () {
    };
    AppointmentsThumbComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loading = true;
        if (!_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(this.user)) {
            this.api.getByUser(this.session.getCurrentUser()).subscribe(function (result) {
                console.log(result);
                _this.loading = false;
                if (result && result.sid) {
                    if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].SUCCESS) {
                        result.data.forEach(function (app) {
                            var a = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["Appointment"]();
                            a.id = app.id;
                            a.date = new Date(app.date);
                            a.appointmentType = app.appointmentType;
                            a.description = app.description;
                            ;
                            a.frequencyType = app.frequencyType;
                            a.pet = app.pet;
                            _this.appointments.push(a);
                        });
                    }
                }
            }, function (error) {
                console.error(error);
                _this.loading = false;
            });
        }
    };
    AppointmentsThumbComponent.prototype.isEmpty = function () {
        return this.appointments == undefined || this.appointments.length == 0;
    };
    AppointmentsThumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-appointments-thumb',
            template: __webpack_require__(/*! ./appointments.thumb.component.html */ "./src/app/appointments/appointments.thumb.component.html"),
            styles: [__webpack_require__(/*! ./appointments.component.css */ "./src/app/appointments/appointments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], _service_services__WEBPACK_IMPORTED_MODULE_2__["AppointmentsApiService"]])
    ], AppointmentsThumbComponent);
    return AppointmentsThumbComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_7__["AppBase"]));

var AppointmentsWizardComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppointmentsWizardComponent, _super);
    function AppointmentsWizardComponent(session, api, router, activatedRoute, appointmentsComponent) {
        var _this = _super.call(this, session) || this;
        _this.api = api;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.appointmentsComponent = appointmentsComponent;
        _this.type = 1;
        _this.often = 0;
        _this.time = "12:00";
        _this.weekend = 0;
        _this.workingday = 0;
        _this.finish = false;
        return _this;
    }
    AppointmentsWizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appointment = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["Appointment"]();
        //this.appointment.user = this.session.getCurrentUser();
        this.appointment.appointmentType = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentType"]();
        this.loading = true;
        var types = this.api.getTypes();
        this.frequency = _entity_system__WEBPACK_IMPORTED_MODULE_1__["Domain"].fromEnum(_entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"], this.language.getAppointmentOften);
        this.workingdays = _entity_system__WEBPACK_IMPORTED_MODULE_1__["Domain"].fromEnum(_entity_system__WEBPACK_IMPORTED_MODULE_1__["WorkingDays"], this.language.getWorkingDay);
        this.weekends = _entity_system__WEBPACK_IMPORTED_MODULE_1__["Domain"].fromEnum(_entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekends"], this.language.getWeekend);
        this.setDate();
        types.subscribe(function (result) {
            console.log(result);
            _this.loading = false;
            if (result && result.sid) {
                if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].SUCCESS) {
                    _this.types = result.data;
                }
            }
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    AppointmentsWizardComponent.prototype.selectPet = function (pet) {
        if (this.loading)
            return;
        this.appointment.pet = pet;
        this.carouselComponent.next();
        this.finish = true;
    };
    AppointmentsWizardComponent.prototype.setDate = function () {
        var _this = this;
        this.currentDate = new Date();
        var ping = this.session.authenticationService.infoService.doPing();
        ping.subscribe(function (result) {
            if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].SUCCESS) {
                _this.currentDate = new Date(result.date);
                _this.date = _this.currentDate;
            }
        });
        this.date = this.currentDate;
    };
    AppointmentsWizardComponent.prototype.save = function () {
        var _this = this;
        if (this.loading)
            return;
        this.appointment.date = this.date != undefined ? this.date : this.currentDate;
        if (_utils__WEBPACK_IMPORTED_MODULE_10__["StringUtils"].isEmpty(this.time)) {
            this.time = this.currentDate.getHours() + ":" + this.currentDate.getMinutes();
        }
        this.loading = true;
        var often = _entity_system__WEBPACK_IMPORTED_MODULE_1__["Domain"].getDomainByValue(this.often, this.frequency);
        this.appointment.frequencyType = _utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(often) ? _entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"].ONCE : often.enumValue;
        this.appointment.appointmentType.id = this.type;
        //add time to date
        var time = this.time.split(":");
        var hours = parseInt(time[0]);
        var minutes = parseInt(time[1]);
        this.appointment.date.setHours(hours, minutes, 0, 0);
        var saving = this.api.save(this.appointment);
        saving.subscribe(function (result) {
            console.log(result);
            _this.loading = false;
            if (result && result.sid) {
                if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].SUCCESS) {
                    _this.session.zone.run(function () {
                        return _this.router.navigate(['.'], { relativeTo: _this.activatedRoute.parent });
                    });
                    _this.appointmentsComponent.loadAppointments();
                }
            }
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"])
    ], AppointmentsWizardComponent.prototype, "carouselComponent", void 0);
    AppointmentsWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-appointments-wizard',
            template: __webpack_require__(/*! ./appointments.wizard.component.html */ "./src/app/appointments/appointments.wizard.component.html"),
            styles: [__webpack_require__(/*! ./appointments.wizard.component.css */ "./src/app/appointments/appointments.wizard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(AppointmentsComponent)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _service_services__WEBPACK_IMPORTED_MODULE_2__["AppointmentsApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            AppointmentsComponent])
    ], AppointmentsWizardComponent);
    return AppointmentsWizardComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_7__["AppBase"]));



/***/ }),

/***/ "./src/app/appointments/appointments.thumb.component.html":
/*!****************************************************************!*\
  !*** ./src/app/appointments/appointments.thumb.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\" style=\"height: 65%;\" style=\"background-color: white; height: 400px;\">\r\n  <div class=\"[ col-xs-12 col-sm-offset-2 col-sm-8 ]\" *ngIf=\"!isEmpty();\">\r\n    <ul class=\"event-list\">\r\n      <li *ngFor=\"let appointment of appointments;\">\r\n        <time [attr.datetime]=\"appointment.fulldate\">\r\n          <span class=\"day\">{{appointment.day}}</span>\r\n          <span class=\"month\">{{appointment.month}}</span>\r\n          <span class=\"year\">{{appointment.year}}</span>\r\n          <span class=\"time\">{{appointment.time}}</span>\r\n        </time>\r\n        <img src=\"{{appointment.pet?.img}}\" />\r\n        <div class=\"info\">\r\n          <h2 class=\"title\">{{appointment.appointmentType?.description}}</h2>\r\n          <p class=\"desc\">{{appointment.description}}</p>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <section class=\"body_section\" *ngIf=\"isEmpty();\">\r\n    <div class=interface_class>\r\n      <small class=\"default-text text-petlife\" style=\"position: fixed;top: 42%;left: 26%;\">{{language.noAppointmentsClick}}</small>\r\n    </div>\r\n  </section>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/appointments/appointments.wizard.component.css":
/*!****************************************************************!*\
  !*** ./src/app/appointments/appointments.wizard.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .form-input {\r\n    display: block;\r\n    width: 100%;\r\n    height: calc(1.5em + .75rem + 2px);\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n} */\r\n\r\n/* contact list */\r\n\r\n/* @media (max-width: 767px) {\r\n    .visible-xs {\r\n        display: inline-block !important;\r\n    }\r\n    .block {\r\n        display: block !important;\r\n        width: 100%;\r\n        height: 1px !important;\r\n    }\r\n} */\r\n\r\n#back-to-bootsnipp {\r\n    position: fixed;\r\n    top: 10px; right: 10px;\r\n}\r\n\r\n.c-search > .form-control {\r\n   border-radius: 0px;\r\n   border-width: 0px;\r\n   border-bottom-width: 1px;\r\n   font-size: 1.3em;\r\n   padding: 12px 12px;\r\n   height: 44px;\r\n   outline: none !important;\r\n}\r\n\r\n.c-search > .form-control:focus {\r\n    outline:0px !important;\r\n    -webkit-appearance:none;\r\n    box-shadow: none;\r\n}\r\n\r\n.c-search > .input-group-btn .btn {\r\n   border-radius: 0px;\r\n   border-width: 0px;\r\n   border-left-width: 1px;\r\n   border-bottom-width: 1px;\r\n   height: 44px;\r\n}\r\n\r\n.c-list {\r\n    padding: 0px;\r\n    min-height: 44px;\r\n}\r\n\r\n.title {\r\n    display: inline-block;\r\n    font-size: 1.7em;\r\n    font-weight: bold;\r\n    padding: 5px 15px;\r\n    color: white;\r\n}\r\n\r\nul.c-controls {\r\n    list-style: none;\r\n    margin: 0px;\r\n    min-height: 44px;\r\n}\r\n\r\nul.c-controls li {\r\n    margin-top: 8px;\r\n    float: left;\r\n}\r\n\r\nul.c-controls li a {\r\n    font-size: 1.7em;\r\n    padding: 11px 10px 6px;   \r\n}\r\n\r\nul.c-controls li a i {\r\n    min-width: 24px;\r\n    text-align: center;\r\n}\r\n\r\nul.c-controls li a:hover {\r\n    background-color: rgba(51, 51, 51, 0.2);\r\n}\r\n\r\n.c-toggle {\r\n    font-size: 1.7em;\r\n}\r\n\r\n.name {\r\n    font-size: 1.7em;\r\n    font-weight: 700;\r\n}\r\n\r\n.c-info {\r\n    padding: 5px 10px;\r\n    font-size: 1.25em;\r\n}\r\n\r\n.img-circle {\r\n    border-radius: 50%;\r\n}\r\n\r\n.img-responsive {\r\n    display: block;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy53aXphcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSCxpQkFBaUI7O0FBRWpCOzs7Ozs7Ozs7R0FTRzs7QUFDSDtJQUNJLGVBQWU7SUFDZixTQUFTLEVBQUUsV0FBVztBQUMxQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsd0JBQXdCO0dBQ3hCLGdCQUFnQjtHQUNoQixrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLHdCQUF3QjtBQUMzQjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0dBQ0csa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixzQkFBc0I7R0FDdEIsd0JBQXdCO0dBQ3hCLFlBQVk7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHBvaW50bWVudHMvYXBwb2ludG1lbnRzLndpemFyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmZvcm0taW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn0gKi9cclxuXHJcbi8qIGNvbnRhY3QgbGlzdCAqL1xyXG5cclxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudmlzaWJsZS14cyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSAqL1xyXG4jYmFjay10by1ib290c25pcHAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxMHB4OyByaWdodDogMTBweDtcclxufVxyXG5cclxuLmMtc2VhcmNoID4gLmZvcm0tY29udHJvbCB7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgcGFkZGluZzogMTJweCAxMnB4O1xyXG4gICBoZWlnaHQ6IDQ0cHg7XHJcbiAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uYy1zZWFyY2ggPiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIG91dGxpbmU6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmMtc2VhcmNoID4gLmlucHV0LWdyb3VwLWJ0biAuYnRuIHtcclxuICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICBoZWlnaHQ6IDQ0cHg7XHJcbn1cclxuXHJcbi5jLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDRweDtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxudWwuYy1jb250cm9scyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG51bC5jLWNvbnRyb2xzIGxpIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG51bC5jLWNvbnRyb2xzIGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgIHBhZGRpbmc6IDExcHggMTBweCA2cHg7ICAgXHJcbn1cclxudWwuYy1jb250cm9scyBsaSBhIGkge1xyXG4gICAgbWluLXdpZHRoOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG51bC5jLWNvbnRyb2xzIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjIpO1xyXG59XHJcblxyXG4uYy10b2dnbGUge1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5jLWluZm8ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxufVxyXG5cclxuLmltZy1jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaW1nLXJlc3BvbnNpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/appointments/appointments.wizard.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/appointments/appointments.wizard.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-carousel [disable-controls]=\"true\">\r\n\r\n        <div class=\"row page1\" #page1>\r\n            <div class=\"col-xs-12 col-sm-offset-3 col-sm-6\" *ngIf=\"user?.pets.length > 0\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading c-list\">\r\n                        <span class=\"title\">{{language.myPet}}</span>\r\n                    </div>\r\n                    \r\n                    <div class=\"row\" style=\"display: none;\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"input-group c-search\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"contact-list-search\">\r\n                                <span class=\"input-group-btn\">\r\n                                    <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search text-muted\"></span></button>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>                                                                           \r\n                    \r\n                    <ul class=\"list-group\" id=\"contact-list\">\r\n                        <li class=\"list-group-item\">\r\n                            <a href=\"javascript:;\" *ngFor=\"let pet of user.pets\" (click)=\"selectPet(pet)\">\r\n                                <div class=\"col-xs-12 col-sm-3\">\r\n                                    <img src=\"{{pet.img}}\" class=\"img-responsive img-circle\" />\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-9\">\r\n                                    <span class=\"name\">{{pet.name}}</span><br/>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <app-alert [visible]=\"user?.pets.length == 0\" [message]=\"language.noPetsFound\" type=\"info\"></app-alert>\r\n        </div>\r\n        <div class=\"text-center page2\" #page2>\r\n            <div class=\"form-signin\">\r\n                <br>\r\n                <mat-form-field>\r\n                    <mat-label>{{language.appointmentType}}</mat-label>\r\n                    <select matNativeControl class=\"ember-view ember-text-field text-muted\" [(ngModel)]=\"type\">\r\n                        <option *ngFor=\"let type of types\" value=\"{{type.id}}\">{{type.description}}</option>\r\n                    </select>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <mat-label>{{language.appointmentFrequency}}</mat-label>\r\n                    <select matNativeControl class=\"ember-view ember-text-field text-muted\" [(ngModel)]=\"often\">\r\n                        <option *ngFor=\"let d of frequency\" value=\"{{d.value}}\">{{d.text}}</option>\r\n                    </select>\r\n                </mat-form-field>\r\n                <mat-form-field *ngIf=\"often == 0\">\r\n                    <input matInput [min]=\"currentDate\" aria-describedby=\"basic-addon1\" class=\"ember-view ember-text-field text-muted\" [matDatepicker]=\"myDatepicker\" placeholder=\"{{language.date}}\" [(ngModel)]=\"date\" ngDefaultControl>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #myDatepicker></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field *ngIf=\"often == 2\">\r\n                    <select matNativeControl class=\"ember-view ember-text-field text-muted\" [(ngModel)]=\"workingday\">\r\n                        <option *ngFor=\"let d of workingdays\" value=\"{{d.value}}\">{{d.text}}</option>\r\n                    </select>\r\n                </mat-form-field>\r\n                <mat-form-field *ngIf=\"often == 3\">\r\n                    <select matNativeControl class=\"ember-view ember-text-field text-muted\" [(ngModel)]=\"weekend\">\r\n                        <option *ngFor=\"let d of weekends\" value=\"{{d.value}}\">{{d.text}}</option>\r\n                    </select>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input [ngxTimepicker]=\"picker\" [format]=\"24\"class=\"ember-view ember-text-field text-muted\" matInput [(ngModel)]=\"time\" placeholder=\"{{language.hour}}\" type=\"text\" ngDefaultControl>\r\n                    <ngx-material-timepicker #picker></ngx-material-timepicker>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input class=\"ember-view ember-text-field text-muted\" maxlength=\"22\" matInput [(ngModel)]=\"appointment.description\" placeholder=\"{{language.description}}\" type=\"text\" ngDefaultControl>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n    </app-carousel>\r\n    <a href=\"javascript:;\" *ngIf=\"finish\" class=\"btn btn-toppet btn-round btn-go\" (click)=\"save()\"><i class=\"fa fa-check\"></i></a>\r\n</div>\r\n"

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
    Object.defineProperty(CordovaService.prototype, "Camera", {
        get: function () {
            return Camera;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaService.prototype, "ContextMenu", {
        get: function () {
            return ContextMenu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaService.prototype, "device", {
        get: function () {
            return device;
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
            return device != undefined ? device.platform : "browser";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaService.prototype, "isBrowser", {
        get: function () {
            try {
                return this.devicePlatform == "browser";
            }
            catch (e) {
                // if(this.cordova != undefined) {
                //    return false;
                // }
                console.error(e);
                return true;
            }
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

/***/ "./src/app/entity/entities.ts":
/*!************************************!*\
  !*** ./src/app/entity/entities.ts ***!
  \************************************/
/*! exports provided: Rating, Bookmark, User, State, Address, PetServiceType, ServiceType, Appointment, Month, AppointmentType, AppointmentExecutionFrequency, PetService, Pet, PetType, Breed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return Bookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetServiceType", function() { return PetServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return ServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appointment", function() { return Appointment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Month", function() { return Month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentType", function() { return AppointmentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentExecutionFrequency", function() { return AppointmentExecutionFrequency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return Pet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetType", function() { return PetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breed", function() { return Breed; });
var Rating = /** @class */ (function () {
    function Rating() {
    }
    Rating.MAX_RATING = 5;
    return Rating;
}());

var Bookmark = /** @class */ (function () {
    function Bookmark() {
    }
    return Bookmark;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var State;
(function (State) {
    State["SP"] = "S\u00E3o Paulo";
    State["RJ"] = "Rio de Janeiro";
    State["MG"] = "Minas Gerais";
    State["PE"] = "Pernambuco";
    State["BA"] = "Bahia";
    State["SC"] = "Santa Catarina";
    State["RS"] = "Rio Grande do Sul";
    State["PR"] = "Paran\u00E1";
    State["CE"] = "Cear\u00E1";
    State["PI"] = "Piau\u00ED";
    State["GO"] = "Gaoi\u00E1s";
    State["MT"] = "Mato Grosso";
    State["PA"] = "Par\u00E1";
    State["AM"] = "Amazonas";
    State["AP"] = "Amap\u00E1";
    State["AL"] = "Alagoas";
    State["PB"] = "Para\u00EDba";
    State["RO"] = "Rond\u00F4nia";
    State["RR"] = "Roraima";
    State["RN"] = "Rio Grande do Norte";
    State["ES"] = "Espirito Santo";
    State["DF"] = "Distrito Federal";
    State["AC"] = "Acre";
    State["MA"] = "Maranh\u00E3o";
    State["SE"] = "Sergipe";
    State["TO"] = "Tocantins";
    State["MS"] = "Mato Grosso do Sul";
})(State || (State = {}));
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());

var PetServiceType;
(function (PetServiceType) {
    PetServiceType[PetServiceType["PETSHOP"] = 1] = "PETSHOP";
    PetServiceType[PetServiceType["DOG_WALKER"] = 2] = "DOG_WALKER";
    PetServiceType[PetServiceType["VET"] = 3] = "VET";
    PetServiceType[PetServiceType["PET_SHOWER"] = 4] = "PET_SHOWER";
    PetServiceType[PetServiceType["KENNEL"] = 5] = "KENNEL";
})(PetServiceType || (PetServiceType = {}));
var ServiceType = /** @class */ (function () {
    function ServiceType() {
    }
    return ServiceType;
}());

var Appointment = /** @class */ (function () {
    function Appointment() {
    }
    Object.defineProperty(Appointment.prototype, "day", {
        get: function () {
            return this.date.getUTCDate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "month", {
        get: function () {
            return Month[Object.keys(Month)[this.date.getUTCMonth()]];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "year", {
        get: function () {
            return this.date.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "time", {
        get: function () {
            return this.date.getTime();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "fulldate", {
        get: function () {
            return (this.date.getUTCMonth() + 1) + "-" + this.day + "-" + this.year;
        },
        enumerable: true,
        configurable: true
    });
    return Appointment;
}());

var Month;
(function (Month) {
    Month["JANUARY"] = "Janeiro";
    Month["FEBRUARY"] = "Fevereiro";
    Month["MARCH"] = "Mar\u00E7o";
    Month["APRIL"] = "Abril";
    Month["MAY"] = "Maio";
    Month["JUNE"] = "Junho";
    Month["JULY"] = "Julho";
    Month["AUGUST"] = "Agosto";
    Month["SEPTEMBER"] = "Setembro";
    Month["OCTOBER"] = "Outubro";
    Month["NOVEMBER"] = "Novembro";
    Month["DECEMBER"] = "Dezembro";
})(Month || (Month = {}));
var AppointmentType = /** @class */ (function () {
    function AppointmentType() {
    }
    return AppointmentType;
}());

var AppointmentExecutionFrequency;
(function (AppointmentExecutionFrequency) {
    AppointmentExecutionFrequency[AppointmentExecutionFrequency["ONCE"] = 0] = "ONCE";
    AppointmentExecutionFrequency[AppointmentExecutionFrequency["DAILY_BASIS"] = 1] = "DAILY_BASIS";
    AppointmentExecutionFrequency[AppointmentExecutionFrequency["WORKING_DAY"] = 2] = "WORKING_DAY";
    AppointmentExecutionFrequency[AppointmentExecutionFrequency["WEEKEND"] = 3] = "WEEKEND";
})(AppointmentExecutionFrequency || (AppointmentExecutionFrequency = {}));
var PetService = /** @class */ (function () {
    function PetService() {
    }
    return PetService;
}());

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

/***/ "./src/app/entity/system.ts":
/*!**********************************!*\
  !*** ./src/app/entity/system.ts ***!
  \**********************************/
/*! exports provided: ReturnCode, Item, Domain, WorkingDays, Weekends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnCode", function() { return ReturnCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingDays", function() { return WorkingDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weekends", function() { return Weekends; });
var ReturnCode;
(function (ReturnCode) {
    ReturnCode[ReturnCode["SUCCESS"] = 0] = "SUCCESS";
    ReturnCode[ReturnCode["NOT_FOUND"] = -1] = "NOT_FOUND";
    ReturnCode[ReturnCode["VALIDATION_ERROR"] = -2] = "VALIDATION_ERROR";
    ReturnCode[ReturnCode["SERVER_ERROR"] = -3] = "SERVER_ERROR";
    ReturnCode[ReturnCode["RESOURCE_EXISTS"] = -4] = "RESOURCE_EXISTS";
    ReturnCode[ReturnCode["CONNECTION_ERROR"] = -5] = "CONNECTION_ERROR";
})(ReturnCode || (ReturnCode = {}));
var Item = /** @class */ (function () {
    function Item(domain, icon, color) {
        this.domain = domain;
        this.icon = icon;
        this.color = color;
    }
    return Item;
}());

var Domain = /** @class */ (function () {
    function Domain(value, text) {
        this.value = value;
        this.text = text;
    }
    Domain.fromEnum = function (_enum, nameTranslate) {
        var domains = [];
        var keys = Object.keys(_enum).filter(function (k) { return typeof _enum[k] === "number"; });
        for (var i = 0; i < keys.length; i++) {
            var o = new Domain(i, nameTranslate != undefined ? nameTranslate(_enum[keys[i]]) : keys[i]);
            o.enumValue = _enum[keys[i]];
            domains.push(o);
        }
        return domains;
    };
    Domain.getDomainByValue = function (value, domains) {
        domains.forEach(function (d) {
            if (d.value == value) {
                return d;
            }
        });
        return null;
    };
    Domain.getDomainByEnumValue = function (enumValue, domains) {
        domains.forEach(function (d) {
            if (d.enumValue == enumValue) {
                return d;
            }
        });
        return null;
    };
    return Domain;
}());

var WorkingDays;
(function (WorkingDays) {
    WorkingDays[WorkingDays["MONDAY"] = 0] = "MONDAY";
    WorkingDays[WorkingDays["TUESDAY"] = 1] = "TUESDAY";
    WorkingDays[WorkingDays["WEDNESDAY"] = 2] = "WEDNESDAY";
    WorkingDays[WorkingDays["THURSDAY"] = 3] = "THURSDAY";
    WorkingDays[WorkingDays["FRIDAY"] = 4] = "FRIDAY";
})(WorkingDays || (WorkingDays = {}));
var Weekends;
(function (Weekends) {
    Weekends[Weekends["SATURDAY"] = 0] = "SATURDAY";
    Weekends[Weekends["SUNDAY"] = 1] = "SUNDAY";
})(Weekends || (Weekends = {}));


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

module.exports = ".index-icon {\r\n    margin: 5px;\r\n    width: 22%;\r\n    font-size: 295%;\r\n}\r\n\r\n.button-group {\r\n    width: 100%;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    white-space: nowrap;\r\n    bottom: 2%;\r\n    position: fixed;\r\n    left: 2.5%;\r\n}\r\n\r\n.buttons {\r\n    max-width: 130%;\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5kZXgtaWNvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgICBmb250LXNpemU6IDI5NSU7XHJcbn1cclxuXHJcbi5idXR0b24tZ3JvdXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm90dG9tOiAyJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDIuNSU7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIG1heC13aWR0aDogMTMwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-carousel [indicator-bottom]=\"'18%'\">\r\n    <app-appointments-thumb class=\"page1\"></app-appointments-thumb>\r\n  </app-carousel>\r\n  <div class=\"button-group\">\r\n    <div class=\"buttons\">\r\n      <p>\r\n        <a class=\"btn btn-toppet index-icon\" href=\"javascript:;\" (click)=\"appointments()\"><i class=\"fa fa-calendar\"></i></a>\r\n        <a class=\"btn btn-toppet index-icon\" href=\"javascript:;\" (click)=\"maps()\"><i class=\"fas fa-shopping-basket\"></i></a>\r\n        <a class=\"btn btn-toppet index-icon\" href=\"javascript:;\" (click)=\"pets()\"><i class=\"fa fa-paw\"></i></a>\r\n        <a class=\"btn btn-toppet index-icon\" href=\"javascript:;\" (click)=\"donations()\"><i class=\"fa fa-hands-helping\"></i></a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <app-loading *ngIf=\"loading\" [center]=\"true\"></app-loading>\r\n</div>\r\n"

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
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../application */ "./src/app/application.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appointments/appointments.component */ "./src/app/appointments/appointments.component.ts");







var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent(router, session) {
        var _this = _super.call(this, session) || this;
        _this.router = router;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title = this.applicationName;
        this.setTitle();
        this.enableMenu();
    };
    HomeComponent.prototype.enableMenu = function () {
        this.menu.disableMenu = false;
        this.menu.disable = false;
    };
    HomeComponent.prototype.maps = function () {
        this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_2__["MAPS_PAGE"]);
    };
    HomeComponent.prototype.appointments = function () {
        this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_2__["APPOINTMENTS_PAGE"]);
    };
    HomeComponent.prototype.pets = function () {
        this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_2__["PETS_PAGE"]);
    };
    HomeComponent.prototype.donations = function () {
        alert("Doações");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentsThumbComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentsThumbComponent"])
    ], HomeComponent.prototype, "appointmentsComponent", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
        //phonegap plugin add cordova-plugin-context-menu --save
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
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
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application */ "./src/app/application.ts");
/* harmony import */ var _entity_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity/entities */ "./src/app/entity/entities.ts");





var LanguageService = /** @class */ (function () {
    function LanguageService() {
        this.adoptions = "Adoção";
        this.init = "Início";
        this.login = "Entrar";
        this.myPet = "Meus Pets";
        this.petInfo = "Dados do pet";
        this.about = "Ajuda";
        this.appointments = "Compromissos";
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
        this.date = "Data";
        this.hour = "Hora";
        this.password = "Senha";
        this.confirmPassword = "Confirme a senha";
        this.logout = "Sair";
        this.createUser = "Registrar";
        this.back = "Voltar";
        this.createYourAccount = "Crie sua conta no ";
        this.age = "Idade";
        this.ok = "OK";
        this.petType = "Animal";
        this.birthDate = "Nascimento";
        this.breed = "Qual a raça?";
        this.takePicture = "Tire uma foto do seu pet";
        this.description = "Descrição";
        this.noAppointmentsClick = "Sem compromissos.";
        this.appointmentType = "Tipo do Compromisso";
        this.appointmentFrequency = "Frequência";
        this.view = "Visualizar";
        this.years = "anos";
        this.year = "ano";
        this.month = "mês";
        this.months = "meses";
        this.day = "dia";
        this.days = "dias";
        this.animal = "Qual o Pet?";
        this.addNewPet = "Adicionar Pet";
        this.welcome = "Bem vindo ao ";
        this.alreadyHaveAnAccount = "Você já passui uma conta? Clique em ";
        this.otherWiseClickNext = "Caso contrário clique em ";
        this.quickAndEasy = "é rápido e fácil!";
        this.next = "Próximo";
        this.createWithSomeInfo = "Ou forneça apenas algumas informações";
        this.appDescription1 = "O jeito mais fácil e completo de cuidar do seu pet.";
        this.appDescription2 = "Cuide da agenda do seu pet para não perder nenhum compromisso.";
        this.appDescription3 = "Encontre os melhores serviços com os melhores preços para a sua região.";
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
        this.noPetsFound = "Você ainda não cadastrou o seu pet!";
        //Tutorial
        this.addPetTutotial = "Clique aqui para começar a cuidar o seu pet!";
        this.links = new Links();
    }
    LanguageService.prototype.getAppointmentOften = function (often) {
        if (often == _entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"].DAILY_BASIS) {
            return "Diáriamente";
        }
        else if (often == _entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"].ONCE) {
            return "Uma vez";
        }
        else if (often == _entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"].WEEKEND) {
            return "Finais de Semanas";
        }
        else if (often == _entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"].WORKING_DAY) {
            return "Durante a Semana";
        }
        else {
            return this.getAppointmentOften(_entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"].ONCE);
        }
    };
    LanguageService.prototype.getWeekend = function (wknd) {
        if (wknd == _entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekends"].SUNDAY) {
            return "Domingo";
        }
        else if (wknd == _entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekends"].SATURDAY) {
            return "Sábado";
        }
        else {
            return "";
        }
    };
    LanguageService.prototype.getWorkingDay = function (work) {
        if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["WorkingDays"].MONDAY) {
            return "Segunda-feira";
        }
        else if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["WorkingDays"].TUESDAY) {
            return "Terça-feira";
        }
        else if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["WorkingDays"].WEDNESDAY) {
            return "Quarta-feira";
        }
        else if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["WorkingDays"].THURSDAY) {
            return "Quinta-feira";
        }
        else if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["WorkingDays"].FRIDAY) {
            return "Sexta-feira";
        }
        else {
            return "";
        }
    };
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], LanguageService);
    return LanguageService;
}());

var Links = /** @class */ (function () {
    function Links() {
        this.pets = _application__WEBPACK_IMPORTED_MODULE_3__["PETS_PAGE"];
        this.home = _application__WEBPACK_IMPORTED_MODULE_3__["HOME_PAGE"];
        this.welcome = _application__WEBPACK_IMPORTED_MODULE_3__["WELCOME_PAGE"];
        this.login = _application__WEBPACK_IMPORTED_MODULE_3__["LOGIN_PAGE"];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 0 !important;\">\r\n<div class=\"text-center\">\r\n    <form class=\"form-signin\" #loginForm=\"ngForm\">\r\n        <h2 class=\"form-signin-heading\" style=\"color: white;\">{{language.signIn}}</h2>\r\n        <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\r\n        <br>\r\n        <p>\r\n            <facebook-button (begin)=\"onLoginInit()\" (done)=\"onLoginEnd($event)\"></facebook-button>\r\n            <google-button (begin)=\"onLoginInit()\" (done)=\"onLoginEnd($event)\"></google-button>\r\n        </p>\r\n        <br>\r\n        <small class=\"text-muted\">{{language.enterYourLogon}} {{applicationName}}</small>\r\n        <br>\r\n        <mat-form-field>\r\n            <input class=\"ember-view ember-text-field text-muted\" matInput placeholder=\"{{language.username}}\" name=\"username\" id=\"username\" ngModel>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input class=\"ember-view ember-text-field text-muted\"  matInput placeholder=\"{{language.password}}\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" id=\"password\" ngModel>\r\n            <mat-icon color=\"accent\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </mat-form-field>\r\n        \r\n        <script id=\"metamorph-22-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-22-end\" type=\"text/x-placeholder\"></script>\r\n        <app-alert></app-alert>\r\n        <login-button [hidden]=\"loading\" classes=\"btn btn-lg btn-toppet btn-block\" [form]=\"loginForm\" (begin)=\"onLoginInit()\" (done)=\"onLoginEnd($event)\">{{language.signIn}}</login-button>\r\n        <br>\r\n    </form>\r\n    <small class=\"create-account text-muted\">{{language.dontHave}} {{applicationName}} {{language.orSocialMediaAccount}} <button style=\"color: white;\" class=\"ember-view btn btn-sm btn-default\" (click)=\"register()\"> <b>{{language.register}} </b></button> </small>\r\n</div>"

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
/* harmony import */ var _templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../templates/button/signin/signin.component */ "./src/app/templates/button/signin/signin.component.ts");
/* harmony import */ var _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../templates/button/google/google.component */ "./src/app/templates/button/google/google.component.ts");
/* harmony import */ var _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../templates/button/facebook/facebook.component */ "./src/app/templates/button/facebook/facebook.component.ts");
/* harmony import */ var _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../templates/alert/alert.component */ "./src/app/templates/alert/alert.component.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../application */ "./src/app/application.ts");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../entity/system */ "./src/app/entity/system.ts");













//https://bootsnipp.com/snippets/kMd
var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(session, router) {
        var _this = _super.call(this, session) || this;
        _this.router = router;
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.menu.disable = true;
        this.session.onLogged(null, this.router, this.session.menuService.menu);
    };
    LoginComponent.prototype.onLoginInit = function () {
        this.loading = true;
        this.alert.hide();
    };
    LoginComponent.prototype.onLoginEnd = function (eventArgs) {
        this.loading = false;
        this.facebook.stopLoading();
        this.google.stopLoading();
        this.signin.stopLoading();
        if (eventArgs == undefined) {
            return;
        }
        if (eventArgs != undefined && eventArgs.code == _entity_system__WEBPACK_IMPORTED_MODULE_12__["ReturnCode"].SUCCESS) {
            this.session.onLogged(null, this.router, this.menu);
        }
        else {
            if (eventArgs.code == _entity_system__WEBPACK_IMPORTED_MODULE_12__["ReturnCode"].VALIDATION_ERROR && !_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(eventArgs.message)) {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_9__["ColorClass"].danger);
            }
            else {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_9__["ColorClass"].danger);
            }
        }
    };
    LoginComponent.prototype.register = function () {
        this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_11__["REGISTER_USER_PAGE"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"])
    ], LoginComponent.prototype, "alert", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_3__["FacebookComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_3__["FacebookComponent"])
    ], LoginComponent.prototype, "facebook", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_2__["GoogleComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_2__["GoogleComponent"])
    ], LoginComponent.prototype, "google", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"])
    ], LoginComponent.prototype, "signin", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_7__["AppBase"]));



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
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");





//https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/README.md
//phonegap plugin add  cordova-plugin-googlemaps
//https://github.com/arnesson/angular-cordova
//alternative https://github.com/ercobo/angular-cordova
var MapsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapsComponent, _super);
    function MapsComponent(cordovaService, session) {
        var _this = _super.call(this, session) || this;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/maps/maps.component.html"),
            styles: [__webpack_require__(/*! ./maps.component.css */ "./src/app/maps/maps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cordova_service__WEBPACK_IMPORTED_MODULE_3__["CordovaService"], _session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], MapsComponent);
    return MapsComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_4__["AppBase"]));



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

module.exports = "mat-navbar-container {\r\n    width: 100% !important;\r\n    height: calc(100vh - 64px) !important;\r\n}\r\n\r\nmat-navbar {\r\n    background-color: blue !important;\r\n}\r\n\r\ndiv {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.main-menu {\r\n    position: fixed;\r\n    width: 100%; \r\n    z-index: 1000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LW5hdmJhci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcbiAgICBcclxuZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgei1pbmRleDogMTAwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-toppet main-menu\"  *ngIf=\"disable == false\">\r\n    <span class=\"navbar-brand\">{{title}}</span>\r\n    <button  class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"javascript:;\"><i class=\"fa fa-user\">&nbsp;&nbsp;</i>{{user.name}}</a>\r\n            </li>\r\n            <!-- <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/{{language.links.pets}}\" (click)=\"toggleNavbar()\"><i class=\"fa fa-paw\">&nbsp;&nbsp;</i>{{language.myPet}}</a>\r\n            </li> -->\r\n            <!-- <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-hands-helping\">&nbsp;&nbsp;</i>{{language.adoptions}}</a>\r\n            </li> -->\r\n            <!-- <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-calendar\">&nbsp;&nbsp;</i>{{language.appointments}}</a>\r\n            </li> -->\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:;\"><i class=\"fa fa-question-circle\">&nbsp;&nbsp;</i>{{language.about}}</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"logout()\"><i class=\"fa fa-times-circle\">&nbsp;&nbsp;</i>{{language.logout}}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<br>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavbarComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NavbarComponent, _super);
    function NavbarComponent(session, zone, router, element) {
        var _this = _super.call(this, session) || this;
        _this.zone = zone;
        _this.router = router;
        _this.element = element;
        _this.disableMenu = false;
        _this.disable = true;
        _this.navbarOpen = false;
        return _this;
    }
    Object.defineProperty(NavbarComponent.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "menuTitle", {
        set: function (value) {
            this.title = value;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.ngOnInit = function () {
        this._height = this.element.nativeElement.offsetHeight;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_2__["AppBase"]));



/***/ }),

/***/ "./src/app/pets/pets.breeds.component.html":
/*!*************************************************!*\
  !*** ./src/app/pets/pets.breeds.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog breeds-container\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{language.breed}}</h5>\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeDialog()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body breeds-modal-body\" #modalBody>\r\n        <div class=\"row\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item\" *ngFor=\"let b of type.breeds\" (click)=\"select(b)\" style=\"height: 65px !important; line-height:65px;\">\r\n                  <div style=\"text-align: center; width: 100%;\">\r\n                    <h2 class=\"new-title\" >{{b.description}}</h2>\r\n                  </div>\r\n              </li>\r\n            </ul>\r\n        </div> \r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"container\">\r\n    <div class=\"row\">\r\n      <ul class=\"list-group\">\r\n            <li class=\"list-group-item\"><a href=\"https://frikinow.com\" target=\"_blank\">regalos frikis</a></li> -->"

/***/ }),

/***/ "./src/app/pets/pets.component.css":
/*!*****************************************!*\
  !*** ./src/app/pets/pets.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-float{\r\n\tmargin-top:22px;\r\n}\r\n\r\nsection .section-title {\r\n    text-align: center;\r\n    color: white;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#team .card {\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n.frontside {\r\n    position: relative;\r\n    z-index: 2;\r\n    margin-bottom: 10px;\r\n    /* opacity: 0.7;\r\n    filter: alpha(opacity=70);\r\n    background-color: white; */\r\n}\r\n\r\n.frontside .card{\r\n    min-height: 20%;\r\n}\r\n\r\n.frontside .card .card-title{\r\n    color: white !important;\r\n}\r\n\r\n.frontside .card .card-body img {\r\n    width: 38%;\r\n    height: 70%;\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25COzs4QkFFMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wZXRzL3BldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1mbG9hdHtcclxuXHRtYXJnaW4tdG9wOjIycHg7XHJcbn1cclxuXHJcbnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbiN0ZWFtIC5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5mcm9udHNpZGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvKiBvcGFjaXR5OiAwLjc7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXHJcbn1cclxuXHJcbi5mcm9udHNpZGUgLmNhcmR7XHJcbiAgICBtaW4taGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5mcm9udHNpZGUgLmNhcmQgLmNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC1ib2R5IGltZyB7XHJcbiAgICB3aWR0aDogMzglO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pets/pets.component.html":
/*!******************************************!*\
  !*** ./src/app/pets/pets.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"pb-5\" *ngIf=\"outlet?.isActivated == false\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let pet of pets\">\r\n        <div class=\"frontside\">\r\n          <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <p><img class=\"img-fluid\" src=\"{{pet.img}}\"></p>\r\n                <h4 class=\"card-title\">{{pet.name}}</h4>\r\n                <p class=\"card-text\">{{pet.description}}</p>\r\n                <a href=\"javascript:;\" (click)=\"view(pet)\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-eye\"></i></a>\r\n                <a href=\"javascript:;\" (click)=\"removePet(pet)\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash-alt\"></i></a>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-tutorial>{{language.addPetTutotial}}</app-tutorial>\r\n  <a href=\"javascript:;\" #addButton class=\"float bg-toppet\" (click)=\"add()\">\r\n    <i class=\"fa fa-plus my-float\"></i>\r\n  </a>\r\n  <!-- data-toggle=\"tooltip\" data-placement=\"top\" \r\n    data-animation=\"true\" data-trigger=\"manual\" \r\n    title=\"{{language.addPetTutotial}}\" -->\r\n  <app-loading *ngIf=\"loading\" [center]=\"true\"></app-loading>\r\n</section>\r\n<router-outlet #outlet=\"outlet\"></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pets/pets.component.ts":
/*!****************************************!*\
  !*** ./src/app/pets/pets.component.ts ***!
  \****************************************/
/*! exports provided: PetsComponent, PetTypeComponent, BreedPickerComponent, PetInfoComponent, PetPictureComponent, PetsWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsComponent", function() { return PetsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetTypeComponent", function() { return PetTypeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreedPickerComponent", function() { return BreedPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetInfoComponent", function() { return PetInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetPictureComponent", function() { return PetPictureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsWizardComponent", function() { return PetsWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../templates/carousel/carousel.component */ "./src/app/templates/carousel/carousel.component.ts");
/* harmony import */ var _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../templates/alert/alert.component */ "./src/app/templates/alert/alert.component.ts");
/* harmony import */ var _templates_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../templates/tutorial/tutorial.component */ "./src/app/templates/tutorial/tutorial.component.ts");
/* harmony import */ var _entity_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity/entities */ "./src/app/entity/entities.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../application */ "./src/app/application.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "./node_modules/ngx-modialog/plugins/bootstrap/fesm5/ngx-modialog-plugins-bootstrap.js");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-modialog */ "./node_modules/ngx-modialog/fesm5/ngx-modialog.js");

















var PetsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetsComponent, _super);
    function PetsComponent(api, session, router, activatedRoute, cordova) {
        var _this = _super.call(this, session) || this;
        _this.api = api;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.cordova = cordova;
        _this.menuEntries = [];
        _this.onMenu = function (ele) {
            console.log('You clicked the entry with an id of ' + ele);
        };
        return _this;
    }
    Object.defineProperty(PetsComponent.prototype, "pets", {
        get: function () {
            return this._pets;
        },
        enumerable: true,
        configurable: true
    });
    PetsComponent.prototype.ngOnInit = function () {
        this.menu.disable = false;
        this.menu.disableMenu = false;
        this.title = this.language.myPet;
        this.setTitle();
        this.createContextMenu();
        this.setPets();
    };
    PetsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cordova.window.float = this.addButton.nativeElement;
        if (!this.loading && (this.user == undefined || this.user.pets == undefined || this.user.pets.length == 0)) {
            setTimeout(function () { return _this.tutorialComponent.show(); });
        }
    };
    PetsComponent.prototype.createContextMenu = function () {
        this.menuEntries = [];
        this.menuEntries.push({
            title: 'Entry 1',
            id: 'test'
        });
        this.menuEntries.push({
            title: 'Entry 2',
            id: 'foo'
        });
        this.menuEntries.push({
            title: '',
            id: '',
            isSeparator: true
        });
        this.menuEntries.push({
            title: 'Entry 3',
            id: 'bar'
        });
        this.contextMenu = {
            title: 'Pet',
            items: this.menuEntries,
            x: 0,
            y: 0
        };
    };
    PetsComponent.prototype.openContextMenu = function () {
        this.cordova.ContextMenu.open(this.contextMenu, this.onMenu);
    };
    PetsComponent.prototype.setPets = function () {
        if (!_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(this.user)) {
            this._pets = this.user.pets;
        }
    };
    PetsComponent.prototype.loadPets = function () {
        var _this = this;
        if (!_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(this.user)) {
            var pets = this.api.getByUser(this.user);
            this.user.pets = [];
            this.loading = true;
            pets.subscribe(function (result) {
                console.log(result);
                _this.loading = false;
                if (result && result.sid) {
                    if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_13__["ReturnCode"].SUCCESS) {
                        _this.user.pets = result.data;
                    }
                }
            }, function (error) {
                console.error(error);
                _this.loading = false;
            });
        }
    };
    PetsComponent.prototype.removePet = function (pet) {
        var _this = this;
        var res = this.api.delete(pet);
        var index = this.user.pets.indexOf(pet);
        if (index > -1) {
            this.user.pets.splice(index, 1);
        }
        res.subscribe(function (result) {
            console.log(result);
            _this.loading = false;
            if (result && result.code == _entity_system__WEBPACK_IMPORTED_MODULE_13__["ReturnCode"].SUCCESS) {
            }
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    PetsComponent.prototype.view = function (pet) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(pet.id)) {
            this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_5__["APPOINTMENTS_PAGE"]);
        }
    };
    PetsComponent.prototype.add = function () {
        var _this = this;
        this.session.zone.run(function () {
            return _this.router.navigate([_application__WEBPACK_IMPORTED_MODULE_5__["PETS_WIZARD_PAGE"]], { replaceUrl: true, relativeTo: _this.activatedRoute });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])("addButton"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PetsComponent.prototype, "addButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_templates_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_3__["TutorialComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_3__["TutorialComponent"])
    ], PetsComponent.prototype, "tutorialComponent", void 0);
    PetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-pets',
            template: __webpack_require__(/*! ./pets.component.html */ "./src/app/pets/pets.component.html"),
            styles: [__webpack_require__(/*! ./pets.component.css */ "./src/app/pets/pets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_9__["PetApiService"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
            _cordova_service__WEBPACK_IMPORTED_MODULE_12__["CordovaService"]])
    ], PetsComponent);
    return PetsComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_7__["AppBase"]));

///////////////////////////
var PetTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetTypeComponent, _super);
    function PetTypeComponent(api, modal, session) {
        var _this = _super.call(this, session) || this;
        _this.api = api;
        _this.modal = modal;
        _this.types = [];
        _this.selectPetType = function (type, breed) {
            console.log(type);
            console.log(breed);
            if (!_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(breed)) {
                _this.pet.petType = type;
                _this.pet.breed = breed;
                _this.next();
            }
        };
        return _this;
    }
    PetTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var response = this.api.getAllPetTypes();
        response.subscribe(function (result) {
            console.log(result);
            if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_13__["ReturnCode"].SUCCESS) {
                if (result && result.sid) {
                    _this.types = result.data;
                }
            }
            else {
                //alert(this.api.getErrorMessage(result, this.language));
            }
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    PetTypeComponent.prototype.select = function (selected) {
        var _this = this;
        if (selected.breeds != undefined && selected.breeds.length > 0) {
            //this.dialog = true;
            var dialogRef = this.modal
                .open(BreedPickerComponent, Object(ngx_modialog__WEBPACK_IMPORTED_MODULE_16__["overlayConfigFactory"])({ isBlocking: false, data: { type: selected } }, ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BSModalContext"]));
            dialogRef.result
                .then(function (res) {
                if (!_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(res) && res.result)
                    _this.selectPetType(selected, res.breed);
            });
            dialogRef.onDestroy.subscribe(function () {
                //this.dialog = false;
            });
        }
    };
    PetTypeComponent.prototype.next = function () {
        /*this.session.zone.run(() =>
          this.router.navigate([PETS_PAGE,PETS_WIZARD_INFO_PAGE], {replaceUrl: true,  queryParams: {id: ""}}));*/
        this.carouselComponent.next();
    };
    PetTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-pets-type',
            template: __webpack_require__(/*! ./pets.type.component.html */ "./src/app/pets/pets.type.component.html"),
            styles: [__webpack_require__(/*! ./pets.picker.component.css */ "./src/app/pets/pets.picker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_9__["PetApiService"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Modal"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], PetTypeComponent);
    return PetTypeComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_7__["AppBase"]));

///////////////////////////////////////////////
var BreedPickerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BreedPickerComponent, _super);
    function BreedPickerComponent(dialogRef, session) {
        var _this = _super.call(this, session) || this;
        _this.dialogRef = dialogRef;
        var data = _this.dialogRef.context.data;
        if (data != undefined) {
            _this.type = data.type;
        }
        return _this;
    }
    BreedPickerComponent.prototype.ngAfterViewInit = function () {
        this.modalBody.nativeElement.style.overflowY = "auto";
        this.modalBody.nativeElement.style.overflowX = "hidden";
        var maxHeight = ((window.innerHeight - 30) + "px");
        this.modalBody.nativeElement.style.maxHeight = maxHeight;
    };
    BreedPickerComponent.prototype.select = function (selected) {
        this.closeDialog({ result: true, breed: selected });
    };
    BreedPickerComponent.prototype.closeDialog = function (selected) {
        this.dialogRef.close(selected);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])("modalBody"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreedPickerComponent.prototype, "modalBody", void 0);
    BreedPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-pets-breeds',
            template: __webpack_require__(/*! ./pets.breeds.component.html */ "./src/app/pets/pets.breeds.component.html"),
            styles: [__webpack_require__(/*! ./pets.picker.component.css */ "./src/app/pets/pets.picker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_modialog__WEBPACK_IMPORTED_MODULE_16__["DialogRef"], _session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], BreedPickerComponent);
    return BreedPickerComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_7__["AppBase"]));

///////////////////////////////////////////////
var PetInfoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetInfoComponent, _super);
    function PetInfoComponent(session /*, private cordova : CordovaService*/) {
        var _this = _super.call(this, session) || this;
        _this.mask = _utils__WEBPACK_IMPORTED_MODULE_10__["DateUtils"].mask;
        return _this;
    }
    PetInfoComponent.prototype.ngOnInit = function () {
        this.setDate();
    };
    PetInfoComponent.prototype.setDate = function () {
        var _this = this;
        var ping = this.session.authenticationService.infoService.doPing();
        ping.subscribe(function (result) {
            if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_13__["ReturnCode"].SUCCESS) {
                _this.currentDate = new Date(result.date);
            }
        });
    };
    PetInfoComponent.prototype.updateAge = function () {
        if (this.pet.birthDate > this.currentDate) {
            this.age = "";
            return;
        }
        if (!_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(this.currentDate) && !_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(this.pet.birthDate)) {
            var timeDiff = Math.abs(this.currentDate.getTime() - this.pet.birthDate.getTime());
            var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
            if (age > 0) {
                this.age = age + " " + (age > 1 ? this.language.years : this.language.year);
            }
            else {
                var age_1 = Math.floor((timeDiff / (1000 * 3600 * 24)) / 30);
                if (age_1 > 0) {
                    this.age = age_1 + " " + (age_1 > 1 ? this.language.months : this.language.month).replace("-", "");
                }
                else {
                    var age_2 = Math.floor((timeDiff / (1000 * 3600 * 24)));
                    this.age = age_2 + " " + (age_2 > 1 ? this.language.days : this.language.day).replace("-", "");
                }
            }
        }
    };
    PetInfoComponent.prototype.next = function () {
        //Campos obrigatorios
        if (!this.requiredFieldsFilled(this.pet)) {
            this.alert.show(this.language.requiredFields, _styles_styles__WEBPACK_IMPORTED_MODULE_11__["ColorClass"].danger);
            return;
        }
        this.carouselComponent.next();
    };
    PetInfoComponent.prototype.back = function () {
        this.carouselComponent.back();
    };
    PetInfoComponent.prototype.requiredFieldsFilled = function (pet) {
        return !(_utils__WEBPACK_IMPORTED_MODULE_10__["StringUtils"].isEmpty(pet.name) || _utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(pet.birthDate) || _utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(pet.petType));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"])
    ], PetInfoComponent.prototype, "alert", void 0);
    PetInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-pets-info',
            template: __webpack_require__(/*! ./pets.info.component.html */ "./src/app/pets/pets.info.component.html"),
            styles: [__webpack_require__(/*! ./pets.info.component.css */ "./src/app/pets/pets.info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] /*, private cordova : CordovaService*/])
    ], PetInfoComponent);
    return PetInfoComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_7__["AppBase"]));

//////////////////////////////////////
var PetPictureComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetPictureComponent, _super);
    function PetPictureComponent(phonegap, session) {
        var _this = _super.call(this, session) || this;
        _this.phonegap = phonegap;
        return _this;
    }
    PetPictureComponent.prototype.ngOnInit = function () {
        this.title = this.language.takePicture;
    };
    PetPictureComponent.prototype.camera = function () {
        var _this = this;
        if (this.loading) {
            return;
        }
        var onCameraSuccess = function (imageURL) {
            console.log(imageURL);
            _this.pet.img = imageURL;
            if (_this.phonegap.isBrowser) {
                //this.pet.img = 'data:image/jpg;base64,' + this.pet.img;
                _this.pet.img = "assets/img/rottweiler-sample.jpg";
            }
        };
        var onCameraFail = function (message) {
            alert('Failed because: ' + message);
        };
        if (!this.phonegap.isBrowser && !_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(this.phonegap.window.navigator.camera)) {
            var cameraOptions = {
                quality: 100,
                destinationType: this.phonegap.Camera.DestinationType.FILE_URI,
                sourceType: this.phonegap.Camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: this.phonegap.Camera.EncodingType.JPEG,
                saveToPhotoAlbum: false
            };
            this.phonegap.window.navigator.camera.getPicture(onCameraSuccess, onCameraFail, cameraOptions);
        }
        else {
            onCameraSuccess(undefined);
        }
    };
    PetPictureComponent.prototype.submit = function () {
        if (this.loading) {
            return;
        }
        this.loading = true;
        if (this.callback != undefined) {
            this.callback(this.pet);
        }
    };
    PetPictureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-pets-picture',
            template: __webpack_require__(/*! ./pets.picture.component.html */ "./src/app/pets/pets.picture.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cordova_service__WEBPACK_IMPORTED_MODULE_12__["CordovaService"], _session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], PetPictureComponent);
    return PetPictureComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_7__["AppBase"]));

////////////////////////////////////////////////////
var PetsWizardComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetsWizardComponent, _super);
    function PetsWizardComponent(api, router, element, activatedRoute, petsComponent, session) {
        var _this = _super.call(this, session) || this;
        _this.api = api;
        _this.router = router;
        _this.element = element;
        _this.activatedRoute = activatedRoute;
        _this.petsComponent = petsComponent;
        _this.save = function (pet) {
            var pets = _this.api.save(pet);
            pet.user = _this.session.getCurrentUser();
            _this.loading = true;
            _this.element.nativeElement.hidden = _this.loading;
            pets.subscribe(function (result) {
                console.log(result);
                _this.loading = false;
                _this.element.nativeElement.hidden = _this.loading;
                if (result.data) {
                    if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_13__["ReturnCode"].SUCCESS) {
                        if (result && result.sid) {
                            _this.session.zone.run(function () {
                                //this.router.navigateByUrl(PETS_PAGE));
                                return _this.router.navigate(['.'], { relativeTo: _this.activatedRoute.parent });
                            });
                            _this.petsComponent.loadPets();
                        }
                    }
                }
                if (result.code != _entity_system__WEBPACK_IMPORTED_MODULE_13__["ReturnCode"].SUCCESS) {
                    //this.alert.show(this.api.getErrorMessage(result, this.language), ColorClass.danger);
                }
            }, function (error) {
                _this.loading = false;
                _this.element.nativeElement.hidden = _this.loading;
                console.log(error);
            });
        };
        return _this;
    }
    PetsWizardComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.menu.disable = false;
        this.menu.disableMenu = false;
        this.pet = this.session.getEditingPet();
        if (_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(this.pet)) {
            this.pet = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["Pet"]();
            this.pet.petType = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["PetType"]();
            this.pet.breed = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["Breed"]();
        }
        this.petInfoComponent.pet = this.pet;
        this.petPictureComponent.pet = this.pet;
        this.petTypeComponent.pet = this.pet;
        this.petPictureComponent.callback = this.save;
        this.petTypeComponent.carouselComponent = this.carouselComponent;
        this.petInfoComponent.carouselComponent = this.carouselComponent;
        this.petPictureComponent.carouselComponent = this.carouselComponent;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(PetTypeComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", PetTypeComponent)
    ], PetsWizardComponent.prototype, "petTypeComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(PetInfoComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", PetInfoComponent)
    ], PetsWizardComponent.prototype, "petInfoComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(PetPictureComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", PetPictureComponent)
    ], PetsWizardComponent.prototype, "petPictureComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"])
    ], PetsWizardComponent.prototype, "carouselComponent", void 0);
    PetsWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-pets-wizard',
            template: __webpack_require__(/*! ./pets.wizard.component.html */ "./src/app/pets/pets.wizard.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(PetsComponent)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_9__["PetApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
            PetsComponent, _session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], PetsWizardComponent);
    return PetsWizardComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_7__["AppBase"]));

/////////////////////////////


/***/ }),

/***/ "./src/app/pets/pets.info.component.css":
/*!**********************************************!*\
  !*** ./src/app/pets/pets.info.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-date {\r\n    background-color: #563d7c;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXRzLmluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0cy5pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAtZGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTYzZDdjO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pets/pets.info.component.html":
/*!***********************************************!*\
  !*** ./src/app/pets/pets.info.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    <div class=\"form-signin\">\r\n        <br>\r\n        <div class=\"input-group mb-3\" *ngIf=\"pet.breed.id\">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text bg-toppet\"><a href=\"javascript:;\" class=\"btn-toppet\" (click)=\"back()\"><i [ngClass]=\"'fa fa-' + pet.petType.icon\" style=\"float: right; font-size: 235%;\"></i></a></span>\r\n            </div>\r\n            <input type=\"text\" style=\"height: auto; font-size: 22px; background-color: transparent; color: white;\" disabled=\"true\" class=\"form-control\" value=\"{{pet.breed.description}}\" aria-describedby=\"basic-addon1\">\r\n        </div>\r\n        <mat-form-field>\r\n            <input class=\"ember-view ember-text-field text-muted\" maxlength=\"22\" matInput [(ngModel)]=\"pet.name\" placeholder=\"{{language.name}}\" type=\"text\" ngDefaultControl>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput aria-describedby=\"basic-addon1\" class=\"ember-view ember-text-field text-muted\" [max]=\"currentDate\" [matDatepicker]=\"myDatepicker\" (dateInput)=\"updateAge()\" placeholder=\"{{language.birthDate}}\" [(ngModel)]=\"pet.birthDate\" ngDefaultControl>\r\n            <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #myDatepicker></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input class=\"ember-view ember-text-field text-muted\" matInput value=\"{{age}}\" placeholder=\"{{language.age}}\" disabled=\"true\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input class=\"ember-view ember-text-field text-muted\" matInput [(ngModel)]=\"pet.description\" maxlength=\"100\" placeholder=\"{{language.description}}\" type=\"text\" ngDefaultControl>\r\n        </mat-form-field>\r\n        <app-alert></app-alert>\r\n    </div>\r\n    <a href=\"javascript:;\" class=\"btn btn-toppet btn-bottom btn-round\" style=\"position: fixed; margin-bottom: 16%; right: 40%;\" (click)=\"next()\"><i class=\"fa fa-chevron-right\"></i></a>\r\n</div>\r\n\r\n  \r\n  \r\n  \r\n      "

/***/ }),

/***/ "./src/app/pets/pets.picker.component.css":
/*!************************************************!*\
  !*** ./src/app/pets/pets.picker.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-list {\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.event-list > li {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 0px 0px 5px rgb(51, 51, 51);\r\n    box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);\r\n    padding: 0px;\r\n    margin: 0px 0px 20px;\r\n}\r\n.event-list > li > .icon {\r\n    display: inline-block;\r\n    width: 100%;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgb(197, 44, 102);\r\n    padding: 5px;\r\n    text-align: center;\r\n    font-size: 370%;\r\n}\r\n.event-list > li:nth-child(even) > .icon {\r\n    background-color: rgb(165, 82, 167);\r\n}\r\n.event-list > li > .icon > span {\r\n    display: none;\r\n}\r\n.event-list > li > img {\r\n    width: 100%;\r\n}\r\n.event-list > li > .info {\r\n    padding-top: 5px;\r\n    text-align: center;\r\n}\r\n.event-list > li > .info > .title {\r\n    font-size: 17pt;\r\n    font-weight: 700;\r\n    margin: 0px;\r\n}\r\n.event-list > li > .info > .desc {\r\n    font-size: 13pt;\r\n    font-weight: 300;\r\n    margin: 0px;\r\n}\r\n.event-list > li > .info > ul,\r\n.event-list > li > .social > ul {\r\n    display: table;\r\n    list-style: none;\r\n    margin: 10px 0px 0px;\r\n    padding: 0px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.event-list > li > .social > ul {\r\n    margin: 0px;\r\n}\r\n.event-list > li > .info > ul > li,\r\n.event-list > li > .social > ul > li {\r\n    display: table-cell;\r\n    cursor: pointer;\r\n    color: rgb(30, 30, 30);\r\n    font-size: 11pt;\r\n    font-weight: 300;\r\n    padding: 3px 0px;\r\n}\r\n.event-list > li > .info > ul > li > a {\r\n    display: block;\r\n    width: 100%;\r\n    color: rgb(30, 30, 30);\r\n    text-decoration: none;\r\n}\r\n.event-list > li > .social > ul > li {    \r\n    padding: 0px;\r\n}\r\n.event-list > li > .social > ul > li > a {\r\n    padding: 3px 0px;\r\n}\r\n.event-list > li > .info > ul > li:hover,\r\n.event-list > li > .social > ul > li:hover {\r\n    color: rgb(30, 30, 30);\r\n    background-color: rgb(200, 200, 200);\r\n}\r\n.event-list > li {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    height: 93px;\r\n    padding: 0px;\r\n}\r\n.event-list > li > .icon,\r\n.event-list > li > img  {\r\n    display: inline-block;\r\n}\r\n.event-list > li > .icon,\r\n.event-list > li > img {\r\n    width: 93px;\r\n    float: left;\r\n}\r\n.event-list > li > .info {\r\n    background-color: rgb(245, 245, 245);\r\n    overflow: hidden;\r\n}\r\n.event-list > li > .icon,\r\n.event-list > li > img {\r\n    width: 93px;\r\n    height: 93px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.event-list > li > .info {\r\n    position: relative;\r\n    height: 93px;\r\n    text-align: left;\r\n    padding-right: 40px;\r\n}\r\n.event-list > li > .info > .title, \r\n.event-list > li > .info > .desc {\r\n    padding: 0px 10px;\r\n}\r\n.event-list > li > .info > ul {\r\n    position: absolute;\r\n    left: 0px;\r\n    bottom: 0px;\r\n}\r\n.event-list > li > .social {\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    display: block;\r\n    width: 40px;\r\n}\r\n.event-list > li > .social > ul {\r\n    border-left: 1px solid rgb(230, 230, 230);\r\n}\r\n.event-list > li > .social > ul > li {\t\t\t\r\n    display: block;\r\n    padding: 0px;\r\n}\r\n.event-list > li > .social > ul > li > a {\r\n    display: block;\r\n    width: 40px;\r\n    padding: 10px 0px 9px;\r\n}\r\n.new-title {\r\n    font-size: 17pt;\r\n    font-weight: 600;\r\n    margin: 0px;\r\n}\r\n.modal-overlay {\r\n    right: 15px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXRzLnBpY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsdUNBQXVDO0lBQ3ZDLDZDQUE2QztJQUM3QyxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9wZXRzL3BldHMucGlja2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnQtbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDUxLCA1MSwgNTEsIDAuNyk7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMjBweDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgNDQsIDEwMik7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM3MCU7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoZXZlbikgPiAuaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCA4MiwgMTY3KTtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmljb24gPiBzcGFuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ldmVudC1saXN0ID4gbGkgPiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTdwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gLmRlc2Mge1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsLFxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCA+IGxpLFxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGkge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcGFkZGluZzogM3B4IDBweDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCA+IGxpID4gYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSBcclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpIHsgICAgXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpID4gYSB7XHJcbiAgICBwYWRkaW5nOiAzcHggMHB4O1xyXG59IFxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCA+IGxpOmhvdmVyLFxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGk6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcclxufVxyXG5cclxuLmV2ZW50LWxpc3QgPiBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5M3B4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmljb24sXHJcbi5ldmVudC1saXN0ID4gbGkgPiBpbWcgIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmljb24sXHJcbi5ldmVudC1saXN0ID4gbGkgPiBpbWcge1xyXG4gICAgd2lkdGg6IDkzcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmljb24sXHJcbi5ldmVudC1saXN0ID4gbGkgPiBpbWcge1xyXG4gICAgd2lkdGg6IDkzcHg7XHJcbiAgICBoZWlnaHQ6IDkzcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA5M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn1cdFxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiAudGl0bGUsIFxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiAuZGVzYyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpIHtcdFx0XHRcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSA+IGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDlweDtcclxufVxyXG5cclxuLm5ldy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE3cHQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1vdmVybGF5IHtcclxuICAgIHJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pets/pets.picture.component.html":
/*!**************************************************!*\
  !*** ./src/app/pets/pets.picture.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"body_section\">\r\n  <div class=interface_class>\r\n    <div class=\"page-header\" style=\"color: white;\">\r\n      <h1>{{language.takePicture}}</h1>\r\n    </div>\r\n    <div class=\"card\" *ngIf=\"!loading\">\r\n      <img [src]=\"pet.img\" class=\"card-img-top\" [ngClass]=\"{ 'button-disabled': pet.img == null }\"/>\r\n      <a class=\"btn btn-light\" [ngClass]=\"{ 'button-disabled': pet.img != null }\" (click)=\"camera()\" href=\"javascript:;\" style=\"font-size: 450%;\"><i class=\"fa fa-camera text-petlife\"></i></a>\r\n    </div>\r\n  </div>\r\n  <app-loading *ngIf=\"loading\" [center]=\"true\"></app-loading>\r\n  <a href=\"javascript:;\" class=\"btn btn-toppet btn-bottom btn-round\" style=\"position: fixed; margin-bottom: 16%; right: 40%;\" (click)=\"submit()\"><i class=\"fa fa-check\"></i></a>\r\n</section>"

/***/ }),

/***/ "./src/app/pets/pets.type.component.html":
/*!***********************************************!*\
  !*** ./src/app/pets/pets.type.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loading\" [center]=\"true\"></app-loading>\r\n<div class=\"row\">\r\n  <div class=\"[ col-xs-12 col-sm-offset-2 col-sm-8 ]\">\r\n    <ul class=\"event-list\" style=\"height: 100% !important;\">\r\n      <li *ngFor=\"let t of types;\"  (click)=\"select(t)\" style=\"height: 82px;\">\r\n        <i class=\"icon fa fa-{{t.icon}}\" style=\"padding-top: 14px;\"></i>\r\n        <div class=\"info\">\r\n          <h2 class=\"title\">{{t.description}}</h2>\r\n          <!-- <p class=\"desc\">{{t.icon}}</p> -->\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pets/pets.wizard.component.html":
/*!*************************************************!*\
  !*** ./src/app/pets/pets.wizard.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-carousel [disable-controls]=\"true\">\r\n        <app-pets-type class=\"page1\"></app-pets-type>\r\n        <app-pets-info class=\"page2\"></app-pets-info>\r\n        <app-pets-picture class=\"page3\"></app-pets-picture>\r\n    </app-carousel>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* brandico */\r\n[class*=\"brandico-\"]:before {\r\n  font-family: 'brandico', sans-serif;\r\n}\r\n/* entypo */\r\n[class*=\"entypo-\"]:before {\r\n  font-family: 'entypo', sans-serif;\r\n}\r\n/* openwebicons */\r\n[class*=\"openwebicons-\"]:before {\r\n  font-family: 'OpenWeb Icons', sans-serif;\r\n}\r\n/* zocial */\r\n[class*=\"zocial-\"]:before {\r\n  font-family: 'zocial', sans-serif;\r\n}\r\n.form-signin{\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.login-input {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.login-input-pass {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.signup-input {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.signup-input-confirm {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.create-account {\r\n  text-align: center;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n.btn-center{\r\n  width: 50%;\r\n  text-align: center;\r\n  margin: inherit;\r\n}\r\n.social-login-btn {\r\n  margin: 5px;\r\n  width: 20%;\r\n  font-size: 250%;\r\n  padding: 0;\r\n}\r\n.social-login-more {\r\n  width: 45%;\r\n}\r\n.social-google {\r\n  background-color: #da573b;\r\n  border-color: #be5238;\r\n}\r\n.social-google:hover{\r\n  background-color: #be5238;\r\n  border-color: #9b4631;\r\n}\r\n.social-facebook {\r\n  background-color: #4c699e;\r\n  border-color: #47618d;\r\n}\r\n.social-facebook:hover {\r\n  background-color: #47618d;\r\n  border-color: #3c5173;\r\n}\r\n.text-muted {\r\n  color: #a3a7aa !important;\r\n  font-size: 94%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUdiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYnJhbmRpY28gKi9cclxuW2NsYXNzKj1cImJyYW5kaWNvLVwiXTpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnYnJhbmRpY28nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBlbnR5cG8gKi9cclxuW2NsYXNzKj1cImVudHlwby1cIl06YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogJ2VudHlwbycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIG9wZW53ZWJpY29ucyAqL1xyXG5bY2xhc3MqPVwib3BlbndlYmljb25zLVwiXTpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbldlYiBJY29ucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIHpvY2lhbCAqL1xyXG5bY2xhc3MqPVwiem9jaWFsLVwiXTpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnem9jaWFsJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZvcm0tc2lnbmlue1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxvZ2luLWlucHV0IHtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuLmxvZ2luLWlucHV0LXBhc3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLnNpZ251cC1pbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uc2lnbnVwLWlucHV0LWNvbmZpcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmNyZWF0ZS1hY2NvdW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmJ0bi1jZW50ZXJ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luLWJ0biB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbi1tb3JlIHtcclxuICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4uc29jaWFsLWdvb2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhNTczYjtcclxuICBib3JkZXItY29sb3I6ICNiZTUyMzg7XHJcbn1cclxuLnNvY2lhbC1nb29nbGU6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlNTIzODtcclxuICBib3JkZXItY29sb3I6ICM5YjQ2MzE7XHJcbn1cclxuXHJcbi5zb2NpYWwtZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzY5OWU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDc2MThkO1xyXG59XHJcbi5zb2NpYWwtZmFjZWJvb2s6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzYxOGQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2M1MTczO1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgY29sb3I6ICNhM2E3YWEgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDk0JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 0 !important;\">     \r\n  <div class=\"text-center\">\r\n      <form class=\"form-signin\" #registerForm=\"ngForm\" autocomplete=\"off\">\r\n          <h2 class=\"form-signin-heading\" style=\"color: white !important\">{{language.signUp}}</h2>\r\n          <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\r\n          <br>\r\n          <p>\r\n            <facebook-button (begin)=\"onRegisterInit()\" (done)=\"onRegisterEnd($event, true)\"></facebook-button>\r\n            <google-button (begin)=\"onRegisterInit()\" (done)=\"onRegisterEnd($event, true)\"></google-button>\r\n          </p>\r\n          <small class=\"text-muted\">{{language.createWithSomeInfo}}</small>\r\n          <br>\r\n          <mat-form-field>\r\n            <input matInput class=\"ember-view ember-text-field text-muted\" maxlength=\"32\" placeholder=\"{{language.username}}\" name=\"username\" id=\"username\" ngModel>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput class=\"ember-view ember-text-field text-muted\" maxlength=\"50\" placeholder=\"{{language.name}}\" name=\"name\" id=\"name\" ngModel>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput class=\"ember-view ember-text-field text-muted\" maxlength=\"32\" placeholder=\"{{language.password}}\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" id=\"password\" ngModel>\r\n            <mat-icon matSuffix color=\"accent\" (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput class=\"ember-view ember-text-field text-muted\" maxlength=\"32\" placeholder=\"{{language.confirmPassword}}\" [type]=\"hide ? 'password' : 'text'\" name=\"confirmPassword\" id=\"confirmPassword\" ngModel>\r\n            <mat-icon matSuffix color=\"accent\" (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </mat-form-field>\r\n          <br>\r\n          <app-alert></app-alert>\r\n          <register-button [hidden]=\"loading\" classes=\"btn btn-lg btn-toppet btn-block\" [form]=\"registerForm\" (begin)=\"onRegisterInit()\" (done)=\"onRegisterEnd($event, false)\">{{language.signUp}}</register-button>\r\n          <br>\r\n      </form>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../templates/button/google/google.component */ "./src/app/templates/button/google/google.component.ts");
/* harmony import */ var _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../templates/button/facebook/facebook.component */ "./src/app/templates/button/facebook/facebook.component.ts");
/* harmony import */ var _templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../templates/button/signup/signup.component */ "./src/app/templates/button/signup/signup.component.ts");
/* harmony import */ var _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../templates/alert/alert.component */ "./src/app/templates/alert/alert.component.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../application */ "./src/app/application.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entity_entities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../entity/entities */ "./src/app/entity/entities.ts");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../entity/system */ "./src/app/entity/system.ts");
















//https://bootsnipp.com/snippets/kMdg
var RegisterUserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterUserComponent, _super);
    function RegisterUserComponent(session, api, router) {
        var _this = _super.call(this, session) || this;
        _this.api = api;
        _this.router = router;
        _this.login = function (args) {
            _this.loading = false;
            _this.facebook.stopLoading();
            _this.google.stopLoading();
            _this.submit.stopLoading();
            if (args.code == _entity_system__WEBPACK_IMPORTED_MODULE_15__["ReturnCode"].SUCCESS) {
                _this.session.onLogged(_application__WEBPACK_IMPORTED_MODULE_5__["PETS_PAGE"], _this.router, _this.menu);
            }
            else {
                _this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_5__["LOGIN_PAGE"]);
            }
        };
        return _this;
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
        this.menu.disableMenu = true;
    };
    RegisterUserComponent.prototype.onRegisterInit = function () {
        this.loading = true;
        this.alert.hide();
    };
    RegisterUserComponent.prototype.onRegisterEnd = function (eventArgs, isNetwork) {
        if (eventArgs.code == _entity_system__WEBPACK_IMPORTED_MODULE_15__["ReturnCode"].SUCCESS) {
            if (isNetwork) {
                this.session.onLogged(_application__WEBPACK_IMPORTED_MODULE_5__["PETS_PAGE"], this.router, this.menu);
            }
            else {
                if (this.submit.form != undefined && this.submit.form.value.username != undefined && this.submit.form.value.password != undefined) {
                    var user = new _entity_entities__WEBPACK_IMPORTED_MODULE_14__["User"]();
                    user.username = this.submit.form.value.username;
                    user.password = this.submit.form.value.password;
                    user.loginType = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_11__["SociaNetworkType"].NONE;
                    this.session.authenticationService.authenticate(user, this.login, this.session.setUserInSession);
                }
                else {
                    this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_5__["LOGIN_PAGE"]);
                }
            }
        }
        else {
            if (eventArgs.code == _entity_system__WEBPACK_IMPORTED_MODULE_15__["ReturnCode"].VALIDATION_ERROR && !_utils__WEBPACK_IMPORTED_MODULE_10__["StringUtils"].isEmpty(eventArgs.message)) {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_12__["ColorClass"].danger);
            }
            else if (eventArgs.code != _entity_system__WEBPACK_IMPORTED_MODULE_15__["ReturnCode"].VALIDATION_ERROR && _utils__WEBPACK_IMPORTED_MODULE_10__["StringUtils"].isEmpty(eventArgs.message)) {
                this.alert.show(this.api.getErrorMessage(eventArgs.code, this.language), _styles_styles__WEBPACK_IMPORTED_MODULE_12__["ColorClass"].danger);
            }
            else {
                this.alert.show(eventArgs.message, _styles_styles__WEBPACK_IMPORTED_MODULE_12__["ColorClass"].danger);
            }
            this.loading = false;
            this.facebook.stopLoading();
            this.google.stopLoading();
            this.submit.stopLoading();
        }
    };
    RegisterUserComponent.prototype.onLoginInit = function () {
        this.loading = true;
        this.alert.hide();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"])
    ], RegisterUserComponent.prototype, "alert", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"])
    ], RegisterUserComponent.prototype, "submit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_2__["FacebookComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_2__["FacebookComponent"])
    ], RegisterUserComponent.prototype, "facebook", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_1__["GoogleComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_1__["GoogleComponent"])
    ], RegisterUserComponent.prototype, "google", void 0);
    RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _service_services__WEBPACK_IMPORTED_MODULE_8__["UserApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_9__["AppBase"]));



/***/ }),

/***/ "./src/app/service/services.ts":
/*!*************************************!*\
  !*** ./src/app/service/services.ts ***!
  \*************************************/
/*! exports provided: httpHeaders, UserApiService, PetApiService, InfoService, AuthenticationService, AppointmentsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpHeaders", function() { return httpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiService", function() { return UserApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetApiService", function() { return PetApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoService", function() { return InfoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsApiService", function() { return AppointmentsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var _entity_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../entity/entities */ "./src/app/entity/entities.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../database/database */ "./src/app/database/database.ts");
/* harmony import */ var _language_Language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/Language */ "./src/app/language/Language.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");












// Set the http options
var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" });
var httpDefaultOptions = {
    headers: httpHeaders
};
var endpoints = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].endpoint;
var ApiService = /** @class */ (function () {
    function ApiService() {
        this.endpoint = endpoints.local;
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
        return this.http.post(this.authenticate, user, httpDefaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    UserApiService.prototype.save = function (user) {
        console.log(this.register);
        console.log(user);
        return this.http.post(this.register, user, httpDefaultOptions)
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
        _this.remove = _this.controller + "/remove";
        return _this;
    }
    PetApiService.prototype.get = function (pet) {
        console.log(this.retrieve);
        console.log(pet);
        return this.http.post(this.retrieve, pet, httpDefaultOptions)
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
        return this.http.get(this.types, httpDefaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    PetApiService.prototype.save = function (pet) {
        console.log(this.register);
        console.log(pet);
        return this.http.post(this.register, pet, httpDefaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    PetApiService.prototype.delete = function (pet) {
        console.log(this.remove);
        console.log(pet);
        return this.http.post(this.remove, pet, httpDefaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    PetApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PetApiService);
    return PetApiService;
}(ApiService));

var InfoService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InfoService, _super);
    function InfoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.controller = _this.endpoint + "/info";
        _this.ping = _this.controller + "/ping";
        return _this;
    }
    InfoService.prototype.doPing = function () {
        console.log(this.ping);
        var httpOptions = {
            headers: httpHeaders
        };
        return this.http.get(this.ping, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    InfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], InfoService);
    return InfoService;
}(ApiService));

var AuthenticationService = /** @class */ (function () {
    //https://jwt.io/introduction/
    function AuthenticationService(userApi, _localDatabase, _infoService) {
        this.userApi = userApi;
        this._localDatabase = _localDatabase;
        this._infoService = _infoService;
    }
    Object.defineProperty(AuthenticationService.prototype, "localDatabase", {
        get: function () {
            return this._localDatabase;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "infoService", {
        get: function () {
            return this._infoService;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.authenticate = function (entryUser, callback, sessionCallback) {
        var _this = this;
        if (_utils__WEBPACK_IMPORTED_MODULE_9__["ObjectUtils"].isEmpty(entryUser.loginType)) {
            entryUser.loginType = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_10__["SociaNetworkType"].NONE;
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
            callback({ code: _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].CONNECTION_ERROR, message: _this.userApi.getErrorMessage({ code: _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].CONNECTION_ERROR }, new _language_Language__WEBPACK_IMPORTED_MODULE_8__["LanguageService"]()) });
        });
    };
    AuthenticationService.prototype.authenticateLastUser = function (callback, sessionCallback) {
        var _this = this;
        var doLogin = function (result) {
            var user = new _entity_entities__WEBPACK_IMPORTED_MODULE_2__["User"]();
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [UserApiService,
            _database_database__WEBPACK_IMPORTED_MODULE_7__["LocalDatabaseService"],
            InfoService])
    ], AuthenticationService);
    return AuthenticationService;
}());

var AppointmentsApiService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppointmentsApiService, _super);
    function AppointmentsApiService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.controller = _this.endpoint + "/appointments";
        _this.retrieve = _this.controller + "/retrieve";
        _this.register = _this.controller + "/register";
        _this.remove = _this.controller + "/remove";
        _this.types = _this.controller + "/types";
        return _this;
    }
    AppointmentsApiService.prototype.get = function (appointment) {
        console.log(this.retrieve);
        console.log(appointment);
        return this.http.post(this.retrieve, appointment, httpDefaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    AppointmentsApiService.prototype.getByUser = function (user) {
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
    AppointmentsApiService.prototype.getTypes = function () {
        console.log(this.types);
        return this.http.get(this.types, httpDefaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    AppointmentsApiService.prototype.save = function (appointment) {
        console.log(this.register);
        console.log(appointment);
        return this.http.post(this.register, appointment, httpDefaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    AppointmentsApiService.prototype.delete = function (appointment) {
        console.log(this.remove);
        console.log(appointment);
        return this.http.post(this.remove, appointment, httpDefaultOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    AppointmentsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AppointmentsApiService);
    return AppointmentsApiService;
}(ApiService));



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
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../application */ "./src/app/application.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar/menuService */ "./src/app/navbar/menuService.ts");







var PASSWORD_CONFIG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].passwordConfig;
var SessionService = /** @class */ (function () {
    function SessionService(_authenticationService, _zone, _menuService) {
        var _this = this;
        this._authenticationService = _authenticationService;
        this._zone = _zone;
        this._menuService = _menuService;
        this.setUserInSession = function (result, password) {
            if (result && result.sid) {
                //store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.setAttribute(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].CURRENT_USER, JSON.stringify(result.data));
                _this.setAttribute(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].CURRENT_PASSWORD, password);
                _this.setAttribute(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].SESSION_ID, result.sid);
                _this.setAttribute(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].LOGIN_DATE, result.date);
            }
        };
        this.setEditingPet = function (pet) {
            if (!_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].isEmpty(pet)) {
                _this.setAttribute(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].EDITING_PET, JSON.stringify(pet));
            }
        };
        this.getEditingPet = function () {
            var json = _this.getAttribute(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].EDITING_PET) != undefined ? JSON.parse(_this.getAttribute(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].EDITING_PET)) : null;
            if (json != null) {
                var pet = json;
                return pet;
            }
            return json;
        };
        window.session = this;
    }
    Object.defineProperty(SessionService.prototype, "zone", {
        get: function () {
            return this._zone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "menuService", {
        get: function () {
            return this._menuService;
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
        var user;
        if (_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].isEmpty(this.sessionUser)) {
            this.sessionUser = this.getJsonUser();
        }
        user = this.sessionUser;
        return user;
    };
    SessionService.prototype.getJsonUser = function () {
        var json = this.getAttribute(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].CURRENT_USER) != undefined ? JSON.parse(this.getAttribute(_utils__WEBPACK_IMPORTED_MODULE_3__["SessionAttributes"].CURRENT_USER)) : null;
        return json;
    };
    SessionService.prototype.setAttribute = function (sttr, object) {
        localStorage.setItem(sttr, object);
    };
    SessionService.prototype.getAttribute = function (sttr) {
        return localStorage.getItem(sttr);
    };
    SessionService.prototype.onLogged = function (redirectUrl, router, menu) {
        if (_utils__WEBPACK_IMPORTED_MODULE_3__["StringUtils"].isEmpty(redirectUrl)) {
            redirectUrl = _application__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"];
        }
        var user = this.getCurrentUser();
        if (!_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].isEmpty(user)) {
            // if(!ObjectUtils.isEmpty(menu)){
            //   menu.user = user;
            // }
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
            redirectUrl = _application__WEBPACK_IMPORTED_MODULE_4__["WELCOME_PAGE"];
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _navbar_menuService__WEBPACK_IMPORTED_MODULE_6__["MenuService"]])
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
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var _entity_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity/entities */ "./src/app/entity/entities.ts");





var facebookAppId = '389609115207477';
var permits = {
    appId: facebookAppId,
    cookie: true,
    xfbml: true,
    version: 'v3.2'
};
var FacebookService = /** @class */ (function () {
    function FacebookService(cordova) {
        this.cordova = cordova;
    }
    FacebookService.prototype.login = function (callback) {
        //Chave Secreta do Aplicativo
        //b4a49157bf9ba2cc4b7b085c0ba13ad3
        if (!this.cordova.cordova) {
            FB.login(function (response) {
                console.log('submitLogin', response);
                var returnCodeEventArgs = { code: _entity_system__WEBPACK_IMPORTED_MODULE_3__["ReturnCode"].SUCCESS, message: "", result: undefined };
                var user = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["User"]();
                if (response.authResponse && response.status == "connected") {
                    window.facebook = response;
                    user.username = response.authResponse.userID;
                    user.password = response.authResponse.userID;
                    user.loginType = SociaNetworkType.FACEBOOK;
                }
                else {
                    console.log('User login failed');
                    returnCodeEventArgs.code = _entity_system__WEBPACK_IMPORTED_MODULE_3__["ReturnCode"].CONNECTION_ERROR;
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
        }
        else {
            facebookConnectPlugin.login(function (response) {
                console.log('submitLogin', response);
                var returnCodeEventArgs = { code: _entity_system__WEBPACK_IMPORTED_MODULE_3__["ReturnCode"].SUCCESS, message: "", result: undefined };
                var user = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["User"]();
                if (response.authResponse && response.status == "connected") {
                    window.facebook = response;
                    user.username = response.authResponse.userID;
                    user.password = response.authResponse.userID;
                    user.loginType = SociaNetworkType.FACEBOOK;
                }
                else {
                    console.log('User login failed');
                    returnCodeEventArgs.code = _entity_system__WEBPACK_IMPORTED_MODULE_3__["ReturnCode"].CONNECTION_ERROR;
                }
                returnCodeEventArgs.result = user;
                callback(returnCodeEventArgs);
            });
        }
    };
    ////plugin add cordova-plugin-facebook4 --save --variable APP_ID="389609115207477" --variable APP_NAME="Toppet"
    FacebookService.prototype.config = function () {
        window.fbAsyncInit = function () {
            FB.init(permits);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cordova_service__WEBPACK_IMPORTED_MODULE_1__["CordovaService"]])
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
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

/***/ "./src/app/templates/alert/alert.component.css":
/*!*****************************************************!*\
  !*** ./src/app/templates/alert/alert.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/templates/alert/alert.component.html":
/*!******************************************************!*\
  !*** ./src/app/templates/alert/alert.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{type}}\" [ngClass]=\"{ 'button-disabled': !visible }\" role=\"alert\">\r\n  {{message}}\r\n</div>"

/***/ }),

/***/ "./src/app/templates/alert/alert.component.ts":
/*!****************************************************!*\
  !*** ./src/app/templates/alert/alert.component.ts ***!
  \****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../styles/styles */ "./src/app/styles/styles.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AlertComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "type", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/templates/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/templates/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/templates/button/button-classes.ts":
/*!****************************************************!*\
  !*** ./src/app/templates/button/button-classes.ts ***!
  \****************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../appbase */ "./src/app/appbase.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ButtonComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ButtonComponent, _super);
    function ButtonComponent(session) {
        var _this = _super.call(this, session) || this;
        _this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this.begin = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        return _this;
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.stopLoading = function () {
        this.loading = false;
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

/***/ "./src/app/templates/button/facebook/facebook.component.css":
/*!******************************************************************!*\
  !*** ./src/app/templates/button/facebook/facebook.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social {\r\n    background-color: #4c699e;\r\n    border-color: #47618d;\r\n    margin: 5px;\r\n    width: 20%;\r\n    font-size: 250%;\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2J1dHRvbi9mYWNlYm9vay9mYWNlYm9vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvYnV0dG9uL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzY5OWU7XHJcbiAgICBib3JkZXItY29sb3I6ICM0NzYxOGQ7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/templates/button/facebook/facebook.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/templates/button/facebook/facebook.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary social-login-btn social\" (click)=\"do(null)\" href=\"javascript:;\"><i class=\"fab fa-facebook-f\"></i></a>\r\n<!-- <fb:login-button \r\n                scope=\"public_profile,email\"\r\n                onlogin=\"checkLoginState();\">\r\n            </fb:login-button> -->"

/***/ }),

/***/ "./src/app/templates/button/facebook/facebook.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/templates/button/facebook/facebook.component.ts ***!
  \*****************************************************************/
/*! exports provided: FacebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookComponent", function() { return FacebookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _button_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../button-classes */ "./src/app/templates/button/button-classes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_entity_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils.ts");







var FacebookComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacebookComponent, _super);
    function FacebookComponent(api, session) {
        var _this = _super.call(this, session) || this;
        _this.api = api;
        _this.sociaNetworkType = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_2__["SociaNetworkType"].FACEBOOK;
        _this.callback = function (args) {
            console.log(args);
            if (args.code == src_app_entity_system__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].SUCCESS) {
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
        if (!src_app_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].isEmpty(form)) {
            this.form = form;
        }
        this.api.login(this.callback);
    };
    FacebookComponent.prototype.onClicked = function () {
    };
    FacebookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'facebook-button',
            template: __webpack_require__(/*! ./facebook.component.html */ "./src/app/templates/button/facebook/facebook.component.html"),
            styles: [__webpack_require__(/*! ./facebook.component.css */ "./src/app/templates/button/facebook/facebook.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_2__["FacebookService"], _session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], FacebookComponent);
    return FacebookComponent;
}(_button_classes__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/templates/button/google/google.component.css":
/*!**************************************************************!*\
  !*** ./src/app/templates/button/google/google.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social {\r\n    background-color: #da573b;\r\n    border-color: #be5238;\r\n    margin: 5px;\r\n    width: 20%;\r\n    font-size: 250%;\r\n    padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2J1dHRvbi9nb29nbGUvZ29vZ2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9idXR0b24vZ29vZ2xlL2dvb2dsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE1NzNiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmU1MjM4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgZm9udC1zaXplOiAyNTAlO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/templates/button/google/google.component.html":
/*!***************************************************************!*\
  !*** ./src/app/templates/button/google/google.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary social-login-btn social\" (click)=\"do(null)\" href=\"javascript:;\"><i class=\"fab fa-google\"></i></a>"

/***/ }),

/***/ "./src/app/templates/button/google/google.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/templates/button/google/google.component.ts ***!
  \*************************************************************/
/*! exports provided: GoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleComponent", function() { return GoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _button_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../button-classes */ "./src/app/templates/button/button-classes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils.ts");






var GoogleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GoogleComponent, _super);
    function GoogleComponent(api, session) {
        var _this = _super.call(this, session) || this;
        _this.api = api;
        _this.sociaNetworkType = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_3__["SociaNetworkType"].GOOGLE;
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
        if (!_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].isEmpty(form)) {
            this.form = form;
        }
        this.api.login(this.callback);
    };
    GoogleComponent.prototype.onClicked = function () {
    };
    GoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'google-button',
            template: __webpack_require__(/*! ./google.component.html */ "./src/app/templates/button/google/google.component.html"),
            styles: [__webpack_require__(/*! ./google.component.css */ "./src/app/templates/button/google/google.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_3__["GoogleService"], _session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], GoogleComponent);
    return GoogleComponent;
}(_button_classes__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/templates/button/signin/signin.component.css":
/*!**************************************************************!*\
  !*** ./src/app/templates/button/signin/signin.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9idXR0b24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/button/signin/signin.component.html":
/*!***************************************************************!*\
  !*** ./src/app/templates/button/signin/signin.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"loading == false\" [class]=\"classes\" [ngClass]=\"{ 'button-disabled': hidden }\" (click)=\"doLogin()\" ><ng-content></ng-content></button>\r\n<app-loading [center]=\"false\" *ngIf=\"loading\"></app-loading>"

/***/ }),

/***/ "./src/app/templates/button/signin/signin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/templates/button/signin/signin.component.ts ***!
  \*************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _button_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../button-classes */ "./src/app/templates/button/button-classes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var _entity_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../entity/entities */ "./src/app/entity/entities.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils.ts");








var SignInComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SignInComponent, _super);
    function SignInComponent(session) {
        var _this = _super.call(this, session) || this;
        _this.loginDone = function (args) {
            _this.loading = false;
            _this.done.emit(args);
            if (args.code == _entity_system__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].SUCCESS) {
            }
        };
        return _this;
    }
    SignInComponent.prototype.doLogin = function () {
        if (this.loading) {
            return;
        }
        this.begin.emit();
        if (this.form.invalid) {
            var args = { code: _entity_system__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].VALIDATION_ERROR, message: "", result: this.form };
            this.done.emit(args);
            return;
        }
        this.loading = true;
        var formUser = new _entity_entities__WEBPACK_IMPORTED_MODULE_5__["User"]();
        formUser.username = this.form.value.username;
        formUser.password = this.form.value.password;
        this.form.value.socialMedia = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_6__["SociaNetworkType"].NONE;
        formUser.loginType = this.form.value.socialMedia;
        if (!this.requiredFieldsFilled(formUser)) {
            var args = { code: _entity_system__WEBPACK_IMPORTED_MODULE_4__["ReturnCode"].VALIDATION_ERROR, message: this.language.requiredFields, result: this.form };
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
        return !(_utils__WEBPACK_IMPORTED_MODULE_7__["StringUtils"].isEmpty(user.username)
            || _utils__WEBPACK_IMPORTED_MODULE_7__["StringUtils"].isEmpty(user.password));
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'login-button',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/templates/button/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/templates/button/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], SignInComponent);
    return SignInComponent;
}(_button_classes__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/templates/button/signup/signup.component.css":
/*!**************************************************************!*\
  !*** ./src/app/templates/button/signup/signup.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9idXR0b24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/button/signup/signup.component.html":
/*!***************************************************************!*\
  !*** ./src/app/templates/button/signup/signup.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"loading == false\" [class]=\"classes\" [ngClass]=\"{ 'button-disabled': hidden }\" (click)=\"doRegister()\"><ng-content></ng-content></button>\r\n<app-loading *ngIf=\"loading\"></app-loading>"

/***/ }),

/***/ "./src/app/templates/button/signup/signup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/templates/button/signup/signup.component.ts ***!
  \*************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _button_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../button-classes */ "./src/app/templates/button/button-classes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/services */ "./src/app/service/services.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _entity_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../entity/system */ "./src/app/entity/system.ts");
/* harmony import */ var _entity_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../entity/entities */ "./src/app/entity/entities.ts");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils.ts");









var SignUpComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SignUpComponent, _super);
    function SignUpComponent(userApi, session) {
        var _this = _super.call(this, session) || this;
        _this.userApi = userApi;
        return _this;
    }
    SignUpComponent.prototype.doRegister = function () {
        var _this = this;
        if (this.loading) {
            return;
        }
        this.begin.emit();
        if (this.form.invalid) {
            var args = { code: _entity_system__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].VALIDATION_ERROR, message: "", result: this.form };
            this.done.emit(args);
            return;
        }
        this.loading = true;
        var formUser = new _entity_entities__WEBPACK_IMPORTED_MODULE_6__["User"]();
        formUser.username = this.form.value.username;
        formUser.password = this.form.value.password;
        formUser.name = this.form.value.name;
        this.form.value.socialMedia = _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_7__["SociaNetworkType"].NONE;
        formUser.loginType = this.form.value.socialMedia;
        //Campos obrigatorios
        if (!this.requiredFieldsFilled(formUser, this.form.value.confirmPassword)) {
            var args = { code: _entity_system__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].VALIDATION_ERROR, message: this.language.requiredFields, result: this.form };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        //Validar e-mail
        if (!_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmail(formUser.username)) {
            var args = { code: _entity_system__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].VALIDATION_ERROR, message: this.language.invalidEmailAddress, result: this.form };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        //Validar senha
        if (formUser.password.length < _session_session_service__WEBPACK_IMPORTED_MODULE_4__["PASSWORD_CONFIG"].min || (!_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(_session_session_service__WEBPACK_IMPORTED_MODULE_4__["PASSWORD_CONFIG"].contains))) {
            var args = { code: _entity_system__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].VALIDATION_ERROR, message: this.language.invalidPassword.replace(":min", _session_session_service__WEBPACK_IMPORTED_MODULE_4__["PASSWORD_CONFIG"].min), result: this.form };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        //Corresponder senha
        if (formUser.password != this.form.value.confirmPassword) {
            var args = { code: _entity_system__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].VALIDATION_ERROR, message: this.language.passwordDoesntMatch, result: this.form };
            this.loading = false;
            this.done.emit(args);
            return;
        }
        var user = this.userApi.save(formUser);
        window.httpUser = user;
        user.subscribe(function (result) {
            console.log(result);
            if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].SUCCESS) {
                _this.session.setUserInSession(result, _this.form.value.password);
                var args = { code: result.code, message: "", result: _this.form };
                _this.done.emit(args);
            }
            else {
                var message = "";
                if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].RESOURCE_EXISTS) {
                    message = _this.language.usernameExists;
                }
                var args = { code: result.code, message: message, result: _this.form };
                _this.done.emit(args);
            }
            _this.loading = false;
        }, function (error) {
            console.log(error);
            var args = { code: _entity_system__WEBPACK_IMPORTED_MODULE_5__["ReturnCode"].CONNECTION_ERROR, message: "", result: _this.form };
            _this.done.emit(args);
            _this.loading = false;
        });
    };
    SignUpComponent.prototype.onClicked = function () {
    };
    SignUpComponent.prototype.onSignedUp = function () {
    };
    SignUpComponent.prototype.requiredFieldsFilled = function (user, confirmPassword) {
        return !(_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(user.username)
            || _utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(user.password)
            || _utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(user.name)
            || _utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isEmpty(confirmPassword));
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'register-button',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/templates/button/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/templates/button/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services__WEBPACK_IMPORTED_MODULE_3__["UserApiService"], _session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], SignUpComponent);
    return SignUpComponent;
}(_button_classes__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/templates/carousel/carousel.component.css":
/*!***********************************************************!*\
  !*** ./src/app/templates/carousel/carousel.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/templates/carousel/carousel.component.html":
/*!************************************************************!*\
  !*** ./src/app/templates/carousel/carousel.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" #carouselExampleIndicators class=\"carousel slide\" [attr.data-ride]=\"dataRide\" [attr.data-interval]=\"dataInterval\">\r\n    <ol class=\"carousel-indicators\" #indicator style=\"position: fixed;\"  [ngStyle]=\"{ 'bottom': indicatorBottom }\">\r\n      <li *ngFor=\"let content of contents; let i = index\" [attr.data-slide-to]=\"i\" [ngClass]=\"{ 'active': i == startsWith }\" [attr.data-target]=\"disableControls ? '' : '#carouselExampleIndicators'\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\" #items>\r\n      <div class=\"carousel-item\">\r\n        <ng-content select=\".page1\"></ng-content>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <ng-content select=\".page2\"></ng-content>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <ng-content select=\".page3\"></ng-content>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <ng-content select=\".page4\"></ng-content>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <ng-content select=\".page5\"></ng-content>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <ng-content select=\".page6\"></ng-content>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <ng-content select=\".page7\"></ng-content>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <ng-content select=\".page8\"></ng-content>\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" #previousInput style=\"position: fixed;\" [hidden]=\"true\" (click)=\"fireNext()\" role=\"button\" data-slide=\"prev\"></a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" #nextInput style=\"position: fixed;\" [hidden]=\"true\" (click)=\"fireBack()\" role=\"button\" data-slide=\"next\"></a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/templates/carousel/carousel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/templates/carousel/carousel.component.ts ***!
  \**********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(element) {
        var _this = this;
        this.element = element;
        this.nextClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.previousClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.endReached = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startsWith = 0;
        this.dataRide = false;
        this.dataInterval = false;
        this.disableControls = false;
        this.indicatorBottom = "";
        this._contents = [];
        this._currentPage = 0;
        this.setCurrentPage = function () {
            _this._currentPage = $(_this.carouselExampleIndicators.nativeElement).find('div.active').index() + 1;
        };
        this.next = function () {
            _this.nextInput.nativeElement.click();
            _this.fireNext();
        };
        this.back = function () {
            _this.previousInput.nativeElement.click();
            _this.fireBack();
        };
    }
    Object.defineProperty(CarouselComponent.prototype, "contents", {
        get: function () {
            return this._contents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "currentPage", {
        get: function () {
            return this._currentPage;
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngAfterContentInit = function () {
        var toRemove = [];
        for (var i = 0; i < this.items.nativeElement.childNodes.length; i++) {
            if (this.items.nativeElement.childNodes[i].childNodes.length > 0) {
                if (this.startsWith == i) {
                    this.items.nativeElement.childNodes[i].classList.add("active");
                }
                this._contents.push(this.items.nativeElement.childNodes[i]);
            }
            else {
                toRemove.push(this.items.nativeElement.childNodes[i]);
            }
        }
        //Remove not used pages
        for (var i = 0; i < toRemove.length; i++) {
            if (toRemove[i].childNodes.length == 0) {
                this.items.nativeElement.removeChild(toRemove[i]);
            }
        }
        $(this.carouselExampleIndicators.nativeElement).on('slid.bs.carousel', this.setCurrentPage);
        this.setCurrentPage();
    };
    CarouselComponent.prototype.fireNext = function () {
        this.nextClicked.emit();
        this.setCurrentPage();
    };
    CarouselComponent.prototype.fireBack = function () {
        this.previousClicked.emit();
        this.setCurrentPage();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "nextClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "previousClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "endReached", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("starts-with"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CarouselComponent.prototype, "startsWith", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("data-ride"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CarouselComponent.prototype, "dataRide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("data-interval"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CarouselComponent.prototype, "dataInterval", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("disable-controls"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CarouselComponent.prototype, "disableControls", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("indicator-bottom"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CarouselComponent.prototype, "indicatorBottom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("items"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nextInput"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "nextInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("previousInput"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "previousInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("indicator"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "indicator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("carouselExampleIndicators"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "carouselExampleIndicators", void 0);
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/templates/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/templates/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/templates/loading/loading.component.css":
/*!*********************************************************!*\
  !*** ./src/app/templates/loading/loading.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-loading {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 45%;\r\n  /* bring your own prefixes */\r\n  /* transform: translate(-50%, -50%); */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItbG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xyXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/templates/loading/loading.component.html":
/*!**********************************************************!*\
  !*** ./src/app/templates/loading/loading.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-border text-toppet\" [ngClass]=\"{ 'center-loading': center }\" role=\"status\">\r\n  <span class=\"sr-only\">Carregando...</span>\r\n</div>"

/***/ }),

/***/ "./src/app/templates/loading/loading.component.ts":
/*!********************************************************!*\
  !*** ./src/app/templates/loading/loading.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoadingComponent.prototype, "center", void 0);
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/templates/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/templates/loading/loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/templates/tutorial/tutorial.component.css":
/*!***********************************************************!*\
  !*** ./src/app/templates/tutorial/tutorial.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy90dXRvcmlhbC90dXRvcmlhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/tutorial/tutorial.component.html":
/*!************************************************************!*\
  !*** ./src/app/templates/tutorial/tutorial.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tooltip fade bs-tooltip-top\" [ngClass]=\"{ 'show': visible }\" x-placement=\"top\" role=\"tooltip\" style=\"position: absolute; transform: translate3d(155px, 477px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n  <div class=\"arrow\" style=\"left: 129px;\"></div>\r\n  <div class=\"tooltip-inner\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/templates/tutorial/tutorial.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/templates/tutorial/tutorial.component.ts ***!
  \**********************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
        this.visible = false;
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent.prototype.show = function () {
        this.visible = true;
    };
    TutorialComponent.prototype.hide = function () {
        this.visible = false;
    };
    TutorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/templates/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.css */ "./src/app/templates/tutorial/tutorial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: StringUtils, FormUtils, ObjectUtils, DateUtils, DateFormat, SessionAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringUtils", function() { return StringUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUtils", function() { return FormUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUtils", function() { return ObjectUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtils", function() { return DateUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return DateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAttributes", function() { return SessionAttributes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


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

var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.mask = {
        guide: true,
        showMask: true,
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
    };
    return DateUtils;
}());

var SUPPORTS_INTL_API = typeof Intl !== 'undefined';
var DateFormat = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DateFormat, _super);
    function DateFormat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.useUtcForDisplay = true;
        return _this;
    }
    DateFormat.prototype.parse = function (value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(year, month, date);
        }
        var timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    return DateFormat;
}(_angular_material__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]));

var SessionAttributes;
(function (SessionAttributes) {
    SessionAttributes["CURRENT_USER"] = "currentUser";
    SessionAttributes["CURRENT_PASSWORD"] = "currentPassword";
    SessionAttributes["SESSION_ID"] = "sessionId";
    SessionAttributes["LOGIN_DATE"] = "loginDate";
    SessionAttributes["EDITING_PET"] = "editingPet";
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

module.exports = "<div class=\"container text-center\">\r\n  <h1 class=\"form-signin-heading\" style=\"color: white !important\">{{language.welcome}} <b>{{applicationName}}</b></h1>\r\n  <br>\r\n  <app-carousel [indicator-bottom]=\"'9%'\">\r\n    <small class=\"text-muted page1\">{{language.appDescription1}}</small>\r\n    <small class=\"text-muted page2\">{{language.appDescription2}}</small>\r\n    <small class=\"text-muted page3\">{{language.appDescription3}}</small>\r\n  </app-carousel>\r\n  <a routerLink=\"/signin\"><button class=\"btn btn-toppet btn-bottom-left btn-lg\" style=\"width: 40% !important;\">{{language.login}}</button></a>\r\n  <a routerLink=\"/signup\"><button class=\"btn btn-toppet btn-hollow btn-bottom-right btn-lg\" style=\"width: 40% !important;\">{{language.signUp}}</button></a>\r\n</div>\r\n"

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
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appbase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../appbase */ "./src/app/appbase.ts");




var WelcomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WelcomeComponent, _super);
    function WelcomeComponent(session) {
        return _super.call(this, session) || this;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.menu.disable = true;
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}(_appbase__WEBPACK_IMPORTED_MODULE_3__["AppBase"]));



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