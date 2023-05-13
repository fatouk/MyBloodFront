import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPageRoutingModule } from './confirmation-routing.module';

import { ConfirmationPage } from './confirmation.page';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPageRoutingModule,
    Ng2OrderModule,
  ],
  declarations: [ConfirmationPage]
})
export class ConfirmationPageModule {}
