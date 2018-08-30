import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UserService } from '../../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent{
  userSub: Subscription;
  userInfo:any;

  constructor(public dialogRef: MatDialogRef<ViewDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService:UserService) { }

    ngOnInit() {
      this.getUserInfo(this.data.id);
      console.log(this.data.id);
    }
    
    getUserInfo(id){
      this.userSub = this.userService.getUserInfo(id)
      .subscribe(res=> { 
        this.userInfo = res;
        console.log(res);
      }, 
        err=> {
          console.error(err);
        }
  
      );
    }

  }
