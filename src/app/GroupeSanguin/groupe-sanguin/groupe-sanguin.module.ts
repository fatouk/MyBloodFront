import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupeSanguinPageRoutingModule } from './groupe-sanguin-routing.module';

import { GroupeSanguinPage } from './groupe-sanguin.page';
import { PopupsPageModule } from 'src/app/popups/popups/popups.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupeSanguinPageRoutingModule,
    PopupsPageModule
  ],
  declarations: [GroupeSanguinPage]
})
export class GroupeSanguinPageModule {}
