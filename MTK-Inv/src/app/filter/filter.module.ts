import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterPageRoutingModule } from './filter-routing.module';

import { FilterPage } from './filter.page';
import {
         DxDataGridModule,
         DxSelectBoxModule,
         DxCheckBoxModule  } from 'devextreme-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterPageRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule
  ],
  declarations: [FilterPage]
})
export class FilterPageModule {}
