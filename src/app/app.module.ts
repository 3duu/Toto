import { UserApiService, PetApiService } from './service/services';
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
import { LOGIN_PAGE, HOME_PAGE, REGISTER_USER_PAGE, WELCOME_PAGE, REGISTER_PET_PAGE, PETS_PAGE, MAPS_PAGE, ALERT_TEMPLATE } from './application';
import { FacebookService, GoogleService } from './socialNetwork/socialNetworkServices';
import { SignInComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MAPS_PAGE,
    LOGIN_PAGE,
    ALERT_TEMPLATE,
    HOME_PAGE,
    REGISTER_USER_PAGE,
    REGISTER_PET_PAGE,
    PETS_PAGE,
    EditPetsComponent,
    PetPickerComponent,
    WELCOME_PAGE,
    SignInComponent
  ],
  entryComponents: [
    LOGIN_PAGE,
    ALERT_TEMPLATE,
    MAPS_PAGE,
    HOME_PAGE,
    REGISTER_USER_PAGE,
    REGISTER_PET_PAGE,
    PETS_PAGE,
    EditPetsComponent,
    PetPickerComponent,
    WELCOME_PAGE,
    SignInComponent
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
  providers: [CordovaService, UserApiService, PetApiService, FacebookService, GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
