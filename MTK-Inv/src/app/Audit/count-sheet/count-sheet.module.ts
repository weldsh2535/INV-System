import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountSheetPageRoutingModule } from './count-sheet-routing.module';

import { CountSheetPage } from './count-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountSheetPageRoutingModule
  ],
  declarations: [CountSheetPage]
})
export class CountSheetPageModule {}
