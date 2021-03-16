import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourceItemPageRoutingModule } from './resource-item-routing.module';

import { ResourceItemPage } from './resource-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourceItemPageRoutingModule
  ],
  declarations: [ResourceItemPage]
})
export class ResourceItemPageModule {}
