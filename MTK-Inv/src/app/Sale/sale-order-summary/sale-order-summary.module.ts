import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleOrderSummaryPageRoutingModule } from './sale-order-summary-routing.module';

import { SaleOrderSummaryPage } from './sale-order-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleOrderSummaryPageRoutingModule
  ],
  declarations: [SaleOrderSummaryPage]
})
export class SaleOrderSummaryPageModule {}
