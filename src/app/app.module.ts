import { ApiService } from './service/services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './global/navbar.component';
import { MapsComponent } from './maps/maps.component';
import { FormsModule } from '@angular/forms';
import { CordovaService } from './cordova.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapsComponent,
    LoginComponent
  ],
  /*entryComponents: [
    LoginComponent
  ],*/
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule
  ],
  providers: [CordovaService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
