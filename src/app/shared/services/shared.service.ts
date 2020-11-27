import { Injectable } from '@angular/core';
import { NavItem } from '../modals/nav-item';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpService) { }

  private navItemUrl: string = '/api/v1/hello';
  get navItems() {
    return this.http.get<NavItem[]>(this.navItemUrl);
  }
}
