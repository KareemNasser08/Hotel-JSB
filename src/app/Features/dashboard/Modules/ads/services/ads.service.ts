import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private _HttpClient: HttpClient) { }
  
  
  getAllAds():Observable<any>{
    return this._HttpClient.get('admin/ads');
  }
  
  createAd(data: FormGroup):Observable<any>{
    return this._HttpClient.post('admin/ads',data)
  }

  getAdDetails(id: string):Observable<any>{
    return this._HttpClient.get(`admin/ads${id}`);
  }

  addAd(data: FormData): Observable<any> {
    return this._HttpClient.post('admin/ads', data);
  }

  editAd(id: string, data: FormData): Observable<any> {
      return this._HttpClient.put(`admin/ads/${id}`, data);
    }

  deleteAd(id: number): Observable<any> {
    return this._HttpClient.delete(`admin/ads/${id}`);
  }



}
