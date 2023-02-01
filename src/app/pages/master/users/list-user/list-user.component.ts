import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { DataTableDirective } from "angular-datatables";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.scss"],
})
export class ListUserComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // datatable
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtInstance: Promise<DataTables.Api>;
  dtOptions: DataTables.Settings = {};

  // inisialisasi
  isOpenForm: boolean = false;

  constructor() {
    this.dtOptions = {
      ordering: false,
      searching: false,
      lengthChange: false,
    };
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Master" },
      { label: "User", active: true },
    ];
  }

  createUser = () => {
    this.showForm(true);
  };

  showForm = (val: boolean) => [(this.isOpenForm = val)];
}
