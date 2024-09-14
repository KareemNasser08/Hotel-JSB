import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  tableData: any;

  columns :TableColumn[] = [
    {headerTitle: 'User Name', fieldKey:'userName',type: 'string'},
    {headerTitle: 'Image', fieldKey:'profileImage',type: 'image'},
    {headerTitle: 'email', fieldKey:'email',type: 'string'},
    {headerTitle: 'Country', fieldKey:'country',type: 'string'},
    {headerTitle: 'Phone Number', fieldKey:'phoneNumber',type: 'string'},
    {headerTitle: 'Role', fieldKey:'role',type: 'string'},
    {
      headerTitle: 'Actions', fieldKey: 'actions',
      actions: [
        { key: 'view', icon: 'visibility' },
        { key: 'delete', icon: 'delete' },
      ],

    },
  ];

  constructor(
    private _UsersService: UsersService,
    private _Router: Router
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
  viewUser(id: string) {
    console.log(id,'before route')
    this._Router.navigate(['dashboard/Users/view/', id]);
  }
  onActionClick(action: string, item: any) {
    switch (action) {
      case 'view':
        this.viewUser(item._id);
        break;
      // case 'delete':
      //   this.deleteProject(item);
      //   break;
    }
  }

}
