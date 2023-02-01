import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlankpageComponent } from './blankpage/blankpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'default' },
  { path: 'default', component: BlankpageComponent },
  { path: 'master', loadChildren: () => import("./master/master.module").then(m => m.MasterModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
