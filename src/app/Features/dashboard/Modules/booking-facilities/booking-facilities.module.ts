import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingFacilitiesRoutingModule } from './booking-facilities-routing.module';
import { BookingFacilitiesComponent } from './booking-facilities.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';


@NgModule({
  declarations: [
    BookingFacilitiesComponent,
    BookingListComponent,

  ],
  imports: [
    CommonModule,
    BookingFacilitiesRoutingModule
  ]
})
export class BookingFacilitiesModule { }
