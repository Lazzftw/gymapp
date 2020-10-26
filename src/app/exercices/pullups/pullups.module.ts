import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PullupsPageRoutingModule } from './pullups-routing.module';

import { PullupsPage } from './pullups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PullupsPageRoutingModule
  ],
  declarations: [PullupsPage]
})
export class PullupsPageModule {}
