import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuarantainePageRoutingModule } from './quarantaine-routing.module';

import { QuarantainePage } from './quarantaine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuarantainePageRoutingModule
  ],
  declarations: [QuarantainePage]
})
export class QuarantainePageModule {}
