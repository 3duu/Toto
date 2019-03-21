import { environment } from 'src/environments/environment';

import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { User } from '../entity/User';

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json",
  "Authorization": "petlife-toto",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"})
};
@Injectable()
export class ApiService {

    static endpoint = environment.endpoint;
    static USER_LOGIN = ApiService.endpoint+"/user/authenticate";

    constructor(private http: HttpClient) {}

  /**
   * Function to handle error when the server return an error
   *
   * @param error
   */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        } else {
            // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
            console.error(
            `Backend returned code ${error.status}, ` + `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError(error);
    }

  /**
   * Function to extract the data when the server return some
   *
   * @param res
   */
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  public login(user: User): Observable<any> {
    // Call the http GETaler
    console.log(ApiService.USER_LOGIN);
    console.log(user);
    /*return this.http.get(ApiService.USER_LOGIN, httpOptions).pipe(
        map(this.extractData), catchError(this.handleError)
        );
    }*/
    
    return this.http.post<User>(ApiService.USER_LOGIN, user, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
}

export enum ReturnCode {
  SUCCESS = 0,
  NOT_FOUND = -1,
  VALIDATION_ERROR = -2
}