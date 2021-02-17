import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

const tokenData: any = localStorage.getItem('access-token');
const decodeToken = helper.decodeToken(tokenData);
const isExpired = helper.isTokenExpired(tokenData)

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  verifyToken(): boolean {
    console.log('this')
    if (isExpired) {
      localStorage.removeItem('access-token');
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
    return true;
  }

  decodeUser(): string | null {
    if(!this.verifyToken()) {
      return null;
    }

    return decodeToken;
  }
}
