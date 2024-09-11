import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RoomsComponent,
    AddEditRoomComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
