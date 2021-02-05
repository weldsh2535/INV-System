import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxesPageRoutingModule } from './taxes-routing.module';

import { TaxesPage } from './taxes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxesPageRoutingModule
  ],
  declarations: [TaxesPage]
})
export class TaxesPageModule {}
