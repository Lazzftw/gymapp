import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TricepsbarPage } from './tricepsbar.page';

const routes: Routes = [
  {
    path: '',
    component: TricepsbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TricepsbarPageRoutingModule {}
