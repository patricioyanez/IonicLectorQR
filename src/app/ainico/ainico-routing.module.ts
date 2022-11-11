import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AinicoPage } from './ainico.page';

const routes: Routes = [
  {
    path: '',
    component: AinicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AinicoPageRoutingModule {}
