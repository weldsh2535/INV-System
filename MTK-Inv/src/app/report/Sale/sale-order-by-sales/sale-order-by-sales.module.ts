import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleOrderBySalesPageRoutingModule } from './sale-order-by-sales-routing.module';

import { SaleOrderBySalesPage } from './sale-order-by-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleOrderBySalesPageRoutingModule
  ],
  declarations: [SaleOrderBySalesPage]
})
export class SaleOrderBySalesPageModule {}
