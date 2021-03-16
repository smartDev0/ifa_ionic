import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessItemPage } from './business-item.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessItemPageRoutingModule {}
