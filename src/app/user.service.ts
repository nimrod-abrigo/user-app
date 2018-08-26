import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
   
    return Observable.throw(errorMsg);
  }
}
