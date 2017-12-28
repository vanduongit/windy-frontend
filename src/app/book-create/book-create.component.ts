import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from "../model/book";
import {BooksServiceService} from "../books-service.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(private bookService : BooksServiceService) { }

  book : Book;

  ngOnInit() {
    this.book = new Book();
  }

  save():void{
    this.bookService.create(this.book).subscribe(_ => {
      this.sendMessage();
      this.book = new Book();
    });
  }

  @Output() messageEvent:EventEmitter<String> = new EventEmitter<String>();

  sendMessage(){
    console.log("send event");
    this.messageEvent.emit("reload");
  }
}
