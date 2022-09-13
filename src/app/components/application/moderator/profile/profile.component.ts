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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ModeratorProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.profileGroup.disable()
    
    this.usersService.fetchCurrentUser().subscribe({
      next: (result: any) => {
        this.user = result

        this.profileGroup.controls["firstname"].setValue(this.user?.firstname);
        this.profileGroup.controls["lastname"].setValue(this.user?.lastname);
        this.profileGroup.controls["email"].setValue(this.user?.email);
        this.profileGroup.controls["address"].setValue(this.user?.address);
        // this.profileGroup.controls["moderator"].setValue(this.user?.moderator);
        // this.profileGroup.controls["active"].setValue(this.user?.active);
        this.profileGroup.controls["phone"].setValue(this.user?.phone);
      }
    });
  }

  user: User | undefined = undefined;

  profileGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    // moderator: new FormControl('', [Validators.required]),
    // active: new FormControl('', [Validators.required]),
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
    this.profileGroup.enable();
  }

  performSave() {
    this.profileGroup.disable();

    const firstname = this.profileGroup.controls["firstname"].value;
    const lastname = this.profileGroup.controls["lastname"].value;
    const email = this.profileGroup.controls["email"].value;
    const address = this.profileGroup.controls["address"].value;
    const phone = this.profileGroup.controls["phone"].value;

    if(this.user) {
      this.usersService.modify(this.user.username, firstname, lastname, email, address, phone, this.user.moderator, this.user.active).subscribe({
        next: () => {
          console.log("User is modified!")
        },
        error: () => {
          console.log("Failed to modify user!")
        }
      });
    }
  }
}
