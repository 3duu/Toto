import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AppBase } from './../appbase';
import { LOGIN_PAGE, REGISTER_USER_PAGE } from '../application';
import { SignInComponent } from '../button/signin/signin.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AppBase implements AfterViewInit {

  constructor() {
    super();
  }

  @ViewChild(SignInComponent) private signin: SignInComponent;

  ngOnInit() : void {

  }

  ngAfterViewInit(): void {
    this.getNavbarComponent().disable = true;
  }


  login() : void {
    super.changeCurrentPage(this, LOGIN_PAGE);
  }

  register() : void {
    super.changeCurrentPage(this, REGISTER_USER_PAGE);
  }

}
