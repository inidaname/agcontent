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
    decodeToken = helper.decodeToken(tokenData);
    isExpired = helper.isTokenExpired(tokenData);
    dateofToken = helper.getTokenExpirationDate(tokenData);
  }

  verifyToken$() {
    if (isExpired) {
      if (this.route.url !== '/login'){
        localStorage.removeItem('access-token');
      }
      this.tokenStatus.next(false);
    }
    this.tokenStatus.next(true);
  }

  verifyToken(): boolean {
    console.log(isExpired)
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
