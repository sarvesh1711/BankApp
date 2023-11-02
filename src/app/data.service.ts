import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8081/user';

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

}
