import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { HomeAds } from '../models/home-ads';
import { HomeServiceModule } from './home-service/home-service.module';

@Injectable({
  providedIn: HomeServiceModule
})
export class HomeService {

  constructor(private http: HttpService) { }

  private homwAdsUrl: string = '/api/v1/hello';
  get homwAds() {
    return this.http.get<HomeAds>(this.homwAdsUrl);
  }
}
