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
      {
        path: 'store',
        loadChildren: () =>
          import('./store/store.module').then((m) => m.StorePageModule),
      },
      {
        path: 'store-setting/:id',
        loadChildren: () =>
          import('./store-setting/store-setting.module').then(
            (m) => m.StoreSettingPageModule
          ),
      },
      {
        path: 'store-create',
        loadChildren: () =>
          import('./store-create/store-create.module').then(
            (m) => m.StoreCreatePageModule
          ),
      },
      {
        path: 'store-item/:id',
        loadChildren: () =>
          import('./store-item/store-item.module').then(
            (m) => m.StoreItemPageModule
          ),
      },
      {
        path: 'resource',
        loadChildren: () =>
          import('./resource/resource.module').then(
            (m) => m.ResourcePageModule
          ),
      },
      {
        path: 'resource-create',
        loadChildren: () =>
          import('./resource-create/resource-create.module').then(
            (m) => m.ResourceCreatePageModule
          ),
      },
      {
        path: 'resource-setting/:id',
        loadChildren: () =>
          import('./resource-setting/resource-setting.module').then(
            (m) => m.ResourceSettingPageModule
          ),
      },
      {
        path: 'resource-item/:id',
        loadChildren: () =>
          import('./resource-item/resource-item.module').then(
            (m) => m.ResourceItemPageModule
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
