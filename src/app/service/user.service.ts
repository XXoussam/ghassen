import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserAuthService} from "./user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = "http://localhost:8898";
  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(private http: HttpClient,private userAuthService:UserAuthService) {}

  public login(loginData: any){
    return this.http.post(this.PATH_OF_API+'/authenticate',loginData,{headers:this.requestHeader});
  }

  public forUser(){
    return this.http.get(this.PATH_OF_API+'/forUser',{responseType:'text'});
  }

  public forAdmin(){
    return this.http.get(this.PATH_OF_API+'/forAdmin',{responseType:'text'});
  }

  // @ts-ignore
  public roleMatch(allowedRoles:any):boolean{
    let isMatch =false;
    const userRoles:any = this.userAuthService.getRoles();
    if (userRoles!=null && userRoles){
      for (let i=0;i<userRoles.length;i++){
        for (let j=0;j<allowedRoles.length;j++){
          if (userRoles[i].roleName === allowedRoles[j]){
            isMatch = true ;
            return isMatch;
          }else {
            return isMatch;
          }
        }
      }
    }
  }




}
