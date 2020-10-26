import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BicepswiderangePage } from './bicepswiderange.page';

const routes: Routes = [
  {
    path: '',
    component: BicepswiderangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BicepswiderangePageRoutingModule {}
