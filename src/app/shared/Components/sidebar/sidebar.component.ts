import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/dashboard/home',
      isActive: true,
    },
    {
      title: 'Users',
      icon: 'grid_view',
      link: '/dashboard/Users',
      isActive: true,
    },
    {
      title: 'Rooms',
      icon: 'format_list_bulleted',
      link: '/dashboard/Rooms',
      isActive: true,
    },
    {
      title: 'Room Facilities',
      icon: 'room_preferences',
      link: '/dashboard/Rooms-Facilities',
      isActive: true,
    },
    {
      title: 'Ads',
      icon: 'group',
      link: '/dashboard/Ads',
      isActive: true,
    },
    {
      title: 'Booking Facilities',
      icon: 'grid_view',
      link: '/dashboard/Booking-Facilities',
      isActive: true,
    },


  ];

  constructor(
  ) { }
  ngOnInit(): void {

  }

  // isAdmin() {
  //   return localStorage.getItem('userRole') == 'admin' ? true : false;
  // }

  // isUser() {
  //   return localStorage.getItem('userRole') == 'user' ? true : false;
  // }

}
