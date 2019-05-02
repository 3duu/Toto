import { ButtonComponent, ClickableComponent, ReturnCodeEventArgs } from './../button-classes';
import { Component } from '@angular/core';
import { ReturnCode, AuthenticationService } from 'src/app/service/services';
import { StringUtils, LoginUtils } from 'src/app/utils';
import { User } from 'src/app/entity/User';
import { SociaNetworkType } from 'src/app/socialNetwork/socialNetworkServices';

@Component({
  selector: 'login-button',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent extends ButtonComponent implements ClickableComponent {

  constructor(private authenticationService : AuthenticationService) {
    super();
  }

  ngOnInit() {
    
  }
  
  doLogin() : void {
    
    this.begin.emit();
    if (this.form.invalid) {
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, message: ""};
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
      const args : ReturnCodeEventArgs = {code : ReturnCode.VALIDATION_ERROR, message: this.language.requiredFields};
      this.done.emit(args);
      this.loading = false;
      this.done.emit();
      return;
    }
 
    this.authenticationService.authenticate(formUser, this, this.loginDone);
  }

  loginDone = (args : ReturnCodeEventArgs) => {
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
