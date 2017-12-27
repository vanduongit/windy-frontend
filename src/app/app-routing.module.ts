import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {OrdersComponent} from "./orders/orders.component";
import {BooksComponent} from "./books/books.component";


const routes: Routes = [
  {path: 'orders' , component:OrdersComponent, pathMatch: 'full'},
  {path: 'orders/detail/:id' , component:OrderDetailComponent, pathMatch: 'full'}
  {path: 'books' , component:BooksComponent, pathMatch: 'full'},
  {path: '' , redirectTo:'/books',pathMatch:'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
