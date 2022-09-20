import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class GuestBooksComponent implements OnInit {

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

  searchText: string = ""

  performSearch() {
    this.searchBooks(this.searchText)
  }

}
