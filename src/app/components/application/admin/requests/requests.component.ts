import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { User } from 'src/app/models/user';
import { BooksService } from 'src/app/services/books.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private usersService: UsersService, private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsersRequests();
    this.fetchBooksRequests();
  }

  displayedUsersColumns: string[] = ['firstname', 'lastname', 'username', 'email', 'active', 'delete'];
  displayedBooksColumns: string[] = ['title', 'author', 'publisher', 'active', 'delete'];

  users: User[] = []
  books: Book[] = []

  fetchUsersRequests() {
    this.usersService.fetch(true).subscribe({
      next: (result: any) => {
        this.users = result
        console.log(this.users)
      }
    });
  }

  fetchBooksRequests() {
    this.booksService.fetch(true).subscribe({
      next: (books: any) => {
        this.books = books;
        console.log(this.books);
      }
    });
  }

  performUserAccept(username: string) {
    console.log(username)
    this.usersService.approve(username).subscribe({
      next: (result) => {
        if(result) {
          this.users = []
          this.fetchUsersRequests()
        }
      }
    });
  }

  performUserDelete(username: string) {
    this.usersService.delete(username).subscribe({
      next: (result) => {
        if(result) {
          this.users = []
          this.fetchUsersRequests()
        }
      }
    });
  }

  performBookAccept(isbn: string) {
    console.log(isbn)
    this.booksService.approve(isbn).subscribe({
      next: (result) => {
        if(result) {
          this.books = []
          this.fetchBooksRequests()
        }
      }
    });
  }

  performBookDelete(isbn: string) {
    this.booksService.delete(isbn).subscribe({
      next: (result) => {
        if(result) {
          this.books = []
          this.fetchBooksRequests()
        }
      }
    });
  }

}
