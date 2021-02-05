import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleOrderBySalesPage } from './sale-order-by-sales.page';

const routes: Routes = [
  {
    path: '',
    component: SaleOrderBySalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleOrderBySalesPageRoutingModule {}
