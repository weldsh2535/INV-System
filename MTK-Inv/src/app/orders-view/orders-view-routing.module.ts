import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersViewPage } from './orders-view.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersViewPageRoutingModule {}
