import { Language } from './language/Language';
import { Component, OnInit } from '@angular/core';
import { User } from './entity/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  static applicationName : string = "PetLif3";

  title = 'angular';
  static language : Language = new Language();
  
}

export class AppBase implements OnInit {
  ngOnInit(): void {
    
  }
  private user : User;
  applicationName : string = AppComponent.applicationName;
  language : Language = AppComponent.language;
}
