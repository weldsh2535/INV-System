import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryMovementLogPage } from './inventory-movement-log.page';

const routes: Routes = [
  {
    path: '',
    component: InventoryMovementLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryMovementLogPageRoutingModule {}
