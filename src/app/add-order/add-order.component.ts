import {Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ModalService} from "../_modal";
import {Order, Product} from "../app.component";
import { AddOrderService} from './add-order.service'
class ProductContent extends Product {
  disable: boolean;
  id: number;
}

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
  providers:[AddOrderService]
})
export class AddOrderComponent implements OnInit,DoCheck {

  @Output() onChange = new EventEmitter()
  @Input() lastOrderId: number
  product: ProductContent = {
    name: "Кроссовки",
    brand: "Asics",
    count: 1,
    price: 4500,
    disable: false,
    id: 1
  }
  lastId: number = 1;
  order: Order ;
  curProduct: ProductContent = this.product

  listProducts:
    ProductContent[] = []


  constructor(private modalService: ModalService) {

  }

  ngOnInit(): void {

    this.listProducts.push(this.product)
  }

  openModal(id: string) {
    console.log('Length of Emitter on Open ',this.onChange.length)

    this.modalService.open(id);

  }

  closeModal(id: string) {
    console.log('Length of Emitter on Close ',this.onChange.length)
    console.log(this.listProducts)
    this.order = {
      id: 1,
      listProduct: this.listProducts,
      price: 4500
    }
    const order=new Order();
    order.id=this.order.id;
    order.listProduct=this.order.listProduct.slice();
    order.price=this.order.price;
    this.listProducts=[];
    this.listProducts.push(this.product)
    this.onChange.emit(order)
    this.modalService.close(id);


  }

  addProduct() {
    const product: ProductContent = {
      name: this.product.name,
      brand: this.product.brand,
      count: this.product.count,
      price: this.product.price,
      id: ++this.lastId,
      disable: false,
    }

    this.listProducts.push(product)

  }

  deleteProduct(product) {
    this.listProducts = this.listProducts.filter(value => value.id !== product.id)
    console.log("Delete product", product)
  }

  ngDoCheck(): void {
    console.log('Add order Do Check')
  }
}
