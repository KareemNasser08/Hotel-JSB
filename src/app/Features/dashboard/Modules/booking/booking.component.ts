import { Component, OnInit } from '@angular/core';
import { BookingService } from './services/booking.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DeleteComponent } from 'src/app/shared/Components/delete/delete.component';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [DialogService]
})
export class BookingComponent implements OnInit {

  tableData: any;
  ref: DynamicDialogRef | undefined;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  columns: TableColumn[] = [
    { headerTitle: 'Room Number', fieldKey: 'room.roomNumber', type: 'string' },
    { headerTitle: 'User Name', fieldKey: 'user.userName', type: 'string' },
    { headerTitle: 'Total Price', fieldKey: 'totalPrice', type: 'string' },
    { headerTitle: 'Start Date', fieldKey: 'startDate', type: 'date' },
    { headerTitle: 'End Date', fieldKey: 'endDate', type: 'date' },
    { headerTitle: 'Status', fieldKey: 'status', type: 'string' },
    {
      headerTitle: 'Actions', fieldKey: 'actions',
      actions: [
        { key: 'view', icon: 'visibility' },
      ],
    },
  ];


  constructor(
    private _BookingService: BookingService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    public dialogService: DialogService,

  ) { }




  ngOnInit(): void {
    this.getAllBooking();
    this.items = [{ label: 'Bookings' }];
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard/home' };
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



  viewBooking(id: string) {
    this._Router.navigate(['dashboard/Booking/view/', id]);
  }



  onActionClick(action: string, item: any) {
    switch (action) {
      case 'view':
        this.viewBooking(item._id);
        break;
    }
  }

}
