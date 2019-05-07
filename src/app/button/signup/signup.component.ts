import { SessionService, PASSWORD_CONFIG } from './../../session/session.service';
import { ButtonComponent, ClickableComponent, ReturnCodeEventArgs } from './../button-classes';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService } from 'src/app/service/services';
import { StringUtils } from 'src/app/utils';
import { User } from 'src/app/entity/User';
import { SociaNetworkType } from 'src/app/socialNetwork/socialNetworkServices';
import { ReturnCode } from 'src/app/entity/system';

@Component({
  selector: 'register-button',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent extends ButtonComponent implements ClickableComponent {

  constructor(private userApi : UserApiService, private session : SessionService) {
    super();
  }

  ngOnInit() {
    
  }

  doRegister() : void {
    
    if(this.loading){
      return;
    }
    this.begin.emit();
    if (this.form.invalid) {
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR,  message: "", result: this.form};
      this.done.emit(args);
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.username = this.form.value.username;
    formUser.password = this.form.value.password;
    formUser.name = this.form.value.name;
    this.form.value.socialMedia = SociaNetworkType.NONE;
    formUser.loginType = this.form.value.socialMedia;

    //Campos obrigatorios
    if(!this.requiredFieldsFilled(formUser, this.form.value.confirmPassword)){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR,  message: this.language.requiredFields, result : this.form};
      this.loading = false;
      this.done.emit(args);
      return;
    }

    //Validar e-mail
    if(!StringUtils.isEmail(formUser.username)){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR,  message: this.language.invalidEmailAddress, result: this.form};
      this.loading = false;
      this.done.emit(args);
      return;
    }

    //Validar senha
    if(formUser.password.length < PASSWORD_CONFIG.min || (!StringUtils.isEmpty(PASSWORD_CONFIG.contains))){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR,  message: this.language.invalidPassword.replace(":min", PASSWORD_CONFIG.min), result : this.form};
      this.loading = false;
      this.done.emit(args);
      return;
    }

    //Corresponder senha
    if(formUser.password != this.form.value.confirmPassword){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR,  message: this.language.passwordDoesntMatch, result : this.form};
      this.loading = false;
      this.done.emit(args);
      return;
    }
 
    let user : Observable<any> = this.userApi.save(formUser);

    (<any>window).httpUser = user;

    user.subscribe(result => {

      console.log(result);

      if(result.code == ReturnCode.SUCCESS){
        this.session.setUserInSession(result, this.form.value.password);
        const args : ReturnCodeEventArgs = {code : result.code, message: "", result : this.form};
        this.done.emit(args);
      }
      else {
        let message = "";
        if(result.code == ReturnCode.RESOURCE_EXISTS){
          message = this.language.usernameExists;
        }
        const args : ReturnCodeEventArgs = {code : result.code,  message: message, result : this.form};
        this.done.emit(args);
      }
      this.loading = false;
    }, error => {
      console.log(error);
      const args : ReturnCodeEventArgs = {code : ReturnCode.CONNECTION_ERROR,  message: "", result : this.form};
      this.done.emit(args);
      this.loading = false;
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
