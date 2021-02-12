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

  constructor() {}

  tokenData = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTMxMDgzZDY2YjBiYTRkNWMwOGJiMSIsImtleSI6ImFnaWdpQGdtYWlsLmNvbSIsImlhdCI6MTYwMzU2NDIzMywiZXhwIjoxNjAzNjUwNjMzfQ.vwXqjNiCXZ8zwUgXipbr3rtE3vlI6kmj5zeQ4HY3NvY'

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.tokenData}`
      }
    })
    console.log(this.tokenData)
    return next.handle(request);
  }
}
