import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomFacilityService {

  constructor(

    private _HttpClient: HttpClient,
  ) { }



  onGetAllRoomFacility(): Observable<any> {
    return this._HttpClient.get(`admin/room-facilities`)
  }



  onAddRoomFacility(data:string): Observable<any> {
    return this._HttpClient.post(`admin/room-facilities`, {name:data})
  }



  onViewRoomFacility(id: number): Observable<any> {
    return this._HttpClient.get(`admin/room-facilities/${id}`)
  }

  onUpdateRoomFacility(id:number , data:string): Observable<any> {
    return this._HttpClient.put(`admin/room-facilities/${id}`, {name:data})
  }


  onDeleteRoomFacility(id: number): Observable<any> {
    return this._HttpClient.delete(`admin/room-facilities/${id}`)
  }


}
