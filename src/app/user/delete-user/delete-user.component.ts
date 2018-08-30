import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../user.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  deleteSub: Subscription;
  deleteResult: Observable<any>;

  constructor(public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService:UserService) { }

  ngOnInit() {
    console.log(this.data.id);
  }

  onYesClick():void{
    /*this.deleteSub = this.userService.deleteUser(this.data.id)
    .subscribe(res=> { 
      this.deleteResult = res;
      console.log(this.deleteResult);
      this.dialogRef.close(this.deleteResult);
    }, 
      err=> {
        console.error(err);
      }
    );*/
    this.userService.deleteUser(this.data.id);
    this.dialogRef.close("delete");
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
