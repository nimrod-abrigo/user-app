import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { resolve } from 'q';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = "http://localhost:4000/user";

  constructor(private _httpClient: HttpClient) { }

  public getUsers() :Observable<any>{
    return this._httpClient
    .get(this.API_URL+"/getUsers")
    .pipe(
      catchError((error) => this._handleError(error))
    );
  }

  public getUserInfo(id): Observable<User>{
    return this._httpClient
    .get(this.API_URL+"/getUserInfo/"+id)
    .pipe(
      catchError((error) => this._handleError(error))
    );
  }
  
  public updateUser(user):void{
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('name', user.name);
    body = body.set('email', user.email);
      this._httpClient.put(this.API_URL+"/"+user.id,body,{headers: myheader}
      ).subscribe(
        data => {
          console.log(data);
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
  }

  public addUser(user):void{
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('name', user.name);
    body = body.set('email', user.email);
    this._httpClient.post(this.API_URL,body,{headers: myheader})
    .subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public deleteUser(id):any{
    this._httpClient.delete(this.API_URL+'/'+id).subscribe(
      data=>{
        console.log(data);
      },(err: HttpErrorResponse) => {
        console.log(err);
        throw err;
      }
    );
    /*return this._httpClient
    .delete(this.API_URL+"/"+id)
    .pipe(
      catchError((error) => this._handleError(error))
    );*/
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
   
    return Observable.throw(errorMsg);
  }
}
