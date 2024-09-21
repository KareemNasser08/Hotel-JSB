import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomdetailsService {

  constructor(

    private _HttpClient: HttpClient,

  ) { }



  onGetRoomDetails(id: number, myparams: Params): Observable<any> {
    return this._HttpClient.get(`portal/rooms/${id}`, myparams)
  }



  // getAdFacility(id: number): Observable<any> {

  //   return this._HttpClient.get(`admin/room-facilities/${id}`)
  // }



  onContinueBooking(myparams: Params): Observable<any> {
    return this._HttpClient.post(`portal/booking`, myparams);
  }


  onRating(myparams: Params): Observable<any> {
    return this._HttpClient.post(`portal/room-reviews`, myparams)
  }


  ongetAllReviews(id: number): Observable<any> {
    return this._HttpClient.get(`portal/room-reviews/${id}`)
  }



  onCommenting(myParams: Params): Observable<any> {
    return this._HttpClient.post(`portal/room-comments`, myParams)
  }

  ongetAllComments(id: number): Observable<any> {
    return this._HttpClient.get(`portal/room-comments/${id}`)
  }

  onDeleteComment(id: number): Observable<any> {
    return this._HttpClient.delete(`portal/room-comments/${id}`)
  }



}



