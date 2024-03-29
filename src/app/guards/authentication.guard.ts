import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.getToken()) {
        return true;
      }
      
      return new Promise((resolve, reject) => {
        this.authService.validate(this.authService.getToken()).subscribe({
          next: (response) => {
            this.router.navigate(["home"]);
            resolve(false);
          },
          error: (error) => {
            resolve(true);
          },
        });
      });
  }
  
}
