import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from "../../shared/ui/ui.module";
import { DataTablesModule } from "angular-datatables";

import { MasterRoutingModule } from './master-routing.module';
import { ListUserComponent } from './users/list-user/list-user.component';
import { FormUserComponent } from './users/form-user/form-user.component';
import { ListParentComponent } from './parents/list-parent/list-parent.component';
import { FormParentComponent } from './parents/form-parent/form-parent.component';


@NgModule({
  declarations: [ListUserComponent, FormUserComponent, ListParentComponent, FormParentComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    MasterRoutingModule,
    UiModule,
  ]
})
export class MasterModule { }
