import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { EventsModule } from './events/events.module';
import { ThingsToDoModule } from './things-to-do/things-to-do.module';
import { NewsModule } from './news/news.module';
import { GetInvolvedModule } from './get-involved/get-involved.module';
import { AboutOtcModule } from './about-otc/about-otc.module';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestPipe } from './pipes/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    EventsModule,
    ThingsToDoModule,
    NewsModule,
    GetInvolvedModule,
    AboutOtcModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
