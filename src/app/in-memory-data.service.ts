import { InMemoryDbService } from 'angular-in-memory-web-api';
import {OrderDetail} from "./model/orderDetail";
import {Order} from "./model/order";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    var orderDetails1:OrderDetail[] = [{
      idProduct:1,
      quantity:1,
      price:1000
    },{
      idProduct:2,
      quantity:2,
      price:2000
    }];
    var orderDetails2 = [{
      idProduct:3,
      quantity:3,
      price:3000
    },{
      idProduct:4,
      quantity:4,
      price:4000
    }];
    const orders:Order[] = [
      { id: 11, timestamp:1512457387, idCust:111, orderDetails:orderDetails1 },
      { id: 12, timestamp: 1512457387, idCust:222, orderDetails:orderDetails2 }
    ];
    return {orders};
  }
}
