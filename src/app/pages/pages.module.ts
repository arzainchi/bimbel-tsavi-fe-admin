import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { DataTablesModule } from "angular-datatables";

import { PagesRoutingModule } from './pages-routing.module';

import { UiModule } from '../shared/ui/ui.module';

import { BlankpageComponent } from './blankpage/blankpage.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3
};

@NgModule({
  declarations: [BlankpageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DataTablesModule,
    PerfectScrollbarModule,
    NgbModule,
    NgbTooltipModule,
    UiModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PagesModule { }
