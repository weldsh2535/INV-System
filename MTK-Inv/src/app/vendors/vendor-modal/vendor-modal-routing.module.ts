import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorModalPage } from './vendor-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VendorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorModalPageRoutingModule {}
