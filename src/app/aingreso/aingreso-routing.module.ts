import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AingresoPage } from './aingreso.page';

const routes: Routes = [
  {
    path: '',
    component: AingresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AingresoPageRoutingModule {}
