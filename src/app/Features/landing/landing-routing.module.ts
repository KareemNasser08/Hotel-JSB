import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'adDetails/:id', loadChildren: () => import('./ad-details/ad-details.module').then(m => m.AdDetailsModule) },
  { path: 'explore', loadChildren: () => import('./explore/explore.module').then(m => m.ExploreModule) },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
