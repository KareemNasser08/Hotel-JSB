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

    // this.onGetUserData();

  }

  // declerations
  role: string | any = '';


  onSignIn(sigInForm: IsignIn): Observable<any> {
    return this._HttpClient.post(`admin/users/login`, sigInForm);
  }

  onCheckEmail(email: string): Observable<string> {
    return this._HttpClient.post<string>('Users/Reset/Request', email); // fix end points 
  }
  onResetPassword(form: ResetPasswordRequest): Observable<ResetPasswordRequest> {
    return this._HttpClient.post<ResetPasswordRequest>('Users/Reset', form);   // fix end points 
  }


  onGetUserData() {

    let decodedToken: any = localStorage.getItem('eToken');
    let encodedToken: any = jwtDecode(decodedToken);

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
