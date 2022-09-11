import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  users: User[] = []

  fetchUsers() {
    this.usersService.fetch(false).subscribe({
      next: (result: any) => {
        this.users = result
        console.log(this.users)
      }
    });
  }

  performDelete(username: string) {
    // TODO: Delete user but check firt does he have books
  }

}
