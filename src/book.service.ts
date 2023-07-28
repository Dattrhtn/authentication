import { Injectable } from '@angular/core';
import { book } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  private url = "api/books";

  getBooks(): Observable<book[]>{
    return this.http.get<book[]>(this.url);
  }

  getBook(): Observable<book>{
    return this.http.get<book>(this.url)
  }



  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  deleteBook(index: number): Observable<book>{
    return this.http.delete<book>(this.url, this.httpOptions);
  }

}
