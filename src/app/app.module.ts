import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HomeModule } from './home/home.module';
import { EventsModule } from './events/events.module';
import { ThingsToDoModule } from './things-to-do/things-to-do.module';
import { NewsModule } from './news/news.module';
import { GetInvolvedModule } from './get-involved/get-involved.module';
import { AboutOtcModule } from './about-otc/about-otc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    EventsModule,
    ThingsToDoModule,
    NewsModule,
    GetInvolvedModule,
    AboutOtcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
