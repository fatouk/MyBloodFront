import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationPageRoutingModule } from './notification-routing.module';

import { NotificationPage } from './notification.page';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2OrderModule,

    NotificationPageRoutingModule
  ],
  declarations: [NotificationPage]
})
export class NotificationPageModule {}
