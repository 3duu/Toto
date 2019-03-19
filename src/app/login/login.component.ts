import { Component, ComponentRef, ViewChild, ViewContainerRef, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  AppBase, AppComponent } from '../app.component';
import { User } from '../entity/User';
import { ApiService, ReturnCode } from '../service/services';
import { Language } from '../language/Language';
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

  constructor(api: ApiService) { 
    super(api);
  }

  ngOnInit() : void {
    
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

    user.subscribe(ret => {
      (<any>window).user = user;
      console.log(ret);
      
      if(ret.code == ReturnCode.SUCCESS){
        AppComponent.user = ret;
        if (ret && ret.sid) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(ret.entity));
            localStorage.setItem("sessionId", ret.sid);
            localStorage.setItem("loginDate", ret.date);
            //this.addComponent(LoginComponent);
            //localStorage.removeItem('currentUser');
        }
        alert("SUCCESS!");
      }
    });

    console.log(form.value);
  }

  static getUser() : User {
    return AppComponent.user;
  }

}