import { Component, AfterViewInit } from '@angular/core';
import { AppBase } from './../appbase';
import { REGISTER_PAGE, LOGIN_PAGE } from '../application';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AppBase implements AfterViewInit {

  constructor() {
    super();
  }

  ngOnInit() : void {
  }

  ngAfterViewInit(): void {
    this.getNavbarComponent().disableMenu = true;
    this.getNavbarComponent().disable = true;
  }

  login() : void {
    super.changeCurrentPage(this, LOGIN_PAGE);
  }

  register() : void {
    super.changeCurrentPage(this, REGISTER_PAGE);
  }

}
