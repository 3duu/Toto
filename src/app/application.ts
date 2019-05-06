import { Type } from '@angular/core';

export const WELCOME_PAGE = "welcome";
export const LOGIN_PAGE = "signin";
export const HOME_PAGE = "home";
export const REGISTER_USER_PAGE = "signup";
//export const REGISTER_PET_PAGE = RegisterPetComponent;
export const PETS_PAGE = "pets";
export const MAPS_PAGE = "maps";
export const AUTOLOGIN_PAGE = "login";

export interface ApplicationRoute {
    component : Type<any>;
    url : string;
}

