import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {BooksServiceService} from "../books-service.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private bookService: BooksServiceService,
              private location: Location) { }

  ngOnInit() {
    this.getBook();
  }

  book : Book;

  getBook():void{
    const uuid = this.route.snapshot.paramMap.get('uuid');
    console.log("uuid: " + uuid);
    this.bookService.getBook(uuid).subscribe(_ => this.book = _);
  }

  save():void{
    this.bookService.updateBook(this.book).subscribe(_ => this.goBack());
  }

  goBack():void{
    this.location.back();
  }

}
