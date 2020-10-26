import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatedliftPageRoutingModule } from './seatedlift-routing.module';

import { SeatedliftPage } from './seatedlift.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatedliftPageRoutingModule
  ],
  declarations: [SeatedliftPage]
})
export class SeatedliftPageModule {}
