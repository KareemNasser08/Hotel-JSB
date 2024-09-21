import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DeleteComponent } from 'src/app/shared/Components/delete/delete.component';
import { ToastrService } from 'ngx-toastr';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DialogService]
})
export class UsersComponent implements OnInit {
  tableData: any;
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  ref: DynamicDialogRef | undefined;

  columns :TableColumn[] = [
    {headerTitle: 'User Name', fieldKey:'userName',type: 'string'},
    {headerTitle: 'Image', fieldKey:'profileImage',type: 'image'},
    {headerTitle: 'E-mail', fieldKey:'email',type: 'string'},
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
    private _ToastrService: ToastrService,
    private _Router: Router,
    public dialogService: DialogService,
  ) { }
  
  ngOnInit(): void {

    this.items = [{ label: 'Users' }];
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard/home' };
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

  deleteUser(item: any) {
    this.ref = this.dialogService.open(DeleteComponent, {
      data: item,
      width: '35%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((userId: any) => {
      if (userId) {
        this._UsersService.deleteUser(userId).subscribe({
          error: (err) => {
            console.log(err);
            this._ToastrService.error('error!', err.error.message);
          },
          complete: () => {
            this._ToastrService.success('Room Removed succefully ')
            this.onGetAllUsers();
          }
        });

      }
    });
  }

  onActionClick(action: string, item: any) {
    switch (action) {
      case 'view':
        this.viewUser(item._id);
        break;
        case 'delete':
        this.deleteUser(item);
        break;
    }
  }

}
