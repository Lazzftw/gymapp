import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BicepssmallrangPageRoutingModule } from './bicepssmallrang-routing.module';

import { BicepssmallrangPage } from './bicepssmallrang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BicepssmallrangPageRoutingModule
  ],
  declarations: [BicepssmallrangPage]
})
export class BicepssmallrangPageModule {}
