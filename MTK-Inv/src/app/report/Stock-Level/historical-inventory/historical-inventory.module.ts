import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricalInventoryPageRoutingModule } from './historical-inventory-routing.module';

import { HistoricalInventoryPage } from './historical-inventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricalInventoryPageRoutingModule
  ],
  declarations: [HistoricalInventoryPage]
})
export class HistoricalInventoryPageModule {}
