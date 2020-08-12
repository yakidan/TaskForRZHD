import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

// import {ModalService} from "./_modal";

export class Product {
  name: string
  brand: string
  count: number
  price: number
}

export class Order {
  id: number
  listProduct: Array<Product>
  price: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  title = 'angular-shop';
  orders: Array<Order>
  bodyText: string;
  lastId: number = 3
  @Input('newOrder') newOrder: Order

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
    console.log('New Order:', this.newOrder)

  }


  constructor() {
    this.orders = [
      {
        id: 1,
        listProduct: [{name: 'Куртка Черная', brand: 'adidas', count: 1, price: 10000},
          {name: 'Носки разноцветные ', brand: 'Nike', count: 3, price: 200}],
        price: 10200
      },
      {
        id: 2,
        listProduct: [{name: 'Футболка черная', brand: 'Puma', count: 2, price: 100},
          {name: 'Шорты красные', brand: 'Noname', count: 1, price: 1200},
          {name: 'Лонглслив красно-черный', brand: 'Road to the Dream', count: 1, price: 1500},
        ],
        price: 2800
      },
      {
        id: 3,
        listProduct: [{name: 'Брюки зауженные', brand: 'H&M', count: 1, price: 2000},
          {name: 'Кроссовки для бега', brand: 'Adidas', count: 1, price: 3000},
          {name: 'Кепка серая', brand: 'Noname', count: 1, price: 500},
        ], price: 5500
      },
    ]
  }


  addOrder(order) {
    if (order.listProduct.length !==0) {
      order.id = ++this.lastId
      this.orders.push(order)
    }
    console.log('Order', order)
  }


  removeOrder(id: number) {
    console.log("Id", id)
    this.orders = this.orders.filter(value => value.id !== id)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change', changes)
  }

  ngDoCheck() {
    console.log('DoCheck', this.newOrder)
  }


  orderAdd(order) {

  }
}
