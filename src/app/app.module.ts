import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import {ModalModule} from "./_modal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ChangeOrderComponent } from './change-order/change-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    AddOrderComponent,
    ChangeOrderComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
