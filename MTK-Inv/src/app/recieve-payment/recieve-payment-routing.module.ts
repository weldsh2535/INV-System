import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecievePaymentPage } from './recieve-payment.page';

const routes: Routes = [
  {
    path: '',
    component: RecievePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecievePaymentPageRoutingModule {}
