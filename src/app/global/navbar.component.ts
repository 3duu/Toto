import { Component, OnInit } from '@angular/core';
import { User } from '../entity/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private user : User;
  
  constructor() { 
    this.user = new User();
  }

  ngOnInit() {
  }

}
