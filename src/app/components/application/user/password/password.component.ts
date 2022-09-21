import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class UserPasswordComponent implements OnInit {

  constructor(private router: Router, private usersService: UsersService, private authService: AuthService) { }

  ngOnInit(): void {
    this.usersService.fetchCurrentUser().subscribe({
      next: (result: any) => {
        this.user = result
      }
    });
  }

  user: User | undefined = undefined;

  passwordGroup = new FormGroup({
    new_password: new FormControl('', [Validators.required]),
    old_password: new FormControl('', [Validators.required]),
    old_repeated: new FormControl('', [Validators.required]),
  });

  hideRequiredControl = new FormControl(true);

  performPasswordChange() {
    const new_password = this.passwordGroup.controls["new_password"].value;
    const old_password = this.passwordGroup.controls["old_password"].value;
    const old_repeated = this.passwordGroup.controls["old_repeated"].value;

    if(this.user) {
      this.usersService.changePassword(new_password, old_password, old_repeated).subscribe({
        next: (result) => {
          console.log("Password changed!")
          this.authService.logout();
          this.router.navigate(["login"])

        },
        error: (error) => {
          console.log("Failed to change password!")
        }
      });
    }
  }

}
