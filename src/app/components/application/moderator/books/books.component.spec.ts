import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorBooksComponent } from './books.component';

describe('BooksComponent', () => {
  let component: ModeratorBooksComponent;
  let fixture: ComponentFixture<ModeratorBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
