import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JudePage } from './jude.page';

const routes: Routes = [
  {
    path: '',
    component: JudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JudePageRoutingModule {}
