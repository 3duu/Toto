(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/appointments/appointments.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/appointments/appointments.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"pb-5\" *ngIf=\"outlet.isActivated == false\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"[ col-xs-12 col-sm-offset-2 col-sm-8 ]\">\n      <ul class=\"event-list\">\n        <li *ngFor=\"let appointment of appointments;\">\n          <time [attr.datetime]=\"appointment.fulldate\">\n            <span class=\"day\">{{appointment.day}}</span>\n            <span class=\"month\">{{appointment.month}}</span>\n            <!-- <span class=\"year\">{{appointment.year}}</span>\n            <span class=\"time\">{{appointment.time}}</span> -->\n          </time>\n          <img src=\"{{appointment.pet?.img}}\" />\n          <div class=\"info\">\n            <h2 class=\"title\">{{appointment.appointmentType?.description}}</h2>\n            <p class=\"desc\">{{appointment.description}}</p>\n          </div>\n          <!-- <div class=\"social\">\n            <ul>\n              <li class=\"facebook\" style=\"width:33%;\"><a href=\"javascript:;\"><span class=\"fa fa-facebook\"></span></a></li>\n              <li class=\"google-plus\" style=\"width:33%;\"><a href=\"javascript:;\"><span class=\"fa fa-google-plus\"></span></a></li>\n            </ul>\n          </div> -->\n        </li>\n      </ul>\n  </div>\n  </div>\n  <app-loading *ngIf=\"loading\" [center]=\"true\"></app-loading>\n  <a href=\"javascript:;\" class=\"float bg-toppet\" (click)=\"add()\">\n    <i class=\"fa fa-plus my-float\"></i>\n  </a>\n</div>\n</section>\n<router-outlet #outlet=\"outlet\"></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/appointments/appointments.thumb.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/appointments/appointments.thumb.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" style=\"height: 65%;\" style=\"background-color: white; height: 400px;\">\n  <div class=\"[ col-xs-12 col-sm-offset-2 col-sm-8 ]\" *ngIf=\"!isEmpty();\">\n    <ul class=\"event-list\">\n      <li *ngFor=\"let appointment of appointments;\">\n        <time [attr.datetime]=\"appointment.fulldate\">\n          <span class=\"day\">{{appointment.day}}</span>\n          <span class=\"month\">{{appointment.month}}</span>\n          <span class=\"title\">{{appointment.appointmentType?.description}}</span>\n        </time>\n      </li>\n    </ul>\n  </div>\n  <section class=\"body_section\" *ngIf=\"isEmpty();\">\n    <div class=interface_class>\n      <small class=\"default-text text-petlife\" style=\"position: fixed;top: 42%;left: 26%;\">{{language.noAppointmentsClick}}</small>\n    </div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/appointments/appointments.wizard.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/appointments/appointments.wizard.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-carousel [disable-controls]=\"true\">\n\n        <div class=\"row page1\" #page1>\n            <div class=\"col-xs-12 col-sm-offset-3 col-sm-6\" *ngIf=\"user?.pets.length > 0\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading c-list\">\n                        <span class=\"title\">{{language.myPet}}</span>\n                    </div>\n                    \n                    <div class=\"row\" style=\"display: none;\">\n                        <div class=\"col-xs-12\">\n                            <div class=\"input-group c-search\">\n                                <input type=\"text\" class=\"form-control\" id=\"contact-list-search\">\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search text-muted\"></span></button>\n                                </span>\n                            </div>\n                        </div>\n                    </div>                                                                           \n                    \n                    <ul class=\"list-group\" id=\"contact-list\">\n                        <li class=\"list-group-item\">\n                            <a href=\"javascript:;\" *ngFor=\"let pet of user.pets\" (click)=\"selectPet(pet)\">\n                                <div class=\"col-xs-12 col-sm-3\">\n                                    <img src=\"{{pet.img}}\" class=\"img-responsive img-circle\" />\n                                </div>\n                                <div class=\"col-xs-12 col-sm-9\">\n                                    <span class=\"name\">{{pet.name}}</span><br/>\n                                </div>\n                                <div class=\"clearfix\"></div>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <app-alert [visible]=\"user?.pets.length == 0\" [message]=\"language.noPetsFound\" type=\"info\"></app-alert>\n        </div>\n        <div class=\"text-center page2\" #page2>\n            <div class=\"form-signin\">\n                <br>\n                <mat-form-field>\n                    <mat-label>{{language.appointmentType}}</mat-label>\n                    <select matNativeControl class=\"ember-view ember-text-field text-muted\" [(ngModel)]=\"type\">\n                        <option *ngFor=\"let type of types\" value=\"{{type.id}}\">{{type.description}}</option>\n                    </select>\n                </mat-form-field>\n                <mat-form-field>\n                    <mat-label>{{language.appointmentFrequency}}</mat-label>\n                    <select matNativeControl class=\"ember-view ember-text-field text-muted\" [(ngModel)]=\"often\">\n                        <option *ngFor=\"let d of frequency\" value=\"{{d.value}}\">{{d.text}}</option>\n                    </select>\n                </mat-form-field>\n                <mat-form-field *ngIf=\"often == 0\">\n                    <input matInput [min]=\"currentDate\" aria-describedby=\"basic-addon1\" class=\"ember-view ember-text-field text-muted\" [matDatepicker]=\"myDatepicker\" placeholder=\"{{language.date}}\" [(ngModel)]=\"date\" ngDefaultControl>\n                    <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #myDatepicker></mat-datepicker>\n                </mat-form-field>\n                <mat-form-field *ngIf=\"often == 2\">\n                    <select matNativeControl class=\"ember-view ember-text-field text-muted\" [(ngModel)]=\"workingday\">\n                        <option *ngFor=\"let d of workingdays\" value=\"{{d.value}}\">{{d.text}}</option>\n                    </select>\n                </mat-form-field>\n                <mat-form-field>\n                    <input [ngxTimepicker]=\"picker\" [format]=\"24\"class=\"ember-view ember-text-field text-muted\" matInput [(ngModel)]=\"time\" placeholder=\"{{language.hour}}\" type=\"text\" ngDefaultControl>\n                    <ngx-material-timepicker #picker></ngx-material-timepicker>\n                </mat-form-field>\n                <mat-form-field>\n                    <input class=\"ember-view ember-text-field text-muted\" maxlength=\"22\" matInput [(ngModel)]=\"appointment.description\" placeholder=\"{{language.description}}\" type=\"text\" ngDefaultControl>\n                </mat-form-field>\n            </div>\n        </div>\n    </app-carousel>\n    <a href=\"javascript:;\" *ngIf=\"finish\" class=\"btn btn-toppet btn-round btn-go\" (click)=\"save()\"><i class=\"fa fa-check\"></i></a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-carousel [indicator-bottom]=\"'18%'\">\n    <app-appointments-thumb class=\"page1\"></app-appointments-thumb>\n  </app-carousel>\n  <div class=\"button-group\">\n    <div class=\"buttons\">\n      <p>\n        <a class=\"btn btn-toppet index-icon\" href=\"javascript:;\" (click)=\"appointments()\"><i class=\"fa fa-calendar\"></i></a>\n        <a class=\"btn btn-toppet index-icon\" href=\"javascript:;\" (click)=\"maps()\"><i class=\"fas fa-shopping-basket\"></i></a>\n        <a class=\"btn btn-toppet index-icon\" href=\"javascript:;\" (click)=\"pets()\"><i class=\"fa fa-paw\"></i></a>\n        <a class=\"btn btn-toppet index-icon\" href=\"javascript:;\" (click)=\"donations()\"><i class=\"fa fa-hands-helping\"></i></a>\n      </p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"loading\" [center]=\"true\"></app-loading>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 0 !important;\">\n<div class=\"text-center\">\n    <form class=\"form-signin\" #loginForm=\"ngForm\">\n        <h2 class=\"form-signin-heading\" style=\"color: white;\">{{language.signIn}}</h2>\n        <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\n        <br>\n        <p>\n            <facebook-button (begin)=\"onLoginInit()\" (done)=\"onLoginEnd($event)\"></facebook-button>\n            <google-button (begin)=\"onLoginInit()\" (done)=\"onLoginEnd($event)\"></google-button>\n        </p>\n        <br>\n        <small class=\"text-muted\">{{language.enterYourLogon}} {{applicationName}}</small>\n        <br>\n        <mat-form-field>\n            <input class=\"ember-view ember-text-field text-muted\" matInput placeholder=\"{{language.username}}\" name=\"username\" id=\"username\" ngModel>\n        </mat-form-field>\n        <mat-form-field>\n            <input class=\"ember-view ember-text-field text-muted\"  matInput placeholder=\"{{language.password}}\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" id=\"password\" ngModel>\n            <mat-icon color=\"accent\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </mat-form-field>\n        \n        <script id=\"metamorph-22-start\" type=\"text/x-placeholder\"></script><script id=\"metamorph-22-end\" type=\"text/x-placeholder\"></script>\n        <app-alert></app-alert>\n        <login-button [hidden]=\"loading\" classes=\"btn btn-lg btn-toppet btn-block\" [form]=\"loginForm\" (begin)=\"onLoginInit()\" (done)=\"onLoginEnd($event)\">{{language.signIn}}</login-button>\n        <br>\n    </form>\n    <small class=\"create-account text-muted\">{{language.dontHave}} {{applicationName}} {{language.orSocialMediaAccount}} <button style=\"color: white;\" class=\"ember-view btn btn-sm btn-default\" (click)=\"register()\"> <b>{{language.register}} </b></button> </small>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maps/maps.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maps/maps.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map_canvas\" class=\"container\" style=\"width:90%;height:85%;align-content:center\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-toppet main-menu\"  *ngIf=\"disable == false\">\n    <span class=\"navbar-brand\">{{title}}</span>\n    <button  class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"javascript:;\"><i class=\"fa fa-user\">&nbsp;&nbsp;</i>{{user.name}}</a>\n            </li>\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/{{language.links.pets}}\" (click)=\"toggleNavbar()\"><i class=\"fa fa-paw\">&nbsp;&nbsp;</i>{{language.myPet}}</a>\n            </li> -->\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-hands-helping\">&nbsp;&nbsp;</i>{{language.adoptions}}</a>\n            </li> -->\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"toggleNavbar()\"><i class=\"fa fa-calendar\">&nbsp;&nbsp;</i>{{language.appointments}}</a>\n            </li> -->\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:;\"><i class=\"fa fa-question-circle\">&nbsp;&nbsp;</i>{{language.about}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:;\" (click)=\"logout()\"><i class=\"fa fa-times-circle\">&nbsp;&nbsp;</i>{{language.logout}}</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pets/pets.breeds.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pets/pets.breeds.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog breeds-container\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{language.breed}}</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeDialog()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body breeds-modal-body\" #modalBody>\n        <div class=\"row\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngFor=\"let b of type.breeds\" (click)=\"select(b)\" style=\"height: 65px !important; line-height:65px;\">\n                  <div style=\"text-align: center; width: 100%;\">\n                    <h2 class=\"new-title\" >{{b.description}}</h2>\n                  </div>\n              </li>\n            </ul>\n        </div> \n  </div>\n</div>\n\n<!-- <div class=\"container\">\n    <div class=\"row\">\n      <ul class=\"list-group\">\n            <li class=\"list-group-item\"><a href=\"https://frikinow.com\" target=\"_blank\">regalos frikis</a></li> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pets/pets.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pets/pets.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"pb-5\" *ngIf=\"outlet?.isActivated == false\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let pet of pets\">\n        <div class=\"frontside\">\n          <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <p><img class=\"img-fluid\" src=\"{{pet.img}}\"></p>\n                <h4 class=\"card-title\">{{pet.name}}</h4>\n                <p class=\"card-text\">{{pet.description}}</p>\n                <a href=\"javascript:;\" (click)=\"view(pet)\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-eye\"></i></a>\n                <a href=\"javascript:;\" (click)=\"removePet(pet)\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash-alt\"></i></a>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-tutorial>{{language.addPetTutotial}}</app-tutorial>\n  <a href=\"javascript:;\" class=\"float bg-toppet\" (click)=\"add()\">\n    <i class=\"fa fa-plus my-float\"></i>\n  </a>\n  <!-- data-toggle=\"tooltip\" data-placement=\"top\" \n    data-animation=\"true\" data-trigger=\"manual\" \n    title=\"{{language.addPetTutotial}}\" -->\n  <app-loading *ngIf=\"loading\" [center]=\"true\"></app-loading>\n</section>\n<router-outlet #outlet=\"outlet\"></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pets/pets.info.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pets/pets.info.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <div class=\"form-signin\">\n        <br>\n        <div class=\"input-group mb-3\" *ngIf=\"pet.breed.id\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text bg-toppet\"><a href=\"javascript:;\" class=\"btn-toppet\" (click)=\"back()\"><i [ngClass]=\"'fa fa-' + pet.petType.icon\" style=\"float: right; font-size: 235%;\"></i></a></span>\n            </div>\n            <input type=\"text\" style=\"height: auto; font-size: 22px; background-color: transparent; color: white;\" disabled=\"true\" class=\"form-control\" value=\"{{pet.breed.description}}\" aria-describedby=\"basic-addon1\">\n        </div>\n        <mat-form-field>\n            <input class=\"ember-view ember-text-field text-muted\" maxlength=\"22\" matInput [(ngModel)]=\"pet.name\" placeholder=\"{{language.name}}\" type=\"text\" ngDefaultControl>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput aria-describedby=\"basic-addon1\" class=\"ember-view ember-text-field text-muted\" [max]=\"currentDate\" [matDatepicker]=\"myDatepicker\" (dateInput)=\"updateAge()\" placeholder=\"{{language.birthDate}}\" [(ngModel)]=\"pet.birthDate\" ngDefaultControl>\n            <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #myDatepicker></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field>\n            <input class=\"ember-view ember-text-field text-muted\" matInput value=\"{{age}}\" placeholder=\"{{language.age}}\" disabled=\"true\">\n        </mat-form-field>\n        <mat-form-field>\n            <input class=\"ember-view ember-text-field text-muted\" matInput [(ngModel)]=\"pet.description\" maxlength=\"100\" placeholder=\"{{language.description}}\" type=\"text\" ngDefaultControl>\n        </mat-form-field>\n        <app-alert></app-alert>\n    </div>\n    <a href=\"javascript:;\" class=\"btn btn-toppet btn-bottom btn-round\" style=\"position: fixed; margin-bottom: 16%; right: 40%;\" (click)=\"next()\"><i class=\"fa fa-chevron-right\"></i></a>\n</div>\n\n  \n  \n  \n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pets/pets.picture.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pets/pets.picture.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"body_section\">\n  <div class=interface_class>\n    <div class=\"page-header\" style=\"color: white;\">\n      <h1>{{language.takePicture}}</h1>\n    </div>\n    <div class=\"card\" *ngIf=\"!loading\">\n      <img [src]=\"pet.img\" class=\"card-img-top\" [ngClass]=\"{ 'button-disabled': pet.img == null }\"/>\n      <a class=\"btn btn-light\" [ngClass]=\"{ 'button-disabled': pet.img != null }\" (click)=\"camera()\" href=\"javascript:;\" style=\"font-size: 450%;\"><i class=\"fa fa-camera text-petlife\"></i></a>\n    </div>\n  </div>\n  <app-loading *ngIf=\"loading\" [center]=\"true\"></app-loading>\n  <a href=\"javascript:;\" class=\"btn btn-toppet btn-bottom btn-round\" style=\"position: fixed; margin-bottom: 16%; right: 40%;\" (click)=\"submit()\"><i class=\"fa fa-check\"></i></a>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pets/pets.type.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pets/pets.type.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loading\" [center]=\"true\"></app-loading>\n<div class=\"row\">\n  <div class=\"[ col-xs-12 col-sm-offset-2 col-sm-8 ]\">\n    <ul class=\"event-list\" style=\"height: 100% !important;\">\n      <li *ngFor=\"let t of types;\"  (click)=\"select(t)\" style=\"height: 82px;\">\n        <i class=\"icon fa fa-{{t.icon}}\" style=\"padding-top: 14px;\"></i>\n        <div class=\"info\">\n          <h2 class=\"title\">{{t.description}}</h2>\n          <!-- <p class=\"desc\">{{t.icon}}</p> -->\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pets/pets.wizard.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pets/pets.wizard.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-carousel [disable-controls]=\"true\">\n        <app-pets-type class=\"page1\"></app-pets-type>\n        <app-pets-info class=\"page2\"></app-pets-info>\n        <app-pets-picture class=\"page3\"></app-pets-picture>\n    </app-carousel>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 0 !important;\">     \n  <div class=\"text-center\">\n      <form class=\"form-signin\" #registerForm=\"ngForm\" autocomplete=\"off\">\n          <h2 class=\"form-signin-heading\" style=\"color: white !important\">{{language.signUp}}</h2>\n          <small class=\"text-muted\">{{language.connect}} {{applicationName}} {{language.favoriteSocialMedia}}</small>\n          <br>\n          <p>\n            <facebook-button (begin)=\"onRegisterInit()\" (done)=\"onRegisterEnd($event, true)\"></facebook-button>\n            <google-button (begin)=\"onRegisterInit()\" (done)=\"onRegisterEnd($event, true)\"></google-button>\n          </p>\n          <small class=\"text-muted\">{{language.createWithSomeInfo}}</small>\n          <br>\n          <mat-form-field>\n            <input matInput class=\"ember-view ember-text-field text-muted\" maxlength=\"32\" placeholder=\"{{language.username}}\" name=\"username\" id=\"username\" ngModel>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput class=\"ember-view ember-text-field text-muted\" maxlength=\"50\" placeholder=\"{{language.name}}\" name=\"name\" id=\"name\" ngModel>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput class=\"ember-view ember-text-field text-muted\" maxlength=\"32\" placeholder=\"{{language.password}}\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" id=\"password\" ngModel>\n            <mat-icon matSuffix color=\"accent\" (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput class=\"ember-view ember-text-field text-muted\" maxlength=\"32\" placeholder=\"{{language.confirmPassword}}\" [type]=\"hide ? 'password' : 'text'\" name=\"confirmPassword\" id=\"confirmPassword\" ngModel>\n            <mat-icon matSuffix color=\"accent\" (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </mat-form-field>\n          <br>\n          <app-alert></app-alert>\n          <register-button [hidden]=\"loading\" classes=\"btn btn-lg btn-toppet btn-block\" [form]=\"registerForm\" (begin)=\"onRegisterInit()\" (done)=\"onRegisterEnd($event, false)\">{{language.signUp}}</register-button>\n          <br>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/alert/alert.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/alert/alert.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{type}}\" [ngClass]=\"{ 'button-disabled': !visible }\" role=\"alert\">\n  {{message}}\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/button/facebook/facebook.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/button/facebook/facebook.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary social-login-btn social\" (click)=\"do(null)\" href=\"javascript:;\"><i class=\"fab fa-facebook-f\"></i></a>\n<!-- <fb:login-button \n                scope=\"public_profile,email\"\n                onlogin=\"checkLoginState();\">\n            </fb:login-button> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/button/google/google.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/button/google/google.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary social-login-btn social\" (click)=\"do(null)\" href=\"javascript:;\"><i class=\"fab fa-google\"></i></a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/button/signin/signin.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/button/signin/signin.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"loading == false\" [class]=\"classes\" [ngClass]=\"{ 'button-disabled': hidden }\" (click)=\"doLogin()\" ><ng-content></ng-content></button>\n<app-loading [center]=\"false\" *ngIf=\"loading\"></app-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/button/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/button/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"loading == false\" [class]=\"classes\" [ngClass]=\"{ 'button-disabled': hidden }\" (click)=\"doRegister()\"><ng-content></ng-content></button>\n<app-loading *ngIf=\"loading\"></app-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/carousel/carousel.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/carousel/carousel.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" #carouselExampleIndicators class=\"carousel slide\" [attr.data-ride]=\"dataRide\" [attr.data-interval]=\"dataInterval\">\n    <ol class=\"carousel-indicators\" #indicator style=\"position: fixed;\"  [ngStyle]=\"{ 'bottom': indicatorBottom }\">\n      <li *ngFor=\"let content of contents; let i = index\" [attr.data-slide-to]=\"i\" [ngClass]=\"{ 'active': i == startsWith }\" [attr.data-target]=\"disableControls ? '' : '#carouselExampleIndicators'\"></li>\n    </ol>\n    <div class=\"carousel-inner\" #items>\n      <div class=\"carousel-item\">\n        <ng-content select=\".page1\"></ng-content>\n      </div>\n      <div class=\"carousel-item\">\n        <ng-content select=\".page2\"></ng-content>\n      </div>\n      <div class=\"carousel-item\">\n        <ng-content select=\".page3\"></ng-content>\n      </div>\n      <div class=\"carousel-item\">\n        <ng-content select=\".page4\"></ng-content>\n      </div>\n      <div class=\"carousel-item\">\n        <ng-content select=\".page5\"></ng-content>\n      </div>\n      <div class=\"carousel-item\">\n        <ng-content select=\".page6\"></ng-content>\n      </div>\n      <div class=\"carousel-item\">\n        <ng-content select=\".page7\"></ng-content>\n      </div>\n      <div class=\"carousel-item\">\n        <ng-content select=\".page8\"></ng-content>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" #previousInput style=\"position: fixed;\" [hidden]=\"true\" (click)=\"fireNext()\" role=\"button\" data-slide=\"prev\"></a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" #nextInput style=\"position: fixed;\" [hidden]=\"true\" (click)=\"fireBack()\" role=\"button\" data-slide=\"next\"></a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/loading/loading.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/loading/loading.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-border text-toppet\" [ngClass]=\"{ 'center-loading': center }\" role=\"status\">\n  <span class=\"sr-only\">Carregando...</span>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/tutorial/tutorial.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/tutorial/tutorial.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tooltip fade bs-tooltip-top\" [ngClass]=\"{ 'show': visible }\" x-placement=\"top\" role=\"tooltip\" style=\"position: absolute; transform: translate3d(155px, 477px, 0px); top: 0px; left: 0px; will-change: transform;\">\n  <div class=\"arrow\" style=\"left: 129px;\"></div>\n  <div class=\"tooltip-inner\">\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h1 class=\"form-signin-heading\" style=\"color: white !important\">{{language.welcome}} <b>{{applicationName}}</b></h1>\n  <br>\n  <app-carousel [indicator-bottom]=\"'9%'\">\n    <small class=\"text-muted page1\">{{language.appDescription1}}</small>\n    <small class=\"text-muted page2\">{{language.appDescription2}}</small>\n    <small class=\"text-muted page3\">{{language.appDescription3}}</small>\n  </app-carousel>\n  <a routerLink=\"/signin\"><button class=\"btn btn-toppet btn-bottom-left btn-lg\" style=\"width: 40% !important;\">{{language.login}}</button></a>\n  <a routerLink=\"/signup\"><button class=\"btn btn-toppet btn-hollow btn-bottom-right btn-lg\" style=\"width: 40% !important;\">{{language.signUp}}</button></a>\n</div>\n"

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, displayName, endpoints, passwordConfig, cordova, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"br.com.toppet","version":"1.0.0","displayName":"TOPPET","endpoints":{"local":"http://localhost:9003","indraLocal":"http://192.168.137.1:9003","home2":"http://192.168.1.3:9003/toppet","home":"http://192.168.1.3:9003","aws":"http://18.228.12.209:9003"},"passwordConfig":{"min":6,"contains":""},"cordova":{"plugins":{"cordova-plugin-device":{},"cordova-plugin-safariviewcontroller":{"API_KEY_FOR_ANDROID":"AIzaSyCktbQb6g7SX4lIgecyzsrz0sMzl3660nU","API_KEY_FOR_IOS":"AIzaSyAaRDbFBx5gubzyW9_LE6KCFM3vE80hQw8","PLAY_SERVICES_VERSION":"15.0.1","ANDROID_SUPPORT_V4_VERSION":"27.+","LOCATION_WHEN_IN_USE_DESCRIPTION":"This app wants to get your location while this app runs only.","LOCATION_ALWAYS_USAGE_DESCRIPTION":"This app wants to get your location always, even this app runs in background."},"cordova-plugin-googlemaps":{"API_KEY_FOR_ANDROID":"AIzaSyCktbQb6g7SX4lIgecyzsrz0sMzl3660nU","API_KEY_FOR_IOS":"AIzaSyAaRDbFBx5gubzyW9_LE6KCFM3vE80hQw8","PLAY_SERVICES_VERSION":"15.0.1","ANDROID_SUPPORT_V4_VERSION":"27.+","LOCATION_WHEN_IN_USE_DESCRIPTION":"This app wants to get your location while this app runs only.","LOCATION_ALWAYS_USAGE_DESCRIPTION":"This app wants to get your location always, even this app runs in background."},"cordova-plugin-inappbrowser":{},"cordova-plugin-geolocation":{},"cordova-plugin-whitelist":{},"cordova-plugin-facebook4":{"APP_ID":"389609115207477","APP_NAME":"Toppet","FACEBOOK_HYBRID_APP_EVENTS":"false","FACEBOOK_ANDROID_SDK_VERSION":"4.40.0"},"cordova-plugin-camera":{},"cordova-sqlite-storage":{},"cordova-plugin-listpicker":{}},"platforms":["android"]},"scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^8.0.0","@angular/cdk":"^8.0.0","@angular/common":"~8.0.0","@angular/compiler":"~8.0.0","@angular/core":"~8.0.0","@angular/forms":"~8.0.0","@angular/material":"^8.0.0","@angular/platform-browser":"~8.0.0","@angular/platform-browser-dynamic":"~8.0.0","@angular/router":"~8.0.0","@types/jquery":"^3.3.29","ansi-escapes":"^3.2.0","braces":"^2.3.2","browserify-zlib":"^0.2.0","cached-path-relative":"^1.0.2","cordova-android":"^7.1.4","cordova-browser":"^5.0.4","cordova-plugin-camera":"4.0.3","cordova-plugin-device":"2.0.2","cordova-plugin-facebook4":"4.2.1","cordova-plugin-geolocation":"4.0.1","cordova-plugin-googlemaps":"~2.5.2","cordova-plugin-inappbrowser":"~3.0.0","cordova-plugin-listpicker":"2.2.2","cordova-plugin-local-notifications":"1.0.0","cordova-plugin-safariviewcontroller":"~1.5.4","cordova-plugin-whitelist":"1.3.3","cordova-sqlite-storage":"3.2.0","core-js":"^2.5.4","hammerjs":"^2.0.8","jquery":"^3.3.1","lodash":"^4.17.11","luxon":"^1.16.0","ngx-bootstrap":"^3.2.0","ngx-material-timepicker":"^3.1.0","ngx-modialog":"^5.0.1","phonegap":"^8.2.2","popper.js":"^1.15.0","rxjs":"~6.4.0","stream":"0.0.2","tls":"0.0.1","tslib":"^1.9.0","webpack":"^4.29.6","zone.js":"~0.9.1"},"devDependencies":{"@angular-devkit/build-angular":"~0.800.0","@angular/cli":"~8.0.1","@angular/compiler-cli":"~8.0.0","@angular/language-service":"~8.0.0","@types/node":"~8.9.4","@types/jasmine":"~3.3.8","@types/jasminewd2":"~2.0.3","codelyzer":"^5.0.0","jasmine-core":"~3.4.0","jasmine-spec-reporter":"~4.2.1","karma":"~4.1.0","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~2.0.1","karma-jasmine-html-reporter":"^1.4.0","protractor":"~5.4.0","ts-node":"~7.0.0","tslint":"~5.15.0","typescript":"~3.4.3"}};

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application */ "./src/app/application.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/menuService */ "./src/app/navbar/menuService.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session/session.service */ "./src/app/session/session.service.ts");
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
                _this.session.zone.run(function () { return _this.router.navigateByUrl(_application__WEBPACK_IMPORTED_MODULE_3__["WELCOME_PAGE"]); });
            }
        };
        this.title = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].name;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
    ], AppComponent.prototype, "menu", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], _navbar_menuService__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
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
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _templates_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/tutorial/tutorial.component */ "./src/app/templates/tutorial/tutorial.component.ts");
/* harmony import */ var _templates_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/loading/loading.component */ "./src/app/templates/loading/loading.component.ts");
/* harmony import */ var _templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/button/signup/signup.component */ "./src/app/templates/button/signup/signup.component.ts");
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/services */ "./src/app/service/services.ts");
/* harmony import */ var _navbar_menuService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/menuService */ "./src/app/navbar/menuService.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _cordova_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cordova.service */ "./src/app/cordova.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-modialog */ "./node_modules/ngx-modialog/fesm5/ngx-modialog.js");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "./node_modules/ngx-modialog/plugins/bootstrap/fesm5/ngx-modialog-plugins-bootstrap.js");
/* harmony import */ var _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./socialNetwork/socialNetworkServices */ "./src/app/socialNetwork/socialNetworkServices.ts");
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./database/database */ "./src/app/database/database.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./appointments/appointments.component */ "./src/app/appointments/appointments.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");
/* harmony import */ var _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./templates/alert/alert.component */ "./src/app/templates/alert/alert.component.ts");
/* harmony import */ var _templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./templates/button/signin/signin.component */ "./src/app/templates/button/signin/signin.component.ts");
/* harmony import */ var _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./templates/button/facebook/facebook.component */ "./src/app/templates/button/facebook/facebook.component.ts");
/* harmony import */ var _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./templates/button/google/google.component */ "./src/app/templates/button/google/google.component.ts");
/* harmony import */ var _templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./templates/carousel/carousel.component */ "./src/app/templates/carousel/carousel.component.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








































var AppModule = /** @class */ (function () {
    function AppModule(dateAdapter) {
        this.dateAdapter = dateAdapter;
        dateAdapter.setLocale('en-in'); // DD/MM/YYYY
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_38__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_27__["WelcomeComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_26__["MapsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_32__["AlertComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterUserComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_18__["PetsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_18__["PetInfoComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_18__["PetTypeComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_18__["PetPictureComponent"],
                _templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_33__["SignInComponent"],
                _templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
                _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_34__["FacebookComponent"],
                _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_35__["GoogleComponent"],
                _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_30__["AppointmentsComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_18__["BreedPickerComponent"],
                _templates_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_18__["PetsWizardComponent"],
                _templates_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__["TutorialComponent"],
                _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_30__["AppointmentsWizardComponent"],
                _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_30__["AppointmentsThumbComponent"],
                _templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_36__["CarouselComponent"],
            ],
            entryComponents: [
                _templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_33__["SignInComponent"],
                _templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
                _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_34__["FacebookComponent"],
                _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_35__["GoogleComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_18__["BreedPickerComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_modialog__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(),
                ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_20__["BootstrapModalModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatIconModule"],
                ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_37__["NgxMaterialTimepickerModule"],
            ],
            providers: [
                _cordova_service__WEBPACK_IMPORTED_MODULE_16__["CordovaService"],
                _database_database__WEBPACK_IMPORTED_MODULE_22__["LocalDatabaseService"],
                _service_services__WEBPACK_IMPORTED_MODULE_11__["UserApiService"],
                _service_services__WEBPACK_IMPORTED_MODULE_11__["PetApiService"],
                _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_21__["FacebookService"],
                _socialNetwork_socialNetworkServices__WEBPACK_IMPORTED_MODULE_21__["GoogleService"],
                _service_services__WEBPACK_IMPORTED_MODULE_11__["InfoService"],
                _service_services__WEBPACK_IMPORTED_MODULE_11__["AppointmentsApiService"],
                _service_services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _navbar_menuService__WEBPACK_IMPORTED_MODULE_12__["MenuService"],
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _utils__WEBPACK_IMPORTED_MODULE_31__["DateFormat"] },
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuardService"],
                _session_session_service__WEBPACK_IMPORTED_MODULE_29__["SessionService"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
                ngx_modialog__WEBPACK_IMPORTED_MODULE_19__["Overlay"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__["MatDatepicker"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatInput"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatIcon"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatSuffix"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]])
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

module.exports = ".float{\n\tposition:fixed;\n\twidth:60px;\n\theight:60px;\n\tbottom:40px;\n\tright:40px;\n\t/* background-color:#0C9; */\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n\tbox-shadow: 2px 2px 3px #999;\n}\n\n.my-float{\n\tmargin-top:22px;\n}\n\n.event-list {\n\tlist-style: none;\n\tfont-family: 'Lato', sans-serif;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n.event-list > li {\n\tbackground-color: rgb(255, 255, 255);\n\tbox-shadow: 0px 0px 5px rgb(51, 51, 51);\n\tbox-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);\n\tpadding: 0px;\n\tmargin: 0px 0px 20px;\n}\n\n.event-list > li > time {\n\tdisplay: inline-block;\n\twidth: 100%;\n\tcolor: rgb(255, 255, 255);\n\tbackground-color: rgb(197, 44, 102);\n\tpadding: 5px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n}\n\n.event-list > li:nth-child(even) > time {\n\tbackground-color: rgb(165, 82, 167);\n}\n\n.event-list > li > time > span {\n\tdisplay: none;\n}\n\n.event-list > li > time > .day {\n\tdisplay: block;\n\tfont-size: 58pt;\n\tfont-weight: 100;\n\tline-height: 1;\n}\n\n.event-list > li time > .month {\n\tdisplay: block;\n\tfont-size: 20pt;\n\tfont-weight: 950;\n\tline-height: 1;\n}\n\n.event-list > li time > .title {\n\tdisplay: block;\n\tfont-size: 12pt;\n\tfont-weight: 650;\n\tline-height: 1;\n}\n\n.event-list > li > img {\n\twidth: 100%;\n}\n\n.event-list > li > .info {\n\tpadding-top: 5px;\n\ttext-align: center;\n}\n\n.event-list > li > .info > .title {\n\tfont-size: 17pt;\n\tfont-weight: 700;\n\tmargin: 0px;\n}\n\n.event-list > li > .info > .desc {\n\tfont-size: 13pt;\n\tfont-weight: 300;\n\tmargin: 0px;\n}\n\n.event-list > li > .info > ul,\n.event-list > li > .social > ul {\n\tdisplay: table;\n\tlist-style: none;\n\tmargin: 10px 0px 0px;\n\tpadding: 0px;\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.event-list > li > .social > ul {\n\tmargin: 0px;\n}\n\n.event-list > li > .info > ul > li,\n.event-list > li > .social > ul > li {\n\tdisplay: table-cell;\n\tcursor: pointer;\n\tcolor: rgb(30, 30, 30);\n\tfont-size: 11pt;\n\tfont-weight: 300;\n\tpadding: 3px 0px;\n}\n\n.event-list > li > .info > ul > li > a {\n\tdisplay: block;\n\twidth: 100%;\n\tcolor: rgb(30, 30, 30);\n\ttext-decoration: none;\n}\n\n.event-list > li > .social > ul > li {    \n\tpadding: 0px;\n}\n\n.event-list > li > .social > ul > li > a {\n\tpadding: 3px 0px;\n}\n\n.event-list > li > .info > ul > li:hover,\n.event-list > li > .social > ul > li:hover {\n\tcolor: rgb(30, 30, 30);\n\tbackground-color: rgb(200, 200, 200);\n}\n\n/* @media (min-width: 768px) { */\n\n.event-list > li {\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 120px;\n\t\tpadding: 0px;\n\t}\n\n.event-list > li > time,\n\t.event-list > li > img  {\n\t\tdisplay: inline-block;\n\t}\n\n.event-list > li > time,\n\t.event-list > li > img {\n\t\twidth: 120px;\n\t\tfloat: left;\n\t}\n\n.event-list > li > .info {\n\t\tbackground-color: rgb(245, 245, 245);\n\t\toverflow: hidden;\n\t}\n\n.event-list > li > time,\n\t.event-list > li > img {\n\t\twidth: 120px;\n\t\theight: 120px;\n\t\tpadding: 0px;\n\t\tmargin: 0px;\n\t}\n\n.event-list > li > .info {\n\t\tposition: relative;\n\t\theight: 120px;\n\t\ttext-align: left;\n\t\tpadding-right: 40px;\n\t}\n\n.event-list > li > .info > .title, \n\t.event-list > li > .info > .desc {\n\t\tpadding: 0px 10px;\n\t}\n\n.event-list > li > .info > ul {\n\t\tposition: absolute;\n\t\tleft: 0px;\n\t\tbottom: 0px;\n\t}\n\n.event-list > li > .social {\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tright: 0px;\n\t\tdisplay: block;\n\t\twidth: 40px;\n\t}\n\n.event-list > li > .social > ul {\n\t\tborder-left: 1px solid rgb(230, 230, 230);\n\t}\n\n.event-list > li > .social > ul > li {\t\t\t\n\t\tdisplay: block;\n\t\tpadding: 0px;\n\t}\n\n.event-list > li > .social > ul > li > a {\n\t\tdisplay: block;\n\t\twidth: 40px;\n\t\tpadding: 10px 0px 9px;\n\t}\n\n/* } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztDQUNkLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7Q0FDViwyQkFBMkI7Q0FDM0IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQiwrQkFBK0I7Q0FDL0IsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyx1Q0FBdUM7Q0FDdkMsNkNBQTZDO0NBQzdDLFlBQVk7Q0FDWixvQkFBb0I7QUFDckI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixtQ0FBbUM7Q0FDbkMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7O0FBQ0E7Q0FDQyxtQ0FBbUM7QUFDcEM7O0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjs7QUFDQTs7Q0FFQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLHFCQUFxQjtBQUN0Qjs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTs7Q0FFQyxzQkFBc0I7Q0FDdEIsb0NBQW9DO0FBQ3JDOztBQUVBLGdDQUFnQzs7QUFDL0I7RUFDQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUNBOztFQUVDLHFCQUFxQjtDQUN0Qjs7QUFDQTs7RUFFQyxZQUFZO0VBQ1osV0FBVztDQUNaOztBQUNBO0VBQ0Msb0NBQW9DO0VBQ3BDLGdCQUFnQjtDQUNqQjs7QUFDQTs7RUFFQyxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0NBQ1o7O0FBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7O0FBQ0E7O0VBRUMsaUJBQWlCO0NBQ2xCOztBQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0NBQ1o7O0FBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztDQUNaOztBQUNBO0VBQ0MseUNBQXlDO0NBQzFDOztBQUNBO0VBQ0MsY0FBYztFQUNkLFlBQVk7Q0FDYjs7QUFDQTtFQUNDLGNBQWM7RUFDZCxXQUFXO0VBQ1gscUJBQXFCO0NBQ3RCOztBQUNELE1BQU0iLCJmaWxlIjoic3JjL2FwcC9hcHBvaW50bWVudHMvYXBwb2ludG1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXR7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHR3aWR0aDo2MHB4O1xuXHRoZWlnaHQ6NjBweDtcblx0Ym90dG9tOjQwcHg7XG5cdHJpZ2h0OjQwcHg7XG5cdC8qIGJhY2tncm91bmQtY29sb3I6IzBDOTsgKi9cblx0Y29sb3I6I0ZGRjtcblx0Ym9yZGVyLXJhZGl1czo1MHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0Ym94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbn1cblxuLm15LWZsb2F0e1xuXHRtYXJnaW4tdG9wOjIycHg7XG59XG5cbi5ldmVudC1saXN0IHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0Zm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblx0bWFyZ2luOiAwcHg7XG5cdHBhZGRpbmc6IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYig1MSwgNTEsIDUxKTtcblx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSg1MSwgNTEsIDUxLCAwLjcpO1xuXHRwYWRkaW5nOiAwcHg7XG5cdG1hcmdpbjogMHB4IDBweCAyMHB4O1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IHRpbWUge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCA0NCwgMTAyKTtcblx0cGFkZGluZzogNXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZXZlbnQtbGlzdCA+IGxpOm50aC1jaGlsZChldmVuKSA+IHRpbWUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCA4MiwgMTY3KTtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiB0aW1lID4gc3BhbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gdGltZSA+IC5kYXkge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiA1OHB0O1xuXHRmb250LXdlaWdodDogMTAwO1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbi5ldmVudC1saXN0ID4gbGkgdGltZSA+IC5tb250aCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDIwcHQ7XG5cdGZvbnQtd2VpZ2h0OiA5NTA7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uZXZlbnQtbGlzdCA+IGxpIHRpbWUgPiAudGl0bGUge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxMnB0O1xuXHRmb250LXdlaWdodDogNjUwO1xuXHRsaW5lLWhlaWdodDogMTtcbn1cblxuLmV2ZW50LWxpc3QgPiBsaSA+IGltZyB7XG5cdHdpZHRoOiAxMDAlO1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvIHtcblx0cGFkZGluZy10b3A6IDVweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gLnRpdGxlIHtcblx0Zm9udC1zaXplOiAxN3B0O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRtYXJnaW46IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IC5kZXNjIHtcblx0Zm9udC1zaXplOiAxM3B0O1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRtYXJnaW46IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsLFxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCB7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRtYXJnaW46IDEwcHggMHB4IDBweDtcblx0cGFkZGluZzogMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCB7XG5cdG1hcmdpbjogMHB4O1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gdWwgPiBsaSxcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSB7XG5cdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Y29sb3I6IHJnYigzMCwgMzAsIDMwKTtcblx0Zm9udC1zaXplOiAxMXB0O1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRwYWRkaW5nOiAzcHggMHB4O1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gdWwgPiBsaSA+IGEge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDEwMCU7XG5cdGNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0gXG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGkgeyAgICBcblx0cGFkZGluZzogMHB4O1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpID4gYSB7XG5cdHBhZGRpbmc6IDNweCAwcHg7XG59IFxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gdWwgPiBsaTpob3Zlcixcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaTpob3ZlciB7XG5cdGNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcbn1cblxuLyogQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7ICovXG5cdC5ldmVudC1saXN0ID4gbGkge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdHBhZGRpbmc6IDBweDtcblx0fVxuXHQuZXZlbnQtbGlzdCA+IGxpID4gdGltZSxcblx0LmV2ZW50LWxpc3QgPiBsaSA+IGltZyAge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxuXHQuZXZlbnQtbGlzdCA+IGxpID4gdGltZSxcblx0LmV2ZW50LWxpc3QgPiBsaSA+IGltZyB7XG5cdFx0d2lkdGg6IDEyMHB4O1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHR9XG5cdC5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdH1cblx0LmV2ZW50LWxpc3QgPiBsaSA+IHRpbWUsXG5cdC5ldmVudC1saXN0ID4gbGkgPiBpbWcge1xuXHRcdHdpZHRoOiAxMjBweDtcblx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdHBhZGRpbmc6IDBweDtcblx0XHRtYXJnaW46IDBweDtcblx0fVxuXHQuZXZlbnQtbGlzdCA+IGxpID4gLmluZm8ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0cGFkZGluZy1yaWdodDogNDBweDtcblx0fVx0XG5cdC5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IC50aXRsZSwgXG5cdC5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IC5kZXNjIHtcblx0XHRwYWRkaW5nOiAwcHggMTBweDtcblx0fVxuXHQuZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDBweDtcblx0XHRib3R0b206IDBweDtcblx0fVxuXHQuZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMHB4O1xuXHRcdHJpZ2h0OiAwcHg7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDQwcHg7XG5cdH1cblx0LmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCB7XG5cdFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XG5cdH1cblx0LmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpIHtcdFx0XHRcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRwYWRkaW5nOiAwcHg7XG5cdH1cblx0LmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpID4gYSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDQwcHg7XG5cdFx0cGFkZGluZzogMTBweCAwcHggOXB4O1xuXHR9XG4vKiB9ICovIl19 */"

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
                        _this.appointments.push(_entity_entities__WEBPACK_IMPORTED_MODULE_4__["Appointment"].newInstance(result.date, app));
                    });
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
            template: __webpack_require__(/*! raw-loader!./appointments.component.html */ "./node_modules/raw-loader/index.js!./src/app/appointments/appointments.component.html"),
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
    AppointmentsThumbComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loading = true;
        if (!_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(this.user)) {
            if (this.session.getCurrentUser() == undefined) {
                this.loading = false;
                return;
            }
            this.api.getByUser(this.session.getCurrentUser()).subscribe(function (result) {
                console.log(result);
                _this.loading = false;
                if (result && result.sid) {
                    if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].SUCCESS) {
                        result.data.forEach(function (app) {
                            _this.appointments.push(_entity_entities__WEBPACK_IMPORTED_MODULE_4__["Appointment"].newInstance(result.date, app));
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
            template: __webpack_require__(/*! raw-loader!./appointments.thumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/appointments/appointments.thumb.component.html"),
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
        _this.workingday = 0;
        _this.finish = false;
        _this.currentDate = new Date();
        return _this;
    }
    AppointmentsWizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appointment = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["Appointment"](this.currentDate);
        this.loading = true;
        var types = this.api.getTypes();
        this.frequency = _entity_system__WEBPACK_IMPORTED_MODULE_1__["Domain"].fromEnum(_entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"], this.language.getAppointmentOften);
        this.workingdays = _entity_system__WEBPACK_IMPORTED_MODULE_1__["Domain"].fromEnum(_entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekday"], this.language.getWeekday);
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
        this.session.authenticationService.infoService.doPing().subscribe(function (result) {
            if (result.code == _entity_system__WEBPACK_IMPORTED_MODULE_1__["ReturnCode"].SUCCESS) {
                _this.currentDate = new Date(result.date);
                _this.appointment = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["Appointment"](_this.currentDate);
                _this.date = _this.currentDate;
            }
        });
        this.date = this.currentDate;
    };
    AppointmentsWizardComponent.prototype.save = function () {
        var _this = this;
        if (this.loading)
            return;
        try {
            this.appointment.date = this.date != undefined ? this.date : this.currentDate;
            if (_utils__WEBPACK_IMPORTED_MODULE_10__["StringUtils"].isEmpty(this.time)) {
                this.time = this.currentDate.getHours() + ":" + this.currentDate.getMinutes();
            }
            this.loading = true;
            var often = _entity_system__WEBPACK_IMPORTED_MODULE_1__["Domain"].getDomainByValue(this.often, this.frequency);
            this.appointment.frequencyType = _utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isEmpty(often) ? _entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"].ONCE : often.enumValue;
            if (this.appointment.frequencyType == _entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"].WEEKDAY) {
                this.appointment.date = new Date("2-27-1991");
                for (var i = 0; i < 7; i++) {
                    if (Object(_entity_system__WEBPACK_IMPORTED_MODULE_1__["getWeekday"])(this.appointment.date) != this.workingday) {
                        this.appointment.date = Object(_entity_system__WEBPACK_IMPORTED_MODULE_1__["addDays"])(this.appointment.date, 1);
                    }
                }
                console.log(this.language.getWeekday(Object(_entity_system__WEBPACK_IMPORTED_MODULE_1__["getWeekday"])(this.appointment.date)));
            }
            if (this.appointment.appointmentType == undefined) {
                this.appointment.appointmentType = new _entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentType"]();
            }
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
        }
        catch (e) {
            this.loading = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"])
    ], AppointmentsWizardComponent.prototype, "carouselComponent", void 0);
    AppointmentsWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-appointments-wizard',
            template: __webpack_require__(/*! raw-loader!./appointments.wizard.component.html */ "./node_modules/raw-loader/index.js!./src/app/appointments/appointments.wizard.component.html"),
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

/***/ "./src/app/appointments/appointments.wizard.component.css":
/*!****************************************************************!*\
  !*** ./src/app/appointments/appointments.wizard.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .form-input {\n    display: block;\n    width: 100%;\n    height: calc(1.5em + .75rem + 2px);\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: .25rem;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n} */\n\n/* contact list */\n\n/* @media (max-width: 767px) {\n    .visible-xs {\n        display: inline-block !important;\n    }\n    .block {\n        display: block !important;\n        width: 100%;\n        height: 1px !important;\n    }\n} */\n\n#back-to-bootsnipp {\n    position: fixed;\n    top: 10px; right: 10px;\n}\n\n.c-search > .form-control {\n   border-radius: 0px;\n   border-width: 0px;\n   border-bottom-width: 1px;\n   font-size: 1.3em;\n   padding: 12px 12px;\n   height: 44px;\n   outline: none !important;\n}\n\n.c-search > .form-control:focus {\n    outline:0px !important;\n    -webkit-appearance:none;\n    box-shadow: none;\n}\n\n.c-search > .input-group-btn .btn {\n   border-radius: 0px;\n   border-width: 0px;\n   border-left-width: 1px;\n   border-bottom-width: 1px;\n   height: 44px;\n}\n\n.c-list {\n    padding: 0px;\n    min-height: 44px;\n}\n\n.title {\n    display: inline-block;\n    font-size: 1.7em;\n    font-weight: bold;\n    padding: 5px 15px;\n    color: white;\n}\n\nul.c-controls {\n    list-style: none;\n    margin: 0px;\n    min-height: 44px;\n}\n\nul.c-controls li {\n    margin-top: 8px;\n    float: left;\n}\n\nul.c-controls li a {\n    font-size: 1.7em;\n    padding: 11px 10px 6px;   \n}\n\nul.c-controls li a i {\n    min-width: 24px;\n    text-align: center;\n}\n\nul.c-controls li a:hover {\n    background-color: rgba(51, 51, 51, 0.2);\n}\n\n.c-toggle {\n    font-size: 1.7em;\n}\n\n.name {\n    font-size: 1.7em;\n    font-weight: 700;\n}\n\n.c-info {\n    padding: 5px 10px;\n    font-size: 1.25em;\n}\n\n.img-circle {\n    border-radius: 50%;\n}\n\n.img-responsive {\n    display: block;\n    max-width: 100%;\n    height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy53aXphcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSCxpQkFBaUI7O0FBRWpCOzs7Ozs7Ozs7R0FTRzs7QUFDSDtJQUNJLGVBQWU7SUFDZixTQUFTLEVBQUUsV0FBVztBQUMxQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsd0JBQXdCO0dBQ3hCLGdCQUFnQjtHQUNoQixrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLHdCQUF3QjtBQUMzQjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0dBQ0csa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixzQkFBc0I7R0FDdEIsd0JBQXdCO0dBQ3hCLFlBQVk7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHBvaW50bWVudHMvYXBwb2ludG1lbnRzLndpemFyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmZvcm0taW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xufSAqL1xuXG4vKiBjb250YWN0IGxpc3QgKi9cblxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnZpc2libGUteHMge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJsb2NrIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSAqL1xuI2JhY2stdG8tYm9vdHNuaXBwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxMHB4OyByaWdodDogMTBweDtcbn1cblxuLmMtc2VhcmNoID4gLmZvcm0tY29udHJvbCB7XG4gICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICBib3JkZXItd2lkdGg6IDBweDtcbiAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gICBoZWlnaHQ6IDQ0cHg7XG4gICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYy1zZWFyY2ggPiAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBvdXRsaW5lOjBweCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTpub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYy1zZWFyY2ggPiAuaW5wdXQtZ3JvdXAtYnRuIC5idG4ge1xuICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgaGVpZ2h0OiA0NHB4O1xufVxuXG4uYy1saXN0IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWluLWhlaWdodDogNDRweDtcbn1cbi50aXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxudWwuYy1jb250cm9scyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xufVxuXG51bC5jLWNvbnRyb2xzIGxpIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbnVsLmMtY29udHJvbHMgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBwYWRkaW5nOiAxMXB4IDEwcHggNnB4OyAgIFxufVxudWwuYy1jb250cm9scyBsaSBhIGkge1xuICAgIG1pbi13aWR0aDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnVsLmMtY29udHJvbHMgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjIpO1xufVxuXG4uYy10b2dnbGUge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG59XG5cbi5uYW1lIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jLWluZm8ge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4uaW1nLWNpcmNsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW1nLXJlc3BvbnNpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59Il19 */"

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
                    'CREATE TABLE IF NOT EXISTS pet  (id integer primary key autoincrement,  name text)',
                    'CREATE TABLE IF NOT EXISTS notification (id integer primary key autoincrement, description text, appointmentType integer, viewed boolean)'
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
    LocalDatabaseService.prototype.createNotification = function (appointment) {
        var insertQuery = "INSERT INTO notification (description, appo, appointmentType, viewed) VALUES ('";
        var insertNew = function (tx) {
            tx.executeSql(insertQuery + appointment.description + "'," + appointment.appointmentType + ", false)");
        };
        this.database.transaction(insertNew, this.error, this.success);
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
/*! exports provided: Rating, Bookmark, User, State, Address, PetServiceType, ServiceType, Appointment, Month, AppointmentType, AppointmentExecutionFrequency, PetService, Pet, PetType, Breed, Notification */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ "./src/app/entity/system.ts");
/* harmony import */ var _language_Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/Language */ "./src/app/language/Language.ts");


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
    function Appointment(today) {
        this.today = today;
    }
    Appointment.newInstance = function (date, data) {
        var a = new Appointment(new Date(date));
        a.id = data.id;
        a.date = new Date(data.date);
        a.appointmentType = new AppointmentType();
        a.appointmentType.id = data.appointmentType.id;
        a.appointmentType.description = data.appointmentType.description;
        a.description = data.description;
        ;
        a.frequencyType = AppointmentExecutionFrequency[data.frequencyType];
        a.pet = data.pet;
        return a;
    };
    Object.defineProperty(Appointment.prototype, "alarm", {
        get: function () {
            var dt = this.today;
            switch (this.frequencyType) {
                case AppointmentExecutionFrequency.DAILY_BASIS:
                    dt.setHours(this.today.getHours());
                    dt.setMinutes(this.today.getMinutes());
                    return dt;
                case AppointmentExecutionFrequency.WEEKDAY:
                    var weekday = Object(_system__WEBPACK_IMPORTED_MODULE_0__["getWeekday"])(this.date);
                    for (var i = 0; i < 7; i++) {
                        if (Object(_system__WEBPACK_IMPORTED_MODULE_0__["getWeekday"])(dt) != weekday) {
                            dt = Object(_system__WEBPACK_IMPORTED_MODULE_0__["addDays"])(dt, 1);
                        }
                    }
                    dt.setHours(this.date.getHours());
                    dt.setMinutes(this.date.getMinutes());
                    return dt;
                case AppointmentExecutionFrequency.WEEKEND:
                    for (var i = 0; i < 7; i++) {
                        if (Object(_system__WEBPACK_IMPORTED_MODULE_0__["getWeekday"])(dt) != _system__WEBPACK_IMPORTED_MODULE_0__["Weekday"].SATURDAY && Object(_system__WEBPACK_IMPORTED_MODULE_0__["getWeekday"])(dt) != _system__WEBPACK_IMPORTED_MODULE_0__["Weekday"].SUNDAY) {
                            dt = Object(_system__WEBPACK_IMPORTED_MODULE_0__["addDays"])(dt, 1);
                        }
                    }
                    dt.setHours(this.date.getHours());
                    dt.setMinutes(this.date.getMinutes());
                    return dt;
            }
            return this.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "day", {
        get: function () {
            return this.alarm.getUTCDate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "month", {
        get: function () {
            return Month[Object.keys(Month)[this.alarm.getUTCMonth()]];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "year", {
        get: function () {
            return this.alarm.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "time", {
        get: function () {
            return this.alarm.getTime();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "fulldate", {
        get: function () {
            return (this.alarm.getUTCMonth() + 1) + "-" + this.day + "-" + this.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "weekday", {
        get: function () {
            return new _language_Language__WEBPACK_IMPORTED_MODULE_1__["LanguageService"]().getWeekday(Object(_system__WEBPACK_IMPORTED_MODULE_0__["getWeekday"])(this.alarm));
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
    AppointmentExecutionFrequency[AppointmentExecutionFrequency["WEEKDAY"] = 2] = "WEEKDAY";
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

var Notification = /** @class */ (function () {
    function Notification() {
    }
    return Notification;
}());



/***/ }),

/***/ "./src/app/entity/system.ts":
/*!**********************************!*\
  !*** ./src/app/entity/system.ts ***!
  \**********************************/
/*! exports provided: ReturnCode, Item, Domain, Weekday, getWeekday, addDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnCode", function() { return ReturnCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weekday", function() { return Weekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekday", function() { return getWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
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
        var domain;
        domains.forEach(function (d) {
            if (d.value.toString() === value.toString()) {
                domain = d;
                return domain;
            }
        });
        return domain;
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

var Weekday;
(function (Weekday) {
    Weekday[Weekday["SUNDAY"] = 0] = "SUNDAY";
    Weekday[Weekday["MONDAY"] = 1] = "MONDAY";
    Weekday[Weekday["TUESDAY"] = 2] = "TUESDAY";
    Weekday[Weekday["WEDNESDAY"] = 3] = "WEDNESDAY";
    Weekday[Weekday["THURSDAY"] = 4] = "THURSDAY";
    Weekday[Weekday["FRIDAY"] = 5] = "FRIDAY";
    Weekday[Weekday["SATURDAY"] = 6] = "SATURDAY";
})(Weekday || (Weekday = {}));
var getWeekday = function (date) {
    return Weekday[date.toLocaleString('en-us', { weekday: 'long' }).toUpperCase()];
};
var addDays = function (date, days) {
    //console.log('adding ' + days + ' days');
    //console.log(date);
    date.setDate(date.getDate() + days);
    //console.log(date);
    return date;
};


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

module.exports = ".index-icon {\n    margin: 5px;\n    width: 22%;\n    font-size: 295%;\n}\n\n.button-group {\n    width: 100%;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    white-space: nowrap;\n    bottom: 2%;\n    position: fixed;\n    left: 2.5%;\n}\n\n.buttons {\n    max-width: 130%;\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5kZXgtaWNvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2lkdGg6IDIyJTtcbiAgICBmb250LXNpemU6IDI5NSU7XG59XG5cbi5idXR0b24tZ3JvdXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3R0b206IDIlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAyLjUlO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgbWF4LXdpZHRoOiAxMzAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentsThumbComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentsThumbComponent"])
    ], HomeComponent.prototype, "appointmentsComponent", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
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
        else if (often == _entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"].WEEKDAY) {
            return "Durante a Semana";
        }
        else {
            return this.getAppointmentOften(_entity_entities__WEBPACK_IMPORTED_MODULE_4__["AppointmentExecutionFrequency"].ONCE);
        }
    };
    LanguageService.prototype.getWeekday = function (work) {
        if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekday"].MONDAY) {
            return "Segunda-feira";
        }
        else if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekday"].TUESDAY) {
            return "Terça-feira";
        }
        else if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekday"].WEDNESDAY) {
            return "Quarta-feira";
        }
        else if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekday"].THURSDAY) {
            return "Quinta-feira";
        }
        else if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekday"].FRIDAY) {
            return "Sexta-feira";
        }
        else if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekday"].SATURDAY) {
            return "Sábado";
        }
        else if (work == _entity_system__WEBPACK_IMPORTED_MODULE_1__["Weekday"].SUNDAY) {
            return "Domingo";
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"])
    ], LoginComponent.prototype, "alert", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_3__["FacebookComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_3__["FacebookComponent"])
    ], LoginComponent.prototype, "facebook", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_2__["GoogleComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_2__["GoogleComponent"])
    ], LoginComponent.prototype, "google", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"])
    ], LoginComponent.prototype, "signin", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
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

module.exports = ".map-container {\n    height: 100%;\n}\n.Location__title{\n    padding-left: 10px;\n    padding-right: 10px;\n}\n#map_canvas {\n    height: 100% !important;\n    width: 100% !important;\n    top: 0;\n    left: 0;\n    position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9tYXBzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWFwcy9tYXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLkxvY2F0aW9uX190aXRsZXtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbiNtYXBfY2FudmFzIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiJdfQ== */"

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
            template: __webpack_require__(/*! raw-loader!./maps.component.html */ "./node_modules/raw-loader/index.js!./src/app/maps/maps.component.html"),
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

module.exports = "mat-navbar-container {\n    width: 100% !important;\n    height: calc(100vh - 64px) !important;\n}\n\nmat-navbar {\n    background-color: blue !important;\n}\n\ndiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-menu {\n    position: fixed;\n    width: 100%; \n    z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LW5hdmJhci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCkgIWltcG9ydGFudDtcbn1cblxubWF0LW5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xufVxuICAgIFxuZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLW1lbnUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgei1pbmRleDogMTAwMDtcbn0iXX0= */"

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
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
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

/***/ "./src/app/pets/pets.component.css":
/*!*****************************************!*\
  !*** ./src/app/pets/pets.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-float{\n\tmargin-top:22px;\n}\n\nsection .section-title {\n    text-align: center;\n    color: white;\n    margin-bottom: 50px;\n    text-transform: uppercase;\n}\n\n#team .card {\n    border: none;\n    background: none;\n}\n\n.frontside {\n    position: relative;\n    z-index: 2;\n    margin-bottom: 10px;\n    /* opacity: 0.7;\n    filter: alpha(opacity=70);\n    background-color: white; */\n}\n\n.frontside .card{\n    min-height: 20%;\n}\n\n.frontside .card .card-title{\n    color: white !important;\n}\n\n.frontside .card .card-body img {\n    width: 38%;\n    height: 70%;\n    border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25COzs4QkFFMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wZXRzL3BldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1mbG9hdHtcblx0bWFyZ2luLXRvcDoyMnB4O1xufVxuXG5zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3RlYW0gLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uZnJvbnRzaWRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC8qIG9wYWNpdHk6IDAuNztcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xufVxuXG4uZnJvbnRzaWRlIC5jYXJke1xuICAgIG1pbi1oZWlnaHQ6IDIwJTtcbn1cblxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC10aXRsZXtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC1ib2R5IGltZyB7XG4gICAgd2lkdGg6IDM4JTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

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

















//import { ContextMenuComponent } from '../lib/contextmenu/contextMenu.component';
var PetsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PetsComponent, _super);
    function PetsComponent(api, session, router, activatedRoute, cordova) {
        var _this = _super.call(this, session) || this;
        _this.api = api;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.cordova = cordova;
        _this.menuEntries = [];
        //@ViewChild(ContextMenuComponent, { static: true }) public basicMenu: ContextMenuComponent;
        _this.items = [
            { name: 'John', otherProperty: 'Foo' },
            { name: 'Joe', otherProperty: 'Bar' }
        ];
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_templates_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_3__["TutorialComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_3__["TutorialComponent"])
    ], PetsComponent.prototype, "tutorialComponent", void 0);
    PetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-pets',
            template: __webpack_require__(/*! raw-loader!./pets.component.html */ "./node_modules/raw-loader/index.js!./src/app/pets/pets.component.html"),
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
            template: __webpack_require__(/*! raw-loader!./pets.type.component.html */ "./node_modules/raw-loader/index.js!./src/app/pets/pets.type.component.html"),
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])("modalBody", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreedPickerComponent.prototype, "modalBody", void 0);
    BreedPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-pets-breeds',
            template: __webpack_require__(/*! raw-loader!./pets.breeds.component.html */ "./node_modules/raw-loader/index.js!./src/app/pets/pets.breeds.component.html"),
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"])
    ], PetInfoComponent.prototype, "alert", void 0);
    PetInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-pets-info',
            template: __webpack_require__(/*! raw-loader!./pets.info.component.html */ "./node_modules/raw-loader/index.js!./src/app/pets/pets.info.component.html"),
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
            template: __webpack_require__(/*! raw-loader!./pets.picture.component.html */ "./node_modules/raw-loader/index.js!./src/app/pets/pets.picture.component.html")
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(PetTypeComponent, { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", PetTypeComponent)
    ], PetsWizardComponent.prototype, "petTypeComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(PetInfoComponent, { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", PetInfoComponent)
    ], PetsWizardComponent.prototype, "petInfoComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(PetPictureComponent, { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", PetPictureComponent)
    ], PetsWizardComponent.prototype, "petPictureComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"])
    ], PetsWizardComponent.prototype, "carouselComponent", void 0);
    PetsWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-pets-wizard',
            template: __webpack_require__(/*! raw-loader!./pets.wizard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pets/pets.wizard.component.html")
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

module.exports = ".input-group-date {\n    background-color: #563d7c;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXRzLmluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0cy5pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAtZGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2M2Q3Yztcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pets/pets.picker.component.css":
/*!************************************************!*\
  !*** ./src/app/pets/pets.picker.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-list {\n    list-style: none;\n    margin: 0px;\n    padding: 0px;\n}\n.event-list > li {\n    background-color: rgb(255, 255, 255);\n    box-shadow: 0px 0px 5px rgb(51, 51, 51);\n    box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);\n    padding: 0px;\n    margin: 0px 0px 20px;\n}\n.event-list > li > .icon {\n    display: inline-block;\n    width: 100%;\n    color: rgb(255, 255, 255);\n    background-color: rgb(197, 44, 102);\n    padding: 5px;\n    text-align: center;\n    font-size: 370%;\n}\n.event-list > li:nth-child(even) > .icon {\n    background-color: rgb(165, 82, 167);\n}\n.event-list > li > .icon > span {\n    display: none;\n}\n.event-list > li > img {\n    width: 100%;\n}\n.event-list > li > .info {\n    padding-top: 5px;\n    text-align: center;\n}\n.event-list > li > .info > .title {\n    font-size: 17pt;\n    font-weight: 700;\n    margin: 0px;\n}\n.event-list > li > .info > .desc {\n    font-size: 13pt;\n    font-weight: 300;\n    margin: 0px;\n}\n.event-list > li > .info > ul,\n.event-list > li > .social > ul {\n    display: table;\n    list-style: none;\n    margin: 10px 0px 0px;\n    padding: 0px;\n    width: 100%;\n    text-align: center;\n}\n.event-list > li > .social > ul {\n    margin: 0px;\n}\n.event-list > li > .info > ul > li,\n.event-list > li > .social > ul > li {\n    display: table-cell;\n    cursor: pointer;\n    color: rgb(30, 30, 30);\n    font-size: 11pt;\n    font-weight: 300;\n    padding: 3px 0px;\n}\n.event-list > li > .info > ul > li > a {\n    display: block;\n    width: 100%;\n    color: rgb(30, 30, 30);\n    text-decoration: none;\n}\n.event-list > li > .social > ul > li {    \n    padding: 0px;\n}\n.event-list > li > .social > ul > li > a {\n    padding: 3px 0px;\n}\n.event-list > li > .info > ul > li:hover,\n.event-list > li > .social > ul > li:hover {\n    color: rgb(30, 30, 30);\n    background-color: rgb(200, 200, 200);\n}\n.event-list > li {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 93px;\n    padding: 0px;\n}\n.event-list > li > .icon,\n.event-list > li > img  {\n    display: inline-block;\n}\n.event-list > li > .icon,\n.event-list > li > img {\n    width: 93px;\n    float: left;\n}\n.event-list > li > .info {\n    background-color: rgb(245, 245, 245);\n    overflow: hidden;\n}\n.event-list > li > .icon,\n.event-list > li > img {\n    width: 93px;\n    height: 93px;\n    padding: 0px;\n    margin: 0px;\n}\n.event-list > li > .info {\n    position: relative;\n    height: 93px;\n    text-align: left;\n    padding-right: 40px;\n}\n.event-list > li > .info > .title, \n.event-list > li > .info > .desc {\n    padding: 0px 10px;\n}\n.event-list > li > .info > ul {\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n}\n.event-list > li > .social {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    display: block;\n    width: 40px;\n}\n.event-list > li > .social > ul {\n    border-left: 1px solid rgb(230, 230, 230);\n}\n.event-list > li > .social > ul > li {\t\t\t\n    display: block;\n    padding: 0px;\n}\n.event-list > li > .social > ul > li > a {\n    display: block;\n    width: 40px;\n    padding: 10px 0px 9px;\n}\n.new-title {\n    font-size: 17pt;\n    font-weight: 600;\n    margin: 0px;\n}\n.modal-overlay {\n    right: 15px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXRzLnBpY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsdUNBQXVDO0lBQ3ZDLDZDQUE2QztJQUM3QyxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9wZXRzL3BldHMucGlja2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnQtbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4uZXZlbnQtbGlzdCA+IGxpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiKDUxLCA1MSwgNTEpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoNTEsIDUxLCA1MSwgMC43KTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDQ0LCAxMDIpO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNzAlO1xufVxuLmV2ZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoZXZlbikgPiAuaWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgODIsIDE2Nyk7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmljb24gPiBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZXZlbnQtbGlzdCA+IGxpID4gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTdwdDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiAuZGVzYyB7XG4gICAgZm9udC1zaXplOiAxM3B0O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCxcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwge1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gdWwgPiBsaSxcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcbiAgICBmb250LXNpemU6IDExcHQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwYWRkaW5nOiAzcHggMHB4O1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gdWwgPiBsaSA+IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSBcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSB7ICAgIFxuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSA+IGEge1xuICAgIHBhZGRpbmc6IDNweCAwcHg7XG59IFxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gdWwgPiBsaTpob3Zlcixcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaTpob3ZlciB7XG4gICAgY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XG59XG5cbi5ldmVudC1saXN0ID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkzcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uZXZlbnQtbGlzdCA+IGxpID4gLmljb24sXG4uZXZlbnQtbGlzdCA+IGxpID4gaW1nICB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pY29uLFxuLmV2ZW50LWxpc3QgPiBsaSA+IGltZyB7XG4gICAgd2lkdGg6IDkzcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pY29uLFxuLmV2ZW50LWxpc3QgPiBsaSA+IGltZyB7XG4gICAgd2lkdGg6IDkzcHg7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogOTNweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XHRcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IC50aXRsZSwgXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiAuZGVzYyB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiB1bCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbn1cbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xufVxuLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpIHtcdFx0XHRcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGkgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCA5cHg7XG59XG5cbi5uZXctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTdwdDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gICAgcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* brandico */\n[class*=\"brandico-\"]:before {\n  font-family: 'brandico', sans-serif;\n}\n/* entypo */\n[class*=\"entypo-\"]:before {\n  font-family: 'entypo', sans-serif;\n}\n/* openwebicons */\n[class*=\"openwebicons-\"]:before {\n  font-family: 'OpenWeb Icons', sans-serif;\n}\n/* zocial */\n[class*=\"zocial-\"]:before {\n  font-family: 'zocial', sans-serif;\n}\n.form-signin{\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.login-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.login-input-pass {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.signup-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.signup-input-confirm {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.create-account {\n  text-align: center;\n  width: 100%;\n  display: block;\n}\n.form-signin .form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.btn-center{\n  width: 50%;\n  text-align: center;\n  margin: inherit;\n}\n.social-login-btn {\n  margin: 5px;\n  width: 20%;\n  font-size: 250%;\n  padding: 0;\n}\n.social-login-more {\n  width: 45%;\n}\n.social-google {\n  background-color: #da573b;\n  border-color: #be5238;\n}\n.social-google:hover{\n  background-color: #be5238;\n  border-color: #9b4631;\n}\n.social-facebook {\n  background-color: #4c699e;\n  border-color: #47618d;\n}\n.social-facebook:hover {\n  background-color: #47618d;\n  border-color: #3c5173;\n}\n.text-muted {\n  color: #a3a7aa !important;\n  font-size: 94%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUdiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYnJhbmRpY28gKi9cbltjbGFzcyo9XCJicmFuZGljby1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdicmFuZGljbycsIHNhbnMtc2VyaWY7XG59XG5cbi8qIGVudHlwbyAqL1xuW2NsYXNzKj1cImVudHlwby1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdlbnR5cG8nLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBvcGVud2ViaWNvbnMgKi9cbltjbGFzcyo9XCJvcGVud2ViaWNvbnMtXCJdOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbldlYiBJY29ucycsIHNhbnMtc2VyaWY7XG59XG5cbi8qIHpvY2lhbCAqL1xuW2NsYXNzKj1cInpvY2lhbC1cIl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICd6b2NpYWwnLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9ybS1zaWduaW57XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubG9naW4taW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5sb2dpbi1pbnB1dC1wYXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5zaWdudXAtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLnNpZ251cC1pbnB1dC1jb25maXJtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5jcmVhdGUtYWNjb3VudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYnRuLWNlbnRlcntcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGluaGVyaXQ7XG59XG5cbi5zb2NpYWwtbG9naW4tYnRuIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtc2l6ZTogMjUwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNvY2lhbC1sb2dpbi1tb3JlIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLnNvY2lhbC1nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE1NzNiO1xuICBib3JkZXItY29sb3I6ICNiZTUyMzg7XG59XG4uc29jaWFsLWdvb2dsZTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlNTIzODtcbiAgYm9yZGVyLWNvbG9yOiAjOWI0NjMxO1xufVxuXG4uc29jaWFsLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNjk5ZTtcbiAgYm9yZGVyLWNvbG9yOiAjNDc2MThkO1xufVxuLnNvY2lhbC1mYWNlYm9vazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzYxOGQ7XG4gIGJvcmRlci1jb2xvcjogIzNjNTE3Mztcbn1cblxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogI2EzYTdhYSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDk0JTtcbn0iXX0= */"

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"])
    ], RegisterUserComponent.prototype, "alert", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"])
    ], RegisterUserComponent.prototype, "submit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_2__["FacebookComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_2__["FacebookComponent"])
    ], RegisterUserComponent.prototype, "facebook", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_1__["GoogleComponent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _templates_button_google_google_component__WEBPACK_IMPORTED_MODULE_1__["GoogleComponent"])
    ], RegisterUserComponent.prototype, "google", void 0);
    RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
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
/*! exports provided: httpHeaders, httpDefaultOptions, endpoints, UserApiService, PetApiService, InfoService, AuthenticationService, AppointmentsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpHeaders", function() { return httpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpDefaultOptions", function() { return httpDefaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoints", function() { return endpoints; });
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
        this.endpoint = endpoints.aws;
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

module.exports = ".center {\n    margin: auto;\n    width: 50%;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

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
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/alert/alert.component.html"),
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

module.exports = ".social {\n    background-color: #4c699e;\n    border-color: #47618d;\n    margin: 5px;\n    width: 20%;\n    font-size: 250%;\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2J1dHRvbi9mYWNlYm9vay9mYWNlYm9vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvYnV0dG9uL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM2OTllO1xuICAgIGJvcmRlci1jb2xvcjogIzQ3NjE4ZDtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogMjAlO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgICBwYWRkaW5nOiAwO1xufSJdfQ== */"

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
            template: __webpack_require__(/*! raw-loader!./facebook.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/button/facebook/facebook.component.html"),
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

module.exports = ".social {\n    background-color: #da573b;\n    border-color: #be5238;\n    margin: 5px;\n    width: 20%;\n    font-size: 250%;\n    padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2J1dHRvbi9nb29nbGUvZ29vZ2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9idXR0b24vZ29vZ2xlL2dvb2dsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhNTczYjtcbiAgICBib3JkZXItY29sb3I6ICNiZTUyMzg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"

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
            template: __webpack_require__(/*! raw-loader!./google.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/button/google/google.component.html"),
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
            template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/button/signin/signin.component.html"),
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
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/button/signup/signup.component.html"),
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

module.exports = ".center {\n    margin: auto;\n    width: 50%;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("items", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nextInput", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "nextInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("previousInput", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "previousInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("indicator", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "indicator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("carouselExampleIndicators", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "carouselExampleIndicators", void 0);
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/carousel/carousel.component.html"),
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

module.exports = ".center-loading {\n  position: fixed;\n  top: 50%;\n  left: 45%;\n  /* bring your own prefixes */\n  /* transform: translate(-50%, -50%); */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDQ1JTtcbiAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICovXG59Il19 */"

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
            template: __webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/loading/loading.component.html"),
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
            template: __webpack_require__(/*! raw-loader!./tutorial.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/tutorial/tutorial.component.html"),
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
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
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

module.exports = __webpack_require__(/*! /home/eduardo/git/Toto/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map