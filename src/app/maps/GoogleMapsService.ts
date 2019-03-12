import { Injectable, NgZone } from '@angular/core';
import { Observable } from "rxjs";
import { mergeMap } from 'rxjs/operators';
import { Cordova, ZoneObservable } from 'angular-cordova';

export enum PositionError {
    PERMISSION_DENIED = 0,
    POSITION_UNAVAILABLE,
    TIMEOUT
}

@Injectable()
export class GoogleMapsService {
    constructor(private zone: NgZone) {}

    getMap(div, onMapReady): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            let map : any = (<any>window).plugin.google.maps.Map.getMap(div);
            map.addEventListener((<any>window).plugin.google.maps.event.MAP_READY, onMapReady);
        })));
    }
}
