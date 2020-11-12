import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';


const routes: Routes = [
  {
    path: '',
    component: ThingsToDoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThingsToDoRoutingModule { }