import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourceSettingPageRoutingModule } from './resource-setting-routing.module';

import { ResourceSettingPage } from './resource-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourceSettingPageRoutingModule
  ],
  declarations: [ResourceSettingPage]
})
export class ResourceSettingPageModule {}
