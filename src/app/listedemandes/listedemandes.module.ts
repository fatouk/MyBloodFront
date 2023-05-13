import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListedemandesPageRoutingModule } from './listedemandes-routing.module';

import { ListedemandesPage } from './listedemandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListedemandesPageRoutingModule
  ],
  declarations: [ListedemandesPage]
})
export class ListedemandesPageModule {}
