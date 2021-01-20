import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FeatureService } from './feature.service';
@Injectable({
  providedIn: 'root'
})
export class HttperrorService implements HttpInterceptor {

  constructor(private fetature:FeatureService) { }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest)
    .pipe(catchError(err=>{
      let errMsg="";
      // cal the service;
      this.fetature.showError(err);
      return throwError("Invalid Http Request/no network")
    }))
  }
}
