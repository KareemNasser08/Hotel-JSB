import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: '', component: BookingComponent },
  { path: 'view/:id', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
