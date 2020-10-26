import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShouldersbarliftPageRoutingModule } from './shouldersbarlift-routing.module';

import { ShouldersbarliftPage } from './shouldersbarlift.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShouldersbarliftPageRoutingModule
  ],
  declarations: [ShouldersbarliftPage]
})
export class ShouldersbarliftPageModule {}
