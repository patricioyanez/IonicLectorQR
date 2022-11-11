import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AregistroPage } from './aregistro.page';

const routes: Routes = [
  {
    path: '',
    component: AregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AregistroPageRoutingModule {}
