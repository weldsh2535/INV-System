import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatagoryPage } from './catagory.page';

const routes: Routes = [
  {
    path: '',
    component: CatagoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatagoryPageRoutingModule {}
