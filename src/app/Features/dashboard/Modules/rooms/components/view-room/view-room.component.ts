import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IData, IRoom } from '../../interfaces/rooms';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.scss']
})
export class ViewRoomComponent implements OnInit {


  // declerations
  roomDetails: IRoom | any;
  roomId: number = 0;


  constructor(

    private _RoomsService: RoomsService,
    private _Toastr: ToastrService,
    private _ActivatedRoute: ActivatedRoute,

  ) {

    this.roomId = this._ActivatedRoute.snapshot.params['id'];

    if (this.roomId) {

      this.viewRoom(this.roomId);

    }


  }


  ngOnInit(): void {



  }


  viewRoom(id: number) {

    this._RoomsService.onViewRoom(id).subscribe({

      next: (resp) => {

        console.log(resp);

        this.roomDetails = resp.data;

        console.log(this.roomDetails);


      },
      error: (err) => {

      }
    })
  }





  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}


