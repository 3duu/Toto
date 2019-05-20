import { AppointmentsComponent, AppointmentsWizardComponent } from './appointments/appointments.component';
import { PetsComponent, PetTypeComponent, PetInfoComponent, PetPictureComponent, PetsWizardComponent } from './pets/pets.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { LOGIN_PAGE, WELCOME_PAGE, HOME_PAGE, REGISTER_USER_PAGE, PETS_PAGE, PETS_WIZARD_DEF_PAGE, PETS_WIZARD_INFO_PAGE, PETS_WIZARD_PIC_PAGE, PETS_WIZARD_PAGE, APPOINTMENTS_PAGE, APPOINTMENTS_WIZARD_PAGE } from './application';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register/register.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: HOME_PAGE, component: HomeComponent, canActivateChild: [AuthGuardService]},
  { path: WELCOME_PAGE, component: WelcomeComponent},
  { path: LOGIN_PAGE, component: LoginComponent },
  { path: REGISTER_USER_PAGE, component: RegisterUserComponent },
  { path : APPOINTMENTS_PAGE, component: AppointmentsComponent, children : [
    { path: APPOINTMENTS_WIZARD_PAGE, component: AppointmentsWizardComponent},] },
  { path: PETS_PAGE, component: PetsComponent, children : [
    { path: PETS_WIZARD_PAGE, component: PetsWizardComponent},
    { path: PETS_WIZARD_DEF_PAGE, component: PetTypeComponent},
    { path: PETS_WIZARD_INFO_PAGE, component: PetInfoComponent},
    { path: PETS_WIZARD_PIC_PAGE, component: PetPictureComponent},
  ] },
  {path: '**', redirectTo: LOGIN_PAGE}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
