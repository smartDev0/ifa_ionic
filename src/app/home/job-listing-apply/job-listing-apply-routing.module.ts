import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListingApplyPage } from './job-listing-apply.page';

const routes: Routes = [
  {
    path: '',
    component: JobListingApplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobListingApplyPageRoutingModule {}
