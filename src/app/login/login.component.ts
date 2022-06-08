/* declare const Buffer:any; */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string;
  password:string;

  errorMessage:string;
  errordiv: HTMLElement| null ;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient,
      private userService:UserService
  ) { }

  ngOnInit() {
      sessionStorage.setItem('token', '');
  }


  /* login() {
      this.userService.login(this.username, this.password).subscribe((isValid) => {
          if (isValid) {
              sessionStorage.setItem(
                'token',
                Buffer.from(this.username + ':' + this.password, 'utf8').toString('base64')
              );
              this.router.navigateByUrl("/vocabularyWords");
          } else {
              alert("Authentication failed.");
          }
      });
  } */

  login() {
    this.errordiv = document.getElementById("emptyDiv") ; 

      console.log(this.username+" : "+ this.password)
      this.userService.login(this.username, this.password).pipe(first()).subscribe({
        next : () => {
          console.log("Response from the server comes in lets navigate to /vocabulary.");

          this.router.navigateByUrl("/vocabularyWords");
        },

        error: (err: HttpErrorResponse) => {
          console.log("Server throws eror"+ err);
          
          this.errorMessage = err.error.message;
          this.errordiv!.className = "alert alert-danger";
        }
      }
    )
  }
}
