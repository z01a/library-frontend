import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class UserReadingComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.fetchBooks()
  }

  books: any = []

  fetchBooks() {
    this.booksService.fetchMyBooks().subscribe({
      next: (result: any) => {
        if(result) {
          this.books = result;
        }
      }
    });
  }

}
