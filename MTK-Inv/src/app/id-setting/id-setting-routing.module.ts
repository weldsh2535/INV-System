import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdSettingPage } from './id-setting.page';

const routes: Routes = [
  {
    path: '',
    component: IdSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdSettingPageRoutingModule {}
