import { MenuService } from './../navbar/menuService';
import { Component } from '@angular/core';
import { AppBase } from './../appbase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AppBase {

  constructor(private router: Router, private menuService : MenuService) {
    super();
  }

  ngOnInit() : void {
    this.menuService.menu.disable = true;
  }

}
