import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.errorMessage = "";
    this.requestInProgress = false;
  }

  ngOnInit(): void {
  }

  loginGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  hideRequiredControl = new FormControl(true);

  requestInProgress : boolean;

  errorMessage : string;

  performLogin() {
    this.requestInProgress = true;

    this.authService.auth(this.loginGroup.controls['username'].value, this.loginGroup.controls['password'].value).pipe(delay(2000)).subscribe({
      next: (response) => {
        if(response) {
          localStorage.setItem("token", JSON.stringify(response));
          sessionStorage.setItem("token", JSON.stringify(response));

          // TODO: Perform redirection to other route
        }
      },
      complete: () => {
        this.requestInProgress = false;
      },
      error: () => {
        this.requestInProgress = false;

        this.errorMessage = "Invalid username or password!";
      }
    });
  }

}
