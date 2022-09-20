import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get("isbn");
    
    if(isbn) {
      this.booksService.fetchBook(isbn).subscribe({
        next: (result: any) => {
          this.book = result;
        }
      });
    }
  }

  book: Book | undefined = undefined;

  info: boolean = false;

  toggleInfo() {
    if(this.info) {
      this.info = false;
    } else {
      this.info = true;
    }
  }

}
