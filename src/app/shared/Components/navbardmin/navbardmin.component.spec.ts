import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardminComponent } from './navbardmin.component';

describe('NavbardminComponent', () => {
  let component: NavbardminComponent;
  let fixture: ComponentFixture<NavbardminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbardminComponent]
    });
    fixture = TestBed.createComponent(NavbardminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
