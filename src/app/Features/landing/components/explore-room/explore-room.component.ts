import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../services/landing.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-room',
  templateUrl: './explore-room.component.html',
  styleUrls: ['./explore-room.component.scss']
})
export class ExploreRoomComponent implements OnInit {

  // decleration

  roomList: any[] = [];

  visible: boolean = false;





  // -------------------------------
  constructor(

    private _LandingService: LandingService,
    private _Toastr: ToastrService,
    private _AuthService: AuthService,
    private _Router: Router,

  ) { }


  ngOnInit(): void {

    this._LandingService.exploreRooms.subscribe({
      next: (resp) => {

        this.roomList = resp;


      }
    })

  }



  // -------------------------------------




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
        this.visible = false;

      },
      error: (err: any) => {
        this._Toastr.error(err.message, 'error');
      },
      complete: () => {
        this._Router.navigate(['/landing/explore-Room']);
        this._LandingService.exploreRooms.subscribe({
          next: (resp) => {

            this.roomList = resp;



          }
        })
      }
    })
  }





}













