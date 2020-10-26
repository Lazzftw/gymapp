import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TricepsextensionPage } from './tricepsextension.page';

const routes: Routes = [
  {
    path: '',
    component: TricepsextensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TricepsextensionPageRoutingModule {}
