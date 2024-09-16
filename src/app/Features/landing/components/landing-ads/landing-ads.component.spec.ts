import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAdsComponent } from './landing-ads.component';

describe('LandingAdsComponent', () => {
  let component: LandingAdsComponent;
  let fixture: ComponentFixture<LandingAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingAdsComponent]
    });
    fixture = TestBed.createComponent(LandingAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
