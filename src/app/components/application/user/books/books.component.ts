import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class UserBooksComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.fetchBooks()
  }

  books: Book[] = []

  fetchBooks() {
    this.booksService.fetch().subscribe({
      next: (result: any) => {
        this.books = result
        console.log(this.books)
      }
    });
  }

}
