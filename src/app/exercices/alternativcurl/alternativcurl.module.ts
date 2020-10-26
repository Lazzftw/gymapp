import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlternativcurlPageRoutingModule } from './alternativcurl-routing.module';

import { AlternativcurlPage } from './alternativcurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlternativcurlPageRoutingModule
  ],
  declarations: [AlternativcurlPage]
})
export class AlternativcurlPageModule {}
