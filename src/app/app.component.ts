import {Component, OnInit} from '@angular/core';

export class Product {
  name: string
  brand: string
  count: number
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
export class AppComponent {
  title = 'angular-shop';
  orders: Array<Order>


  constructor() {
    this.orders = [
      {
        id: 1,
        listProduct: [{name: 'Куртка Черная', brand: 'adidas', count: 1},
          {name: 'Носки разноцветные ', brand: 'Nike', count: 3}],
        price: 2000
      },
      {
        id: 2,
        listProduct: [{name: 'Футболка черная', brand: 'Puma', count: 2},
          {name: 'Шорты красные', brand: 'Noname', count: 1},
          {name: 'Лонглслив красно-черный', brand: 'Road to the Dream', count: 1},
        ],
        price: 15000
      },
      {
        id: 3,
        listProduct: [{name: 'Брюки зауженные', brand: 'H&M', count: 1},
          {name: 'Кроссовки для бега', brand: 'Adidas', count: 1},
          {name: 'Кепка серая', brand: 'Noname', count: 1},
        ], price: 250
      },
    ]
  }


  addOrder() {
    const order =
        {
          id: 4,
          listProduct: [{name: 'Брюки', brand: 'H&M', count: 1},
            {name: 'Кроссовки для бега', brand: 'Adidas', count: 1},
            {name: 'Кепка серая', brand: 'Noname', count: 1},
            {name: 'Бейсболка серая', brand: 'Noname', count: 1},
          ], price: 4050
        };
    this.orders.push(order)
  }


  removeOrder(id: number) {
    console.log("Id", id)
    this.orders = this.orders.filter(value => value.id !== id)
  }
}
