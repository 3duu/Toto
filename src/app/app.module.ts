import { UserApiService, PetApiService, AuthenticationService } from './service/services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { CordovaService } from './cordova.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EditPetsComponent, PetPickerComponent } from './pets/pets.component';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { WELCOME_PAGE, LOGIN_PAGE, HOME_PAGE, REGISTER_USER_PAGE, PETS_PAGE, MAPS_PAGE, ALERT_TEMPLATE } from './application';
import { FacebookService, GoogleService } from './socialNetwork/socialNetworkServices';
import { FacebookComponent } from './button/facebook/facebook.component';
import { SignUpComponent } from './button/signup/signup.component';
import { SignInComponent } from './button/signin/signin.component';
import { GoogleComponent } from './button/google/google.component';
import { LocalDatabaseService } from './database/database';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WELCOME_PAGE,
    MAPS_PAGE,
    LOGIN_PAGE,
    ALERT_TEMPLATE,
    HOME_PAGE,
    REGISTER_USER_PAGE,
    PETS_PAGE,
    EditPetsComponent,
    PetPickerComponent,
    SignInComponent,
    SignUpComponent,
    FacebookComponent,
    GoogleComponent
  ],
  entryComponents: [
    /*WELCOME_PAGE,
    LOGIN_PAGE,
    ALERT_TEMPLATE,
    MAPS_PAGE,
    HOME_PAGE,
    REGISTER_USER_PAGE,
    PETS_PAGE,*/
    EditPetsComponent,
    PetPickerComponent,
    SignInComponent,
    SignUpComponent,
    FacebookComponent,
    GoogleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [CordovaService, LocalDatabaseService, UserApiService, PetApiService, FacebookService, GoogleService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
