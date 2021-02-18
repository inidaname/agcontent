import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

const helper = new JwtHelperService();

const tokenData: any = localStorage.getItem('access-token');
const decodeToken = helper.decodeToken(tokenData);
const isExpired = helper.isTokenExpired(tokenData)

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
  }

  verifyToken$() {
    if (!localStorage.getItem('access-token')) {
      // if (this.route.url !== '/login'){
      //   localStorage.removeItem('access-token');
      // }
      this.tokenStatus.next(false);
    }
    this.tokenStatus.next(true);
  }

  verifyToken(): boolean {
    if (!localStorage.getItem('access-token')) {
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
