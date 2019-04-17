import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { Type } from '@angular/core';
import { HomeComponent } from './home/home.component';


export const WELCOME_PAGE = WelcomeComponent;
export const LOGIN_PAGE = LoginComponent;
export const HOME_PAGE = HomeComponent;

export class Pages {
    static WELCOME_PAGE : Type<any> = WelcomeComponent;
    static LOGIN_PAGE : Type<any> = LoginComponent;
    static HOME_PAGE : Type<any> = HomeComponent;
}