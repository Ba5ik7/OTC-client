import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../modals/nav-item';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navItems: NavItem[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.navItems.subscribe((data: NavItem[]) => this.navItems = [ ...data ]);
  }
}
