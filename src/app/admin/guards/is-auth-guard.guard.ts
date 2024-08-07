import { CanActivateFn } from '@angular/router';

export const isAuthGuardGuard: CanActivateFn = (route, state) => {
  // return true;
  const token: string | null = localStorage.getItem('token');

  if (!token) {
    return true;
  } else {
    return false;
  }
};
