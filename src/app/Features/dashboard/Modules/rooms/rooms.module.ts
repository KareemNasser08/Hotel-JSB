import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { ViewRoomComponent } from './components/view-room/view-room.component';
import { DividerModule } from 'primeng/divider';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    ViewRoomComponent,
    AddEditRoomComponent

  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule,
    DividerModule,
    NgImageSliderModule,
    CarouselModule
  ]

})
export class RoomsModule { }
