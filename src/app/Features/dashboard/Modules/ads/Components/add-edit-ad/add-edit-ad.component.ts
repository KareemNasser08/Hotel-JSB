import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { AdsService } from '../../services/ads.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-ad',
  templateUrl: './add-edit-ad.component.html',
  styleUrls: ['./add-edit-ad.component.scss']
})
export class AddEditAdComponent implements OnInit {
  // adId: string = '';
  adStatus = [
    { key: 'Active', value: true },
    { key: 'Retire', value: false }
  ];
  roomsDropDown: any[] = [];
  title: string = 'Add new ad';
  buttonLabel: string = 'Save';
  addEditAdForm = new FormGroup({
    room: new FormControl(null, Validators.required),
    discount: new FormControl(null, Validators.required),
    isActive: new FormControl(null, Validators.required),
  });


  constructor(
    private _Activatedroute: ActivatedRoute,
    private _roomsService: RoomsService,
    private _adService:AdsService,
    private toastr: ToastrService,
    private _Router: Router,
    public ref: DynamicDialogRef, public config: DynamicDialogConfig
  ) {
    if (this.config.data) {
      this.getAdById(this.config.data._id)
      
      this.title = 'Edit Ad';
      this.buttonLabel = 'Update';
    }
  }

  ngOnInit(): void {
    this.onGetRooms();
    console.log(this.adStatus)

  }

  // methods 

  getAdById(id: string) {

    this._adService.getAdDetails(id).subscribe({
      next: (res) => {
        console.log(res, 'ad object');
        this.adStatus=res.data.ads.isActive;
        console.log(res.data.ads.isActive);
        
        this.addEditAdForm.patchValue(
          {
            room: res.data.ads.room._id,
            discount: res.data.ads.room.discount,
            isActive: res.data.ads.isActive
          }
       
          
        );
        console.log(this.addEditAdForm);
      }, error: () => {
      }, complete: () => {
      }
    })

  }

  // onEditAd(data: FormData): void {
  //   this._adService.editAd(this.adId, data).subscribe({
  //     complete: () => {
  //       this.toastr.success('Success', 'Ad editted successfully');

  //       this.navigateToAdsList();
  //     },
  //   });
  // }

  // onAddAd(data: FormData): void {
  //   console.log(data,'in the function')
  //   this._adService.addAd(data).subscribe({
  //     complete: () => {
  //       this.toastr.success('Success', 'Ad added successfully');

  //       this.navigateToAdsList();
  //     },
  //   });
  // }

  onGetRooms() {
    let params = {
      page: 1,
      size: 10000
    };
    this._roomsService.getAllRooms(params).subscribe({
      next: (res) => {
        console.log(res, 'tags');
        this.roomsDropDown = res.data.rooms;
        console.log(this.roomsDropDown);

      }
    })
  }



  onSubmit(): void {

  if (this.addEditAdForm.valid) {
    
    this.ref.close(this.addEditAdForm.value);
  }
}
}

