import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
ReactiveFormsModule


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _Toastr: ToastrService,

  ) { }
  // declerations
  hide = true;
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



  // signIn Func
  signIn(signInForm: FormGroup) {

    this._AuthService.onSignIn(signInForm.value).subscribe({

      next: (resp) => {

        console.log(resp);

        localStorage.setItem('eToken', resp.token);

        this._AuthService.onGetUserData();

        this._Toastr.success('you have successfully logged in!', 'success');

      },
      error: (err) => {

        console.log(err);

        this._Toastr.error(err.message, 'error');


      },
      complete: () => {

        this._Router.navigate(['/dashboard/home']);

      }
    })
  }


}
