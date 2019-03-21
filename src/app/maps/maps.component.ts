import { Component } from '@angular/core';
import { CordovaService } from '../cordova.service';
import { AppBase } from '../appbase';

//https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/README.md
//phonegap plugin add  cordova-plugin-googlemaps
//https://github.com/arnesson/angular-cordova
//alternative https://github.com/ercobo/angular-cordova
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent extends AppBase {

  private map;
  private position : any;

  private options = {
    enableHighAccuracy: true,
    maximumAge: 3600000
  }
  
  constructor(private cordovaService : CordovaService) {
    super();
  }

  ngOnInit() {
    //Cordova.deviceready.subscribe(() => {
      this.loadMap();
    //});
  }
  /*
  getCurrentPosition(): Observable<any> {
    if (!this.sub) {
      this.sub = this.geolocationService.watchPosition(
        map((res) => {
          // console.log("watchPosition update");
          this.position = {
            lat: (<any>res).coords.latitude,
            lng: (<any>res).coords.longitude
          };
        })
      );
    }

    if (this.position) {
      return of(this.position);
    } else {
      return this.sub.first().timeout(10000).catch(() => {
        return of({});
      });
    }
  }*/

  loadMap() : void {
    let div = document.getElementById("map_canvas");

    let options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
    }

    let watchID = (<any>window).navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    function onSuccess(position) {
      this.position = new (<any>window).plugin.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.cordovaService.window().position = this.position;
      alert(this.position);
    };

    function onError(error) {
      (<any>window).navigator.notification.alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n ');
    }

    function onMapReady() {
      //(<any>window).navigator.notification.alert('lat: ' + this.position.lat + "\n" + this.position.lng);
      //this.map.showDialog();
      //this.map.setCenter(this.position);
      //this.map.setZoom(13);
      alert("The google map is available on this device.");
    }
    
    this.map = (<any>window).plugin.google.maps.Map.getMap(div);
    this.map.addEventListener((<any>window).plugin.google.maps.event.MAP_READY, onMapReady);
    // Wait until the map is ready status.
  }

}
