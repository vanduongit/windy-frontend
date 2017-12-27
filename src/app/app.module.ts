import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import {OrdersService} from "./orders.service";
import { OrderDetailComponent } from './order-detail/order-detail.component';
import {AppRoutingModule} from "./app-routing.module";
import { BooksComponent } from './books/books.component';
import {BooksServiceService} from "./books-service.service";
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { MagazinesDetailComponent } from './magazines-detail/magazines-detail.component';
import { MagazinesCreateComponent } from './magazines-create/magazines-create.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderDetailComponent,
    BooksComponent,
    BookDetailComponent,
    BookCreateComponent,
    MagazinesComponent,
    MagazinesDetailComponent,
    MagazinesCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

    AppRoutingModule
  ],
  providers: [BooksServiceService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

