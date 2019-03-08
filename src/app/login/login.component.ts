import { Component } from '@angular/core';
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
    AppBase.addModule(this);
  }

}
