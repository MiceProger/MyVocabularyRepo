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

  constructor(private router: Router, private userService:UserService, private wordService:WordService, private accountService:UserService) {}

  serverAnswer:boolean;

  canActivate(){
    const user = this.accountService.userValue;
    
    if (user) {
      // authorised so return true
      return true;
  }

    this.router.navigateByUrl("/logIn");
        return false;
  }
}
