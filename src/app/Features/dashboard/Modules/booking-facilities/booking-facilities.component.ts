import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';
import { DeleteAdComponent } from '../ads/Components/delete-ad/delete-ad.component';
import { BookingService } from './services/booking.service';
import { DeleteFacilityComponent } from './components/delete-facility/delete-facility.component';

@Component({
  selector: 'app-booking-facilities',
  templateUrl: './booking-facilities.component.html',
  styleUrls: ['./booking-facilities.component.scss'],
  providers: [
    DialogService,
  ]
})
export class BookingFacilitiesComponent {

  tableData: any;
  columns: TableColumn[] = [
    { headerTitle: 'Name', fieldKey: 'name', type: 'string' },
    { headerTitle: 'Created By', fieldKey: 'createdBy.userName', type: 'string' },
    {
      headerTitle: 'Actions', fieldKey: 'actions',
      actions: [
        { key: 'view', icon: 'visibility' },
        { key: 'edit', icon: 'edit_square' },
        { key: 'delete', icon: 'delete' },
      ],
    },
  ];

  ref: DynamicDialogRef | undefined;

  constructor(
    private _booking: BookingService,
    private toastr: ToastrService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.onGetAllFacilities();
  }

  onGetAllFacilities() {
    this._booking.getAllFacilities().subscribe({
      next: (res) => {
        this.tableData = res.data.facilities;
      },
      error: (err) => {
        this.toastr.error('Error!', err.error.message);
      }
    });
  }

  deleteAd(id: string) {
    this.ref = this.dialogService.open(DeleteFacilityComponent, {
      data: id,  
      header: 'Delete Facility'
    });

    this.ref.onClose.subscribe((result) => {
      if (result) {
        this.onGetAllFacilities();
      }
    });
  }

  onActionClick(action: string, item: any) {
    switch (action) {
      case 'delete':
        this.deleteAd(item._id);
        break;
      // Add other cases like view or edit if needed
    }
  }

}
