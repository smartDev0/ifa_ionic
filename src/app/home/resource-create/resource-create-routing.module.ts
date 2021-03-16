import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceCreatePage } from './resource-create.page';

const routes: Routes = [
  {
    path: '',
    component: ResourceCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceCreatePageRoutingModule {}
