import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorsPageRoutingModule } from './vendors-routing.module';

import { VendorsPage } from './vendors.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule  } from 'devextreme-angular';
import { RouterModule } from '@angular/router';
import { VendorModalPage } from './vendor-modal/vendor-modal.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorsPageRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    RouterModule.forChild([
      {
        path: '',
        component: VendorsPage
      }
    ])
  ],
  declarations: [VendorsPage,VendorModalPage],
  entryComponents: [VendorModalPage]
})
export class VendorsPageModule {}
