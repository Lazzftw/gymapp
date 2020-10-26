import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TricepsextensionPageRoutingModule } from './tricepsextension-routing.module';

import { TricepsextensionPage } from './tricepsextension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TricepsextensionPageRoutingModule
  ],
  declarations: [TricepsextensionPage]
})
export class TricepsextensionPageModule {}
