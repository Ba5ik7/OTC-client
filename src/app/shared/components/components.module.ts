import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { FooterComponent } from './footer/footer.component';
import { SideColumnRightComponent } from './side-column-right/side-column-right.component';
import { MaterialModule } from 'src/app/material-module';
import { SidePanelWidgetsComponent } from './side-panel-widgets/side-panel-widgets.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { WidgetFactoryComponent } from './widget-factory/widget-factory.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [HeaderComponent, NavComponent, HomeBannerComponent, FooterComponent, SideColumnRightComponent, SidePanelWidgetsComponent, SliderComponent, WidgetFactoryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [HeaderComponent, NavComponent, HomeBannerComponent, FooterComponent, SideColumnRightComponent, SidePanelWidgetsComponent, SliderComponent, WidgetFactoryComponent]
})
export class ComponentsModule { }
