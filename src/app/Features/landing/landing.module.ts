import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingAdsComponent } from './components/landing-ads/landing-ads.component';
import { LandingHeadComponent } from './components/landing-head/landing-head.component';


@NgModule({
  declarations: [
    LandingComponent,
    LandingAdsComponent,
    LandingHeadComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
