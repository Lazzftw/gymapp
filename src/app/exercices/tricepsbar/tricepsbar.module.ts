import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TricepsbarPageRoutingModule } from './tricepsbar-routing.module';

import { TricepsbarPage } from './tricepsbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TricepsbarPageRoutingModule
  ],
  declarations: [TricepsbarPage]
})
export class TricepsbarPageModule {}
