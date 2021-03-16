import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobListingItemPageRoutingModule } from './job-listing-item-routing.module';

import { JobListingItemPage } from './job-listing-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobListingItemPageRoutingModule
  ],
  declarations: [JobListingItemPage]
})
export class JobListingItemPageModule {}
