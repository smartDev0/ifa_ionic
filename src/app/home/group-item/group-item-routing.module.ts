import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupItemPage } from './group-item.page';

const routes: Routes = [
  {
    path: '',
    component: GroupItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupItemPageRoutingModule {}
