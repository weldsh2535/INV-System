import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchasingTaxPageRoutingModule } from './purchasing-tax-routing.module';

import { PurchasingTaxPage } from './purchasing-tax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchasingTaxPageRoutingModule
  ],
  declarations: [PurchasingTaxPage]
})
export class PurchasingTaxPageModule {}
