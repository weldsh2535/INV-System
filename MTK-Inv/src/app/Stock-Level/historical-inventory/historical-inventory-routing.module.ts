import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricalInventoryPage } from './historical-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricalInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricalInventoryPageRoutingModule {}
