import { Component, AfterContentInit } from '@angular/core';
import { UserApiService } from '../service/services';
import { AppBase } from '../appbase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AppBase implements AfterContentInit {
  
  constructor(private api: UserApiService) {
    super();
  }

  disableMenu = true;
  disable = false;
  navbarOpen = false;
  username : string;

  ngOnInit() {
    
  }

  ngAfterContentInit(): void {
    
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
