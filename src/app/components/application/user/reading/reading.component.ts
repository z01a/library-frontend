import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class UserReadingComponent implements OnInit {

  constructor(private booksService: BooksService, private snackbar: MatSnackBar) { }

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

  returnBook(isbn: string) {
    this.booksService.returnBook(isbn).subscribe({
      next: (result) => {
        this.fetchBooks()

        var snackbar = this.snackbar.open("Book has been returned!");
          setTimeout(() => {
            snackbar.dismiss();
          }, 2500);
      }
    });
  }

}
