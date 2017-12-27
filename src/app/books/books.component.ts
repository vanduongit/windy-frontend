import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {BooksServiceService} from "../books-service.service";
import {Book} from "../model/book";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  url:String;
  books:Book[];

  constructor(private booksService:BooksServiceService) { }

  ngOnInit() {
    this.url = environment.host;
    this.getBooks();
  }

  getBooks(){
    this.booksService.get().subscribe(data => {
      this.books = data;
    })
  }


}
