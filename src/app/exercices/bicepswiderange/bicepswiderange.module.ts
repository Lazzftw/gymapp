import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BicepswiderangePageRoutingModule } from './bicepswiderange-routing.module';

import { BicepswiderangePage } from './bicepswiderange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BicepswiderangePageRoutingModule
  ],
  declarations: [BicepswiderangePage]
})
export class BicepswiderangePageModule {}
