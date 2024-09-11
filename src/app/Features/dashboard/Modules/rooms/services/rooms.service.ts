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
  getAllRooms(myParams: any): Observable<any> {
    return this._HttpClient.get('admin/rooms', { params: myParams });
  }
  getRoomById(id: string): Observable<any> {
    return this._HttpClient.get(`admin/rooms/${id}`);
  }
  getAllFacilities(): Observable<any> {
    return this._HttpClient.get('admin/room-facilities');
  }
  AddRoom(data: FormData): Observable<any> {
    return this._HttpClient.post('admin/rooms', data);
  }
  EditRoom(id: string, data: FormData): Observable<any> {
    return this._HttpClient.put(`admin/rooms/${id}`, data);
  }

}
