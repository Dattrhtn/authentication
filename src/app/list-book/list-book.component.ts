import { Component} from '@angular/core';
import { book } from 'src/book';
import { ListBookService } from 'src/list-book.service';
import { LogInService } from 'src/log-in.service';
import { InMemoryDataService } from 'src/in-memory-data.service';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent{
  books: book[] = [];
  constructor(private listBookService: ListBookService, private loginService:LogInService, private inMemoryData:InMemoryDataService) {}
  ngOnInit(): void{
    this.getBooks();
  }

  getBooks(): void{
    this.listBookService.getBooks().subscribe(books=>this.books = books);
  }

  addBook(bk: book): void{
    this.loginService.presentAc?.listbook.push(bk);
    alert("Added: " + bk.name);
    if(this.loginService.presentAc)
    this.loginService.updateAccount(this.loginService.presentAc).subscribe(updatedAccount => {});
  }
}
