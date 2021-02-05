import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockTransferPage } from './stock-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: StockTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockTransferPageRoutingModule {}
