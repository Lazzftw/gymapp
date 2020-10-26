import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BacklowrowPage } from './backlowrow.page';

const routes: Routes = [
  {
    path: '',
    component: BacklowrowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BacklowrowPageRoutingModule {}
