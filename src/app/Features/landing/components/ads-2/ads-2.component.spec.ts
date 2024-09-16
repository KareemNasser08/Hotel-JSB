import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ads2Component } from './ads-2.component';

describe('Ads2Component', () => {
  let component: Ads2Component;
  let fixture: ComponentFixture<Ads2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ads2Component]
    });
    fixture = TestBed.createComponent(Ads2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
