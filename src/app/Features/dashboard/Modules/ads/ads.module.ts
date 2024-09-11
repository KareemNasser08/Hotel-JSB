import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/Components/delete/delete.component';
import { AdsService } from './services/ads.service';
import { ToastrService } from 'ngx-toastr';
import { AdsListComponent } from './components/ads-list/ads-list.component';


@NgModule({
  declarations: [
    AdsComponent,
    AdsListComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule
  ]
})
export class AdsModule {

}