import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersViewPageRoutingModule } from './orders-view-routing.module';

import { OrdersViewPage } from './orders-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersViewPageRoutingModule
  ],
  declarations: [OrdersViewPage]
})
export class OrdersViewPageModule {}
