import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationsPage } from './operations.page';

const routes: Routes = [
  {
    path: '',
    component: OperationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationsPageRoutingModule {}
