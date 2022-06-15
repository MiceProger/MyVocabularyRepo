declare const Buffer:any;
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username:string;
  password:string;
  machingPassword:string;
  errorMessage:string;
  errorable:boolean = false ;
  errordiv: HTMLElement| null ;
  fieldTextType: boolean;
  

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }


  signUp() {
    const user:User = {username: this.username, password: this.password};
    this.errordiv = document.getElementById("emptyDiv") ; 
      this.preCheckForm();
      if(this.errorable) return;
      this.userService.signUp(this.username, this.password).subscribe(() => {
        console.log("registration is successful so lets log in " + user);
        this.userService.login(this.username, this.password).subscribe();
        
        this.router.navigateByUrl("/vocabularyWords");},
      (err: HttpErrorResponse) => {
        
        this.errorMessage = err.error.message;
        console.log(err);
        
        this.errordiv!.className = "alert alert-danger";
      }
    )
  }
  

  preCheckForm(): string|any{

    if(this.username.length < 8){
      this.errorMessage = "your user name is too short"
      this.errordiv!.className = "alert alert-danger";
      this.errorable = true;
    }

    else if(this.password.length < 8){
      this.errorMessage = "your password is too short"
      this.errordiv!.className = "alert alert-danger";
      this.errorable = true;
    }
    
    else if(this.password != this.machingPassword){
      this.errorMessage = "maching password is not mathing to your password"
      this.errordiv!.className = "alert alert-danger";
      this.errorable = true;
    }

    else{
      this.errordiv!.className = "emptyDiv";
      this.errorMessage = '';
    }

  }

  ToggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType
  }

}
