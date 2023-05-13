import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuarantainePage } from './quarantaine.page';

const routes: Routes = [
  {
    path: '',
    component: QuarantainePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuarantainePageRoutingModule {}
