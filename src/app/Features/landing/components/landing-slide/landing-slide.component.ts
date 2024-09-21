import { Component } from '@angular/core';
import { AdDetailsService } from '../../ad-details/services/ad-details.service';

@Component({
  selector: 'app-landing-slide',
  templateUrl: './landing-slide.component.html',
  styleUrls: ['./landing-slide.component.scss']
})
export class LandingSlideComponent {

  // decleration
  value: number = 5;
  responsiveOptions: any[] = [];

  // ------------------------

  reviews: any[] = [
    {
      head: 'Happy Family Time',
      ratingValue: 5,
      opinion: 'My visit to the hotel gave me the opportunity to have the best quality time with my family.',
      visitorName: 'Nickolos Smith, UK',
    },
    {
      head: 'Business Trip Success',
      ratingValue: 4,
      opinion: 'The hotel provided excellent services and meeting facilities, making my business trip productive and enjoyable.',
      visitorName: 'Anna Johnson, USA',
    },
    {
      head: 'Romantic Getaway',
      ratingValue: 5,
      opinion: 'We had an amazing stay at the hotel. The ambiance was perfect for a romantic weekend.',
      visitorName: 'James Lee, Canada',
    },
    {
      head: 'Family Reunion',
      ratingValue: 3,
      opinion: 'The hotel was a good venue for our family reunion, though the service could be improved.',
      visitorName: 'Maria Garcia, Spain',
    },
    {
      head: 'Adventure Awaits',
      ratingValue: 4,
      opinion: 'This hotel was the perfect base for our adventures. We loved exploring the local area!',
      visitorName: 'Samuel Brown, Australia',
    }
  ];



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
