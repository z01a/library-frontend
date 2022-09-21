import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class BookRegisterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
  }

  book: Book | undefined = undefined;

  bookGroup = new FormGroup({
    isbn: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    published: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    genres: new FormControl(''),
    authors: new FormControl(''),
  });

  authors: string[] = [];
  genres: string[] = [];

  addAuthorFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.authors.push(event.value);
      event.chipInput!.clear();
    }
  }

  removeAuthor(author: string) {
    let index = this.genres.indexOf(author);
    this.authors.splice(index, 1);
  }

  addGenresFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.genres.push(event.value);
      event.chipInput!.clear();
    }
  }

  removeGenre(keyword: string) {
    let index = this.genres.indexOf(keyword);
    this.genres.splice(index, 1);
  }

  hideRequiredControl = new FormControl(true);

  performSave() {
    this.bookGroup.disable();

    const isbn = this.bookGroup.controls["isbn"].value;
    const title = this.bookGroup.controls["title"].value;
    const publisher = this.bookGroup.controls["publisher"].value;
    const published = this.bookGroup.controls["published"].value;
    const language = this.bookGroup.controls["language"].value;
    const cover = this.bookGroup.controls["cover"].value;
    const genres = this.bookGroup.controls["genres"].value;

    this.booksService.register(isbn, title, publisher, published, language, this.authors, this.genres, cover).subscribe({
      next: () => {
        console.log("Book is registered!")
      },
      error: () => {
        console.log("Failed to modify book!")
      }
    });
  }

}
