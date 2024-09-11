import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _HttpClient: HttpClient) { }

  onViewRoom(id: number): Observable<any> {
    return this._HttpClient.get(`admin/rooms/${id}`)
  }

  deleteRoom(id: number): Observable<any> {
    return this._HttpClient.delete(`admin/rooms/${id}`);
  }

}
