import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms'
import { LoginUserPageRoutingModule } from './login-user-routing.module';

import { LoginUserPage } from './login-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginUserPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginUserPage]
})
export class LoginUserPageModule {}
