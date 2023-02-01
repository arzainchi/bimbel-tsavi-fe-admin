import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-form-user",
  templateUrl: "./form-user.component.html",
  styleUrls: ["./form-user.component.scss"],
})
export class FormUserComponent implements OnInit {
  @Output() afterSave = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  save = () => {
    this.back();
  };

  back = () => {
    this.afterSave.emit();
  };
}
