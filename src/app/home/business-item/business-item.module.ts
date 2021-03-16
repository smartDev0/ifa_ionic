import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessItemPageRoutingModule } from './business-item-routing.module';

import { BusinessItemPage } from './business-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessItemPageRoutingModule
  ],
  declarations: [BusinessItemPage]
})
export class BusinessItemPageModule {}
