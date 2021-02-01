import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaySupplierPage } from './pay-supplier.page';

const routes: Routes = [
  {
    path: '',
    component: PaySupplierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaySupplierPageRoutingModule {}
