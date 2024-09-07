import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingFacilitiesRoutingModule } from './booking-facilities-routing.module';
import { BookingFacilitiesComponent } from './booking-facilities.component';


@NgModule({
  declarations: [
    BookingFacilitiesComponent
  ],
  imports: [
    CommonModule,
    BookingFacilitiesRoutingModule
  ]
})
export class BookingFacilitiesModule { }
