import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.fetchRequests()
  }

  displayedColumns: string[] = ['firstname', 'lastname', 'username', 'email', 'active', 'delete'];

  requests: User[] = []

  fetchRequests() {
    this.usersService.fetch(true).subscribe({
      next: (result: any) => {
        this.requests = result
        console.log(this.requests)
      }
    });
  }

  performAccept(username: string) {
    console.log(username)
    this.usersService.approve(username).subscribe({
      next: (result) => {
        if(result) {
          this.requests = []
          this.fetchRequests()
        }
      }
    });
  }

  performDelete(username: string) {
    this.usersService.delete(username).subscribe({
      next: (result) => {
        if(result) {
          this.requests = []
          this.fetchRequests()
        }
      }
    });
  }

}
