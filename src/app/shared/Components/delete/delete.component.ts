import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  // decleration
  id!: number;
  name: string = '';


  constructor(
    public ref: DynamicDialogRef, public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {

  }

  onClose(): void {
   
  }

  onDlete(id:number): void {
    this.ref.close(id);
  }

}
