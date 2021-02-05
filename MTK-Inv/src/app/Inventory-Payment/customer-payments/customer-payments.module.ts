import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerPaymentsPageRoutingModule } from './customer-payments-routing.module';

import { CustomerPaymentsPage } from './customer-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerPaymentsPageRoutingModule
  ],
  declarations: [CustomerPaymentsPage]
})
export class CustomerPaymentsPageModule {}
