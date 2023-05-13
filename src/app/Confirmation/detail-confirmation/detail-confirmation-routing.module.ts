import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailConfirmationPage } from './detail-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: DetailConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailConfirmationPageRoutingModule {}
