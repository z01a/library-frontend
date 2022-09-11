import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

export enum Action {
  Edit,
  Save,
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
    // this.requestInProgress = false;
  }

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get("id");
    this.registerGroup.disable()
    if(username) {
      this.usersService.fetchUser(username).subscribe({
        next: (result: any) => {
          this.user = result

          this.registerGroup.controls["firstname"].setValue(this.user?.firstname);
          this.registerGroup.controls["lastname"].setValue(this.user?.lastname);
          this.registerGroup.controls["username"].setValue(this.user?.username);
          this.registerGroup.controls["email"].setValue(this.user?.email);
          this.registerGroup.controls["address"].setValue(this.user?.address);
          this.registerGroup.controls["moderator"].setValue(this.user?.moderator);
          this.registerGroup.controls["active"].setValue(this.user?.active);
          this.registerGroup.controls["phone"].setValue(this.user?.phone);
        }
      });
    }
  }

  user: User | undefined = undefined;

  registerGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    moderator: new FormControl('', [Validators.required]),
    active: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  hideRequiredControl = new FormControl(true);

  action: Action = Action.Edit;

  public get Action() {
    return Action; 
  }

  performAction() {
    if(this.action === Action.Edit) {
      this.performEdit();
      this.action = Action.Save;
    } else {
      this.performSave();
      this.action = Action.Edit;
    }
  }

  performEdit() {
    this.registerGroup.enable();
  }

  performSave() {
    this.registerGroup.disable();

    const firstname = this.registerGroup.controls["firstname"].value;
    const lastname = this.registerGroup.controls["lastname"].value;
    const email = this.registerGroup.controls["email"].value;
    const address = this.registerGroup.controls["address"].value;
    const phone = this.registerGroup.controls["phone"].value;
    const moderator = this.registerGroup.controls["moderator"].value;
    const active = this.registerGroup.controls["active"].value;
  }

}
