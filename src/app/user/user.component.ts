import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable,Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { User } from '../model/user';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userSub: Subscription;
  users: Observable<any>;
  userInfo:Observable<User>;
  displayedtransColumns=['id','name', 'email', 'action'];

  constructor(private userService:UserService, public dialog:MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userSub = this.userService.getUsers()
    .subscribe(res=> { 
      this.users = res;
      console.log(this.users)
    }, 
      err=> {
        console.error(err);
      }

    );
  }

  viewUser(id){
    console.log(id);
    const dialogRef = this.dialog.open(ViewDetailsComponent, {
      width: '250px',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  addUser(){
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result == "add"){
        this.getUsers();
      }
    });
  }

  editUser(user){
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '500px',
      data: {user: user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result == "edit"){
        this.viewUser(user.id);
        this.getUsers();
      }
    });
  }

  deleteUser(id){
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '300px',
      data:{id:id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == "delete"){
        this.getUsers();
      }
    });
  }

}
