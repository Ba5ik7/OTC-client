import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { ThingsToDoRoutingModule } from './things-to-do-routing.module';



@NgModule({
  declarations: [ThingsToDoComponent],
  imports: [
    CommonModule,
    ThingsToDoRoutingModule
  ]
})
export class ThingsToDoModule { }
