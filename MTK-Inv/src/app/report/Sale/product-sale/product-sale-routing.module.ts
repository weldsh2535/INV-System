import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSalePage } from './product-sale.page';

const routes: Routes = [
  {
    path: '',
    component: ProductSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductSalePageRoutingModule {}
