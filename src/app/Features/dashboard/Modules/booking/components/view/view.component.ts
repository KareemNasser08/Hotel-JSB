import { Booking } from './../../interfaces/booking';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {





  // declerations
  bookingDetails: Booking | any;
  bookingId: number = 0;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  constructor(

    private _BookingService: BookingService,
    private _Toastr: ToastrService,
    private _ActivatedRoute: ActivatedRoute,

  ) {

    this.bookingId = this._ActivatedRoute.snapshot.params['id'];

    if (this.bookingId) {

      this.viewRoom(this.bookingId);

    }


  }


  ngOnInit(): void {

    this.items = [{ label: 'Bookings', routerLink: ['/dashboard/Booking'] },
    { label: 'Booking details' }];

    this.home = { icon: 'pi pi-home', routerLink: '/dashboard/home' };

  }


  viewRoom(id: number) {

    this._BookingService.onViewBookingDetails(id).subscribe({

      next: (resp) => {

        this.bookingDetails = resp.data.booking;

        console.log(this.bookingDetails);


      },
      error: (err) => {

      }
    })
  }





}



