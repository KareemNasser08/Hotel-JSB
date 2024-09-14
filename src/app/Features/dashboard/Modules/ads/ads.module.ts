import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteAdComponent } from './Components/delete-ad/delete-ad.component';
import { AddEditAdComponent } from './Components/add-edit-ad/add-edit-ad.component';



@NgModule({
  declarations: [
    AdsComponent,
    DeleteAdComponent,
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