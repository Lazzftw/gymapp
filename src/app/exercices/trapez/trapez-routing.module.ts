import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrapezPage } from './trapez.page';

const routes: Routes = [
  {
    path: '',
    component: TrapezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrapezPageRoutingModule {}
