import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidarPage } from './olvidar.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidarPageRoutingModule {}
