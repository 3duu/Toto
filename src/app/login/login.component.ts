import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {  AppBase } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//https://bootsnipp.com/snippets/kMdg
export class LoginComponent extends AppBase {

  constructor() {
    super();
  }

  ngOnInit() {
    
  }

  doLogin(form: NgForm) : void {
    console.log(form.value);
    alert(form.value.login);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }

}
