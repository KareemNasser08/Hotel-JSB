import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomFacilitiesComponent } from './room-facilities.component';

const routes: Routes = [


  { path: '', component: RoomFacilitiesComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomFacilitiesRoutingModule { }
