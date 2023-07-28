import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogInService } from 'src/log-in.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  userNameInput: string = '';
  passwordInput: string = '';
  notiCheck: boolean = false;
  constructor(private router: Router, public loginService: LogInService) {}
  ngOnInit(): void{
      this.getAccounts();
      this.loginService.checkFetch = false;
  }

  getAccounts(): void{
    this.loginService.getAccounts().subscribe(ac=>this.loginService.accounts = ac);
  }





  checkAc(): boolean{
    const ac = this.loginService.accounts.find(ac => ac.name === this.userNameInput && ac.password === this.passwordInput);
    if(ac)
    {
      this.router.navigate(['/Listbook', ac.id]);
      this.loginService.presentAc = ac;
      this.loginService.isLogin = true;
      this.notiCheck = false;
      return true;
    }
    this.loginService.isLogin = false;
    this.notiCheck = true;
    return false;
  }
}
