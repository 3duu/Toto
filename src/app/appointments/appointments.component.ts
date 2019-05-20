import { SessionService } from './../session/session.service';
import { Appointment } from './../entity/Appointment';
import { Component } from '@angular/core';
import { AppBase } from '../appbase';
import { Router, ActivatedRoute } from '@angular/router';
import { APPOINTMENTS_WIZARD_PAGE } from '../application';
import { AppointmentsApiService } from '../service/services';
import { ReturnCode } from '../entity/system';
import { ObjectUtils } from '../utils';
import { User } from '../entity/User';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent extends AppBase {

  constructor(private session : SessionService, 
    private router : Router, 
    private activatedRoute : ActivatedRoute,
    private api : AppointmentsApiService) {
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
  selector: 'app-appointments-thumb',
  templateUrl: './appointments.thumb.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsThumbComponent extends AppBase {

  constructor(private session : SessionService, private api : AppointmentsApiService) {
    super();
  }

  protected appointments : Appointment[] = [];
  user : User;

  ngOnInit(){
    
  }

  ngAfterViewInit() {
    this.loading = true;
    if(!ObjectUtils.isEmpty(this.user)){

      const apps = this.api.getByUser(this.session.getCurrentUser());
    
      apps.subscribe(result => {

        console.log(result);
        this.loading = false;

        if (result && result.sid) {
          if(result.code == ReturnCode.SUCCESS){
              this.appointments = result.entity;
          }
          else  {
          }
        }
        
      }, error => {
        console.error(error);
        this.loading = false;
      });
    }
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
