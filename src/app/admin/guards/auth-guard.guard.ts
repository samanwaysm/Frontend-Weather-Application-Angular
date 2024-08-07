import { CanActivateFn, Router} from '@angular/router';
import { AuthServiceService } from '../../shared/services/auth-service.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const token: string | null = localStorage.getItem('token');
  const router: Router = inject(Router);
  const routes: string[] = ['/adminlogin'];

  if(!token && !routes.includes(state.url)){
    router.navigate(['/adminlogin'])
    return false;
  }else if(token && routes.includes(state.url)){
    router.navigate(['/adminHome']);
    return false;
  }else if(!token && routes.includes(state.url)){
    return true;
  }
  return authService.verifyToken()
  .pipe(
    map(response => {
      if (!response.invalidToken) {
        return true;
      }

      localStorage.removeItem('token');
      router.navigate(['/adminlogin']);
      return false;
    }),
    catchError(error => {
      localStorage.removeItem('token');
      router.navigate(['/adminlogin']);
      return of(false);
    })
  );
};
