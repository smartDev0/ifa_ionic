import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListingSettingPage } from './job-listing-setting.page';

const routes: Routes = [
  {
    path: '',
    component: JobListingSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobListingSettingPageRoutingModule {}
