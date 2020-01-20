import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Profile } from './profile';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // updateProfile(username: string) {
  //   throw new Error("Method not implemented.");
  // }
  
  private username:string;
  private access_token :string= '2c9426754e2a96d7987835c686cf88beca8be7f9';
  private baseUrl:string = "https://api.github.com/users/"
  
  constructor(private http:HttpClient) {
    console.log("service is now ready");
    this.username ="antomuli"
   }
   getProfileInfo() {
     return this.http.get( this.baseUrl+this.username+"?access_token=" +this.access_token);
   }
getProfileRepos() {
  return this.http.get( this.baseUrl+ this.username+ "/repos?access_token="+this.access_token);
     
}
updateProfile(username:string) {
  this.username=username;
}

}

