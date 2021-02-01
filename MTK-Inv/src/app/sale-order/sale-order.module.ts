import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleOrderPageRoutingModule } from './sale-order-routing.module';

import { SaleOrderPage } from './sale-order.page';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleOrderPageRoutingModule,
    ReactiveFormsModule,
    DropDownListModule
  ],
  declarations: [SaleOrderPage]
})
export class SaleOrderPageModule {}
