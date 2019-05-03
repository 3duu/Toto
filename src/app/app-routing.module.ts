import { LOGIN_PAGE, WELCOME_PAGE, HOME_PAGE, REGISTER_USER_PAGE } from './application';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HOME_PAGE},
  { path: 'welcome', component: WELCOME_PAGE},
  { path: 'signin', component: LOGIN_PAGE },
  { path: 'signup', component: REGISTER_USER_PAGE },
 // { path: 'add-pet', component: REGISTER_PET_PAGE },
  //{ path: '', redirectTo: 'welcome', pathMatch: 'full'},
 // { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
