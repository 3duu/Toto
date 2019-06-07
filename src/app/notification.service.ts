import { Appointment } from './entity/entities';
import { CordovaService } from './cordova.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //phonegap plugin add cordova-plugin-local-notifications
  constructor(private cordova : CordovaService) { }

  setAlarm(appointment : Appointment) {
    this.cordova.cordova.plugins.notification.local.schedule({
      id: 5,
      title: "Sample Notification",
      text: "kill the batman ",
      at: appointment.alarm,
      icon: 'res://icon',
      smallIcon: 'res://icon',
      every: 87600
  });
  }

  
}
