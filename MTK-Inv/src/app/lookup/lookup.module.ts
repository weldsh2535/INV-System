import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LookupPageRoutingModule } from './lookup-routing.module';

import { LookupPage } from './lookup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LookupPageRoutingModule
  ],
  declarations: [LookupPage]
})
export class LookupPageModule {}
