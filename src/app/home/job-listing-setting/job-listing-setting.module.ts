import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobListingSettingPageRoutingModule } from './job-listing-setting-routing.module';

import { JobListingSettingPage } from './job-listing-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobListingSettingPageRoutingModule
  ],
  declarations: [JobListingSettingPage]
})
export class JobListingSettingPageModule {}
