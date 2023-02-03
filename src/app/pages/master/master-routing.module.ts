import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserComponent } from "./users/list-user/list-user.component";
import { ListParentComponent } from "./parents/list-parent/list-parent.component";
import { ListPackageComponent } from "./learning-packages/list-package/list-package.component";

const routes: Routes = [
  { path: 'user', component: ListUserComponent },
  { path: 'parent', component: ListParentComponent },
  { path: 'learning-package', component: ListPackageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
