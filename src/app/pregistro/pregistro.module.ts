import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PregistroPageRoutingModule } from './pregistro-routing.module';

import { PregistroPage } from './pregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PregistroPageRoutingModule
  ],
  declarations: [PregistroPage]
})
export class PregistroPageModule {}
