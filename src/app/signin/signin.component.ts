import { LOGIN_PAGE } from './../application';
import { Language } from './../language/Language';
import { UserApiService, ReturnCode } from './../service/services';
import { AppBase } from './../appbase';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entity/User';
import { SociaNetworkType } from '../socialNetwork/socialNetworkServices';
import { Observable } from 'rxjs';
import { LoginUtils } from '../utils';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent extends AppBase implements ClickableComponent {

  @Output() click = new EventEmitter();
  @Output() success = new EventEmitter();
  @Output() error = new EventEmitter();
  @Input() text = this.language.signIn;
  loginForm: NgForm;

  constructor(private userApi : UserApiService) {
    super();
  }

  ngOnInit() {
  }

  doLogin(form: NgForm) : void {
    console.log("login start");

    this.loginForm = form;
    
    if (this.loginForm.invalid) {
      //this.alert.show(this.language.validateDataError, ColorClass.danger);
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.username = form.value.username;
    formUser.password = form.value.password;
    if(form.value.socialMedia == ""){
      form.value.socialMedia = SociaNetworkType.NONE;
    }
    formUser.loginType = form.value.socialMedia;
    /*
    if(!this.requiredFieldsFilled(formUser)){
      this.alert.show(this.language.requiredFields, ColorClass.danger);
      this.loading = false;
      return;
    }*/
    
    let user : Observable<any> = this.userApi.login(formUser);

    (<any>window).httpUser = user;

    user.subscribe(result => {

      console.log(result);
      this.loading = false;

      if(result.code == ReturnCode.SUCCESS){
        this.success.emit();
        LoginUtils.userInSession(result, this, form.value.password, LOGIN_PAGE.getAfterLoginPageRedirection());
      }
      else {
        this.error.emit();
        //this.alert.show(this.api.getErrorMessage(result, this.language), ColorClass.danger);
      }
    }, error => {
      console.log(error);
      //this.alert.show(this.language.connectionError, ColorClass.danger);
      this.error.emit();
      this.loading = false;
    });
  }

  onClicked() : void {

  }

  onSignedIn() : void {

  }

}

interface ClickableComponent {
  onClicked() : void;
}

interface ClickEventArgs {
  posX : number;
  posY : number;
}
