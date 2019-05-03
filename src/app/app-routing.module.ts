import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { LOGIN_PAGE, WELCOME_PAGE, HOME_PAGE, REGISTER_USER_PAGE } from './application';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register/register.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: HOME_PAGE, component: HomeComponent, canActivateChild: [AuthGuardService]},
  { path: WELCOME_PAGE, component: WelcomeComponent},
  { path: LOGIN_PAGE, component: LoginComponent },
  { path: REGISTER_USER_PAGE, component: RegisterUserComponent },
 // { path: 'add-pet', component: REGISTER_PET_PAGE },
  //{ path: '', redirectTo: 'welcome', pathMatch: 'full'},
 // { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
