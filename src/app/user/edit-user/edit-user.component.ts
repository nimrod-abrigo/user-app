import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user = { 
    id: '',
    name : '',
    email : ''
    }
  name:string;
  email:string;

  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
    }

  ngOnInit() {
    this.name = this.data.user.name;
    this.email = this.data.user.email;
    console.log(this.data);
  }

  submitDetails(){
    this.user = { 
      id: this.data.user.id,
      name : this.name,
      email : this.email
    }
    this.userService.updateUser(this.user);
    this.dialogRef.close("edit");
  }

  onNoClick(){
    this.dialogRef.close();
  }  

}
