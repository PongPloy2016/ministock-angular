import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModel {
  id: string;
  product_detail: string;
  product_name: string;
  product_barcode: string;
  product_qty: string;
  product_price: string;
  product_date: string;
  product_image: string;
  product_category: string;
  product_status: string
}

