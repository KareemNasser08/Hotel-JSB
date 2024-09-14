import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';
import { AdsService } from './services/ads.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { AddNewAdComponent } from './Components/add-new-ad/add-new-ad.component';
import { DeleteAdComponent } from './Components/delete-ad/delete-ad.component';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  providers: [DialogService], // أضف DialogService هنا

})
export class AdsComponent {
  tableData: any;
  ref: DynamicDialogRef | undefined;

  columns: TableColumn[] = [
    { headerTitle: 'Room Number', fieldKey: 'room.roomNumber', type: 'string' },
    { headerTitle: 'Price', fieldKey: 'room.price', type: 'string' },
    { headerTitle: 'Discount', fieldKey: 'room.discount', type: 'string' },
    { headerTitle: 'Capacity', fieldKey: 'room.capacity', type: 'string' },
    { headerTitle: 'Active', fieldKey: 'isActive', type: 'boolean' },
    {
      headerTitle: 'Actions', fieldKey: 'actions',
      actions: [
        { key: 'view', icon: 'visibility' },
        { key: 'edit', icon: 'edit_square' },
        { key: 'delete', icon: 'delete' },
      ],
    },
  ];

  constructor(
    private adsService: AdsService,
    private toastr: ToastrService,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.onGetAllAds();
  }

  onGetAllAds() {
    this.adsService.getAllAds().subscribe({
      next: (res) => {
        this.tableData = res.data.ads;
      },
      error: (err) => {
        this.toastr.error('Error!', err.error.message);
      }
    });
  }

  deleteAd(id: string) {
    this.ref = this.dialogService.open(DeleteAdComponent, {
      data: id,  // Pass the ad ID to the dialog component
      header: 'Delete Ad'
    });

    // Listen for the dialog close event and check the result
    this.ref.onClose.subscribe((result) => {
      if (result) {
        this.onGetAllAds();  // Refresh the table if the ad was deleted successfully
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
