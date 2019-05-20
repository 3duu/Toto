import { SessionService } from './../session/session.service';
import { MenuService } from './../navbar/menuService';
import { Appointment } from './../entity/Appointment';
import { Component } from '@angular/core';
import { AppBase } from '../appbase';
import { Router, ActivatedRoute } from '@angular/router';
import { APPOINTMENTS_WIZARD_PAGE } from '../application';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent extends AppBase {

  constructor(private session : SessionService, private router : Router, private activatedRoute : ActivatedRoute) {
    super();
  }

  protected appointments : Appointment[] = [];

  ngOnInit() {
    this.title = this.language.appointments;
    this.setTitle(this.session.menuService);
  }

  add() {
    this.session.zone.run(() => 
      this.router.navigate([APPOINTMENTS_WIZARD_PAGE], {replaceUrl: true, relativeTo: this.activatedRoute}));
  }

}

@Component({
  selector: 'app-appointments-wizard',
  templateUrl: './appointments.wizard.component.html',
  styleUrls: ['./appointments.wizard.component.css']
})
export class AppointmentsWizardComponent extends AppBase {

  constructor(private session : SessionService) {
    super();
  }

  protected appointment : Appointment;

  ngOnInit() {
    
  }


}
