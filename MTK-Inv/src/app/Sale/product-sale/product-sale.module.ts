import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductSalePageRoutingModule } from './product-sale-routing.module';

import { ProductSalePage } from './product-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductSalePageRoutingModule
  ],
  declarations: [ProductSalePage]
})
export class ProductSalePageModule {}
