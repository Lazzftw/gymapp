import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenchdeclinePage } from './benchdecline.page';

const routes: Routes = [
  {
    path: '',
    component: BenchdeclinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenchdeclinePageRoutingModule {}
