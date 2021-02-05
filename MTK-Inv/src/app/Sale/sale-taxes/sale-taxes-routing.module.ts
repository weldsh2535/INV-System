import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleTaxesPage } from './sale-taxes.page';

const routes: Routes = [
  {
    path: '',
    component: SaleTaxesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleTaxesPageRoutingModule {}
