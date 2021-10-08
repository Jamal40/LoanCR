import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Employee } from "../../ViewModels/employee";
import { MatDialog } from "@angular/material/dialog";
import { EmployeesService } from "../employees.service";
import { DialogComponent } from "../dialog/dialog.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [],
})
export class ListComponent implements OnInit {
  private empList;

  constructor(
    private employeeService: EmployeesService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    //this.empList = this.employeeService.getAll();
    return this.employeeService.getAll().subscribe((emps) => {
      this.empList = emps;
    });
  }

  Delete(id: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getEmployees();
    });
  }

  Edit(emp: any) {
    this.employeeService.employeeEdited$.next(emp);
    this.router.navigate(["/edit"]);
  }
}
