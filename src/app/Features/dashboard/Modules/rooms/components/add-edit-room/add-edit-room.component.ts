import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomFacilities } from '../../interfaces/room-facilities';
import { RoomsService } from '../../services/rooms.service';
import { ToastrService } from 'ngx-toastr';
import { MenuItem, MessageService } from 'primeng/api';

// interface UploadEvent {
//   originalEvent: Event;
//   files: File[];
// }
@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss'],
  providers: [MessageService]
})
export class AddEditRoomComponent implements OnInit {
  roomId: string = '';
  uploadedFiles: any[] = [];
  facilitiesDropDown: RoomFacilities[] = [];
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  addEditRoomForm = new FormGroup({
    roomNumber: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    capacity: new FormControl(null, Validators.required),
    discount: new FormControl(null),
    facilities: new FormControl(null, Validators.required),
    // imgs:new FormControl(null), 
  });


  constructor(
    private _Activatedroute: ActivatedRoute,
    private _roomsService: RoomsService,
    private toastr: ToastrService,
    private _Router: Router,
  ) {
    this.roomId = _Activatedroute.snapshot.params['id'];
    console.log(this.roomId)
    if (this.roomId) {
      this.getRoomById(this.roomId)
    }
  }

  ngOnInit(): void {
    this.onGetFacilities();
    this.items = [{ label: 'Rooms', routerLink: ['/dashboard/Rooms'] },
    { label: 'Add new room' }];

    this.home = { icon: 'pi pi-home', routerLink: '/dashboard/home' };

  }

  // // getters

  // get roomNumber() {
  //   return this.addEditRoomForm.controls['roomNumber'];
  // }
  // get price() {
  //   return this.addEditRoomForm.controls['price'];
  // }
  // get capacity() {
  //   return this.addEditRoomForm.controls['capacity'];
  // }
  // get discount() {
  //   return this.addEditRoomForm.controls['discount'];
  // }
  // get facilities() {
  //   return this.addEditRoomForm.controls['facilities'];
  // }


  // methods 

  getRoomById(id: string) {

    this._roomsService.getRoomById(id).subscribe({
      next: (res) => {
        console.log(res, 'room object');
        this.addEditRoomForm.patchValue(
          {
            roomNumber: res.data.room.roomNumber,
            price: res.data.room.price,
            capacity: res.data.room.capacity,
            discount: res.data.room.discount,
            // imgs:res.imgs,
            facilities: res.data.room.facilities.map((c: any) => c._id),
          }
        );
        // for (const imageUrl of res.data.room.images) {
        //   const mockFile = new File([new Blob()], imageUrl.split('/').pop(), { type: 'image/jpeg' }); // Adjust type based on actual image format
        //   // mockFile.objectURL = imageUrl;
        //   // this.uploadedFiles.push(mockFile);
        //   const objectURL = URL.createObjectURL(mockFile);
        //   this.uploadedFiles.push({ ...mockFile, objectURL });
        //   console.log(mockFile);
        //   console.log(this.uploadedFiles);
          
        // }
        for (const imageUrl of res.data.room.images) {
        const blob = new Blob([new Uint8Array(imageUrl)], { type: 'image/jpeg' });

        // Create File with ObjectURL
        const file = new File([blob], imageUrl.split('/').pop(), { type: 'image/jpeg' });
        const objectURL = URL.createObjectURL(file);

        // Push mockFile with objectURL to uploadedFiles
        this.uploadedFiles.push({ ...file, objectURL });
        }
    
      }, error: () => {
      }, complete: () => {
      }
    })

  }

  onEditRoom(data: FormData): void {
    this._roomsService.EditRoom(this.roomId, data).subscribe({
      complete: () => {
        this.toastr.success('Success', 'Room editted successfully');

        this.navigateToRoomsList();
      },
    });
  }

  onAddRoom(data: FormData): void {
    this._roomsService.AddRoom(data).subscribe({
      complete: () => {
        this.toastr.success('Success', 'Room added successfully');

        this.navigateToRoomsList();
      },
    });
  }

  onGetFacilities() {
    this._roomsService.getAllFacilities().subscribe({
      next: (res) => {
        console.log(res, 'tags');
        this.facilitiesDropDown = res.data.facilities;
        console.log(this.facilitiesDropDown);

      }
    })
  }

  onUpload(event:any) {
    for(let file of event.files) {
      console.log(file,'hello');
      
        this.uploadedFiles.push(file);
    }

  }

  onSubmit(data: FormGroup) {
    data.markAllAsTouched();
    console.log(data.value, 'before send')

    if (this.addEditRoomForm.valid) {
      const addEditRoomFormData: FormData = new FormData();
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
            addEditRoomFormData.append(`${key}[${index}]`, element);
          });
        } else {
          // If the value is not an array, append it directly
          addEditRoomFormData.append(key, value);
          // addEditRoomFormData.append("imgs",this.files[0])
        }
      }



      if (this.roomId) {
        this.onEditRoom(addEditRoomFormData);
      } else {
        this.onAddRoom(addEditRoomFormData);
      }
    }
  }

  navigateToRoomsList(): void {
    this._Router.navigate(['/dashboard/Rooms']);
  }
}




