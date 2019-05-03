import { Component } from '@angular/core';
import { AppBase } from './../appbase';
import { LOGIN_PAGE, REGISTER_USER_PAGE } from '../application';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AppBase {

  constructor(private router: Router) {
    super();
    (<any>window).welcome = this;
  }

  ngOnInit() : void {
    //alert('gtt');
  }

  login() : void {
    //super.changeCurrentPage(this, LOGIN_PAGE);
  }

  register() : void {
    //super.changeCurrentPage(this, REGISTER_USER_PAGE);
  }

}
