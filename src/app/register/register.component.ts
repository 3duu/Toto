import { LOGIN_PAGE } from './../application';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entity/User';
import { UserApiService, ReturnCode } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';
import { Observable } from 'rxjs';
import { StringUtils, LoginUtils } from '../utils';
import { environment } from 'src/environments/environment';
import { HOME_PAGE } from '../application';
import { FacebookService, GoogleService } from '../socialNetwork/socialNetworkServices';

const passwordConfig = environment.passwordConfig;

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-register',
  templateUrl: './register.user.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterUserComponent extends AppBase {

  registerForm: NgForm;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private api: UserApiService, private facebookService : FacebookService, private googleService : GoogleService) {
    super();
  }

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
    this.facebookService.config();
    this.googleService.config();
  }

  doRegister(form: NgForm) : void {

    this.alert.hide();
    this.registerForm = form;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.alert.show(this.language.validateDataError, ColorClass.danger);
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.username = (form.value.username);
    formUser.password = (form.value.password);
    formUser.name = (form.value.name);
    console.log(form.value);

    //Campos obrigaorios
    if(!this.requiredFieldsFilled(formUser, form.value.confirmPassword)){
      this.alert.show(this.language.requiredFields, ColorClass.danger);
      this.loading = false;
      return;
    }

    //Validar e-mail
    if(!StringUtils.isEmail(formUser.username)){
      this.alert.show(this.language.invalidEmailAddress, ColorClass.danger);
      this.loading = false;
      return;
    }

    //Validar senha
    if(formUser.password.length < passwordConfig.min || (!StringUtils.isEmpty(passwordConfig.contains))){
      this.alert.show(this.language.invalidPassword.replace(":min", passwordConfig.min), ColorClass.danger);
      this.loading = false;
      return;
    }

    //Corresponder senha
    if(formUser.password != form.value.confirmPassword){
      this.alert.show(this.language.passwordDoesntMatch, ColorClass.danger);
      this.loading = false;
      return;
    }

    let user : Observable<any> = this.api.save(formUser);

    user.subscribe(result => {
      console.log(result);
      this.loading = false;

      if(result.code == ReturnCode.SUCCESS){
        if (result && result.sid) {
          //alert(this.language.registerSuccess);
          this.doLogin(form, result);
        }
      }
      else if(result.code == ReturnCode.RESOURCE_EXISTS){
        this.alert.show(this.language.usernameExists, ColorClass.danger);
      }
      else {
        this.alert.show(this.api.getErrorMessage(result, this.language), ColorClass.danger);
      }
    } ,error => {
      console.log(error);
      this.alert.show(this.language.connectionError, ColorClass.danger);
      this.loading = false;
    });
  }

  facebook() : void {
    console.log("submit login to facebook");
    this.facebookService.login(this.doLogin);
  }

  google() : void {
    console.log("submit login to google");
    this.googleService.login(undefined);
  }

  doLogin(form: NgForm, result) {

    let formUser = new User();
    formUser.username = form.value.username;
    formUser.password = form.value.password;

    LoginUtils.setUserInSession(result, this, form.value.password, LOGIN_PAGE.getAfterLoginPageRedirection());
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

}

////////////////////////////////////////////////////////////////////

@Component({
  selector: 'app-register',
  templateUrl: './register.pet.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterPetComponent extends AppBase {

  registerForm: NgForm;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private api: UserApiService) {
    super();
  }

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
  }

  doRegister(form: NgForm) : void {

    this.alert.hide();
    this.registerForm = form;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.alert.show(this.language.validateDataError, ColorClass.danger);
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.username = (form.value.username);
    formUser.password = (form.value.password);
    formUser.name = (form.value.name);
    console.log(form.value);

    //Campos obrigaorios
    if(!this.requiredFieldsFilled(formUser, form.value.confirmPassword)){
      this.alert.show(this.language.requiredFields, ColorClass.danger);
      this.loading = false;
      return;
    }

    //Validar e-mail
    if(!StringUtils.isEmail(formUser.username)){
      this.alert.show(this.language.invalidEmailAddress, ColorClass.danger);
      this.loading = false;
      return;
    }

    //Validar senha
    if(formUser.password.length < passwordConfig.min || (!StringUtils.isEmpty(passwordConfig.contains))){
      this.alert.show(this.language.invalidPassword.replace(":min", passwordConfig.min), ColorClass.danger);
      this.loading = false;
      return;
    }

    //Corresponder senha
    if(formUser.password != form.value.confirmPassword){
      this.alert.show(this.language.passwordDoesntMatch, ColorClass.danger);
      this.loading = false;
      return;
    }

    let user : Observable<any> = this.api.save(formUser);

    user.subscribe(result => {
      console.log(result);
      this.loading = false;

      if(result.code == ReturnCode.SUCCESS){
        if (result && result.sid) {
          alert(this.language.registerSuccess);
          LoginUtils.setUserInSession(result, this, formUser.password, HOME_PAGE);
        }
      }
      else if(result.code == ReturnCode.RESOURCE_EXISTS){
        this.alert.show(this.language.usernameExists, ColorClass.danger);
      }
      else {
        this.alert.show(this.api.getErrorMessage(result, this.language), ColorClass.danger);
      }
    }, error => {
      console.log(error);
      this.alert.show(this.language.connectionError, ColorClass.danger);
      this.loading = false;
    });
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

}