import { Component } from '@angular/core';
import { AppBase } from '../app.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
//https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/README.md
//phonegap plugin add  cordova-plugin-googlemaps
export class MapsComponent extends AppBase {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
