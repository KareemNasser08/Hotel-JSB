import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-facility',
  templateUrl: './add-edit-facility.component.html',
  styleUrls: ['./add-edit-facility.component.scss']
})
export class AddEditFacilityComponent implements OnInit {

  // decleration
  id!: number;
  name: string = '';


  constructor(
    public ref: DynamicDialogRef, public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {

    if (this.config.data) {
      this.id = this.config.data?._id;
      this.name = this.config.data?.name;
    }
  }

  
  onClose(): void {
   
  }

  onSubmit(): void {
    console.log(this.config.data);
    
    this.ref.close({ name: this.name, id: this.id });
  }

}
