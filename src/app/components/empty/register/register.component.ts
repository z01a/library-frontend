import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router, private snackbar: MatSnackBar) {
    this.requestInProgress = false;
  }

  ngOnInit(): void {
  }

  registerGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeated: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  hideRequiredControl = new FormControl(true);

  requestInProgress : boolean;

  performRegister() {
    this.requestInProgress = true;
    this.registerGroup.disable();

    const firstname = this.registerGroup.controls["firstname"].value;
    const lastname = this.registerGroup.controls["lastname"].value;
    const username = this.registerGroup.controls["username"].value;
    const password = this.registerGroup.controls["password"].value;
    const email = this.registerGroup.controls["email"].value;
    const address = this.registerGroup.controls["address"].value;
    const phone = this.registerGroup.controls["phone"].value;
    const picture = "";

    this.usersService.register(firstname, lastname, username, password, email, address, phone, picture).subscribe({
        next: (result) => {
          var snackbar = this.snackbar.open("Registration is successful! Please wait to redirect you...");
          setTimeout(() => {
            snackbar.dismiss();
            this.router.navigate(["login"]);
          }, 2500);
        },
        error: (error) => {
          var snackbar = this.snackbar.open("Registration failed!");
          setTimeout(() => {
            snackbar.dismiss()
            this.requestInProgress = false;
            this.registerGroup.enable();
          }, 2500);
        }
      });
  }

}
