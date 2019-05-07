import { ObjectUtils } from './../utils';
import { SignUpComponent } from './../button/signup/signup.component';
import { PETS_PAGE, LOGIN_PAGE } from './../application';
import { SessionService } from './../session/session.service';
import { Component, ViewChild } from '@angular/core';
import { UserApiService } from '../service/services';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { StringUtils } from '../utils';
import { SociaNetworkType } from '../socialNetwork/socialNetworkServices';
import { ReturnCodeEventArgs } from '../button/button-classes';
import { ColorClass } from '../styles/styles';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuService } from './../navbar/menuService';
import { User } from '../entity/User';
import { ReturnCode } from '../entity/system';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-register',
  templateUrl: './register.user.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterUserComponent extends AppBase {

  @ViewChild(AlertComponent) private alert: AlertComponent;
  @ViewChild(SignUpComponent) private submit: SignUpComponent;

  private get menu(): NavbarComponent {
    return this.menuService.menu;
  }
  
  constructor(private session: SessionService, 
    private menuService : MenuService, 
    private api: UserApiService,
    private router: Router) {
    super();
  }

  ngOnInit() : void {
    this.menu.disableMenu = true;
  }

  google() : void {
    console.log("submit login to google");
  }

  onRegisterInit() {
    this.loading = true;
    this.alert.hide();
    this.submit.hidden = true;
  }

  login = (args : ReturnCodeEventArgs) => {
    this.loading = false;

    if(args.code == ReturnCode.SUCCESS) {
      this.session.onLogged(PETS_PAGE, this.router, this.menu);
    }
    else {
     this.router.navigateByUrl(LOGIN_PAGE);
    }
  }

  onRegisterEnd(eventArgs : ReturnCodeEventArgs, isNetwork : boolean) {
    if(eventArgs.code == ReturnCode.SUCCESS) {

      if(isNetwork) {
        this.session.onLogged(PETS_PAGE, this.router, this.menu);
      }
      else {
        if(this.submit.form != undefined && this.submit.form.value.username != undefined && this.submit.form.value.password != undefined){
          const user : User = new User();
          user.username = this.submit.form.value.username;
          user.password = this.submit.form.value.password;
          user.loginType = SociaNetworkType.NONE;
          this.session.authenticationService.authenticate(user, this.login, this.session.setUserInSession);
        }
        else {
          this.router.navigateByUrl(LOGIN_PAGE);
        }
      }
    }
    else {
      if(eventArgs.code == ReturnCode.VALIDATION_ERROR && !StringUtils.isEmpty(eventArgs.message)){
        this.alert.show(eventArgs.message, ColorClass.danger);
      }
      else if(eventArgs.code != ReturnCode.VALIDATION_ERROR  && StringUtils.isEmpty(eventArgs.message)) {
        this.alert.show(this.api.getErrorMessage(eventArgs.code, this.language), ColorClass.danger);
      }
      else {
        this.alert.show(eventArgs.message, ColorClass.danger);
      }
      this.loading = false;
    }
    this.submit.hidden = false;
  }

  onLoginInit() {
    this.loading = true;
    this.alert.hide();
  }

}

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