import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddNewAdComponent } from './Components/add-new-ad/add-new-ad.component';
import { DeleteAdComponent } from './Components/delete-ad/delete-ad.component';



@NgModule({
  declarations: [
    AdsComponent,
    AddNewAdComponent,
    DeleteAdComponent,
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule
  ]
})
export class AdsModule {

}