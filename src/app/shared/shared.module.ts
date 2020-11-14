import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideColumnRightComponent } from './components/side-column-right/side-column-right.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ServicesModule,
    PipesModule,
  ],
  exports: [ComponentsModule, ServicesModule, PipesModule]
})
export class SharedModule { }
