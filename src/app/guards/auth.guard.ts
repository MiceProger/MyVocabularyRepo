import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { VocabularyWord } from '../vocabularyWord';
import { WordService } from '../word.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService:UserService, private wordService:WordService) {}

  serverAnswer:boolean;

  canActivate(){
    this.wordService.getWords().subscribe((response:VocabularyWord[])=> {this.serverAnswer = true}, (err:HttpErrorResponse)=>{this.serverAnswer = false}) 
    if(this.serverAnswer) return true;
    else {this.router.navigateByUrl("/logIn"); return false}
  }
}
