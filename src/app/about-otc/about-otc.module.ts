import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutOtcComponent } from './about-otc/about-otc.component';
import { AboutOtcRoutingModule } from './about-otc-routing.module';



@NgModule({
  declarations: [AboutOtcComponent],
  imports: [
    CommonModule,
    AboutOtcRoutingModule
  ]
})
export class AboutOtcModule { }
