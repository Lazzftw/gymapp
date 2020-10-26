import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BacklowrowPageRoutingModule } from './backlowrow-routing.module';

import { BacklowrowPage } from './backlowrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BacklowrowPageRoutingModule
  ],
  declarations: [BacklowrowPage]
})
export class BacklowrowPageModule {}
