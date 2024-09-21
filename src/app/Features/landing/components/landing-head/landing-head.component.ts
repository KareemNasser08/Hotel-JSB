import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAds } from '../../interfaces/landing';
import { LandingService } from '../../services/landing.service';
import { TranslateService } from '@ngx-translate/core';
import { IRoom } from '../../interfaces/landing-head';
@Component({
  selector: 'app-landing-head',
  templateUrl: './landing-head.component.html',
  styleUrls: ['./landing-head.component.scss']
})
export class LandingHeadComponent implements OnInit {


  // declerations

  tableUserAds: IAds[] = [];
  rangeDates: Date[] | undefined;
  value3: number = 0;
  exploreRooms: IRoom[] = [];



  // --------------------------------

  constructor(public dialog: MatDialog,
    private _LandingService: LandingService,
    private _router: Router,
    private _ToastrService: ToastrService,
    public translate: TranslateService) {

    translate.setDefaultLang('en');
  }



  ngOnInit(): void {
    this.getAllRooms()
  }



  translateToEng() {
    this.translate.use('en');

  }
  translateToAr() {
    this.translate.use('ar');
  }





  // -----------------------------


  BookingForm: FormGroup = new FormGroup({
    date: new FormControl(null),
    capacity: new FormControl(null),
  })




  getAllRooms() {

    const rangeDates = this.BookingForm.get('date')?.value;
    const capaciy = this.BookingForm.get('capacity')?.value;

    if (rangeDates && rangeDates.length === 2) {

      const sDate = rangeDates[0];
      const eDate = rangeDates[1];

      const data = {
        page: 1,
        size: 10,
        startDate: sDate,
        endDate: eDate,
        capacit: capaciy,
      }

      this._LandingService.onGetAllRooms(data).subscribe({
        next: (resp) => {

          this.exploreRooms = resp.data.rooms;
          this._LandingService.exploreRooms.next(resp.data.rooms);
          this._router.navigate(['/landing/explore-Room']);

        },
        error: (err) => {
          console.log(err);

        }
      })

    }


  }




}


