import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListedemandesPage } from './listedemandes.page';

const routes: Routes = [
  {
    path: '',
    component: ListedemandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListedemandesPageRoutingModule {}
