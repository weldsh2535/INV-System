import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseOrderStatusPageRoutingModule } from './purchase-order-status-routing.module';

import { PurchaseOrderStatusPage } from './purchase-order-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseOrderStatusPageRoutingModule
  ],
  declarations: [PurchaseOrderStatusPage]
})
export class PurchaseOrderStatusPageModule {}
