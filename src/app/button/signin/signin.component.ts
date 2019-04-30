import { ButtonComponent, ClickableComponent, ReturnCodeEventArgs } from './../button-classes';
import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService, ReturnCode } from 'src/app/service/services';
import { StringUtils, LoginUtils } from 'src/app/utils';
import { ColorClass } from 'src/app/styles/styles';
import { User } from 'src/app/entity/User';
import { SociaNetworkType } from 'src/app/socialNetwork/socialNetworkServices';
import { LocalDatabaseService } from 'src/app/database/database';

@Component({
  selector: 'login-button',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent extends ButtonComponent implements ClickableComponent, AfterViewInit {

  constructor(private userApi : UserApiService, private sqlite : LocalDatabaseService) {
    super();
  }

  ngOnInit() {
    //this.sqlite.openDatabase();
    //this.sqlite.createTables();
  }

  ngAfterViewInit(): void {
    if(StringUtils.isEmpty(this.classes)){
      this.classes = "btn btn-lg btn-petlife btn-block btn-center";
    }
  }
  
  doLogin() : void {
    
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
    this.form.value.socialMedia = SociaNetworkType.NONE;
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
        this.sqlite.mergeUser(formUser);
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
