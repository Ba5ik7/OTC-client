import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { FooterComponent } from './footer/footer.component';
import { SideColumnRightComponent } from './side-column-right/side-column-right.component';
import { MaterialModule } from 'src/app/material-module';
import { SidePanelWidgetsComponent } from './side-panel-widgets/side-panel-widgets.component';



@NgModule({
  declarations: [HeaderComponent, NavComponent, HomeBannerComponent, FooterComponent, SideColumnRightComponent, SidePanelWidgetsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent, NavComponent, HomeBannerComponent, FooterComponent, SideColumnRightComponent]
})
export class ComponentsModule { }
