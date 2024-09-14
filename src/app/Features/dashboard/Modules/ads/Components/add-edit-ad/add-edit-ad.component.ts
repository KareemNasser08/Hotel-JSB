import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-add-edit-ad',
  templateUrl: './add-edit-ad.component.html',
  styleUrls: ['./add-edit-ad.component.scss']
})
export class AddEditAdComponent implements OnInit {
  adId: string = '';
  adStatus:boolean=true;
  roomsDropDown: any[] = [];

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
  ) {
    this.adId = _Activatedroute.snapshot.params['id'];
    console.log(this.adId)
    if (this.adId) {
      this.getAdById(this.adId)
    }
  }

  ngOnInit(): void {
    this.onGetRooms();

  }

  // methods 

  getAdById(id: string) {

    this._adService.getAdDetails(id).subscribe({
      next: (res) => {
        console.log(res, 'ad object');
        this.addEditAdForm.patchValue(
          {
            room: res.data.ads.room,
            discount: res.data.ads.discount,
            isActive: res.data.ads.isActive,
          }
        );
      }, error: () => {
      }, complete: () => {
      }
    })

  }

  onEditAd(data: FormData): void {
    this._adService.editAd(this.adId, data).subscribe({
      complete: () => {
        this.toastr.success('Success', 'Ad editted successfully');

        this.navigateToAdsList();
      },
    });
  }

  onAddAd(data: FormData): void {
    this._adService.addAd(data).subscribe({
      complete: () => {
        this.toastr.success('Success', 'Ad added successfully');

        this.navigateToAdsList();
      },
    });
  }

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



  onSubmit(data: FormGroup) {
    data.markAllAsTouched();
    console.log(data.value, 'before send')

    if (this.addEditAdForm.valid) {
      const addEditAdFormData: FormData = new FormData();
      // addEditRoomFormData.append("roomNumber",data.value.roomNumber)
      // addEditRoomFormData.append("price",data.value.price )
      // addEditRoomFormData.append("capacity",data.value.capacity )
      // addEditRoomFormData.append("discount",data.value.discount )
      // addEditRoomFormData.append("imgs",this.files[0])
      // addEditRoomFormData.append("facilities",JSON.stringify(data.value.facilities))

      for (const key in data.value) {
        const value = data.value[key];

        if (Array.isArray(value)) {
          value.forEach((element, index) => {
            addEditAdFormData.append(`${key}[${index}]`, element);
          });
        } else {
          // If the value is not an array, append it directly
          addEditAdFormData.append(key, value);
          // addEditRoomFormData.append("imgs",this.files[0])
        }
      }



      if (this.adId) {
        this.onEditAd(addEditAdFormData);
      } else {
        this.onAddAd(addEditAdFormData);
      }
    }
  }

  navigateToAdsList(): void {
    this._Router.navigate(['/dashboard/Ads']);
  }
}
