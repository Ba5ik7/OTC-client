import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutOtcComponent } from './about-otc/about-otc.component';


const routes: Routes = [
  {
    path: '',
    component: AboutOtcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutOtcRoutingModule { }