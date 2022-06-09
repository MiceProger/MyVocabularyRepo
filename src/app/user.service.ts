/* declare const Buffer:any; */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<any>;
  private apiServerUrl= environment.apiBaseUrl;
  public user: Observable<User>;
  
  constructor(private http:HttpClient, private router:Router) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable(); 
  }


  login(username:string,password:string){
   /*  const headers = new HttpHeaders({ Authorization: 'Basic ' + (username + ':' + password ) }); */
    
    console.log("login request comes to the server");
    
    return this.http.post<User>(`${this.apiServerUrl}/login`, {username, password})
    .pipe(map(user => {

      console.log("hello " + user);
      
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next("empty")
    this.router.navigateByUrl("/logIn");
}

  signUp(username:string, password:string) {
      let url = `${this.apiServerUrl}/signUp`;
      let credentials = {username, password}
      console.log("Waiting for the response from the server");
      return this.http.post<boolean>(url, credentials);
  }

  public get userValue(): User {
    return this.userSubject.value;
}
}
