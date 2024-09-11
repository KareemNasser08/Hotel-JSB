import { Component, OnInit } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  // headArray = ['roomNumber','price', 'capacity', 'discount', 'facilities'];
  // gridData:any;


  tableData: any;

  constructor(
    private _RoomsService: RoomsService,

  ) { }
  ngOnInit(): void {
    this.onGetAllRooms();
  }

  onGetAllRooms() {
    let params = {
      page: 1,
      size: 10000
    }
    this._RoomsService.getAllRooms(params).subscribe({
      next: (res) => {
        console.log(res);
        this.tableData = res.data.rooms;
        console.log(this.tableData);
      }
    })
  }


}
