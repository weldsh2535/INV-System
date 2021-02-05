import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCostPageRoutingModule } from './product-cost-routing.module';

import { ProductCostPage } from './product-cost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCostPageRoutingModule
  ],
  declarations: [ProductCostPage]
})
export class ProductCostPageModule {}
