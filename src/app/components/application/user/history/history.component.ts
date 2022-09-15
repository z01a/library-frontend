import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/models/history';
import { BooksService } from 'src/app/services/books.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class UserHistoryComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.fetchHistory()
  }

  displayedHistoryColumns: string[] = ['isbn', 'title', 'authors', 'publisher', 'published', 'taken', 'returned'];

  history: History[] = []

  fetchHistory() {
    this.booksService.fetchMyHistory().subscribe({
      next: (result: any) => {
        this.history = result
      }
    });
  }
}
