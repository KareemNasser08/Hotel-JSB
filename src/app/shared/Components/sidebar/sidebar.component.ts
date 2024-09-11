import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  
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
      isActive: this.isAdmin(),
    },
    {
      title: 'Rooms',
      icon: 'format_list_bulleted',
      link: '/dashboard/manager/tasks',
      isActive: this.isAdmin(),
    },
    {
      title: 'Ads',
      icon: 'group',
      link: '/dashboard/manager/users',
      isActive: this.isAdmin(),
    },
    {
      title: 'Booking Facilities',
      icon: 'grid_view',
      link: '/dashboard/Booking-Facilities',
      isActive: this.isAdmin(),
    },
    {
      title: 'Tasks',
      icon: 'format_list_bulleted',
      link: '/dashboard/employee/view-task',
      isActive: this.isAdmin(),
    },
  ];

  constructor(
    private _AuthService: AuthService,
  ) {}
  ngOnInit() {}

  isAdmin() {
    return this._AuthService.role == 'admin' ? true : false;
  }

  isUser() {    
    return this._AuthService.role == 'user' ? true : false;
  }

}
