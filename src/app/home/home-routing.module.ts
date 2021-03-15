import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'member',
        pathMatch: 'full',
      },
      {
        path: 'member',
        loadChildren: () =>
          import('./member/member.module').then((m) => m.MemberPageModule),
      },
      {
        path: 'group',
        loadChildren: () =>
          import('./group/group.module').then((m) => m.GroupPageModule),
      },
      {
        path: 'group-create',
        loadChildren: () =>
          import('./group-create/group-create.module').then(
            (m) => m.GroupCreatePageModule
          ),
      },
      {
        path: 'group-item/:id',
        loadChildren: () =>
          import('./group-item/group-item.module').then(
            (m) => m.GroupItemPageModule
          ),
      },
      {
        path: 'group-setting/:id',
        loadChildren: () =>
          import('./group-setting/group-setting.module').then(
            (m) => m.GroupSettingPageModule
          ),
      },
      {
        path: 'event',
        loadChildren: () =>
          import('./event/event.module').then((m) => m.EventPageModule),
      },
      {
        path: 'event-item/:id',
        loadChildren: () =>
          import('./event-item/event-item.module').then(
            (m) => m.EventItemPageModule
          ),
      },
      {
        path: 'event-create',
        loadChildren: () =>
          import('./event-create/event-create.module').then(
            (m) => m.EventCreatePageModule
          ),
      },
      {
        path: 'event-setting/:id',
        loadChildren: () =>
          import('./event-setting/event-setting.module').then(
            (m) => m.EventSettingPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
