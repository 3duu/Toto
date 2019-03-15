import { Component, ComponentRef, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import {  AppBase } from '../app.component';
import { User } from '../entity/User';
import { AuthenticationService } from './AuthenticationService';
import { ApiService } from '../service/services';
import { Observable } from 'rxjs';
//import { UserDao } from '../database/database';

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase {

  private static user: User;
  loginForm: NgForm;
  private loading = false;
  private submitted = false;
  private authenticationService: AuthenticationService;
  private dynamicComponentRef: ComponentRef<LoginComponent>;

  constructor(/*private elementRef: ElementRef,*/api: ApiService) {
    super(api);
  }

  ngOnInit() {
    
  }

  doLogin(form: NgForm) : void {
    this.submitted = true;
    this.loginForm = form;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    let user = this.api.login(new User());

    user.subscribe(val => {
      (<any>window).user = user;
      alert(val);
      console.log(val);
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
