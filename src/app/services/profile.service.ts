import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Profile } from './profile';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private username:string;
access_token = '2c9426754e2a96d7987835c686cf88beca8be7f9';
  
  constructor(private http:HttpClient) {
    console.log("service is now ready");
    this.username ="antomuli";
   }
   getProfileInfo() {
     return this.http.get( "https://api.github.com/users/access_token=" + this.access_token)
     .map(res => res.json()); 
   }
getProfileRepos() {
  return this.http.get( "https://api.github.com/users/access_token=" + this.access_token)
     .map(res => res.json()); 
}
}

