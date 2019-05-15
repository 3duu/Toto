import { ReturnCode } from './../entity/system';
import { Pet } from './../entity/Pet';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { User } from '../entity/User';
import { LocalDatabaseService } from '../database/database';
import { LanguageService } from '../language/Language';
import { ObjectUtils } from '../utils';
import { SociaNetworkType } from '../socialNetwork/socialNetworkServices';

// Set the http options
export const httpHeaders = new HttpHeaders({"Content-Type": 
"application/json","Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"});

const httpDefaultOptions = {
  headers: httpHeaders
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
    console.log(this.endpoint);
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
  protected extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getErrorMessage(result : any, language : LanguageService) : string {
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

    return this.http.post<User>(this.authenticate, user, httpDefaultOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public save(user: User): Observable<any> {
    
    console.log(this.register);
    console.log(user);
    
    return this.http.post<User>(this.register, user, httpDefaultOptions)
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
  private types = this.controller+"/types";
  private breeds = this.controller+"/breeds";
  private remove = this.controller+"/remove";

  constructor(private http: HttpClient) {
    super();
  }

  public get(pet: Pet): Observable<any> {
    console.log(this.retrieve);
    console.log(pet);
    
    return this.http.post<Pet>(this.retrieve, pet, httpDefaultOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public getByUser(user: User): Observable<any> {
    console.log(this.retrieve);
    console.log(user);

    const parameters = new HttpParams().set("userId", user.id.toString());
    const httpOptions = {
      headers: httpHeaders,
      params: parameters
    };
    return this.http.get(this.retrieve, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public getAllPetTypes(): Observable<any> {
    console.log(this.types);


    return this.http.get(this.types, httpDefaultOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public save(pet: Pet): Observable<any> {
    console.log(this.register);
    console.log(pet);
    

    return this.http.post<User>(this.register, pet, httpDefaultOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public delete(pet: Pet): Observable<any> {

    console.log(this.remove);
    console.log(pet);
    
    return this.http.post<User>(this.remove, pet, httpDefaultOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
}

@Injectable()
export class InfoService extends ApiService {

  private controller = this.endpoint+"/info";
  private ping = this.controller+"/ping";

  constructor(private http: HttpClient) {
    super();
  }

  public doPing(): Observable<any> {
    console.log(this.ping);

    const httpOptions = {
      headers: httpHeaders
    };
    return this.http.get(this.ping, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

}

@Injectable()
export class AuthenticationService {

  //https://jwt.io/introduction/
  constructor(
    private userApi : UserApiService, 
    private _localDatabase : LocalDatabaseService,
    private _infoService : InfoService) {
  }

  get localDatabase() : LocalDatabaseService {
    return this._localDatabase;
  }

  get infoService() : InfoService {
    return this._infoService;
  }

  authenticate(entryUser : User, callback, sessionCallback) : void {
    
    if(ObjectUtils.isEmpty(entryUser.loginType)){
      entryUser.loginType = SociaNetworkType.NONE;
    }

    const user : Observable<any> = this.userApi.login(entryUser);

    (<any>window).httpUser = user;

    user.subscribe(result => {

      console.log(result);

      if(result.code == ReturnCode.SUCCESS){
        this._localDatabase.mergeUser(entryUser);
        if(sessionCallback != undefined) {
          sessionCallback(result, entryUser.password);
        }
      }
      callback({code : result.code});
    }, error => {
      console.log(error);
      callback( {code : ReturnCode.CONNECTION_ERROR, message: this.userApi.getErrorMessage({code: ReturnCode.CONNECTION_ERROR}, new LanguageService())});
    });
  }

  authenticateLastUser(callback, sessionCallback) : void {

    let doLogin = (result : any) => {
      const user : User = new User();
      user.username = result.username;
      user.password = result.password;
      user.loginType = result.loginType;
      this.authenticate(user, callback, sessionCallback);
    }
  
    let notLogin = (y) => {
      callback({code : ReturnCode.NOT_FOUND, message: ""});
    }

    this._localDatabase.getCurrentUser(doLogin, notLogin);
  }

}