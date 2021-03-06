import { SessionService } from './../session/session.service';
import { MAPS_PAGE, PETS_PAGE, APPOINTMENTS_PAGE } from './../application';
import { Component, ViewChild } from '@angular/core';
import { AppBase } from '../appbase';
import { Router } from '@angular/router';
import { AppointmentsThumbComponent } from '../appointments/appointments.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//phonegap plugin add cordova-plugin-context-menu --save
export class HomeComponent extends AppBase {

  constructor(private router: Router, session : SessionService) {
    super(session);
  }

  @ViewChild(AppointmentsThumbComponent, { static: false }) appointmentsComponent : AppointmentsThumbComponent;

  ngOnInit() {
    this.title = this.applicationName;
    this.setTitle();
    this.enableMenu();
  }

  private enableMenu() : void {
    this.menu.disableMenu = false;
    this.menu.disable = false;
  }

  maps(): void {
    this.router.navigateByUrl(MAPS_PAGE);
  }

  appointments(): void {
    this.router.navigateByUrl(APPOINTMENTS_PAGE);
  }

  pets(): void {
    this.router.navigateByUrl(PETS_PAGE);
  }

  donations(): void {
    alert("Doações");
  }

}
