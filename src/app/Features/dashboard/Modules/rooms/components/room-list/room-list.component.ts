import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DeleteComponent } from 'src/app/shared/Components/delete/delete.component';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {



  // declerations
  deleteDialogRef: any
  deleteRoomSubscription!: Subscription;



  constructor(
    public dialog: MatDialog,
    private _RoomsService: RoomsService,
    private _Toastr: ToastrService,

  ) { }


  ngOnInit(): void {

  }



  // delete ads 
  onDeleteAction(id: number): void {
    this.deleteDialogRef = this.dialog.open(DeleteComponent, {
      data: { id, name: 'Room' },
      width: '45%',
    });

    this.deleteDialogRef.afterClosed().subscribe((result: { id: number }) => {
      this.deleteRoom(result.id);
    });
  }

  deleteRoom(id: number): void {
    this.deleteRoomSubscription = this._RoomsService
      .deleteRoom(id)
      .subscribe({
        next: () => {
          this._Toastr.success('Room deleted successfully');

          // update adsList func

        },
        error: () => {
          this._Toastr.error('Something went wrong', 'Error');
        },
      });
  }




}

