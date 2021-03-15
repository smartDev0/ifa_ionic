import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupSettingPageRoutingModule } from './group-setting-routing.module';

import { GroupSettingPage } from './group-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupSettingPageRoutingModule
  ],
  declarations: [GroupSettingPage]
})
export class GroupSettingPageModule {}
