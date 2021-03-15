import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventItemPageRoutingModule } from './event-item-routing.module';

import { EventItemPage } from './event-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventItemPageRoutingModule
  ],
  declarations: [EventItemPage]
})
export class EventItemPageModule {}
