import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelWidgetsComponent } from './side-panel-widgets.component';

describe('SidePanelWidgetsComponent', () => {
  let component: SidePanelWidgetsComponent;
  let fixture: ComponentFixture<SidePanelWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidePanelWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanelWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
