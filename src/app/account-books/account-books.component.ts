import { Component } from '@angular/core';
import { LogInService } from 'src/log-in.service';
@Component({
  selector: 'app-account-books',
  templateUrl: './account-books.component.html',
  styleUrls: ['./account-books.component.css']
})
export class AccountBooksComponent {
  constructor(public loginService: LogInService){}


  deleteBook(index: number){
    this.loginService.presentAc?.listbook.splice(index, 1);
    if(this.loginService.presentAc)
    this.loginService.updateAccount(this.loginService.presentAc).subscribe(updatedAccount => {});
  }
  
}
