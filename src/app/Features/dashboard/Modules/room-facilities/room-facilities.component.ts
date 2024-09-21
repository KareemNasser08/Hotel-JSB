import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RoomFacilityService } from './services/room-facility.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/shared/Components/shared-table/interface/table-column';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DeleteComponent } from 'src/app/shared/Components/delete/delete.component';
import { AddEditFacilityComponent } from './components/add-edit-facility/add-edit-facility.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-room-facilities',
  templateUrl: './room-facilities.component.html',
  styleUrls: ['./room-facilities.component.scss'],
  providers: [DialogService]
})
export class RoomFacilitiesComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  ref: DynamicDialogRef | undefined;
  tableData: any;

  columns :TableColumn[] = [
    {headerTitle: 'Name', fieldKey:'name',type: 'string'},
    {headerTitle: 'Created By', fieldKey:'createdBy.userName',type: 'string'},
    {headerTitle: 'Created At', fieldKey:'createdAt',type: 'date'},
    {headerTitle: 'Updated At', fieldKey:'updatedAt',type: 'date'},
    {
      headerTitle: 'Actions', fieldKey: 'actions',
      actions: [
        { key: 'edit', icon: 'edit_square' },
        { key: 'delete', icon: 'delete' },
      ],

    },
  ];

  constructor(
    private _RoomFacilityService: RoomFacilityService,
    private _Router: Router,
    public dialogService: DialogService,
    private _ToastrService: ToastrService,
  ) { }
  
  ngOnInit(): void {
    this.onGetAllRoomFacility();
    this.items = [{ label: 'Room facilities' }];
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard/home' };
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

  addFacility(name: string){
    this._RoomFacilityService.onAddRoomFacility(name).subscribe({
      error: (err) => {
        console.log(err);
        this._ToastrService.error('error!', err.error.message);
      },
      complete: () => {
        this._ToastrService.success('Facility Added succefully ')
        this.onGetAllRoomFacility();
  }})};

  editFacility(id: number, name: string){
    this._RoomFacilityService.onUpdateRoomFacility(id,name).subscribe({
      error: (err) => {
        console.log(err);
        this._ToastrService.error('error!', err.error.message);
      },
      complete: () => {
        this._ToastrService.success('Facility Updated succefully ')
        this.onGetAllRoomFacility();
  }})};

  onAddEditFacility(item?: any) {
    this.ref = this.dialogService.open(AddEditFacilityComponent, {
      data: item,
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((result:any) => {
      console.log(result);
      
      if (result.id) {
        console.log(result.name,result.id);
        this.editFacility(result.id , result.name)
      } else{
        this.addFacility(result.name)
       
      }
    });
  }

  deleteFacility(item: any) {
    this.ref = this.dialogService.open(DeleteComponent, {
      data: item,
      width: '35%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((facilityId: any) => {
      if (facilityId) {
        this._RoomFacilityService.onDeleteRoomFacility(facilityId).subscribe({
          error: (err) => {
            console.log(err);
            this._ToastrService.error('error!', err.error.message);
          },
          complete: () => {
            this._ToastrService.success('Facility Removed succefully ')
            this.onGetAllRoomFacility();
          }
        });

      }
    });
  }

  onActionClick(action: string, item: any) {
    switch (action) {
      case 'edit':
        this.onAddEditFacility(item);
        break;
      case 'delete':
        this.deleteFacility(item);
        break;
    }
  }

}

