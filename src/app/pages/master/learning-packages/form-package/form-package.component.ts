import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-form-package",
  templateUrl: "./form-package.component.html",
  styleUrls: ["./form-package.component.scss"],
})
export class FormPackageComponent implements OnInit {
  @Output() afterSave = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  save = () => [this.back()];

  back = () => [this.afterSave.emit()];
}
