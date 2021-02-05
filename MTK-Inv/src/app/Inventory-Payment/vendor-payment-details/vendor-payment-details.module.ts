import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorPaymentDetailsPageRoutingModule } from './vendor-payment-details-routing.module';

import { VendorPaymentDetailsPage } from './vendor-payment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorPaymentDetailsPageRoutingModule
  ],
  declarations: [VendorPaymentDetailsPage]
})
export class VendorPaymentDetailsPageModule {}
