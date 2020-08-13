import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Order} from "../app.component";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  @Input() order: Order
  @Output() onRemove = new EventEmitter<number>()
  @Output() onOpenWindowChange = new EventEmitter<number>()
  id = 1;

  constructor() {
  }

  removeOrder() {
    this.onRemove.emit(this.order.id)
  }


  onChangeOrder(order: Order) {
    if (order.listProduct.length === 0) {
      console.log('order.listProduct === []')
      this.removeOrder()
    } else {
      this.order = order;
    }
  }
}
