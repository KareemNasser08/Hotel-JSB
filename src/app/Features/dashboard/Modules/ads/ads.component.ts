import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';
import { AdsService } from './services/ads.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { DeleteComponent } from 'src/app/shared/Components/delete/delete.component';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  providers: [DialogService]

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
    private _adsService: AdsService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.onGetAllAds();
  }

  onGetAllAds() {
    this._adsService.getAllAds().subscribe({
      next: (res:any) => {
        this.tableData = res.data.ads;
      },
      error: (err:any) => {
        this._ToastrService.error('Error!', err.error.message);
      }
    });
  }


  viewAd(id: string) {
    this._Router.navigate(['dashboard/Ads/view/', id]);
  }
  editAd(id: string) {
    this._Router.navigate(['dashboard/Ads/edit/', id]);
  }

  deleteAd(item: any) {
    this.ref = this.dialogService.open(DeleteComponent, {
      data: item,
      width: '50%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((adId: any) => {
      if (adId) {
        this._adsService.deleteAd(adId).subscribe({
          error: (err) => {
            console.log(err);
            this._ToastrService.error('error!', err.error.message);
          },
          complete: () => {
            this._ToastrService.success('Ad Removed succefully ')
            this.onGetAllAds();
          }
        });

      }
    });
  }


  onActionClick(action: string, item: any) {
    switch (action) {
      case 'edit':
        this.editAd(item._id);
        break;
      case 'view':
        this.viewAd(item._id);
        break;
      case 'delete':
        this.deleteAd(item._id);
        break;

    }
  }
}
