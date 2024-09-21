import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-facility',
  templateUrl: './add-edit-facility.component.html',
  styleUrls: ['./add-edit-facility.component.scss']
})
export class AddEditFacilityComponent implements OnInit {

  // decleration
  title: string = 'Add Facility';
  buttonLabel: string = 'Save';
  id?: number;
  name: string = '';


  constructor(
    public ref: DynamicDialogRef, public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {

    if (this.config.data) {
      this.id = this.config.data?._id;
      this.name = this.config.data?.name;
      this.title = 'Edit Facility';
      this.buttonLabel = 'Update';
    }
  }

  
  // onClose(): void {
   
  // }

  onSubmit(): void {
      const data = { name: this.name };
      this.ref.close({ ...data, id: this.id }); 
  }
    
    //  data = {:{name: this.name ,fId:this.id}}
    // console.log(this.config.data);
    // const data = { name: this.name ,fId:this.id};
    // // this.ref.close({ ...data, id: this.id }); 
    // if (this.id) {
    //   data.fId = this.id;
    // }
    // this.ref.close({ ...data, id: this.id});
  }


