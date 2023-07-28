import { Component } from '@angular/core';
import { account } from 'src/account';
import { LogInService } from 'src/log-in.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-right-header',
  templateUrl: './right-header.component.html',
  styleUrls: ['./right-header.component.css']
})
export class RightHeaderComponent {


  private accounts: account[] = [];
  constructor( private router: Router, public loginService: LogInService) {}
  ngOnInit(): void{
    this.getAccounts();
  }

  getAccounts(): void{
    this.loginService.getAccounts().subscribe(ac=>this.accounts = ac);
  }




  logOut(): void{
    for(var i = 0; i < this.loginService.accounts.length; i++)
    {
      if( this.loginService.presentAc)
      if(this.loginService.accounts[i].id ==  this.loginService.presentAc.id)
      {
        this.loginService.accounts[i] = this.loginService.presentAc;
        break;
      }
    }
    this.loginService.presentAc = undefined;
    this.loginService.isLogin = false;
  }

  showMyBooks(): void{
    if(this.loginService.presentAc)
    this.router.navigate(['/Mybooks', this.loginService.presentAc.id]);
  }

  showListBooks(): void{
    if(this.loginService.presentAc)
    this.router.navigate(['/Listbook', this.loginService.presentAc.id]);
  }
}
