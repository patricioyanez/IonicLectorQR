import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AregistroPageRoutingModule } from './aregistro-routing.module';

import { AregistroPage } from './aregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AregistroPageRoutingModule
  ],
  declarations: [AregistroPage]
})
export class AregistroPageModule {}
