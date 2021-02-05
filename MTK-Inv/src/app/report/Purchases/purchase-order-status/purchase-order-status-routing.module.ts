import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseOrderStatusPage } from './purchase-order-status.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseOrderStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseOrderStatusPageRoutingModule {}
