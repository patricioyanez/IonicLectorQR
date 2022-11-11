import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EregistroPageRoutingModule } from './eregistro-routing.module';

import { EregistroPage } from './eregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EregistroPageRoutingModule
  ],
  declarations: [EregistroPage]
})
export class EregistroPageModule {}
