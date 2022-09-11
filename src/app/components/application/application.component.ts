import { Component, OnInit } from '@angular/core';
import { Role } from './../../enums/role';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

interface Link {
  link: string,
  name: string,
  icon: string
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
      this.authService.validate(this.authService.getToken()).subscribe(
        {
          next: (result: any) =>
          {
            this.role = result.role;

            if(this.role) {
              if(this.role & Role.Administrator) {
                this.routes = ApplicationComponent.RoleRoutes['Administrator'];
              } else if(this.role & Role.Moderator) {
                this.routes = ApplicationComponent.RoleRoutes['Moderator'];
              } else if (this.role & Role.User) {
                this.routes = ApplicationComponent.RoleRoutes['User'];
              } else {
                this.routes = ApplicationComponent.RoleRoutes['Guest'];
              }
            }
          },
          error: () =>
          {
            this.role = Role.Guest
          }
        }
      );
  }

  role: Role | undefined = undefined;

  public get Role() {
    return Role; 
  }

  routes: Link[] | undefined = undefined;

  private static readonly RoleRoutes: { [id: string]: Link[]; } = {
    Administrator: [
      { link: "/admin", name: "Home", icon: "home" },
      { link: "/admin/requests", name: "Requests", icon: "pending" },
      { link: "/admin/users", name: "Users", icon: "group" }

    ],
    Moderator: [
      { link: "/moderator", name: "Home", icon: "home" }
    ],
    User: [
      { link: "/user", name: "Home", icon: "home" }
    ],
    Guest: [
      { link: "/guest", name: "Home", icon: "home" }
    ]
  }

  performLogout() {
    this.authService.logout();
    this.router.navigate(["/guest"]);

    // Should we reset the role or do it in a different way?
    this.role = Role.Guest;
  }

}
