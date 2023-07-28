import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ListBookComponent } from './list-book/list-book.component';
import { AccountBooksComponent } from './account-books/account-books.component';

const routes: Routes = [
  {path: 'Login', component:LogInComponent},
  {path: 'Register', component:RegisterComponent},
  {path: 'Listbook/:id', component:ListBookComponent},
  {path: 'Mybooks/:id', component:AccountBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
