import { Injectable } from '@angular/core';
import { HomeModule } from '../home.module';

@Injectable({
  providedIn: HomeModule
})
export class HomeService {

  constructor() { }
}
