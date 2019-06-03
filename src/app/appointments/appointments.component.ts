import { WorkingDays, Weekends } from './../entity/system';
import { AppointmentsApiService } from './../service/services';
import { CarouselComponent } from './../templates/carousel/carousel.component';
import { Appointment, User, Pet, AppointmentType, AppointmentExecutionFrequency } from './../entity/entities';
import { SessionService } from './../session/session.service';
import { Component, ViewChild } from '@angular/core';
import { AppBase } from '../appbase';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { APPOINTMENTS_WIZARD_PAGE } from '../application';
import { ReturnCode, Domain } from '../entity/system';
import { ObjectUtils, StringUtils } from '../utils';

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

  constructor(
    session : SessionService, 
    private api: AppointmentsApiService, 
    private router : Router, 
    private activatedRoute: ActivatedRoute) {
    super(session);
  }

  @ViewChild(CarouselComponent) private carouselComponent : CarouselComponent;

  protected appointment : Appointment;
  protected types : AppointmentType[];
  protected frequency : Domain[];
  protected workingdays : Domain[];
  protected weekends : Domain[];

  protected type : number = 0;
  protected often : number = 0;
  protected time : string = "12:00";
  protected weekend : number = 0;
  protected workingday : number = 0;
  protected date : Date;

  private finish : boolean = false;
  protected currentDate : Date;

  ngOnInit() {
    this.appointment = new Appointment();
    this.appointment.user = this.session.getCurrentUser();
    this.appointment.appointmentType = new AppointmentType();
    this.loading = true;
    const types = this.api.getTypes();

    this.frequency = Domain.fromEnum(AppointmentExecutionFrequency, this.language.getAppointmentOften);
    this.workingdays = Domain.fromEnum(WorkingDays, this.language.getWorkingDay);
    this.weekends = Domain.fromEnum(Weekends, this.language.getWeekend);
    this.setDate();
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
    if(this.loading)
      return;
    this.appointment.pet = pet;
    this.carouselComponent.next();
    this.finish = true;
  }

  private setDate() {

    this.currentDate = new Date();
    const ping = this.session.authenticationService.infoService.doPing();
    ping.subscribe(result => {

      if(result.code == ReturnCode.SUCCESS) {
        this.currentDate = new Date(result.date);
        this.date = this.currentDate;
      }
    });
    this.date = this.currentDate;
    (<any>window).currentDate = this.currentDate;
  }

  save() {

    if(this.loading)
      return;

    this.appointment.date = this.date != undefined ? this.date : this.currentDate;
    if(StringUtils.isEmpty(this.time)){
      this.time = this.currentDate.getHours() + ":" + this.currentDate.getMinutes();
    }
    this.loading = true;

    const often = Domain.getDomainByValue(this.often, this.frequency);

    this.appointment.appointmentType.id = this.type;

    //add time to date
    const time = this.time.split(":");
    const hours = parseInt(time[0]);
    const minutes = parseInt(time[1]);
    this.appointment.date.setHours(hours, minutes, 0, 0);

    const saving = this.api.save(this.appointment);
    saving.subscribe(result => {

      console.log(result);
      this.loading = false;

      if(result && result.sid) {
        if(result.code == ReturnCode.SUCCESS){
          this.session.zone.run(() =>
          this.router.navigate(['.'], { relativeTo: this.activatedRoute.parent }));
        }
      }
      
    }, error => {
      console.error(error);
      this.loading = false;
    });

  }


}
