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

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token')
    if(token && token != "") {
      console.log("Intercepted Request")
      let clone = request.clone({setHeaders : { "Authorization" : "bearer "+token}})
      return next.handle(clone)
    }
    return next.handle(request);
  }
}
