import {Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ModalService} from "../_modal";
import {calculatePrice, Order, Product} from "../app.component";
import {AddOrderService} from './add-order.service'



@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
  providers: [AddOrderService]
})
export class AddOrderComponent implements OnInit {

  @Output() onChange = new EventEmitter()

  product: Product = {
    name: "Кроссовки",
    brand: "Asics",
    count: 1,
    price: 4500,
    id: 1
  }
  lastId: number = 1;
  order: Order;

  listProducts:
    Product[] = []

  constructor(private modalService: ModalService) {

  }

  ngOnInit(): void {

    this.listProducts.push(this.product)
  }

  openModal(id: string) {
    console.log('Length of Emitter on Open ', this.onChange.length)

    this.modalService.open(id);

  }

  closeModal(id: string) {

    console.log('Length of Emitter on Close ', this.onChange.length)
    console.log(this.listProducts)
    this.order = {
      id: 1,
      listProduct: this.listProducts,
      price: 4500
    }
    const order = new Order();
    order.id = this.order.id;
    order.listProduct = this.order.listProduct.slice();
    order.price = this.order.price;
    calculatePrice([order])
    this.listProducts = [];
    this.listProducts.push({
      name: "Кроссовки",
      brand: "Asics",
      count: 1,
      price: 4500,

      id: 1
    })
    this.onChange.emit(order)
    this.modalService.close(id);

  }

  addProduct() {
    const product: Product = {
      name: this.product.name,
      brand: this.product.brand,
      count: this.product.count,
      price: this.product.price,
      id: ++this.lastId,
    }

    this.listProducts.push(product)
  }

  deleteProduct(product) {
    this.listProducts = this.listProducts.filter(value => value.id !== product.id)
    console.log("Delete product", product)
  }

}
