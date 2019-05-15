import { Injectable,NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fromEvent } from 'rxjs';
import { ObjectUtils } from './utils';

function _window(): any {
 // return the global native browser window object
 return window;
}

declare const device;
declare const ContextMenu;
declare const Camera;

//https://medium.com/@EliaPalme/how-to-wrap-an-angular-app-with-apache-cordova-909024a25d79
@Injectable()
export class CordovaService {
   
   private resume: BehaviorSubject<boolean>;
   
   constructor(private zone: NgZone) {
      this.resume = new BehaviorSubject<boolean>(null);
      fromEvent(document, 'resume').subscribe(event => {
         this.zone.run(() => {
            this.onResume();
         });
      });
    }
   
   get cordova(): any {
      return _window().cordova;
   }

   get window(): any {
      return _window();
   }

   get Camera() {
      return Camera;
   }

   get ContextMenu() {
      return ContextMenu;
   }

   get device() {
      return device;
   }

   get onCordova(): boolean {
    return !!_window().cordova;
    }
   public onResume(): void {
      this.resume.next(true);
   }

   get devicePlatform() : string {
      return device != undefined ? device.platform : "browser";
   }

   get isBrowser() : boolean {
      try {
         return this.devicePlatform == "browser";
      }
      catch(e){
         console.error(e);
         return true;
      }
   }

   public openLinkInBrowser(url: string) {
      _window().SafariViewController.isAvailable(function(available) {
          if (available) {
             _window().SafariViewController.show({
                url: url,
                barColor: "#f7f7f9",
                tintColor: "#1ca8dd",
                controlTintColor: "#1ca8dd",
             });
          } else {
               _window().cordova.InAppBrowser.open(url,"_blank");
          }
     })
  }

 /*
  -------Solving routing issues
   Cordova has some issues in dealing with Angular default PathLocationStrategy as it does not seem to fully support HTML5 single page applications. Instead, the router should be instructed to use the HashLocationStrategy.

   RouterModule.forRoot(appRoutes, { useHash: true})
   
   ------Disable user selection
   In contrast to web browsers, most native applications do not allow the selection of the texts on the UI. To make our Angular wrapped app look more like a native application, I recommend disabling the text selection.

   To disable user text selection, it is sufficient to add a custom CSS rule that applies to any HTML element except for the input fields.

   * {
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   }

   input {
   -webkit-user-select: auto !important;
   -khtml-user-select: auto !important;
   -moz-user-select: auto !important;
   -ms-user-select: auto !important;
   user-select: auto !important;
   }
   
   */
}