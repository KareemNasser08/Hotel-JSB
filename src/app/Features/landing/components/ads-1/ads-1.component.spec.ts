import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ads1Component } from './ads-1.component';

describe('Ads1Component', () => {
  let component: Ads1Component;
  let fixture: ComponentFixture<Ads1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ads1Component]
    });
    fixture = TestBed.createComponent(Ads1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
