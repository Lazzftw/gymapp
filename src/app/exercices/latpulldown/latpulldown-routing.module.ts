import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatpulldownPage } from './latpulldown.page';

const routes: Routes = [
  {
    path: '',
    component: LatpulldownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatpulldownPageRoutingModule {}
