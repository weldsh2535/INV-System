import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryAgingPage } from './inventory-aging.page';

const routes: Routes = [
  {
    path: '',
    component: InventoryAgingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryAgingPageRoutingModule {}
