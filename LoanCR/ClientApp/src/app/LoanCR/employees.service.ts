import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../ViewModels/employee";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmployeesService {
  employeeEdited$ = new BehaviorSubject<any>(null);
  baseUrl = "https://localhost:44348/";
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.baseUrl + "api/index");
  }

  deleteEmp(id: number) {
    return this.http.delete(this.baseUrl + "api/index/" + id);
  }

  UpdateEmp(editedEmp: any) {
    return this.http.put(this.baseUrl + "api/index/" + editedEmp.id, editedEmp);
  }

  addEmp(newEmp: Employee) {
    return this.http.post(this.baseUrl + "api/index/", newEmp);
  }

  //getAll() {
  //  return new Promise(resolve => resolve(this.Employees));
  //}

  //addEmp(emp) {
  //  return new Promise(resolve => {
  //    this.Employees.push(emp);
  //    resolve(emp);
  //  });
  //}

  //put(changed: Employee) {
  //  return new Promise(resolve => {
  //    const index = this.Employees.findIndex(emp => emp === changed);
  //    this.Employees[index].name = changed.name;
  //    this.Employees[index].job = changed.job;
  //    this.Employees[index].age = changed.age;
  //    resolve(changed);
  //  });
  //}

  //delete(selected) {
  //  return new Promise(resolve => {
  //    const index = this.Employees.findIndex(emp => emp === selected);
  //    this.Employees.splice(index, 1);
  //    resolve(true);
  //  });
  //}
}
