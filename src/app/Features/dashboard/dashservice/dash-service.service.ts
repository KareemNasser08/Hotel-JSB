import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashServiceService {

  constructor(
    private _HttpClient: HttpClient,
  ) { }



  onGetCharts(): Observable<any> {
    return this._HttpClient.get(`admin/dashboard`);

  }



}
