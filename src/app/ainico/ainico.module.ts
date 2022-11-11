import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AinicoPageRoutingModule } from './ainico-routing.module';

import { AinicoPage } from './ainico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AinicoPageRoutingModule
  ],
  declarations: [AinicoPage]
})
export class AinicoPageModule {}
