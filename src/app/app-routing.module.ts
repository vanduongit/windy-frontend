import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {OrdersComponent} from "./orders/orders.component";
import {BooksComponent} from "./books/books.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";


const routes: Routes = [
  {path: 'books' , component:BooksComponent, pathMatch: 'full'},

  {path: '' , redirectTo:'/books',pathMatch:'full'},

  {path: 'books/detail/:uuid' , component:BookDetailComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
