import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AingresoPageRoutingModule } from './aingreso-routing.module';

import { AingresoPage } from './aingreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AingresoPageRoutingModule
  ],
  declarations: [AingresoPage]
})
export class AingresoPageModule {}
