import { Component } from '@angular/core';
import { AppBase } from '../appbase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppBase {

  constructor() {
    super();
  }

  ngOnInit() {
    this.getNavbarComponent().disableMenu = false;
  }

}
