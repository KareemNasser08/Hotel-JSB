import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHeadComponent } from './landing-head.component';

describe('LandingHeadComponent', () => {
  let component: LandingHeadComponent;
  let fixture: ComponentFixture<LandingHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingHeadComponent]
    });
    fixture = TestBed.createComponent(LandingHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
