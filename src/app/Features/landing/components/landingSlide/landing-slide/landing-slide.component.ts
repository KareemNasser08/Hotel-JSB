import { Component } from '@angular/core';
import { AdDetailsService } from '../../../ad-details/services/ad-details.service';

@Component({
  selector: 'app-landing-slide',
  templateUrl: './landing-slide.component.html',
  styleUrls: ['./landing-slide.component.scss']
})
export class LandingSlideComponent {

  // decleration

  value: number = 5;
  responsiveOptions: any[] | undefined;

  // ---------------------------------------

  constructor(private _AdDetailsService: AdDetailsService) { }

  ngOnInit() {




    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }




}
