import { Appointment } from './entity/entities';
import { CordovaService } from './cordova.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //phonegap plugin add cordova-plugin-local-notifications
  //https://github.com/katzer/cordova-plugin-local-notifications
  constructor(private cordova : CordovaService) { }

  setAlarm(appointment : Appointment) {
    this.cordova.cordova.plugins.notification.local.schedule({
      title: appointment.appointmentType.description,
      text: appointment.description,
      trigger: { at: appointment.alarm }
    });
  }
  
}
