import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessSettingPageRoutingModule } from './business-setting-routing.module';

import { BusinessSettingPage } from './business-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessSettingPageRoutingModule
  ],
  declarations: [BusinessSettingPage]
})
export class BusinessSettingPageModule {}
