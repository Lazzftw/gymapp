import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrapezPageRoutingModule } from './trapez-routing.module';

import { TrapezPage } from './trapez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrapezPageRoutingModule
  ],
  declarations: [TrapezPage]
})
export class TrapezPageModule {}
