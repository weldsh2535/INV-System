import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxesPage } from './taxes.page';

const routes: Routes = [
  {
    path: '',
    component: TaxesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxesPageRoutingModule {}
