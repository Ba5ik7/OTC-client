import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'things-to-do',
    loadChildren: () => import('./things-to-do/things-to-do.module').then(m => m.ThingsToDoModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'get-involved',
    loadChildren: () => import('./get-involved/get-involved.module').then(m => m.GetInvolvedModule)
  },
  {
    path: 'about-otc',
    loadChildren: () => import('./about-otc/about-otc.module').then(m => m.AboutOtcModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
