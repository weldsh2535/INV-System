import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryAgingPageRoutingModule } from './inventory-aging-routing.module';

import { InventoryAgingPage } from './inventory-aging.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryAgingPageRoutingModule
  ],
  declarations: [InventoryAgingPage]
})
export class InventoryAgingPageModule {}
