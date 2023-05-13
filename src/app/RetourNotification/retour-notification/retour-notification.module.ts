import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetourNotificationPageRoutingModule } from './retour-notification-routing.module';

import { RetourNotificationPage } from './retour-notification.page';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetourNotificationPageRoutingModule,
    Ng2OrderModule,
  ],
  declarations: [RetourNotificationPage]
})
export class RetourNotificationPageModule {}
