import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  user = { 
    name : '',
    email : ''
    }
  name:string;
  email:string;

  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) { }

  ngOnInit() {
  }

  submitDetails(){
    this.user = { 
      name : this.name,
      email : this.email
    }
    this.userService.addUser(this.user);
    this.dialogRef.close("add");
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
