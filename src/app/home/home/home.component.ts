import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeAds } from '../models/home-ads';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private homeService: HomeService) { }

  public homwAds: HomeAds | null = null;
  public routeData: any;

  ngOnInit(): void {
    // this.homeService.homwAds.subscribe((data: HomeAds) => this.homwAds = data);
    this.activeRoute.data.subscribe((data: any) => this.routeData = data.routeData);
  }

}
