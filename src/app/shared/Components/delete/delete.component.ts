import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; name: string },
  ) { }

  ngOnInit(): void {
    this.id = this.data.id;
    this.name = this.data.name;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onDlete(): void {
    this.dialogRef.close({ id: this.id });
  }

}
