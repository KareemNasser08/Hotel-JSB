import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingFacilitiesRoutingModule } from './booking-facilities-routing.module';
import { BookingFacilitiesComponent } from './booking-facilities.component';
import { DeleteFacilityComponent } from './components/delete-facility/delete-facility.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookingFacilitiesComponent,
    DeleteFacilityComponent,

  ],
  imports: [
    CommonModule,
    BookingFacilitiesRoutingModule,
    SharedModule
  ]
})
export class BookingFacilitiesModule { }
