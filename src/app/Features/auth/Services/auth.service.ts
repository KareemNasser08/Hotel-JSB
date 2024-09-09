import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IsignIn } from '../interfaces/auth';
import { jwtDecode } from 'jwt-decode';
import { FormGroup } from '@angular/forms';
import { ResetPasswordRequest } from '../interfaces/reset-password-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) {


    if (localStorage.getItem('eToken') !== null) {

      this.onGetUserData();

    }

  }

  // declerations
  role: string | any = '';

  onSignIn(sigInForm: IsignIn): Observable<any> {


  onCheckEmail(email: string): Observable<string> {
    return this._HttpClient.post<string>('Users/Reset/Request', email); // fix end points 
  }
  onResetPassword(form: ResetPasswordRequest): Observable<ResetPasswordRequest> {
    return this._HttpClient.post<ResetPasswordRequest>('Users/Reset', form);   // fix end points 
  }


  onGetUserData() {

    return this._HttpClient.post(`portal/users/login`, sigInForm);


  }
  onGetUserData() {
    let token: any = localStorage.getItem('eToken');
    let encodedToken: any = jwtDecode(token);

    localStorage.setItem("userId", encodedToken._id);
    localStorage.setItem('userName', encodedToken.userName);
    localStorage.setItem("userRole", encodedToken.role);
    this.onGetUserRole();
  }
  onGetUserRole() {
    if (
      localStorage.getItem('eToken') !== null
      &&
      localStorage.getItem("userRole") !== null
    ) {
      this.role = localStorage.getItem("userRole");
    }
  }
}
  signUp( data: FormData): Observable<any> {
    return this._HttpClient.post(`admin/users`, data)
  }
}

