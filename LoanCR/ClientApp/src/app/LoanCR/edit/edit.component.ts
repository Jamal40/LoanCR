import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmployeesService } from "../employees.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SuccessSnackBarComponent } from "../success-snack-bar/success-snack-bar.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  editForm = new FormGroup({
    id: new FormControl({ value: 0, disabled: true }),
    name: new FormControl("", [Validators.required]),
    job: new FormControl("", [Validators.required]),
    age: new FormControl(18, [Validators.required]),
  });

  employeeToEdit: any = {};
  constructor(
    private employeeService: EmployeesService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.employeeService.employeeEdited$.subscribe((notification) => {
      this.employeeToEdit = notification;
      if (this.employeeToEdit !== null) {
        this.editForm.patchValue(this.employeeToEdit);
      }
    });
  }
  editEmp() {
    if (this.editForm.invalid) {
      return;
    }
    this.employeeService.UpdateEmp(this.editForm.getRawValue()).subscribe(
      () => {
        this.snackBar.openFromComponent(SuccessSnackBarComponent, {
          data: {
            message: "Employee has been edited successfully.",
            color: "rgb(16, 218, 16)",
          },
          duration: 3000,
        });
        this.router.navigate(["./all"]);
      },
      () => {
        alert("An error has occured");
      }
    );
  }
}
