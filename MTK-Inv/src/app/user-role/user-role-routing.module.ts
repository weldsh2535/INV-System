import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRolePage } from './user-role.page';

const routes: Routes = [
  {
    path: '',
    component: UserRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRolePageRoutingModule {}
