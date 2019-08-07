import { AlertComponent } from './../templates/alert/alert.component';
import { Weekday, getWeekday, addDays } from './../entity/system';
import { AppointmentsApiService } from './../service/services';
import { CarouselComponent } from './../templates/carousel/carousel.component';
import { Appointment, Pet, AppointmentExecutionFrequency } from './../entity/entities';
import { SessionService } from './../session/session.service';
import { Component, ViewChild, Inject } from '@angular/core';
import { AppBase } from '../appbase';
import { Router, ActivatedRoute } from '@angular/router';
import { APPOINTMENTS_WIZARD_PAGE } from '../application';
import { ReturnCode, Domain } from '../entity/system';
import { ObjectUtils, StringUtils } from '../utils';
import { ColorClass } from '../styles/styles';

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
    this.loadAppointments();
  }

  loadAppointments() {

    this.loading = true;
    this.api.getByUser(this.user).subscribe(result => {

      this.loading = false;

      if (result && result.sid) {
        if(result.code == ReturnCode.SUCCESS){

          result.data.forEach(app => {
            this.appointments.push(Appointment.newInstance(app));
          });

          (<any>window).appointments = this.appointments;
        }
      }
    }, error => {
      console.error(error);
      this.loading = false;
    });
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

  ngAfterViewInit() {

    this.loading = true;
    if(!ObjectUtils.isEmpty(this.user)){

      if(this.session.getCurrentUser() == undefined){
        this.loading = false;
        return;
      }

      if(this.session.getCurrentUser().appointments != undefined) {
        this.session.getCurrentUser().appointments.forEach(app => {
          const newApp : Appointment = Appointment.newInstance(app);
          this.appointments.push(newApp);
          this.session.notificationService.setAlarm(newApp);
        });
      }

    /*
      this.api.getByUser(this.session.getCurrentUser()).subscribe(result => {

        console.log(result);
        this.loading = false;

        if (result && result.sid) {
          if(result.code == ReturnCode.SUCCESS){
            result.data.forEach(app => {
              const newApp : Appointment = Appointment.newInstance(result.date, app);
              this.appointments.push(newApp);
              this.session.notificationService.setAlarm(newApp);
            });
          }
        }
        
      }, error => {
        console.error(error);
        this.loading = false;
      });*/
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
    private activatedRoute: ActivatedRoute,
    @Inject(AppointmentsComponent) private appointmentsComponent: AppointmentsComponent) {
    super(session);
  }

  @ViewChild(CarouselComponent, { static: false }) private carouselComponent : CarouselComponent;
  @ViewChild("petSavingMsg", { static: false }) private alert: AlertComponent;

  protected appointment : Appointment;
  protected frequency : Domain[];
  protected workingdays : Domain[];

  protected type : number = 1;
  protected often : number = 0;
  protected time : string = "12:00";
  protected workingday : number = 0;
  protected date : Date = new Date();

  private finish : boolean = false;

  ngOnInit() {

    this.appointment = new Appointment();
    this.loading = true;
    this.frequency = Domain.fromEnum(AppointmentExecutionFrequency, this.language.getAppointmentOften);
    this.workingdays = Domain.fromEnum(Weekday, this.language.getWeekday);
    this.setDate();
  }

  selectPet(pet : Pet) {
    if(this.loading)
      return;
    this.appointment.pet = pet;
    this.carouselComponent.next();
    this.finish = true;
  }

  private setDate() {

    this.session.authenticationService.infoService.doPing().subscribe(result => {
      if(result.code == ReturnCode.SUCCESS) {
        this.appointment = new Appointment();
      }
    });
  }

  save() {
    
    if(this.loading)
      return;

    try{
      this.alert.hide();

      this.appointment.date = this.date;
      if(StringUtils.isEmpty(this.time)){
        this.time = this.date.getHours() + ":" + this.date.getMinutes();
      }
      this.loading = true;

      const often = Domain.getDomainByValue(this.often, this.frequency);
      this.appointment.frequencyType = ObjectUtils.isEmpty(often) ? AppointmentExecutionFrequency.ONCE : often.enumValue;

      if(this.appointment.frequencyType == AppointmentExecutionFrequency.WEEKDAY){
        this.appointment.date = new Date("2-27-1991");
        for(let i = 0; i < 7; i++){
          if(getWeekday(this.appointment.date) != this.workingday){
            this.appointment.date = addDays(this.appointment.date, 1);
          }
        }
        console.log(this.language.getWeekday(getWeekday(this.appointment.date)));
      }
  
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
            this.appointmentsComponent.loadAppointments();
          }
          else {
            this.alert.show(this.api.getErrorMessage(this.language, result.code), ColorClass.danger);
          }
        }
      }, error => {
        this.loading = false;
        this.alert.show(this.language.connectionError, ColorClass.danger);
        console.error(error);
      });
    }
    catch(e){
      this.loading = false;
    }
  }
}
