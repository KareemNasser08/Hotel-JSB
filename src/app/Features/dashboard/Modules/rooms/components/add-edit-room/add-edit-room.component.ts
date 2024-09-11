import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomFacilities } from '../../interfaces/room-facilities';
import { RoomsService } from '../../services/rooms.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss']
})
export class AddEditRoomComponent implements OnInit
{
  // option: any[] = [];

  // selectFormControl = new FormControl('', Validators.required);
  // //project ID list
  // projectIdList: any[] = [];
  // // mat select value for employees
  // employees = new FormControl('');
  // // list of employees
  // employeesList: any[] = [];
  // // list of Projects
  // ProjectList: any[] = [];
  // // list of Projects
  // //task id to catch the id to edit it
  // taskId: number = 0;
  // constructor(
   
  //   private _Router: Router,
  //   private _ActivatedRoute: ActivatedRoute
  // ) {
  //   this.taskId = this._ActivatedRoute.snapshot.params['id'];
  //   if (this.taskId) {
  //     this.getTaskById(this.taskId);
  //   }
  // }
  // ngOnInit(): void {
  //   this.getEmployeesList();
  //   this.getProjectList();
  // }
  // //add edit reactive form
 // addEditRoomForm = new FormGroup({
  //   title: new FormControl(null, Validators.required),
  //   description: new FormControl(null, Validators.required),
  //   employeeId:  new FormControl(null, Validators.required),
  //   projectId: new FormControl(null, Validators.required),
  // });

  // // get All Employee to list it
  // getEmployeesList() {
  //   this._TaskService.getAllEmployees().subscribe({
  //     next: (res: any) => {
  //       this.employeesList = res.data;
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log('completed');
  //     },
  //   });
  // }
  // // get All Projects to list it
  // // getProjectList() {
  // //   this._TaskService.getAllProjects().subscribe({
  // //     next: (res: any) => {
  // //       this.ProjectList = res.data;
  // //       console.log(res);
  // //     },
  // //     error: (err) => {
  // //       console.log(err);
  // //     },
  // //     complete: () => {
  // //       console.log('completed');
  // //     },
  // //   });
  // // }
  // // get task By id to edit it
  // // getTaskById(id: number) {
  // //   this._TaskService.getTaskById(id).subscribe({
  // //     next: (res) => {
  // //       this.addEditTaskForm.patchValue({
  // //         title: res.title,
  // //         description: res.description,
  // //         employeeId: res?.employee?.id,
  // //         projectId: res?.project?.id,
  // //       });
  // //     },
  // //     error: (err) => {
  // //       console.log(err);
  // //     },
  // //     complete: () => {
  // //       console.log('completed');
  // //     },
  // //   });
  // // }

  // onSubmit(data: FormGroup) {
  //   data.markAllAsTouched();

  //   if (data.valid) {
  //     if (this.taskId) {
  //       this.onEditTask(data);
  //     } else {
  //       this.onAddTask(data);
  //     }
  //   }
  // }

  // onEditTask(data: FormGroup): void {
  //   this._TaskService.updateTask(this.taskId, data.value).subscribe({
  //     complete: () => {
  //       this.ToastrService.success('Success', 'Task editted successfully');

  //       this.navigateToTasksList();
  //     },
  //   });
  // }

  // onAddTask(data: FormGroup): void {
  //   this._TaskService.addNewTask(data.value).subscribe({
  //     complete: () => {
  //       this.ToastrService.success('Success', 'Task added successfully');

  //       this.navigateToTasksList();
  //     },
  //   });
  // }

  // navigateToTasksList(): void {
  //   this._Router.navigate(['/dashboard/manager/tasks/list']);
  // }

  roomId: string = '';

  files: File[] = [];

  facilitiesDropDown: RoomFacilities[] = [];

  addEditRoomForm = new FormGroup({
    roomNumber:new FormControl(null, Validators.required),
    price:new FormControl(null,Validators.required),
    capacity:new FormControl(null,Validators.required),
    discount:new FormControl(null,Validators.required),
    facilities:new FormControl(null,Validators.required),
    // imgs:new FormControl(null), 
  });


constructor(
  private _Activatedroute:ActivatedRoute,
  private _roomsService:RoomsService,
  private toastr: ToastrService,
  private _Router: Router,
){
  this.roomId=_Activatedroute.snapshot.params['id'];
  console.log(this.roomId)
  if(this.roomId){
    this.getRoomById(this.roomId)
  }
}

 ngOnInit(): void {
    this.onGetFacilities();
   
  }

  // getters

  get roomNumber() {
    return this.addEditRoomForm.controls['roomNumber'];
  }
  get price() {
    return this.addEditRoomForm.controls['price'];
  }
  get capacity() {
    return this.addEditRoomForm.controls['capacity'];
  }
  get discount() {
    return this.addEditRoomForm.controls['discount'];
  }
  get facilities() {
    return this.addEditRoomForm.controls['facilities'];
  }


  // methods 

  getRoomById(id:string){

    this._roomsService.getRoomById(id).subscribe({
      next:(res)=>{
        console.log(res,'room object');
        this.addEditRoomForm.patchValue({
          roomNumber:res.roomNumber,
          price:res.price,
          capacity:res.capacity,
          discount:res.discount,
          // imgs:res.imgs,
          facilities:res.facilities.map((c:any)=>c.name),
        });
      },error:()=>{

      },complete:()=>{

       

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

  onGetFacilities(){
    this._roomsService.getAllFacilities().subscribe({
      next:(res)=>{
        console.log(res,'tags');
        this.facilitiesDropDown=res.data.facilities;
        console.log(this.facilitiesDropDown);
        
      }
    })
   }

  selectImage(e: any) {
    this.files = [...e.addedFiles];
  }

  removeImage(e: any) {
    this.files = [];
  }

  onSubmit(data: FormGroup) {
    data.markAllAsTouched();
    console.log(data.value, 'before send')

    if (this.addEditRoomForm.valid ) {
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




