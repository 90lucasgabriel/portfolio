import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent}                      from '@angular/common/http';
import { Injectable, Inject }       from '@angular/core';
import { Observable }               from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Headers: 'Content-Type: application/json'
            }
        });
        return next.handle(request);
    }
}