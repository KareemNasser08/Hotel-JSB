import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _HttpClient: HttpClient) { }

  onViewUser(id: number): Observable<any> {
    return this._HttpClient.get(`admin/users/${id}`)
  }

  deleteUser(id: number): Observable<any> {
    return this._HttpClient.delete(`admin/users/${id}`);
  }
  getAllUsers(myParams: any): Observable<any> {
    return this._HttpClient.get('admin/users', { params: myParams });
  }
  getUserById(id: string): Observable<any> {
    return this._HttpClient.get(`admin/users/${id}`);
  }
 
}