import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RoomFacilityService } from './services/room-facility.service';
import { Column, Product, Room } from './interface/room-facility';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';

@Component({
  selector: 'app-room-facilities',
  templateUrl: './room-facilities.component.html',
  styleUrls: ['./room-facilities.component.scss']
})
export class RoomFacilitiesComponent implements OnInit {

  tableData: any;

  columns :TableColumn[] = [
    {headerTitle: 'Name', fieldKey:'name',type: 'string'},
    {headerTitle: 'Created By', fieldKey:'createdBy.userName',type: 'string'},
    {headerTitle: 'Created At', fieldKey:'createdAt',type: 'date'},
    {headerTitle: 'Updated At', fieldKey:'updatedAt',type: 'date'},
    {
      headerTitle: 'Actions', fieldKey: 'actions',
      actions: [
        { key: 'View', icon: 'visibility' },
        { key: 'Delete', icon: 'delete' },
      ],

    },
  ];

  constructor(
    private _RoomFacilityService: RoomFacilityService,
    private _Router: Router
  ) { }
  
  ngOnInit(): void {
    this.onGetAllRoomFacility();
  }

  onGetAllRoomFacility() {
    this._RoomFacilityService.onGetAllRoomFacility().subscribe({
      next: (res) => {
        this.tableData = res.data.facilities;
      },
      error: (err)=>{
        console.log(err.error);
      }
    });
  }

  viewUser(id: string) {
    console.log(id,'before route')
    this._Router.navigate(['dashboard/Users/view/', id]);
  }

  // deleteFacility(item: any) {
  //   this.ref = this.dialogService.open(DeleteComponent, {
  //     data: item,
  //     width: '70%',
  //     contentStyle: { "max-height": "500px", "overflow": "auto" },
  //     baseZIndex: 10000
  //   });
  //   this.ref.onClose.subscribe((roomId: any) => {
  //     if (roomId) {
  //       this._RoomsService.deleteRoom(roomId).subscribe({
  //         error: (err) => {
  //           console.log(err);
  //           this._ToastrService.error('error!', err.error.message);
  //         },
  //         complete: () => {
  //           this._ToastrService.success('Room Removed succefully ')
  //           this.onGetAllRooms();
  //         }
  //       });

  //     }
  //   });
  // }

  onActionClick(action: string, item: any) {
    switch (action) {
      case 'view':
        this.viewUser(item._id);
        break;
    //   case 'delete':
    //     this.deleteFacility(item);
    //     break;
    // }
  }

}

}
