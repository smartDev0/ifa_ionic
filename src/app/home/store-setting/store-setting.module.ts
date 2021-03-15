import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreSettingPageRoutingModule } from './store-setting-routing.module';

import { StoreSettingPage } from './store-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreSettingPageRoutingModule
  ],
  declarations: [StoreSettingPage]
})
export class StoreSettingPageModule {}
