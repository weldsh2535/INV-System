import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPriceListPageRoutingModule } from './product-price-list-routing.module';

import { ProductPriceListPage } from './product-price-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPriceListPageRoutingModule
  ],
  declarations: [ProductPriceListPage]
})
export class ProductPriceListPageModule {}
