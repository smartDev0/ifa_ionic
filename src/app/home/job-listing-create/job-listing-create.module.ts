import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobListingCreatePageRoutingModule } from './job-listing-create-routing.module';

import { JobListingCreatePage } from './job-listing-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobListingCreatePageRoutingModule
  ],
  declarations: [JobListingCreatePage]
})
export class JobListingCreatePageModule {}
