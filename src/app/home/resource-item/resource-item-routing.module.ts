import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceItemPage } from './resource-item.page';

const routes: Routes = [
  {
    path: '',
    component: ResourceItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceItemPageRoutingModule {}
