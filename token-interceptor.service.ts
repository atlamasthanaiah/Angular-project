import { Injectable,Injector } from '@angular/core';
import { from } from 'rxjs';
import { HttpInterceptor } from '@angular/common/http';
import { FeatureService } from './feature.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req,next){
    //let FeatureService=this.in.get()   private in:Injector
    let tokenizedTeq=req.clone({
      setHeaders:{
        Authorization:'sample xx.yy.zz'
      }
    })
    return next.handle(tokenizedTeq)
  }
}
