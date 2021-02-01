import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemsPageRoutingModule } from './items-routing.module';
import { ItemsPage } from './items.page';
import { DxLookupModule, DxTemplateModule } from 'devextreme-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ItemsPageRoutingModule,
    DxLookupModule, 
    DxTemplateModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  ],
  declarations: [ItemsPage]
})
export class ItemsPageModule {}
