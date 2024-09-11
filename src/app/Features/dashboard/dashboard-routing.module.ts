import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'Users', loadChildren: () => import('./Modules/users/users.module').then(m => m.UsersModule) },
      { path: 'Rooms', loadChildren: () => import('./Modules/rooms/rooms.module').then(m => m.RoomsModule) },
      { path: 'Ads', loadChildren: () => import('./Modules/ads/ads.module').then(m => m.AdsModule) },
      { path: 'Booking-Facilities', loadChildren: () => import('./Modules/booking-facilities/booking-facilities.module').then(m => m.BookingFacilitiesModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
