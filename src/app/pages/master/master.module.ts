import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiModule } from "../../shared/ui/ui.module";
import { DataTablesModule } from "angular-datatables";

import { MasterRoutingModule } from "./master-routing.module";
import { ListUserComponent } from "./users/list-user/list-user.component";
import { FormUserComponent } from "./users/form-user/form-user.component";
import { ListParentComponent } from "./parents/list-parent/list-parent.component";
import { FormParentComponent } from "./parents/form-parent/form-parent.component";
import { ListPackageComponent } from "./learning-packages/list-package/list-package.component";
import { FormPackageComponent } from "./learning-packages/form-package/form-package.component";

@NgModule({
  declarations: [
    ListUserComponent,
    FormUserComponent,
    ListParentComponent,
    FormParentComponent,
    ListPackageComponent,
    FormPackageComponent,
  ],
  imports: [CommonModule, DataTablesModule, MasterRoutingModule, UiModule],
})
export class MasterModule {}
