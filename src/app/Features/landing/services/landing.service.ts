import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  // decleration 
  exploreRooms: BehaviorSubject<any> = new BehaviorSubject(null);



  // ------------------------------

  constructor(private _HttpClient: HttpClient) {

  }



  getAllAds(): Observable<any> {
    return this._HttpClient.get('portal/ads')
  }


  saveFavRoom(myRoomId: Params): Observable<any> {
    return this._HttpClient.post('portal/favorite-rooms', { roomId: myRoomId });
  }


  onGetAllRooms(myparams: Params): Observable<any> {
    return this._HttpClient.get(`portal/rooms//available`, myparams)
  }



  onExplore(myparams: Params): Observable<any> {

    return this._HttpClient.get(`portal/rooms/available`, myparams)

  }



}




