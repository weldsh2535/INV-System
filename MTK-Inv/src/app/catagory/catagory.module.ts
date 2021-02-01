import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatagoryPageRoutingModule } from './catagory-routing.module';

import { CatagoryPage } from './catagory.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CatagoryPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CatagoryPage]
})
export class CatagoryPageModule {}
