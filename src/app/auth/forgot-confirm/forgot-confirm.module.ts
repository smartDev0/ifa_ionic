import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotConfirmPageRoutingModule } from './forgot-confirm-routing.module';

import { ForgotConfirmPage } from './forgot-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotConfirmPageRoutingModule
  ],
  declarations: [ForgotConfirmPage]
})
export class ForgotConfirmPageModule {}
