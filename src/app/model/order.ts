import {OrderDetail} from "./orderDetail";

export class Order{
  id:number;
  timestamp:number;
  idCust:number;
  orderDetails:OrderDetail[];
}
