import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReadingComponent } from './reading.component';

describe('ReadingComponent', () => {
  let component: UserReadingComponent;
  let fixture: ComponentFixture<UserReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
