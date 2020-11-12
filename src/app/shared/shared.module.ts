import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ServicesModule,
    PipesModule
  ]
})
export class SharedModule { }
