import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/auth.service';
import { MatchPasswordValidator } from '../../Validators/match-password-validator';
import { ResetPasswordRequest } from '../../interfaces/reset-password-request';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  matcher = new ErrorStateMatcher();
hide:boolean=true; 

resetPassForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  seed:new FormControl('',Validators.required),
  password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9@_]{6,20}$/)]),
  confirmPassword:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9@_]{6,20}$/)]),
  },
    [MatchPasswordValidator('password', 'confirmPassword')]
  );

  constructor(    private _AuthService: AuthService,
    private _Router: Router,
    private _Toastr: ToastrService,) {}


    get email() {
      return this.resetPassForm.controls['email'];
    }
  
    get seed() {
      return this.resetPassForm.controls['password'];
    }

    get password() {
      return this.resetPassForm.controls['password'];
    }
  
    get confirmPassword() {
      return this.resetPassForm.controls['password'];
    }
  
  

resetPassword(): void {
    this.resetPassForm.markAllAsTouched();

    if (this.resetPassForm.valid) {
      this._AuthService
        .onResetPassword(this.resetPassForm.value as ResetPasswordRequest)
        .subscribe({
          next: () => {
            this._Router.navigateByUrl('/auth/login');
          },
        });
    }
  }

}
