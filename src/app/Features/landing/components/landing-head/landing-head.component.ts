import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAds } from '../../interfaces/landing';
import { LandingService } from '../../services/landing.service';
import { TranslateService } from '@ngx-translate/core';
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
  constructor(public dialog: MatDialog,
    private _LandingService: LandingService,
    private _router: Router,
    private _ToastrService: ToastrService,
    public translate:TranslateService) { 
    }
    


  ngOnInit(): void {

  }



  BookingForm: FormGroup = new FormGroup({
    date: new FormControl(null),

  })









}


