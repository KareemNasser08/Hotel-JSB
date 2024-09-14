import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  tableData: any;

  headingList = [
    {headerTitle: 'User Name', headerKey:'userName'},
    {headerTitle: 'Image', headerKey:'profileImage'},
    {headerTitle: 'email', headerKey:'email'},
    {headerTitle: 'Country', headerKey:'country'},
    {headerTitle: 'Phone Number', headerKey:'phoneNumber'},
    {headerTitle: 'Role', headerKey:'role'},
  ];

  constructor(
    private _UsersService: UsersService,

  ) { }
  
  ngOnInit(): void {
    this.onGetAllUsers();
  }

  onGetAllUsers() {
    let params = {
      page: 1,
      size: 10000
    };
    this._UsersService.getAllUsers(params).subscribe({
      next: (res) => {
        this.tableData = res.data.users.map((user: { facilities: any[]; }) => {
          return {
            ...user,
          };
        });
      }
    });
  }


}
