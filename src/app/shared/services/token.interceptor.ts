import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  tokenData: string | null = '';
  constructor() {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('access-token')) {
      this.tokenData = localStorage.getItem('access-token')
    }

    if (this.tokenData) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenData}`
        }
      })
    }

    return next.handle(request);
  }
}
