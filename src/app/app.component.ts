import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

export class Product {
  name: string
  brand: string
  count: number
  price: number
  id: number

  constructor() {
  }
}

export class Order {
  id: number
  listProduct: Array<Product>
  price: number

}

export function calculatePrice(orders: Order[]) {
  orders.forEach((order) => {
    const price = order.listProduct.reduce((value, curProduct) => {
      return value += curProduct.price * curProduct.count;
    }, 0)
    order.price = price;
  })
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-shop';
  orders: Array<Order>
  lastId: number = 3
  @Input('newOrder') newOrder: Order

  ngOnInit() {
    calculatePrice(this.orders)
  }

  constructor() {
    this.orders = [
      {
        id: 1,
        listProduct: [{name: 'Куртка Черная', brand: 'adidas', count: 1, price: 10000, id: 1},
          {name: 'Носки разноцветные ', brand: 'Nike', count: 3, price: 200, id: 2}],
        price: 1
      },
      {
        id: 2,
        listProduct: [{name: 'Футболка черная', brand: 'Puma', count: 2, price: 100, id: 1},
          {name: 'Шорты красные', brand: 'Noname', count: 1, price: 1200, id: 2},
          {name: 'Лонглслив красно-черный', brand: 'Road to the Dream', count: 1, price: 1500, id: 3},
        ],
        price: 2
      },
      {
        id: 3,
        listProduct: [{name: 'Брюки зауженные', brand: 'H&M', count: 1, price: 2000, id: 1},
          {name: 'Кроссовки для бега', brand: 'Adidas', count: 1, price: 3000, id: 2},
          {name: 'Кепка серая', brand: 'Noname', count: 1, price: 500, id: 3},
        ], price: 3
      },
    ]
  }


  addOrder(order) {
    if (order.listProduct.length !== 0) {
      order.id = ++this.lastId
      this.orders.push(order)
    }
  }


  removeOrder(id: number) {
    this.orders = this.orders.filter(value => value.id !== id)
  }


}
