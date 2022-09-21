import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class UserPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

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
    const firstname = this.passwordGroup.controls["new_password"].value;
    const lastname = this.passwordGroup.controls["old_password"].value;
    const email = this.passwordGroup.controls["old_repeated"].value;
  }

}
