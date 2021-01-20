import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  


  baseUrl:string="";
  _url:string="assets/url/product.json";
  constructor( private http:HttpClient) { }
  public getItem(){
    return this.http.get(this._url)
  }
  isUserLoggedIn(){
    return false;    //make false canActivated route is activated 
  }

  loginUser(user){
    return this.http.post(this.baseUrl,user)
  }
  getToken(){
    localStorage.getItem('token');
  }

  showError(Errors:string){
    console.log("Error services",Errors);
    //write code based on reqirment
  }
}
