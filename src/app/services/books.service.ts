import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get("http://localhost:4000/books");
  }

  fetchBook(isbn: string) {
    return this.http.get("http://localhost:4000/books/" + isbn);
  }
}
