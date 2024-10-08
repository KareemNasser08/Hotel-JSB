import { ViewRoomComponent } from './components/view-room/view-room.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';

const routes: Routes = [
  { path: '', component: RoomsComponent },
  { path: "view/:id", component: ViewRoomComponent },
  { path: 'add-edit-room', component: AddEditRoomComponent },
  { path: 'edit/:id', component: AddEditRoomComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {
}
