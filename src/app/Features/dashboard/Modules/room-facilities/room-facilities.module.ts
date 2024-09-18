import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomFacilitiesRoutingModule } from './room-facilities-routing.module';
import { RoomFacilitiesComponent } from './room-facilities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditFacilityComponent } from './components/add-edit-facility/add-edit-facility.component';


@NgModule({
  declarations: [
    RoomFacilitiesComponent,
    AddEditFacilityComponent,

  ],
  imports: [
    CommonModule,
    RoomFacilitiesRoutingModule,
    SharedModule
  ]
})
export class RoomFacilitiesModule { }
