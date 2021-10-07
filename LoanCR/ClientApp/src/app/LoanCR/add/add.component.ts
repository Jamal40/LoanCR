import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Employee } from "../../ViewModels/employee";
import { ListComponent } from "../list/list.component";
import { EmployeesService } from "../employees.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

//Anglar Material Imports
import { MatSnackBar } from "@angular/material/snack-bar";
import { SuccessSnackBarComponent } from "../success-snack-bar/success-snack-bar.component";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
  providers: [],
})
export class AddComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    job: new FormControl("", [Validators.required]),
    age: new FormControl(18, [Validators.required]),
  });

  private name: string;
  private job: string;
  private age: number;
  newEmp: Employee;

  // @ViewChild("alert", { static: true }) alert: ElementRef;

  constructor(
    private employeeService: EmployeesService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  openSnackBar() {
    this._snackBar.openFromComponent(SuccessSnackBarComponent, {
      duration: 3000,
      data: "Employee has been added successfully",
    });
  }

  addEmp() {
    if (this.addForm.invalid) {
      return;
    }
    this.employeeService.addEmp(this.addForm.value).subscribe(
      () => {
        this.openSnackBar();
        this.route.navigate(["/all"]);
      },
      () => {
        alert("Sorry something wrong happened");
      }
    );
  }
}
