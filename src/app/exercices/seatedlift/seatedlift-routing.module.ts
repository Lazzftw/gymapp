import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatedliftPage } from './seatedlift.page';

const routes: Routes = [
  {
    path: '',
    component: SeatedliftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatedliftPageRoutingModule {}
