import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
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

    let username = this.loginGroup.controls['username'].value;
    let password = this.loginGroup.controls['password'].value;

    this.authService.authenticate(username, password, true).pipe(delay(2000)).subscribe({
      next: (response: any) => {
        if(response) {
          const token = response.token;

          localStorage.setItem("token", token);

          this.router.navigate(['admin']);
        }
      },
      complete: () => {
        this.requestInProgress = false;
      },
      error: (error) => {
        this.requestInProgress = false;

        this.errorMessage = "Invalid username or password!";
      }
    });
  }

}
