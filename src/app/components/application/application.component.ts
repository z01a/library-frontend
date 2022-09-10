import { Component, OnInit } from '@angular/core';
import { Role } from './../../enums/role';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      this.authService.validate(this.authService.getToken()).subscribe(
        {
          next: (result: any) =>
          {
            const role = result.role;

            if(role & Role.Administrator) {
              this.routes = ApplicationComponent.RoleRoutes['Administrator'];
            } else if(role & Role.Moderator) {
              this.routes = ApplicationComponent.RoleRoutes['Moderator'];
            } else if (role & Role.User) {
              this.routes = ApplicationComponent.RoleRoutes['User'];
            } else {
              this.routes = ApplicationComponent.RoleRoutes['Guest'];
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

  routes: Link[] | undefined = undefined;

  private static readonly RoleRoutes: { [id: string]: Link[]; } = {
    Administrator: [
      { link: "/admin", name: "Home", icon: "home"}
    ],
    Moderator: [
      { link: "/home", name: "Home", icon: "home" }
    ],
    User: [
      { link: "/home", name: "Home", icon: "home" }
    ],
    Guest: [
      { link: "/guest", name: "Home", icon: "home" }
    ]
  }

}
