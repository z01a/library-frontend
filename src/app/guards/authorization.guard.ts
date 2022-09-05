import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(route);
      console.log(state);

      if(!this.authService.getToken()) {
        return false;
      }

      return new Promise((resolve, reject) => {
        this.authService.validate(this.authService.getToken()).subscribe({
          next: (response) => {
            resolve(true);
          },
          error: (error) => {
            resolve(false);
          },
          complete: () => {
            resolve(false);
          }
        });
      });
  }
  
}
