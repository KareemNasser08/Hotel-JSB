import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  constructor(private _HttpClient: HttpClient) { }


  getAllFacilities():Observable<any>{
    return this._HttpClient.get(`admin/room-facilities`);
  }

  deleteFacility(id: string): Observable<any> {
    return this._HttpClient.delete(`admin/room-facilities/${id}`);
  }

}
