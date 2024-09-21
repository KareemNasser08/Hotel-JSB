import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingAdsComponent } from './components/landing-ads/landing-ads.component';
import { LandingHeadComponent } from './components/landing-head/landing-head.component';
import { Ads1Component } from './components/ads-1/ads-1.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExploreRoomComponent } from './components/explore-room/explore-room.component';
import { CarouselModule } from 'primeng/carousel';
import { LandingSlideComponent } from './components/landing-slide/landing-slide.component';

@NgModule({
  declarations: [
    LandingComponent,
    LandingAdsComponent,
    LandingHeadComponent,
    Ads1Component,
    FooterComponent,
    ExploreRoomComponent,
    LandingSlideComponent

  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    CarouselModule
  ],
  exports: [
    FooterComponent
  ]
})
export class LandingModule { }
