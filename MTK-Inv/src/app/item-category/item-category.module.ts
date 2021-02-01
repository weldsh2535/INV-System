import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemCategoryPageRoutingModule } from './item-category-routing.module';

import { ItemCategoryPage } from './item-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemCategoryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ItemCategoryPage]
})
export class ItemCategoryPageModule {}
