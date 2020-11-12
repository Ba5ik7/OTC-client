import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOtcComponent } from './about-otc.component';

describe('AboutOtcComponent', () => {
  let component: AboutOtcComponent;
  let fixture: ComponentFixture<AboutOtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
