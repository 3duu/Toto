import { SessionService } from './../../session/session.service';
import { ButtonComponent, ClickableComponent, ReturnCodeEventArgs } from './../button-classes';
import { Component } from '@angular/core';
import { StringUtils } from 'src/app/utils';
import { User } from 'src/app/entity/entities';
import { SociaNetworkType } from 'src/app/socialNetwork/socialNetworkServices';
import { ReturnCode } from 'src/app/entity/system';

@Component({
  selector: 'login-button',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent extends ButtonComponent implements ClickableComponent {

  constructor(private session : SessionService) {
    super();
  }

  ngOnInit() {
    
  }
  
  doLogin() : void {
    
    if(this.loading){
      return;
    }
    this.begin.emit();
    if (this.form.invalid) {
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, message: "", result : this.form};
      this.done.emit(args);
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.username = this.form.value.username;
    formUser.password = this.form.value.password;
    this.form.value.socialMedia = SociaNetworkType.NONE;
    formUser.loginType = this.form.value.socialMedia;

    if(!this.requiredFieldsFilled(formUser)){
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, message: this.language.requiredFields, result : this.form};
      this.done.emit(args);
      this.loading = false;
      this.done.emit();
      return;
    }
 
    this.session.authenticationService.authenticate(formUser, this.loginDone, this.session.setUserInSession);
  }

  loginDone = (args : ReturnCodeEventArgs) => {
    this.loading = false;
    this.done.emit(args);
    if(args.code == ReturnCode.SUCCESS) {
      
    }
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
