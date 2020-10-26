import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenchinclinePageRoutingModule } from './benchincline-routing.module';

import { BenchinclinePage } from './benchincline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenchinclinePageRoutingModule
  ],
  declarations: [BenchinclinePage]
})
export class BenchinclinePageModule {}
