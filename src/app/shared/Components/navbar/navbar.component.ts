import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // declerations
  isAuthenticated = false;
  role: string | null = null;
  // profileImg: any;

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,

  ) { }

  ngOnInit(): void {
    this.checkAuthentication();
    // this.profileImg = this._AuthService.getImgSource();
    // console.log(this.profileImg);
    // if (this.profileImg) {
    //   this.profileImg = URL.createObjectURL(this.profileImg); // Convert the File to a URL
    // }

  }

  checkAuthentication() {
    const token = localStorage.getItem('eToken');
    if (token) {
      this.isAuthenticated = true;
      this.role = this._AuthService.role;
    }
  }

  signOut() {
    localStorage.removeItem('eToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.isAuthenticated = false;
    this.role = null;
    this._Router.navigate(['/auth'])
  }
}
