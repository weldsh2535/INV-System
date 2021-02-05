import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryMovementLogPageRoutingModule } from './inventory-movement-log-routing.module';

import { InventoryMovementLogPage } from './inventory-movement-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryMovementLogPageRoutingModule
  ],
  declarations: [InventoryMovementLogPage]
})
export class InventoryMovementLogPageModule {}
