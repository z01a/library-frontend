import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBooksComponent } from './books.component';

describe('BooksComponent', () => {
  let component: UserBooksComponent;
  let fixture: ComponentFixture<UserBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
