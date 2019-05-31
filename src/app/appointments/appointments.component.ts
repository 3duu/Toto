import { WorkingDays, Weekends } from './../entity/system';
import { AppointmentsApiService } from './../service/services';
import { CarouselComponent } from './../templates/carousel/carousel.component';
import { Appointment, User, Pet, AppointmentType, AppointmentExecutionFrequency } from './../entity/entities';
import { SessionService } from './../session/session.service';
import { Component, ViewChild } from '@angular/core';
import { AppBase } from '../appbase';
import { Router, ActivatedRoute } from '@angular/router';
import { APPOINTMENTS_WIZARD_PAGE } from '../application';
import { ReturnCode, Domain } from '../entity/system';
import { ObjectUtils } from '../utils';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent extends AppBase {

  constructor(session : SessionService, 
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private api : AppointmentsApiService) {
    super(session);
  }

  protected appointments : Appointment[] = [];

  ngOnInit() {
    this.title = this.language.appointments;
    this.setTitle();
    (<any>window).date = new Date();
  }

  add() {
    this.session.zone.run(() => this.router.navigate([APPOINTMENTS_WIZARD_PAGE], {replaceUrl: true, relativeTo: this.activatedRoute}));
  }

}

@Component({
  selector: 'app-appointments-thumb',
  templateUrl: './appointments.thumb.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsThumbComponent extends AppBase {

  constructor(session : SessionService, private api : AppointmentsApiService) {
    super(session);
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
    
  protected isEmpty() : boolean {
    return this.appointments == undefined || this.appointments.length == 0;
  }

}

@Component({
  selector: 'app-appointments-wizard',
  templateUrl: './appointments.wizard.component.html',
  styleUrls: ['./appointments.wizard.component.css']
})
export class AppointmentsWizardComponent extends AppBase {

  constructor(session : SessionService, private api: AppointmentsApiService) {
    super(session);
  }

  @ViewChild(CarouselComponent) private carouselComponent : CarouselComponent;

  protected appointment : Appointment;
  protected types : AppointmentType[];
  protected frequency : Domain[];
  protected workingdays : Domain[];
  protected weekends : Domain[];

  protected often : number = 0;
  protected hour : string = "12:00";
  protected weekend : number = 0;
  protected workingday : number = 0;
  protected date : Date;

  ngOnInit() {
    this.appointment = new Appointment();
    this.appointment.appointmentType = new AppointmentType();
    this.loading = true;
    const types = this.api.getTypes();

    this.frequency = Domain.fromEnum(AppointmentExecutionFrequency, this.language.getAppointmentOften);
    this.workingdays = Domain.fromEnum(WorkingDays, this.language.getWorkingDay);
    this.weekends = Domain.fromEnum(Weekends, this.language.getWeekend);

    types.subscribe(result => {

      console.log(result);
      this.loading = false;

      if(result && result.sid) {
        if(result.code == ReturnCode.SUCCESS){
          this.types = result.entity;
        }
      }
      
    }, error => {
      console.error(error);
      this.loading = false;
    });
  }

  selectPet(pet : Pet) {
    this.appointment.pet = pet;
    this.carouselComponent.next();
  }


}
