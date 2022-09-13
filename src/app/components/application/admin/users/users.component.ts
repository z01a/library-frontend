import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  displayedColumns: string[] = ['firstname', 'lastname', 'username', 'email', 'active', 'role', 'delete'];

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

  performRowAction(username: string) {
    this.router.navigate(['/admin/users/' + username]);
    console.log("Clicked!" + username)
  }

}
