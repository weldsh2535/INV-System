import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleOrderProfitPageRoutingModule } from './sale-order-profit-routing.module';

import { SaleOrderProfitPage } from './sale-order-profit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleOrderProfitPageRoutingModule
  ],
  declarations: [SaleOrderProfitPage]
})
export class SaleOrderProfitPageModule {}
