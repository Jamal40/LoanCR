import { Component, Inject, OnInit } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

@Component({
  selector: "app-general-snack-bar",
  templateUrl: "./general-snack-bar.component.html",
  styleUrls: ["./general-snack-bar.component.css"],
})
export class GeneralSnackBarComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  ngOnInit() {}
}
