import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private apiUrl = 'http://localhost:8081/user';
  private transactionUrl = 'http://localhost:8081/transaction';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  public handleError(error:HttpErrorResponse){
    let errorMessage:string='';
    if(error.error instanceof ErrorEvent){
      errorMessage=`Error :${error.error.message}`;
    }
    else{
      errorMessage=`Status :${error.status}`;
    }
    return throwError(errorMessage);
  }


  getTransactionss(): Observable<any[]> {
    return this.http.get<any[]>(this.transactionUrl).pipe(catchError(this.handleError));
  }

  searchUsers(query: string): Observable<any[]> {
    const searchUrl = `${this.apiUrl}?search=${query}`;
    console.log('Search URL:', searchUrl);
    return this.http.get<any[]>(searchUrl).pipe(catchError(this.handleError));
  }

  
}
