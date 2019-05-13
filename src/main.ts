import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

let onDeviceReady = () => {
	if (environment.production) {
	  enableProdMode();
	}
  platformBrowserDynamic().bootstrapModule(AppModule);
};
document.addEventListener('deviceready', onDeviceReady, false);

if((<any>window).cordova == undefined){
	onDeviceReady();
}
//onDeviceReady();
