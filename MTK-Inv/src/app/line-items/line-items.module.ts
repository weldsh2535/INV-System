import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineItemsPageRoutingModule } from './line-items-routing.module';

import { LineItemsPage } from './line-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineItemsPageRoutingModule
  ],
  declarations: [LineItemsPage]
})
export class LineItemsPageModule {}
