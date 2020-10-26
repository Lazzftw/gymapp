import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BicepssmallrangPage } from './bicepssmallrang.page';

const routes: Routes = [
  {
    path: '',
    component: BicepssmallrangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BicepssmallrangPageRoutingModule {}
