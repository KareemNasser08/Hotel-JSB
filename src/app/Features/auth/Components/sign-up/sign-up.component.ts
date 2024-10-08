import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  isHidePass = true;
  isHideConfirmPass = true;

  signUpForm = new FormGroup({
    userName: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^(01)[0-2,5][0-9]{8}$/)]),
    country: new FormControl(null, [Validators.required]),
    profileImage: new FormControl(null, [Validators.required]),
  });


  onSignUp(data: FormGroup) {
    let formData = new FormData();
    formData.append('userName', data.value.userName);
    formData.append('email', data.value.email);
    formData.append('password', data.value.password);
    formData.append('confirmPassword', data.value.confirmPassword);
    formData.append('phoneNumber', data.value.phoneNumber);
    formData.append('country', data.value.country);
    formData.append('role', 'admin');
    formData.append('profileImage', this.imgSource);
    this._authService.signUp(formData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        console.log('completed req!');
        this.toastr.success("Let's Sign In!", 'Successfully Registerd');
        this._Router.navigate(['/auth/signin']);
      },
    })
  }

  constructor(
    private _authService: AuthService,
    private toastr: ToastrService,
    private _Router: Router,
  ) { }

  // Photo
  files: File[] = [];
  imgSource: any;
  onSelect(event: any) {
    this.files = [];
    this.files.push(...event.addedFiles);
    this.imgSource = this.files[0];
    // this._authService.setImgSource(this.imgSource);
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    this.files = [];
    this.imgSource = null;
  }
}