import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourceCreatePageRoutingModule } from './resource-create-routing.module';

import { ResourceCreatePage } from './resource-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourceCreatePageRoutingModule
  ],
  declarations: [ResourceCreatePage]
})
export class ResourceCreatePageModule {}
