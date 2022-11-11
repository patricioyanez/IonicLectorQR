import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinicioPageRoutingModule } from './pinicio-routing.module';

import { PinicioPage } from './pinicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinicioPageRoutingModule
  ],
  declarations: [PinicioPage]
})
export class PinicioPageModule {}
