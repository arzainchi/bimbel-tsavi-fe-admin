import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";

@Component({
  selector: "app-list-package",
  templateUrl: "./list-package.component.html",
  styleUrls: ["./list-package.component.scss"],
})
export class ListPackageComponent implements OnInit {
  // breadcrumbs
  breadCrumbItems: Array<{}>

  // datatables
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtInstance: Promise<DataTables.Api>;
  dtOptions: DataTables.Settings = {};

  // inisialisasi
  isOpenForm: boolean = false

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Master" },
      { label: "Paket Belajar", active: true },
    ];
    
    this.dtOptions = {
      ordering: false,
      searching: false,
      lengthChange: false,
    }
  }
  
  createUser = () => {
    this.showForm(true);
  };

  showForm = (val: boolean) => [(this.isOpenForm = val)];
}
