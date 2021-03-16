import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListingItemPage } from './job-listing-item.page';

const routes: Routes = [
  {
    path: '',
    component: JobListingItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobListingItemPageRoutingModule {}
