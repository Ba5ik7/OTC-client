import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { ImageBase } from '../models/image-base';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<boolean> {

  constructor(private http: HttpService) { }

  private homwUrl: string = '/api/v1/route?routename=home';
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {    
    return this.http.get<ImageBase>(this.homwUrl);
  }
}
