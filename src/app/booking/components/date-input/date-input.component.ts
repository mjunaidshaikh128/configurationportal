import { Component, Input, OnInit } from "@angular/core";
import { DefaultEditor } from "ng2-smart-table";

@Component({
  selector: "ngx-date-input",
  templateUrl: "./date-input.component.html",
  styleUrls: ["./date-input.component.scss"],
})
export class DateInputComponent  extends DefaultEditor implements OnInit {
  @Input() cell: any;
  formattedDate: any
  // date = new Date(this.cell.value);
  // year = this.date.getFullYear();
  // month = String(this.date.getMonth() + 1).padStart(2, "0");
  // day = String(this.date.getDate()).padStart(2, "0");

  // formattedDate = `${this.year}-${this.month}-${this.day}`;
  // @Input() rowData: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.formatDate();
  }

  formatDate() {
  const  date = new Date(this.cell.value);
  const  year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  this.formattedDate = `${year}-${month}-${day}`

  }

  onSelectChange(event: any) {
    this.cell.newValue = event.target.value;
  }
}
