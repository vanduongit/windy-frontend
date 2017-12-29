import { Injectable } from '@angular/core';

import {environment} from "../environments/environment";
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import {Magazine} from "./model/magazine";


@Injectable()
export class MagazinesService {
  private url = `${environment.host}/api/windy/magazines`;
  constructor(private http:HttpClient) { }

  get():Observable<Magazine[]>{
    return this.http.get<Magazine[]>(this.url).pipe(
      tap(magazines => this.log(`fetched magazines`)),
      catchError(this.handleError('getmagazines', []))
    );
  }

  create(magazine:Magazine): Observable<any>{
    return this.http.post(this.url , magazine).pipe(
      tap(res => this.log(`new magazine ${magazine.title}`)),
      map(this.extractData),
      catchError(this.handleError(`error update magazine ${magazine.title}`,[]))
    );
  }

  getById(uuid): Observable<any>{
    return this.http.get<any>(`${this.url}\\${uuid}`).pipe(
      tap(data => console.log(data)),
      tap(data => this.log(`fetched magazine ${uuid}`)),
      map(this.extractData),
      tap(data => console.log(data)),
      catchError(this.handleError(`get magazine ${uuid}`,[]))
    )
  }

  update(magazine : Magazine):Observable<any>{
    return this.http.put(this.url,magazine).pipe(
      tap(res => this.log(`update magazine ${magazine.title}`)),
      map(this.extractData),
      catchError(this.handleError(`error update magazine ${magazine.title}`,[]))
    );
  }

  delete(uuid:String):Observable<any>{
    return this.http.delete(`${this.url}\\${uuid}`).pipe(
      tap(res => this.log(`delete magazine ${uuid}`)),
      map(this.extractData),
      catchError(this.handleError(`error delete magazine ${uuid}`,[])));
  }

  private extractData(res: any) {
    console.log(res);
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.body.data;
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
