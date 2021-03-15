import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreCreatePageRoutingModule } from './store-create-routing.module';

import { StoreCreatePage } from './store-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreCreatePageRoutingModule
  ],
  declarations: [StoreCreatePage]
})
export class StoreCreatePageModule {}
