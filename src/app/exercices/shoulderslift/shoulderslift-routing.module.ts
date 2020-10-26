import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShouldersliftPage } from './shoulderslift.page';

const routes: Routes = [
  {
    path: '',
    component: ShouldersliftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShouldersliftPageRoutingModule {}
