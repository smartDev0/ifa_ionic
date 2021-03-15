import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupItemPageRoutingModule } from './group-item-routing.module';

import { GroupItemPage } from './group-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupItemPageRoutingModule
  ],
  declarations: [GroupItemPage]
})
export class GroupItemPageModule {}
