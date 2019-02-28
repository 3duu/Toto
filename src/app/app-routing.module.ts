import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceInfoComponent } from './device-info/device-info.component';

const routes: Routes = [
    { path: 'device-info', component: DeviceInfoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
