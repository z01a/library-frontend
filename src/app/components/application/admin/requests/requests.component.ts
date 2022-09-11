import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.fetchRequests();
  }

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
