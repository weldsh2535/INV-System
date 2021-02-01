import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemCategoryPage } from './item-category.page';

const routes: Routes = [
  {
    path: '',
    component: ItemCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemCategoryPageRoutingModule {}
