import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlOptions } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';

@Component({
  selector: 'app-navbardmin',
  templateUrl: './navbardmin.component.html',
  styleUrls: ['./navbardmin.component.scss']
})
export class NavbardminComponent {




  // declerations
  isAuthenticated = false;
  role: string | null = null;

  visible: boolean = false;


  // profileImg: any;

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _Toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.checkAuthentication();
    // this.profileImg = this._AuthService.getImgSource();
    // console.log(this.profileImg);
    // if (this.profileImg) {
    //   this.profileImg = URL.createObjectURL(this.profileImg); // Convert the File to a URL
    // }

  }

  checkAuthentication() {
    const token = localStorage.getItem('eToken');
    if (token) {
      this.isAuthenticated = true;
      this.role = this._AuthService.role;
    }
  }

  signOut() {
    localStorage.removeItem('eToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.isAuthenticated = false;
    this.role = null;
    this._Toastr.success('you have logged out successfully', 'success')
    this._Router.navigate(['/landing'])
  }


  // -------------------------------


  showDialog() {
    this.visible = true;
  }


  matcher = new ErrorStateMatcher();
  // signInForm
  changePassForm: FormGroup = new FormGroup({
    oldPassword: new FormControl(
      null,
      [Validators.required,
      Validators.pattern(/^[a-zA-Z0-9@_]{6,20}$/)]),
    newPassword: new FormControl(
      null,
      [Validators.required,
      Validators.pattern(/^[a-zA-Z0-9@_]{6,20}$/)]),
    confirmPassword: new FormControl(
      null,
      [Validators.required,])
  }, { validators: [this.confirmPass] } as FormControlOptions);




  confirmPass(changePassForm: FormGroup): void {

    if (changePassForm.controls['confirmPassword'].value === '') {


      changePassForm.controls['confirmPassword'].setErrors({ require: true })

    } else if (changePassForm.controls['confirmPassword'].value !==
      changePassForm.controls['newPassword'].value
    ) {
      changePassForm.controls['confirmPassword'].setErrors({ notSame: true })
    }

  }








  // getters
  get oldPassword() {
    return this.changePassForm.controls['oldPassword'];
  }
  get newPassword() {
    return this.changePassForm.controls['newPassword'];
  }


  get confirmPassword() {
    return this.changePassForm.controls['confirmPassword'];
  }

  // signIn Func
  changePass(changePassForm: FormGroup) {

    this._AuthService.onChangePassAdmin(changePassForm.value).subscribe({

      next: (resp: any) => {

        this._Toastr.success('you have successfully changed your password!', 'success');
        this.visible = false;

      },
      error: (err: any) => {
        this._Toastr.error(err.message, 'error');
      },
    })
  }




}













