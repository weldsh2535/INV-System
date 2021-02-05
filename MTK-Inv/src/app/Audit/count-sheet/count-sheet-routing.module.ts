import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountSheetPage } from './count-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: CountSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountSheetPageRoutingModule {}
