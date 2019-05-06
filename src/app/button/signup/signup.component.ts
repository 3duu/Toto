import { SessionService, PASSWORD_CONFIG } from './../../session/session.service';
import { ButtonComponent, ClickableComponent, ReturnCodeEventArgs } from './../button-classes';
import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService, ReturnCode } from 'src/app/service/services';
import { StringUtils } from 'src/app/utils';
import { User } from 'src/app/entity/User';
import { SociaNetworkType } from 'src/app/socialNetwork/socialNetworkServices';

@Component({
  selector: 'register-button',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent extends ButtonComponent implements ClickableComponent, AfterViewInit {

  constructor(private userApi : UserApiService, private session : SessionService) {
    super();
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    if(StringUtils.isEmpty(this.classes)){
      //this.classes = "btn btn-lg btn-petlife btn-block btn-center";
    }
  }

  doRegister() : void {
    
    this.begin.emit();
    if (this.form.invalid) {
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR,  message: ""};
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
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR,  message: this.language.requiredFields};
      this.loading = false;
      this.done.emit(args);
      return;
    }

    //Validar e-mail
    if(!StringUtils.isEmail(formUser.username)){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR,  message: this.language.invalidEmailAddress};
      this.loading = false;
      this.done.emit(args);
      return;
    }

    //Validar senha
    if(formUser.password.length < PASSWORD_CONFIG.min || (!StringUtils.isEmpty(PASSWORD_CONFIG.contains))){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR,  message: this.language.invalidPassword.replace(":min", PASSWORD_CONFIG.min)};
      this.loading = false;
      this.done.emit(args);
      return;
    }

    //Corresponder senha
    if(formUser.password != this.form.value.confirmPassword){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR,  message: this.language.passwordDoesntMatch};
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
        const args : ReturnCodeEventArgs = {code : result.code, message: ""};
        this.done.emit(args);
      }
      else {
        let message = "";
        if(result.code == ReturnCode.RESOURCE_EXISTS){
          message = this.language.usernameExists;
        }
        const args : ReturnCodeEventArgs = {code : result.code,  message: message};
        this.done.emit(args);
      }
      this.loading = false;
    }, error => {
      console.log(error);
      const args : ReturnCodeEventArgs = {code : ReturnCode.CONNECTION_ERROR,  message: ""};
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
