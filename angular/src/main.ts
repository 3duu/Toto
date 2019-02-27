import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

let onDeviceReady = () => {
	if (environment.production) {
	  enableProdMode();
	}

	platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.error(err));

	alert('e3e3e3');
};
document.addEventListener('deviceready', onDeviceReady, false);