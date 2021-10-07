import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { HomeComponent } from "./home/home.component";
import { AddComponent } from "./LoanCR/add/add.component";
import { EditComponent } from "./LoanCR/edit/edit.component";
import { ListComponent } from "./LoanCR/list/list.component";

const routes: Routes = [
  { path: "all", component: ListComponent },
  { path: "", component: HomeComponent },
  { path: "counter", component: CounterComponent },
  { path: "fetch-data", component: FetchDataComponent },
  { path: "add", component: AddComponent },
  { path: "edit", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
