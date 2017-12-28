import { Injectable } from '@angular/core';
import {Order} from "./model/order";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class OrdersService {
  private url = 'api/orders';  // URL to web api
  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getOrders (): Observable<Order[]> {
    return this.http.get<Order[]>(this.url)
      .pipe(
        tap(orders => this.log(`fetched orders`))
      );
  };

  private log():void{
    console.log(`fetched orders`)
  };

  getOrder(id):Observable<Order>{
    const url = `${this.url}/${id}`;
    return this.http.get<Order>(url).pipe(
      tap(_ => this.log(`fetched order id = ${id}`))
    );
  };





}
