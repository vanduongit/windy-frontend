import { Component, OnInit } from '@angular/core';
import {Order} from "../model/order";
import {OrdersService} from "../orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  orders:Order[];

  ngOnInit() {
    this.getOrders();
  }

  getOrders():void {
      this.ordersService.getOrders().subscribe(orders => this.orders = orders);
  }


}
