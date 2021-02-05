import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCostPage } from './product-cost.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCostPageRoutingModule {}
