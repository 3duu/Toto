import { SessionService } from './../session/session.service';
import { MenuService } from './../navbar/menuService';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { StringUtils } from '../utils';
import { ColorClass } from '../styles/styles';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { REGISTER_USER_PAGE } from '../application';
import { ReturnCode } from '../entity/system';
import { FacebookComponent } from '../button/facebook/facebook.component';
import { GoogleComponent } from '../button/google/google.component';
import { SignInComponent } from '../button/signin/signin.component';

//https://bootsnipp.com/snippets/kMd
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase {

  loginForm: NgForm;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  @ViewChild(FacebookComponent) private facebook: FacebookComponent;
  @ViewChild(GoogleComponent) private google : GoogleComponent;
  @ViewChild(SignInComponent) private signin : SignInComponent;
  
  constructor(private session : SessionService, private menuService : MenuService, private router: Router) {
    super();
  } 

  private get menu(): NavbarComponent {
    return this.menuService.menu;
  }

  ngOnInit() : void {
    this.menu.disable = true;
    this.session.onLogged(null, this.router, this.menuService.menu);
  }

  onLoginInit() {
    this.loading = true;
    this.alert.hide();
  }

  onLoginEnd(eventArgs) {
    this.loading = false;
    this.facebook.stopLoading();
    this.google.stopLoading();
    this.signin.stopLoading();

    if(eventArgs.code == ReturnCode.SUCCESS){
      this.session.onLogged(null, this.router, this.menu);
    }
    else {
      if(eventArgs.code == ReturnCode.VALIDATION_ERROR && !StringUtils.isEmpty(eventArgs.message)){
        this.alert.show(eventArgs.message, ColorClass.danger);
      }
      else {
        this.alert.show(eventArgs.message, ColorClass.danger);
      }
    }
  }

  register() : void {
    this.router.navigateByUrl(REGISTER_USER_PAGE);
  }

}