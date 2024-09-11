import { BookingService } from './../../services/booking.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DeleteComponent } from 'src/app/shared/Components/delete/delete.component';



@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent {




  // declerations
  deleteDialogRef: any
  deleteBookingSubscription!: Subscription;



  constructor(
    public dialog: MatDialog,
    private _BookingService: BookingService,
    private _Toastr: ToastrService,

  ) { }


  ngOnInit(): void {

  }



  // delete booking 
  onDeleteAction(id: number): void {
    this.deleteDialogRef = this.dialog.open(DeleteComponent, {
      data: { id, name: 'Booking' },
      width: '45%',
    });

    this.deleteDialogRef.afterClosed().subscribe((result: { id: number }) => {
      this.deletebooking(result.id);
    });
  }

  deletebooking(id: number): void {
    this.deleteBookingSubscription = this._BookingService.deletebooking(id)
      .subscribe({
        next: () => {
          this._Toastr.success('Booking deleted successfully');

          // update bookingList func

        },
        error: () => {
          this._Toastr.error('Something went wrong', 'Error');
        },
      });
  }




}

