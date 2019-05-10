import { Type } from '@angular/core';

export const WELCOME_PAGE = "welcome";
export const LOGIN_PAGE = "signin";
export const HOME_PAGE = "home";
export const REGISTER_USER_PAGE = "signup";
//export const REGISTER_PET_PAGE = RegisterPetComponent;
export const MAPS_PAGE = "maps";
//export const AUTOLOGIN_PAGE = "login";
export const PETS_PAGE = "pets";
export const PETS_WIZARD_DEF_PAGE = "definition";
export const PETS_WIZARD_INFO_PAGE = "info";
export const PETS_WIZARD_PIC_PAGE = "picture";
export const PETS_VIEW_PAGE = "view";
export const PETS_WIZARD_PAGE = "wizard";

export interface ApplicationRoute {
    component : Type<any>;
    url : string;
}

