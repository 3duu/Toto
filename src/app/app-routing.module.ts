import { LOGIN_PAGE, WELCOME_PAGE, HOME_PAGE } from './application';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*{ path: 'home', component: HOME_PAGE},
  { path: 'welcome', component: WELCOME_PAGE},
  { path: 'login', component: LOGIN_PAGE },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
