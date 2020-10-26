import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenchdeclinePageRoutingModule } from './benchdecline-routing.module';

import { BenchdeclinePage } from './benchdecline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenchdeclinePageRoutingModule
  ],
  declarations: [BenchdeclinePage]
})
export class BenchdeclinePageModule {}
