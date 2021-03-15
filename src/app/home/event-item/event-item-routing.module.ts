import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventItemPage } from './event-item.page';

const routes: Routes = [
  {
    path: '',
    component: EventItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventItemPageRoutingModule {}
