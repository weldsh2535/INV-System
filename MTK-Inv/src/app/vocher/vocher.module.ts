import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VocherPageRoutingModule } from './vocher-routing.module';

import { VocherPage } from './vocher.page';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DxLookupModule, DxTemplateModule } from 'devextreme-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VocherPageRoutingModule,
    ReactiveFormsModule,
    DropDownListModule,
    DxLookupModule,
    DxTemplateModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  declarations: [VocherPage]
})
export class VocherPageModule {}
