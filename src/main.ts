import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//declare var cordova;
/*
let startApp = () => {
	if (environment.production) {
	  enableProdMode();
	}

	platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.error(err));
};*/
/*
let onDeviceReady = () => {
	startApp();
};

document.addEventListener('deviceready', onDeviceReady, false);

try {
  if(!cordova){
	}
}
catch(e) {
  startApp();
}*/

//startApp();

let onDeviceReady = () => {
	if (environment.production) {
	  enableProdMode();
	}
  platformBrowserDynamic().bootstrapModule(AppModule);
};
document.addEventListener('deviceready', onDeviceReady, false);
