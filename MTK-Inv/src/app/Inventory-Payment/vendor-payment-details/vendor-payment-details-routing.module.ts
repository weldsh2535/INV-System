import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorPaymentDetailsPage } from './vendor-payment-details.page';

const routes: Routes = [
  {
    path: '',
    component: VendorPaymentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorPaymentDetailsPageRoutingModule {}
