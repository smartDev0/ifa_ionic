import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotConfirmPage } from './forgot-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotConfirmPageRoutingModule {}
