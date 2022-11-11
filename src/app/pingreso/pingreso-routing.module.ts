import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PingresoPage } from './pingreso.page';

const routes: Routes = [
  {
    path: '',
    component: PingresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PingresoPageRoutingModule {}
