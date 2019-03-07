import { Language } from './language/Language';
import { Component } from '@angular/core';

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
