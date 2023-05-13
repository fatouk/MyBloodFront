import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailConfirmationPageRoutingModule } from './detail-confirmation-routing.module';

import { DetailConfirmationPage } from './detail-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailConfirmationPageRoutingModule
  ],
  declarations: [DetailConfirmationPage]
})
export class DetailConfirmationPageModule {}
