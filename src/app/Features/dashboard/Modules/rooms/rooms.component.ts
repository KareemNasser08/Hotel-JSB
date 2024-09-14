import { Component, EventEmitter, OnInit } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  tableData: any;

  columns: TableColumn[] = [
    { headerTitle: 'Room Number', fieldKey: 'roomNumber', type: 'string', },
    { headerTitle: 'Price', fieldKey: 'price', type: 'string' },
    { headerTitle: 'Discount', fieldKey: 'discount', type: 'string' },
    { headerTitle: 'Capacity', fieldKey: 'capacity', type: 'string' },
    { headerTitle: 'Facilities', fieldKey: 'facilities', type: 'arrayOfObject', objectKey: 'name' },
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
    private _RoomsService: RoomsService,
    private _ToastrService: ToastrService,
    private _Router: Router

  ) { }

  ngOnInit(): void {
    this.onGetAllRooms();
  }

  onGetAllRooms() {
    let params = {
      page: 1,
      size: 10000
    };
    this._RoomsService.getAllRooms(params).subscribe({
      next: (res) => {
        this.tableData = res.data.rooms;
        console.log(this.tableData);
      }, error: (err) => {
        console.log(err);
        this._ToastrService.error('error!', err.error.message);
      }
    });
  }

  viewRoom(id: string) {
    this._Router.navigate(['dashboard/Rooms/view/', id]);
  }
  editRoom(id: string) {
    this._Router.navigate(['dashboard/Rooms/edit/', id]);
  }

  onActionClick(action: string, item: any) {
    switch (action) {
      case 'edit':
        this.editRoom(item._id);
        break;
      case 'view':
        this.viewRoom(item._id);
        break;
      // case 'delete':
      //   this.deleteProject(item);
      //   break;
    }
  }

}
