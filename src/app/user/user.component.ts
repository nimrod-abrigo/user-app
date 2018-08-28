import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable,Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userSub: Subscription;
  users: Observable<any>;
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

  viewUser(user){
    console.log(user);
    const dialogRef = this.dialog.open(ViewDetailsComponent, {
      width: '250px',
      data: {user: user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  editUser(user){
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '250px',
      data: {user: user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}
