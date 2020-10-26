import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlternativcurlPage } from './alternativcurl.page';

const routes: Routes = [
  {
    path: '',
    component: AlternativcurlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlternativcurlPageRoutingModule {}
