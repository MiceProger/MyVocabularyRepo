import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    constructor(private router:Router, private http:HttpClient) {}
    ngOnInit(): void { /* this.userService.authenticate(undefined, undefined) */}

   /*  authenticated():boolean {return this.userService.authenticated} */


    
    /* public logOut(): void{
        this.http.post('logout', {}).subscribe(()=> {
            this.userService.authenticated = true, 
            this.router.navigateByUrl('/login')});
    
      } */
    
   
}