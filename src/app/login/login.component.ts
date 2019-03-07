import { Component, OnInit } from '@angular/core';
import { Language } from '../language/Language';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  language : Language;

  ngOnInit() {
    this.language = AppComponent.language;
  }


}
