import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromedioPageRoutingModule } from './promedio-routing.module';

import { PromedioPage } from './promedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromedioPageRoutingModule
  ],
  declarations: [PromedioPage]
})
export class PromedioPageModule {}
