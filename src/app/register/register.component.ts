import { Component } from '@angular/core';
import { account } from 'src/account';
import { Router } from '@angular/router';
import { LogInService } from 'src/log-in.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nameRg: string = '';
  passRg1: string = '';
  passRg2: string = '';
  notiRegName: boolean = false;
  notiRegPass: boolean = false;

  private accounts: account[] = [];
  constructor( private router: Router, private loginService: LogInService) {}
  ngOnInit(): void{
    this.getAccounts();
  }

  getAccounts(): void{
    this.loginService.getAccounts().subscribe(books=>this.accounts = books);
  }

  
  acc: account ={
    name: '',
    password: '',
    listbook: []
  };
  checkRg(): boolean{
    if(this.nameRg == '' || this.passRg1 == '')
    {
      return false;
    }
    this.acc.name = this.nameRg;
    this.acc.password = this.passRg1;
    if(this.passRg1 != this.passRg2)
    {
      this.notiRegPass = true;
      return false;
    }
    
    for(var ac of this.accounts)
    {
      if(this.nameRg == ac.name)
      {
        this.notiRegName = true;
        return false;
      }
    }
    this.notiRegName = false;
    this.notiRegPass = false;
    this.loginService.addAccount(this.acc).subscribe(account =>{this.accounts.push(account)});
    this.router.navigate(['/Login']);
    return true;
   
  }
}
