import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerPaymentsPage } from './customer-payments.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerPaymentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPaymentsPageRoutingModule {}
