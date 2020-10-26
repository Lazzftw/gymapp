import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenchinclinePage } from './benchincline.page';

const routes: Routes = [
  {
    path: '',
    component: BenchinclinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenchinclinePageRoutingModule {}
