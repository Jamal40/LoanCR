import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { ListComponent } from "./LoanCR/list/list.component";
import { AddComponent } from "./LoanCR/add/add.component";
import { EditComponent } from "./LoanCR/edit/edit.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Angular Material Imports
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { SuccessSnackBarComponent } from "./LoanCR/success-snack-bar/success-snack-bar.component";
import { DialogComponent } from "./LoanCR/dialog/dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { DeleteSnackBarComponent } from "./LoanCR/delete-snack-bar/delete-snack-bar.component";
import { AppRoutingModule } from "./app-routing-module";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    SuccessSnackBarComponent,
    DeleteSnackBarComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SuccessSnackBarComponent,
    DialogComponent,
    DeleteSnackBarComponent,
  ],
})
export class AppModule {}
