import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdDetailsRoutingModule } from './ad-details-routing.module';
import { AdDetailsComponent } from './ad-details.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AdDetailsComponent
  ],
  imports: [
    CommonModule,
    AdDetailsRoutingModule,
    SharedModule
  ]
})
export class AdDetailsModule { }
