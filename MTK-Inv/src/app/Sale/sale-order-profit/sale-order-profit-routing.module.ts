import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleOrderProfitPage } from './sale-order-profit.page';

const routes: Routes = [
  {
    path: '',
    component: SaleOrderProfitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleOrderProfitPageRoutingModule {}
