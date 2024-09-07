import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFacilitiesComponent } from './booking-facilities.component';

describe('BookingFacilitiesComponent', () => {
  let component: BookingFacilitiesComponent;
  let fixture: ComponentFixture<BookingFacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingFacilitiesComponent]
    });
    fixture = TestBed.createComponent(BookingFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
