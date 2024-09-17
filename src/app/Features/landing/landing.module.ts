import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingAdsComponent } from './components/landing-ads/landing-ads.component';
import { LandingHeadComponent } from './components/landing-head/landing-head.component';
import { Ads1Component } from './components/ads-1/ads-1.component';
import { Ads2Component } from './components/ads-2/ads-2.component';
import { Ads3Component } from './components/ads-3/ads-3.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LandingComponent,
    LandingAdsComponent,
    LandingHeadComponent,
    Ads1Component,
    Ads2Component,
    Ads3Component,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
