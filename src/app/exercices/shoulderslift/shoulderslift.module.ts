import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShouldersliftPageRoutingModule } from './shoulderslift-routing.module';

import { ShouldersliftPage } from './shoulderslift.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShouldersliftPageRoutingModule
  ],
  declarations: [ShouldersliftPage]
})
export class ShouldersliftPageModule {}
