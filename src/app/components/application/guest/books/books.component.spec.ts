import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBooksComponent } from './books.component';

describe('BooksComponent', () => {
  let component: GuestBooksComponent;
  let fixture: ComponentFixture<GuestBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
