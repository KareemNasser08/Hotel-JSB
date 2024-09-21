import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomDetailsRoutingModule } from './room-details-routing.module';
import { RoomDetailsComponent } from './room-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from '../components/footer/footer.component';
import { LandingModule } from '../landing.module';


@NgModule({
  declarations: [
    RoomDetailsComponent
  ],
  imports: [
    CommonModule,
    RoomDetailsRoutingModule,
    SharedModule,
    LandingModule,
  ]
})
export class RoomDetailsModule { }
