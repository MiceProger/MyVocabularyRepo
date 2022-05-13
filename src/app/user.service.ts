declare const Buffer:any;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + Buffer.from(username + ':' + password, 'utf8').toString('base64') });
    return this.http.get("http://localhost:8080/login")
  }

  signUp(username:string, password:string) {
      let url = 'http://localhost:8080/signUp';
      let credentials = {username, password}
      console.log("Waiting for the response from the server");
      return this.http.post(url, credentials);
  }
}
