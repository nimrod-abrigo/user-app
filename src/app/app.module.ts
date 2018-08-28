import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatTooltipModule, MatDialogModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { ViewDetailsComponent } from './user/view-details/view-details.component';

import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    ViewDetailsComponent,
    EditUserComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
