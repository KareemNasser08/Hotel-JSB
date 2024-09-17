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

  // products!: Product[];
  // productDetails!: Product | any;
  // cols!: Column[];
  // selectedProduct!: Product;
  // visibleView: boolean = false;
  // visibleAdd: boolean = false;
  // visibleUpdate: boolean = false;
  // visibleDelete: boolean = false;
  // roomUpdate!: Room;


  // constructor(
  //   private _RoomFacilityService: RoomFacilityService,
  //   private _Toastr: ToastrService,
  // ) { }

  // ngOnInit() {
  //   this.getAllRoomFacilities();
  // }

  // // get all room facilities
  // getAllRoomFacilities() {
  //   this._RoomFacilityService.onGetAllRoomFacility().subscribe((resp) => {
  //     this.products = resp.data.facilities;
  //   });

  //   this.cols = [
  //     { field: 'name', header: 'Name' },
  //     { field: 'createdBy', header: 'Created by' },
  //     { field: 'createdAt', header: 'Created at' },
  //     { field: 'updatedAt', header: 'Updated at' },
  //     { field: 'actions', header: 'Actions' },
  //   ];
  // }

  // // view room facility
  // showViewDialog(id: number) {
  //   this._RoomFacilityService.onViewRoomFacility(id).subscribe({
  //     next: (resp) => {
  //       this.productDetails = resp.data.facility;
  //       this.visibleView = true;
  //     },
  //     error: (err) => {
  //       // Handle error
  //     }
  //   });
  // }

  // // add room facility
  // showAddDialog() {
  //   this.visibleAdd = true;
  // }

  // RoomFacilityForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, [Validators.required])
  // });

  // addRoomFacility(RoomFacilityForm: FormGroup) {
  //   this._RoomFacilityService.onAddRoomFacility(RoomFacilityForm.value).subscribe({
  //     next: (resp) => {
  //       this._Toastr.success('New room facility has been added successfully', 'Success');
  //       this.getAllRoomFacilities();
  //       RoomFacilityForm.reset();

  //     },
  //     error: (err) => {
  //       this._Toastr.error('Failed to add new room facility', 'Error');
  //     }
  //   });
  // }


  // get name() {
  //   return this.RoomFacilityForm.controls['name'];
  // }

  // // ===============================================


  // updateForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, [Validators.required])
  // })

  // showupdateDialog(id: number, name: string) {
  //   this.visibleUpdate = true;
  //   this.productDetails._id = id;
  //   this.updateForm.patchValue({
  //     name: name
  //   });
  // }


  // UpdateRoomFacility(id: number, updateForm: FormGroup) {

  //   this._RoomFacilityService.onUpdateRoomFacility(id, updateForm.value).subscribe({
  //     next: (resp) => {
  //       this._Toastr.success(`Room facility updated successfully`, 'Success');
  //       this.getAllRoomFacilities();
  //       this.visibleUpdate = false;
  //     },
  //     error: (err) => {
  //       this._Toastr.error('Failed to update room facility', 'Error');
  //     }
  //   });
  // }
  // // ---------------------
  // showDeleteDialog(id: number) {
  //   this.productDetails = this.productDetails || {};
  //   this.visibleDelete = true;
  //   this.productDetails._id = id;
  // }

  // DeleteRoomFacility(id: number) {
  //   this._RoomFacilityService.onDeleteRoomFacility(id).subscribe({
  //     next: (resp) => {
  //       this.getAllRoomFacilities();
  //       this._Toastr.success('Room facility item has been deleted successfully', 'success');
  //       this.visibleDelete = false;
  //     },
  //     error: (err) => {
  //       this._Toastr.error('error has been happened', 'error')
  //     }
  //   })
  // }

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


