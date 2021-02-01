import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocherPage } from './vocher.page';

const routes: Routes = [
  {
    path: '',
    component: VocherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VocherPageRoutingModule {}
