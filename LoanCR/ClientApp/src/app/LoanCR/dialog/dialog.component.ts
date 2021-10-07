import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { EmployeesService } from "../employees.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DeleteSnackBarComponent } from "../delete-snack-bar/delete-snack-bar.component";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"],
})
export class DialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private empService: EmployeesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  deleteEmployee() {
    this.empService.deleteEmp(this.data).subscribe(
      () => {
        this.router.navigate(["/all"]);
        this.snackBar.openFromComponent(DeleteSnackBarComponent, {
          duration: 3000,
        });
      },
      () => {
        alert("Something went wrong!");
      }
    );
  }
}
