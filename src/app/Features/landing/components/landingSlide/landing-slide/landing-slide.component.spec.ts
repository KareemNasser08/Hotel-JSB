import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSlideComponent } from './landing-slide.component';

describe('LandingSlideComponent', () => {
  let component: LandingSlideComponent;
  let fixture: ComponentFixture<LandingSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingSlideComponent]
    });
    fixture = TestBed.createComponent(LandingSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
