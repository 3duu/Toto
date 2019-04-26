import { ColorClass } from './../styles/styles';
import { UserApiService, ReturnCode } from './../service/services';
import { AppBase } from './../appbase';
import { Component, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entity/User';
import { SociaNetworkType } from '../socialNetwork/socialNetworkServices';
import { Observable } from 'rxjs';
import { LoginUtils, StringUtils } from '../utils';

@Component({
  selector: 'login-button',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent extends AppBase implements ClickableComponent, AfterViewInit {

  @Output() click = new EventEmitter();
  @Output() success = new EventEmitter();
  @Output() error = new EventEmitter();
  @Output() begin = new EventEmitter();
  @Output() done = new EventEmitter();
  @Input() text = this.language.signIn;
  @Input() classes : string;
  @Input() form: NgForm;

  constructor(private userApi : UserApiService) {
    super();
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    if(StringUtils.isEmpty(this.classes)){
      this.classes = "btn btn-lg btn-petlife btn-block btn-center";
    }
  }

  //returnCodeArgs = {code : ReturnCode.VALIDATION_ERROR, color : ColorClass.danger};
  
  private doLogin() : void {
    
    this.begin.emit();
    if (this.form.invalid) {
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, color : ColorClass.danger, message: ""};
      this.error.emit(args);
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.username = this.form.value.username;
    formUser.password = this.form.value.password;
    if(this.form.value.socialMedia == ""){
      this.form.value.socialMedia = SociaNetworkType.NONE;
    }
    formUser.loginType = this.form.value.socialMedia;

    if(!this.requiredFieldsFilled(formUser)){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, color : ColorClass.danger, message: this.language.requiredFields};
      this.error.emit(args);
      this.loading = false;
      this.done.emit();
      return;
    }
 
    let user : Observable<any> = this.userApi.login(formUser);

    (<any>window).httpUser = user;

    user.subscribe(result => {

      console.log(result);
      this.loading = false;

      if(result.code == ReturnCode.SUCCESS){
        LoginUtils.setUserInSession(result, this, this.form.value.password, null);
        const args : ReturnCodeEventArgs = {code : result.code, color : ColorClass.success, message: ""};
        this.success.emit(args);
      }
      else {
        const args : ReturnCodeEventArgs = {code : result.code, color : ColorClass.danger, message: ""};
        this.error.emit(args);
      }
      this.done.emit();
    }, error => {
      console.log(error);
      const args : ReturnCodeEventArgs = {code : ReturnCode.CONNECTION_ERROR, color : ColorClass.danger, message: ""};
      this.error.emit(args);
      this.loading = false;
      this.done.emit();
    });
  }

  onClicked() : void {

  }

  onSignedIn() : void {

  }

  requiredFieldsFilled(user: User) : boolean {
    return !(StringUtils.isEmpty(user.username)
    || StringUtils.isEmpty(user.password));
  }

}

export interface ClickableComponent {
  onClicked() : void;
}

export interface ClickEventArgs {
  posX : number;
  posY : number;
}

export interface ReturnCodeEventArgs {
  code : ReturnCode;
  color : ColorClass;
  message : string;
}
