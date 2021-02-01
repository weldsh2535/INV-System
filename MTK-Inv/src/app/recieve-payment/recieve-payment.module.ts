import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DxLookupModule, DxTemplateModule } from 'devextreme-angular';
import { RecievePaymentPageRoutingModule } from './recieve-payment-routing.module';

import { RecievePaymentPage } from './recieve-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DxLookupModule,
    DxTemplateModule,
    RecievePaymentPageRoutingModule
  ],
  declarations: [RecievePaymentPage]
})
export class RecievePaymentPageModule {}
