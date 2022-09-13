import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class ModeratorBooksComponent implements OnInit {

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.fetchBooks()
  }

  displayedColumns: string[] = ['title', 'author', 'publisher', 'delete'];

  books: Book[] = []

  fetchBooks() {
    this.booksService.fetch(false).subscribe({
      next: (result: any) => {
        this.books = result
        console.log(this.books)
      }
    });
  }

  performRowAction(isbn: string) {
    this.router.navigate(['/moderator/books/' + isbn]);
  }

  performDelete(isbn: string) {
    this.booksService.delete(isbn).subscribe({
      next: (result) => {
        if(result) {
          this.books = []
          this.fetchBooks()
        }
      }
    })
  }

}
