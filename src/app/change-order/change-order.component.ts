import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ModalService} from "../_modal";
import {calculatePrice, Order, Product} from "../app.component";


@Component({
  selector: 'app-change-order',
  templateUrl: './change-order.component.html',
  styleUrls: ['./change-order.component.css']
})
export class ChangeOrderComponent implements OnInit {
  @Input() order: Order
  @Input() listProducts: Product[]
  @Input() lastId: number
  @Output() onChangeOrder = new EventEmitter()

  // @Input() onOpenWindowChange


  constructor(public modalService: ModalService) {
  }

  product: Product = {
    name: "Кроссовки",
    brand: "Asics",
    count: 1,
    price: 4500,
    id: 1
  }


  ngOnInit(): void {
  }

  deleteProduct(product: Product) {
    console.log("Delete product of list", this.listProducts)
    this.listProducts = this.listProducts.filter(value => value.id !== product.id)
    console.log("Delete product", product)

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


  closeModal(customModal: string) {
    const order = {
      id: this.order.id,
      listProduct: this.listProducts,
      price: 1
    }
    calculatePrice([order])
    this.onChangeOrder.emit(order)
    this.modalService.close(customModal)
  }

  openModal(customModal: string) {
    this.modalService.open(customModal)
  }
}
