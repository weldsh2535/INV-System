import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleOrderSummaryPage } from './sale-order-summary.page';

const routes: Routes = [
  {
    path: '',
    component: SaleOrderSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleOrderSummaryPageRoutingModule {}
