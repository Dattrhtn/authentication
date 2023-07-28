import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBooksComponent } from './account-books.component';

describe('AccountBooksComponent', () => {
  let component: AccountBooksComponent;
  let fixture: ComponentFixture<AccountBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountBooksComponent]
    });
    fixture = TestBed.createComponent(AccountBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
