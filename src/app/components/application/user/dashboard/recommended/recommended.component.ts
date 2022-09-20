import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  constructor(private bookService: BooksService) { }

  recommended: Book | undefined = undefined;

  ngOnInit(): void {
    this.bookService.recommended().subscribe({
      next: (result: any) => {
        this.recommended = result;
      }
    });
  }

}
