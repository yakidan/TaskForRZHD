import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Order} from "../app.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order: Order
  @Output() onRemove = new EventEmitter<number>()
  id = 1;
  listOfGoods = ['milk', 'bread', 'tea'];
  price = 100;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.order)
  }

  removeOrder() {
    this.onRemove.emit(this.order.id)
  }
}
