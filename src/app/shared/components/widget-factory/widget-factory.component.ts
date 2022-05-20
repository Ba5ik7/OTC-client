import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-factory',
  templateUrl: './widget-factory.component.html',
  styleUrls: ['./widget-factory.component.scss']
})
export class WidgetFactoryComponent implements OnInit {

  @Input() widgets: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
