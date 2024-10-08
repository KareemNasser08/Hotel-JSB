import { Component, OnInit } from '@angular/core';
import { LandingService } from '../services/landing.service';
import { PaginatorState } from 'primeng/paginator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../../auth/Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  // decleration
  roomList: any[] = [];
  first: number = 1;
  rows: number = 15;
  startDate: any;
  endDate: any;
  visible: boolean = false;


  // ------------------------------------


  constructor(

    private _LandingService: LandingService,
    private _AuthService: AuthService,
    private _Router: Router,
    private _Toastr: ToastrService,


  ) { }

  ngOnInit(): void {


    this.explore()

  }

  // --------------------------------------



  explore() {


    const exploreData = {
      page: this.first + 1,
      size: this.rows,
      startDate: this.startDate,
      endDate: this.endDate,
    }

    this._LandingService.onExplore(exploreData).subscribe({
      next: (resp) => {

        this.roomList = resp.data.rooms

        console.log(this.roomList);


      }
    })



  }

  onPageChange(event: PaginatorState) {

    this.first = event.first || 0;
    this.rows = event.rows || 15;
    this.explore();
  }


  // -----------------------------

  saveFavRoom(roomId: any) {

    if (localStorage.getItem('eToken')) {

      this._LandingService.saveFavRoom(roomId).subscribe({
        next: (resp) => {

          this._Toastr.success('Item has been added to your favorite list successfully', 'success')

        }, error: (err) => {

          this._Toastr.error(err.error.message,)

        }
      });


    }
    else {

      this.showDialog()

    }

  }

  showDialog() {
    this.visible = true;
  }


  // ------------------------------

  matcher = new ErrorStateMatcher();
  // signInForm
  signInForm: FormGroup = new FormGroup({
    email: new FormControl(
      null,
      [Validators.required,
      Validators.email]),
    password: new FormControl(
      null,
      [Validators.required,
      Validators.pattern(/^[a-zA-Z0-9@_]{6,20}$/)])
  });

  // getters
  get email() {
    return this.signInForm.controls['email'];
  }
  get password() {
    return this.signInForm.controls['password'];
  }

  // signIn Func
  signIn(signInForm: FormGroup) {

    this._AuthService.onSignIn(signInForm.value).subscribe({

      next: (resp: any) => {

        let Btoken = resp.data.token;
        let eToken = Btoken.replace(/^Bearer\s+/, '');
        localStorage.setItem('eToken', eToken);
        this._AuthService.onGetUserData();
        this._Toastr.success('you have successfully logged in!', 'success');
      },
      error: (err: any) => {
        this._Toastr.error(err.message, 'error');
      },
      complete: () => {
        this._Router.navigate(['/dashboard/home']);
      }
    })
  }




}





