import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesOrderProfitPageRoutingModule } from './sales-order-profit-routing.module';

import { SalesOrderProfitPage } from './sales-order-profit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesOrderProfitPageRoutingModule
  ],
  declarations: [SalesOrderProfitPage]
})
export class SalesOrderProfitPageModule {}
