/* declare const Buffer:any; */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl= environment.apiBaseUrl;
  
  private user:{username:string, password:string};
  

  constructor(private http:HttpClient) { }

  getUser(){
    return this.user;
  }

  login(username:string,password:string){
   /*  const headers = new HttpHeaders({ Authorization: 'Basic ' + (username + ':' + password ) }); */
    this.user = {username, password}
    return this.http.post<any>(`${this.apiServerUrl}/login`, this.user)
  }

  signUp(username:string, password:string) {
      let url = `${this.apiServerUrl}/signUp`;
      let credentials = {username, password}
      console.log("Waiting for the response from the server");
      return this.http.post<boolean>(url, credentials);
  }
}
