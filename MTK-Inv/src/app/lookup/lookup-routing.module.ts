import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookupPage } from './lookup.page';

const routes: Routes = [
  {
    path: '',
    component: LookupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LookupPageRoutingModule {}
