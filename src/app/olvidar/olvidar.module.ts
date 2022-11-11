import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidarPageRoutingModule } from './olvidar-routing.module';

import { OlvidarPage } from './olvidar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidarPageRoutingModule
  ],
  declarations: [OlvidarPage]
})
export class OlvidarPageModule {}
