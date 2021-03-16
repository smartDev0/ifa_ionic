import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobListingApplyPageRoutingModule } from './job-listing-apply-routing.module';

import { JobListingApplyPage } from './job-listing-apply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobListingApplyPageRoutingModule
  ],
  declarations: [JobListingApplyPage]
})
export class JobListingApplyPageModule {}
