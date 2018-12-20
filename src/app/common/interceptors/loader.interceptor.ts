import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent}                      from '@angular/common/http';
import { Injectable, Inject }       from '@angular/core';
import { LoaderService }            from '../services/loader.service';

import { Observable }               from 'rxjs';
import { take, finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loader: LoaderService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('notify');
        this.loader.onStarted(request);
        return next
            .handle(request).pipe(
            finalize(() => this.loader.onFinished(request)));
    }
}