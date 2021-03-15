import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreSettingPage } from './store-setting.page';

const routes: Routes = [
  {
    path: '',
    component: StoreSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreSettingPageRoutingModule {}
