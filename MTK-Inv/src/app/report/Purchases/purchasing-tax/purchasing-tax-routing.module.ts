import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasingTaxPage } from './purchasing-tax.page';

const routes: Routes = [
  {
    path: '',
    component: PurchasingTaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasingTaxPageRoutingModule {}
