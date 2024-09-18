import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  availableLanguages = [{label: 'EN', value: 'en'}, {label: 'AR', value: 'ar'}];
  currentLanguage = this.translate.defaultLang;

  value: string = 'en';
  // profileImg: any;

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    public translate:TranslateService


  ) {}

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

  changeLanguage(language: string) {
    this.translate.use(language);   

    this.currentLanguage = language;

    console.log(language);
    console.log(this.currentLanguage)
    
  }
  // translateToEng(){
  //   this.translate.use('en');

  // }
  // translateToAr(){
  //   this.translate.use('ar');
  // }


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
