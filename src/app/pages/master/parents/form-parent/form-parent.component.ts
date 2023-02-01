import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-form-parent",
  templateUrl: "./form-parent.component.html",
  styleUrls: ["./form-parent.component.scss"],
})
export class FormParentComponent implements OnInit {
  @Output() aftersave = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  save = () => {
    this.back()
  }

  back = () => {
    this.aftersave.emit();
  };
}
