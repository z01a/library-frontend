import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(private bookService: BooksService) { }

  popular: any[] = []

  ngOnInit(): void {
    this.bookService.popular().subscribe({
      next: (result: any) => {
        this.popular = result;
      }
    });
  }

}
