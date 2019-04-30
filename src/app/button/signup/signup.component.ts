import { ButtonComponent, ClickableComponent, ReturnCodeEventArgs } from './../button-classes';
import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService, ReturnCode } from 'src/app/service/services';
import { StringUtils, LoginUtils, ObjectUtils } from 'src/app/utils';
import { ColorClass } from 'src/app/styles/styles';
import { User } from 'src/app/entity/User';
import { SociaNetworkType } from 'src/app/socialNetwork/socialNetworkServices';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';

export const PASSWORD_CONFIG = environment.passwordConfig;

@Component({
  selector: 'register-button',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent extends ButtonComponent implements ClickableComponent, AfterViewInit {

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

  doRegister(form: NgForm) : void {
    
    if(!ObjectUtils.isEmpty(form)){
      this.form = form;
    }
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
    if(StringUtils.isEmpty(this.form.value.socialMedia)){
      this.form.value.socialMedia = SociaNetworkType.NONE;
    }
    formUser.loginType = this.form.value.socialMedia;

    if(!this.requiredFieldsFilled(formUser, this.form.value.confirmPassword)){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, color : ColorClass.danger, message: this.language.requiredFields};
      this.error.emit(args);
      this.loading = false;
      this.done.emit();
      return;
    }

    //Campos obrigatorios
    if(!this.requiredFieldsFilled(formUser, this.form.value.confirmPassword)){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, color : ColorClass.danger, message: this.language.requiredFields};
      this.error.emit(args);
      this.loading = false;
      return;
    }

    //Validar e-mail
    if(!StringUtils.isEmail(formUser.username)){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, color : ColorClass.danger, message: this.language.invalidEmailAddress};
      this.error.emit(args);
      this.loading = false;
      return;
    }

    //Validar senha
    if(formUser.password.length < PASSWORD_CONFIG.min || (!StringUtils.isEmpty(PASSWORD_CONFIG.contains))){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, color : ColorClass.danger, message: this.language.invalidPassword.replace(":min", PASSWORD_CONFIG.min)};
      this.error.emit(args);
      this.loading = false;
      return;
    }

    //Corresponder senha
    if(formUser.password != this.form.value.confirmPassword){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, color : ColorClass.danger, message: this.language.passwordDoesntMatch};
      this.error.emit(args);
      this.loading = false;
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

  onSignedUp() : void {

  }

  requiredFieldsFilled(user: User, confirmPassword : string) : boolean {
    return !(StringUtils.isEmpty(user.username)
    || StringUtils.isEmpty(user.password)
    || StringUtils.isEmpty(user.name)
    || StringUtils.isEmpty(confirmPassword));
  }

}
