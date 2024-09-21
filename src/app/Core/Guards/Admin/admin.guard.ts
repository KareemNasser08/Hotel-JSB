import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router)
  if (localStorage.getItem('eToken') !== null && localStorage.getItem('userRole') == 'admin') {
    console.log('Guard T');
    return true;

  } else {
    if (localStorage.getItem('eToken') !== null && localStorage.getItem('userRole') == 'user') {

      _Router.navigate(['/landing']);
    } else {

      _Router.navigate(['/auth/signin']);
    }
    return false;
  }

};
