import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EregistroPage } from './eregistro.page';

const routes: Routes = [
  {
    path: '',
    component: EregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EregistroPageRoutingModule {}
