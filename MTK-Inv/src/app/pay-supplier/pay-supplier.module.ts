import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DxLookupModule, DxTemplateModule } from 'devextreme-angular';
import { IonicModule } from '@ionic/angular';

import { PaySupplierPageRoutingModule } from './pay-supplier-routing.module';

import { PaySupplierPage } from './pay-supplier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DxLookupModule,
    DxTemplateModule,
    PaySupplierPageRoutingModule
  ],
  declarations: [PaySupplierPage]
})
export class PaySupplierPageModule {}
