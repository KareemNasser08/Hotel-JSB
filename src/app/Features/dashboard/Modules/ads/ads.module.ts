import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditAdComponent } from './Components/add-edit-ad/add-edit-ad.component';



@NgModule({
  declarations: [
    AdsComponent,
    AddEditAdComponent,
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule
  ]
})
export class AdsModule {

}