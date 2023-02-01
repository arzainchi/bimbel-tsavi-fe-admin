import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";

@Component({
  selector: "app-list-parent",
  templateUrl: "./list-parent.component.html",
  styleUrls: ["./list-parent.component.scss"],
})
export class ListParentComponent implements OnInit {
  // breadcrum data
  breadCrumbItems: Array<{}>;

  // datatable
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtInstace: Promise<DataTables.Api>;
  dtOptions: DataTables.Settings = {};

  // inisiasi
  isOpenForm: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      ordering: false,
      searching: false,
      lengthChange: false,
    };

    this.breadCrumbItems = [
      { label: "Master" },
      { label: "Wali Murid", active: true },
    ];
  }

  createParent = () => {
    this.showForm(true);
  };

  showForm = (val: boolean) => [(this.isOpenForm = val)];
}
