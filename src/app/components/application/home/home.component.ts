import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/enums/role';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.validate(this.authService.getToken()).subscribe({
      next: (result: any) => {
        if(result) {
          let role: Role = result.role;

          if(role == Role.Moderator) {
            this.router.navigate(['moderator']);
          } else {
            this.router.navigate(['user']);
          }
        }
      }
    });
  }

  // performLogout() {
  //   this.authService.logout();
  //   this.router.navigate(["login"]);
  // }

}
