import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Intercepter } from './intercepter';

@Injectable({providedIn: 'root'})

export class ApiService {

  apilink = `https://menage-food-ordering-app.herokuapp.com/v1`;
  constructor(private httpClient: HttpClient) { }

  handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(err.error);
  }

  getAPI (): Observable<{}> {
    return this.httpClient.get(this.apilink).pipe(
      catchError(this.handleError)
    );
  }

  loginUser(): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/auth/login`, {}, {});
  }

  createUser(): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/auth/signup`, {}, {});
  }

  createOrder(orderData: {}): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/order`, orderData, {});
  }

  confirmOrder(orderDetail: {}, orderID: string): Observable<{}> {
    return this.httpClient.put(`${this.apilink}/order/confirm/${orderID}`, orderDetail, {});
  }

  getAllOrder(): Observable<Intercepter> {
    return this.httpClient.get<any>(`${this.apilink}/order/all`);
  }

  getOrdersWithQuery(query: any): Observable<{}> {
    return this.httpClient.get(`${this.apilink}/order/query?day=${query.date}&month=${query.month}`);
  }

  createFood(): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/vood`, {}, {});
  }

  foodPortion(foodDetail: {}, id: string): Observable<{}> {
    return this.httpClient.put(`${this.apilink}/food/portions/${id}`, foodDetail, {});
  }

  getAllFood(): Observable<{}> {
    return this.httpClient.get(`${this.apilink}/food?category=all`);
  }

  updateFood(foodDetail: {}, foodID: string): Observable<{}> {
    return this.httpClient.put(`${this.apilink}/food/${foodID}`, foodDetail, {});
  }

  placeFoodMenu(foodData: {}, foodID: string, tags: string): Observable<{}> {
    return this.httpClient.put(`${this.apilink}/food/uploadFoodMenu/${foodID}?foodTag=${tags}`, foodData, {});
  }

  uploadImage(image: {}, id: string) {
    return this.httpClient.post(`${this.apilink}/food/uploadFood/${id}`, image, {});
  }

  verifyNumber(data: {}): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/auth/verify`, data, {});
  }

  refreshToken(body: {}): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/auth/refreshToken`, body, {});
  }

  validateUser(body: {}): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/auth/validate`, body, {})
  }

  notifiation(body: {}): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/notification`, body, {});
  }

  verifyEmail(body: {}): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/auth/verified`, body, {});
  }

  getUserProfile(body: any): Observable<{}> {
    return this.httpClient.get(`${this.apilink}/profile`, body)
  }

  createAdmin(body: {}): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/auth/admin`, body, {});
  }

  getAllAdmins(): Observable<{}> {
    return this.httpClient.get(`${this.apilink}/admin`);
  }

  adminLogin(body: {}): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/auth/loginx`, body, {}).pipe(
      catchError(this.handleError)
    );
  }

  updateAdminPerm(body: {}, id: string): Observable<{}> {
    return this.httpClient.put(`${this.apilink}/admin/permission/${id}`, body, {});
  }

  revokeAdminPerm(body: {}, id: string): Observable<{}> {
    return this.httpClient.put(`${this.apilink}/admin/revoke/${id}`, body, {});
  }

  createBranch(body: {}): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/branch`, body, {});
  }

  getBranch(): Observable<{}> {
    return this.httpClient.get(`${this.apilink}/branch`, {});
  }

  activateBranch(body: {}, id: string): Observable<{}> {
    return this.httpClient.post(`${this.apilink}/branch/activate/${id}`, body, {});
  }
}
