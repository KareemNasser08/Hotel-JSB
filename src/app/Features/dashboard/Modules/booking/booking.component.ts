import { Component, OnInit } from '@angular/core';
import { BookingService } from './services/booking.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DeleteComponent } from 'src/app/shared/Components/delete/delete.component';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [DialogService, MessageService]
})
export class BookingComponent implements OnInit {

  tableData: any;
  ref: DynamicDialogRef | undefined;

  columns: TableColumn[] = [
    { headerTitle: 'User Name', fieldKey: 'user.userName', type: 'object' },
    { headerTitle: 'Room Number', fieldKey: 'room.roomNumber', type: 'object' },
    { headerTitle: 'Total Price', fieldKey: 'totalPrice', type: 'number' },
    { headerTitle: 'Status', fieldKey: 'status', type: 'string' },
    { headerTitle: 'Start Date', fieldKey: 'startDate', type: 'date' },
    { headerTitle: 'End Date', fieldKey: 'endDate', type: 'date' },
    {
      headerTitle: 'Actions', fieldKey: 'actions',
      actions: [
        { key: 'view', icon: 'visibility' },
        { key: 'delete', icon: 'delete' },
      ],
    },
  ];


  constructor(
    private _BookingService: BookingService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    public dialogService: DialogService,
    public messageService: MessageService
  ) { }




  ngOnInit(): void {
    this.getAllBooking();
  }



  getAllBooking() {
    let params = {
      page: 1,
      size: 10
    };
    this._BookingService.onGetAllBooking(params).subscribe({
      next: (res) => {
        this.tableData = res.data.booking;

      }, error: (err) => {

        this._ToastrService.error('error!', err.error.message);
      }
    });
  }



  viewRoom(id: string) {
    this._Router.navigate(['dashboard/Booking/view/', id]);
  }

  deleteRoom(item: any) {
    this.ref = this.dialogService.open(DeleteComponent, {
      data: item,
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((bookingId: any) => {
      if (bookingId) {
        this._BookingService.onDeleteBooking(bookingId).subscribe({
          error: (err) => {

            this._ToastrService.error('error!', err.error.message);
          },
          complete: () => {
            this._ToastrService.success('Booking Removed succefully ')
            this.getAllBooking();
          }
        });

      }
    });
  }

  onActionClick(action: string, item: any) {
    switch (action) {
      case 'view':
        this.viewRoom(item._id);
        break;
      case 'delete':
        this.deleteRoom(item);
        break;
    }
  }

}
