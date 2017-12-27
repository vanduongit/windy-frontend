import { Injectable } from '@angular/core';
import {Book} from "./model/book";
import {environment} from "../environments/environment";
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BooksServiceService {

  private url = `${environment.host}/api/windy/books`;

  constructor(private http:HttpClient) { }

  get():Observable<Book[]>{
    console.log("fetch books");
    console.log(this.url);
    return this.http.get<Book[]>(this.url).pipe(
      tap(books => this.log(`fetched books`)),
      catchError(this.handleError('getBooks', []))
    );
  }

  create(book:Book): Observable<any>{
    console.log(`update book ${book.title}`);
    return this.http.post(this.url,book);
  }

  private log(msg:String):void{
    console.log(msg);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
