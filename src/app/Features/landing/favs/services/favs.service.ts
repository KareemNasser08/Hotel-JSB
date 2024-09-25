import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  constructor(

    private _HttpClient: HttpClient,

  ) { }



  onGetFavs(): Observable<any> {

    return this._HttpClient.get(`portal/favorite-rooms`)

  }


  onRemoveFav(roomId: string): Observable<any> {

    return this._HttpClient.delete(`portal/favorite-rooms/${roomId}`, { body: { roomId } })

  }






}
