import { Injectable } from '@angular/core';
import { account } from './account';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor( private http: HttpClient) { }
  isLogin: boolean = false;
  checkFetch: boolean = true;
  private url = 'api/accounts';  // URL to web api  
  accounts: account[] = [];
  presentAc?: account;

  getAccounts(): Observable<account[]>{
    return this.http.get<account[]>(this.url);
  }

  getAccount(): Observable<account>{
    return this.http.get<account>(this.url);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addAccount(ac: account): Observable<account>{
    return this.http.post<account>(this.url, ac, this.httpOptions);
  }

  updateAccount(ac: account): Observable<account>{
    return this.http.put<account>(this.url, ac, this.httpOptions);
  }

}
