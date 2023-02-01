import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserComponent } from "./users/list-user/list-user.component";
import { ListParentComponent } from "./parents/list-parent/list-parent.component";

const routes: Routes = [
  { path: 'user', component: ListUserComponent },
  { path: 'parent', component: ListParentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
