import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable,Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userSub: Subscription;
  users: Observable<any>;
  displayedtransColumns=['id','name', 'email', 'action'];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(){
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

}
