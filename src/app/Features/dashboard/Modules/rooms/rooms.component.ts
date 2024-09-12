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
  tableData: any;

  headingList = [
    {headerTitle: 'Room Number', headerKey:'roomNumber'},
    {headerTitle: 'Price', headerKey:'price'},
    {headerTitle: 'Discount', headerKey:'discount'},
    {headerTitle: 'Capacity', headerKey:'capacity'},
    {headerTitle: 'Facilities', headerKey:'facilities'},
  ];

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
    };
    this._RoomsService.getAllRooms(params).subscribe({
      next: (res) => {
        this.tableData = res.data.rooms.map((room: { facilities: any[]; }) => {
          return {
            ...room,
            facilities: room.facilities.map((facility: { name: any; }) => facility.name).join(', ')
          };
        });
      }
    });
  }


}
