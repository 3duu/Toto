import { Appointment } from './../entity/Appointment';
import { Component, OnInit } from '@angular/core';
import { AppBase } from '../appbase';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent extends AppBase {

  constructor() {
    super();
  }

  private appointments : Appointment[] = [];

  ngOnInit() {
  }

}
