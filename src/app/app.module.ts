import { MatDatepickerModule, MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter } from '@angular/material/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TutorialComponent } from './templates/tutorial/tutorial.component';
import { LoadingComponent } from './templates/loading/loading.component';
import { SignUpComponent } from './templates/button/signup/signup.component';
import { UserApiService, PetApiService, AuthenticationService, InfoService, AppointmentsApiService } from './service/services';
import { MenuService } from './navbar/menuService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CordovaService } from './cordova.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PetTypeComponent, PetsComponent, PetInfoComponent, PetPictureComponent, BreedPickerComponent, PetsWizardComponent } from './pets/pets.component';
import { ModalModule, Overlay } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { FacebookService, GoogleService } from './socialNetwork/socialNetworkServices';
import { LocalDatabaseService } from './database/database';
import { RegisterUserComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { SessionService } from './session/session.service';
import { AppointmentsComponent, AppointmentsWizardComponent, AppointmentsThumbComponent } from './appointments/appointments.component';
import { DateFormat } from './utils';
import { AlertComponent } from './templates/alert/alert.component';
import { SignInComponent } from './templates/button/signin/signin.component';
import { FacebookComponent } from './templates/button/facebook/facebook.component';
import { GoogleComponent } from './templates/button/google/google.component';
import { CarouselComponent } from './templates/carousel/carousel.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgModule } from '@angular/core';
import { MatInputModule, MatMenuModule, MatIconModule, MatInput, MatIcon, MatSuffix, MatSidenavModule, MatToolbarModule, MatTab, MatTabsModule } from '@angular/material';
import { NotificationService } from './notification.service';
import { MatListModule } from '@angular/material/list';

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
    AppointmentsWizardComponent,
    AppointmentsThumbComponent,
    CarouselComponent,
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
    BrowserAnimationsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    NgxMaterialTimepickerModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
    
    // ContextMenuModule.forRoot({
    //   useBootstrap4: true,
    // })
  ],
  providers: [
    CordovaService,
    NotificationService,
    LocalDatabaseService,
    UserApiService, 
    PetApiService, 
    FacebookService, 
    GoogleService, 
    InfoService,
    AppointmentsApiService,
    AuthenticationService,
    MenuService,
    { provide: DateAdapter, useClass: DateFormat },
    AuthGuardService,
    SessionService,
    MatDialog,
    Overlay,
    MatNativeDateModule,
    MatDatepicker,
    MatInput,
    MatIcon,
    MatSuffix],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter : DateAdapter<Date>) {
		dateAdapter.setLocale('en-in'); // DD/MM/YYYY
	}
}
