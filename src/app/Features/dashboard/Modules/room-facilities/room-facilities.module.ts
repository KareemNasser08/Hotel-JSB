import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomFacilitiesRoutingModule } from './room-facilities-routing.module';
import { RoomFacilitiesComponent } from './room-facilities.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RoomFacilitiesComponent,

  ],
  imports: [
    CommonModule,
    RoomFacilitiesRoutingModule,
    SharedModule
  ]
})
export class RoomFacilitiesModule { }
