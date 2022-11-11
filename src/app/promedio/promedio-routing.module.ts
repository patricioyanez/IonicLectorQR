import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromedioPage } from './promedio.page';

const routes: Routes = [
  {
    path: '',
    component: PromedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromedioPageRoutingModule {}
