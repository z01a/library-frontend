import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

export enum Action {
  Edit,
  Save,
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get("isbn");

    console.log(isbn)

    this.bookGroup.disable()
    
    if(isbn) {
      this.booksService.fetchBook(isbn).subscribe({
        next: (result: any) => {
          this.book = result;

          if(this.book) {
            this.genres = this.book.genres;
          }

          console.log(this.book)

          this.bookGroup.controls["isbn"].setValue(this.book?.isbn);
          this.bookGroup.controls["title"].setValue(this.book?.title);
          this.bookGroup.controls["publisher"].setValue(this.book?.publisher);
          this.bookGroup.controls["published"].setValue(this.book?.published);
          this.bookGroup.controls["language"].setValue(this.book?.language);
        }
      });
    }
  }

  book: Book | undefined = undefined;

  bookGroup = new FormGroup({
    isbn: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    published: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    genres: new FormControl('', []),
  });

  genres: string[] = []

  addKeywordFromInput(event: MatChipInputEvent) {
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

  action: Action = Action.Edit;

  public get Action() {
    return Action; 
  }

  performAction() {
    if(this.action === Action.Edit) {
      this.performEdit();
      this.action = Action.Save;
    } else {
      this.performSave();
      this.action = Action.Edit;
    }
  }

  performEdit() {
    this.bookGroup.enable();

    // We should not alter ISBN number!
    this.bookGroup.controls['isbn'].disable()
  }

  performSave() {
    this.bookGroup.disable();

    const isbn = this.bookGroup.controls["isbn"].value;
    const title = this.bookGroup.controls["title"].value;
    const email = this.bookGroup.controls["publisher"].value;
    const address = this.bookGroup.controls["published"].value;
    const phone = this.bookGroup.controls["language"].value;
  }

}
