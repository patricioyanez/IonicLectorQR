import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinicioPage } from './pinicio.page';

const routes: Routes = [
  {
    path: '',
    component: PinicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinicioPageRoutingModule {}
