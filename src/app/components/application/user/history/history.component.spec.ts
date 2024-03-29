import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHistoryComponent } from './history.component';

describe('HistoryComponent', () => {
  let component: UserHistoryComponent;
  let fixture: ComponentFixture<UserHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
