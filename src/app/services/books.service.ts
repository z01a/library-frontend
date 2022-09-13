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

  modify(isbn: string, title: string, publisher: string, published: string, language: string) {
    const body = {
      isbn: isbn,
      title: title,
      publisher: publisher,
      published: published,
      language: language,
    }
    
    return this.http.post("http://localhost:4000/books/modify", body);
  }
}
