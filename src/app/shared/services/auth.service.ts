import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

const helper = new JwtHelperService();

let tokenData: any;
let decodeToken: any;
let isExpired: any;
let dateofToken: any;
const theToken = helper.tokenGetter()

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenStatus: BehaviorSubject<any>;
  public tokenChange: Observable<boolean>


  constructor(
    private route: Router
  ) {
    this.tokenStatus = new BehaviorSubject(false);
    this.tokenChange = this.tokenStatus.asObservable();

    tokenData = localStorage.getItem('access-token');
  }

  setAuth(token: string | null): boolean {
    if (!token) {
      console.log(false)
      return false;
    }
    decodeToken = helper.decodeToken(token);
    isExpired = helper.isTokenExpired(token);
    dateofToken = helper.getTokenExpirationDate(token);
    return true;

  }

  verifyToken$() {
    console.log(isExpired)
    if (isExpired || isExpired === undefined) {
      if (this.route.url !== '/login'){
        localStorage.removeItem('access-token');
      }
      this.tokenStatus.next(false);
      return ;
    }
    this.tokenStatus.next(true);
    return ;
  }

  verifyToken(): boolean {
    if (isExpired) {
      if (this.route.url !== '/login'){
        localStorage.removeItem('access-token');
      }
      return false;
    }

    if(!decodeToken) {
      return false;
    }
    return true;
  }

  logoutUser(): boolean {
    if (!this.verifyToken()) {
      localStorage.removeItem('access-token');
      return false;
    }
    localStorage.removeItem('access-token');
    this.verifyToken$();
    return true;
  }

  decodeUser(): any {
    if(!this.verifyToken()) {
      return null;
    }

    return decodeToken;
  }
}
