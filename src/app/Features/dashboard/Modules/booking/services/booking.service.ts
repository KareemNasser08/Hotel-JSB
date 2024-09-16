import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _HttpClient: HttpClient) { }




  onGetAllBooking(myParams: any): Observable<any> {
    return this._HttpClient.get('admin/booking', { params: myParams });
  }



  onDeleteBooking(id: number): Observable<any> {
    return this._HttpClient.delete(`admin/booking/${id}`)
  }


  onViewBookingDetails(id: number): Observable<any> {
    return this._HttpClient.get(`admin/booking/${id}`)
  }


}

