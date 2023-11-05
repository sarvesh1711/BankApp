import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8081/user';
  private queryurl = 'http://localhost:8081/query';
   private accountrequesturl = 'http://localhost:8081/files';

  constructor(private http: HttpClient) {}

  getUserById(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getQuery(): Observable<any[]> {
    return this.http.get<any[]>(this.queryurl).pipe(catchError(this.handleError));
  }

  getAccountRequest(): Observable<any[]> {
    return this.http.get<any[]>(this.accountrequesturl).pipe(catchError(this.handleError));
  }


  updateUser(user: any): Observable<any> {
  const url = `${this.apiUrl}/${user.id}`;
  return this.http.put(url, user).pipe(catchError(this.handleError));
}


public deleteUser(user: any): Observable<void> {
  const url = `${this.apiUrl}/${user}`;
  return this.http.delete<void>(url).pipe( catchError(this.handleError)
  );
}
  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Status: ${error.status}`;
    }
    return throwError(errorMessage);
  }
}
