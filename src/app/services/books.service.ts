import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  register(isbn: string, title: string, publisher: string, published: string, language: string, authors: string[], genres: string[]) {
    const body = {
      isbn: isbn,
      title: title,
      publisher: publisher,
      published: published,
      authors: authors,
      genres: genres,
    }
    
    return this.http.post("http://localhost:4000/books/register", body);
  }

  fetch(requests: boolean = false) {
    if(requests) {
      return this.http.get("http://localhost:4000/books/requests");
    } else {
      return this.http.get("http://localhost:4000/books");
    }
  }

  search(searchText: string) {
    const body = {
      searchText: searchText
    }
    return this.http.post("http://localhost:4000/books/search", body);
  }

  recommended() {
    return this.http.get("http://localhost:4000/books/recommended");
  }

  comment(isbn: string, comment: string) {
    const body = {
      comment: comment
    }
    return this.http.post("http://localhost:4000/books/comment/" + isbn, body)
  }

  popular() {
    return this.http.get("http://localhost:4000/books/popular");
  }

  fetchMyBooks() {
    return this.http.get("http://localhost:4000/reading");
  }

  takeBook(isbn: string) {
    return this.http.get("http://localhost:4000/reading/take/" + isbn);
  }

  returnBook(isbn: string) {
    return this.http.get("http://localhost:4000/reading/return/" + isbn);
  }

  fetchMyHistory() {
    return this.http.get("http://localhost:4000/history");
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

  approve(isbn: string) {
    const body = {
      isbn: isbn
    }
    return this.http.post("http://localhost:4000/books/requests/approve", body);
  }

  delete(isbn: string) {
    const body = {
      isbn: isbn
    }
    return this.http.post("http://localhost:4000/books/requests/delete", body);
  }

}
