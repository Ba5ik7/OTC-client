import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideColumnRightComponent } from './side-column-right.component';

describe('SideColumnRightComponent', () => {
  let component: SideColumnRightComponent;
  let fixture: ComponentFixture<SideColumnRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideColumnRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideColumnRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
