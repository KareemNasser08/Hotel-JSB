import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {


  let _Router = inject(Router);

  let _AuthService = inject(AuthService);

  if (localStorage.getItem('eToken') !== null
    &&
    localStorage.getItem('userRole') === 'admin') {

    return true;

  }

  else {

    _AuthService.onGetUserData();

    _Router.navigate(['/landing']);

    return false;
  }

};
