import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleOrderPage } from './sale-order.page';

const routes: Routes = [
  {
    path: '',
    component: SaleOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleOrderPageRoutingModule {}
