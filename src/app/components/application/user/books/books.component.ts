import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class UserBooksComponent implements OnInit {

  constructor(private booksService: BooksService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchBooks()
  }

  books: Book[] = []

  result: Book[] = []

  fetchBooks() {
    this.booksService.fetch().subscribe({
      next: (result: any) => {
        this.books = result
        console.log(this.books)
      }
    });
  }

  searchBooks(searchText: string) {
    this.result = []
    
    this.result = this.books.filter(book => {
      let authors = book.authors.filter(author => {
        return author.toLowerCase().match(searchText.toLocaleLowerCase())
      })

      return book.title.toLocaleLowerCase().match(searchText.toLocaleLowerCase()) || authors.length != 0
    })
  }

  takeBook(isbn: string) {
    this.booksService.takeBook(isbn).subscribe({
      next: (result) => {
        this.fetchBooks()
        var snackbar = this.snackbar.open("Book has been taken!");
          setTimeout(() => {
            snackbar.dismiss();
          }, 2500);
      }
    });
  }

  searchText: string = ""

  performSearch() {
    this.searchBooks(this.searchText)
  }

}
