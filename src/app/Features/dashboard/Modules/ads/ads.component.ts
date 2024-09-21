import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';
import { AdsService } from './services/ads.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { DeleteComponent } from 'src/app/shared/Components/delete/delete.component';
import { MenuItem } from 'primeng/api';
import { AddEditAdComponent } from './Components/add-edit-ad/add-edit-ad.component';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  providers: [DialogService]

})
export class AdsComponent {
  tableData: any;
  ref: DynamicDialogRef | undefined;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  columns: TableColumn[] = [
    { headerTitle: 'Room Number', fieldKey: 'room.roomNumber', type: 'string' },
    { headerTitle: 'Price', fieldKey: 'room.price', type: 'string' },
    { headerTitle: 'Discount', fieldKey: 'room.discount', type: 'string' },
    { headerTitle: 'Capacity', fieldKey: 'room.capacity', type: 'string' },
    { headerTitle: 'Active', fieldKey: 'isActive', type: 'boolean' },
    {
      headerTitle: 'Actions', fieldKey: 'actions',
      actions: [
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
    this.items = [{ label: 'Ads' }];
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard/home' };
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


  onAddEditAd(item?: any) {
    this.ref = this.dialogService.open(AddEditAdComponent, {
      data: item,
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((result:any) => {
      
      if (result.room) {
        this.editAd(result)
      } else{
        this.addAd(result)
       
      }
    });
  }

  addAd(data: any) : void {
      console.log(data,'in the function')
      this._adsService.addAd(data).subscribe({
      error: (err) => {
        console.log(err);
        this._ToastrService.error('error!', err.error.message);
      },
      complete: () => {
        this._ToastrService.success('Facility Added succefully ')
        this.onGetAllAds();
  }})};

  editAd(data:any){
    console.log(data,'we are going to http')
    this._adsService.editAd(data._id,data).subscribe({
      error: (err) => {
        console.log(err);
        this._ToastrService.error('error!', err.error.message);
      },
      complete: () => {
        this._ToastrService.success('Facility Updated succefully ')
        this.onGetAllAds();
  }})};



  deleteAd(item: any) {
    this.ref = this.dialogService.open(DeleteComponent, {
      data: item,
      width: '35%',
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
        this.onAddEditAd(item);
        break;
      case 'delete':
        this.deleteAd(item._id);
        break;

    }
  }
}
