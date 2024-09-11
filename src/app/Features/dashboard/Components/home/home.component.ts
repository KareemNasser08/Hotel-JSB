import { Component } from '@angular/core';
import { DashServiceService } from '../../dashservice/dash-service.service';
import { Ichart } from '../../interfaces/dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // declerations
  charData!: Ichart | any;
  bookingChartData: any[] = [];
  userChartData: any[] = [];

  view: [number, number] = [400, 300];
  showLegend = true;
  showLabels = false;
  explodeSlices = false;
  doughnut = true;
  gradient = false;


  bookingColor = [
    { name: 'Completed', value: '#526BE8' },
    { name: 'Pending', value: '#FF2C38' },
  ]

  userColor = [
    { name: 'admin', value: '#35C2FD' },
    { name: 'user', value: '#54D14D' },
  ]


  ngOnInit(): void {
    this.GetCharts();
  }

  constructor(
    private _DashService: DashServiceService,
  ) { }




  GetCharts() {
    this._DashService.onGetCharts().subscribe({
      next: (resp) => {
        this.charData = resp;
        this.bookingChartData = [
          { name: 'Completed', value: this.charData.data.bookings.completed },
          { name: 'Pending', value: this.charData.data.bookings.pending }
        ];

        this.userChartData = [
          { name: 'admin', value: this.charData.data.users.admin },
          { name: 'user', value: this.charData.data.users.user }
        ];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
