import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthorizationGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.getToken()) {
        this.router.navigate(["admin/login"]);
        return false;
      }

      return new Promise((resolve, reject) => {
        // TODO: Check if user is administrator
        this.authService.validate(this.authService.getToken()).subscribe({
          next: (response) => {
            resolve(true);
          },
          error: (error) => {
            this.router.navigate(["admin/login"]);
            resolve(false);
          },
        });
      });
  }
  
}
