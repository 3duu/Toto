import { UserApiService, PetApiService } from './service/services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { FormsModule } from '@angular/forms';
import { CordovaService } from './cordova.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PetsComponent, AddPetsComponent, PetPicker } from './pets/pets.component';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapsComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    PetsComponent,
    AddPetsComponent,
    PetPicker
  ],
  entryComponents: [
    LoginComponent,
    AlertComponent,
    MapsComponent,
    HomeComponent,
    RegisterComponent,
    PetsComponent,
    AddPetsComponent,
    PetPicker
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
  providers: [CordovaService, UserApiService, PetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
