import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './global/navbar.component';
import { MapsComponent } from './maps/maps.component';
import { FormsModule } from '@angular/forms';
import { GeolocationService } from 'angular-cordova/plugin';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot()
  ],
  providers: [GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
