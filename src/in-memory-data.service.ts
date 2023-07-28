import { Injectable } from '@angular/core';
import { account } from './account';
import { InMemoryDbService}  from 'angular-in-memory-web-api';
import { book } from './book';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    var accounts: account[] = [
      {
        id: 1,
        name: 'administrator',
        password: 'abc123!@#',
        listbook:
        [
          {
            id: 1,
            name: "Life Of Pi",
            author: "Yann Martel"
          },
          {
            id: 2,
            name: "The Godfather",
            author: "Mario Puzo"
          },
          {
            id: 3,
            name: "The Alchemist ",
            author: "Paulo Coelho"
          }
        ]
      },
      {
        id: 2,
        name: 'dttrh9365',
        password: 'abc123!@#',
        listbook:
        [
          {
            id: 1,
            name: "Life Of Pi",
            author: "Yann Martel"
          },
          {
            id: 3,
            name: "The Alchemist ",
            author: "Paulo Coelho"
          }
        ]
      }
    ];

    var books: book[] =[
      {
        id: 1,
        name: "Life of Pi",
        author: "Yann Martel"
      },
      {
        id: 2,
        name: "The Godfather",
        author: "Mario Puzo"
      },
      {
        id: 3,
        name: "The Alchemist",
        author: "Paulo Coelho"
      },
      {
        id: 4,
        name: "Harry Potter",
        author: "J. K. Rowling"
      },
      {
        id: 5,
        name: "Diary Of A Wimpy Kid",
        author: "Jeff Kinney"
      },
      {
        id: 6,
        name: "To Kill A Mockingbird",
        author: "Harper Lee"
      },
      {
        id: 7,
        name: "Wonder",
        author: "R. J. Palacio"
      },
      {
        id: 8,
        name: "Moby Dick",
        author: "Herman Melville"
      },
      {
        id: 9,
        name: "Peter Pan",
        author: "J. M. Barrie"
      },
      {
        id: 10,
        name: "The Catcher In The Rye",
        author: "J. D. Salinger"
      },
    ];
    return {accounts, books};
  }
}
