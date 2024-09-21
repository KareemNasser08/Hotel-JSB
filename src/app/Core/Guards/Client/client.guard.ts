import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';

export const clientGuard: CanActivateFn = (route, state) => {


  const _Router = inject(Router)

  if (localStorage.getItem('eToken') !== null && localStorage.getItem('userRole') == 'user') {

    return true;
  } else {
    _Router.navigate(['/auth/signin']);
    return false;
  }
}