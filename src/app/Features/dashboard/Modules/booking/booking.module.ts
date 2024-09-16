import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';

import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    BookingComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule,

    DividerModule,
    CarouselModule,

  ]
})
export class BookingModule { }
