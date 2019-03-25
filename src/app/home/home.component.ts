import { Component, AfterViewInit } from '@angular/core';
import { AppBase } from '../appbase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppBase implements AfterViewInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.getNavbarComponent().disableMenu = false;
  }

  ngAfterViewInit(): void {
    this.ngOnInit();
    setTimeout(() => {this.getNavbarComponent().disableMenu = false});
  }

}
