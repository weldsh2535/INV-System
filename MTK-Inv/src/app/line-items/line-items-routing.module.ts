import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineItemsPage } from './line-items.page';

const routes: Routes = [
  {
    path: '',
    component: LineItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineItemsPageRoutingModule {}
