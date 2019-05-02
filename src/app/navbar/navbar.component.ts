import { Component } from '@angular/core';
import { UserApiService } from '../service/services';
import { AppBase } from '../appbase';
import { User } from '../entity/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AppBase {
  
  constructor(private api: UserApiService) {
    super();
  }

  disableMenu = false;
  disable = true;
  navbarOpen = false;
  user : User;

  ngOnInit() {
    
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
