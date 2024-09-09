import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {


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
  forgetPassForm: FormGroup = new FormGroup({

    email: new FormControl(
      null,
      [Validators.required,
      Validators.email])
  });



  // Verfiy email Func
  Verify():void {

    this.forgetPassForm.markAllAsTouched();

    if (this.forgetPassForm.valid) {
      this._AuthService
        .onCheckEmail(this.forgetPassForm.value as string)
        .subscribe({
          next: () => {
            this._Toastr.success('Enter your new password!', 'Email verfied');

            
          },
          error: (err) => {

            console.log(err);
    
            this._Toastr.error(err.message, 'error');
    
    
          },
          complete: () => {
    
            this._Router.navigateByUrl('/auth/reset-password');
            // this._Router.navigate(['/dashboard/home']);
    
          }
        });
    }



  }
}
