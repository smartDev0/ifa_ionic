import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListingCreatePage } from './job-listing-create.page';

const routes: Routes = [
  {
    path: '',
    component: JobListingCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobListingCreatePageRoutingModule {}
