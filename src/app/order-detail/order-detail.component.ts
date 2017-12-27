import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {OrdersService} from "../orders.service";
import {Order} from "../model/order";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private ordersService: OrdersService,
              private location: Location) { }

  ngOnInit() {
    this.getOrder();
  }

  order:Order;

  getOrder():void{

    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id: " + id);
    this.ordersService.getOrder(id).subscribe(_ => this.order = _);
  }

  goBack():void{
    this.location.back();
  }

}
