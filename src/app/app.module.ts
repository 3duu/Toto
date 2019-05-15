import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { TextMaskModule } from 'angular2-text-mask';
import { UserApiService, PetApiService, AuthenticationService, InfoService } from './service/services';
import { MenuService } from './navbar/menuService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { CordovaService } from './cordova.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PetTypeComponent, PetsComponent, PetInfoComponent, PetPictureComponent, BreedPickerComponent, PetsWizardComponent } from './pets/pets.component';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { FacebookService, GoogleService } from './socialNetwork/socialNetworkServices';
import { FacebookComponent } from './button/facebook/facebook.component';
import { SignUpComponent } from './button/signup/signup.component';
import { SignInComponent } from './button/signin/signin.component';
import { GoogleComponent } from './button/google/google.component';
import { LocalDatabaseService } from './database/database';
import { AlertComponent } from './alert/alert.component';
import { RegisterUserComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { SessionService } from './session/session.service';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LoadingComponent } from './loading/loading.component';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { MatNativeDateModule, DateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material';
import { DateFormat } from './utils';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    MapsComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    RegisterUserComponent,
    PetsComponent,
    PetInfoComponent,
    PetTypeComponent,
    PetPictureComponent,
    SignInComponent,
    SignUpComponent,
    FacebookComponent,
    GoogleComponent,
    AppointmentsComponent,
    BreedPickerComponent,
    LoadingComponent,
    PetsWizardComponent,
    TutorialComponent,
  ],
  entryComponents: [
    SignInComponent,
    SignUpComponent,
    FacebookComponent,
    GoogleComponent,
    BreedPickerComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    BrowserModule,
    //TextMaskModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    // MatMenuModule,
    MatNativeDateModule,
    // MatPaginatorModule,
    // MatToolbarModule
  ],
  providers: [
    CordovaService, 
    LocalDatabaseService, 
    UserApiService, 
    PetApiService, 
    FacebookService, 
    GoogleService, 
    InfoService,
    AuthenticationService, 
    MenuService,
    { provide: DateAdapter, useClass: DateFormat },
    AuthGuardService,
    SessionService,
    MatDialog,
    Overlay,
    MatNativeDateModule,
    MatDatepicker],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter : DateAdapter<Date>) {
		dateAdapter.setLocale('en-in'); // DD/MM/YYYY
	}
}
