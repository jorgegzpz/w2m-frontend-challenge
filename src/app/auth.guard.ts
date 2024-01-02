import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const router = inject(Router);
    const isLoggedIn = true;
    if (isLoggedIn) {
      return true;
    } else {
      router.createUrlTree(['page-not-found']);
      return false;
    }
  }

}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(LoginService).canActivate(next, state);
}
