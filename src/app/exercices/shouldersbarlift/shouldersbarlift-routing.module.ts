import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShouldersbarliftPage } from './shouldersbarlift.page';

const routes: Routes = [
  {
    path: '',
    component: ShouldersbarliftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShouldersbarliftPageRoutingModule {}
