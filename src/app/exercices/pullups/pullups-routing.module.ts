import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PullupsPage } from './pullups.page';

const routes: Routes = [
  {
    path: '',
    component: PullupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PullupsPageRoutingModule {}
