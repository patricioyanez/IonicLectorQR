import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EiniciosPageRoutingModule } from './einicios-routing.module';

import { EiniciosPage } from './einicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EiniciosPageRoutingModule
  ],
  declarations: [EiniciosPage]
})
export class EiniciosPageModule {}
