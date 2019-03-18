import { Component, ComponentRef, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import {  AppBase, AppComponent } from '../app.component';
import { User } from '../entity/User';
import { AuthenticationService } from './AuthenticationService';
import { ApiService, ReturnCode } from '../service/services';
import { Observable } from 'rxjs';
//import { UserDao } from '../database/database';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase {

  loginForm: NgForm;
  private loading = false;
  private submitted = false;
  private authenticationService: AuthenticationService;
  private dynamicComponentRef: ComponentRef<LoginComponent>;

  constructor(/*private elementRef: ElementRef,*/api: ApiService) {
    super();
  }

  ngOnInit() {
    
  }

  getUser() : User {
    return AppComponent.user;
  }

  doLogin(form: NgForm) : void {
    this.submitted = true;
    this.loginForm = form;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.setUsername(form.value.username);
    formUser.setPassword(form.value.password);

    let user = this.api.login(formUser);

    user.subscribe(usr => {
      (<any>window).user = user;
      console.log(usr);
      
      if(usr.code == ReturnCode.SUCCESS){
        AppComponent.user = usr;
        alert("SUCCESS!");
      }
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
    
  }

  static getUser() : User {
    return LoginComponent.user;
  }

  destroy() {
    //this.elementRef.nativeElement.remove();
  }

}
