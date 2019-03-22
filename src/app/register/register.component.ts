import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entity/User';
import { UserApiService, ReturnCode } from '../service/services';
import { HomeComponent } from '../home/home.component';
import { AppBase } from '../appbase';
import { AlertComponent } from '../alert/alert.component';
import { ColorClass } from '../styles/styles';
import { Observable } from 'rxjs';
import { StringUtils } from '../utils';
import { environment } from 'src/environments/environment';

const passwordConfig = environment.passwordConfig;

//https://bootsnipp.com/snippets/kMdg
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent extends AppBase {

  registerForm: NgForm;
  private loading = false;

  private submitted = false;
  private afterLoginRedirectComponent = HomeComponent;

  @ViewChild(AlertComponent) private alert: AlertComponent;
  
  constructor(private api: UserApiService) {
    super();
  }

  ngOnInit() : void {
    this.getNavbarComponent().disableMenu = true;
  }

  doRegister(form: NgForm) : void {

    this.submitted = true;
    this.alert.hide();
    this.registerForm = form;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.alert.show(this.language.validateDataError[0], ColorClass.danger);
      return;
    }
    this.loading = true;

    let formUser = new User();
    formUser.setUsername(form.value.username);
    formUser.setPassword(form.value.password);
    formUser.setName(form.value.name);
    console.log(form.value);

    //Campos obrigaorios
    if(!this.requiredFieldsFilled(formUser, form.value.confirmPassword)){
      this.alert.show(this.language.requiredFields[0], ColorClass.danger);
      this.loading = false;
      return;
    }

    //Validar e-mail
    if(!StringUtils.isEmail(formUser.getUsername())){
      this.alert.show(this.language.invalidEmailAddress[0], ColorClass.danger);
      this.loading = false;
      return;
    }

    //Validar senha
    if(formUser.getPassword().length < passwordConfig.min || (!StringUtils.isEmpty(passwordConfig.contains))){
      this.alert.show(this.language.invalidPassword[0].replace(":min", passwordConfig.min), ColorClass.danger);
      this.loading = false;
      return;
    }

    //Corresponder senha
    if(formUser.getPassword() != form.value.confirmPassword){
      this.alert.show(this.language.passwordDoesntMatch[0], ColorClass.danger);
      this.loading = false;
      return;
    }

    let user : Observable<any> = this.api.save(formUser);
    let connectionError = true;

    user.subscribe(ret => {
      connectionError = false;
      console.log(ret);
      this.loading = false;

      if(ret.code == ReturnCode.SUCCESS){
        if (ret && ret.sid) {
            alert(this.language.registerSuccess);
        }
      }
      else if(ret.code == ReturnCode.NOT_FOUND){
        this.alert.show(this.language.invalidUserPassword[0], ColorClass.danger);
      }
      else {
        this.alert.show(this.language.connectionError[0], ColorClass.danger);
      }
    } ,error => {
      this.alert.show(this.language.connectionError[0], ColorClass.danger);
      this.loading = false;
    });

    

  }

  requiredFieldsFilled(user: User, confirmPassword : string) : boolean {
    return !(StringUtils.isEmpty(user.getUsername())
    || StringUtils.isEmpty(user.getPassword())
    || StringUtils.isEmpty(user.getName())
    || StringUtils.isEmpty(confirmPassword));
  }

}