import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleTaxesPageRoutingModule } from './sale-taxes-routing.module';

import { SaleTaxesPage } from './sale-taxes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleTaxesPageRoutingModule
  ],
  declarations: [SaleTaxesPage]
})
export class SaleTaxesPageModule {}
