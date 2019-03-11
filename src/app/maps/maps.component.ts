import { Component } from '@angular/core';
import { AppBase } from '../app.component';

declare var navigator: any;
declare var Map: any;
declare var LatLng: any;
declare var googleMapsEvents: any;

Map = require("\\plugins\\cordova-plugin-googlemaps\\www\\Map");
LatLng = require("\\cordova-plugin-googlemaps\\www\\LatLng");
googleMapsEvents = require("\\cordova-plugin-googlemaps\\www\\event");
navigator = require("\\cordova-plugin-geolocation\\www\\geolocation");

//https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/README.md
//phonegap plugin add  cordova-plugin-googlemaps
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent extends AppBase {

  private map;
  private postiion;

  private options = {
    enableHighAccuracy: true,
    maximumAge: 3600000
  }
  
  constructor() {
    super();
  }

  ngOnInit() {
    this.loadMap();
  }

  getPosition() : void {

    let watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, this.options);
 
    function onSuccess(position) {
 
      alert('Latitude: '          + position.coords.latitude          + '\n' +
        'Longitude: '         + position.coords.longitude         + '\n' +
        'Altitude: '          + position.coords.altitude          + '\n' +
        'Accuracy: '          + position.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + position.coords.heading           + '\n' +
        'Speed: '             + position.coords.speed             + '\n' +
        'Timestamp: '         + position.timestamp                + '\n');
    };
 
    function onError(error) {
       alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }
 }

  loadMap() : void {
    let div = document.getElementById("map_canvas");

    let options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
    }

    let watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    function onSuccess(position) {

        this.postiion = new LatLng(position.coords.latitude, position.coords.longitude);
    };

    function onError(error) {
        navigator.notification.alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }

    function onMapReady() {
      //navigator.notification.alert('lat: ' + this.postiion.lat + "\n" + this.postiion.lng);
      this.map.showDialog();
      this.map.setCenter(this.postiion);
      this.map.setZoom(13);
  } 

    Map.isAvailable(function (isAvailable, message) {
        if (isAvailable) {
            // Initialize the map view
            this.map = Map.getMap(div);
            // Wait until the map is ready status.
            this.map.addEventListener(googleMapsEvents.MAP_READY, onMapReady);
        } else {
            navigator.notification.alert(message);
        }
    });
  }

}
