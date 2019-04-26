import { Pet } from './../entity/Pet';
import { Language } from './../language/Language';
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
  headers: new HttpHeaders({"Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"})
};

const endpoints = environment.endpoint;

class ApiService {
  /**
   * Function to handle error when the server return an error
   *
   * @param error
   */

  protected endpoint : string;

  constructor() {
    this.endpoint = endpoints.local;
    console.log(window.location.origin);
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
        // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
        console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

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

  getErrorMessage(result : any, language : Language) : string {
    console.log('return code', result.code);
    if(result.code == ReturnCode.SUCCESS){
      if (result && result.sid) {
        return language.registerSuccess;
      }
    }
    else if(result.code == ReturnCode.NOT_FOUND){
      return language.invalidUserPassword;
    }
    else if(result.code == ReturnCode.SERVER_ERROR){
      return language.serverError;
    }
    else {
      return language.connectionError;
    }
  }
}

@Injectable()
export class UserApiService extends ApiService {

  private controller = this.endpoint+"/user";
  private authenticate = this.controller+"/authenticate";
  private register = this.controller+"/register";

  constructor(private http: HttpClient) {
    super();
  }

  public login(user: User): Observable<any> {
    console.log(this.authenticate);
    console.log(user);

    return this.http.post<User>(this.authenticate, user, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public save(user: User): Observable<any> {
    
    console.log(this.register);
    console.log(user);
    
    return this.http.post<User>(this.register, user, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
}

@Injectable()
export class PetApiService extends ApiService {

  private controller = this.endpoint+"/pet";
  private retrieve = this.controller+"/retrieve";
  private register = this.controller+"/register";

  constructor(private http: HttpClient) {
    super();
  }

  public get(pet: Pet): Observable<any> {
    console.log(this.retrieve);
    console.log(pet);

    return this.http.post<Pet>(this.retrieve, pet, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public getByUser(user: User): Observable<any> {
    console.log(this.retrieve);
    console.log(user);

    return this.http.post<number>(this.retrieve, user.id, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public save(pet: Pet): Observable<any> {
    console.log(this.register);
    console.log(pet);
    
    return this.http.post<User>(this.register, pet, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
}

export enum ReturnCode {
  SUCCESS = 0,
  NOT_FOUND = -1,
  VALIDATION_ERROR = -2,
  SERVER_ERROR = -3,
  RESOURCE_EXISTS = -4,
  CONNECTION_ERROR = -5,
}