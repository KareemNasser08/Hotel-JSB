import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { ExploreRoomComponent } from './components/explore-room/explore-room.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'explore-Room', component: ExploreRoomComponent },
  { path: 'roomDetails/:id', loadChildren: () => import('./ad-details/ad-details.module').then(m => m.AdDetailsModule) },
  { path: 'explore', loadChildren: () => import('./explore/explore.module').then(m => m.ExploreModule) },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'roomdetails/:id', loadChildren: () => import('./room-details/room-details.module').then(m => m.RoomDetailsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
